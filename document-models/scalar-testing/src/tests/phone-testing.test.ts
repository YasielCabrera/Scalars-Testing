/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { describe, it, expect, beforeEach } from "vitest";
import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddPhoneNumberInput,
  type RemovePhoneNumberInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/phone-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("PhoneTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addPhoneNumber operation", () => {
    const input: AddPhoneNumberInput = generateMock(
      z.AddPhoneNumberInputSchema(),
    );

    const updatedDocument = reducer(document, creators.addPhoneNumber(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_PHONE_NUMBER");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removePhoneNumber operation", () => {
    const input: RemovePhoneNumberInput = generateMock(
      z.RemovePhoneNumberInputSchema(),
    );

    const updatedDocument = reducer(
      document,
      creators.removePhoneNumber(input),
    );

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe(
      "REMOVE_PHONE_NUMBER",
    );
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
