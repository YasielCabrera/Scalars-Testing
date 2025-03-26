/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddStringInput,
  type RemoveStringInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/string-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

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
