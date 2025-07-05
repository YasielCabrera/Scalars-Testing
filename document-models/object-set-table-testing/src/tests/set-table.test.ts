/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddAccountInput,
  type RemoveAccountInput,
  type UpdateAccountInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/set-table/creators.js";
import type { ObjectSetTableTestingDocument } from "../../gen/types.js";

describe("SetTable Operations", () => {
  let document: ObjectSetTableTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addAccount operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddAccountInput = generateMock(z.AddAccountInputSchema());

    const updatedDocument = reducer(document, creators.addAccount(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_ACCOUNT");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeAccount operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveAccountInput = generateMock(
      z.RemoveAccountInputSchema(),
    );

    const updatedDocument = reducer(document, creators.removeAccount(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_ACCOUNT");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle updateAccount operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: UpdateAccountInput = generateMock(
      z.UpdateAccountInputSchema(),
    );

    const updatedDocument = reducer(document, creators.updateAccount(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("UPDATE_ACCOUNT");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
