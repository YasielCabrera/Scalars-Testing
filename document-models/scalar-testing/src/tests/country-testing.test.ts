/**
 * This is a scaffold file meant for customization:
 * - change it by adding new tests or modifying the existing ones
 */

import { generateMock } from "@powerhousedao/codegen";
import { utils as documentModelUtils } from "document-model/document";

import utils from "../../gen/utils";
import {
  z,
  AddCountryInput,
  AddCountriesInput,
  RemoveCountryInput,
} from "../../gen/schema";
import { reducer } from "../../gen/reducer";
import * as creators from "../../gen/country-testing/creators";
import { ScalarTestingDocument } from "../../gen/types";

describe("CountryTesting Operations", () => {
  let document: ScalarTestingDocument;

  beforeEach(() => {
    document = utils.createDocument();
  });

  it("should handle addCountry operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddCountryInput = generateMock(z.AddCountryInputSchema());

    const updatedDocument = reducer(document, creators.addCountry(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_COUNTRY");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle addCountries operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: AddCountriesInput = generateMock(z.AddCountriesInputSchema());

    const updatedDocument = reducer(document, creators.addCountries(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("ADD_COUNTRIES");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
  it("should handle removeCountry operation", () => {
    // generate a random id
    // const id = documentModelUtils.hashKey();

    const input: RemoveCountryInput = generateMock(
      z.RemoveCountryInputSchema(),
    );

    const updatedDocument = reducer(document, creators.removeCountry(input));

    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].type).toBe("REMOVE_COUNTRY");
    expect(updatedDocument.operations.global[0].input).toStrictEqual(input);
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
