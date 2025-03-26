/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddBooleanInput,
  type RemoveBooleanInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/boolean-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("BooleanTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addBoolean operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddBooleanInput = generateMock(z.AddBooleanInputSchema());

    const updatedDocument = reducer(document, creators.addBoolean(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_BOOLEAN");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeBoolean operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveBooleanInput = generateMock(
      z.RemoveBooleanInputSchema(),
    );

    const updatedDocument = reducer(document, creators.removeBoolean(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_BOOLEAN");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
