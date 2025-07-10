import { Button, type IconName } from "@powerhousedao/design-system";
import { Form, IdField, OIDField } from "@powerhousedao/document-engineering/scalars";
import {
  type AddOidInput,
  type ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import type React from "react";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import { useFormReset } from "../../hooks/use-form-reset.js";

interface OIDOption {
  icon?: IconName | React.ReactElement;
  title?: string;
  path?: string | { text: string; url: string };
  value: string;
  description?: string;
}

const mockedOptions: OIDOption[] = [
  {
    icon: "Braces",
    title: "Object A",
    path: "rwa-portfolio-a",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc7dea7",
    description: "Object A description",
  },
  {
    icon: "Braces",
    title: "Object B",
    path: "rwa-portfolio-b",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc6cdb8",
    description: "Object B description",
  },
  {
    icon: "Braces",
    title: "Object C",
    path: "rwa-portfolio-c",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc5efc9",
    description: "Object C description",
  },
  {
    icon: "Braces",
    title: "Object D",
    path: "rwa-portfolio-d",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc1cfe3",
    description: "Object D description",
  },
  {
    icon: "Braces",
    title: "Object E",
    path: "rwa-portfolio-e",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc0bfe4",
    description: "Object E description",
  },
  {
    icon: "Braces",
    title: "Object F",
    path: "rwa-portfolio-f",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc9aef5",
    description: "Object F description",
  },
  {
    icon: "Braces",
    title: "Object G",
    path: "rwa-portfolio-g",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc8aef6",
    description: "Object G description",
  },
  {
    icon: "Braces",
    title: "Object H",
    path: "rwa-portfolio-h",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc7aef7",
    description: "Object H description",
  },
  {
    icon: "Braces",
    title: "Object I",
    path: "rwa-portfolio-i",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc6aef8",
    description: "Object I description",
  },
  {
    icon: "Braces",
    title: "Object J",
    path: "rwa-portfolio-j",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc5aef9",
    description: "Object J description",
  },
  {
    icon: "Braces",
    title: "Object K",
    path: "rwa-portfolio-k",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc4aea0",
    description: "Object K description",
  },
  {
    icon: "Braces",
    title: "Object L",
    path: "rwa-portfolio-l",
    value: "baefc2a4-f9a0-4950-8161-fd8d8cc3aea1",
    description: "Object L description",
  },
];

const filterOptions = (options: OIDOption[], userInput: string) => {
  const normalizedInput = userInput.toLowerCase();

  return options.filter((opt) => {
    const pathText = typeof opt.path === "object" ? opt.path.text : opt.path;

    return (
      opt.title?.toLowerCase().includes(normalizedInput) ||
      pathText?.toLowerCase().includes(normalizedInput) ||
      opt.value.toLowerCase().includes(normalizedInput) ||
      opt.description?.toLowerCase().includes(normalizedInput)
    );
  });
};

// Async versions
export const fetchOptions = async (userInput: string): Promise<OIDOption[]> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Add 20% chance of error
  if (Math.random() < 0.2) {
    throw new Error();
  }

  return filterOptions(mockedOptions, userInput);
};

export const fetchSelectedOption = async (
  value: string,
): Promise<OIDOption | undefined> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockedOptions.find((option) => option.value === value);
};

// Sync versions
export const fetchOptionsSync = (userInput: string): OIDOption[] => {
  return filterOptions(mockedOptions, userInput);
};

export const fetchSelectedOptionSync = (
  value: string,
): OIDOption | undefined => {
  return mockedOptions.find((option) => option.value === value);
};

const onBlur = () => {
  console.log("onBlur");
};

interface OidFormProps {
  readonly onAddOid: (data: AddOidInput) => void;
  readonly oidsState: ScalarTestingState["oids"];
}

export function OidForm({ onAddOid, oidsState }: OidFormProps) {
  const onSubmit = useCallback((data: AddOidInput) => {
    onAddOid(data);
  }, []);

  const { formKey: formKeyOid, onSubmit: onSubmitOid } = useFormReset<AddOidInput>({
    onSubmitCallback: onAddOid,
    resetOnSuccessfulSubmit: true,
    formId: 'oid'
  });

  return (
    <FormWrapper title="Add Oid">
      <State state={oidsState} />

      <div className="flex flex-col gap-4 min-h-[380px]">
        <Form
          defaultValues={{ oid: "" }}
          onSubmit={onSubmitOid}
          resetOnSuccessfulSubmit
          key={formKeyOid}
          
        >
          <IdField />
          <OIDField
            fetchOptionsCallback={fetchOptionsSync} // Sync version
            fetchSelectedOptionCallback={fetchSelectedOptionSync} // Sync version
            // fetchOptionsCallback={fetchOptions} // Async version
            // fetchSelectedOptionCallback={fetchSelectedOption} // Async version
            label="OID field"
            name="oid"
            onBlur={onBlur}
            placeholder="uuid"
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
