// ../../packages/reactor-browser/dist/src/uiNodes/constants.js
var SWITCHBOARD = "SWITCHBOARD";
var LOCAL = "LOCAL";
var CLOUD = "CLOUD";
var PUBLIC = "PUBLIC";
var sharingTypes = [LOCAL, CLOUD, PUBLIC];
var driveLocations = [LOCAL, CLOUD, SWITCHBOARD];
var DRIVE = "DRIVE";
var FILE = "FILE";
var FOLDER = "FOLDER";
var SYNCING = "SYNCING";
var SUCCESS = "SUCCESS";
var CONFLICT = "CONFLICT";
var MISSING = "MISSING";
var ERROR = "ERROR";
var INITIAL_SYNC = "INITIAL_SYNC";
var syncStatuses = [
  INITIAL_SYNC,
  SYNCING,
  SUCCESS,
  CONFLICT,
  MISSING,
  ERROR
];

export {
  SWITCHBOARD,
  LOCAL,
  CLOUD,
  PUBLIC,
  sharingTypes,
  driveLocations,
  DRIVE,
  FILE,
  FOLDER,
  SYNCING,
  SUCCESS,
  CONFLICT,
  MISSING,
  ERROR,
  INITIAL_SYNC,
  syncStatuses
};
