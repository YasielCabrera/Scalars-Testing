import { gql } from "graphql-tag";
import type { DocumentNode } from "graphql";

export const schema: DocumentNode = gql`
  """
  Subgraph definition for ObjectSetTableTesting (dspot/object-set-table-testing)
  """
  type ObjectSetTableTestingState {
    accounts: [AccountEntry!]!
  }

  type AccountEntry {
    id: OID!
    name: OLabel
    account: String
    budgetPath: String
    type: AccountType
  }

  enum AccountType {
    Protocol
    Auditor
    Operational
    PaymentProcessor
  }

  """
  Queries: ObjectSetTableTesting
  """
  type ObjectSetTableTestingQueries {
    getDocument(driveId: String, docId: PHID): ObjectSetTableTesting
    getDocuments: [ObjectSetTableTesting!]
  }

  type Query {
    ObjectSetTableTesting: ObjectSetTableTestingQueries
  }

  """
  Mutations: ObjectSetTableTesting
  """
  type Mutation {
    ObjectSetTableTesting_createDocument(driveId: String, name: String): String

    ObjectSetTableTesting_addAccount(
      driveId: String
      docId: PHID
      input: ObjectSetTableTesting_AddAccountInput
    ): Int
    ObjectSetTableTesting_removeAccount(
      driveId: String
      docId: PHID
      input: ObjectSetTableTesting_RemoveAccountInput
    ): Int
    ObjectSetTableTesting_updateAccount(
      driveId: String
      docId: PHID
      input: ObjectSetTableTesting_UpdateAccountInput
    ): Int
  }

  """
  Module: SetTable
  """
  input ObjectSetTableTesting_AddAccountInput {
    name: OLabel
    account: String
    budgetPath: String
    type: AccountType
  }
  input ObjectSetTableTesting_RemoveAccountInput {
    id: OID!
  }
  input ObjectSetTableTesting_UpdateAccountInput {
    id: OID!
    name: OLabel
    account: String
    budgetPath: String
    type: AccountType
  }
`;
