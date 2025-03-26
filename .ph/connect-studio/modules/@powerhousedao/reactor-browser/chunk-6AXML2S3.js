import {
  addFolder,
  copyNode,
  deleteNode,
  generateAddNodeAction,
  generateNodesCopy,
  isFileNode,
  isFolderNode,
  moveNode,
  updateNode
} from "./chunk-YOX3ZAET.js";
import {
  generateId
} from "./chunk-FQF4YAVC.js";

// ../../packages/reactor-browser/dist/src/hooks/useDriveActions.js
import { useMemo } from "react";
var generateId2 = () => generateId().toString();
function getNode(id, drive) {
  return drive.state.global.nodes.find((node) => node.id === id);
}
function createDriveActions(document, dispatch, context) {
  const drive = document;
  const { id: driveId } = drive.state.global;
  const { selectedNode } = context;
  const handleAddFolder = async (name, parentFolder, id = generateId2()) => {
    dispatch(addFolder({
      id,
      name,
      parentFolder: parentFolder ?? null
    }));
  };
  const addDocument = async (name, documentType, document2, parentFolder, id = generateId2()) => {
    const action = generateAddNodeAction(drive.state.global, {
      id,
      name,
      parentFolder: parentFolder ?? null,
      documentType,
      document: document2
    }, ["global"]);
    dispatch(action);
  };
  const addFile = async (file, parentFolder = selectedNode && isFileNode(selectedNode) ? void 0 : selectedNode?.id, name = file.name.replace(/\.zip$/gim, "")) => {
    const folder = parentFolder ? getNode(parentFolder, drive) : void 0;
    if (parentFolder && !folder) {
      throw new Error(`Parent folder with id "${parentFolder}" not found`);
    }
    if (folder && !isFolderNode(folder)) {
      throw new Error(`Parent folder with id "${parentFolder}" is not a folder`);
    }
    await context.addFile(file, driveId, name, parentFolder);
  };
  const handleDeleteNode = async (id) => {
    dispatch(deleteNode({ id }));
  };
  const renameNode = async (id, name) => {
    dispatch(updateNode({ id, name }));
  };
  const handleMoveNode = async (sourceId, targetId) => {
    dispatch(moveNode({
      srcFolder: sourceId,
      targetParentFolder: targetId
    }));
  };
  const handleCopyNode = async (sourceId, targetFolderId) => {
    const target = targetFolderId ? getNode(targetFolderId, drive) : void 0;
    if (targetFolderId && !target) {
      throw new Error(`Target node with id "${targetFolderId}" not found`);
    }
    if (target && !isFolderNode(target)) {
      throw new Error(`Target node with id "${targetFolderId}" is not a folder`);
    }
    const source = getNode(sourceId, drive);
    if (!source) {
      throw new Error(`Source node with id "${sourceId}" not found`);
    }
    const copyNodesInput = generateNodesCopy({
      srcId: sourceId,
      targetParentFolder: target?.id,
      targetName: source.name
    }, generateId2, drive.state.global.nodes);
    const copyActions = copyNodesInput.map((copyNodeInput) => copyNode(copyNodeInput));
    for (const copyAction of copyActions) {
      dispatch(copyAction);
    }
  };
  const duplicateNode = async (sourceId) => {
    const node = getNode(sourceId, drive);
    if (!node) {
      throw new Error(`Node with id "${sourceId}" not found`);
    }
    await handleCopyNode(node.id, node.parentFolder || void 0);
  };
  return {
    context,
    selectNode: context.selectNode,
    addFolder: handleAddFolder,
    addFile,
    addDocument,
    deleteNode: handleDeleteNode,
    renameNode,
    moveNode: handleMoveNode,
    copyNode: handleCopyNode,
    duplicateNode
  };
}
function useDriveActions(document, dispatch, context) {
  return useMemo(() => createDriveActions(document, dispatch, context), [document, dispatch, context]);
}

export {
  useDriveActions
};
