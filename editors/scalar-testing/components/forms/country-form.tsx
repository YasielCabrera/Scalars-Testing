import { Button } from "@powerhousedao/design-system";
import {
  Form,
  IdField,
  CountryCodeField,
} from "@powerhousedao/document-engineering/scalars";
import type {
  AddCountryInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import { useFormReset } from "../../hooks/use-form-reset.js";

interface CountryFormProps {
  readonly onAddCountry: (data: AddCountryInput) => void;
  readonly countriesState: ScalarTestingState["countries"];
}

export function CountryForm({
  onAddCountry,
  countriesState,
}: CountryFormProps) {
  const { formKey: formKeyCountry, onSubmit: onSubmitCountry } = useFormReset<AddCountryInput>({
    onSubmitCallback: onAddCountry,
    resetOnSuccessfulSubmit: true,
    formId: 'country'
  });

  return (
    <FormWrapper title="Add Country">
      <State state={countriesState} />

      <Form
        defaultValues={{ country: "" }}
        onSubmit={onSubmitCountry}
        resetOnSuccessfulSubmit
        key={formKeyCountry}
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
