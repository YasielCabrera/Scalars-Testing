// ../../packages/reactor-browser/dist/src/hooks/useDriveContext.js
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
var DriveContext = createContext(void 0);
var DriveContextProvider = ({ value, children }) => _jsx(DriveContext.Provider, { value, children });
function useDriveContext() {
  const context = useContext(DriveContext);
  if (!context) {
    throw new Error("useDriveContext must be used within a DriveContextProvider");
  }
  return context;
}

export {
  DriveContextProvider,
  useDriveContext
};
