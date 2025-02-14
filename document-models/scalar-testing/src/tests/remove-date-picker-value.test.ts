/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, RemoveDatePickerValueInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/remove-date-picker-value/creators";
import { ScalarTestingDocument } from "../../gen/types";

describe("RemoveDatePickerValue Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle removeDatePickerValue operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveDatePickerValueInput = generateMock(
      z.RemoveDatePickerValueInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.removeDatePickerValue(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "REMOVE_DATE_PICKER_VALUE",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
