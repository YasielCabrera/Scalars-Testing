/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import utils, {
  initialGlobalState,
  initialLocalState,
} from "../../gen/utils.js";

describe("Scalar Testing Document Model", () => {
  it("should create a new Scalar Testing document", () => {
    const document = utils.createDocument();

    expect(document).toBeDefined();
    expect(document.header.documentType).toBe("dspot/testing");
  });

  it("should create a new Scalar Testing document with a valid initial state", () => {
    const document = utils.createDocument();
    expect(document.state.global).toStrictEqual(initialGlobalState);
    expect(document.state.local).toStrictEqual(initialLocalState);
  });
});
