import type { EditorProps } from "document-model";
import {
  type AccountEntry,
  type AccountType,
  type AddAccountInput,
  type ObjectSetTableTestingDocument,
  actions,
} from "../../document-models/object-set-table-testing/index.js";
import { useCallback, useMemo } from "react";
import {
  type ColumnDef,
  ObjectSetTable,
  type ObjectSetTableConfig,
} from "@powerhousedao/document-engineering/table";

export type IProps = EditorProps<ObjectSetTableTestingDocument>;

export default function Editor(props: IProps) {
  const { document, dispatch } = props;

  const onAddAccount = useCallback((data: AddAccountInput) => {
    dispatch(actions.addAccount(data));
  }, []);

  const onRemoveAccount = useCallback((rows: AccountEntry[]) => {
    rows.forEach((row) => {
      dispatch(actions.removeAccount({ id: row.id }));
    });
  }, []);

  const accounts = document.state.global.accounts;

  const columns = useMemo<ColumnDef<AccountEntry>[]>(
    () => [
      {
        field: "name",
        editable: true,
        onSave: (value, context) => {
          dispatch(
            actions.updateAccount({
              id: context.row.id,
              name: value as string,
            })
          );
          return true;
        },
        width: "150px",
      },
      {
        field: "account",
        editable: true,
        onSave: (value, context) => {
          dispatch(
            actions.updateAccount({
              id: context.row.id,
              account: value as string,
            })
          );
          return true;
        },
        width: "150px",
      },
      {
        field: "budgetPath",
        editable: true,
        onSave: (value, context) => {
          dispatch(
            actions.updateAccount({
              id: context.row.id,
              budgetPath: value as string,
            })
          );
          return true;
        },
        width: "200px",
      },
      {
        field: "type",
        editable: true,
        onSave: (value, context) => {
          dispatch(
            actions.updateAccount({
              id: context.row.id,
              type: value as AccountType,
            })
          );
          return true;
        },
        width: "120px",
      },
    ],
    []
  );

  const tableActions = useMemo<
    ObjectSetTableConfig<AccountEntry>["actions"]
  >(() => {
    return {
      primary: {
        label: "Print",
        callback: async (context: any) => {
          // eslint-disable-next-line @typescript-eslint/await-thenable, @typescript-eslint/no-unsafe-member-access
          if (await confirm(`Print ${context.row.name} data?`)) {
            console.log(context);
          }
        },
      },
      secondary: [
        {
          label: "Action 1",
          callback: () => {
            alert("You clicked the action 1 button");
          },
        },
        {
          label: "Action 2",
          callback: () => {
            alert("You clicked the action 2 button");
          },
        },
      ],
    } satisfies ObjectSetTableConfig<AccountEntry>["actions"];
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex justify-center min-w-[1000px] w-full mx-auto">
        <ObjectSetTable
          columns={columns}
          data={accounts}
          onAdd={onAddAccount}
          onDelete={onRemoveAccount}
          actions={tableActions}
        />
      </div>
    </div>
  );
}
