/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddEmailInput,
  type RemoveEmailInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/email-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("EmailTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addEmail operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddEmailInput = generateMock(z.AddEmailInputSchema());

    const updatedDocument = reducer(document, creators.addEmail(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_EMAIL");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeEmail operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveEmailInput = generateMock(z.RemoveEmailInputSchema());

    const updatedDocument = reducer(document, creators.removeEmail(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_EMAIL");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
