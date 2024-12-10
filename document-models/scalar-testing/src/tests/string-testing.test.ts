/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, AddStringInput, RemoveStringInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/string-testing/creators";
import { ScalarTestingDocument } from "../../gen/types";

describe("StringTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addString operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddStringInput = generateMock(z.AddStringInputSchema());

    const updatedDocument = reducer(document, creators.addString(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_STRING");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeString operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveStringInput = generateMock(z.RemoveStringInputSchema());

    const updatedDocument = reducer(document, creators.removeString(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_STRING");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
