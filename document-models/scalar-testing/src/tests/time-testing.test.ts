/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddTimeInput,
  type RemoveTimeInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/time-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("TimeTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addTime operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddTimeInput = generateMock(z.AddTimeInputSchema());

    const updatedDocument = reducer(document, creators.addTime(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_TIME");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeTime operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveTimeInput = generateMock(z.RemoveTimeInputSchema());

    const updatedDocument = reducer(document, creators.removeTime(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_TIME");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
