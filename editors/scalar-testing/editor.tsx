/* eslint-disable react/jsx-max-depth */
import { EditorProps } from "document-model/document";
import {
  ScalarTestingState,
  ScalarTestingAction,
  ScalarTestingLocalState,
  actions,
  AddBooleanInput,
} from "../../document-models/scalar-testing";
import { utils as documentModelUtils } from "document-model/document";
import { Button } from "@powerhousedao/design-system";
import {
  BooleanField,
  Form,
  IdField,
} from "@powerhousedao/design-system/scalars";
import { State } from "./components/state";
import { BooleanForm } from "./components/forms/boolean-form";
import { useCallback } from "react";
import { Accordion } from "./components/accordion";

export type IProps = EditorProps<
  ScalarTestingState,
  ScalarTestingAction,
  ScalarTestingLocalState
>;

export default function Editor({ dispatch, document }: IProps) {
  const state = document.state.global;
  // generate a random id
  // const id = documentModelUtils.hashKey();

  const onAddBoolean = useCallback((data: AddBooleanInput) => {
    dispatch(actions.addBoolean(data));
  }, []);

  return (
    <div>
      <State state={state} />

      <div className="space-y-4">
        <Accordion
          className="w-full space-y-2"
          collapsible
          defaultValue="3"
          type="single"
        >
          <BooleanForm
            booleansState={state.booleans}
            onAddBoolean={onAddBoolean}
          />
        </Accordion>
      </div>
    </div>
  );
}
