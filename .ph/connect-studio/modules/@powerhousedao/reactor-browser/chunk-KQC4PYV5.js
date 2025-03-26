// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/hooks/useDocumentDispatch.js
import { useEffect, useState } from "react";
function useDocumentDispatch(documentReducer, initialState, onError = console.error) {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState();
  const onErrorHandler = (error2) => {
    setError(error2);
    onError(error2);
  };
  useEffect(() => {
    setState(initialState);
  }, [initialState]);
  const dispatch = (action, callback, onErrorCallback) => {
    setError(void 0);
    setState((_state) => {
      if (!documentReducer || !_state)
        return _state;
      try {
        const newState = documentReducer(_state, action);
        const scope = action.scope ?? "global";
        const operations = newState.operations[scope];
        const operation = operations[operations.length - 1];
        if (operation.error) {
          const error2 = new Error(operation.error);
          onErrorHandler(error2);
          onErrorCallback?.(error2);
        }
        callback?.(operation, {
          prevState: { ..._state },
          newState: { ...newState }
        });
        return newState;
      } catch (error2) {
        onErrorHandler(error2);
        onErrorCallback?.(error2);
        return _state;
      }
    });
  };
  return [state, dispatch, error];
}

export {
  useDocumentDispatch
};
