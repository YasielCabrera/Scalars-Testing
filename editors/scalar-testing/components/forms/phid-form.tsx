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

export const mockedOptions: IdAutocompleteOption[] = [
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
  {
    icon: "PowerhouseLogoSmall",
    title: "Marketing Strategy Plan",
    path: "projects/marketing/strategy-2024",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cc1cfe3:main:public",
    description:
      "Comprehensive marketing initiatives and campaign planning for 2024",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "System Architecture Overview",
    path: "projects/tech/system-architecture",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cc0bfe4:main:public",
    description:
      "Technical documentation of system components and infrastructure",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Sales Performance Report Q1",
    path: "projects/sales/q1-2024-performance",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cbfafe5:main:public",
    description: "Analysis of Q1 2024 sales metrics and team performance",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Information Security Policy",
    path: "projects/security/security-policy",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cbe9fe6:main:public",
    description: "Corporate security guidelines and compliance requirements",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "2024 Budget Forecast",
    path: "projects/finance/budget-2024",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cbd8fe7:main:public",
    description: "Annual budget projections and financial planning for 2024",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Onboarding Process Guide",
    path: "projects/hr/onboarding-guide",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cbc7fe8:main:public",
    description: "Step-by-step guide for new employee onboarding procedures",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Operations Manual v2.0",
    path: "projects/operations/manual-v2",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cbb6fe9:main:public",
    description: "Updated standard operating procedures and guidelines",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Brand Guidelines 2024",
    path: "projects/marketing/brand-guidelines",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cba5fea:main:public",
    description: "Official brand identity and usage guidelines",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Legal Compliance Report",
    path: "projects/legal/compliance-2024",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb94feb:main:public",
    description: "Annual legal compliance assessment and recommendations",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "API Documentation v3",
    path: "projects/tech/api-docs-v3",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb83fec:main:public",
    description: "Complete API reference guide and integration documentation",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Customer Feedback Analysis",
    path: "projects/product/customer-feedback",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb72fed:main:public",
    description: "Analysis of customer feedback and satisfaction metrics",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Project Management Guide",
    path: "projects/operations/pm-guide",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb61fee:main:public",
    description: "Best practices and methodologies for project management",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Benefits Package 2024",
    path: "projects/hr/benefits-2024",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb50fef:main:public",
    description: "Detailed overview of employee benefits and compensation",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Risk Assessment Report",
    path: "projects/security/risk-assessment",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb4fff0:main:public",
    description:
      "Comprehensive security risk analysis and mitigation strategies",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Inventory Management Plan",
    path: "projects/operations/inventory-2024",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb3eff1:main:public",
    description: "Strategic plan for inventory control and optimization",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Digital Marketing Report",
    path: "projects/marketing/digital-report",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb2dff2:main:public",
    description: "Analysis of digital marketing campaigns and ROI",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Market Research Analysis",
    path: "projects/research/market-analysis",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb1cff3:main:public",
    description: "Comprehensive market trends and competitor analysis",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "User Experience Report",
    path: "projects/product/ux-research",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8cb0bff4:main:public",
    description: "Findings from user experience research and testing",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Social Media Strategy",
    path: "projects/marketing/social-2024",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8caafff5:main:public",
    description: "Strategic plan for social media engagement and growth",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Infrastructure Upgrade Plan",
    path: "projects/tech/infrastructure-2024",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8ca9eff6:main:public",
    description: "Technical roadmap for infrastructure improvements",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Sustainability Report 2024",
    path: "projects/operations/sustainability",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8ca8eff7:main:public",
    description: "Annual environmental impact and sustainability initiatives",
  },
  {
    icon: "PowerhouseLogoSmall",
    title: "Data Privacy Guidelines",
    path: "projects/legal/privacy-guidelines",
    value: "phd:baefc2a4-f9a0-4950-8161-fd8d8ca7eff8:main:public",
    description:
      "Comprehensive guide to data protection and privacy compliance",
  },
];

// Async versions
export const fetchOptions = async (
  userInput: string,
): Promise<IdAutocompleteOption[]> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Add 20% chance of error
  if (Math.random() < 0.2) {
    throw new Error();
  }

  const normalizedInput = userInput.toLowerCase();
  return normalizedInput === ""
    ? mockedOptions
    : mockedOptions.filter(
        (option) =>
          option.title?.toLowerCase().includes(normalizedInput) ||
          option.path?.toLowerCase().includes(normalizedInput) ||
          option.value.toLowerCase().includes(normalizedInput) ||
          option.description?.toLowerCase().includes(normalizedInput),
      );
};

export const fetchSelectedOption = async (
  value: string,
): Promise<IdAutocompleteOption | undefined> => {
  // Simulate 2s network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockedOptions.find((option) => option.value === value);
};

// Sync versions
export const fetchOptionsSync = (userInput: string): IdAutocompleteOption[] => {
  const normalizedInput = userInput.toLowerCase();
  return normalizedInput === ""
    ? mockedOptions
    : mockedOptions.filter(
        (option) =>
          option.title?.toLowerCase().includes(normalizedInput) ||
          option.path?.toLowerCase().includes(normalizedInput) ||
          option.value.toLowerCase().includes(normalizedInput) ||
          option.description?.toLowerCase().includes(normalizedInput),
      );
};

export const fetchSelectedOptionSync = (
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
            // fetchOptionsCallback={fetchOptions} // Async version
            // fetchSelectedOptionCallback={fetchSelectedOption} // Async version
            fetchOptionsCallback={fetchOptionsSync} // Sync version
            fetchSelectedOptionCallback={fetchSelectedOptionSync} // Sync version
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
