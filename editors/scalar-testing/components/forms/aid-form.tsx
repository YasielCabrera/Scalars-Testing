import { Button, type IconName } from "@powerhousedao/design-system";
import { Form, IdField, AIDField } from "@powerhousedao/design-system/scalars";
import type {
  AddAidInput,
  ScalarTestingState,
} from "document-models/scalar-testing/index.js";
import type React from "react";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";

interface IdAutocompleteOption {
  icon?: IconName | React.ReactElement;
  title?: string;
  path?: string;
  value: string;
  description?: string;
}

interface Network {
  chainId: string;
  name?: string;
}

const mockedOptions: IdAutocompleteOption[] = [
  {
    icon: "Person",
    title: "Agent A",
    path: "agents/agent-a",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8a",
    description: "Agent A description",
  },
  {
    icon: "Person",
    title: "Agent B",
    path: "agents/agent-b",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936e8a",
    description: "Agent B description",
  },
  {
    icon: "Person",
    title: "Agent C",
    path: "agents/agent-c",
    value: "did:ethr:0x89:0xb9c5714089478a327f09197987f16f9e5d936e8a",
    description: "Agent C description",
  },
  {
    icon: "Person",
    title: "Lucas Martinez",
    path: "agents/lucas-martinez",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8b",
    description: "UX Designer",
  },
  {
    icon: "Person",
    title: "Oliver Brown",
    path: "agents/oliver-brown",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936e8c",
    description: "DevOps Engineer",
  },
  {
    icon: "Person",
    title: "Isabella Garcia",
    path: "agents/isabella-garcia",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8d",
    description: "Frontend Developer",
  },
  {
    icon: "Person",
    title: "William Taylor",
    path: "agents/william-taylor",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e8e",
    description: "Backend Developer",
  },
  {
    icon: "Person",
    title: "Ava Johnson",
    path: "agents/ava-johnson",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936e8f",
    description: "Quality Assurance Engineer",
  },
  {
    icon: "Person",
    title: "Noah Anderson",
    path: "agents/noah-anderson",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e9a",
    description: "Systems Architect",
  },
  {
    icon: "Person",
    title: "Mia Patel",
    path: "agents/mia-patel",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936e9b",
    description: "Security Analyst",
  },
  {
    icon: "Person",
    title: "Ethan Wright",
    path: "agents/ethan-wright",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e9c",
    description: "Cloud Engineer",
  },
  {
    icon: "Person",
    title: "Charlotte Lee",
    path: "agents/charlotte-lee",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e9d",
    description: "Project Manager",
  },
  {
    icon: "Person",
    title: "Alexander Kim",
    path: "agents/alexander-kim",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936e9e",
    description: "Machine Learning Engineer",
  },
  {
    icon: "Person",
    title: "Sofia Rodriguez",
    path: "agents/sofia-rodriguez",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936e9f",
    description: "Full Stack Developer",
  },
  {
    icon: "Person",
    title: "Daniel Smith",
    path: "agents/daniel-smith",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936eaa",
    description: "Mobile Developer",
  },
  {
    icon: "Person",
    title: "Victoria White",
    path: "agents/victoria-white",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936eab",
    description: "Business Analyst",
  },
  {
    icon: "Person",
    title: "Henry Davis",
    path: "agents/henry-davis",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936eac",
    description: "Technical Lead",
  },
  {
    icon: "Person",
    title: "Zoe Miller",
    path: "agents/zoe-miller",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936ead",
    description: "UI Designer",
  },
  {
    icon: "Person",
    title: "Benjamin Clark",
    path: "agents/benjamin-clark",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936eae",
    description: "Infrastructure Engineer",
  },
  {
    icon: "Person",
    title: "Lily Zhang",
    path: "agents/lily-zhang",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936eaf",
    description: "Software Developer",
  },
  {
    icon: "Person",
    title: "Sebastian Moore",
    path: "agents/sebastian-moore",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936eba",
    description: "Database Administrator",
  },
  {
    icon: "Person",
    title: "Aria Thomas",
    path: "agents/aria-thomas",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936ebb",
    description: "Product Designer",
  },
  {
    icon: "Person",
    title: "Jack Wilson",
    path: "agents/jack-wilson",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936ebc",
    description: "Solutions Architect",
  },
  {
    icon: "Person",
    title: "Luna Harris",
    path: "agents/luna-harris",
    value: "did:ethr:0xb9c5714089478a327f09197987f16f9e5d936ebd",
    description: "Network Engineer",
  },
  {
    icon: "Person",
    title: "Owen Martinez",
    path: "agents/owen-martinez",
    value: "did:ethr:0x5:0xb9c5714089478a327f09197987f16f9e5d936ebe",
    description: "Security Engineer",
  },
];

const filterOptions = (
  options: IdAutocompleteOption[],
  userInput: string,
  context?: Record<string, unknown>,
) => {
  const normalizedInput = userInput.toLowerCase();
  const supportedNetworks = Array.isArray(context?.supportedNetworks)
    ? (context.supportedNetworks as Network[])
    : [];

  return options.filter((opt) => {
    if (supportedNetworks.length > 0) {
      const chainId = opt.value.split(":")[2];
      if (!supportedNetworks.some((network) => network.chainId === chainId)) {
        return false;
      }
    }

    return (
      opt.title?.toLowerCase().includes(normalizedInput) ||
      opt.path?.toLowerCase().includes(normalizedInput) ||
      opt.value.toLowerCase().includes(normalizedInput) ||
      opt.description?.toLowerCase().includes(normalizedInput)
    );
  });
};

// Async versions
const fetchOptions = async (
  userInput: string,
  context?: Record<string, unknown>,
): Promise<IdAutocompleteOption[]> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Add 20% chance of error
  if (Math.random() < 0.2) {
    throw new Error();
  }

  return filterOptions(mockedOptions, userInput, context);
};

const fetchSelectedOption = async (
  value: string,
): Promise<IdAutocompleteOption | undefined> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockedOptions.find((option) => option.value === value);
};

// Sync versions
const fetchOptionsSync = (
  userInput: string,
  context?: Record<string, unknown>,
): IdAutocompleteOption[] => {
  return filterOptions(mockedOptions, userInput, context);
};

const fetchSelectedOptionSync = (
  value: string,
): IdAutocompleteOption | undefined => {
  return mockedOptions.find((option) => option.value === value);
};

const onBlur = () => {
  console.log("onBlur");
};

interface AidFormProps {
  readonly onAddAid: (data: AddAidInput) => void;
  readonly aidsState: ScalarTestingState["aids"];
}

export function AidForm({ onAddAid, aidsState }: AidFormProps) {
  const onSubmit = useCallback((data: AddAidInput) => {
    onAddAid(data);
  }, []);

  return (
    <FormWrapper title="Add Aid">
      <State state={aidsState} />

      <div className="flex flex-col gap-4 min-h-[380px]">
        <Form
          defaultValues={{ aid: "" }}
          onSubmit={onSubmit}
          resetOnSuccessfulSubmit
        >
          <IdField />
          <AIDField
            fetchOptionsCallback={fetchOptionsSync} // Sync version
            fetchSelectedOptionCallback={fetchSelectedOptionSync} // Sync version
            // fetchOptionsCallback={fetchOptions} // Async version
            // fetchSelectedOptionCallback={fetchSelectedOption} // Async version
            label="AID field"
            name="aid"
            onBlur={onBlur}
            placeholder="did:ethr:"
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
