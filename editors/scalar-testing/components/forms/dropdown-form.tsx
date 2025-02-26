import { Button, Icon } from "@powerhousedao/design-system";
import {
  Form,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@powerhousedao/design-system/scalars";

import {
  AddValueDropdownInput,
  ScalarTestingState,
} from "document-models/scalar-testing";
import { useCallback } from "react";
import { FormWrapper } from "../form-wrapper";
import { State } from "../state";

interface DropDownFormProps {
  readonly onAddValueDropdown: (data: AddValueDropdownInput) => void;
  readonly valueDropdownState: ScalarTestingState["dropdown"];
}

export function DropDownForm({
  onAddValueDropdown,
  valueDropdownState,
}: DropDownFormProps) {
  const onSubmit = useCallback((data: AddValueDropdownInput) => {
    onAddValueDropdown(data);
  }, []);

  return (
    <FormWrapper title="Add Value Dropdown">
      <State state={valueDropdownState} />
      <Form defaultValues={{}} onSubmit={onSubmit} resetOnSuccessfulSubmit>
        <Dropdown>
          <DropdownTrigger className="w-[284px]">
            <Icon name="DownloadFile" />
            Export as
          </DropdownTrigger>
          <DropdownContent className="w-[284px]">
            <DropdownItem>
              <Icon name="ExportZip" />
              <span>Powerhouse Invoice</span>
            </DropdownItem>
            <DropdownItem>
              <Icon name="ExportUbl" />
              <span>UBL file</span>
            </DropdownItem>
            <DropdownItem>
              <Icon name="ExportPdf" />
              <span>PDF file</span>
            </DropdownItem>
          </DropdownContent>
        </Dropdown>

        <Button className="w-full mt-2" size="small">
          Add
        </Button>
      </Form>
    </FormWrapper>
  );
}
