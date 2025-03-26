/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddPhidInput,
  type RemovePhidInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/phid-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("PhidTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addPhid operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddPhidInput = generateMock(z.AddPhidInputSchema());

    const updatedDocument = reducer(document, creators.addPhid(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_PHID");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removePhid operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemovePhidInput = generateMock(z.RemovePhidInputSchema());

    const updatedDocument = reducer(document, creators.removePhid(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_PHID");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
