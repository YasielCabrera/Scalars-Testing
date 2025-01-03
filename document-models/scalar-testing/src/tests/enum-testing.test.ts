/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, AddEnumInput, RemoveEnumInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/enum-testing/creators";
import { ScalarTestingDocument } from "../../gen/types";

describe("EnumTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addEnum operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddEnumInput = generateMock(z.AddEnumInputSchema());

    const updatedDocument = reducer(document, creators.addEnum(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_ENUM");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeEnum operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveEnumInput = generateMock(z.RemoveEnumInputSchema());

    const updatedDocument = reducer(document, creators.removeEnum(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_ENUM");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});