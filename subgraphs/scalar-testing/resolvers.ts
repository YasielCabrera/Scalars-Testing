/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type Subgraph } from "@powerhousedao/reactor-api";
import { addFile } from "document-drive";
import { actions } from "../../document-models/scalar-testing/index.js";
import { generateId, hashKey } from "document-model";

const DEFAULT_DRIVE_ID = "powerhouse";

export const getResolvers = (subgraph: Subgraph): Record<string, any> => {
  const reactor = subgraph.reactor;

  return {
    Query: {
      ScalarTesting: async (_: any, args: any, ctx: any) => {
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

            return docs.filter((doc) => doc.documentType === "dspot/testing");
          },
        };
      },
    },
    Mutation: {
      ScalarTesting_createDocument: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId = generateId();

        await reactor.addDriveAction(
          driveId,
          addFile({
            id: docId,
            name: args.name,
            documentType: "dspot/testing",
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

      ScalarTesting_addBoolean: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addBoolean({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeBoolean: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeBoolean({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addNumber: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addNumber({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeNumber: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeNumber({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addString: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addString({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeString: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeString({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addUrl: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addUrl({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeUrl: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeUrl({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addCountry: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addCountry({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addCountries: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addCountries({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeCountry: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeCountry({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addEnum: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addEnum({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeEnum: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeEnum({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addCurrency: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addCurrency({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeCurrency: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeCurrency({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addAmount: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addAmount({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addAmountPercentage: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addAmountPercentage({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeAmount: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeAmount({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removePercent: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removePercent({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addAmountFiat: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addAmountFiat({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeAmountFiat: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeAmountFiat({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addAmountCrypto: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addAmountCrypto({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeAmountCrypto: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeAmountCrypto({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addAmountCurrency: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addAmountCurrency({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeAmountCurrency: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeAmountCurrency({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addPhid: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addPhid({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removePhid: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removePhid({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addValueDropdown: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addValueDropdown({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addAid: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addAid({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeAid: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeAid({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addDate: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addDate({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeDate: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeDate({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addTime: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addTime({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeTime: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeTime({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addDateTime: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addDateTime({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeDateTime: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeDateTime({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addOid: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addOid({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeOid: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeOid({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_addEmail: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.addEmail({ ...args.input }),
        );

        return doc.revision.global + 1;
      },

      ScalarTesting_removeEmail: async (_: any, args: any) => {
        const driveId: string = args.driveId || DEFAULT_DRIVE_ID;
        const docId: string = args.docId || "";
        const doc = await reactor.getDocument(driveId, docId);

        await reactor.addAction(
          driveId,
          docId,
          actions.removeEmail({ ...args.input }),
        );

        return doc.revision.global + 1;
      },
    },
  };
};
