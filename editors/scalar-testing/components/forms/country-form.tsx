import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  BooleanField,
  CountryCodeField,
} from "@powerhousedao/design-system/scalars";
import {
  AddBooleanInput,
  AddCountryInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

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
