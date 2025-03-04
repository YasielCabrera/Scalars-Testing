/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, AddValueDropdownInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/drop-down/creators";
import { ScalarTestingDocument } from "../../gen/types";

describe("DropDown Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addValueDropdown operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddValueDropdownInput = generateMock(
      z.AddValueDropdownInputSchema(),
    );

    const updatedDocument = reducer(document, creators.addValueDropdown(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "ADD_VALUE_DROPDOWN",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
