/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type Subgraph } from "@powerhousedao/reactor-api";
import { addFile } from "document-drive";
import { actions } from "../../document-models/object-set-table-testing/index.js";
import { generateId, hashKey } from "document-model";

const DEFAULT_DRIVE_ID = "powerhouse";

export const getResolvers = (subgraph: Subgraph): Record<string, any> => {
  const reactor = subgraph.reactor;

  return {
    Query: {
      ObjectSetTableTesting: async (_: any, args: any, ctx: any) => {
        return {
          getDocument: async (args: any) => {
            const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
            const docId: string = args.docId || "";
            const doc = await reactor.getDocument(driveId, docId);
            return {
              id: docId,
              driveId: driveId,
              ...doc,
              state: doc.state.global,
              stateJSON: doc.state.global,
              revision: doc.revision.global,
            };
          },
          getDocuments: async (args: any) => {
            const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
            const docsIds = await reactor.getDocuments(driveId);
            const docs = await Promise.all(
              docsIds.map(async (docId) => {
                const doc = await reactor.getDocument(driveId, docId);
                return {
                  id: docId,
                  driveId: driveId,
                  ...doc,
                  state: doc.state.global,
                  stateJSON: doc.state.global,
                  revision: doc.revision.global,
                };
              }),
            );

            return docs.filter(
              (doc) => doc.documentType === "dspot/object-set-table-testing",
            );
          },
        };
      },
    },
    Mutation: {
      ObjectSetTableTesting_createDocument: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId = generateId();

        await reactor.addDriveAction(
          driveId,
          addFile({
            id: docId,
            name: args.name,
            documentType: "dspot/object-set-table-testing",
            synchronizationUnits: [
              {
                branch: "main",
                scope: "global",
                syncId: hashKey(),
              },
              {
                branch: "main",
                scope: "local",
                syncId: hashKey(),
              },
            ],
          }),
        );

        return docId;
      },

      ObjectSetTableTesting_addAccount: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addAccount({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ObjectSetTableTesting_removeAccount: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeAccount({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ObjectSetTableTesting_updateAccount: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.updateAccount({ ...args.input }),
        );

        return doc.revision.global + 1;
      },
    },
  };
};
