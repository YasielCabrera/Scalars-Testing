/* eslint-disable react/jsx-max-depth */
import { EditorProps } from "document-model/document";
import {
  ScalarTestingState,
  ScalarTestingAction,
  ScalarTestingLocalState,
  actions,
  AddBooleanInput,
  AddStringInput,
  AddUrlInput,
  AddNumberInput,
} from "../../document-models/scalar-testing";
import { utils as documentModelUtils } from "document-model/document";
import { State } from "./components/state";
import { BooleanForm } from "./components/forms/boolean-form";
import { useCallback } from "react";
import { Accordion } from "./components/accordion";
import { StringForm } from "./components/forms/string-form";
import { URLForm } from "./components/forms/url-form";
import { NumberForm } from "./components/forms/number-form";

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

  const onAddString = useCallback((data: AddStringInput) => {
    dispatch(actions.addString(data));
  }, []);

  const onAddUrl = useCallback((data: AddUrlInput) => {
    dispatch(actions.addUrl(data));
  }, []);

  const onAddNumber = useCallback((data: AddNumberInput) => {
    dispatch(actions.addNumber(data));
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

          <StringForm onAddString={onAddString} stringsState={state.strings} />

          <NumberForm numbersState={state.numbers} onAddNumber={onAddNumber} />

          <URLForm onAddUrl={onAddUrl} urlsState={state.urls} />
        </Accordion>
      </div>
    </div>
  );
}
