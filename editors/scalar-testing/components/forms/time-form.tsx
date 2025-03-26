import { Button } from "@powerhousedao/design-system";
import {
  cn,
  Form,
  IdField,
  TimePickerField,
} from "@powerhousedao/design-system/scalars";
import { useCallback, useState } from "react";
import { FormWrapper } from "../form-wrapper.js";
import { State } from "../state.js";
import type {
  AddTimeInput,
  ScalarTestingState,
} from "../../../../document-models/scalar-testing/index.js";

interface TimeFormProps {
  readonly onAddTime: (data: AddTimeInput) => void;
  readonly timesState: ScalarTestingState["time"];
}

export function TimeForm({ onAddTime, timesState }: TimeFormProps) {
  const [formKey, setFormKey] = useState(0);
  const onSubmit = useCallback((data: AddTimeInput) => {
    onAddTime(data);
    setFormKey((prev) => prev + 1);
  }, []);

  return (
    <FormWrapper title="Add Time">
      <State state={timesState} />

      <Form
        defaultValues={{ time: "" }}
        key={formKey}
        onSubmit={onSubmit}
        resetOnSuccessfulSubmit
      >
        <IdField />
        <div
          className={cn(
            // Container
            "pt-3 pr-4 pb-4 pl-4",
            "hidden",
            "relative mx-auto w-ful",
            // Container Selector
            "mx-auto mt-[15px] flex h-[148px] justify-center overflow-hidden",
            // Container two points
            "flex items-center px-4 text-sm font-normal leading-[20px] text-gray-900",

            // PediodSelect
            "absolute right-1 top-[48px] z-10 flex flex-col",
            "h-[20px] w-[16px] text-[12px] leading-[28px] transition-colors font-normal",
            "text-gray-900 font-normal",
            "text-gray-300 font-normal",

            // TimeSelector
            "relative w-[43px] overflow-hidden",
            "absolute inset-0 flex flex-col items-center overflow-y-auto scrollbar-hide gap-1 no-scrollbar",
            "h-[37px] text-[12px] leading-[20px] flex cursor-pointer items-center justify-center",
            "rounded-[6px] bg-white border border-gray-300 text-gray-900 font-normal px-3 py-2",
            "text-gray-900 w-[16px] h-[20px] font-normal",
            // Buttons
            "font-inter text-center text-[12px] font-medium leading-[18px] text-gray-500",
          )}
        />

        <TimePickerField
          label="Time field"
          name="time"
          placeholder="Select a time"
        />

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
