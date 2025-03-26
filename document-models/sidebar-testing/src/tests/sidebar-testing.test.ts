/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddNodeInput,
  type RemoveNodeInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/sidebar-testing/creators.js";
import type { SidebarTestingDocument } from "../../gen/types.js";

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
