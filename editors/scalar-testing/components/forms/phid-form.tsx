/* eslint-disable react/jsx-max-depth */
import { Button, IconName } from "@powerhousedao/design-system";
import { Form, IdField, PHIDField } from "@powerhousedao/design-system/scalars";
import {
  AddPhidInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import React, { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface IdAutocompleteOption {
  icon?: IconName | React.ReactElement;
  title?: string;
  path?: string;
  value: string;
  description?: string;
}

const mockedOptions: IdAutocompleteOption[] = [
  {
    icon: "PowerhouseLogoSmall",
    title: "Document A",
    path: "projects/finance/document-a",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cc7dea7:main:public",
    description: "Financial report for Q1 2024",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Document B",
    path: "projects/legal/document-b",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cc6cdb8:main:public",
    description: "Legal compliance documentation",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Document C",
    path: "projects/operations/document-c",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cc5efc9:main:public",
    description: "Operational guidelines and procedures",
  },
];

// Async versions
const fetchOptions = async (): Promise<IdAutocompleteOption[]> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Add 30% chance of error
  if (Math.random() < 0.3) {
    throw new Error();
  }

  return mockedOptions;
};

const fetchSelectedOption = async (
  value: string,
): Promise<IdAutocompleteOption | undefined> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockedOptions.find((option) => option.value === value);
};

// Sync versions
const fetchOptionsSync = (): IdAutocompleteOption[] => {
  return mockedOptions;
};

const fetchSelectedOptionSync = (
  value: string,
): IdAutocompleteOption | undefined => {
  return mockedOptions.find((option) => option.value === value);
};

interface PhidFormProps {
  readonly onAddPhid: (data: AddPhidInput) => void;
  readonly phidsState: ScalarTestingState["phids"];
}

export function PhidForm({ onAddPhid, phidsState }: PhidFormProps) {
  const onSubmit = useCallback((data: AddPhidInput) => {
    onAddPhid(data);
  }, []);

  return (
    <FormWrapper title="Add Phid">
      <State state={phidsState} />

      <div className="flex flex-col gap-4 min-h-[380px]">
        <Form
          defaultValues={{ phid: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <PHIDField
            fetchOptionsCallback={fetchOptions}
            fetchSelectedOptionCallback={fetchSelectedOption}
            // fetchOptionsCallback={fetchOptionsSync} // To test sync behavior uncomment this
            // fetchSelectedOptionCallback={fetchSelectedOptionSync} // To test sync behavior uncomment this
            label="PHID field"
            name="phid"
            placeholder="phd:"
            variant="withValueTitleAndDescription"
          />
          <Button className="w-full mt-2" size="small">
            Add
          </Button>
        </Form>
      </div>
    </FormWrapper>
  );
}
