/* eslint-disable react/jsx-max-depth */
import { Button } from "@powerhousedao/design-system";
import {
  EnumField,
  Form,
  IdField,
  StringField,
} from "@powerhousedao/design-system/scalars";
import {
  AddEnumInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface EnumFormProps {
  readonly onAddEnum: (data: AddEnumInput) => void;
  readonly enumsState: ScalarTestingState["enums"];
}

export function EnumForm({ onAddEnum, enumsState }: EnumFormProps) {
  const onSubmit = useCallback((data: AddEnumInput) => {
    onAddEnum(data);
  }, []);

  return (
    <FormWrapper title="Add Enums">
      <State state={enumsState} />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row">
          <Form
            defaultValues={{ enum: "" }}
            onSubmit={onSubmit}
            resetOnSuccessfulSubmit
          >
            <IdField />
            <EnumField
              label="Enum as radio group"
              name="enum"
              options={[
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" },
                { label: "Option 3", value: "option3" },
              ]}
              required
            />
            <Button className="w-full mt-2" size="small">
              Add
            </Button>
          </Form>

          <Form
            defaultValues={{ enum: "" }}
            onSubmit={onSubmit}
            resetOnSuccessfulSubmit
          >
            <IdField />
            <EnumField
              label="Enum as select (single option select)"
              name="enum"
              options={[
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" },
                { label: "Option 3", value: "option3" },
              ]}
              required
              variant="Select"
            />
            <Button className="w-full mt-2" size="small">
              Add
            </Button>
          </Form>
        </div>

        <Form
          defaultValues={{ enumMultiple: [] }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <EnumField
            label="Enum as select (multiple options select)"
            multiple
            name="enumMultiple"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
            ]}
            required
            variant="Select"
          />
          <Button className="w-full mt-2" size="small">
            Add
          </Button>
        </Form>
      </div>
    </FormWrapper>
  );
}
