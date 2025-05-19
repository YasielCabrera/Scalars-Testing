import { Button } from "@powerhousedao/design-system";
import { Form, IdField, UrlField } from "@powerhousedao/document-engineering/scalars";
import {
  type AddUrlInput,
  type ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

interface URLFormProps {
  readonly onAddUrl: (data: AddUrlInput) => void;
  readonly urlsState: ScalarTestingState["urls"];
}

export function URLForm({ onAddUrl, urlsState }: URLFormProps) {
  const onSubmit = useCallback((data: AddUrlInput) => {
    onAddUrl(data);
  }, []);

  return (
    <FormWrapper title="Add URL">
      <State state={urlsState} />
      <Form
        defaultValues={{ url: "" }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <UrlField
          allowedProtocols={["https"]}
          label="Url"
          name="url"
          required
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
