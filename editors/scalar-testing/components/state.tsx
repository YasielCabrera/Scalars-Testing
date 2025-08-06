import { type ScalarTestingState } from "document-models/scalar-testing/index.js";
import ReactJsonView from "react-json-view";
import React from "react";

interface StateProps<T> {
  readonly state: T;
}

export function State<T extends object = ScalarTestingState>({
  state,
}: StateProps<T>) {
  // Use createElement to bypass JSX typing issues
  return (
    <div className="mb-5">
      <div className="text-sm font-medium">State:</div>
      {React.createElement(ReactJsonView as any, { 
        collapsed: true, 
        enableClipboard: false, 
        src: state 
      })}
    </div>
  );
}
