/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddDateInput,
  type RemoveDateInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/date-field-module/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("DateFieldModule Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addDate operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddDateInput = generateMock(z.AddDateInputSchema());

    const updatedDocument = reducer(document, creators.addDate(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_DATE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeDate operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveDateInput = generateMock(z.RemoveDateInputSchema());

    const updatedDocument = reducer(document, creators.removeDate(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_DATE");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
