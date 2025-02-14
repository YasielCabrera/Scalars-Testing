/* eslint-disable react/jsx-max-depth */
import { Button } from "@powerhousedao/design-system";
import { Form, IdField, PHIDField } from "@powerhousedao/design-system/scalars";
import {
  AddPhidInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface PHIDItem {
  title?: string;
  path?: string;
  phid: string;
  description?: string;
}

const mockedOptions: PHIDItem[] = [
  {
    title: "Document A",
    path: "projects/finance/document-a",
    phid: "phd:baefc2a4-f9a0-4950-8161-fd8d8cc7dea7:main:public",
    description: "Financial report for Q1 2024",
  },
  {
    title: "Document B",
    path: "projects/legal/document-b",
    phid: "phd:baefc2a4-f9a0-4950-8161-fd8d8cc6cdb8:main:public",
    description: "Legal compliance documentation",
  },
  {
    title: "Document C",
    path: "projects/operations/document-c",
    phid: "phd:baefc2a4-f9a0-4950-8161-fd8d8cc5efc9:main:public",
    description: "Operational guidelines and procedures",
  },
];

const fetchOptions = async (): Promise<PHIDItem[]> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Add 30% chance of error
  if (Math.random() < 0.3) {
    throw new Error();
  }

  return mockedOptions;
};

const fetchSelectedOption = async (
  phid: string,
): Promise<PHIDItem | undefined> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockedOptions.find((option) => option.phid === phid);
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

      <div className="flex flex-col gap-4">
        <Form
          defaultValues={{ phid: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <PHIDField
            fetchOptionsCallback={fetchOptions}
            fetchSelectedOptionCallback={fetchSelectedOption}
            label="PHID field"
            name="phid"
            placeholder="phd:"
            variant="withIdTitleAndDescription"
          />
          <Button className="w-full mt-2" size="small">
            Add
          </Button>
        </Form>
      </div>
    </FormWrapper>
  );
}
