/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddCurrencyInput,
  type RemoveCurrencyInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/currency-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("CurrencyTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addCurrency operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddCurrencyInput = generateMock(z.AddCurrencyInputSchema());

    const updatedDocument = reducer(document, creators.addCurrency(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_CURRENCY");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeCurrency operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveCurrencyInput = generateMock(
      z.RemoveCurrencyInputSchema(),
    );

    const updatedDocument = reducer(document, creators.removeCurrency(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_CURRENCY");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
