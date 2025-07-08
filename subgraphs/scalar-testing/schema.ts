import { gql } from "graphql-tag";
import type { DocumentNode } from "graphql";

export const schema: DocumentNode = gql`
  """
  Subgraph definition for ScalarTesting (dspot/testing)
  """
  type ScalarTestingState {
    booleans: [BooleanFieldType!]!
    numbers: [NumberFieldType!]!
    strings: [StringFieldType!]!
    urls: [URLFieldType!]!
    countries: [CountryFieldType!]!
    currency: [CurrencyFieldType!]!
    enums: [EnumFieldType!]!
    amount: [AmountFieldType!]!
    amountPercentage: [AmountFieldPercentageType!]!
    amountFiat: [AmountFiatFieldType!]!
    amountCrypto: [AmountCryptoFieldType!]!
    amountCurrency: [AmountCurrencyFieldType!]!
    phids: [PHIDFieldType!]!
    aids: [AIDFieldType!]!
    oids: [OIDFieldType!]!
    dropdown: [DropDown!]!
    date: [DateFieldType!]!
    time: [TimeFieldType!]!
    datetime: [DateTimeFieldType!]!
    emails: [EmailAddressFieldType!]!
  }

  type BooleanFieldType {
    id: ID!
    boolean: Boolean!
  }

  type NumberFieldType {
    id: ID!
    integer: Int
    float: Float
    bigInt: Int
  }

  type StringFieldType {
    id: ID!
    string: String
  }

  type URLFieldType {
    id: ID!
    url: URL
  }

  type CountryFieldType {
    id: ID!
    country: String
  }

  type CurrencyFieldType {
    id: ID!
    currency: Currency
  }

  type EnumFieldType {
    id: ID!
    enum: String
    enumMultiple: [String]
  }
  type DropDown {
    id: ID!
    value: String
  }

  type AmountFieldType {
    id: ID!
    value: Amount
  }

  type AmountFieldPercentageType {
    id: ID!
    value: Amount_Percentage
  }

  type AmountFiatFieldType {
    id: ID!
    value: Amount_Fiat
  }

  type AmountCryptoFieldType {
    id: ID!
    value: Amount_Crypto
  }
  type AmountCurrencyFieldType {
    id: ID!
    value: Amount_Currency
  }

  type PHIDFieldType {
    id: ID!
    phid: String
  }

  type AIDFieldType {
    id: ID!
    aid: String
  }

  type OIDFieldType {
    id: ID!
    oid: String
  }
  type DateFieldType {
    id: ID!
    date: String
  }
  type TimeFieldType {
    id: ID!
    time: String
  }
  type DateTimeFieldType {
    id: ID!
    datetime: String
  }

  type EmailAddressFieldType {
    id: ID!
    email: EmailAddress
  }

  """
  Queries: ScalarTesting
  """
  type ScalarTestingQueries {
    getDocument(driveId: String, docId: PHID): ScalarTesting
    getDocuments: [ScalarTesting!]
  }

  type Query {
    ScalarTesting: ScalarTestingQueries
  }

  """
  Mutations: ScalarTesting
  """
  type Mutation {
    ScalarTesting_createDocument(driveId: String, name: String): String

    ScalarTesting_addBoolean(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddBooleanInput
    ): Int
    ScalarTesting_removeBoolean(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveBooleanInput
    ): Int
    ScalarTesting_addNumber(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddNumberInput
    ): Int
    ScalarTesting_removeNumber(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveNumberInput
    ): Int
    ScalarTesting_addString(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddStringInput
    ): Int
    ScalarTesting_removeString(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveStringInput
    ): Int
    ScalarTesting_addUrl(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddUrlInput
    ): Int
    ScalarTesting_removeUrl(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveUrlInput
    ): Int
    ScalarTesting_addCountry(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddCountryInput
    ): Int
    ScalarTesting_addCountries(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddCountriesInput
    ): Int
    ScalarTesting_removeCountry(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveCountryInput
    ): Int
    ScalarTesting_addEnum(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddEnumInput
    ): Int
    ScalarTesting_removeEnum(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveEnumInput
    ): Int
    ScalarTesting_addCurrency(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddCurrencyInput
    ): Int
    ScalarTesting_removeCurrency(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveCurrencyInput
    ): Int
    ScalarTesting_addAmount(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddAmountInput
    ): Int
    ScalarTesting_addAmountPercentage(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddAmountPercentageInput
    ): Int
    ScalarTesting_removeAmount(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveAmountInput
    ): Int
    ScalarTesting_removePercent(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemovePercentInput
    ): Int
    ScalarTesting_addAmountFiat(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddAmountFiatInput
    ): Int
    ScalarTesting_removeAmountFiat(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveAmountFiatInput
    ): Int
    ScalarTesting_addAmountCrypto(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddAmountCryptoInput
    ): Int
    ScalarTesting_removeAmountCrypto(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveAmountCryptoInput
    ): Int
    ScalarTesting_addAmountCurrency(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddAmountCurrencyInput
    ): Int
    ScalarTesting_removeAmountCurrency(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveAmountCurrencyInput
    ): Int
    ScalarTesting_addPhid(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddPhidInput
    ): Int
    ScalarTesting_removePhid(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemovePhidInput
    ): Int
    ScalarTesting_addValueDropdown(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddValueDropdownInput
    ): Int
    ScalarTesting_addAid(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddAidInput
    ): Int
    ScalarTesting_removeAid(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveAidInput
    ): Int
    ScalarTesting_addDate(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddDateInput
    ): Int
    ScalarTesting_removeDate(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveDateInput
    ): Int
    ScalarTesting_addTime(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddTimeInput
    ): Int
    ScalarTesting_removeTime(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveTimeInput
    ): Int
    ScalarTesting_addDateTime(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddDateTimeInput
    ): Int
    ScalarTesting_removeDateTime(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveDateTimeInput
    ): Int
    ScalarTesting_addOid(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddOidInput
    ): Int
    ScalarTesting_removeOid(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveOidInput
    ): Int
    ScalarTesting_addEmail(
      driveId: String
      docId: PHID
      input: ScalarTesting_AddEmailInput
    ): Int
    ScalarTesting_removeEmail(
      driveId: String
      docId: PHID
      input: ScalarTesting_RemoveEmailInput
    ): Int
  }

  """
  Module: BooleanTesting
  """
  input ScalarTesting_AddBooleanInput {
    id: ID!
    boolean: Boolean!
  }
  input ScalarTesting_RemoveBooleanInput {
    id: ID!
  }

  """
  Module: NumbersTesting
  """
  input ScalarTesting_AddNumberInput {
    id: ID!
    integer: Int
    float: Float
    bigInt: Int
  }
  input ScalarTesting_RemoveNumberInput {
    id: ID!
  }

  """
  Module: StringTesting
  """
  input ScalarTesting_AddStringInput {
    id: ID!
    string: String
  }
  input ScalarTesting_RemoveStringInput {
    id: ID!
  }

  """
  Module: UrlTesting
  """
  input ScalarTesting_AddUrlInput {
    id: ID!
    url: URL
  }
  input ScalarTesting_RemoveUrlInput {
    id: ID!
  }

  """
  Module: CountryTesting
  """
  input ScalarTesting_AddCountryInput {
    id: ID!
    country: String
  }
  input ScalarTesting_AddCountriesInput {
    id: ID!
    country: [String]
  }
  input ScalarTesting_RemoveCountryInput {
    id: ID!
  }

  """
  Module: EnumTesting
  """
  input ScalarTesting_AddEnumInput {
    id: ID!
    enum: String
    enumMultiple: [String]
  }
  input ScalarTesting_RemoveEnumInput {
    id: ID!
  }

  """
  Module: CurrencyTesting
  """
  input ScalarTesting_AddCurrencyInput {
    id: ID!
    currency: Currency
  }
  input ScalarTesting_RemoveCurrencyInput {
    id: ID!
  }

  """
  Module: AmountTesting
  """
  input ScalarTesting_AddAmountInput {
    id: ID!
    value: Amount
  }
  input ScalarTesting_AddAmountPercentageInput {
    id: ID!
    value: Amount_Percentage
  }
  input ScalarTesting_RemoveAmountInput {
    id: ID!
  }
  input ScalarTesting_RemovePercentInput {
    id: ID!
  }
  input ScalarTesting_AddAmountFiatInput {
    id: ID!
    value: Amount_Fiat
  }
  input ScalarTesting_RemoveAmountFiatInput {
    id: ID!
  }
  input ScalarTesting_AddAmountCryptoInput {
    id: ID!
    value: Amount_Crypto
  }
  input ScalarTesting_RemoveAmountCryptoInput {
    id: ID!
  }
  input ScalarTesting_AddAmountCurrencyInput {
    id: ID!
    value: Amount_Currency
  }
  input ScalarTesting_RemoveAmountCurrencyInput {
    id: ID!
  }

  """
  Module: PhidTesting
  """
  input ScalarTesting_AddPhidInput {
    id: ID!
    phid: String
  }
  input ScalarTesting_RemovePhidInput {
    id: ID!
  }

  """
  Module: DropDown
  """
  input ScalarTesting_AddValueDropdownInput {
    id: ID!
    value: String
  }

  """
  Module: AidTesting
  """
  input ScalarTesting_AddAidInput {
    id: ID!
    aid: String
  }
  input ScalarTesting_RemoveAidInput {
    id: ID!
  }

  """
  Module: DateFieldModule
  """
  input ScalarTesting_AddDateInput {
    id: ID!
    date: String
  }
  input ScalarTesting_RemoveDateInput {
    id: ID!
  }

  """
  Module: TimeTesting
  """
  input ScalarTesting_AddTimeInput {
    id: ID!
    time: String
  }
  input ScalarTesting_RemoveTimeInput {
    id: ID!
  }

  """
  Module: DateTime
  """
  input ScalarTesting_AddDateTimeInput {
    id: ID!
    datetime: String
  }
  input ScalarTesting_RemoveDateTimeInput {
    id: ID!
  }

  """
  Module: OidTesting
  """
  input ScalarTesting_AddOidInput {
    id: ID!
    oid: String
  }
  input ScalarTesting_RemoveOidInput {
    id: ID!
  }

  """
  Module: EmailTesting
  """
  input ScalarTesting_AddEmailInput {
    id: ID!
    email: EmailAddress
  }
  input ScalarTesting_RemoveEmailInput {
    id: ID!
  }
`;
