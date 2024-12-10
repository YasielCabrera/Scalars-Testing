/* eslint-disable react/jsx-max-depth */
import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  StringField,
} from "@powerhousedao/design-system/scalars";
import {
  AddStringInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface StringFormProps {
  readonly onAddString: (data: AddStringInput) => void;
  readonly stringsState: ScalarTestingState["strings"];
}

export function StringForm({ onAddString, stringsState }: StringFormProps) {
  const onSubmit = useCallback((data: AddStringInput) => {
    onAddString(data);
  }, []);

  return (
    <FormWrapper title="Add String">
      <State state={stringsState} />

      <div className="flex flex-col gap-4">
        <Form
          defaultValues={{ string: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <StringField
            label="Single line String field"
            name="string"
            required
          />
          <Button className="w-full mt-2" size="small">
            Add
          </Button>
        </Form>

        <Form
          defaultValues={{ string: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <StringField
            label="Multi-line String field"
            multiline
            name="string"
            required
          />
          <Button className="w-full mt-2" size="small">
            Add
          </Button>
        </Form>
      </div>
    </FormWrapper>
  );
}
