import { Button } from "@powerhousedao/design-system";
import { Form, IdField, UrlField } from "@powerhousedao/design-system/scalars";
import {
  AddUrlInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

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
          showIcon
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
