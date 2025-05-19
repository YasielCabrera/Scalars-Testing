import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  StringField,
} from "@powerhousedao/document-engineering/scalars";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";

export function PlaygroundForm() {
  const onSubmit = useCallback((data: any) => {
    alert(JSON.stringify(data, null, 2));
  }, []);

  return (
    <FormWrapper title="Playground" value="playground">
      <Form
        defaultValues={{
          testing: "",
        }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <StringField label="String" name="testing" />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
