/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddDateTimeInput,
  type RemoveDateTimeInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/date-time/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("DateTime Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addDateTime operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddDateTimeInput = generateMock(z.AddDateTimeInputSchema());

    const updatedDocument = reducer(document, creators.addDateTime(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_DATE_TIME");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeDateTime operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveDateTimeInput = generateMock(
      z.RemoveDateTimeInputSchema(),
    );

    const updatedDocument = reducer(document, creators.removeDateTime(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_DATE_TIME");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
