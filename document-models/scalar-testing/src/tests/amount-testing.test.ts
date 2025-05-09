/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddAmountMoneyInput,
  type AddAmountPercentageInput,
  type AddAmountTokensInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/amount-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("AmountTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addAmountMoney operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddAmountMoneyInput = generateMock(
      z.AddAmountMoneyInputSchema(),
    );

    const updatedDocument = reducer(document, creators.addAmountMoney(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_AMOUNT_MONEY");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle addAmountPercentage operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddAmountPercentageInput = generateMock(
      z.AddAmountPercentageInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.addAmountPercentage(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "ADD_AMOUNT_PERCENTAGE",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle addAmountTokens operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddAmountTokensInput = generateMock(
      z.AddAmountTokensInputSchema(),
    );

    const updatedDocument = reducer(document, creators.addAmountTokens(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_AMOUNT_TOKENS");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
