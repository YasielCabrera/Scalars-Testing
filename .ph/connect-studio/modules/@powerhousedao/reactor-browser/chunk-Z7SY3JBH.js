import {
  useDriveActions
} from "./chunk-DZM27ECK.js";
import {
  useDriveContext
} from "./chunk-7OIMNZZW.js";
import {
  useUiNodesContext
} from "./chunk-2RRITB2C.js";
import {
  FILE
} from "./chunk-ESLOLNT6.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/hooks/useDriveActionsWithUiNodes.js
import { useMemo } from "react";
function toNode(uiNode) {
  if (uiNode.kind === "DRIVE") {
    throw new Error("Cannot convert drive node to regular node");
  }
  const { id, name, parentFolder, kind } = uiNode;
  if (kind === "FOLDER") {
    return { id, name, parentFolder, kind: "folder" };
  } else {
    const fileNode = uiNode;
    return {
      id,
      name,
      parentFolder,
      kind: "file",
      documentType: fileNode.documentType,
      synchronizationUnits: fileNode.synchronizationUnits
    };
  }
}
function createUiNodeAdapter(driveActions) {
  return {
    ...driveActions,
    addFile: (file, parentNode) => driveActions.addFile(file, parentNode?.id),
    addFolder: (name, parentFolder = void 0) => driveActions.addFolder(name, parentFolder),
    renameNode: (name, node) => {
      const converted = toNode(node);
      return driveActions.renameNode(converted.id, name);
    },
    deleteNode: (node) => {
      const converted = toNode(node);
      return driveActions.deleteNode(converted.id);
    },
    moveNode: async (src, target) => {
      if (target.kind === FILE || src.parentFolder === target.id)
        return;
      const srcNode = toNode(src);
      const targetNode = toNode(target);
      return driveActions.moveNode(srcNode.id, targetNode.id);
    },
    copyNode: (src, target) => {
      return driveActions.copyNode(src.id, target.id);
    },
    duplicateNode: (node) => {
      const converted = toNode(node);
      return driveActions.duplicateNode(converted.id);
    }
  };
}
function useDriveActionsWithUiNodes(document, dispatch) {
  const { selectedNode, selectedDriveNode, setSelectedNode, getNodeById } = useUiNodesContext();
  const _driveContext = useDriveContext();
  const driveContext = useMemo(() => ({
    ..._driveContext,
    selectedNode,
    onSelectNode: (node) => {
      _driveContext.selectNode(node);
      setSelectedNode(getNodeById(node.id));
    }
  }), [selectedNode, selectedDriveNode?.driveId, setSelectedNode, getNodeById]);
  const driveActions = useDriveActions(document, dispatch, driveContext);
  const uiNodeActions = useMemo(() => createUiNodeAdapter(driveActions), [driveActions]);
  return uiNodeActions;
}

export {
  useDriveActionsWithUiNodes
};
