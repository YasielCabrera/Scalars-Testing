import {
  useDriveActions
} from "./chunk-6AXML2S3.js";
import {
  useDriveContext
} from "./chunk-XBTEGV5M.js";
import {
  useUiNodesContext
} from "./chunk-RGIB4DD4.js";
import {
  FILE
} from "./chunk-7OQWVUC5.js";

// ../../packages/reactor-browser/dist/src/hooks/useDriveActionsWithUiNodes.js
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
