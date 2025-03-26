import {
  DRIVE,
  FILE
} from "./chunk-ESLOLNT6.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/hooks/useUiNodesContext.js
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
var defaultTreeItemContextValue = {
  driveNodes: [],
  selectedNode: null,
  selectedNodePath: [],
  selectedDriveNode: null,
  selectedParentNode: null,
  setDriveNodes: () => {
  },
  setSelectedNode: () => {
  },
  getNodeById: () => null,
  getParentNode: () => null,
  getIsSelected: () => false,
  getIsInSelectedNodePath: () => false,
  getSiblings: () => []
};
var UiNodesContext = createContext(defaultTreeItemContextValue);
var UiNodesContextProvider = ({ children }) => {
  const [driveNodes, setDriveNodes] = useState([]);
  const [selectedNode, _setSelectedNode] = useState(null);
  const [selectedNodePath, setSelectedNodePath] = useState([]);
  const [selectedDriveNode, setSelectedDriveNode] = useState(null);
  const [selectedParentNode, setSelectedParentNode] = useState(null);
  const _getNodeById = useCallback((id, driveNodes2) => {
    if (!driveNodes2?.length)
      return null;
    for (const driveNode of driveNodes2) {
      if (driveNode.id === id)
        return driveNode;
      const node = driveNode.nodeMap[id];
      if (node)
        return node;
    }
    return null;
  }, []);
  const getNodeById = useCallback((id) => {
    return _getNodeById(id, driveNodes);
  }, [_getNodeById, driveNodes]);
  const getSelectedDriveNode = useCallback((selectedNode2, driveNodes2) => {
    if (!selectedNode2 || !driveNodes2?.length)
      return null;
    if (selectedNode2.kind === DRIVE)
      return selectedNode2;
    return driveNodes2.find((d) => d.id === selectedNode2.driveId) ?? null;
  }, []);
  const _getParentNode = useCallback((node, driveNodes2) => {
    if (!driveNodes2?.length || node.kind === DRIVE) {
      return null;
    }
    const parentNode = _getNodeById(node.parentFolder, driveNodes2);
    if (!parentNode)
      return null;
    if (parentNode.kind === FILE) {
      throw new Error(`Parent node ${node.parentFolder} is a file, not a folder`);
    }
    return parentNode;
  }, [_getNodeById]);
  const getParentNode = useCallback((uiNode) => {
    return _getParentNode(uiNode, driveNodes);
  }, [_getParentNode, driveNodes]);
  const getSelectedParentNode = useCallback((selectedNode2, driveNodes2) => {
    if (!selectedNode2 || !driveNodes2?.length)
      return null;
    if (selectedNode2.kind === FILE)
      return _getParentNode(selectedNode2, driveNodes2);
    return selectedNode2;
  }, [_getParentNode]);
  const getPathToNode = useCallback((uiNode, driveNodes2) => {
    const path = [];
    const driveNode = driveNodes2.find((d) => d.id === uiNode.driveId);
    let current = uiNode;
    while (current) {
      path.push(current);
      current = current.parentFolder === driveNode?.id ? driveNode : current.parentFolder ? driveNode?.nodeMap[current.parentFolder] : void 0;
    }
    return path.reverse();
  }, []);
  const setSelectedNode = useCallback((uiNode) => {
    _setSelectedNode(uiNode);
    setSelectedDriveNode(getSelectedDriveNode(uiNode, driveNodes));
    setSelectedParentNode(getSelectedParentNode(uiNode, driveNodes));
    if (!uiNode) {
      setSelectedNodePath([]);
      return;
    }
    if (uiNode.kind === DRIVE) {
      setSelectedNodePath([uiNode]);
      return;
    }
    const newSelectedNodePath = getPathToNode(uiNode, driveNodes);
    setSelectedNodePath(newSelectedNodePath);
  }, [driveNodes, getPathToNode, getSelectedDriveNode, getSelectedParentNode]);
  const getIsSelected = useCallback((node) => {
    return selectedNode === node;
  }, [selectedNode]);
  const getIsInSelectedNodePath = useCallback((node) => {
    if (node.kind === FILE)
      return false;
    return selectedNodePath.includes(node);
  }, [selectedNodePath]);
  const getSiblings = useCallback((node) => {
    if (node.kind === DRIVE) {
      console.warn("Drive nodes do not have siblings, as they are top-level nodes");
      return [];
    }
    const parent = _getParentNode(node, driveNodes);
    return parent?.children ?? [];
  }, [_getParentNode, driveNodes]);
  useEffect(() => {
    if (!selectedNode)
      return;
    const updatedSelectedNode = _getNodeById(selectedNode.id, driveNodes);
    if (updatedSelectedNode) {
      setSelectedNode(updatedSelectedNode);
    }
  }, [driveNodes, _getNodeById, selectedNode, setSelectedNode]);
  const value = useMemo(() => ({
    driveNodes,
    selectedNode,
    selectedNodePath,
    selectedDriveNode,
    selectedParentNode,
    getNodeById,
    getParentNode,
    setDriveNodes,
    setSelectedNode,
    getIsSelected,
    getIsInSelectedNodePath,
    getSiblings
  }), [
    driveNodes,
    selectedNode,
    selectedNodePath,
    selectedDriveNode,
    selectedParentNode,
    getNodeById,
    getParentNode,
    setSelectedNode,
    getIsSelected,
    getIsInSelectedNodePath,
    getSiblings
  ]);
  return _jsx(UiNodesContext.Provider, { value, children });
};
var useUiNodesContext = () => {
  const contextValue = useContext(UiNodesContext);
  return contextValue;
};

export {
  UiNodesContext,
  UiNodesContextProvider,
  useUiNodesContext
};
