/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, AddAidInput, RemoveAidInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/aid-testing/creators";
import { ScalarTestingDocument } from "../../gen/types";

describe("AidTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addAid operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddAidInput = generateMock(z.AddAidInputSchema());

    const updatedDocument = reducer(document, creators.addAid(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_AID");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeAid operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveAidInput = generateMock(z.RemoveAidInputSchema());

    const updatedDocument = reducer(document, creators.removeAid(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_AID");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
