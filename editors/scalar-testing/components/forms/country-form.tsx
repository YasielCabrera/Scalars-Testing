import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  BooleanField,
  CountryCodeField,
} from "@powerhousedao/design-system/scalars";
import type {
  AddBooleanInput,
  AddCountryInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

interface CountryFormProps {
  readonly onAddCountry: (data: AddCountryInput) => void;
  readonly countriesState: ScalarTestingState["countries"];
}

export function CountryForm({
  onAddCountry,
  countriesState,
}: CountryFormProps) {
  const onSubmit = useCallback((data: AddCountryInput) => {
    onAddCountry(data);
  }, []);

  return (
    <FormWrapper title="Add Country">
      <State state={countriesState} />

      <Form
        defaultValues={{ country: "" }}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <CountryCodeField
          enableSearch
          label="Country field"
          name="country"
          required
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
