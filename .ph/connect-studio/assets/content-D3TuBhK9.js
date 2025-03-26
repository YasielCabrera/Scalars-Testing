import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { t as twMerge, B as Button, m as mergeClassNameProps, E as ERROR, M as MISSING, C as CONFLICT, S as SUCCESS, h as SYNCING, I as INITIAL_SYNC, i as ConnectDropdownMenu, u as useOnClickOutside, j as useEventListener, k as useCopyToClipboard, l as Select, n as ENSAvatar, P as Provider, o as Root3, T as Trigger, p as Portal, q as Content2, v as validateInitialState, w as validateStateSchemaName, x as validateModules, y as useUnwrappedReactor, z as useConnectDid, A as useConnectCrypto, D as useTranslation, F as useModal, G as useAtomValue, H as themeAtom, J as useUser, K as useUserPermissions, L as useUiNodes, N as exportFile, O as useGetDocumentModelModule, Q as addActionContext, U as signOperation, V as useDocumentDriveServer, W as useHotkeys, X as useGetEditor, Y as isSameDocument, Z as useNavigate, _ as ErrorBoundary, $ as DriveLayout, a0 as SearchBar, a1 as useAsyncReactor, a2 as useFilteredDocumentModels, a3 as useDriveEditor, a4 as useDocumentDriveById } from "./app-Bw1Ba-jV.js";
import * as React from "react";
import React__default, { useState, useCallback, useMemo, useEffect, Fragment, useRef, useLayoutEffect, memo as memo$1, createElement, useSyncExternalStore, Suspense } from "react";
import { _ as Icon, aX as getDimensions, aY as READ, aZ as nodeOptionsMap, a_ as defaultFileOptions, a$ as DELETE, b0 as RENAME, b1 as WRITE, b2 as DUPLICATE, b3 as defaultFolderOptions, b4 as garbageCollect, b5 as sortOperations, b6 as UI_NODE, aO as DRIVE, ay as FILE, b7 as undo, b8 as redo, ac as logger, b9 as useDocumentDispatch, aP as FOLDER, ak as driveDocumentModelModule } from "./app-loader-KTD3Q6e9.js";
import { useDocument, useDocumentEditorProps } from "@powerhousedao/reactor-browser";
import { useUiNodesContext, FILE as FILE$1 } from "@powerhousedao/reactor-browser/hooks/useUiNodesContext";
import { useDriveActionsWithUiNodes } from "@powerhousedao/reactor-browser/hooks/useDriveActionsWithUiNodes";
import { useDriveContext, DriveContextProvider } from "@powerhousedao/reactor-browser/hooks/useDriveContext";
import "@powerhousedao/reactor-browser/uiNodes/constants";
import { makeDriveDocumentStateHook } from "@powerhousedao/reactor-browser/hooks/document-state";
import { flushSync } from "react-dom";
import "./main.CzEw2R-H.js";
const PaginationButton = ({ active = false, ...props }) => {
  const className = twMerge("h-8 min-w-8 border border-solid border-gray-300 bg-white px-3 py-1 text-xs text-gray-900 hover:bg-gray-100", !active && "border-0");
  return jsx(Button, { color: "light", size: "small", ...mergeClassNameProps(props, className), children: props.children });
};
const Pagination = (props) => {
  const { pages = [], goToFirstPage, goToLastPage, goToNextPage, goToPreviousPage, goToPage, isNextPageAvailable, isPreviousPageAvailable, hiddenNextPages, firstPageLabel = "First", lastPageLabel = "Last", nextPageLabel = "Next", previousPageLabel = "Previous" } = props;
  return jsxs("div", { className: "flex gap-x-1", children: [firstPageLabel ? jsx(PaginationButton, { disabled: !isPreviousPageAvailable, onClick: () => goToFirstPage(), children: firstPageLabel }) : null, previousPageLabel ? jsxs(PaginationButton, { disabled: !isPreviousPageAvailable, onClick: () => goToPreviousPage(), children: [jsx(Icon, { className: "rotate-90", name: "ChevronDown", size: 16 }), previousPageLabel] }) : null, pages.map((page) => jsx(PaginationButton, { active: page.active, onClick: () => goToPage(page.index), children: page.number }, page.index)), hiddenNextPages ? jsx("span", { className: "flex items-center justify-center px-2", children: "..." }) : null, nextPageLabel ? jsxs(PaginationButton, { disabled: !isNextPageAvailable, onClick: () => goToNextPage(), children: [nextPageLabel, jsx(Icon, { className: "-rotate-90", name: "ChevronDown", size: 16 })] }) : null, lastPageLabel ? jsx(PaginationButton, { disabled: !isNextPageAvailable, onClick: () => goToLastPage(), children: lastPageLabel }) : null] });
};
function usePagination(items, options) {
  const { itemsPerPage = 20, initialPage = 0, pageRange = 3 } = options || {};
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const isNextPageAvailable = currentPage < pageCount - 1;
  const isPreviousPageAvailable = currentPage > 0;
  const goToNextPage = useCallback(() => {
    if (isNextPageAvailable) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [isNextPageAvailable, setCurrentPage]);
  const goToPreviousPage = useCallback(() => {
    if (isPreviousPageAvailable) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [isPreviousPageAvailable, setCurrentPage]);
  const goToLastPage = useCallback(() => {
    setCurrentPage(pageCount - 1);
  }, [pageCount]);
  const goToFirstPage = useCallback(() => {
    setCurrentPage(0);
  }, []);
  const goToPage = useCallback((page) => {
    if (page >= 0 && page < pageCount) {
      setCurrentPage(page);
    }
  }, [pageCount]);
  const pageOffset = Math.floor((pageRange - 1) / 2);
  const availableRange = Math.min(pageRange, pageCount);
  const maxStartIndex = Math.max(pageCount - availableRange);
  const startIndex = Math.min(maxStartIndex, Math.max(currentPage - pageOffset, 0));
  const pages = useMemo(() => {
    const range = [];
    for (let i = startIndex; i < availableRange + startIndex; i++) {
      range.push({
        index: i,
        active: i === currentPage,
        number: i + 1
      });
    }
    return range;
  }, [availableRange, startIndex, currentPage]);
  const pageItems = items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
  const hiddenNextPages = pages.length > 0 && pages.slice(-1)[0].index < pageCount - 1;
  return {
    pages,
    goToPage,
    pageItems,
    pageCount,
    currentPage,
    goToLastPage,
    goToFirstPage,
    goToNextPage,
    hiddenNextPages,
    goToPreviousPage,
    isNextPageAvailable,
    isPreviousPageAvailable
  };
}
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  });
  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    };
    window.addEventListener("resize", windowSizeHandler);
    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);
  return windowSize;
};
const ConnectLoaderVideo = "/assets/connect-loader-CvOC68Ih.mp4";
function AnimatedLoader(props) {
  var _a, _b;
  const { style, size = 100, ...delegatedProps } = props;
  const dimensions = getDimensions(size);
  const _style = {
    objectFit: "contain",
    pointerEvents: "none",
    ...dimensions,
    ...style
  };
  const width = (_a = dimensions.width) == null ? void 0 : _a.replace("px", "");
  const height = (_b = dimensions.height) == null ? void 0 : _b.replace("px", "");
  return jsx("video", { autoPlay: true, height, loop: true, muted: true, playsInline: true, width, ...delegatedProps, style: _style, children: jsx("source", { src: ConnectLoaderVideo, type: "video/mp4" }) });
}
function Breadcrumbs(props) {
  const { breadcrumbs, createEnabled, onBreadcrumbSelected } = props;
  const [isCreating, setIsCreating] = useState(false);
  const onCreate = props.createEnabled ? props.onCreate : void 0;
  function onAddNew() {
    setIsCreating(true);
  }
  const onSubmit = useCallback((name) => {
    var _a;
    if (!createEnabled || !onCreate)
      return;
    onCreate(name, (_a = breadcrumbs.at(-1)) == null ? void 0 : _a.id);
    setIsCreating(false);
  }, [breadcrumbs, createEnabled, onCreate]);
  const onCancel = useCallback(() => {
    setIsCreating(false);
  }, []);
  return jsxs("div", { className: "flex h-9 flex-row items-center gap-2 p-6 text-gray-500", children: [breadcrumbs.map((node) => jsxs(Fragment, { children: [jsx(Breadcrumb, { node, onClick: onBreadcrumbSelected }), jsx("span", { children: "/" })] }, node.id)), createEnabled && (isCreating ? jsx(NodeInput, { className: "text-gray-800", defaultValue: "New Folder", onCancel, onSubmit, placeholder: "New Folder" }) : jsxs("button", { type: "button", className: "ml-1 flex items-center justify-center gap-2 rounded-md bg-gray-50 px-2 py-1.5 transition-colors hover:bg-gray-200 hover:text-gray-800", onClick: onAddNew, children: [jsx(Icon, { name: "Plus", size: 14 }), "Add new"] }))] });
}
function Breadcrumb(props) {
  const { node, onClick } = props;
  return jsx("div", { className: "transition-colors last-of-type:text-gray-800 hover:text-gray-800", onClick: () => onClick(node), role: "button", children: node.name });
}
function useBreadcrumbs({ selectedNodePath, getNodeById, setSelectedNode }) {
  const breadcrumbs = useMemo(() => selectedNodePath.map((node) => ({
    id: node.id,
    name: node.name
  })), [selectedNodePath]);
  const onBreadcrumbSelected = useCallback((breadcrumb) => {
    const node = getNodeById(breadcrumb.id);
    if (node) {
      setSelectedNode(node);
    } else {
      console.error(`Node with id ${breadcrumb.id} not found`, breadcrumb);
    }
  }, [getNodeById, setSelectedNode]);
  return {
    breadcrumbs,
    onBreadcrumbSelected
  };
}
function DefaultEditorLoader(props) {
  const { message: message2 = "Loading editor", ...divProps } = props;
  return jsx("div", { className: "grid h-full place-items-center", ...divProps, children: jsxs("div", { className: "-mt-20 grid place-items-center", children: [jsx("h3", { className: "mb-4 text-xl", children: message2 }), jsx(AnimatedLoader, {})] }) });
}
const DocumentToolbar = (props) => {
  const { undo: undo2, canUndo, redo: redo2, canRedo, title, onClose, onExport, className, onShowRevisionHistory, onSwitchboardLinkClick } = props;
  return jsxs("div", { className: twMerge("flex items-center justify-between", className), children: [jsx("div", { children: undo2 && redo2 && canUndo && canRedo && jsx(EditorUndoRedoButtons, { undo: undo2, canUndo, redo: redo2, canRedo }) }), jsx("div", { children: jsx("h2", { className: "text-sm font-semibold", children: title }) }), jsx("div", { children: jsx(EditorActionButtons, { onClose, onExport, onShowRevisionHistory, onSwitchboardLinkClick }) })] });
};
function EditorActionButtons(props) {
  const { onSwitchboardLinkClick, onExport, onClose, onShowRevisionHistory } = props;
  return jsxs("div", { className: "flex gap-x-2", children: [onSwitchboardLinkClick ? jsx("button", { className: "flex h-8 items-center gap-x-2 rounded border border-gray-200 px-3 text-sm font-semibold text-gray-900 active:opacity-50", onClick: onSwitchboardLinkClick, children: jsx(Icon, { name: "Drive", size: 16 }) }) : null, jsxs("button", { className: "flex h-8 items-center gap-x-2 rounded border border-gray-200 px-3 text-sm font-semibold text-gray-900 active:opacity-50", onClick: onExport, children: ["Export ", jsx(Icon, { name: "Save", size: 16 })] }), jsxs("button", { className: "flex h-8 items-center gap-x-2 whitespace-nowrap rounded border border-gray-200 px-3 text-sm font-semibold text-gray-900 active:opacity-50", onClick: onShowRevisionHistory, children: ["Revision history ", jsx(Icon, { name: "History", size: 16 })] }), jsx("button", { className: "grid size-8 place-items-center rounded border border-gray-200 active:opacity-50", onClick: onClose, children: jsx(Icon, { name: "Xmark" }) })] });
}
function EditorUndoRedoButtons(props) {
  const { canUndo, canRedo, undo: undo2, redo: redo2 } = props;
  const buttonStyles = "w-8 h-8 rounded-lg flex justify-center items-center rounded border border-gray-200";
  return jsxs("div", { className: "flex gap-x-2 text-gray-500", children: [jsx("button", { className: buttonStyles, disabled: !canUndo, onClick: undo2, children: jsx(Icon, { className: twMerge("-scale-x-100", canUndo ? "text-gray-900 active:opacity-50" : "text-gray-500"), name: "RedoArrow", size: 18 }) }), jsx("button", { className: buttonStyles, disabled: !canRedo, onClick: redo2, children: jsx(Icon, { className: twMerge(canRedo ? "text-gray-900 active:opacity-50" : "text-gray-500"), name: "RedoArrow", size: 18 }) })] });
}
const syncIcons = {
  SYNCING: "Syncing",
  SUCCESS: "Synced",
  CONFLICT: "Error",
  MISSING: "Circle",
  ERROR: "Error",
  INITIAL_SYNC: "Syncing"
};
function SyncStatusIcon(props) {
  const { syncStatus, className, overrideSyncIcons = {}, ...iconProps } = props;
  const icons = { ...syncIcons, ...overrideSyncIcons };
  const syncStatusIcons = {
    [INITIAL_SYNC]: jsx(Icon, { size: 16, ...iconProps, className: twMerge("text-blue-900", className), name: icons[INITIAL_SYNC] }),
    [SYNCING]: jsx(Icon, { size: 16, ...iconProps, className: twMerge("text-blue-900", className), name: icons[SYNCING] }),
    [SUCCESS]: jsx(Icon, { size: 16, ...iconProps, className: twMerge("text-green-900", className), name: icons[SUCCESS] }),
    [CONFLICT]: jsx(Icon, { size: 16, ...iconProps, className: twMerge("text-orange-900", className), name: icons[CONFLICT] }),
    [MISSING]: jsx(Icon, { size: 16, ...iconProps, className: twMerge("text-red-900", className), name: icons[MISSING] }),
    [ERROR]: jsx(Icon, { size: 16, ...iconProps, className: twMerge("text-red-900", className), name: icons[ERROR] })
  };
  return syncStatusIcons[syncStatus];
}
function FileItem(props) {
  const { uiNode, className, customDocumentIconSrc, onSelectNode, onRenameNode, onDuplicateNode, onDeleteNode, isAllowedToCreateDocuments } = props;
  const [mode, setMode] = useState(READ);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const { dragProps } = useDrag({ uiNode });
  const isReadMode = mode === READ;
  const dropdownMenuHandlers = {
    [DUPLICATE]: () => onDuplicateNode(uiNode),
    [RENAME]: () => setMode(WRITE),
    [DELETE]: () => onDeleteNode(uiNode)
  };
  const dropdownMenuOptions = Object.entries(nodeOptionsMap).map(([id, option]) => ({
    ...option,
    id
  })).filter((option) => defaultFileOptions.includes(option.id));
  function onSubmit(name) {
    onRenameNode(name, uiNode);
    setMode(READ);
  }
  function onCancel() {
    setMode(READ);
  }
  function onClick() {
    onSelectNode(uiNode);
  }
  function onDropdownMenuOptionClick(itemId) {
    const handler = dropdownMenuHandlers[itemId];
    if (!handler) {
      console.error(`No handler found for dropdown menu item: ${itemId}`);
      return;
    }
    handler();
    setIsDropdownMenuOpen(false);
  }
  const iconSrc = getDocumentIconSrc(uiNode.documentType, customDocumentIconSrc);
  const iconNode = jsxs("div", { className: "relative", children: [jsx("img", { alt: "file icon", className: "max-w-none", height: 34, src: iconSrc, width: 32 }), isReadMode && uiNode.syncStatus && jsx("div", { className: "absolute bottom-[-2px] right-0 size-3 rounded-full bg-white", children: jsx("div", { className: "absolute left-[-2px] top-[-2px]", children: jsx(SyncStatusIcon, { overrideSyncIcons: { SUCCESS: "CheckCircleFill" }, syncStatus: uiNode.syncStatus }) }) })] });
  const containerStyles = twMerge("group flex h-12 cursor-pointer select-none items-center rounded-lg bg-gray-200 px-2 text-gray-600 hover:text-gray-800", className);
  const content = isReadMode ? jsxs("div", { className: "flex w-52 items-center justify-between", children: [jsxs("div", { className: "mr-2 truncate group-hover:mr-0", children: [jsx("div", { className: "max-h-6 truncate text-sm font-medium group-hover:text-gray-800", children: uiNode.name }), jsx("div", { className: "max-h-6 truncate text-xs font-medium text-gray-600 group-hover:text-gray-800", children: uiNode.documentType })] }), isAllowedToCreateDocuments ? jsx(ConnectDropdownMenu, { items: dropdownMenuOptions, onItemClick: onDropdownMenuOptionClick, onOpenChange: setIsDropdownMenuOpen, open: isDropdownMenuOpen, children: jsx("button", { className: twMerge("hidden group-hover:block", isDropdownMenuOpen && "block"), onClick: (e) => {
    e.stopPropagation();
    setIsDropdownMenuOpen(true);
  }, children: jsx(Icon, { className: "text-gray-600", name: "VerticalDots" }) }) }) : null] }) : jsx(NodeInput, { className: "ml-3 flex-1 font-medium", defaultValue: uiNode.name, onCancel, onSubmit });
  return jsx("div", { className: "relative w-64", onClick, children: jsx("div", { ...dragProps, className: containerStyles, children: jsxs("div", { className: "flex items-center", children: [jsx("div", { className: "mr-1.5", children: iconNode }), content] }) }) });
}
function FolderItem(props) {
  const { uiNode, isAllowedToCreateDocuments, className, onRenameNode, onDuplicateNode, onDeleteNode, onSelectNode, onAddFile, onCopyNode, onMoveNode } = props;
  const [mode, setMode] = useState(READ);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const { dragProps } = useDrag(props);
  const { isDropTarget, dropProps } = useDrop({
    uiNode,
    onAddFile,
    onCopyNode,
    onMoveNode
  });
  const isReadMode = mode === READ;
  function onCancel() {
    setMode(READ);
  }
  function onSubmit(name) {
    onRenameNode(name, uiNode);
  }
  function onClick() {
    onSelectNode(uiNode);
  }
  const dropdownMenuHandlers = {
    [DUPLICATE]: () => onDuplicateNode(uiNode),
    [RENAME]: () => setMode(WRITE),
    [DELETE]: () => onDeleteNode(uiNode)
  };
  const dropdownMenuOptions = Object.entries(nodeOptionsMap).map(([id, option]) => ({
    ...option,
    id
  })).filter((option) => defaultFolderOptions.includes(option.id));
  function onDropdownMenuOptionClick(itemId) {
    const handler = dropdownMenuHandlers[itemId];
    if (!handler) {
      console.error(`No handler found for dropdown menu item: ${itemId}`);
      return;
    }
    handler();
    setIsDropdownMenuOpen(false);
  }
  const content = isReadMode || !isAllowedToCreateDocuments ? jsx("div", { className: "ml-3 max-h-6 truncate font-medium text-gray-600 group-hover:text-gray-800", children: uiNode.name }) : jsx(NodeInput, { className: "ml-3 font-medium", defaultValue: uiNode.name, onCancel, onSubmit });
  const containerStyles = twMerge("group flex h-12 cursor-pointer select-none items-center rounded-lg bg-gray-200 px-2", className, isDropTarget && "bg-blue-100");
  return jsx("div", { className: "relative w-64", onClick, children: jsxs("div", { ...dragProps, ...dropProps, className: containerStyles, children: [jsxs("div", { className: "flex items-center overflow-hidden", children: [jsx("div", { className: "p-1", children: jsxs("div", { className: "relative", children: [jsx(Icon, { name: "FolderClose", size: 24 }), isReadMode && uiNode.syncStatus ? jsx("div", { className: "absolute bottom-[-3px] right-[-2px] size-3 rounded-full bg-white", children: jsx("div", { className: "absolute left-[-2px] top-[-2px]", children: jsx(SyncStatusIcon, { overrideSyncIcons: {
    SUCCESS: "CheckCircleFill"
  }, syncStatus: uiNode.syncStatus }) }) }) : null] }) }), content] }), isReadMode && isAllowedToCreateDocuments ? jsx(ConnectDropdownMenu, { items: dropdownMenuOptions, onItemClick: onDropdownMenuOptionClick, onOpenChange: setIsDropdownMenuOpen, open: isDropdownMenuOpen, children: jsx("button", { className: twMerge("ml-auto hidden group-hover:block", isDropdownMenuOpen && "block"), onClick: (e) => {
    e.stopPropagation();
    setIsDropdownMenuOpen(true);
  }, children: jsx(Icon, { className: "text-gray-600", name: "VerticalDots" }) }) }) : null] }) });
}
const millisecondsInWeek = 6048e5;
const millisecondsInDay = 864e5;
const constructFromSymbol = Symbol.for("constructDateFrom");
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function startOfWeek(date, options) {
  var _a, _b, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions2.weekStartsOn ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}
function getISOWeekYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}
function startOfDay(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
function startOfYear(date, options) {
  const date_ = toDate(date, options == null ? void 0 : options.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options == null ? void 0 : options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = (options == null ? void 0 : options.context) ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = (options == null ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}
const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
const enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function getDayOfYear(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
function getISOWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function getWeekYear(date, options) {
  var _a, _b, _c, _d;
  const _date = toDate(date, options == null ? void 0 : options.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const firstWeekOfNextYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfWeekYear(date, options) {
  var _a, _b, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions2.firstWeekContainsDate ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom((options == null ? void 0 : options.in) || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}
function getWeek(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}
const lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
const dayPeriodEnum = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
const dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  var _a, _b, _c, _d;
  const defaultOptions2 = getDefaultOptions();
  const locale = defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = defaultOptions2.firstWeekContainsDate ?? ((_b = (_a = defaultOptions2.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? 1;
  const weekStartsOn = defaultOptions2.weekStartsOn ?? ((_d = (_c = defaultOptions2.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
  const originalDate = toDate(date, options == null ? void 0 : options.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (isProtectedWeekYearToken(token) || isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
function NodeInput(props) {
  const { onSubmit, onCancel, defaultValue, className, minLength = 1, ...inputProps } = props;
  const [value, setValue] = useState(defaultValue ?? "");
  const ref = useRef(null);
  useOnClickOutside(ref, handleSubmit);
  useEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
    if (e.key === "Escape") {
      onCancel();
    }
  });
  useLayoutEffect(() => {
    setTimeout(() => {
      var _a, _b, _c;
      (_a = ref.current) == null ? void 0 : _a.focus();
      (_b = ref.current) == null ? void 0 : _b.select();
      (_c = ref.current) == null ? void 0 : _c.scroll({ left: 9999 });
    }, 100);
  }, []);
  function handleSubmit() {
    if (value.length >= minLength) {
      onSubmit(value);
    }
  }
  return jsx("input", { ...inputProps, autoFocus: true, className: twMerge("bg-inherit text-inherit outline-none", className), minLength, onChange: (e) => setValue(e.target.value), ref, required: true, type: "text", value });
}
function Branch(props) {
  const { branch = "main" } = props;
  return jsxs("button", { className: "flex h-8 items-center gap-1 rounded-lg bg-slate-50 pl-1 pr-2 text-xs text-slate-100", children: [jsx(Icon, { name: "Branch" }), jsx("span", { children: "BRANCH" }), jsx("span", { className: "text-gray-900", children: branch })] });
}
function DocId(props) {
  const { docId } = props;
  const [, copy] = useCopyToClipboard();
  function handleCopy(text) {
    return () => {
      copy(text).catch((error) => {
        console.error("Failed to copy!", error);
      });
    };
  }
  return jsxs("button", { className: "flex h-8 items-center gap-1 rounded-lg bg-slate-50 pl-1 pr-2 text-xs text-slate-100", onClick: handleCopy(docId), children: [jsx(Icon, { name: "Link" }), "DOC ID", jsx("span", { className: "text-gray-900", children: docId })] });
}
function Scope(props) {
  const { value, onChange } = props;
  const items = [
    { displayValue: "Global scope", value: "global" },
    { displayValue: "Local scope", value: "local" }
  ];
  return jsx(Select, { absolutePositionMenu: true, containerClassName: "bg-slate-50 text-gray-500 rounded-lg w-fit text-xs z-10", id: "scope select", itemClassName: "py-2 text-gray-500 grid grid-cols-[auto,auto] gap-1", items, menuClassName: "min-w-0 text-gray-500", onChange, value });
}
function Header(props) {
  const { title, docId, scope, onChangeScope, onClose, className, ...divProps } = props;
  return jsxs("header", { className: twMerge("flex items-center justify-between bg-transparent", className), ...divProps, children: [jsxs("div", { className: "flex items-center gap-3", children: [jsx("button", { className: "shadow-button rounded-lg bg-gray-50 p-1 text-slate-100", onClick: onClose, children: jsx(Icon, { name: "VariantArrowLeft" }) }), jsx("h1", { className: "text-xs", children: title })] }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(DocId, { docId }), jsx(Branch, {}), jsx(Scope, { onChange: onChangeScope, value: scope })] })] });
}
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  function memoizedFunction() {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  }
  memoizedFunction.updateDeps = (newDeps) => {
    deps = newDeps;
  };
  return memoizedFunction;
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${""}`);
  } else {
    return value;
  }
}
const approxEqual = (a, b) => Math.abs(a - b) < 1;
const debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};
const defaultKeyExtractor = (index) => index;
const defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};
const observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = () => {
      const entry = entries[0];
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(element.getBoundingClientRect());
    };
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
const addEventListenerOptions = {
  passive: true
};
const supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
const observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
  };
};
const measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
const elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
class Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = () => {
              this._measureElement(entry.target, entry);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d) => d());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
            this.scrollOffset = offset;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m = index - 1; m >= 0; m--) {
        const measurement = measurements[m];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
        if (a.end === b.end) {
          return a.index - b.index;
        }
        return a.end - b.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min);
        for (let i = min; i < count; i++) {
          const key = getItemKey(i);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
          const end = start + size;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
          measurements[i] = {
            index: i,
            start,
            size,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (measurements, outerSize, scrollOffset, lanes) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset,
          lanes
        }) : null;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualIndexes = memo(
      () => {
        let startIndex = null;
        let endIndex = null;
        const range = this.calculateRange();
        if (range) {
          startIndex = range.startIndex;
          endIndex = range.endIndex;
        }
        this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
        return [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          startIndex,
          endIndex
        ];
      },
      (rangeExtractor, overscan, count, startIndex, endIndex) => {
        return startIndex === null || endIndex === null ? [] : rangeExtractor({
          startIndex,
          endIndex,
          overscan,
          count
        });
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index = this.indexFromElement(node);
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index, size) => {
      const item = this.measurementsCache[index];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k = 0, len = indexes.length; k < len; k++) {
          const i = indexes[k];
          const measurement = measurements[i];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: false,
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index) => notUndefined(measurements[index]).start,
          offset
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        align = toOffset >= scrollOffset + size ? "end" : "start";
      }
      if (align === "center") {
        toOffset += (itemSize - size) / 2;
      } else if (align === "end") {
        toOffset -= size;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - size;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const item = this.measurementsCache[index];
      if (!item) {
        return void 0;
      }
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(toOffset, align, item.size),
        align
      ];
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
        this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const offsetAndAlign = this.getOffsetForIndex(index, initialAlign);
      if (!offsetAndAlign) return;
      const [offset, align] = offsetAndAlign;
      this._scrollToOffset(offset, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
        this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.elementsCache.has(
            this.options.getItemKey(index)
          );
          if (elementInDOM) {
            const [latestOffset] = notUndefined(
              this.getOffsetForIndex(index, align)
            );
            if (!approxEqual(latestOffset, this.getScrollOffset())) {
              this.scrollToIndex(index, { align, behavior });
            }
          } else {
            this.scrollToIndex(index, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else if (this.options.lanes === 1) {
        end = ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0;
      } else {
        const endByLane = Array(this.options.lanes).fill(null);
        let endIndex = measurements.length - 1;
        while (endIndex > 0 && endByLane.some((val) => val === null)) {
          const item = measurements[endIndex];
          if (endByLane[item.lane] === null) {
            endByLane[item.lane] = item.end;
          }
          endIndex--;
        }
        end = Math.max(...endByLane.filter((val) => val !== null));
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
}
const findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset,
  lanes
}) {
  const lastIndex = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  let startIndex = findNearestBinarySearch(
    0,
    lastIndex,
    getOffset,
    scrollOffset
  );
  let endIndex = startIndex;
  if (lanes === 1) {
    while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
      endIndex++;
    }
  } else if (lanes > 1) {
    const endPerLane = Array(lanes).fill(0);
    while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
      const item = measurements[endIndex];
      endPerLane[item.lane] = item.end;
      endIndex++;
    }
    const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
    while (startIndex > 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
      const item = measurements[startIndex];
      startPerLane[item.lane] = item.start;
      startIndex--;
    }
    startIndex = Math.max(0, startIndex - startIndex % lanes);
    endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
  }
  return { startIndex, endIndex };
}
const useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase(options) {
  const rerender = React.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        flushSync(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}
function Address(props) {
  const { address, chainId } = props;
  const [, copy] = useCopyToClipboard();
  if (!address)
    return null;
  const shortenedAddress = formatEthAddress(address);
  function handleCopy(text) {
    return () => {
      copy(text).catch((error) => {
        console.error("Failed to copy!", error);
      });
    };
  }
  const tooltipContent = jsxs("button", { className: "flex items-center gap-1", onClick: handleCopy(address), children: [address, jsx(Icon, { className: "inline-block text-gray-600", name: "FilesEarmark", size: 16 })] });
  return jsx(Tooltip, { content: tooltipContent, children: jsxs("span", { className: "flex w-fit cursor-pointer items-center gap-1 rounded-lg bg-gray-100 p-1 text-xs text-slate-100", children: [jsx(ENSAvatar, { address, chainId }), shortenedAddress] }) });
}
function Errors(props) {
  const { errors } = props;
  const hasErrors = !!(errors == null ? void 0 : errors.length);
  const color = hasErrors ? "text-red-800" : "text-green-700";
  const icon = hasErrors ? jsx(Icon, { name: "Exclamation", size: 16 }) : jsx(Icon, { name: "Check", size: 16 });
  const text = hasErrors ? `Error: ${errors[0]}` : "No errors";
  const content = jsxs("span", { className: twMerge("flex w-fit items-center rounded-lg border border-gray-200 px-2 py-1 text-xs", color, hasErrors && "cursor-pointer"), children: [icon, jsx("span", { className: twMerge("inline-block max-w-36 truncate"), children: text })] });
  const tooltipContent = errors == null ? void 0 : errors.map((message2, index) => jsxs("p", { className: "text-red-800", children: ["Error: ", message2] }, index));
  if (hasErrors)
    return jsx(Tooltip, { content: tooltipContent, children: content });
  return content;
}
function Operation(props) {
  const { operationType, operationInput } = props;
  const tooltipContent = jsx("code", { children: jsx("pre", { children: JSON.stringify(operationInput, null, 2) }) });
  return jsx(Tooltip, { content: tooltipContent, children: jsxs("span", { className: "flex cursor-pointer items-center gap-2 text-xs", children: [operationType, jsx(Icon, { className: "text-gray-300", name: "Braces", size: 16 })] }) });
}
function RevisionNumber(props) {
  const { operationIndex, eventId, stateHash } = props;
  const [, copy] = useCopyToClipboard();
  const revisionNumber = operationIndex + 1;
  const tooltipContent = jsxs("button", { className: "flex items-center gap-1", onClick: handleCopy(stateHash), children: ["Revision ", revisionNumber, " - Event ID: ", eventId, " - State Hash: ", stateHash, jsx(Icon, { className: "inline-block text-gray-600", name: "FilesEarmark", size: 16 })] });
  function handleCopy(text) {
    return () => {
      copy(text).catch((error) => {
        console.error("Failed to copy!", error);
      });
    };
  }
  return jsx(Tooltip, { content: tooltipContent, children: jsxs("span", { className: "flex cursor-pointer items-center gap-2 text-xs text-gray-600", children: ["Revision ", revisionNumber, ".", jsx("a", { children: jsx(Icon, { className: "cursor-pointer text-slate-100", name: "Ellipsis", size: 14 }) })] }) });
}
function Signature(props) {
  const { signatures } = props;
  if (!(signatures == null ? void 0 : signatures.length))
    return null;
  const tooltipContent = jsxs("div", { className: "text-xs text-slate-300", children: [jsx("h3", { className: "mb-2", children: "Signature details:" }), signatures.map((signature, index) => jsxs("div", { className: "mb-2 last:mb-0", children: [jsxs("h4", { children: ["Signature #", index + 1, " -", " ", signature.isVerified ? "verified" : "unverified"] }), jsx("code", { children: jsx("pre", { children: JSON.stringify(signature, null, 2) }) })] }, signature.hash))] });
  return jsx(Tooltip, { content: tooltipContent, children: jsxs("span", { className: "flex w-fit cursor-pointer items-center gap-1 rounded-lg border border-gray-200 px-2 py-1", children: [jsx(VerificationStatus, { signatures }), " ", jsx(Icon, { className: "text-gray-300", name: "InfoSquare", size: 16 })] }) });
}
function VerificationStatus(props) {
  const { signatures } = props;
  if (!(signatures == null ? void 0 : signatures.length))
    return null;
  const signatureCount = signatures.length;
  const verifiedSignaturesCount = signatures.filter((signature) => signature.isVerified).length;
  const signatureText = signatureCount === 1 ? "signature" : "signatures";
  const verificationStatusText = `${verifiedSignaturesCount}/${signatureCount} ${signatureText} verified`;
  const color = verifiedSignaturesCount === 0 ? "text-red-800" : verifiedSignaturesCount === signatureCount ? "text-green-700" : "text-orange-700";
  return jsx("span", { className: `text-xs ${color}`, children: verificationStatusText });
}
function Timestamp(props) {
  const { timestamp } = props;
  const timestampNumber = typeof timestamp === "string" && !timestamp.includes("-") ? parseInt(timestamp) : timestamp;
  const date = new Date(timestampNumber);
  const shortDate = format(date, "HH:mm 'UTC'");
  const longDate = format(date, "eee, dd MMM yyyy HH:mm:ss 'UTC'");
  const tooltipContent = jsx("div", { children: longDate });
  return jsx(Tooltip, { content: tooltipContent, children: jsxs("span", { className: "cursor-pointer text-xs", children: ["committed at ", shortDate] }) });
}
function _Revision(props) {
  return jsxs("article", { className: "flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2", children: [jsxs("div", { className: "flex items-center gap-2", children: [jsx(RevisionNumber, { ...props }), jsx(Operation, { ...props }), jsx(Address, { ...props }), jsx(Timestamp, { ...props })] }), jsxs("div", { className: "flex items-center gap-1", children: [jsx(Signature, { ...props }), jsx(Errors, { ...props })] })] });
}
const Revision = memo$1(_Revision);
function Skip(props) {
  const { operationIndex, skipCount } = props;
  const revisionNumber = operationIndex;
  const skippedRevisions = skipCount === 1 ? `${revisionNumber}` : `${revisionNumber} - ${revisionNumber + 1 - skipCount}`;
  return jsxs("article", { className: "grid grid-cols-[1fr,auto,1fr] items-center py-2", children: [jsx("div", { className: "h-px rounded-full bg-slate-100" }), jsxs("div", { className: "mx-3 text-xs text-slate-100", children: ["[Skipped Revision ", skippedRevisions, "]"] }), jsx("div", { className: "h-px rounded-full bg-slate-100" })] });
}
function makeRows(operations) {
  var _a, _b, _c, _d, _e, _f;
  const revisionsAndSkips = [];
  const seenDays = /* @__PURE__ */ new Set();
  for (const operation of operations) {
    const day = operation.timestamp.split("T")[0];
    if (!seenDays.has(day)) {
      seenDays.add(day);
      revisionsAndSkips.push({
        type: "day",
        height: 32,
        timestamp: day
      });
    }
    revisionsAndSkips.push({
      type: "revision",
      height: 46,
      operationIndex: operation.index,
      eventId: operation.id ?? "EVENT_ID_NOT_FOUND",
      stateHash: operation.hash,
      operationType: operation.type,
      operationInput: operation.input ?? {},
      address: (_b = (_a = operation.context) == null ? void 0 : _a.signer) == null ? void 0 : _b.user.address,
      chainId: (_d = (_c = operation.context) == null ? void 0 : _c.signer) == null ? void 0 : _d.user.chainId,
      timestamp: operation.timestamp,
      signatures: makeSignatures(((_f = (_e = operation.context) == null ? void 0 : _e.signer) == null ? void 0 : _f.signatures) ?? []),
      errors: operation.error ? [operation.error] : void 0
    });
    if (operation.skip > 0) {
      revisionsAndSkips.push({
        type: "skip",
        height: 34,
        operationIndex: operation.index,
        skipCount: operation.skip,
        timestamp: operation.timestamp
      });
    }
  }
  return revisionsAndSkips;
}
function makeSignatureFromSignatureArray(signatureArray) {
  const [signerAddress, hash, prevStateHash, signatureBytes] = signatureArray;
  return {
    signerAddress,
    hash,
    prevStateHash,
    signatureBytes,
    isVerified: true
  };
}
function makeSignatures(signaturesArray) {
  return signaturesArray == null ? void 0 : signaturesArray.map(makeSignatureFromSignatureArray);
}
function Day(props) {
  const { timestamp } = props;
  const formattedDate = format(timestamp, "MMM dd, yyyy");
  return jsxs("h2", { className: "-ml-6 flex items-center gap-1 bg-slate-50 py-2 text-xs text-slate-100", children: [jsx(Icon, { name: "Ring", size: 16 }), " Changes on ", formattedDate] });
}
function Timeline(props) {
  const { localOperations, globalOperations, scope } = props;
  const operations = scope === "local" ? localOperations : globalOperations;
  const initialNumRowsToShow = 100;
  const allRows = useMemo(() => makeRows(operations), [operations]);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [numRowsToShow, setNumRowsToShow] = useState(initialNumRowsToShow);
  const [rows, setRows] = useState(() => allRows.slice(0, numRowsToShow));
  const parentRef = useRef(null);
  const hasNextPage = rows.length < allRows.length;
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (i) => allRows[i].height,
    gap: 8
  });
  useEffect(() => {
    if (!hasNextPage)
      return;
    const ratio = Math.floor(scrollAmount / 46);
    const newNumRevisions = initialNumRowsToShow + ratio;
    setNumRowsToShow((prev) => newNumRevisions > prev ? newNumRevisions : prev);
  }, [scrollAmount, hasNextPage]);
  useEffect(() => {
    setRows(allRows.slice(0, numRowsToShow));
  }, [allRows, numRowsToShow]);
  const handleScroll = (e) => {
    setScrollAmount((prev) => {
      const n = prev + e.deltaY;
      if (n < 0) {
        return 0;
      }
      return n;
    });
  };
  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return jsx("div", { className: "border-l border-slate-100", ref: parentRef, style: {
    height: `${rowVirtualizer.getTotalSize()}px`,
    width: "100%",
    position: "relative"
  }, children: rowVirtualizer.getVirtualItems().map((virtualRow) => {
    const row = rows[virtualRow.index];
    return jsxs("div", { style: {
      position: "absolute",
      top: 0,
      left: 16,
      width: "100%",
      height: `${virtualRow.size}px`,
      transform: `translateY(${virtualRow.start}px)`
    }, children: [row.type === "revision" && createElement(Revision, { ...row, key: virtualRow.key }), row.type === "skip" && jsx(Skip, { ...row }, virtualRow.key), row.type === "day" && jsx(Day, { ...row }, virtualRow.key)] }, virtualRow.index);
  }) });
}
function RevisionHistory(props) {
  const { documentTitle, documentId, globalOperations, localOperations, onClose, itemsPerPage = 100 } = props;
  const [scope, setScope] = useState("global");
  const visibleOperations = useMemo(() => {
    const operations = scope === "global" ? globalOperations : localOperations;
    return garbageCollect(sortOperations(operations)).sort((a, b) => b.index - a.index);
  }, [globalOperations, localOperations, scope]);
  const { pageItems, pages, goToPage, goToNextPage, goToPreviousPage, goToFirstPage, goToLastPage, hiddenNextPages, isNextPageAvailable, isPreviousPageAvailable } = usePagination(visibleOperations, {
    itemsPerPage
  });
  function onChangeScope(scope2) {
    goToFirstPage();
    setScope(scope2);
  }
  const showPagination = visibleOperations.length > itemsPerPage;
  const PaginationComponent = showPagination ? jsx("div", { className: "mt-4 flex w-full justify-end", children: jsx(Pagination, { firstPageLabel: "First Page", goToFirstPage, goToLastPage, goToNextPage, goToPage, goToPreviousPage, hiddenNextPages, isNextPageAvailable, isPreviousPageAvailable, lastPageLabel: "Last Page", nextPageLabel: "Next", pages, previousPageLabel: "Previous" }) }) : jsx("hr", { className: "h-12 border-none" });
  return jsxs(TooltipProvider, { children: [jsx(Header, { docId: documentId, onChangeScope, onClose, scope, title: documentTitle }), PaginationComponent, jsx("div", { className: "mt-4 flex justify-center rounded-md bg-slate-50 p-4", children: visibleOperations.length > 0 ? jsx("div", { className: "grid grid-cols-[minmax(min-content,1018px)]", children: jsx(Timeline, { globalOperations: scope === "global" ? pageItems : [], localOperations: scope === "local" ? pageItems : [], scope }) }) : jsx("h3", { className: "my-40 text-gray-600", children: "This document has no recorded operations yet." }) }), PaginationComponent] });
}
function Tooltip(props) {
  const { children, content, open, defaultOpen, onOpenChange, className, ...rest } = props;
  return jsxs(Root3, { defaultOpen, delayDuration: 0, onOpenChange, open, children: [jsx(Trigger, { asChild: true, children }), jsx(Portal, { children: jsx(Content2, { ...rest, className: twMerge("shadow-tooltip rounded-lg border border-gray-200 bg-white p-2 text-xs", className), children: content }) })] });
}
const TooltipProvider = Provider;
const BUDGET = "powerhouse/budget-statement";
const DEFAULT = "powerhouse/default";
const MAKERDAO_RWA_PORTFOLIO = "makerdao/rwa-portfolio";
const documentTypes = [BUDGET, DEFAULT, MAKERDAO_RWA_PORTFOLIO];
const BudgetStatementImg = "data:image/png;base64,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";
const MakerdaoRWAPortfolioImg = "/assets/rwa-report-Bb0W5-ac.png";
const DefaultImg = "data:image/png;base64,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";
const iconMap = {
  [BUDGET]: BudgetStatementImg,
  [DEFAULT]: DefaultImg,
  [MAKERDAO_RWA_PORTFOLIO]: MakerdaoRWAPortfolioImg
};
function useDrag(props) {
  const { uiNode } = props;
  const [isDragging, setIsDragging] = useState(false);
  const onDragStart = useCallback((event) => {
    event.dataTransfer.setData(UI_NODE, JSON.stringify(uiNode));
  }, [uiNode]);
  const onDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);
  const allowedToDragNode = !!uiNode && uiNode.kind !== DRIVE;
  return useMemo(() => {
    const dragProps = allowedToDragNode ? {
      draggable: true,
      onDragStart,
      onDragEnd
    } : {
      draggable: false,
      onDragStart: void 0,
      onDragEnd: void 0
    };
    return {
      isDragging,
      dragProps
    };
  }, [allowedToDragNode, isDragging, onDragEnd, onDragStart]);
}
function useDrop(props) {
  const { uiNode, onAddFile, onCopyNode, onMoveNode } = props;
  const [isDropTarget, setIsDropTarget] = useState(false);
  const allowedToBeDropTarget = !!uiNode && uiNode.kind !== FILE;
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    setIsDropTarget(true);
  }, []);
  const onDragLeave = useCallback(() => {
    setIsDropTarget(false);
  }, []);
  const onDrop = useCallback(async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!uiNode)
      return;
    const droppedFiles = getDroppedFiles(event.dataTransfer.items).filter(Boolean);
    if (droppedFiles.length) {
      for (const file of droppedFiles) {
        if (file) {
          await onAddFile(file, uiNode);
        }
      }
    } else {
      const altOrOptionKeyPressed = event.getModifierState("Alt");
      const data = event.dataTransfer.getData(UI_NODE);
      const droppedNode = JSON.parse(data);
      if (altOrOptionKeyPressed) {
        await onCopyNode(droppedNode, uiNode);
      } else {
        await onMoveNode(droppedNode, uiNode);
      }
    }
    setIsDropTarget(false);
  }, [onAddFile, onCopyNode, onMoveNode, uiNode]);
  return useMemo(() => {
    const dropProps = allowedToBeDropTarget ? { onDragOver, onDragLeave, onDrop } : {
      onDragOver: void 0,
      onDragLeave: void 0,
      onDrop: void 0
    };
    return {
      isDropTarget,
      dropProps
    };
  }, [allowedToBeDropTarget, isDropTarget, onDragLeave, onDragOver, onDrop]);
}
function getDroppedFiles(items) {
  const droppedFiles = Array.from(items).map((item) => item.kind === "file" ? item.getAsFile() : null).filter(Boolean);
  return droppedFiles;
}
function formatEthAddress(address) {
  return `${address.slice(0, 7)}...${address.slice(-5)}`;
}
function getDocumentIconSrc(documentType, customDocumentIconSrc) {
  if (customDocumentIconSrc) {
    return customDocumentIconSrc;
  }
  if (documentTypes.includes(documentType)) {
    return iconMap[documentType];
  }
  return iconMap[DEFAULT];
}
const validateDocument = (document2) => {
  const errors = [];
  if (document2.documentType !== "powerhouse/document-model") {
    return errors;
  }
  const doc = document2;
  const specs = doc.state.global.specifications[0];
  const initialStateErrors = Object.keys(specs.state).reduce((acc, scopeKey) => {
    const scope = scopeKey;
    return [
      ...acc,
      ...validateInitialState(
        specs.state[scope].initialValue,
        scope !== "global"
      ).map((err) => ({
        ...err,
        message: `${err.message}. Scope: ${scope}`,
        details: { ...err.details, scope }
      }))
    ];
  }, []);
  const schemaStateErrors = Object.keys(specs.state).reduce((acc, scopeKey) => {
    var _a;
    const scope = scopeKey;
    const isGlobalScope = scope === "global";
    return [
      ...acc,
      ...validateStateSchemaName(
        specs.state[scope].schema,
        doc.name || ((_a = doc.state.global) == null ? void 0 : _a.name) || "",
        !isGlobalScope ? scope : "",
        !isGlobalScope
      ).map((err) => ({
        ...err,
        message: `${err.message}. Scope: ${scope}`,
        details: { ...err.details, scope }
      }))
    ];
  }, []);
  const modulesErrors = validateModules(specs.modules);
  return [...initialStateErrors, ...schemaStateErrors, ...modulesErrors];
};
function useDocumentEditor(props) {
  const { driveId, documentId, documentType, documentModelModule, user } = props;
  const reactor = useUnwrappedReactor();
  const connectDid = useConnectDid();
  const { sign } = useConnectCrypto();
  const doc = useDocument(reactor, { documentId, driveId, documentType });
  const documentEditorProps = useDocumentEditorProps(reactor, {
    nodeId: documentId,
    driveId,
    document: doc,
    documentModelModule,
    connectDid,
    sign,
    user
  });
  return documentEditorProps;
}
function useEditorDispatch(node, documentDispatch, onAddOperation) {
  const user = useUser() || void 0;
  const connectDid = useConnectDid();
  const { sign } = useConnectCrypto();
  const documentType = (node == null ? void 0 : node.kind) === "DRIVE" ? "powerhouse/document-drive" : node == null ? void 0 : node.documentType;
  const getDocumentModelModule = useGetDocumentModelModule();
  const documentModelModule = useMemo(
    () => documentType ? getDocumentModelModule(documentType) : void 0,
    [documentType, getDocumentModelModule]
  );
  const dispatch = useCallback(
    (action, onErrorCallback) => {
      const callback = (operation, state) => {
        if (!(node == null ? void 0 : node.id)) return;
        const { prevState } = state;
        signOperation(
          operation,
          sign,
          node.id,
          prevState,
          documentModelModule == null ? void 0 : documentModelModule.reducer,
          user
        ).then((op) => {
          var _a;
          (_a = window.documentEditorDebugTools) == null ? void 0 : _a.pushOperation(
            operation
          );
          return onAddOperation(op);
        }).catch(logger.error);
      };
      documentDispatch(
        addActionContext(action, connectDid, user),
        callback,
        onErrorCallback
      );
    },
    [
      documentDispatch,
      connectDid,
      documentModelModule == null ? void 0 : documentModelModule.reducer,
      onAddOperation,
      node,
      sign,
      user
    ]
  );
  return dispatch;
}
function useEditorProps(document2, node, documentDispatch, onAddOperation) {
  const { t } = useTranslation();
  const { showModal } = useModal();
  const theme = useAtomValue(themeAtom);
  const user = useUser() || void 0;
  const userPermissions = useUserPermissions();
  const context = useMemo(() => ({ theme, user }), [theme, user]);
  const {
    selectedParentNode,
    selectedDocument,
    setSelectedNode,
    getDocumentModelModule
  } = useUiNodes();
  const canUndo = !!document2 && (document2.revision.global > 0 || document2.revision.local > 0);
  const canRedo = !!(document2 == null ? void 0 : document2.clipboard.length);
  const dispatch = useEditorDispatch(node, documentDispatch, onAddOperation);
  const handleUndo = useCallback(() => {
    dispatch(undo());
  }, [dispatch]);
  const handleRedo = useCallback(() => {
    dispatch(redo());
  }, [dispatch]);
  const onClose = useCallback(() => {
    setSelectedNode(selectedParentNode);
  }, [selectedParentNode, setSelectedNode]);
  const exportDocument = useCallback(
    (document22) => {
      const validationErrors = validateDocument(document22);
      if (validationErrors.length) {
        showModal("confirmationModal", {
          title: t("modals.exportDocumentWithErrors.title"),
          body: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: t("modals.exportDocumentWithErrors.body") }),
            /* @__PURE__ */ jsx("ul", { className: "mt-4 flex list-disc flex-col items-start px-4 text-xs", children: validationErrors.map((error, index) => /* @__PURE__ */ jsx("li", { children: error.message }, index)) })
          ] }),
          cancelLabel: t("common.cancel"),
          continueLabel: t("common.export"),
          onCancel(closeModal) {
            closeModal();
          },
          onContinue(closeModal) {
            closeModal();
            return exportFile(document22, getDocumentModelModule);
          }
        });
      } else {
        return exportFile(document22, getDocumentModelModule);
      }
    },
    [getDocumentModelModule, showModal, t]
  );
  const onExport = useCallback(() => {
    if (selectedDocument) {
      return exportDocument(selectedDocument);
    }
  }, [exportDocument, selectedDocument]);
  const [revisionHistoryVisible, setRevisionHistoryVisible] = useState(false);
  const showRevisionHistory = useCallback(
    () => setRevisionHistoryVisible(true),
    []
  );
  return {
    dispatch,
    revisionHistoryVisible,
    context,
    canUndo,
    canRedo,
    undo: handleUndo,
    redo: handleRedo,
    onClose,
    onExport,
    onShowRevisionHistory: showRevisionHistory,
    isAllowedToCreateDocuments: (userPermissions == null ? void 0 : userPermissions.isAllowedToCreateDocuments) ?? false,
    isAllowedToEditDocuments: (userPermissions == null ? void 0 : userPermissions.isAllowedToEditDocuments) ?? false
  };
}
function useSyncStatus(driveId, documentId) {
  const { getSyncStatusSync, onSyncStatus, documentDrives } = useDocumentDriveServer();
  const syncStatus = useSyncExternalStore(
    (onStoreChange) => {
      const unsub = onSyncStatus(onStoreChange);
      return unsub;
    },
    () => {
      var _a;
      const drive = documentDrives.find(
        (_drive) => _drive.state.global.id === driveId
      );
      if (!drive) return;
      const isReadDrive = "readContext" in drive;
      const _sharingType = !isReadDrive ? (_a = drive.state.local.sharingType) == null ? void 0 : _a.toUpperCase() : "PUBLIC";
      const sharingType = _sharingType === "PRIVATE" ? "LOCAL" : _sharingType;
      if (!documentId) {
        const status2 = getSyncStatusSync(
          driveId,
          sharingType
        );
        return status2;
      }
      const document2 = drive.state.global.nodes.find(
        (node) => node.id === documentId
      );
      if (!document2) return;
      if (!("synchronizationUnits" in document2)) return;
      const status = getSyncStatusSync(
        document2.synchronizationUnits[0].syncId,
        sharingType
      );
      return status;
    }
  );
  return syncStatus;
}
const useUndoRedoShortcuts = (props) => {
  var _a;
  const { undo: undo2, redo: redo2, canRedo, canUndo } = props;
  const { isMac } = ((_a = window.electronAPI) == null ? void 0 : _a.platformInfo) || {};
  let undoShortcut = "ctrl+z";
  let redoShortcut = "ctrl+y";
  if (isMac) {
    undoShortcut = "mod+z";
    redoShortcut = "mod+shift+z";
  }
  useHotkeys(
    undoShortcut,
    (event) => {
      event.preventDefault();
      if (canUndo) {
        undo2();
      }
    },
    {},
    [canUndo, undo2]
  );
  useHotkeys(
    redoShortcut,
    (event) => {
      event.preventDefault();
      if (canRedo) {
        redo2();
      }
    },
    {},
    [canRedo, redo2]
  );
};
function EditorLoader(props) {
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(true);
    }, props.loadingTimeout ?? 200);
  }, [props]);
  if (!showLoading) return null;
  const { customEditorLoader, ...defaultProps } = props;
  if (customEditorLoader) return /* @__PURE__ */ jsx(Fragment$1, { children: customEditorLoader });
  return /* @__PURE__ */ jsx(DefaultEditorLoader, { ...defaultProps });
}
function EditorError({ message: message2 }) {
  return /* @__PURE__ */ jsx("div", { className: "flex size-full items-center justify-center", children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: message2 }) });
}
function FallbackEditorError(props) {
  const message2 = props.error instanceof Error ? props.error.message : props.error;
  return /* @__PURE__ */ jsx(EditorError, { message: message2 });
}
const DocumentEditor = (props) => {
  const {
    fileNodeDocument,
    document: initialDocument,
    onClose,
    onChange,
    onExport,
    onAddOperation,
    onOpenSwitchboardLink
  } = props;
  const documentId = fileNodeDocument == null ? void 0 : fileNodeDocument.documentId;
  const [revisionHistoryVisible, setRevisionHistoryVisible] = useState(false);
  const theme = useAtomValue(themeAtom);
  const user = useUser() || void 0;
  const connectDid = useConnectDid();
  const { sign } = useConnectCrypto();
  const getDocumentModelModule = useGetDocumentModelModule();
  const getEditor = useGetEditor();
  const documentType = fileNodeDocument == null ? void 0 : fileNodeDocument.documentType;
  const documentModel = useMemo(
    () => documentType ? getDocumentModelModule(documentType) : void 0,
    [documentType, getDocumentModelModule]
  );
  const editor = useMemo(
    () => documentType ? getEditor(documentType) : void 0,
    [documentType, getEditor]
  );
  const [document2, _dispatch, error] = useDocumentDispatch(
    documentModel == null ? void 0 : documentModel.reducer,
    initialDocument
  );
  const context = useMemo(
    () => ({ theme, user }),
    [theme, user]
  );
  const userPermissions = useUserPermissions();
  const currentDocument = useRef({ ...fileNodeDocument, document: document2 });
  useEffect(() => {
    var _a;
    if (!(fileNodeDocument == null ? void 0 : fileNodeDocument.documentId) || !document2) return;
    if (!("documentId" in currentDocument.current) || currentDocument.current.documentId !== documentId) {
      currentDocument.current = { ...fileNodeDocument, document: document2 };
      return;
    }
    if (!isSameDocument(currentDocument.current.document, document2)) {
      currentDocument.current.document = document2;
      (_a = window.documentEditorDebugTools) == null ? void 0 : _a.setDocument(document2);
      onChange == null ? void 0 : onChange(documentId, document2);
    }
  }, [document2, documentId, fileNodeDocument, onChange]);
  const dispatch = useCallback(
    (action, onErrorCallback) => {
      const callback = (operation, state) => {
        if (!(fileNodeDocument == null ? void 0 : fileNodeDocument.documentId)) return;
        const { prevState } = state;
        signOperation(
          operation,
          sign,
          fileNodeDocument.documentId,
          prevState,
          documentModel == null ? void 0 : documentModel.reducer,
          user
        ).then((op) => {
          var _a;
          (_a = window.documentEditorDebugTools) == null ? void 0 : _a.pushOperation(
            operation
          );
          return onAddOperation(op);
        }).catch(logger.error);
      };
      _dispatch(
        addActionContext(action, connectDid, user),
        callback,
        onErrorCallback
      );
    },
    [
      _dispatch,
      connectDid,
      documentModel == null ? void 0 : documentModel.reducer,
      onAddOperation,
      fileNodeDocument,
      sign,
      user
    ]
  );
  const showRevisionHistory = useCallback(
    () => setRevisionHistoryVisible(true),
    []
  );
  const hideRevisionHistory = useCallback(
    () => setRevisionHistoryVisible(false),
    []
  );
  const handleUndo = useCallback(() => {
    dispatch(undo());
  }, [dispatch]);
  const handleRedo = useCallback(() => {
    dispatch(redo());
  }, [dispatch]);
  const isLoadingDocument = (fileNodeDocument == null ? void 0 : fileNodeDocument.status) === "LOADING" || !document2;
  const isLoadingEditor = editor === void 0 || !!document2 && editor && !editor.documentTypes.includes(document2.documentType) && !editor.documentTypes.includes("*");
  const canUndo = !!document2 && (document2.revision.global > 0 || document2.revision.local > 0);
  const canRedo = !!(document2 == null ? void 0 : document2.clipboard.length);
  useUndoRedoShortcuts({
    undo: handleUndo,
    redo: handleRedo,
    canUndo,
    canRedo
  });
  useEffect(() => {
    return () => {
      var _a;
      (_a = window.documentEditorDebugTools) == null ? void 0 : _a.clear();
    };
  }, []);
  const navigate = useNavigate();
  const { showModal } = useModal();
  const [editorError, setEditorError] = useState(void 0);
  useEffect(() => {
    if (editorError && editorError.documentId !== (fileNodeDocument == null ? void 0 : fileNodeDocument.documentId)) {
      setEditorError(void 0);
    }
  }, [editorError, fileNodeDocument, document2]);
  const handleEditorError = useCallback(
    (error2, info) => {
      setEditorError({
        error: error2,
        documentId,
        info
      });
    },
    [documentId]
  );
  if ((fileNodeDocument == null ? void 0 : fileNodeDocument.status) === "ERROR") {
    return /* @__PURE__ */ jsx(EditorError, { message: "Error loading document" });
  }
  if (isLoadingDocument || isLoadingEditor) {
    const message2 = isLoadingDocument ? "Loading document" : "Loading editor";
    return /* @__PURE__ */ jsx(EditorLoader, { message: message2 });
  }
  if (!fileNodeDocument) {
    return null;
  }
  if (!documentModel) {
    return /* @__PURE__ */ jsx(
      EditorError,
      {
        message: /* @__PURE__ */ jsxs("div", { className: "text-center leading-10", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            'Unable to open the document because the document model "',
            documentType,
            '" is not supported.'
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Go to the",
            " ",
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "cursor-pointer underline",
                onClick: () => {
                  showModal("settingsModal", {
                    onRefresh: () => navigate(0)
                  });
                },
                children: "package manager"
              }
            ),
            " ",
            "to install this document model"
          ] })
        ] })
      }
    );
  }
  if (editor === null) {
    return /* @__PURE__ */ jsx(
      EditorError,
      {
        message: /* @__PURE__ */ jsxs("div", { className: "text-center leading-10", children: [
          /* @__PURE__ */ jsx("p", { children: "Unable to open the document because no editor has been found" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Go to the",
            " ",
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "cursor-pointer underline",
                onClick: () => {
                  showModal("settingsModal", {
                    onRefresh: () => navigate(0)
                  });
                },
                children: "package manager"
              }
            ),
            " ",
            'an editor for the "$',
            documentType,
            '" document type'
          ] })
        ] })
      }
    );
  }
  const EditorComponent = editor.Component;
  const {
    disableExternalControls,
    documentToolbarEnabled,
    showSwitchboardLink
  } = editor.config || {};
  const handleSwitchboardLinkClick = showSwitchboardLink !== false ? onOpenSwitchboardLink : void 0;
  return /* @__PURE__ */ jsxs("div", { className: "relative h-full", id: "document-editor-context", children: [
    documentToolbarEnabled && disableExternalControls && !revisionHistoryVisible && /* @__PURE__ */ jsx(
      DocumentToolbar,
      {
        onClose,
        onExport,
        onShowRevisionHistory: showRevisionHistory,
        title: fileNodeDocument.name || document2.name,
        onSwitchboardLinkClick: handleSwitchboardLinkClick
      }
    ),
    !disableExternalControls && /* @__PURE__ */ jsxs("div", { className: "mb-4 flex justify-end gap-10", children: [
      /* @__PURE__ */ jsx(Button, { onClick: onExport, children: "Export" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(Button, { onClick: handleUndo, disabled: !canUndo, children: "Undo" }),
        /* @__PURE__ */ jsx(Button, { onClick: handleRedo, disabled: !canRedo, children: "Redo" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx(Button, { onClick: onClose, children: "Close" }) })
    ] }),
    revisionHistoryVisible ? /* @__PURE__ */ jsx(
      RevisionHistory,
      {
        documentTitle: document2.name,
        documentId: fileNodeDocument.documentId,
        globalOperations: document2.operations.global,
        localOperations: document2.operations.local,
        onClose: hideRevisionHistory
      },
      documentId
    ) : /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(EditorLoader, {}), children: /* @__PURE__ */ jsx(
      ErrorBoundary,
      {
        fallbackRender: FallbackEditorError,
        onError: handleEditorError,
        children: !(editorError == null ? void 0 : editorError.error) && /* @__PURE__ */ jsx(
          EditorComponent,
          {
            error,
            context,
            document: document2,
            documentNodeName: fileNodeDocument.name,
            dispatch,
            onClose,
            onExport,
            canUndo,
            canRedo,
            undo: handleUndo,
            redo: handleRedo,
            onSwitchboardLinkClick: handleSwitchboardLinkClick,
            onShowRevisionHistory: showRevisionHistory,
            isAllowedToCreateDocuments: (userPermissions == null ? void 0 : userPermissions.isAllowedToCreateDocuments) ?? false,
            isAllowedToEditDocuments: (userPermissions == null ? void 0 : userPermissions.isAllowedToEditDocuments) ?? false
          },
          documentId
        )
      },
      documentId
    ) })
  ] });
};
function DocumentEditorContainer() {
  const { t } = useTranslation();
  const { showModal } = useModal();
  const {
    selectedNode,
    selectedParentNode,
    isRemoteDrive,
    selectedDocument,
    fileNodeDocument,
    setSelectedNode,
    setSelectedDocument,
    openSwitchboardLink,
    addOperationToSelectedDocument,
    renameNode,
    getDocumentModelModule
  } = useUiNodes();
  const handleAddOperationToSelectedDocument = useCallback(
    async (operation) => {
      if (!selectedDocument) {
        throw new Error("No document selected");
      }
      if (!addOperationToSelectedDocument) {
        throw new Error("No add operation function defined");
      }
      await addOperationToSelectedDocument(operation);
    },
    [addOperationToSelectedDocument, selectedDocument]
  );
  const onDocumentChangeHandler = useCallback(
    (documentId, document2) => {
      if (documentId !== (fileNodeDocument == null ? void 0 : fileNodeDocument.documentId)) {
        return;
      }
      setSelectedDocument(document2);
      if (!!selectedNode && document2.name !== "" && selectedNode.name !== document2.name) {
        return renameNode(
          selectedNode.driveId,
          selectedNode.id,
          document2.name
        );
      }
    },
    [
      fileNodeDocument == null ? void 0 : fileNodeDocument.documentId,
      renameNode,
      selectedNode,
      setSelectedDocument
    ]
  );
  const onClose = useCallback(() => {
    setSelectedNode(selectedParentNode);
  }, [selectedParentNode, setSelectedNode]);
  const exportDocument = useCallback(
    (document2) => {
      const validationErrors = validateDocument(document2);
      if (validationErrors.length) {
        showModal("confirmationModal", {
          title: t("modals.exportDocumentWithErrors.title"),
          body: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { children: t("modals.exportDocumentWithErrors.body") }),
            /* @__PURE__ */ jsx("ul", { className: "mt-4 flex list-disc flex-col items-start px-4 text-xs", children: validationErrors.map((error, index) => /* @__PURE__ */ jsx("li", { children: error.message }, index)) })
          ] }),
          cancelLabel: t("common.cancel"),
          continueLabel: t("common.export"),
          onCancel(closeModal) {
            closeModal();
          },
          onContinue(closeModal) {
            closeModal();
            return exportFile(document2, getDocumentModelModule);
          }
        });
      } else {
        return exportFile(document2, getDocumentModelModule);
      }
    },
    [getDocumentModelModule, showModal, t]
  );
  const onExport = useCallback(() => {
    if (selectedDocument) {
      return exportDocument(selectedDocument);
    }
  }, [exportDocument, selectedDocument]);
  const onOpenSwitchboardLink = useMemo(() => {
    return isRemoteDrive ? () => openSwitchboardLink(selectedNode) : void 0;
  }, [isRemoteDrive, openSwitchboardLink, selectedNode]);
  if (!fileNodeDocument) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex-1 rounded-2xl bg-gray-50 p-4",
      children: /* @__PURE__ */ jsx(
        DocumentEditor,
        {
          fileNodeDocument,
          document: selectedDocument,
          onChange: onDocumentChangeHandler,
          onClose,
          onExport,
          onAddOperation: handleAddOperationToSelectedDocument,
          onOpenSwitchboardLink
        }
      )
    },
    fileNodeDocument.documentId
  );
}
function getDocumentSpec(doc) {
  if ("documentModelState" in doc) {
    return doc.documentModelState;
  }
  return doc.documentModel;
}
const CreateDocument = ({ documentModels, createDocument }) => {
  return jsxs("div", { className: "px-6", children: [jsx("h3", { className: "mb-3 mt-4 text-xl font-bold text-gray-600", children: "New document" }), jsx("div", { className: "flex w-full flex-wrap gap-4", children: documentModels == null ? void 0 : documentModels.map((doc) => {
    const spec = getDocumentSpec(doc);
    return jsx(Button, { color: "light", "aria-details": spec.description, onClick: () => createDocument(doc), children: jsx("span", { className: "text-sm", children: spec.name }) }, spec.id);
  }) })] });
};
function sortUiNodesByName(a, b) {
  return a.name.localeCompare(b.name);
}
const GAP = 8;
const ITEM_WIDTH = 256;
const ITEM_HEIGHT = 48;
const USED_SPACE = 420;
function FileContentView(props) {
  const parentRef = useRef(null);
  const { t } = useTranslation();
  const windowSize = useWindowSize();
  const { fileNodes, ...fileProps } = props;
  const availableWidth = windowSize.innerWidth - USED_SPACE;
  const columnCount = Math.floor(availableWidth / (ITEM_WIDTH + GAP)) || 1;
  const rowCount = Math.ceil(fileNodes.length / columnCount);
  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: (index) => {
      if (index > 0) {
        return ITEM_HEIGHT + GAP;
      }
      return ITEM_HEIGHT;
    },
    overscan: 5
  });
  const columnVirtualizer = useVirtualizer({
    horizontal: true,
    count: columnCount,
    getScrollElement: () => parentRef.current,
    estimateSize: (index) => {
      if (index > 0) {
        return ITEM_WIDTH + GAP;
      }
      return ITEM_WIDTH;
    },
    overscan: 5
  });
  const getItemIndex = (rowIndex, columnIndex) => rowIndex * columnCount + columnIndex;
  const getItem = (rowIndex, columnIndex) => {
    const index = getItemIndex(rowIndex, columnIndex);
    return fileNodes[index] || null;
  };
  if (fileNodes.length === 0) {
    return jsx("div", { className: "mb-8 text-sm text-gray-400", children: t("folderView.sections.documents.empty", {
      defaultValue: "No documents or files 📄"
    }) });
  }
  const renderItem = (rowIndex, columnIndex) => {
    const fileNode = getItem(rowIndex, columnIndex);
    if (!fileNode) {
      return null;
    }
    return jsx("div", { style: {
      marginLeft: columnIndex === 0 ? 0 : GAP
    }, children: jsx(FileItem, { uiNode: fileNode, ...fileProps }, fileNode.id) });
  };
  return jsx("div", { ref: parentRef, style: {
    height: `400px`,
    width: `100%`,
    overflow: "auto"
  }, children: jsx("div", { style: {
    height: `${rowVirtualizer.getTotalSize()}px`,
    width: `${columnVirtualizer.getTotalSize()}px`,
    position: "relative"
  }, children: rowVirtualizer.getVirtualItems().map((virtualRow) => jsx(React__default.Fragment, { children: columnVirtualizer.getVirtualItems().map((virtualColumn) => jsx("div", { style: {
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: virtualRow.index === 0 ? 0 : GAP,
    width: `${virtualColumn.size}px`,
    height: `${virtualRow.size}px`,
    transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`
  }, children: renderItem(virtualRow.index, virtualColumn.index) }, virtualColumn.key)) }, virtualRow.key)) }) });
}
function FolderView(props) {
  const { node, className, isDropTarget, containerProps, ...nodeProps } = props;
  const { t } = useTranslation();
  const folderNodes = node.children.filter((node2) => node2.kind === FOLDER).sort(sortUiNodesByName);
  const fileNodes = node.children.filter((node2) => node2.kind === FILE).sort(sortUiNodesByName);
  return jsxs("div", { className: twMerge("rounded-md border-2 border-transparent p-2", isDropTarget && "border-dashed border-blue-100", className), ...containerProps, children: [jsx(DriveLayout.ContentSection, { title: t("folderView.sections.folders.title", {
    defaultValue: "Folders"
  }), className: "mb-4", children: folderNodes.length > 0 ? folderNodes.map((folderNode) => jsx(FolderItem, { uiNode: folderNode, onAddFile: nodeProps.onAddFile, onCopyNode: nodeProps.onCopyNode, onMoveNode: nodeProps.onMoveNode, onSelectNode: nodeProps.onSelectNode, onRenameNode: nodeProps.onRenameNode, onDuplicateNode: nodeProps.onDuplicateNode, onDeleteNode: nodeProps.onDeleteNode, isAllowedToCreateDocuments: nodeProps.isAllowedToCreateDocuments }, folderNode.id)) : jsx("div", { className: "mb-8 text-sm text-gray-400", children: t("folderView.sections.folders.empty", {
    defaultValue: "No documents or files 📄"
  }) }) }), jsx(DriveLayout.ContentSection, { title: t("folderView.sections.documents.title", {
    defaultValue: "Documents and files"
  }), children: jsx("div", { className: twMerge("w-full", fileNodes.length > 0 ? "min-h-[400px]" : "min-h-14"), children: jsx(FileContentView, { fileNodes, onSelectNode: nodeProps.onSelectNode, onRenameNode: nodeProps.onRenameNode, onDuplicateNode: nodeProps.onDuplicateNode, onDeleteNode: nodeProps.onDeleteNode, isAllowedToCreateDocuments: nodeProps.isAllowedToCreateDocuments }) }) })] });
}
function Editor(props) {
  const { document: document2, dispatch, className, children } = props;
  const { state: { global: { id: driveId } } } = document2;
  const { showSearchBar, isAllowedToCreateDocuments, documentModels, showCreateDocumentModal } = useDriveContext();
  const { driveNodes, selectedNode, selectedNodePath, getNodeById, setSelectedNode } = useUiNodesContext();
  const driveNode = useMemo(() => driveNodes.find((n) => n.id === driveId), [driveNodes, driveId]);
  const { addDocument, addFile, addFolder, renameNode, deleteNode, moveNode, copyNode, duplicateNode } = useDriveActionsWithUiNodes(document2, dispatch);
  const onCreateDocument = useCallback(async (documentModel) => {
    const { name } = await showCreateDocumentModal(documentModel);
    const document3 = documentModel.utils.createDocument();
    await addDocument(name, documentModel.documentModel.name, document3, selectedNode == null ? void 0 : selectedNode.id);
  }, [addDocument, showCreateDocumentModal, selectedNode == null ? void 0 : selectedNode.id]);
  const { isDropTarget, dropProps } = useDrop({
    uiNode: selectedNode,
    onAddFile: addFile,
    onCopyNode: copyNode,
    onMoveNode: moveNode
  });
  const { breadcrumbs, onBreadcrumbSelected } = useBreadcrumbs({
    selectedNodePath,
    getNodeById,
    setSelectedNode
  });
  if (!driveNode) {
    return jsx("div", { children: "Drive not found" });
  } else if ((selectedNode == null ? void 0 : selectedNode.kind) === FILE$1) {
    return jsx(Fragment$1, {});
  }
  return jsxs(DriveLayout, { className, children: [children, jsxs(DriveLayout.Header, { children: [jsx(Breadcrumbs, { breadcrumbs, createEnabled: isAllowedToCreateDocuments, onCreate: addFolder, onBreadcrumbSelected }), showSearchBar && jsx(SearchBar, {})] }), jsx(DriveLayout.Content, { children: jsx(FolderView, { node: selectedNode || driveNode, onSelectNode: setSelectedNode, onRenameNode: renameNode, onDuplicateNode: duplicateNode, onDeleteNode: deleteNode, onAddFile: addFile, onCopyNode: copyNode, onMoveNode: moveNode, isDropTarget, isAllowedToCreateDocuments }) }), jsx(DriveLayout.Footer, { children: isAllowedToCreateDocuments && jsx(CreateDocument, { documentModels, createDocument: onCreateDocument }) })] });
}
const GenericDriveExplorer = {
  Component: Editor
};
function useGetDriveDocuments(props) {
  const { driveId } = props;
  const [documents, setDocuments] = useState({});
  const { getDocumentsIds, onStrandUpdate, openFile } = useDocumentDriveServer();
  const fetchDocuments = async (_driveId, _documentIds) => {
    let documentIds = _documentIds;
    if (!documentIds || documentIds.length === 0) {
      documentIds = await getDocumentsIds(_driveId);
    }
    const getDocumentsPromise = documentIds.map(async (documentId) => {
      const document2 = await openFile(_driveId, documentId);
      return [documentId, document2];
    });
    const docs = await Promise.all(getDocumentsPromise);
    const newDocumentsState = docs.reduce(
      (acc, [documentId, document2]) => {
        acc[documentId] = {
          ...document2.state,
          documentType: document2.documentType,
          revision: document2.revision,
          created: document2.created,
          lastModified: document2.lastModified
        };
        return acc;
      },
      {}
    );
    setDocuments((prevState) => ({
      ...prevState,
      ...newDocumentsState
    }));
  };
  useEffect(() => {
    if (driveId) {
      fetchDocuments(driveId).catch(console.error);
    }
  }, [driveId]);
  useEffect(() => {
    const removeListener = onStrandUpdate((update) => {
      if (driveId && update.driveId === driveId && update.documentId) {
        fetchDocuments(driveId, [update.documentId]).catch(
          console.error
        );
      }
    });
    return removeListener;
  }, [onStrandUpdate, driveId]);
  return [documents, fetchDocuments];
}
function DriveEditorError({ error }) {
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-[80%]  flex-1 flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-2 text-xl font-semibold", children: "Error" }),
    /* @__PURE__ */ jsx("i", { children: error instanceof Error ? error.message : error }),
    /* @__PURE__ */ jsx("pre", { children: JSON.stringify(error, null, 2) })
  ] });
}
function useSelectedDocumentDrive() {
  const { selectedDriveNode } = useUiNodesContext();
  if (!selectedDriveNode) {
    throw new Error("No drive node selected");
  }
  const documentDrive = useDocumentDriveById(selectedDriveNode.id);
  if (!documentDrive.drive) {
    throw new Error(`Drive with id "${selectedDriveNode.id}" not found`);
  }
  return documentDrive.drive;
}
function DriveEditorContainer() {
  var _a;
  const {
    selectedDriveNode,
    setSelectedNode,
    selectedNode,
    selectedParentNode
  } = useUiNodesContext();
  const { addOperationToSelectedDrive } = useUiNodes();
  const documentDrive = useSelectedDocumentDrive();
  const [document2, _dispatch, error] = useDocumentDispatch(
    driveDocumentModelModule.reducer,
    documentDrive
  );
  const reactor = useAsyncReactor();
  const handleAddOperationToSelectedDrive = useCallback(
    async (operation) => {
      await addOperationToSelectedDrive(operation);
    },
    [addOperationToSelectedDrive]
  );
  const editorProps = useEditorProps(
    document2,
    selectedDriveNode,
    _dispatch,
    handleAddOperationToSelectedDrive
  );
  const { showModal } = useModal();
  const showCreateDocumentModal = useCallback(
    (documentModel) => {
      if (!selectedDriveNode) {
        throw new Error("No drive node selected");
      }
      showModal("createDocument", {
        documentModel,
        selectedParentNode,
        setSelectedNode
      });
      return Promise.resolve({ name: "New Document" });
    },
    [selectedDriveNode, selectedParentNode, setSelectedNode, showModal]
  );
  const { addFile, addDocument } = useDocumentDriveServer();
  const documentModels = useFilteredDocumentModels();
  const useDriveDocumentState = makeDriveDocumentStateHook(reactor);
  const driveContext = useMemo(
    () => ({
      showSearchBar: false,
      isAllowedToCreateDocuments: editorProps.isAllowedToCreateDocuments,
      documentModels: documentModels ?? [],
      selectedDriveNode,
      selectedNode,
      selectNode: setSelectedNode,
      addFile,
      showCreateDocumentModal,
      useSyncStatus,
      useDocumentEditorProps: useDocumentEditor,
      useDriveDocumentStates: useGetDriveDocuments,
      useDriveDocumentState,
      addDocument
    }),
    [
      reactor,
      editorProps.isAllowedToCreateDocuments,
      documentModels,
      selectedNode,
      setSelectedNode,
      addFile,
      addDocument,
      showCreateDocumentModal
    ]
  );
  const driveEditor = useDriveEditor((_a = document2 == null ? void 0 : document2.meta) == null ? void 0 : _a.preferredEditor);
  if (!document2) {
    return null;
  }
  const DriveEditorComponent = (driveEditor == null ? void 0 : driveEditor.Component) ?? GenericDriveExplorer.Component;
  return /* @__PURE__ */ jsx(DriveContextProvider, { value: driveContext, children: /* @__PURE__ */ jsx(
    ErrorBoundary,
    {
      fallbackRender: DriveEditorError,
      children: /* @__PURE__ */ jsx(
        DriveEditorComponent,
        {
          ...editorProps,
          onSwitchboardLinkClick: void 0,
          document: document2,
          error
        },
        selectedDriveNode == null ? void 0 : selectedDriveNode.id
      )
    },
    selectedDriveNode == null ? void 0 : selectedDriveNode.id
  ) }, selectedDriveNode == null ? void 0 : selectedDriveNode.id);
}
function Content() {
  const uiNodes = useUiNodes();
  const { fileNodeDocument, selectedDriveNode, selectedNode, addFile } = uiNodes;
  useEffect(() => {
    var _a;
    return (_a = window.electronAPI) == null ? void 0 : _a.handleFileOpen(async (file) => {
      if (!selectedDriveNode || (selectedNode == null ? void 0 : selectedNode.kind) !== FILE) {
        return;
      }
      await addFile(
        file.content,
        selectedDriveNode.id,
        file.name,
        selectedNode.parentFolder
      );
    });
  }, [selectedDriveNode, selectedNode, addFile]);
  return /* @__PURE__ */ jsx("div", { className: "flex h-full flex-col overflow-hidden", id: "content-view", children: fileNodeDocument ? /* @__PURE__ */ jsx(DocumentEditorContainer, {}, fileNodeDocument.documentId) : selectedDriveNode ? /* @__PURE__ */ jsx(DriveEditorContainer, {}, selectedDriveNode.id) : null });
}
export {
  Content as default
};
