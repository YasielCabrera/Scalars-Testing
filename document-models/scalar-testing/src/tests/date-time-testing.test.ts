/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import { z, AddDateTimeInput, RemoveDatetimeInput } from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/date-time-testing/creators";
import { ScalarTestingDocument } from "../../gen/types";

describe("DateTimeTesting Operations", () => {
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
  it("should handle removeDatetime operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveDatetimeInput = generateMock(
      z.RemoveDatetimeInputSchema(),
    );

    const updatedDocument = reducer(document, creators.removeDatetime(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_DATETIME");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
