/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddNumberInput,
  type RemoveNumberInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/numbers-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("NumbersTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addNumber operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddNumberInput = generateMock(z.AddNumberInputSchema());

    const updatedDocument = reducer(document, creators.addNumber(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_NUMBER");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeNumber operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveNumberInput = generateMock(z.RemoveNumberInputSchema());

    const updatedDocument = reducer(document, creators.removeNumber(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_NUMBER");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
