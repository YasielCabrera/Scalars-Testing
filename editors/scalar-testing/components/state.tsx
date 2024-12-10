import { ScalarTestingState } from "document-models/scalar-testing";
import ReactJson from "react-json-view";

interface StateProps<T> {
  readonly state: T;
}

export function State<T extends object = ScalarTestingState>({
  state,
}: StateProps<T>) {
  return (
    <div className="mb-5">
      <div className="text-sm font-medium">State:</div>
      <ReactJson collapsed enableClipboard={false} src={state} />
    </div>
  );
}
