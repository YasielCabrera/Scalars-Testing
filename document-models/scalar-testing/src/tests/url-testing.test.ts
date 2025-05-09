/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import utils from "../../gen/utils.js";
import {
  z,
  type AddUrlInput,
  type RemoveUrlInput,
} from "../../gen/schema/index.js";
import { reducer } from "../../gen/reducer.js";
import * as creators from "../../gen/url-testing/creators.js";
import type { ScalarTestingDocument } from "../../gen/types.js";

describe("UrlTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addUrl operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddUrlInput = generateMock(z.AddUrlInputSchema());

    const updatedDocument = reducer(document, creators.addUrl(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_URL");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeUrl operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveUrlInput = generateMock(z.RemoveUrlInputSchema());

    const updatedDocument = reducer(document, creators.removeUrl(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_URL");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
