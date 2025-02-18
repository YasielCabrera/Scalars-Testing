/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, AddNodeInput, RemoveNodeInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/sidebar-testing/creators";
import { SidebarTestingDocument } from "../../gen/types";

describe("SidebarTesting Operations", () => {
  let document: SidebarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addNode operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddNodeInput = generateMock(z.AddNodeInputSchema());

    const updatedDocument = reducer(document, creators.addNode(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_NODE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeNode operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveNodeInput = generateMock(z.RemoveNodeInputSchema());

    const updatedDocument = reducer(document, creators.removeNode(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_NODE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
