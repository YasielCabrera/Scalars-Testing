// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/hooks/useDriveContext.js
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
