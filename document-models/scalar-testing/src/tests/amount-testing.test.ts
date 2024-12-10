/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, AddAmountInput, RemoveAmountInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/amount-testing/creators";
import { ScalarTestingDocument } from "../../gen/types";

describe("AmountTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addAmount operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddAmountInput = generateMock(z.AddAmountInputSchema());

    const updatedDocument = reducer(document, creators.addAmount(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_AMOUNT");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeAmount operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveAmountInput = generateMock(z.RemoveAmountInputSchema());

    const updatedDocument = reducer(document, creators.removeAmount(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_AMOUNT");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
