import {
  attachBranch,
  baseCreateDocument,
  baseCreateExtendedState,
  baseLoadFromFile,
  baseLoadFromInput,
  baseSaveToFile,
  baseSaveToFileHandle,
  createAction,
  createReducer,
  garbageCollect,
  garbageCollectDocumentOperations,
  generateId,
  groupOperationsByScope,
  isDocumentAction,
  merge,
  pascalCase,
  precedes,
  removeExistingOperations,
  replayDocument,
  reshuffleByTimestamp,
  skipHeaderOperations,
  sortOperations,
  z
} from "./chunk-HGGVAPQY.js";
import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-2ESYSVXG.js";

// node_modules/.pnpm/cross-fetch@3.2.0_encoding@0.1.13/node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "node_modules/.pnpm/cross-fetch@3.2.0_encoding@0.1.13/node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
    var __globalThis__ = function() {
      function F() {
        this.fetch = false;
        this.DOMException = __global__.DOMException;
      }
      F.prototype = __global__;
      return new F();
    }();
    (function(globalThis2) {
      var irrelevant = function(exports2) {
        var g = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
        typeof global !== "undefined" && global || {};
        var support = {
          searchParams: "URLSearchParams" in g,
          iterable: "Symbol" in g && "iterator" in Symbol,
          blob: "FileReader" in g && "Blob" in g && function() {
            try {
              new Blob();
              return true;
            } catch (e) {
              return false;
            }
          }(),
          formData: "FormData" in g,
          arrayBuffer: "ArrayBuffer" in g
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name) {
          if (typeof name !== "string") {
            name = String(name);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === "") {
            throw new TypeError('Invalid character in header field name: "' + name + '"');
          }
          return name.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers3(headers) {
          this.map = {};
          if (headers instanceof Headers3) {
            headers.forEach(function(value, name) {
              this.append(name, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              if (header.length != 2) {
                throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
              }
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
        Headers3.prototype.append = function(name, value) {
          name = normalizeName(name);
          value = normalizeValue(value);
          var oldValue = this.map[name];
          this.map[name] = oldValue ? oldValue + ", " + value : value;
        };
        Headers3.prototype["delete"] = function(name) {
          delete this.map[normalizeName(name)];
        };
        Headers3.prototype.get = function(name) {
          name = normalizeName(name);
          return this.has(name) ? this.map[name] : null;
        };
        Headers3.prototype.has = function(name) {
          return this.map.hasOwnProperty(normalizeName(name));
        };
        Headers3.prototype.set = function(name, value) {
          this.map[normalizeName(name)] = normalizeValue(value);
        };
        Headers3.prototype.forEach = function(callback, thisArg) {
          for (var name in this.map) {
            if (this.map.hasOwnProperty(name)) {
              callback.call(thisArg, this.map[name], name, this);
            }
          }
        };
        Headers3.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push(name);
          });
          return iteratorFor(items);
        };
        Headers3.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers3.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name) {
            items.push([name, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers3.prototype[Symbol.iterator] = Headers3.prototype.entries;
        }
        function consumed(body) {
          if (body._noBody) return;
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
          var encoding = match ? match[1] : "utf-8";
          reader.readAsText(blob, encoding);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i = 0; i < view.length; i++) {
            chars[i] = String.fromCharCode(view[i]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed;
            this._bodyInit = body;
            if (!body) {
              this._noBody = true;
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
          }
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);
              if (isConsumed) {
                return isConsumed;
              } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(
                  this._bodyArrayBuffer.buffer.slice(
                    this._bodyArrayBuffer.byteOffset,
                    this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                  )
                );
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else if (support.blob) {
              return this.blob().then(readBlobAsArrayBuffer);
            } else {
              throw new Error("could not read as ArrayBuffer");
            }
          };
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          if (!(this instanceof Request)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers3(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers3(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal || function() {
            if ("AbortController" in g) {
              var ctrl = new AbortController();
              return ctrl.signal;
            }
          }();
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
          if (this.method === "GET" || this.method === "HEAD") {
            if (options.cache === "no-store" || options.cache === "no-cache") {
              var reParamSearch = /([?&])_=[^&]*/;
              if (reParamSearch.test(this.url)) {
                this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
              } else {
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
              }
            }
          }
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split = bytes.split("=");
              var name = split.shift().replace(/\+/g, " ");
              var value = split.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers3();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split("\r").map(function(header) {
            return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
          }).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              try {
                headers.append(key, value);
              } catch (error) {
                console.warn("Response " + error.message);
              }
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
          if (!(this instanceof Response)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          if (this.status < 200 || this.status > 599) {
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          }
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
          this.headers = new Headers3(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers3(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 200, statusText: "" });
          response.ok = false;
          response.status = 0;
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = g.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name) {
            this.message = message;
            this.name = name;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
                options.status = 200;
              } else {
                options.status = xhr.status;
              }
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              setTimeout(function() {
                resolve(new Response(body, options));
              }, 0);
            };
            xhr.onerror = function() {
              setTimeout(function() {
                reject(new TypeError("Network request failed"));
              }, 0);
            };
            xhr.ontimeout = function() {
              setTimeout(function() {
                reject(new TypeError("Network request timed out"));
              }, 0);
            };
            xhr.onabort = function() {
              setTimeout(function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function fixUrl(url) {
              try {
                return url === "" && g.location.href ? g.location.href : url;
              } catch (e) {
                return url;
              }
            }
            xhr.open(request.method, fixUrl(request.url), true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr) {
              if (support.blob) {
                xhr.responseType = "blob";
              } else if (support.arrayBuffer) {
                xhr.responseType = "arraybuffer";
              }
            }
            if (init && typeof init.headers === "object" && !(init.headers instanceof Headers3 || g.Headers && init.headers instanceof g.Headers)) {
              var names = [];
              Object.getOwnPropertyNames(init.headers).forEach(function(name) {
                names.push(normalizeName(name));
                xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
              });
              request.headers.forEach(function(value, name) {
                if (names.indexOf(name) === -1) {
                  xhr.setRequestHeader(name, value);
                }
              });
            } else {
              request.headers.forEach(function(value, name) {
                xhr.setRequestHeader(name, value);
              });
            }
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!g.fetch) {
          g.fetch = fetch2;
          g.Headers = Headers3;
          g.Request = Request;
          g.Response = Response;
        }
        exports2.Headers = Headers3;
        exports2.Request = Request;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      }({});
    })(__globalThis__);
    __globalThis__.fetch.ponyfill = true;
    delete __globalThis__.fetch.polyfill;
    var ctx = __global__.fetch ? __global__ : __globalThis__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// node_modules/.pnpm/json-stringify-deterministic@1.0.12/node_modules/json-stringify-deterministic/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/.pnpm/json-stringify-deterministic@1.0.12/node_modules/json-stringify-deterministic/lib/defaults.js"(exports, module) {
    module.exports = {
      space: "",
      cycles: false,
      replacer: (k, v) => v,
      stringify: JSON.stringify
    };
  }
});

// node_modules/.pnpm/json-stringify-deterministic@1.0.12/node_modules/json-stringify-deterministic/lib/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/json-stringify-deterministic@1.0.12/node_modules/json-stringify-deterministic/lib/util.js"(exports, module) {
    "use strict";
    module.exports = {
      isArray: Array.isArray,
      assign: Object.assign,
      isObject: (v) => typeof v === "object",
      isFunction: (v) => typeof v === "function",
      isBoolean: (v) => typeof v === "boolean",
      isRegex: (v) => v instanceof RegExp,
      keys: Object.keys
    };
  }
});

// node_modules/.pnpm/json-stringify-deterministic@1.0.12/node_modules/json-stringify-deterministic/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/json-stringify-deterministic@1.0.12/node_modules/json-stringify-deterministic/lib/index.js"(exports, module) {
    "use strict";
    var DEFAULTS = require_defaults();
    var isFunction = require_util().isFunction;
    var isBoolean = require_util().isBoolean;
    var isObject = require_util().isObject;
    var isArray = require_util().isArray;
    var isRegex = require_util().isRegex;
    var assign = require_util().assign;
    var keys = require_util().keys;
    function serialize(obj) {
      if (obj === null || obj === void 0) return obj;
      if (isRegex(obj)) return obj.toString();
      return obj.toJSON ? obj.toJSON() : obj;
    }
    function stringifyDeterministic(obj, opts) {
      opts = opts || assign({}, DEFAULTS);
      if (isFunction(opts)) opts = { compare: opts };
      const space = opts.space || DEFAULTS.space;
      const cycles = isBoolean(opts.cycles) ? opts.cycles : DEFAULTS.cycles;
      const replacer = opts.replacer || DEFAULTS.replacer;
      const stringify2 = opts.stringify || DEFAULTS.stringify;
      const compare = opts.compare && /* @__PURE__ */ function(f) {
        return function(node) {
          return function(a, b) {
            const aobj = { key: a, value: node[a] };
            const bobj = { key: b, value: node[b] };
            return f(aobj, bobj);
          };
        };
      }(opts.compare);
      if (!cycles) stringify2(obj);
      const seen = [];
      return function _deterministic(parent, key, node, level) {
        const indent2 = space ? "\n" + new Array(level + 1).join(space) : "";
        const colonSeparator = space ? ": " : ":";
        node = serialize(node);
        node = replacer.call(parent, key, node);
        if (node === void 0) return;
        if (!isObject(node) || node === null) return stringify2(node);
        if (isArray(node)) {
          const out = [];
          for (let i = 0; i < node.length; i++) {
            const item = _deterministic(node, i, node[i], level + 1) || stringify2(null);
            out.push(indent2 + space + item);
          }
          return "[" + out.join(",") + indent2 + "]";
        } else {
          if (cycles) {
            if (seen.indexOf(node) !== -1) {
              return stringify2("[Circular]");
            } else {
              seen.push(node);
            }
          }
          const nodeKeys = keys(node).sort(compare && compare(node));
          const out = [];
          for (let i = 0; i < nodeKeys.length; i++) {
            const key2 = nodeKeys[i];
            const value = _deterministic(node, key2, node[key2], level + 1);
            if (!value) continue;
            const keyValue = stringify2(key2) + colonSeparator + value;
            out.push(indent2 + space + keyValue);
          }
          seen.splice(seen.indexOf(node), 1);
          return "{" + out.join(",") + indent2 + "}";
        }
      }({ "": obj }, "", obj, 0);
    }
    module.exports = stringifyDeterministic;
  }
});

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/utils/logger.js
var LEVELS = {
  verbose: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 6
};
var ConsoleLogger = class {
  #tags;
  #levelString = "env";
  #errorHandler;
  constructor(tags, errorHandler2) {
    this.#tags = (tags || []).map((tag) => `[${tag}]`);
    this.#errorHandler = errorHandler2;
    this.log = this.log.bind(this);
    this.info = this.info.bind(this);
    this.warn = this.warn.bind(this);
    this.error = this.error.bind(this);
    this.debug = this.debug.bind(this);
    this.verbose = this.verbose.bind(this);
  }
  get level() {
    return this.#levelString;
  }
  set level(level) {
    this.#levelString = level;
  }
  get errorHandler() {
    return this.#errorHandler;
  }
  set errorHandler(handler) {
    this.#errorHandler = handler;
  }
  get #levelValue() {
    if (this.#levelString === "env") {
      const envLevel = typeof process !== "undefined" ? process.env.LOG_LEVEL : void 0;
      if (!envLevel) {
        return LEVELS.debug;
      }
      if (!(envLevel in LEVELS)) {
        return LEVELS.debug;
      }
      return LEVELS[envLevel];
    }
    return LEVELS[this.#levelString];
  }
  log(...data) {
    return this.debug(...data);
  }
  verbose(...data) {
    if (this.#levelValue > LEVELS.verbose) {
      return;
    }
    return this.debug(...data);
  }
  debug(...data) {
    if (this.#levelValue > LEVELS.debug) {
      return;
    }
    return console.debug(...[...this.#tags, ...data]);
  }
  info(...data) {
    if (this.#levelValue > LEVELS.info) {
      return;
    }
    return console.info(...[...this.#tags, ...data]);
  }
  warn(...data) {
    if (this.#levelValue > LEVELS.warn) {
      return;
    }
    return console.warn(...[...this.#tags, ...data]);
  }
  error(...data) {
    if (this.#levelValue > LEVELS.error) {
      return;
    }
    if (this.#errorHandler) {
      this.#errorHandler(...data);
    }
    return console.error(...[...this.#tags, ...data]);
  }
};
var loggerInstance = new ConsoleLogger();
var logLevel = "env";
var errorHandler;
loggerInstance.level = logLevel;
loggerInstance.errorHandler = errorHandler;
var logger = loggerInstance;
var childLogger = (tags) => {
  const logger2 = new ConsoleLogger(tags);
  logger2.level = logLevel;
  logger2.errorHandler = errorHandler;
  return logger2;
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/cache/memory.js
var InMemoryCache = class {
  cache = /* @__PURE__ */ new Map();
  clear() {
    this.cache.clear();
  }
  async setDocument(drive, id, document) {
    const global2 = document.operations.global.map((e) => {
      delete e.resultingState;
      return e;
    });
    const local = document.operations.local.map((e) => {
      delete e.resultingState;
      return e;
    });
    const doc = { ...document, operations: { global: global2, local } };
    if (!this.cache.has(drive)) {
      this.cache.set(drive, /* @__PURE__ */ new Map());
    }
    this.cache.get(drive)?.set(id, doc);
    return true;
  }
  async deleteDocument(drive, id) {
    return this.cache.get(drive)?.delete(id) ?? false;
  }
  async getDocument(drive, id) {
    return this.cache.get(drive)?.get(id);
  }
  async getCachedOperations(drive, id) {
    try {
      const document = await this.getDocument(drive, id);
      return document?.operations;
    } catch (error) {
      logger.error(error);
      return void 0;
    }
  }
};
var memory_default = InMemoryCache;

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/schema/zod.js
var isDefinedNonNullAny = (v) => v !== void 0 && v !== null;
var definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));
var TransmitterTypeSchema = z.enum([
  "Internal",
  "MatrixConnect",
  "PullResponder",
  "RESTWebhook",
  "SecureConnect",
  "SwitchboardPush"
]);
var TriggerTypeSchema = z.enum(["PullResponder"]);
function AddFileInputSchema() {
  return z.object({
    document: z.unknown().nullish(),
    documentType: z.string(),
    id: z.string(),
    name: z.string(),
    parentFolder: z.string().nullish(),
    synchronizationUnits: z.array(SynchronizationUnitSchema())
  });
}
function AddFolderInputSchema() {
  return z.object({
    id: z.string(),
    name: z.string(),
    parentFolder: z.string().nullish()
  });
}
function AddListenerInputSchema() {
  return z.object({
    listener: ListenerSchema()
  });
}
function AddTriggerInputSchema() {
  return z.object({
    trigger: TriggerSchema()
  });
}
function CopyNodeInputSchema() {
  return z.object({
    srcId: z.string(),
    synchronizationUnits: z.array(SynchronizationUnitSchema()).nullish(),
    targetId: z.string(),
    targetName: z.string().nullish(),
    targetParentFolder: z.string().nullish()
  });
}
function DeleteNodeInputSchema() {
  return z.object({
    id: z.string()
  });
}
function ListenerSchema() {
  return z.object({
    __typename: z.literal("Listener").optional(),
    block: z.boolean(),
    callInfo: ListenerCallInfoSchema().nullable(),
    filter: ListenerFilterSchema(),
    label: z.string().nullable(),
    listenerId: z.string(),
    system: z.boolean()
  });
}
function ListenerCallInfoSchema() {
  return z.object({
    __typename: z.literal("ListenerCallInfo").optional(),
    data: z.string().nullable(),
    name: z.string().nullable(),
    transmitterType: TransmitterTypeSchema.nullable()
  });
}
function ListenerFilterSchema() {
  return z.object({
    __typename: z.literal("ListenerFilter").optional(),
    branch: z.array(z.string()).nullable(),
    documentId: z.array(z.string()).nullable(),
    documentType: z.array(z.string()),
    scope: z.array(z.string()).nullable()
  });
}
function MoveNodeInputSchema() {
  return z.object({
    srcFolder: z.string(),
    targetParentFolder: z.string().nullish()
  });
}
function PullResponderTriggerDataSchema() {
  return z.object({
    __typename: z.literal("PullResponderTriggerData").optional(),
    interval: z.string(),
    listenerId: z.string(),
    url: z.string()
  });
}
function RemoveListenerInputSchema() {
  return z.object({
    listenerId: z.string()
  });
}
function RemoveTriggerInputSchema() {
  return z.object({
    triggerId: z.string()
  });
}
function SetAvailableOfflineInputSchema() {
  return z.object({
    availableOffline: z.boolean()
  });
}
function SetDriveIconInputSchema() {
  return z.object({
    icon: z.string()
  });
}
function SetDriveNameInputSchema() {
  return z.object({
    name: z.string()
  });
}
function SetSharingTypeInputSchema() {
  return z.object({
    type: z.string()
  });
}
function SynchronizationUnitSchema() {
  return z.object({
    __typename: z.literal("SynchronizationUnit").optional(),
    branch: z.string(),
    scope: z.string(),
    syncId: z.string()
  });
}
function TriggerSchema() {
  return z.object({
    __typename: z.literal("Trigger").optional(),
    data: TriggerDataSchema().nullable(),
    id: z.string(),
    type: TriggerTypeSchema
  });
}
function TriggerDataSchema() {
  return PullResponderTriggerDataSchema();
}
function UpdateFileInputSchema() {
  return z.object({
    documentType: z.string().nullish(),
    id: z.string(),
    name: z.string().nullish(),
    parentFolder: z.string().nullish()
  });
}
function UpdateNodeInputSchema() {
  return z.object({
    id: z.string(),
    name: z.string().nullish(),
    parentFolder: z.string().nullish()
  });
}

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/node/creators.js
var addFile = (input) => createAction("ADD_FILE", { ...input }, void 0, AddFileInputSchema, "global");
var addFolder = (input) => createAction("ADD_FOLDER", { ...input }, void 0, AddFolderInputSchema, "global");
var deleteNode = (input) => createAction("DELETE_NODE", { ...input }, void 0, DeleteNodeInputSchema, "global");
var updateFile = (input) => createAction("UPDATE_FILE", { ...input }, void 0, UpdateFileInputSchema, "global");
var updateNode = (input) => createAction("UPDATE_NODE", { ...input }, void 0, UpdateNodeInputSchema, "global");
var copyNode = (input) => createAction("COPY_NODE", { ...input }, void 0, CopyNodeInputSchema, "global");
var moveNode = (input) => createAction("MOVE_NODE", { ...input }, void 0, MoveNodeInputSchema, "global");

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/src/utils.js
var utils_exports = {};
__export(utils_exports, {
  escapeRegExp: () => escapeRegExp,
  generateAddNodeAction: () => generateAddNodeAction,
  generateCopyNodeAction: () => generateCopyNodeAction,
  generateNodesCopy: () => generateNodesCopy,
  generateSynchronizationUnitId: () => generateSynchronizationUnitId,
  generateSynchronizationUnits: () => generateSynchronizationUnits,
  getAncestors: () => getAncestors,
  getDescendants: () => getDescendants,
  getNextCopyNumber: () => getNextCopyNumber,
  handleTargetNameCollisions: () => handleTargetNameCollisions,
  isFileNode: () => isFileNode,
  isFolderNode: () => isFolderNode
});

// node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

// node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    if (typeof crypto === "undefined" || !crypto.getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    getRandomValues = crypto.getRandomValues.bind(crypto);
  }
  return getRandomValues(rnds8);
}

// node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm-browser/native.js
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = { randomUUID };

// node_modules/.pnpm/uuid@11.1.0/node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    if (offset < 0 || offset + 16 > buf.length) {
      throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
    }
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/src/utils.js
function isFileNode(node) {
  return node.kind === "file";
}
function isFolderNode(node) {
  return node.kind === "folder";
}
function getAncestors(node, allNodes) {
  if (!node.parentFolder) {
    return [];
  } else {
    const parentNode = allNodes.find((_node) => _node.id === node.parentFolder);
    if (!parentNode) {
      throw new Error(`Parent node with id ${node.parentFolder} not found`);
    }
    return [parentNode, ...getAncestors(parentNode, allNodes)];
  }
}
function getDescendants(node, allNodes) {
  const children = allNodes.filter((_node) => _node.parentFolder === node.id);
  const descendants = children.map((child) => getDescendants(child, allNodes));
  return [...children, ...descendants.flat()];
}
function generateNodesCopy(src, idGenerator, nodes) {
  const rootNode = nodes.find((node) => node.id === src.srcId);
  if (!rootNode) {
    throw new Error(`Node with id ${src.srcId} not found`);
  }
  const nodesToCopy = [
    {
      ...rootNode,
      name: src.targetName || rootNode.name,
      parentFolder: src.targetParentFolder || null
    },
    ...getDescendants(rootNode, nodes)
  ];
  const ids = {};
  if (src.targetParentFolder) {
    ids[src.targetParentFolder] = src.targetParentFolder;
  }
  const getNewNodeId = (id) => {
    let newId = ids[id];
    if (!newId) {
      const oldId = id;
      newId = idGenerator(id);
      ids[oldId] = newId;
    }
    return newId;
  };
  const copyNodesInput = nodesToCopy.map((node) => ({
    srcId: node.id,
    targetId: getNewNodeId(node.id),
    targetName: node.name,
    targetParentFolder: node.parentFolder ? getNewNodeId(node.parentFolder) : null,
    synchronizationUnits: isFileNode(node) ? node.synchronizationUnits.map((unit) => ({
      ...unit,
      syncId: generateSynchronizationUnitId(nodes)
    })) : void 0
  }));
  return copyNodesInput;
}
function generateSynchronizationUnitId(nodes) {
  let syncId = "";
  while (!syncId || nodes.find((node) => isFileNode(node) && node.synchronizationUnits.find((unit) => unit.syncId === syncId))) {
    syncId = v4_default();
  }
  return syncId;
}
function generateSynchronizationUnits(state, scopes, branch = "main") {
  return scopes.map((scope) => ({
    scope,
    branch,
    syncId: generateSynchronizationUnitId(state.nodes)
  }));
}
function generateAddNodeAction(state, action, scopes) {
  return addFile({
    ...action,
    synchronizationUnits: generateSynchronizationUnits(state, scopes)
  });
}
function generateCopyNodeAction(state, action) {
  const originalNode = state.nodes.find((node) => node.id === action.srcId);
  if (!originalNode) {
    throw new Error(`Node with id ${action.srcId} not found`);
  }
  let synchronizationUnits = void 0;
  if (isFileNode(originalNode)) {
    synchronizationUnits = originalNode.synchronizationUnits.map((syncUnit) => ({
      ...syncUnit,
      syncId: generateSynchronizationUnitId(state.nodes)
    }));
  }
  return copyNode({
    ...action,
    synchronizationUnits
  });
}
function getNextCopyNumber(files, baseFilename) {
  let maxNumber = 0;
  const regex = new RegExp(`^${escapeRegExp(baseFilename)} \\(copy\\)(?: (\\d+))?$`);
  for (const file of files) {
    const match = file.match(regex);
    if (match) {
      const number = match[1] ? parseInt(match[1], 10) : 1;
      if (number > maxNumber) {
        maxNumber = number;
      }
    }
  }
  return maxNumber + 1;
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function handleTargetNameCollisions(params) {
  const { nodes, targetParentFolder, srcName } = params;
  const targetNodeChildrenNames = nodes.filter((node) => targetParentFolder === "" ? node.parentFolder === null : node.parentFolder === targetParentFolder).map((node) => node.name);
  const targetHasNodesWithSameName = targetNodeChildrenNames.includes(srcName);
  const targetName = targetHasNodesWithSameName ? `${srcName} (copy) ${getNextCopyNumber(targetNodeChildrenNames, srcName)}` : srcName;
  return targetName;
}

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/constants.js
var fileExtension = "phdd";
var documentType = "powerhouse/document-drive";
var documentModelName = "DocumentDrive";
var initialGlobalState = {
  id: "",
  name: "",
  nodes: [],
  icon: null,
  slug: null
};
var initialLocalState = {
  listeners: [],
  triggers: [],
  sharingType: "private",
  availableOffline: false
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/error.js
var DocumentModelNotFoundError = class extends Error {
  id;
  constructor(id, cause) {
    super(`Document model "${id}" not found`, { cause });
    this.id = id;
  }
};
var OperationError = class extends Error {
  status;
  operation;
  constructor(status, operation, message, cause) {
    super(message, { cause: cause ?? operation });
    this.status = status;
    this.operation = operation;
  }
};
var ConflictOperationError = class extends OperationError {
  constructor(existingOperation, newOperation) {
    super("CONFLICT", newOperation, `Conflicting operation on index ${newOperation.index}`, { existingOperation, newOperation });
  }
};
var DriveAlreadyExistsError = class extends Error {
  driveId;
  constructor(driveId) {
    super(`Drive already exists. ID: ${driveId}`);
    this.driveId = driveId;
  }
};
var DriveNotFoundError = class extends Error {
  driveId;
  constructor(driveId) {
    super(`Drive with id ${driveId} not found`);
    this.driveId = driveId;
  }
};
var SynchronizationUnitNotFoundError = class extends Error {
  syncUnitId;
  constructor(message, syncUnitId) {
    super(message);
    this.syncUnitId = syncUnitId;
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/utils/run-asap.js
var RunAsap;
(function(RunAsap2) {
  RunAsap2.useMessageChannel = (() => {
    if (typeof MessageChannel === "undefined") {
      return new Error("MessageChannel is not supported");
    }
    return (task) => {
      const controller = new AbortController();
      const signal = controller.signal;
      const mc = new MessageChannel();
      mc.port1.postMessage(null);
      mc.port2.addEventListener("message", () => {
        task();
        mc.port1.close();
        mc.port2.close();
      }, { once: true, signal });
      mc.port2.start();
      return () => controller.abort();
    };
  })();
  RunAsap2.usePostMessage = (() => {
    const _main = (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      typeof window === "object" && window || // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      typeof global === "object" && global || typeof self === "object" && self
    );
    if (!_main) {
      return new Error("No global object found");
    }
    const main = _main;
    if (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      !main.postMessage || // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      !main.addEventListener || main.importScripts
    ) {
      return new Error("postMessage is not supported");
    }
    let index = 0;
    const tasks = /* @__PURE__ */ new Map();
    function getNewIndex() {
      if (index === 9007199254740991) {
        return 0;
      }
      return ++index;
    }
    const MESSAGE_PREFIX = "com.usePostMessage" + Math.random();
    main.addEventListener("message", (e) => {
      const event = e;
      if (typeof event.data !== "string") {
        return;
      }
      if (event.source !== main || !event.data.startsWith(MESSAGE_PREFIX)) {
        return;
      }
      const index2 = event.data.split(":").at(1);
      if (index2 === void 0) {
        return;
      }
      const i = +index2;
      const task = tasks.get(i);
      if (task) {
        task();
        tasks.delete(i);
      }
    }, false);
    return (task) => {
      const i = getNewIndex();
      tasks.set(i, task);
      main.postMessage(MESSAGE_PREFIX + ":" + i, { targetOrigin: "*" });
      return () => {
        tasks.delete(i);
      };
    };
  })();
  RunAsap2.useSetImmediate = (() => {
    if (typeof window !== "undefined") {
      return new Error("setImmediate is not supported on the browser");
    }
    if (typeof setImmediate === "undefined") {
      return new Error("setImmediate is not supported");
    }
    return (task) => {
      const id = setImmediate(task);
      return () => clearImmediate(id);
    };
  })();
  RunAsap2.useSetTimeout = /* @__PURE__ */ (() => {
    return (task) => {
      const id = setTimeout(task, 0);
      return () => clearTimeout(id);
    };
  })();
  function runAsap2(task) {
    if (!(RunAsap2.useSetImmediate instanceof Error)) {
      return RunAsap2.useSetImmediate(task);
    } else if (!(RunAsap2.useMessageChannel instanceof Error)) {
      return RunAsap2.useMessageChannel(task);
    } else if (!(RunAsap2.usePostMessage instanceof Error)) {
      return RunAsap2.usePostMessage(task);
    } else {
      return RunAsap2.useSetTimeout(task);
    }
  }
  RunAsap2.runAsap = runAsap2;
  function runAsapAsync2(task, queueMethod = runAsap2) {
    if (queueMethod instanceof Error) {
      throw new Error("queueMethod is not supported", {
        cause: queueMethod
      });
    }
    return new Promise((resolve, reject) => {
      queueMethod(() => {
        task().then(resolve).catch(reject);
      });
    });
  }
  RunAsap2.runAsapAsync = runAsapAsync2;
})(RunAsap || (RunAsap = {}));

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/utils/misc.js
var runAsap = RunAsap.runAsap;
var runAsapAsync = RunAsap.runAsapAsync;
function isDocumentDrive(document) {
  return document.documentType === documentType;
}
function mergeOperations(currentOperations, newOperations) {
  const minIndexByScope = Object.keys(currentOperations).reduce((acc, curr) => {
    const scope = curr;
    acc[scope] = currentOperations[scope].at(-1)?.index ?? 0;
    return acc;
  }, {});
  const conflictOp = newOperations.find((op) => op.index < (minIndexByScope[op.scope] ?? 0));
  if (conflictOp) {
    throw new OperationError("ERROR", conflictOp, `Tried to add operation with index ${conflictOp.index} and document is at index ${minIndexByScope[conflictOp.scope]}`);
  }
  return newOperations.sort((a, b) => a.index - b.index).reduce((acc, curr) => {
    const existingOperations = acc[curr.scope] || [];
    return { ...acc, [curr.scope]: [...existingOperations, curr] };
  }, currentOperations);
}
function generateUUID() {
  return generateId();
}
function isBefore(dateA, dateB) {
  return new Date(dateA) < new Date(dateB);
}

// node_modules/.pnpm/nanoevents@9.1.0/node_modules/nanoevents/index.js
var createNanoEvents = () => ({
  emit(event, ...args) {
    for (let callbacks = this.events[event] || [], i = 0, length = callbacks.length; i < length; i++) {
      callbacks[i](...args);
    }
  },
  events: {},
  on(event, cb) {
    ;
    (this.events[event] ||= []).push(cb);
    return () => {
      this.events[event] = this.events[event]?.filter((i) => cb !== i);
    };
  }
});

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/queue/types.js
function isOperationJob(job) {
  return "operations" in job;
}
function isActionJob(job) {
  return "actions" in job;
}

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/queue/base.js
var MemoryQueue = class {
  id;
  blocked = false;
  deleted = false;
  items = [];
  dependencies = new Array();
  constructor(id) {
    this.id = id;
  }
  async setDeleted(deleted) {
    this.deleted = deleted;
  }
  async isDeleted() {
    return this.deleted;
  }
  async addJob(data) {
    this.items.push(data);
    return Promise.resolve();
  }
  async getNextJob() {
    const job = this.items.shift();
    return Promise.resolve(job);
  }
  async amountOfJobs() {
    return Promise.resolve(this.items.length);
  }
  getId() {
    return this.id;
  }
  async setBlocked(blocked) {
    this.blocked = blocked;
  }
  async isBlocked() {
    return this.blocked;
  }
  async getJobs() {
    return this.items;
  }
  async addDependencies(job) {
    if (!this.dependencies.find((j) => j.jobId === job.jobId)) {
      this.dependencies.push(job);
    }
    if (!this.isBlocked()) {
      this.setBlocked(true);
    }
  }
  async removeDependencies(job) {
    this.dependencies = this.dependencies.filter((j) => j.jobId !== job.jobId && j.driveId !== job.driveId);
    if (this.dependencies.length === 0) {
      await this.setBlocked(false);
    }
  }
};
var BaseQueueManager = class {
  emitter = createNanoEvents();
  ticker = 0;
  queues = [];
  workers;
  timeout;
  delegate;
  constructor(workers = 3, timeout = 0) {
    this.workers = workers;
    this.timeout = timeout;
  }
  async init(delegate, onError) {
    this.delegate = delegate;
    for (let i = 0; i < this.workers; i++) {
      setTimeout(() => this.processNextJob.bind(this)().catch(onError), 100 * i);
    }
    return Promise.resolve();
  }
  async addJob(job) {
    if (!this.delegate) {
      throw new Error("No server delegate defined");
    }
    const jobId = generateUUID();
    const queue = this.getQueue(job.driveId, job.documentId);
    if (await queue.isDeleted()) {
      throw new Error("Queue is deleted");
    }
    const newDocument = job.documentId && !await this.delegate.checkDocumentExists(job.documentId);
    if (newDocument && !await queue.isBlocked()) {
      await queue.setBlocked(true);
      const driveQueue = this.getQueue(job.driveId);
      const jobs = await driveQueue.getJobs();
      for (const driveJob of jobs) {
        const actions2 = isOperationJob(driveJob) ? driveJob.operations : driveJob.actions;
        const op = actions2.find((j) => {
          const input = j.input;
          return j.type === "ADD_FILE" && input.id === job.documentId;
        });
        if (op) {
          await queue.addDependencies(driveJob);
        }
      }
    }
    const actions = isOperationJob(job) ? job.operations : job.actions ?? [];
    const addFileOps = actions.filter((j) => j.type === "ADD_FILE");
    for (const addFileOp of addFileOps) {
      const input = addFileOp.input;
      const q = this.getQueue(job.driveId, input.id);
      await q.addDependencies({ jobId, ...job });
    }
    const removeFileOps = actions.filter((j) => j.type === "DELETE_NODE");
    for (const removeFileOp of removeFileOps) {
      const input = removeFileOp.input;
      const queue2 = this.getQueue(job.driveId, input.id);
      await queue2.setDeleted(true);
    }
    await queue.addJob({ jobId, ...job });
    return jobId;
  }
  getQueue(driveId, documentId) {
    const queueId = this.getQueueId(driveId, documentId);
    let queue = this.queues.find((q) => q.getId() === queueId);
    if (!queue) {
      queue = new MemoryQueue(queueId);
      this.queues.push(queue);
    }
    return queue;
  }
  removeQueue(driveId, documentId) {
    const queueId = this.getQueueId(driveId, documentId);
    this.queues = this.queues.filter((q) => q.getId() !== queueId);
    this.emit("queueRemoved", queueId);
  }
  getQueueByIndex(index) {
    const queue = this.queues[index];
    if (queue) {
      return queue;
    }
    return null;
  }
  getQueues() {
    return this.queues.map((q) => q.getId());
  }
  retryNextJob(timeout) {
    const _timeout = timeout !== void 0 ? timeout : this.timeout;
    const retry = _timeout > 0 ? (fn) => setTimeout(fn, _timeout) : runAsap;
    retry(() => this.processNextJob());
  }
  async findFirstNonEmptyQueue(ticker) {
    const numQueues = this.queues.length;
    for (let i = 0; i < numQueues; i++) {
      const index = (ticker + i) % numQueues;
      const queue = this.queues[index];
      if (queue && await queue.amountOfJobs() > 0) {
        return index;
      }
    }
    return null;
  }
  async processNextJob() {
    if (!this.delegate) {
      throw new Error("No server delegate defined");
    }
    if (this.queues.length === 0) {
      this.retryNextJob();
      return;
    }
    const queue = this.queues[this.ticker];
    if (!queue) {
      this.ticker = 0;
      this.retryNextJob();
      return;
    }
    const amountOfJobs = await queue.amountOfJobs();
    if (amountOfJobs === 0) {
      const nextTicker = await this.findFirstNonEmptyQueue(this.ticker);
      if (nextTicker !== null) {
        this.ticker = nextTicker;
        this.retryNextJob(0);
      } else {
        this.retryNextJob();
      }
      return;
    }
    this.ticker = this.ticker === this.queues.length - 1 ? 0 : this.ticker + 1;
    const isBlocked = await queue.isBlocked();
    if (isBlocked) {
      this.retryNextJob();
      return;
    }
    await queue.setBlocked(true);
    const nextJob = await queue.getNextJob();
    if (!nextJob) {
      this.retryNextJob();
      return;
    }
    try {
      const result = await this.delegate.processJob(nextJob);
      const actions = isOperationJob(nextJob) ? nextJob.operations : nextJob.actions;
      const addFileActions = actions.filter((op) => op.type === "ADD_FILE");
      if (addFileActions.length > 0) {
        for (const addFile2 of addFileActions) {
          const documentQueue = this.getQueue(nextJob.driveId, addFile2.input.id);
          await documentQueue.removeDependencies(nextJob);
        }
      }
      this.emit("jobCompleted", nextJob, result);
    } catch (e) {
      logger.error(`job failed`, e);
      this.emit("jobFailed", nextJob, e);
    } finally {
      await queue.setBlocked(false);
      this.retryNextJob(0);
    }
  }
  emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }
  on(event, cb) {
    return this.emitter.on(event, cb);
  }
  getQueueId(driveId, documentId) {
    return `queue:${driveId}${documentId ? `:${documentId}` : ""}`;
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/read-mode/errors.js
var ReadDriveError = class extends Error {
};
var ReadDriveNotFoundError = class extends ReadDriveError {
  constructor(driveId) {
    super(`Read drive ${driveId} not found.`);
  }
};
var ReadDriveSlugNotFoundError = class extends ReadDriveError {
  constructor(slug) {
    super(`Read drive with slug ${slug} not found.`);
  }
};
var ReadDocumentNotFoundError = class extends ReadDriveError {
  constructor(drive, id) {
    super(`Document with id ${id} not found on read drive ${drive}.`);
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/storage/memory.js
var MemoryStorage = class {
  documents;
  driveManifests;
  constructor() {
    this.documents = {};
    this.driveManifests = {};
  }
  ////////////////////////////////
  // IDocumentStorage
  ////////////////////////////////
  exists(documentId) {
    return Promise.resolve(!!this.documents[documentId] || !!this.documents[`drive/${documentId}`]);
  }
  create(documentId, document) {
    this.documents[documentId] = document;
    return Promise.resolve();
  }
  get(documentId) {
    const document = this.documents[documentId];
    if (!document) {
      const drive = this.documents[`drive/${documentId}`];
      if (drive) {
        return Promise.resolve(drive);
      }
      throw new Error(`Document with id ${documentId} not found`);
    }
    return Promise.resolve(document);
  }
  ////////////////////////////////
  // IDriveStorage
  ////////////////////////////////
  checkDocumentExists(drive, id) {
    return this.exists(id);
  }
  getDocuments(drive) {
    const manifest = this.getDriveManifest(drive);
    return Promise.resolve([...manifest.documentIds]);
  }
  getDocument(driveId, id) {
    return this.get(id);
  }
  async clearStorage() {
    this.documents = {};
    this.driveManifests = {};
  }
  async createDocument(drive, id, document) {
    await this.create(id, document);
    const manifest = this.getDriveManifest(drive);
    manifest.documentIds.add(id);
    this.updateDriveManifest(drive, manifest);
  }
  async addDocumentOperations(drive, id, operations, header) {
    const document = await this.getDocument(drive, id);
    if (!document) {
      throw new Error(`Document with id ${id} not found`);
    }
    const mergedOperations = mergeOperations(document.operations, operations);
    this.documents[id] = {
      ...document,
      ...header,
      operations: mergedOperations
    };
  }
  async deleteDocument(drive, id) {
    const drives = await this.getDrives();
    for (const driveId of drives) {
      const manifest = this.getDriveManifest(driveId);
      if (manifest.documentIds.has(id)) {
        manifest.documentIds.delete(id);
        this.updateDriveManifest(driveId, manifest);
      }
    }
    delete this.documents[id];
  }
  async getDrives() {
    return Object.keys(this.driveManifests);
  }
  async getDrive(id) {
    const drive = this.documents[`drive/${id}`];
    if (!drive) {
      throw new DriveNotFoundError(id);
    }
    return drive;
  }
  async getDriveBySlug(slug) {
    for (const driveId of Object.keys(this.driveManifests)) {
      const drive = this.documents[`drive/${driveId}`];
      if (drive.initialState.state.global.slug === slug) {
        return drive;
      }
    }
    throw new Error(`Drive with slug ${slug} not found`);
  }
  async createDrive(id, drive) {
    const slug = drive.initialState.state.global.slug;
    if (slug) {
      let existingDrive;
      try {
        existingDrive = await this.getDriveBySlug(slug);
      } catch {
      }
      if (existingDrive) {
        throw new Error(`Drive with slug ${slug} already exists`);
      }
    }
    await this.create(`drive/${id}`, drive);
    this.updateDriveManifest(id, { documentIds: /* @__PURE__ */ new Set() });
  }
  async addDriveOperations(id, operations, header) {
    const drive = await this.getDrive(id);
    const mergedOperations = mergeOperations(drive.operations, operations);
    this.documents[`drive/${id}`] = {
      ...drive,
      ...header,
      operations: mergedOperations
    };
  }
  async deleteDrive(id) {
    const manifest = this.getDriveManifest(id);
    const drives = await this.getDrives();
    await Promise.all([...manifest.documentIds].map((docId) => {
      for (const driveId of drives) {
        if (driveId === id) {
          continue;
        }
        const manifest2 = this.getDriveManifest(driveId);
        if (manifest2.documentIds.has(docId)) {
          return;
        }
      }
      delete this.documents[docId];
    }));
    delete this.driveManifests[id];
    delete this.documents[id];
  }
  async getSynchronizationUnitsRevision(units) {
    const results = await Promise.allSettled(units.map(async (unit) => {
      try {
        const document = await this.get(unit.documentId);
        if (!document) {
          return void 0;
        }
        const operation = document.operations[unit.scope].at(-1);
        if (operation) {
          return {
            documentId: unit.documentId,
            scope: unit.scope,
            branch: unit.branch,
            lastUpdated: operation.timestamp,
            revision: operation.index
          };
        }
      } catch {
        return void 0;
      }
    }));
    return results.reduce((acc, curr) => {
      if (curr.status === "fulfilled" && curr.value !== void 0) {
        acc.push(curr.value);
      }
      return acc;
    }, []);
  }
  ////////////////////////////////
  // Private
  ////////////////////////////////
  getDriveManifest(driveId) {
    if (!this.driveManifests[driveId]) {
      this.driveManifests[driveId] = { documentIds: /* @__PURE__ */ new Set() };
    }
    return this.driveManifests[driveId];
  }
  updateDriveManifest(driveId, manifest) {
    this.driveManifests[driveId] = manifest;
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/creators.js
var creators_exports = {};
__export(creators_exports, {
  addFile: () => addFile,
  addFolder: () => addFolder,
  addListener: () => addListener,
  addTrigger: () => addTrigger,
  copyNode: () => copyNode,
  deleteNode: () => deleteNode,
  moveNode: () => moveNode,
  removeListener: () => removeListener,
  removeTrigger: () => removeTrigger,
  setAvailableOffline: () => setAvailableOffline,
  setDriveIcon: () => setDriveIcon,
  setDriveName: () => setDriveName,
  setSharingType: () => setSharingType,
  updateFile: () => updateFile,
  updateNode: () => updateNode
});

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/drive/creators.js
var setDriveName = (input) => createAction("SET_DRIVE_NAME", { ...input }, void 0, SetDriveNameInputSchema, "global");
var setDriveIcon = (input) => createAction("SET_DRIVE_ICON", { ...input }, void 0, SetDriveIconInputSchema, "global");
var setSharingType = (input) => createAction("SET_SHARING_TYPE", { ...input }, void 0, SetSharingTypeInputSchema, "local");
var setAvailableOffline = (input) => createAction("SET_AVAILABLE_OFFLINE", { ...input }, void 0, SetAvailableOfflineInputSchema, "local");
var addListener = (input) => createAction("ADD_LISTENER", { ...input }, void 0, AddListenerInputSchema, "local");
var removeListener = (input) => createAction("REMOVE_LISTENER", { ...input }, void 0, RemoveListenerInputSchema, "local");
var addTrigger = (input) => createAction("ADD_TRIGGER", { ...input }, void 0, AddTriggerInputSchema, "local");
var removeTrigger = (input) => createAction("REMOVE_TRIGGER", { ...input }, void 0, RemoveTriggerInputSchema, "local");

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/utils.js
var utils_exports2 = {};
__export(utils_exports2, {
  createDocument: () => createDocument,
  createExtendedState: () => createExtendedState,
  createState: () => createState,
  fileExtension: () => fileExtension,
  loadFromFile: () => loadFromFile,
  loadFromInput: () => loadFromInput,
  saveToFile: () => saveToFile,
  saveToFileHandle: () => saveToFileHandle
});

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/src/reducers/drive.js
var reducer = {
  setDriveNameOperation(state, action, dispatch) {
    state.name = action.input.name;
  },
  setDriveIconOperation(state, action, dispatch) {
    state.icon = action.input.icon;
  },
  setSharingTypeOperation(state, action, dispatch) {
    state.sharingType = action.input.type;
  },
  setAvailableOfflineOperation(state, action, dispatch) {
    state.availableOffline = action.input.availableOffline;
  },
  addListenerOperation(state, action, dispatch) {
    if (state.listeners.find((listener) => listener.listenerId === action.input.listener.listenerId)) {
      throw new Error(`A listener with Id: ${action.input.listener.listenerId} already exists`);
    }
    state.listeners.push(action.input.listener);
  },
  removeListenerOperation(state, action, dispatch) {
    state.listeners = state.listeners.filter((listener) => listener.listenerId !== action.input.listenerId);
  },
  addTriggerOperation(state, action, dispatch) {
    if (state.triggers.find((trigger) => trigger.id === action.input.trigger.id)) {
      throw new Error(`A trigger with Id: ${action.input.trigger.id} already exists`);
    }
    state.triggers.push(action.input.trigger);
  },
  removeTriggerOperation(state, action, dispatch) {
    state.triggers = state.triggers.filter((trigger) => trigger.id !== action.input.triggerId);
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/src/reducers/node.js
var reducer2 = {
  addFileOperation(state, action, dispatch) {
    if (state.nodes.find((node) => node.id === action.input.id)) {
      throw new Error(`Node with id ${action.input.id} already exists!`);
    }
    const name = handleTargetNameCollisions({
      nodes: state.nodes,
      srcName: action.input.name,
      targetParentFolder: action.input.parentFolder || null
    });
    const synchronizationUnits = action.input.synchronizationUnits;
    const invalidSyncUnit = synchronizationUnits.find((unit) => !!state.nodes.find((node) => isFileNode(node) && node.synchronizationUnits.find((fileUnit) => fileUnit.syncId === unit.syncId)));
    if (invalidSyncUnit) {
      throw new Error(`A synchronization unit with Id ${invalidSyncUnit.syncId} already exists`);
    }
    const fileNode = {
      id: action.input.id,
      name,
      kind: "file",
      parentFolder: action.input.parentFolder ?? null,
      synchronizationUnits,
      documentType: action.input.documentType
    };
    state.nodes.push(fileNode);
    dispatch?.({
      type: "CREATE_CHILD_DOCUMENT",
      input: {
        id: action.input.id,
        documentType: action.input.documentType,
        synchronizationUnits,
        document: action.input.document
      }
    });
  },
  addFolderOperation(state, action) {
    if (state.nodes.find((node) => node.id === action.input.id)) {
      throw new Error(`Node with id ${action.input.id} already exists!`);
    }
    const name = handleTargetNameCollisions({
      nodes: state.nodes,
      srcName: action.input.name,
      targetParentFolder: action.input.parentFolder || null
    });
    state.nodes.push({
      ...action.input,
      name,
      kind: "folder",
      parentFolder: action.input.parentFolder ?? null
    });
  },
  deleteNodeOperation(state, action, dispatch) {
    const node = state.nodes.find((node2) => node2.id === action.input.id);
    if (!node) {
      throw new Error(`Node with id ${action.input.id} not found`);
    }
    const descendants = getDescendants(node, state.nodes);
    state.nodes = state.nodes.filter((node2) => node2.id !== action.input.id && !descendants.find((descendant) => descendant.id === node2.id));
    [node, ...descendants].filter((node2) => isFileNode(node2)).forEach((node2) => {
      dispatch?.({
        type: "DELETE_CHILD_DOCUMENT",
        input: {
          id: node2.id
        }
      });
    });
  },
  updateFileOperation(state, action) {
    state.nodes = state.nodes.map((node) => node.id === action.input.id ? {
      ...node,
      ...{
        name: handleTargetNameCollisions({
          nodes: state.nodes,
          srcName: action.input.name ?? node.name,
          targetParentFolder: action.input.parentFolder || null
        }),
        documentType: action.input.documentType ?? node.documentType
      }
    } : node);
  },
  updateNodeOperation(state, action) {
    state.nodes = state.nodes.map((node) => node.id === action.input.id ? {
      ...node,
      ...{
        name: handleTargetNameCollisions({
          nodes: state.nodes,
          srcName: action.input.name ?? node.name,
          targetParentFolder: action.input.parentFolder || null
        }),
        parentFolder: action.input.parentFolder === null ? null : node.parentFolder
      }
    } : node);
  },
  copyNodeOperation(state, action, dispatch) {
    const node = state.nodes.find((node2) => node2.id === action.input.srcId);
    if (!node) {
      throw new Error(`Node with id ${action.input.srcId} not found`);
    }
    const duplicatedNode = state.nodes.find((node2) => node2.id === action.input.targetId);
    if (duplicatedNode) {
      throw new Error(`Node with id ${action.input.targetId} already exists`);
    }
    const name = handleTargetNameCollisions({
      nodes: state.nodes,
      srcName: action.input.targetName || node.name,
      targetParentFolder: action.input.targetParentFolder || null
    });
    const newNode = {
      ...node,
      name,
      id: action.input.targetId,
      parentFolder: action.input.targetParentFolder || null
    };
    const isFile = isFileNode(newNode);
    if (isFile) {
      const synchronizationUnits = action.input.synchronizationUnits;
      if (!action.input.synchronizationUnits) {
        throw new Error("Synchronization units were not provided");
      }
      const invalidSyncUnit = synchronizationUnits.find((unit) => !!state.nodes.find((node2) => isFileNode(node2) && node2.synchronizationUnits.find((fileUnit) => fileUnit.syncId === unit.syncId)));
      if (invalidSyncUnit) {
        throw new Error(`A synchronization unit with Id ${invalidSyncUnit.syncId} already exists`);
      }
      newNode.synchronizationUnits = synchronizationUnits;
    }
    state.nodes.push(newNode);
    if (isFile) {
      dispatch?.({
        type: "COPY_CHILD_DOCUMENT",
        input: {
          id: action.input.srcId,
          newId: action.input.targetId,
          synchronizationUnits: newNode.synchronizationUnits
        }
      });
    }
  },
  moveNodeOperation(state, action) {
    if (action.input.srcFolder === action.input.targetParentFolder) {
      throw new Error("Circular Reference Error: Attempting to move a node to its current parent folder");
    }
    const node = state.nodes.find((node2) => node2.id === action.input.srcFolder);
    if (!node) {
      throw new Error(`Node with id ${action.input.srcFolder} not found`);
    }
    const name = handleTargetNameCollisions({
      nodes: state.nodes,
      srcName: node.name,
      targetParentFolder: action.input.targetParentFolder || null
    });
    if (isFolderNode(node)) {
      const descendants = getDescendants(node, state.nodes);
      if (descendants.find((descendant) => descendant.id === action.input.targetParentFolder)) {
        throw new Error("Circular Reference Error: Cannot move a folder to one of its descendants");
      }
    }
    state.nodes = state.nodes.map((node2) => {
      if (node2.id === action.input.srcFolder) {
        return {
          ...node2,
          name,
          parentFolder: action.input.targetParentFolder || null
        };
      }
      return node2;
    });
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/reducer.js
var stateReducer = (state, action, dispatch) => {
  if (isDocumentAction(action)) {
    return state;
  }
  switch (action.type) {
    case "ADD_FILE":
      AddFileInputSchema().parse(action.input);
      reducer2.addFileOperation(state[action.scope], action, dispatch);
      break;
    case "ADD_FOLDER":
      AddFolderInputSchema().parse(action.input);
      reducer2.addFolderOperation(state[action.scope], action, dispatch);
      break;
    case "DELETE_NODE":
      DeleteNodeInputSchema().parse(action.input);
      reducer2.deleteNodeOperation(state[action.scope], action, dispatch);
      break;
    case "UPDATE_FILE":
      UpdateFileInputSchema().parse(action.input);
      reducer2.updateFileOperation(state[action.scope], action, dispatch);
      break;
    case "UPDATE_NODE":
      UpdateNodeInputSchema().parse(action.input);
      reducer2.updateNodeOperation(state[action.scope], action, dispatch);
      break;
    case "COPY_NODE":
      CopyNodeInputSchema().parse(action.input);
      reducer2.copyNodeOperation(state[action.scope], action, dispatch);
      break;
    case "MOVE_NODE":
      MoveNodeInputSchema().parse(action.input);
      reducer2.moveNodeOperation(state[action.scope], action, dispatch);
      break;
    case "SET_DRIVE_NAME":
      SetDriveNameInputSchema().parse(action.input);
      reducer.setDriveNameOperation(state[action.scope], action, dispatch);
      break;
    case "SET_DRIVE_ICON":
      SetDriveIconInputSchema().parse(action.input);
      reducer.setDriveIconOperation(state[action.scope], action, dispatch);
      break;
    case "SET_SHARING_TYPE":
      SetSharingTypeInputSchema().parse(action.input);
      reducer.setSharingTypeOperation(state[action.scope], action, dispatch);
      break;
    case "SET_AVAILABLE_OFFLINE":
      SetAvailableOfflineInputSchema().parse(action.input);
      reducer.setAvailableOfflineOperation(state[action.scope], action, dispatch);
      break;
    case "ADD_LISTENER":
      AddListenerInputSchema().parse(action.input);
      reducer.addListenerOperation(state[action.scope], action, dispatch);
      break;
    case "REMOVE_LISTENER":
      RemoveListenerInputSchema().parse(action.input);
      reducer.removeListenerOperation(state[action.scope], action, dispatch);
      break;
    case "ADD_TRIGGER":
      AddTriggerInputSchema().parse(action.input);
      reducer.addTriggerOperation(state[action.scope], action, dispatch);
      break;
    case "REMOVE_TRIGGER":
      RemoveTriggerInputSchema().parse(action.input);
      reducer.removeTriggerOperation(state[action.scope], action, dispatch);
      break;
    default:
      return state;
  }
};
var reducer3 = createReducer(stateReducer);

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/utils.js
var createState = (state) => {
  return {
    global: { ...initialGlobalState, ...state?.global },
    local: { ...initialLocalState, ...state?.local }
  };
};
var createExtendedState = (extendedState) => {
  return baseCreateExtendedState({ ...extendedState, documentType }, createState);
};
var createDocument = (state) => {
  return baseCreateDocument(createExtendedState(state), createState);
};
var saveToFile = (document, path, name) => {
  return baseSaveToFile(document, path, fileExtension, name);
};
var saveToFileHandle = (document, input) => {
  return baseSaveToFileHandle(document, input);
};
var loadFromFile = (path) => {
  return baseLoadFromFile(path, reducer3);
};
var loadFromInput = (input) => {
  return baseLoadFromInput(input, reducer3);
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/actions.js
var actions_exports = {};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/gen/document-model.js
var documentModelState = {
  id: documentType,
  name: documentModelName,
  extension: fileExtension,
  description: "",
  author: {
    name: "Powerhouse Inc",
    website: "https://www.powerhouse.inc/"
  },
  specifications: [
    {
      version: 1,
      changeLog: [],
      state: {
        global: {
          schema: "type FolderNode {\n    id: String!\n    name: String!\n    kind: String!\n    parentFolder: String\n}\n\ntype SynchronizationUnit {\n    syncId: ID!\n    scope: String!\n    branch: String!\n}\n\ntype FileNode {\n    id: String!\n    name: String!\n    kind: String!\n    documentType: String!\n    parentFolder: String\n    synchronizationUnits: [SynchronizationUnit!]!\n}\n\nunion Node = FolderNode | FileNode\n\ntype DocumentDriveState {\n    id: ID!\n    name: String!\n    nodes: [Node!]!\n    icon: String\n    slug: String\n}",
          initialValue: '"{\\"id\\":\\"\\",\\"name\\":\\"\\",\\"nodes\\":[],\\"icon\\":null,\\"slug\\":null}"',
          examples: []
        },
        local: {
          schema: "type ListenerFilter {\n    documentType: [String!]!\n    documentId: [ID!]\n    scope: [String!]\n    branch: [String!]\n}\n\nenum TransmitterType {\n    Internal,\n    SwitchboardPush,\n    PullResponder,\n    SecureConnect, \n    MatrixConnect,\n    RESTWebhook\n}\n\ntype ListenerCallInfo {\n    transmitterType: TransmitterType\n    name: String\n    data: String\n}\n\ntype Listener {\n    listenerId: ID!\n    label: String\n    block: Boolean!\n    system: Boolean!\n    filter: ListenerFilter!\n    callInfo: ListenerCallInfo\n}\n\nenum TriggerType {\n    PullResponder\n}\n\ntype PullResponderTriggerData {\n    listenerId: ID!\n    url: String!\n    interval: String!\n}\n\nunion TriggerData = PullResponderTriggerData\n\ntype Trigger {\n    id: ID!\n    type: TriggerType!\n    data: TriggerData\n}\n\ntype DocumentDriveLocalState{\n    sharingType: String\n    listeners: [Listener!]!\n    triggers: [Trigger!]!\n    availableOffline: Boolean!\n}",
          initialValue: '"{ \\"listeners\\": [], \\"triggers\\": [], \\"sharingType\\": \\"private\\", \\"availableOffline\\": false}"',
          examples: []
        }
      },
      modules: [
        {
          id: "GRzuvv78tBvmB6ciitokLfonNHA=",
          name: "Node",
          description: "",
          operations: [
            {
              id: "7xiTdxonc9yEASR8sfV/KnbSV10=",
              name: "ADD_FILE",
              description: "",
              schema: "input AddFileInput {\n    id: ID!\n    name: String!\n    documentType: String!\n    parentFolder: ID\n    synchronizationUnits: [SynchronizationUnit!]!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global"
            },
            {
              id: "4lzNMMKKdIAtEU6i12xLgi9hp+U=",
              name: "ADD_FOLDER",
              description: "",
              schema: "input AddFolderInput {\n    id: ID!\n    name: String!\n    parentFolder: ID\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global"
            },
            {
              id: "53jH2/3TWTTcgCJiv2C+BmuC6i0=",
              name: "DELETE_NODE",
              description: "",
              schema: "input DeleteNodeInput {\n    id: ID!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global"
            },
            {
              id: "pNn+Y1/HVq/GNMk7t0u3g3gtMLE=",
              name: "UPDATE_FILE",
              description: "",
              schema: "input UpdateFileInput {\n    id: ID!\n    parentFolder: ID\n    name: String\n    documentType: String\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global"
            },
            {
              id: "P0x1M8Mnt+Q/+9nggkwgVbfybsc=",
              name: "UPDATE_NODE",
              description: "",
              schema: "input UpdateNodeInput {\n    id: ID!\n    parentFolder: ID\n    name: String\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global"
            },
            {
              id: "vnQ7OB5b3wGLgjhbgJqAIpA+JLE=",
              name: "COPY_NODE",
              description: "",
              schema: "input CopyNodeInput {\n    srcId: ID!\n    targetId: ID!\n    targetName: String\n    targetParentFolder: ID\n    synchronizationUnits: [SynchronizationUnit!]\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global"
            },
            {
              id: "VNyiD/sNGzk6k9A1Qe7s8dmrJxA=",
              name: "MOVE_NODE",
              description: "",
              schema: "input MoveNodeInput {\n    srcFolder: ID!\n    targetParentFolder: ID\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global"
            }
          ]
        },
        {
          id: "0dHwHlxOM9x0vMZ+gLnKxf2qTEo=",
          name: "Drive",
          description: "",
          operations: [
            {
              id: "qGCiPGpTt/cyz3HzyrBn92z1dsU=",
              name: "SET_DRIVE_NAME",
              description: "",
              schema: "input SetDriveNameInput {\n    name: String!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global"
            },
            {
              id: "qGCiPGpTt/cyz3HzyrBn92z30dsU=",
              name: "SET_DRIVE_ICON",
              description: "",
              schema: "input SetDriveIconInput {\n    icon: String!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "global"
            },
            {
              id: "qGCiPGpTt/cyz3HzyrBn92z2dsU=",
              name: "SET_SHARING_TYPE",
              description: "",
              schema: "input SetSharingTypeInput {\n    type: String!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "local"
            },
            {
              id: "qGCiPGpTt/cyz3HzyrBn92z3dsU=",
              name: "SET_AVAILABLE_OFFLINE",
              description: "",
              schema: "input SetAvailableOfflineInput {\n    availableOffline: Boolean!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "local"
            },
            {
              id: "qGCiPGpTt/cyz3HzyrBn92z9dsU=",
              name: "ADD_LISTENER",
              description: "",
              schema: "input AddListenerInput {\n    listener: Listener!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "local"
            },
            {
              id: "qGCiPGpTt/cyz3HzyrBn92z10dsU=",
              name: "REMOVE_LISTENER",
              description: "",
              schema: "input RemoveListenerInput {\n    listenerId: String!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "local"
            },
            {
              id: "qGCiPGpTt/cyz3HzyrBn92z20dsU=",
              name: "ADD_TRIGGER",
              description: "",
              schema: "input AddTriggerInput {\n    trigger: Trigger!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "local"
            },
            {
              id: "qGCiPGpTt/cyz3HzyrBn92z30dsU=",
              name: "REMOVE_TRIGGER",
              description: "",
              schema: "input RemoveTriggerInput {\n    triggerId: String!\n}",
              template: "",
              reducer: "",
              errors: [],
              examples: [],
              scope: "local"
            }
          ]
        }
      ]
    }
  ]
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/drive-document-model/module.js
var driveDocumentModelModule = {
  reducer: reducer3,
  documentModel: documentModelState,
  actions: { ...creators_exports, ...actions_exports },
  utils: { ...utils_exports2, ...utils_exports }
};

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/devAssert.mjs
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/isObjectLike.mjs
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/invariant.mjs
function invariant(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(
      message != null ? message : "Unexpected invariant triggered."
    );
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/location.mjs
var LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;
  for (const match of source.body.matchAll(LineRegExp)) {
    typeof match.index === "number" || invariant(false);
    if (match.index >= position) {
      break;
    }
    lastLineStart = match.index + match[0].length;
    line += 1;
  }
  return {
    line,
    column: position + 1 - lastLineStart
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/printLocation.mjs
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start)
  );
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }
    return locationStr + printPrefixedLines([
      [`${lineNum} |`, subLines[0]],
      ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
      ["|", "^".padStart(subLineColumnNum)],
      ["|", subLines[subLineIndex + 1]]
    ]);
  }
  return locationStr + printPrefixedLines([
    // Lines specified like this: ["prefix", "string"],
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/error/GraphQLError.mjs
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
var GraphQLError = class _GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;
    const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
    super(message);
    this.name = "GraphQLError";
    this.path = path !== null && path !== void 0 ? path : void 0;
    this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
    );
    this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
    this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
    this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0 ? void 0 : originalError.extensions
    ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
    this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    });
    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(this, "stack", {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _GraphQLError);
    } else {
      Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let output = this.message;
    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += "\n\n" + printSourceLocation(this.source, location);
      }
    }
    return output;
  }
  toJSON() {
    const formattedError = {
      message: this.message
    };
    if (this.locations != null) {
      formattedError.locations = this.locations;
    }
    if (this.path != null) {
      formattedError.path = this.path;
    }
    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }
    return formattedError;
  }
};
function undefinedIfEmpty(array) {
  return array === void 0 || array.length === 0 ? void 0 : array;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/error/syntaxError.mjs
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position]
  });
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/ast.mjs
var Location = class {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
};
var Token = class {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
};
var QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
var kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var OperationTypeNode;
(function(OperationTypeNode2) {
  OperationTypeNode2["QUERY"] = "query";
  OperationTypeNode2["MUTATION"] = "mutation";
  OperationTypeNode2["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/directiveLocation.mjs
var DirectiveLocation;
(function(DirectiveLocation2) {
  DirectiveLocation2["QUERY"] = "QUERY";
  DirectiveLocation2["MUTATION"] = "MUTATION";
  DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
  DirectiveLocation2["FIELD"] = "FIELD";
  DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
  DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
  DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
  DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
  DirectiveLocation2["SCHEMA"] = "SCHEMA";
  DirectiveLocation2["SCALAR"] = "SCALAR";
  DirectiveLocation2["OBJECT"] = "OBJECT";
  DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
  DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
  DirectiveLocation2["INTERFACE"] = "INTERFACE";
  DirectiveLocation2["UNION"] = "UNION";
  DirectiveLocation2["ENUM"] = "ENUM";
  DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
  DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
  DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/kinds.mjs
var Kind;
(function(Kind2) {
  Kind2["NAME"] = "Name";
  Kind2["DOCUMENT"] = "Document";
  Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
  Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
  Kind2["SELECTION_SET"] = "SelectionSet";
  Kind2["FIELD"] = "Field";
  Kind2["ARGUMENT"] = "Argument";
  Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
  Kind2["INLINE_FRAGMENT"] = "InlineFragment";
  Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
  Kind2["VARIABLE"] = "Variable";
  Kind2["INT"] = "IntValue";
  Kind2["FLOAT"] = "FloatValue";
  Kind2["STRING"] = "StringValue";
  Kind2["BOOLEAN"] = "BooleanValue";
  Kind2["NULL"] = "NullValue";
  Kind2["ENUM"] = "EnumValue";
  Kind2["LIST"] = "ListValue";
  Kind2["OBJECT"] = "ObjectValue";
  Kind2["OBJECT_FIELD"] = "ObjectField";
  Kind2["DIRECTIVE"] = "Directive";
  Kind2["NAMED_TYPE"] = "NamedType";
  Kind2["LIST_TYPE"] = "ListType";
  Kind2["NON_NULL_TYPE"] = "NonNullType";
  Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
  Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
  Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
  Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
  Kind2["FIELD_DEFINITION"] = "FieldDefinition";
  Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
  Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
  Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
  Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
  Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
  Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
  Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
  Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
  Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
  Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
  Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
  Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
  Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
  Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(Kind || (Kind = {}));

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/characterClasses.mjs
function isWhiteSpace(code) {
  return code === 9 || code === 32;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isLetter(code) {
  return code >= 97 && code <= 122 || // A-Z
  code >= 65 && code <= 90;
}
function isNameStart(code) {
  return isLetter(code) || code === 95;
}
function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 95;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/blockString.mjs
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i = 0; i < lines.length; ++i) {
    var _firstNonEmptyLine;
    const line = lines[i];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
    lastNonEmptyLine = i;
    if (i !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
    (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
    lastNonEmptyLine + 1
  );
}
function leadingWhitespace(str) {
  let i = 0;
  while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
    ++i;
  }
  return i;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
  (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  let result = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result += "\n";
  }
  result += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result += "\n";
  }
  return '"""' + result + '"""';
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/tokenKind.mjs
var TokenKind;
(function(TokenKind2) {
  TokenKind2["SOF"] = "<SOF>";
  TokenKind2["EOF"] = "<EOF>";
  TokenKind2["BANG"] = "!";
  TokenKind2["DOLLAR"] = "$";
  TokenKind2["AMP"] = "&";
  TokenKind2["PAREN_L"] = "(";
  TokenKind2["PAREN_R"] = ")";
  TokenKind2["SPREAD"] = "...";
  TokenKind2["COLON"] = ":";
  TokenKind2["EQUALS"] = "=";
  TokenKind2["AT"] = "@";
  TokenKind2["BRACKET_L"] = "[";
  TokenKind2["BRACKET_R"] = "]";
  TokenKind2["BRACE_L"] = "{";
  TokenKind2["PIPE"] = "|";
  TokenKind2["BRACE_R"] = "}";
  TokenKind2["NAME"] = "Name";
  TokenKind2["INT"] = "Int";
  TokenKind2["FLOAT"] = "Float";
  TokenKind2["STRING"] = "String";
  TokenKind2["BLOCK_STRING"] = "BlockString";
  TokenKind2["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/lexer.mjs
var Lexer = class {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    this.lastToken = this.token;
    const token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let token = this.token;
    if (token.kind !== TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          const nextToken = readNextToken(this, token.end);
          token.next = nextToken;
          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === TokenKind.COMMENT);
    }
    return token;
  }
};
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code) {
  return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);
  if (code === void 0) {
    return TokenKind.EOF;
  } else if (code >= 32 && code <= 126) {
    const char = String.fromCodePoint(code);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    switch (code) {
      // Ignored ::
      //   - UnicodeBOM
      //   - WhiteSpace
      //   - LineTerminator
      //   - Comment
      //   - Comma
      //
      // UnicodeBOM :: "Byte Order Mark (U+FEFF)"
      //
      // WhiteSpace ::
      //   - "Horizontal Tab (U+0009)"
      //   - "Space (U+0020)"
      //
      // Comma :: ,
      case 65279:
      // <BOM>
      case 9:
      // \t
      case 32:
      // <space>
      case 44:
        ++position;
        continue;
      // LineTerminator ::
      //   - "New Line (U+000A)"
      //   - "Carriage Return (U+000D)" [lookahead != "New Line (U+000A)"]
      //   - "Carriage Return (U+000D)" "New Line (U+000A)"
      case 10:
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 13:
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      // Comment
      case 35:
        return readComment(lexer, position);
      // Token ::
      //   - Punctuator
      //   - Name
      //   - IntValue
      //   - FloatValue
      //   - StringValue
      //
      // Punctuator :: one of ! $ & ( ) ... : = @ [ ] { | }
      case 33:
        return createToken(lexer, TokenKind.BANG, position, position + 1);
      case 36:
        return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
      case 38:
        return createToken(lexer, TokenKind.AMP, position, position + 1);
      case 40:
        return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
      case 41:
        return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
      case 46:
        if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
          return createToken(lexer, TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 58:
        return createToken(lexer, TokenKind.COLON, position, position + 1);
      case 61:
        return createToken(lexer, TokenKind.EQUALS, position, position + 1);
      case 64:
        return createToken(lexer, TokenKind.AT, position, position + 1);
      case 91:
        return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
      case 93:
        return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
      case 123:
        return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
      case 124:
        return createToken(lexer, TokenKind.PIPE, position, position + 1);
      case 125:
        return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
      // StringValue
      case 34:
        if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          return readBlockString(lexer, position);
        }
        return readString(lexer, position);
    }
    if (isDigit(code) || code === 45) {
      return readNumber(lexer, position, code);
    }
    if (isNameStart(code)) {
      return readName(lexer, position);
    }
    throw syntaxError(
      lexer.source,
      position,
      code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`
    );
  }
  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position)
  );
}
function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false;
  if (code === 45) {
    code = body.charCodeAt(++position);
  }
  if (code === 48) {
    code = body.charCodeAt(++position);
    if (isDigit(code)) {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 69 || code === 101) {
    isFloat = true;
    code = body.charCodeAt(++position);
    if (code === 43 || code === 45) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46 || isNameStart(code)) {
    throw syntaxError(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position
      )}.`
    );
  }
  return createToken(
    lexer,
    isFloat ? TokenKind.FLOAT : TokenKind.INT,
    start,
    position,
    body.slice(start, position)
  );
}
function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start
      )}.`
    );
  }
  const body = lexer.source.body;
  let position = start + 1;
  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = "";
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, TokenKind.STRING, start, position + 1, value);
    }
    if (code === 92) {
      value += body.slice(chunkStart, position);
      const escape = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
      value += escape.value;
      position += escape.size;
      chunkStart = position;
      continue;
    }
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3;
  while (size < 12) {
    const code = body.charCodeAt(position + size++);
    if (code === 125) {
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size
      };
    }
    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size
    )}".`
  );
}
function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  }
  if (isLeadingSurrogate(code)) {
    if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
  );
}
function read16BitHexCode(body, position) {
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
function readHexDigit(code) {
  return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
}
function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);
  switch (code) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2
    )}".`
  );
}
function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = "";
  const blockLines = [];
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        TokenKind.BLOCK_STRING,
        start,
        position + 3,
        // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join("\n")
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    }
    if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1;
      position += 4;
      continue;
    }
    if (code === 10 || code === 13) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 13 && body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = "";
      chunkStart = position;
      lineStart = position;
      continue;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.NAME,
    start,
    position,
    body.slice(start, position)
  );
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/inspect.mjs
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object, seenValues) {
  const entries = Object.entries(object);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object) + "]";
  }
  const properties = entries.map(
    ([key, value]) => key + ": " + formatValue(value, seenValues)
  );
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array, seenValues) {
  if (array.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];
  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object) {
  const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object.constructor === "function") {
    const name = object.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/instanceOf.mjs
var isProduction = globalThis.process && // eslint-disable-next-line no-undef
false;
var instanceOf = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  isProduction ? function instanceOf2(value, constructor) {
    return value instanceof constructor;
  } : function instanceOf3(value, constructor) {
    if (value instanceof constructor) {
      return true;
    }
    if (typeof value === "object" && value !== null) {
      var _value$constructor;
      const className = constructor.prototype[Symbol.toStringTag];
      const valueClassName = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name
      );
      if (className === valueClassName) {
        const stringifiedValue = inspect(value);
        throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return false;
  }
);

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/source.mjs
var Source = class {
  constructor(body, name = "GraphQL request", locationOffset = {
    line: 1,
    column: 1
  }) {
    typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(
      false,
      "line in locationOffset is 1-indexed and must be positive."
    );
    this.locationOffset.column > 0 || devAssert(
      false,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
};
function isSource(source) {
  return instanceOf(source, Source);
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/parser.mjs
function parse(source, options) {
  const parser = new Parser(source, options);
  const document = parser.parseDocument();
  Object.defineProperty(document, "tokenCount", {
    enumerable: false,
    value: parser.tokenCount
  });
  return document;
}
var Parser = class {
  constructor(source, options = {}) {
    const sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
    this._tokenCounter = 0;
  }
  get tokenCount() {
    return this._tokenCounter;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const token = this.expectToken(TokenKind.NAME);
    return this.node(token, {
      kind: Kind.NAME,
      value: token.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Kind.DOCUMENT,
      definitions: this.many(
        TokenKind.SOF,
        this.parseDefinition,
        TokenKind.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    }
    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (hasDescription) {
        throw syntaxError(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      }
      switch (keywordToken.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const start = this._lexer.token;
    if (this.peek(TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    }
    const operation = this.parseOperationType();
    let name;
    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }
    return this.node(start, {
      kind: Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const operationToken = this.expectToken(TokenKind.NAME);
    switch (operationToken.value) {
      case "query":
        return OperationTypeNode.QUERY;
      case "mutation":
        return OperationTypeNode.MUTATION;
      case "subscription":
        return OperationTypeNode.SUBSCRIPTION;
    }
    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseVariableDefinition,
      TokenKind.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return this.node(start, {
      kind: Kind.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Kind.SELECTION_SET,
      selections: this.many(
        TokenKind.BRACE_L,
        this.parseSelection,
        TokenKind.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;
    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }
    return this.node(start, {
      kind: Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword("on");
    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return this.node(start, {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false)
      });
    }
    return this.node(start, {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const start = this._lexer.token;
    this.expectKeyword("fragment");
    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    return this.node(start, {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on") {
      throw this.unexpected();
    }
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(isConst) {
    const token = this._lexer.token;
    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);
      case TokenKind.BRACE_L:
        return this.parseObject(isConst);
      case TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.INT,
          value: token.value
        });
      case TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.FLOAT,
          value: token.value
        });
      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();
      case TokenKind.NAME:
        this.advanceLexer();
        switch (token.value) {
          case "true":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: true
            });
          case "false":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: false
            });
          case "null":
            return this.node(token, {
              kind: Kind.NULL
            });
          default:
            return this.node(token, {
              kind: Kind.ENUM,
              value: token.value
            });
        }
      case TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(TokenKind.DOLLAR);
          if (this._lexer.token.kind === TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`
            );
          } else {
            throw this.unexpected(token);
          }
        }
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(isConst) {
    const directives = [];
    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }
    return directives;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return this.node(start, {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const start = this._lexer.token;
    let type;
    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: Kind.LIST_TYPE,
        type: innerType
      });
    } else {
      type = this.parseNamedType();
    }
    if (this.expectOptionalToken(TokenKind.BANG)) {
      return this.node(start, {
        kind: Kind.NON_NULL_TYPE,
        type
      });
    }
    return type;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Kind.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    return this.node(start, {
      kind: Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseFieldDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseInputValueDef,
      TokenKind.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;
    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
      throw syntaxError(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    }
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseInputValueDef,
      TokenKind.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    if (directives.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types = this.parseUnionMemberTypes();
    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("directive");
    this.expectToken(TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();
    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }
    throw this.unexpected(start);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new Location(
        startToken,
        this._lexer.lastToken,
        this._lexer.source
      );
    }
    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }
    throw syntaxError(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw syntaxError(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(atToken) {
    const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }
    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));
    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));
    return nodes;
  }
  advanceLexer() {
    const { maxTokens } = this._options;
    const token = this._lexer.advance();
    if (token.kind !== TokenKind.EOF) {
      ++this._tokenCounter;
      if (maxTokens !== void 0 && this._tokenCounter > maxTokens) {
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Document contains more that ${maxTokens} tokens. Parsing aborted.`
        );
      }
    }
  }
};
function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/didYouMean.mjs
var MAX_SUGGESTIONS = 5;
function didYouMean(firstArg, secondArg) {
  const [subMessage, suggestionsArg] = secondArg ? [firstArg, secondArg] : [void 0, firstArg];
  let message = " Did you mean ";
  if (subMessage) {
    message += subMessage + " ";
  }
  const suggestions = suggestionsArg.map((x) => `"${x}"`);
  switch (suggestions.length) {
    case 0:
      return "";
    case 1:
      return message + suggestions[0] + "?";
    case 2:
      return message + suggestions[0] + " or " + suggestions[1] + "?";
  }
  const selected = suggestions.slice(0, MAX_SUGGESTIONS);
  const lastItem = selected.pop();
  return message + selected.join(", ") + ", or " + lastItem + "?";
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/identityFunc.mjs
function identityFunc(x) {
  return x;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/keyMap.mjs
function keyMap(list, keyFn) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const item of list) {
    result[keyFn(item)] = item;
  }
  return result;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/keyValMap.mjs
function keyValMap(list, keyFn, valFn) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const item of list) {
    result[keyFn(item)] = valFn(item);
  }
  return result;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/mapValue.mjs
function mapValue(map, fn) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const key of Object.keys(map)) {
    result[key] = fn(map[key], key);
  }
  return result;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/naturalCompare.mjs
function naturalCompare(aStr, bStr) {
  let aIndex = 0;
  let bIndex = 0;
  while (aIndex < aStr.length && bIndex < bStr.length) {
    let aChar = aStr.charCodeAt(aIndex);
    let bChar = bStr.charCodeAt(bIndex);
    if (isDigit2(aChar) && isDigit2(bChar)) {
      let aNum = 0;
      do {
        ++aIndex;
        aNum = aNum * 10 + aChar - DIGIT_0;
        aChar = aStr.charCodeAt(aIndex);
      } while (isDigit2(aChar) && aNum > 0);
      let bNum = 0;
      do {
        ++bIndex;
        bNum = bNum * 10 + bChar - DIGIT_0;
        bChar = bStr.charCodeAt(bIndex);
      } while (isDigit2(bChar) && bNum > 0);
      if (aNum < bNum) {
        return -1;
      }
      if (aNum > bNum) {
        return 1;
      }
    } else {
      if (aChar < bChar) {
        return -1;
      }
      if (aChar > bChar) {
        return 1;
      }
      ++aIndex;
      ++bIndex;
    }
  }
  return aStr.length - bStr.length;
}
var DIGIT_0 = 48;
var DIGIT_9 = 57;
function isDigit2(code) {
  return !isNaN(code) && DIGIT_0 <= code && code <= DIGIT_9;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/suggestionList.mjs
function suggestionList(input, options) {
  const optionsByDistance = /* @__PURE__ */ Object.create(null);
  const lexicalDistance = new LexicalDistance(input);
  const threshold = Math.floor(input.length * 0.4) + 1;
  for (const option of options) {
    const distance = lexicalDistance.measure(option, threshold);
    if (distance !== void 0) {
      optionsByDistance[option] = distance;
    }
  }
  return Object.keys(optionsByDistance).sort((a, b) => {
    const distanceDiff = optionsByDistance[a] - optionsByDistance[b];
    return distanceDiff !== 0 ? distanceDiff : naturalCompare(a, b);
  });
}
var LexicalDistance = class {
  constructor(input) {
    this._input = input;
    this._inputLowerCase = input.toLowerCase();
    this._inputArray = stringToArray(this._inputLowerCase);
    this._rows = [
      new Array(input.length + 1).fill(0),
      new Array(input.length + 1).fill(0),
      new Array(input.length + 1).fill(0)
    ];
  }
  measure(option, threshold) {
    if (this._input === option) {
      return 0;
    }
    const optionLowerCase = option.toLowerCase();
    if (this._inputLowerCase === optionLowerCase) {
      return 1;
    }
    let a = stringToArray(optionLowerCase);
    let b = this._inputArray;
    if (a.length < b.length) {
      const tmp = a;
      a = b;
      b = tmp;
    }
    const aLength = a.length;
    const bLength = b.length;
    if (aLength - bLength > threshold) {
      return void 0;
    }
    const rows = this._rows;
    for (let j = 0; j <= bLength; j++) {
      rows[0][j] = j;
    }
    for (let i = 1; i <= aLength; i++) {
      const upRow = rows[(i - 1) % 3];
      const currentRow = rows[i % 3];
      let smallestCell = currentRow[0] = i;
      for (let j = 1; j <= bLength; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        let currentCell = Math.min(
          upRow[j] + 1,
          // delete
          currentRow[j - 1] + 1,
          // insert
          upRow[j - 1] + cost
          // substitute
        );
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          const doubleDiagonalCell = rows[(i - 2) % 3][j - 2];
          currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
        }
        if (currentCell < smallestCell) {
          smallestCell = currentCell;
        }
        currentRow[j] = currentCell;
      }
      if (smallestCell > threshold) {
        return void 0;
      }
    }
    const distance = rows[aLength % 3][bLength];
    return distance <= threshold ? distance : void 0;
  }
};
function stringToArray(str) {
  const strLength = str.length;
  const array = new Array(strLength);
  for (let i = 0; i < strLength; ++i) {
    array[i] = str.charCodeAt(i);
  }
  return array;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/toObjMap.mjs
function toObjMap(obj) {
  if (obj == null) {
    return /* @__PURE__ */ Object.create(null);
  }
  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }
  const map = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of Object.entries(obj)) {
    map[key] = value;
  }
  return map;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/printString.mjs
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
var escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
var escapeSequences = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
];

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/visitor.mjs
var BREAK = Object.freeze({});
function visit(root, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let edits = [];
  let node = root;
  let key = void 0;
  let parent = void 0;
  const path = [];
  const ancestors = [];
  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(node)
          );
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
      if (result === BREAK) {
        break;
      }
      if (result === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== void 0) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (isNode(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root;
}
function visitInParallel(visitors) {
  const skipping = new Array(visitors.length).fill(null);
  const mergedVisitor = /* @__PURE__ */ Object.create(null);
  for (const kind of Object.values(Kind)) {
    let hasVisitor = false;
    const enterList = new Array(visitors.length).fill(void 0);
    const leaveList = new Array(visitors.length).fill(void 0);
    for (let i = 0; i < visitors.length; ++i) {
      const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
      hasVisitor || (hasVisitor = enter != null || leave != null);
      enterList[i] = enter;
      leaveList[i] = leave;
    }
    if (!hasVisitor) {
      continue;
    }
    const mergedEnterLeave = {
      enter(...args) {
        const node = args[0];
        for (let i = 0; i < visitors.length; i++) {
          if (skipping[i] === null) {
            var _enterList$i;
            const result = (_enterList$i = enterList[i]) === null || _enterList$i === void 0 ? void 0 : _enterList$i.apply(visitors[i], args);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== void 0) {
              return result;
            }
          }
        }
      },
      leave(...args) {
        const node = args[0];
        for (let i = 0; i < visitors.length; i++) {
          if (skipping[i] === null) {
            var _leaveList$i;
            const result = (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0 ? void 0 : _leaveList$i.apply(visitors[i], args);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== void 0 && result !== false) {
              return result;
            }
          } else if (skipping[i] === node) {
            skipping[i] = null;
          }
        }
      }
    };
    mergedVisitor[kind] = mergedEnterLeave;
  }
  return mergedVisitor;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/printer.mjs
function print(ast) {
  return visit(ast, printDocASTReducer);
}
var MAX_LINE_LENGTH = 80;
var printDocASTReducer = {
  Name: {
    leave: (node) => node.value
  },
  Variable: {
    leave: (node) => "$" + node.name
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, "\n\n")
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap("(", join(node.variableDefinitions, ", "), ")");
      const prefix = join(
        [
          node.operation,
          join([node.name, varDefs]),
          join(node.directives, " ")
        ],
        " "
      );
      return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap(" = ", defaultValue) + wrap(" ", join(directives, " "))
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections)
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap("", alias, ": ") + name;
      let argsLine = prefix + wrap("(", join(args, ", "), ")");
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap("(\n", indent(join(args, "\n")), "\n)");
      }
      return join([argsLine, join(directives, " "), selectionSet], " ");
    }
  },
  Argument: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) => "..." + name + wrap(" ", join(directives, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) => join(
      [
        "...",
        wrap("on ", typeCondition),
        join(directives, " "),
        selectionSet
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => (
      // or removed in the future.
      `fragment ${name}${wrap("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap("", join(directives, " "), " ")}` + selectionSet
    )
  },
  // Value
  IntValue: {
    leave: ({ value }) => value
  },
  FloatValue: {
    leave: ({ value }) => value
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
  },
  BooleanValue: {
    leave: ({ value }) => value ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value }) => value
  },
  ListValue: {
    leave: ({ values }) => "[" + join(values, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields }) => "{" + join(fields, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) => "@" + name + wrap("(", join(args, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name }) => name
  },
  ListType: {
    leave: ({ type }) => "[" + type + "]"
  },
  NonNullType: {
    leave: ({ type }) => type + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) => wrap("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ": " + type
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) => wrap("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
      [
        "type",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) => wrap("", description, "\n") + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + ": " + type + wrap(" ", join(directives, " "))
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) => wrap("", description, "\n") + join(
      [name + ": " + type, wrap("= ", defaultValue), join(directives, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap("", description, "\n") + join(
      [
        "interface",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types }) => wrap("", description, "\n") + join(
      ["union", name, join(directives, " "), wrap("= ", join(types, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) => wrap("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) => wrap("", description, "\n") + join([name, join(directives, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) => wrap("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) => wrap("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap("(\n", indent(join(args, "\n")), "\n)") : wrap("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) => join(
      ["extend schema", join(directives, " "), block(operationTypes)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend type",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend interface",
        name,
        wrap("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) => join(
      [
        "extend union",
        name,
        join(directives, " "),
        wrap("= ", join(types, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
  }
};
function join(maybeArray, separator = "") {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x) => x).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array) {
  return wrap("{\n", indent(join(array, "\n")), "\n}");
}
function wrap(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/utilities/valueFromASTUntyped.mjs
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case Kind.NULL:
      return null;
    case Kind.INT:
      return parseInt(valueNode.value, 10);
    case Kind.FLOAT:
      return parseFloat(valueNode.value);
    case Kind.STRING:
    case Kind.ENUM:
    case Kind.BOOLEAN:
      return valueNode.value;
    case Kind.LIST:
      return valueNode.values.map(
        (node) => valueFromASTUntyped(node, variables)
      );
    case Kind.OBJECT:
      return keyValMap(
        valueNode.fields,
        (field) => field.name.value,
        (field) => valueFromASTUntyped(field.value, variables)
      );
    case Kind.VARIABLE:
      return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/type/assertName.mjs
function assertName(name) {
  name != null || devAssert(false, "Must provide name.");
  typeof name === "string" || devAssert(false, "Expected name to be a string.");
  if (name.length === 0) {
    throw new GraphQLError("Expected name to be a non-empty string.");
  }
  for (let i = 1; i < name.length; ++i) {
    if (!isNameContinue(name.charCodeAt(i))) {
      throw new GraphQLError(
        `Names must only contain [_a-zA-Z0-9] but "${name}" does not.`
      );
    }
  }
  if (!isNameStart(name.charCodeAt(0))) {
    throw new GraphQLError(
      `Names must start with [_a-zA-Z] but "${name}" does not.`
    );
  }
  return name;
}
function assertEnumValueName(name) {
  if (name === "true" || name === "false" || name === "null") {
    throw new GraphQLError(`Enum values cannot be named: ${name}`);
  }
  return assertName(name);
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/type/definition.mjs
function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}
function isScalarType(type) {
  return instanceOf(type, GraphQLScalarType);
}
function isObjectType(type) {
  return instanceOf(type, GraphQLObjectType);
}
function isInterfaceType(type) {
  return instanceOf(type, GraphQLInterfaceType);
}
function isUnionType(type) {
  return instanceOf(type, GraphQLUnionType);
}
function isEnumType(type) {
  return instanceOf(type, GraphQLEnumType);
}
function isInputObjectType(type) {
  return instanceOf(type, GraphQLInputObjectType);
}
function isListType(type) {
  return instanceOf(type, GraphQLList);
}
function isNonNullType(type) {
  return instanceOf(type, GraphQLNonNull);
}
function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}
function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}
function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}
function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}
var GraphQLList = class {
  constructor(ofType) {
    isType(ofType) || devAssert(false, `Expected ${inspect(ofType)} to be a GraphQL type.`);
    this.ofType = ofType;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLList";
  }
  toString() {
    return "[" + String(this.ofType) + "]";
  }
  toJSON() {
    return this.toString();
  }
};
var GraphQLNonNull = class {
  constructor(ofType) {
    isNullableType(ofType) || devAssert(
      false,
      `Expected ${inspect(ofType)} to be a GraphQL nullable type.`
    );
    this.ofType = ofType;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLNonNull";
  }
  toString() {
    return String(this.ofType) + "!";
  }
  toJSON() {
    return this.toString();
  }
};
function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}
function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}
function getNullableType(type) {
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}
function getNamedType(type) {
  if (type) {
    let unwrappedType = type;
    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }
    return unwrappedType;
  }
}
function resolveReadonlyArrayThunk(thunk) {
  return typeof thunk === "function" ? thunk() : thunk;
}
function resolveObjMapThunk(thunk) {
  return typeof thunk === "function" ? thunk() : thunk;
}
var GraphQLScalarType = class {
  constructor(config) {
    var _config$parseValue, _config$serialize, _config$parseLiteral, _config$extensionASTN;
    const parseValue2 = (_config$parseValue = config.parseValue) !== null && _config$parseValue !== void 0 ? _config$parseValue : identityFunc;
    this.name = assertName(config.name);
    this.description = config.description;
    this.specifiedByURL = config.specifiedByURL;
    this.serialize = (_config$serialize = config.serialize) !== null && _config$serialize !== void 0 ? _config$serialize : identityFunc;
    this.parseValue = parseValue2;
    this.parseLiteral = (_config$parseLiteral = config.parseLiteral) !== null && _config$parseLiteral !== void 0 ? _config$parseLiteral : (node, variables) => parseValue2(valueFromASTUntyped(node, variables));
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
    config.specifiedByURL == null || typeof config.specifiedByURL === "string" || devAssert(
      false,
      `${this.name} must provide "specifiedByURL" as a string, but got: ${inspect(config.specifiedByURL)}.`
    );
    config.serialize == null || typeof config.serialize === "function" || devAssert(
      false,
      `${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`
    );
    if (config.parseLiteral) {
      typeof config.parseValue === "function" && typeof config.parseLiteral === "function" || devAssert(
        false,
        `${this.name} must provide both "parseValue" and "parseLiteral" functions.`
      );
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLScalarType";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      specifiedByURL: this.specifiedByURL,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
};
var GraphQLObjectType = class {
  constructor(config) {
    var _config$extensionASTN2;
    this.name = assertName(config.name);
    this.description = config.description;
    this.isTypeOf = config.isTypeOf;
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN2 = config.extensionASTNodes) !== null && _config$extensionASTN2 !== void 0 ? _config$extensionASTN2 : [];
    this._fields = () => defineFieldMap(config);
    this._interfaces = () => defineInterfaces(config);
    config.isTypeOf == null || typeof config.isTypeOf === "function" || devAssert(
      false,
      `${this.name} must provide "isTypeOf" as a function, but got: ${inspect(config.isTypeOf)}.`
    );
  }
  get [Symbol.toStringTag]() {
    return "GraphQLObjectType";
  }
  getFields() {
    if (typeof this._fields === "function") {
      this._fields = this._fields();
    }
    return this._fields;
  }
  getInterfaces() {
    if (typeof this._interfaces === "function") {
      this._interfaces = this._interfaces();
    }
    return this._interfaces;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      isTypeOf: this.isTypeOf,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
};
function defineInterfaces(config) {
  var _config$interfaces;
  const interfaces = resolveReadonlyArrayThunk(
    (_config$interfaces = config.interfaces) !== null && _config$interfaces !== void 0 ? _config$interfaces : []
  );
  Array.isArray(interfaces) || devAssert(
    false,
    `${config.name} interfaces must be an Array or a function which returns an Array.`
  );
  return interfaces;
}
function defineFieldMap(config) {
  const fieldMap = resolveObjMapThunk(config.fields);
  isPlainObj(fieldMap) || devAssert(
    false,
    `${config.name} fields must be an object with field names as keys or a function which returns such an object.`
  );
  return mapValue(fieldMap, (fieldConfig, fieldName) => {
    var _fieldConfig$args;
    isPlainObj(fieldConfig) || devAssert(
      false,
      `${config.name}.${fieldName} field config must be an object.`
    );
    fieldConfig.resolve == null || typeof fieldConfig.resolve === "function" || devAssert(
      false,
      `${config.name}.${fieldName} field resolver must be a function if provided, but got: ${inspect(fieldConfig.resolve)}.`
    );
    const argsConfig = (_fieldConfig$args = fieldConfig.args) !== null && _fieldConfig$args !== void 0 ? _fieldConfig$args : {};
    isPlainObj(argsConfig) || devAssert(
      false,
      `${config.name}.${fieldName} args must be an object with argument names as keys.`
    );
    return {
      name: assertName(fieldName),
      description: fieldConfig.description,
      type: fieldConfig.type,
      args: defineArguments(argsConfig),
      resolve: fieldConfig.resolve,
      subscribe: fieldConfig.subscribe,
      deprecationReason: fieldConfig.deprecationReason,
      extensions: toObjMap(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    };
  });
}
function defineArguments(config) {
  return Object.entries(config).map(([argName, argConfig]) => ({
    name: assertName(argName),
    description: argConfig.description,
    type: argConfig.type,
    defaultValue: argConfig.defaultValue,
    deprecationReason: argConfig.deprecationReason,
    extensions: toObjMap(argConfig.extensions),
    astNode: argConfig.astNode
  }));
}
function isPlainObj(obj) {
  return isObjectLike(obj) && !Array.isArray(obj);
}
function fieldsToFieldsConfig(fields) {
  return mapValue(fields, (field) => ({
    description: field.description,
    type: field.type,
    args: argsToArgsConfig(field.args),
    resolve: field.resolve,
    subscribe: field.subscribe,
    deprecationReason: field.deprecationReason,
    extensions: field.extensions,
    astNode: field.astNode
  }));
}
function argsToArgsConfig(args) {
  return keyValMap(
    args,
    (arg) => arg.name,
    (arg) => ({
      description: arg.description,
      type: arg.type,
      defaultValue: arg.defaultValue,
      deprecationReason: arg.deprecationReason,
      extensions: arg.extensions,
      astNode: arg.astNode
    })
  );
}
function isRequiredArgument(arg) {
  return isNonNullType(arg.type) && arg.defaultValue === void 0;
}
var GraphQLInterfaceType = class {
  constructor(config) {
    var _config$extensionASTN3;
    this.name = assertName(config.name);
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN3 = config.extensionASTNodes) !== null && _config$extensionASTN3 !== void 0 ? _config$extensionASTN3 : [];
    this._fields = defineFieldMap.bind(void 0, config);
    this._interfaces = defineInterfaces.bind(void 0, config);
    config.resolveType == null || typeof config.resolveType === "function" || devAssert(
      false,
      `${this.name} must provide "resolveType" as a function, but got: ${inspect(config.resolveType)}.`
    );
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInterfaceType";
  }
  getFields() {
    if (typeof this._fields === "function") {
      this._fields = this._fields();
    }
    return this._fields;
  }
  getInterfaces() {
    if (typeof this._interfaces === "function") {
      this._interfaces = this._interfaces();
    }
    return this._interfaces;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
};
var GraphQLUnionType = class {
  constructor(config) {
    var _config$extensionASTN4;
    this.name = assertName(config.name);
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN4 = config.extensionASTNodes) !== null && _config$extensionASTN4 !== void 0 ? _config$extensionASTN4 : [];
    this._types = defineTypes.bind(void 0, config);
    config.resolveType == null || typeof config.resolveType === "function" || devAssert(
      false,
      `${this.name} must provide "resolveType" as a function, but got: ${inspect(config.resolveType)}.`
    );
  }
  get [Symbol.toStringTag]() {
    return "GraphQLUnionType";
  }
  getTypes() {
    if (typeof this._types === "function") {
      this._types = this._types();
    }
    return this._types;
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      types: this.getTypes(),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
};
function defineTypes(config) {
  const types = resolveReadonlyArrayThunk(config.types);
  Array.isArray(types) || devAssert(
    false,
    `Must provide Array of types or a function which returns such an array for Union ${config.name}.`
  );
  return types;
}
var GraphQLEnumType = class {
  /* <T> */
  constructor(config) {
    var _config$extensionASTN5;
    this.name = assertName(config.name);
    this.description = config.description;
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN5 = config.extensionASTNodes) !== null && _config$extensionASTN5 !== void 0 ? _config$extensionASTN5 : [];
    this._values = typeof config.values === "function" ? config.values : defineEnumValues(this.name, config.values);
    this._valueLookup = null;
    this._nameLookup = null;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLEnumType";
  }
  getValues() {
    if (typeof this._values === "function") {
      this._values = defineEnumValues(this.name, this._values());
    }
    return this._values;
  }
  getValue(name) {
    if (this._nameLookup === null) {
      this._nameLookup = keyMap(this.getValues(), (value) => value.name);
    }
    return this._nameLookup[name];
  }
  serialize(outputValue) {
    if (this._valueLookup === null) {
      this._valueLookup = new Map(
        this.getValues().map((enumValue2) => [enumValue2.value, enumValue2])
      );
    }
    const enumValue = this._valueLookup.get(outputValue);
    if (enumValue === void 0) {
      throw new GraphQLError(
        `Enum "${this.name}" cannot represent value: ${inspect(outputValue)}`
      );
    }
    return enumValue.name;
  }
  parseValue(inputValue) {
    if (typeof inputValue !== "string") {
      const valueStr = inspect(inputValue);
      throw new GraphQLError(
        `Enum "${this.name}" cannot represent non-string value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr)
      );
    }
    const enumValue = this.getValue(inputValue);
    if (enumValue == null) {
      throw new GraphQLError(
        `Value "${inputValue}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, inputValue)
      );
    }
    return enumValue.value;
  }
  parseLiteral(valueNode, _variables) {
    if (valueNode.kind !== Kind.ENUM) {
      const valueStr = print(valueNode);
      throw new GraphQLError(
        `Enum "${this.name}" cannot represent non-enum value: ${valueStr}.` + didYouMeanEnumValue(this, valueStr),
        {
          nodes: valueNode
        }
      );
    }
    const enumValue = this.getValue(valueNode.value);
    if (enumValue == null) {
      const valueStr = print(valueNode);
      throw new GraphQLError(
        `Value "${valueStr}" does not exist in "${this.name}" enum.` + didYouMeanEnumValue(this, valueStr),
        {
          nodes: valueNode
        }
      );
    }
    return enumValue.value;
  }
  toConfig() {
    const values = keyValMap(
      this.getValues(),
      (value) => value.name,
      (value) => ({
        description: value.description,
        value: value.value,
        deprecationReason: value.deprecationReason,
        extensions: value.extensions,
        astNode: value.astNode
      })
    );
    return {
      name: this.name,
      description: this.description,
      values,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
};
function didYouMeanEnumValue(enumType, unknownValueStr) {
  const allNames = enumType.getValues().map((value) => value.name);
  const suggestedValues = suggestionList(unknownValueStr, allNames);
  return didYouMean("the enum value", suggestedValues);
}
function defineEnumValues(typeName, valueMap) {
  isPlainObj(valueMap) || devAssert(
    false,
    `${typeName} values must be an object with value names as keys.`
  );
  return Object.entries(valueMap).map(([valueName, valueConfig]) => {
    isPlainObj(valueConfig) || devAssert(
      false,
      `${typeName}.${valueName} must refer to an object with a "value" key representing an internal value but got: ${inspect(valueConfig)}.`
    );
    return {
      name: assertEnumValueName(valueName),
      description: valueConfig.description,
      value: valueConfig.value !== void 0 ? valueConfig.value : valueName,
      deprecationReason: valueConfig.deprecationReason,
      extensions: toObjMap(valueConfig.extensions),
      astNode: valueConfig.astNode
    };
  });
}
var GraphQLInputObjectType = class {
  constructor(config) {
    var _config$extensionASTN6, _config$isOneOf;
    this.name = assertName(config.name);
    this.description = config.description;
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN6 = config.extensionASTNodes) !== null && _config$extensionASTN6 !== void 0 ? _config$extensionASTN6 : [];
    this.isOneOf = (_config$isOneOf = config.isOneOf) !== null && _config$isOneOf !== void 0 ? _config$isOneOf : false;
    this._fields = defineInputFieldMap.bind(void 0, config);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLInputObjectType";
  }
  getFields() {
    if (typeof this._fields === "function") {
      this._fields = this._fields();
    }
    return this._fields;
  }
  toConfig() {
    const fields = mapValue(this.getFields(), (field) => ({
      description: field.description,
      type: field.type,
      defaultValue: field.defaultValue,
      deprecationReason: field.deprecationReason,
      extensions: field.extensions,
      astNode: field.astNode
    }));
    return {
      name: this.name,
      description: this.description,
      fields,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes,
      isOneOf: this.isOneOf
    };
  }
  toString() {
    return this.name;
  }
  toJSON() {
    return this.toString();
  }
};
function defineInputFieldMap(config) {
  const fieldMap = resolveObjMapThunk(config.fields);
  isPlainObj(fieldMap) || devAssert(
    false,
    `${config.name} fields must be an object with field names as keys or a function which returns such an object.`
  );
  return mapValue(fieldMap, (fieldConfig, fieldName) => {
    !("resolve" in fieldConfig) || devAssert(
      false,
      `${config.name}.${fieldName} field has a resolve property, but Input Types cannot define resolvers.`
    );
    return {
      name: assertName(fieldName),
      description: fieldConfig.description,
      type: fieldConfig.type,
      defaultValue: fieldConfig.defaultValue,
      deprecationReason: fieldConfig.deprecationReason,
      extensions: toObjMap(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    };
  });
}
function isRequiredInputField(field) {
  return isNonNullType(field.type) && field.defaultValue === void 0;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/utilities/typeComparators.mjs
function isTypeSubTypeOf(schema, maybeSubType, superType) {
  if (maybeSubType === superType) {
    return true;
  }
  if (isNonNullType(superType)) {
    if (isNonNullType(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  }
  if (isNonNullType(maybeSubType)) {
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  }
  if (isListType(superType)) {
    if (isListType(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }
    return false;
  }
  if (isListType(maybeSubType)) {
    return false;
  }
  return isAbstractType(superType) && (isInterfaceType(maybeSubType) || isObjectType(maybeSubType)) && schema.isSubType(superType, maybeSubType);
}
function doTypesOverlap(schema, typeA, typeB) {
  if (typeA === typeB) {
    return true;
  }
  if (isAbstractType(typeA)) {
    if (isAbstractType(typeB)) {
      return schema.getPossibleTypes(typeA).some((type) => schema.isSubType(typeB, type));
    }
    return schema.isSubType(typeA, typeB);
  }
  if (isAbstractType(typeB)) {
    return schema.isSubType(typeB, typeA);
  }
  return false;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/type/scalars.mjs
var GRAPHQL_MAX_INT = 2147483647;
var GRAPHQL_MIN_INT = -2147483648;
var GraphQLInt = new GraphQLScalarType({
  name: "Int",
  description: "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",
  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === "boolean") {
      return coercedValue ? 1 : 0;
    }
    let num = coercedValue;
    if (typeof coercedValue === "string" && coercedValue !== "") {
      num = Number(coercedValue);
    }
    if (typeof num !== "number" || !Number.isInteger(num)) {
      throw new GraphQLError(
        `Int cannot represent non-integer value: ${inspect(coercedValue)}`
      );
    }
    if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
      throw new GraphQLError(
        "Int cannot represent non 32-bit signed integer value: " + inspect(coercedValue)
      );
    }
    return num;
  },
  parseValue(inputValue) {
    if (typeof inputValue !== "number" || !Number.isInteger(inputValue)) {
      throw new GraphQLError(
        `Int cannot represent non-integer value: ${inspect(inputValue)}`
      );
    }
    if (inputValue > GRAPHQL_MAX_INT || inputValue < GRAPHQL_MIN_INT) {
      throw new GraphQLError(
        `Int cannot represent non 32-bit signed integer value: ${inputValue}`
      );
    }
    return inputValue;
  },
  parseLiteral(valueNode) {
    if (valueNode.kind !== Kind.INT) {
      throw new GraphQLError(
        `Int cannot represent non-integer value: ${print(valueNode)}`,
        {
          nodes: valueNode
        }
      );
    }
    const num = parseInt(valueNode.value, 10);
    if (num > GRAPHQL_MAX_INT || num < GRAPHQL_MIN_INT) {
      throw new GraphQLError(
        `Int cannot represent non 32-bit signed integer value: ${valueNode.value}`,
        {
          nodes: valueNode
        }
      );
    }
    return num;
  }
});
var GraphQLFloat = new GraphQLScalarType({
  name: "Float",
  description: "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",
  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === "boolean") {
      return coercedValue ? 1 : 0;
    }
    let num = coercedValue;
    if (typeof coercedValue === "string" && coercedValue !== "") {
      num = Number(coercedValue);
    }
    if (typeof num !== "number" || !Number.isFinite(num)) {
      throw new GraphQLError(
        `Float cannot represent non numeric value: ${inspect(coercedValue)}`
      );
    }
    return num;
  },
  parseValue(inputValue) {
    if (typeof inputValue !== "number" || !Number.isFinite(inputValue)) {
      throw new GraphQLError(
        `Float cannot represent non numeric value: ${inspect(inputValue)}`
      );
    }
    return inputValue;
  },
  parseLiteral(valueNode) {
    if (valueNode.kind !== Kind.FLOAT && valueNode.kind !== Kind.INT) {
      throw new GraphQLError(
        `Float cannot represent non numeric value: ${print(valueNode)}`,
        valueNode
      );
    }
    return parseFloat(valueNode.value);
  }
});
var GraphQLString = new GraphQLScalarType({
  name: "String",
  description: "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === "string") {
      return coercedValue;
    }
    if (typeof coercedValue === "boolean") {
      return coercedValue ? "true" : "false";
    }
    if (typeof coercedValue === "number" && Number.isFinite(coercedValue)) {
      return coercedValue.toString();
    }
    throw new GraphQLError(
      `String cannot represent value: ${inspect(outputValue)}`
    );
  },
  parseValue(inputValue) {
    if (typeof inputValue !== "string") {
      throw new GraphQLError(
        `String cannot represent a non string value: ${inspect(inputValue)}`
      );
    }
    return inputValue;
  },
  parseLiteral(valueNode) {
    if (valueNode.kind !== Kind.STRING) {
      throw new GraphQLError(
        `String cannot represent a non string value: ${print(valueNode)}`,
        {
          nodes: valueNode
        }
      );
    }
    return valueNode.value;
  }
});
var GraphQLBoolean = new GraphQLScalarType({
  name: "Boolean",
  description: "The `Boolean` scalar type represents `true` or `false`.",
  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === "boolean") {
      return coercedValue;
    }
    if (Number.isFinite(coercedValue)) {
      return coercedValue !== 0;
    }
    throw new GraphQLError(
      `Boolean cannot represent a non boolean value: ${inspect(coercedValue)}`
    );
  },
  parseValue(inputValue) {
    if (typeof inputValue !== "boolean") {
      throw new GraphQLError(
        `Boolean cannot represent a non boolean value: ${inspect(inputValue)}`
      );
    }
    return inputValue;
  },
  parseLiteral(valueNode) {
    if (valueNode.kind !== Kind.BOOLEAN) {
      throw new GraphQLError(
        `Boolean cannot represent a non boolean value: ${print(valueNode)}`,
        {
          nodes: valueNode
        }
      );
    }
    return valueNode.value;
  }
});
var GraphQLID = new GraphQLScalarType({
  name: "ID",
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize(outputValue) {
    const coercedValue = serializeObject(outputValue);
    if (typeof coercedValue === "string") {
      return coercedValue;
    }
    if (Number.isInteger(coercedValue)) {
      return String(coercedValue);
    }
    throw new GraphQLError(
      `ID cannot represent value: ${inspect(outputValue)}`
    );
  },
  parseValue(inputValue) {
    if (typeof inputValue === "string") {
      return inputValue;
    }
    if (typeof inputValue === "number" && Number.isInteger(inputValue)) {
      return inputValue.toString();
    }
    throw new GraphQLError(`ID cannot represent value: ${inspect(inputValue)}`);
  },
  parseLiteral(valueNode) {
    if (valueNode.kind !== Kind.STRING && valueNode.kind !== Kind.INT) {
      throw new GraphQLError(
        "ID cannot represent a non-string and non-integer value: " + print(valueNode),
        {
          nodes: valueNode
        }
      );
    }
    return valueNode.value;
  }
});
var specifiedScalarTypes = Object.freeze([
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLID
]);
function isSpecifiedScalarType(type) {
  return specifiedScalarTypes.some(({ name }) => type.name === name);
}
function serializeObject(outputValue) {
  if (isObjectLike(outputValue)) {
    if (typeof outputValue.valueOf === "function") {
      const valueOfResult = outputValue.valueOf();
      if (!isObjectLike(valueOfResult)) {
        return valueOfResult;
      }
    }
    if (typeof outputValue.toJSON === "function") {
      return outputValue.toJSON();
    }
  }
  return outputValue;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/type/directives.mjs
function isDirective(directive) {
  return instanceOf(directive, GraphQLDirective);
}
var GraphQLDirective = class {
  constructor(config) {
    var _config$isRepeatable, _config$args;
    this.name = assertName(config.name);
    this.description = config.description;
    this.locations = config.locations;
    this.isRepeatable = (_config$isRepeatable = config.isRepeatable) !== null && _config$isRepeatable !== void 0 ? _config$isRepeatable : false;
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    Array.isArray(config.locations) || devAssert(false, `@${config.name} locations must be an Array.`);
    const args = (_config$args = config.args) !== null && _config$args !== void 0 ? _config$args : {};
    isObjectLike(args) && !Array.isArray(args) || devAssert(
      false,
      `@${config.name} args must be an object with argument names as keys.`
    );
    this.args = defineArguments(args);
  }
  get [Symbol.toStringTag]() {
    return "GraphQLDirective";
  }
  toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: argsToArgsConfig(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode
    };
  }
  toString() {
    return "@" + this.name;
  }
  toJSON() {
    return this.toString();
  }
};
var GraphQLIncludeDirective = new GraphQLDirective({
  name: "include",
  description: "Directs the executor to include this field or fragment only when the `if` argument is true.",
  locations: [
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "Included when true."
    }
  }
});
var GraphQLSkipDirective = new GraphQLDirective({
  name: "skip",
  description: "Directs the executor to skip this field or fragment when the `if` argument is true.",
  locations: [
    DirectiveLocation.FIELD,
    DirectiveLocation.FRAGMENT_SPREAD,
    DirectiveLocation.INLINE_FRAGMENT
  ],
  args: {
    if: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: "Skipped when true."
    }
  }
});
var DEFAULT_DEPRECATION_REASON = "No longer supported";
var GraphQLDeprecatedDirective = new GraphQLDirective({
  name: "deprecated",
  description: "Marks an element of a GraphQL schema as no longer supported.",
  locations: [
    DirectiveLocation.FIELD_DEFINITION,
    DirectiveLocation.ARGUMENT_DEFINITION,
    DirectiveLocation.INPUT_FIELD_DEFINITION,
    DirectiveLocation.ENUM_VALUE
  ],
  args: {
    reason: {
      type: GraphQLString,
      description: "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});
var GraphQLSpecifiedByDirective = new GraphQLDirective({
  name: "specifiedBy",
  description: "Exposes a URL that specifies the behavior of this scalar.",
  locations: [DirectiveLocation.SCALAR],
  args: {
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The URL that specifies the behavior of this scalar."
    }
  }
});
var GraphQLOneOfDirective = new GraphQLDirective({
  name: "oneOf",
  description: "Indicates exactly one field must be supplied and this field must not be `null`.",
  locations: [DirectiveLocation.INPUT_OBJECT],
  args: {}
});
var specifiedDirectives = Object.freeze([
  GraphQLIncludeDirective,
  GraphQLSkipDirective,
  GraphQLDeprecatedDirective,
  GraphQLSpecifiedByDirective,
  GraphQLOneOfDirective
]);

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/isIterableObject.mjs
function isIterableObject(maybeIterable) {
  return typeof maybeIterable === "object" && typeof (maybeIterable === null || maybeIterable === void 0 ? void 0 : maybeIterable[Symbol.iterator]) === "function";
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/utilities/astFromValue.mjs
function astFromValue(value, type) {
  if (isNonNullType(type)) {
    const astValue = astFromValue(value, type.ofType);
    if ((astValue === null || astValue === void 0 ? void 0 : astValue.kind) === Kind.NULL) {
      return null;
    }
    return astValue;
  }
  if (value === null) {
    return {
      kind: Kind.NULL
    };
  }
  if (value === void 0) {
    return null;
  }
  if (isListType(type)) {
    const itemType = type.ofType;
    if (isIterableObject(value)) {
      const valuesNodes = [];
      for (const item of value) {
        const itemNode = astFromValue(item, itemType);
        if (itemNode != null) {
          valuesNodes.push(itemNode);
        }
      }
      return {
        kind: Kind.LIST,
        values: valuesNodes
      };
    }
    return astFromValue(value, itemType);
  }
  if (isInputObjectType(type)) {
    if (!isObjectLike(value)) {
      return null;
    }
    const fieldNodes = [];
    for (const field of Object.values(type.getFields())) {
      const fieldValue = astFromValue(value[field.name], field.type);
      if (fieldValue) {
        fieldNodes.push({
          kind: Kind.OBJECT_FIELD,
          name: {
            kind: Kind.NAME,
            value: field.name
          },
          value: fieldValue
        });
      }
    }
    return {
      kind: Kind.OBJECT,
      fields: fieldNodes
    };
  }
  if (isLeafType(type)) {
    const serialized = type.serialize(value);
    if (serialized == null) {
      return null;
    }
    if (typeof serialized === "boolean") {
      return {
        kind: Kind.BOOLEAN,
        value: serialized
      };
    }
    if (typeof serialized === "number" && Number.isFinite(serialized)) {
      const stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? {
        kind: Kind.INT,
        value: stringNum
      } : {
        kind: Kind.FLOAT,
        value: stringNum
      };
    }
    if (typeof serialized === "string") {
      if (isEnumType(type)) {
        return {
          kind: Kind.ENUM,
          value: serialized
        };
      }
      if (type === GraphQLID && integerStringRegExp.test(serialized)) {
        return {
          kind: Kind.INT,
          value: serialized
        };
      }
      return {
        kind: Kind.STRING,
        value: serialized
      };
    }
    throw new TypeError(`Cannot convert value to AST: ${inspect(serialized)}.`);
  }
  invariant(false, "Unexpected input type: " + inspect(type));
}
var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/type/introspection.mjs
var __Schema = new GraphQLObjectType({
  name: "__Schema",
  description: "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
  fields: () => ({
    description: {
      type: GraphQLString,
      resolve: (schema) => schema.description
    },
    types: {
      description: "A list of all types supported by this server.",
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(__Type))),
      resolve(schema) {
        return Object.values(schema.getTypeMap());
      }
    },
    queryType: {
      description: "The type that query operations will be rooted at.",
      type: new GraphQLNonNull(__Type),
      resolve: (schema) => schema.getQueryType()
    },
    mutationType: {
      description: "If this server supports mutation, the type that mutation operations will be rooted at.",
      type: __Type,
      resolve: (schema) => schema.getMutationType()
    },
    subscriptionType: {
      description: "If this server support subscription, the type that subscription operations will be rooted at.",
      type: __Type,
      resolve: (schema) => schema.getSubscriptionType()
    },
    directives: {
      description: "A list of all directives supported by this server.",
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(__Directive))
      ),
      resolve: (schema) => schema.getDirectives()
    }
  })
});
var __Directive = new GraphQLObjectType({
  name: "__Directive",
  description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (directive) => directive.name
    },
    description: {
      type: GraphQLString,
      resolve: (directive) => directive.description
    },
    isRepeatable: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (directive) => directive.isRepeatable
    },
    locations: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(__DirectiveLocation))
      ),
      resolve: (directive) => directive.locations
    },
    args: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(__InputValue))
      ),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(field, { includeDeprecated }) {
        return includeDeprecated ? field.args : field.args.filter((arg) => arg.deprecationReason == null);
      }
    }
  })
});
var __DirectiveLocation = new GraphQLEnumType({
  name: "__DirectiveLocation",
  description: "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
  values: {
    QUERY: {
      value: DirectiveLocation.QUERY,
      description: "Location adjacent to a query operation."
    },
    MUTATION: {
      value: DirectiveLocation.MUTATION,
      description: "Location adjacent to a mutation operation."
    },
    SUBSCRIPTION: {
      value: DirectiveLocation.SUBSCRIPTION,
      description: "Location adjacent to a subscription operation."
    },
    FIELD: {
      value: DirectiveLocation.FIELD,
      description: "Location adjacent to a field."
    },
    FRAGMENT_DEFINITION: {
      value: DirectiveLocation.FRAGMENT_DEFINITION,
      description: "Location adjacent to a fragment definition."
    },
    FRAGMENT_SPREAD: {
      value: DirectiveLocation.FRAGMENT_SPREAD,
      description: "Location adjacent to a fragment spread."
    },
    INLINE_FRAGMENT: {
      value: DirectiveLocation.INLINE_FRAGMENT,
      description: "Location adjacent to an inline fragment."
    },
    VARIABLE_DEFINITION: {
      value: DirectiveLocation.VARIABLE_DEFINITION,
      description: "Location adjacent to a variable definition."
    },
    SCHEMA: {
      value: DirectiveLocation.SCHEMA,
      description: "Location adjacent to a schema definition."
    },
    SCALAR: {
      value: DirectiveLocation.SCALAR,
      description: "Location adjacent to a scalar definition."
    },
    OBJECT: {
      value: DirectiveLocation.OBJECT,
      description: "Location adjacent to an object type definition."
    },
    FIELD_DEFINITION: {
      value: DirectiveLocation.FIELD_DEFINITION,
      description: "Location adjacent to a field definition."
    },
    ARGUMENT_DEFINITION: {
      value: DirectiveLocation.ARGUMENT_DEFINITION,
      description: "Location adjacent to an argument definition."
    },
    INTERFACE: {
      value: DirectiveLocation.INTERFACE,
      description: "Location adjacent to an interface definition."
    },
    UNION: {
      value: DirectiveLocation.UNION,
      description: "Location adjacent to a union definition."
    },
    ENUM: {
      value: DirectiveLocation.ENUM,
      description: "Location adjacent to an enum definition."
    },
    ENUM_VALUE: {
      value: DirectiveLocation.ENUM_VALUE,
      description: "Location adjacent to an enum value definition."
    },
    INPUT_OBJECT: {
      value: DirectiveLocation.INPUT_OBJECT,
      description: "Location adjacent to an input object type definition."
    },
    INPUT_FIELD_DEFINITION: {
      value: DirectiveLocation.INPUT_FIELD_DEFINITION,
      description: "Location adjacent to an input object field definition."
    }
  }
});
var __Type = new GraphQLObjectType({
  name: "__Type",
  description: "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
  fields: () => ({
    kind: {
      type: new GraphQLNonNull(__TypeKind),
      resolve(type) {
        if (isScalarType(type)) {
          return TypeKind.SCALAR;
        }
        if (isObjectType(type)) {
          return TypeKind.OBJECT;
        }
        if (isInterfaceType(type)) {
          return TypeKind.INTERFACE;
        }
        if (isUnionType(type)) {
          return TypeKind.UNION;
        }
        if (isEnumType(type)) {
          return TypeKind.ENUM;
        }
        if (isInputObjectType(type)) {
          return TypeKind.INPUT_OBJECT;
        }
        if (isListType(type)) {
          return TypeKind.LIST;
        }
        if (isNonNullType(type)) {
          return TypeKind.NON_NULL;
        }
        invariant(false, `Unexpected type: "${inspect(type)}".`);
      }
    },
    name: {
      type: GraphQLString,
      resolve: (type) => "name" in type ? type.name : void 0
    },
    description: {
      type: GraphQLString,
      resolve: (type) => (
        /* c8 ignore next */
        "description" in type ? type.description : void 0
      )
    },
    specifiedByURL: {
      type: GraphQLString,
      resolve: (obj) => "specifiedByURL" in obj ? obj.specifiedByURL : void 0
    },
    fields: {
      type: new GraphQLList(new GraphQLNonNull(__Field)),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(type, { includeDeprecated }) {
        if (isObjectType(type) || isInterfaceType(type)) {
          const fields = Object.values(type.getFields());
          return includeDeprecated ? fields : fields.filter((field) => field.deprecationReason == null);
        }
      }
    },
    interfaces: {
      type: new GraphQLList(new GraphQLNonNull(__Type)),
      resolve(type) {
        if (isObjectType(type) || isInterfaceType(type)) {
          return type.getInterfaces();
        }
      }
    },
    possibleTypes: {
      type: new GraphQLList(new GraphQLNonNull(__Type)),
      resolve(type, _args, _context, { schema }) {
        if (isAbstractType(type)) {
          return schema.getPossibleTypes(type);
        }
      }
    },
    enumValues: {
      type: new GraphQLList(new GraphQLNonNull(__EnumValue)),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(type, { includeDeprecated }) {
        if (isEnumType(type)) {
          const values = type.getValues();
          return includeDeprecated ? values : values.filter((field) => field.deprecationReason == null);
        }
      }
    },
    inputFields: {
      type: new GraphQLList(new GraphQLNonNull(__InputValue)),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(type, { includeDeprecated }) {
        if (isInputObjectType(type)) {
          const values = Object.values(type.getFields());
          return includeDeprecated ? values : values.filter((field) => field.deprecationReason == null);
        }
      }
    },
    ofType: {
      type: __Type,
      resolve: (type) => "ofType" in type ? type.ofType : void 0
    },
    isOneOf: {
      type: GraphQLBoolean,
      resolve: (type) => {
        if (isInputObjectType(type)) {
          return type.isOneOf;
        }
      }
    }
  })
});
var __Field = new GraphQLObjectType({
  name: "__Field",
  description: "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (field) => field.name
    },
    description: {
      type: GraphQLString,
      resolve: (field) => field.description
    },
    args: {
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(__InputValue))
      ),
      args: {
        includeDeprecated: {
          type: GraphQLBoolean,
          defaultValue: false
        }
      },
      resolve(field, { includeDeprecated }) {
        return includeDeprecated ? field.args : field.args.filter((arg) => arg.deprecationReason == null);
      }
    },
    type: {
      type: new GraphQLNonNull(__Type),
      resolve: (field) => field.type
    },
    isDeprecated: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (field) => field.deprecationReason != null
    },
    deprecationReason: {
      type: GraphQLString,
      resolve: (field) => field.deprecationReason
    }
  })
});
var __InputValue = new GraphQLObjectType({
  name: "__InputValue",
  description: "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (inputValue) => inputValue.name
    },
    description: {
      type: GraphQLString,
      resolve: (inputValue) => inputValue.description
    },
    type: {
      type: new GraphQLNonNull(__Type),
      resolve: (inputValue) => inputValue.type
    },
    defaultValue: {
      type: GraphQLString,
      description: "A GraphQL-formatted string representing the default value for this input value.",
      resolve(inputValue) {
        const { type, defaultValue } = inputValue;
        const valueAST = astFromValue(defaultValue, type);
        return valueAST ? print(valueAST) : null;
      }
    },
    isDeprecated: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (field) => field.deprecationReason != null
    },
    deprecationReason: {
      type: GraphQLString,
      resolve: (obj) => obj.deprecationReason
    }
  })
});
var __EnumValue = new GraphQLObjectType({
  name: "__EnumValue",
  description: "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (enumValue) => enumValue.name
    },
    description: {
      type: GraphQLString,
      resolve: (enumValue) => enumValue.description
    },
    isDeprecated: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: (enumValue) => enumValue.deprecationReason != null
    },
    deprecationReason: {
      type: GraphQLString,
      resolve: (enumValue) => enumValue.deprecationReason
    }
  })
});
var TypeKind;
(function(TypeKind2) {
  TypeKind2["SCALAR"] = "SCALAR";
  TypeKind2["OBJECT"] = "OBJECT";
  TypeKind2["INTERFACE"] = "INTERFACE";
  TypeKind2["UNION"] = "UNION";
  TypeKind2["ENUM"] = "ENUM";
  TypeKind2["INPUT_OBJECT"] = "INPUT_OBJECT";
  TypeKind2["LIST"] = "LIST";
  TypeKind2["NON_NULL"] = "NON_NULL";
})(TypeKind || (TypeKind = {}));
var __TypeKind = new GraphQLEnumType({
  name: "__TypeKind",
  description: "An enum describing what kind of type a given `__Type` is.",
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: "Indicates this type is a scalar."
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: "Indicates this type is an object. `fields` and `interfaces` are valid fields."
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: "Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."
    },
    UNION: {
      value: TypeKind.UNION,
      description: "Indicates this type is a union. `possibleTypes` is a valid field."
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: "Indicates this type is an enum. `enumValues` is a valid field."
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: "Indicates this type is an input object. `inputFields` is a valid field."
    },
    LIST: {
      value: TypeKind.LIST,
      description: "Indicates this type is a list. `ofType` is a valid field."
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: "Indicates this type is a non-null. `ofType` is a valid field."
    }
  }
});
var SchemaMetaFieldDef = {
  name: "__schema",
  type: new GraphQLNonNull(__Schema),
  description: "Access the current type schema of this server.",
  args: [],
  resolve: (_source, _args, _context, { schema }) => schema,
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
};
var TypeMetaFieldDef = {
  name: "__type",
  type: __Type,
  description: "Request the type information of a single type.",
  args: [
    {
      name: "name",
      description: void 0,
      type: new GraphQLNonNull(GraphQLString),
      defaultValue: void 0,
      deprecationReason: void 0,
      extensions: /* @__PURE__ */ Object.create(null),
      astNode: void 0
    }
  ],
  resolve: (_source, { name }, _context, { schema }) => schema.getType(name),
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
};
var TypeNameMetaFieldDef = {
  name: "__typename",
  type: new GraphQLNonNull(GraphQLString),
  description: "The name of the current Object type at runtime.",
  args: [],
  resolve: (_source, _args, _context, { parentType }) => parentType.name,
  deprecationReason: void 0,
  extensions: /* @__PURE__ */ Object.create(null),
  astNode: void 0
};
var introspectionTypes = Object.freeze([
  __Schema,
  __Directive,
  __DirectiveLocation,
  __Type,
  __Field,
  __InputValue,
  __EnumValue,
  __TypeKind
]);
function isIntrospectionType(type) {
  return introspectionTypes.some(({ name }) => type.name === name);
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/type/schema.mjs
var GraphQLSchema = class {
  // Used as a cache for validateSchema().
  constructor(config) {
    var _config$extensionASTN, _config$directives;
    this.__validationErrors = config.assumeValid === true ? [] : void 0;
    isObjectLike(config) || devAssert(false, "Must provide configuration object.");
    !config.types || Array.isArray(config.types) || devAssert(
      false,
      `"types" must be Array if provided but got: ${inspect(config.types)}.`
    );
    !config.directives || Array.isArray(config.directives) || devAssert(
      false,
      `"directives" must be Array if provided but got: ${inspect(config.directives)}.`
    );
    this.description = config.description;
    this.extensions = toObjMap(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = (_config$extensionASTN = config.extensionASTNodes) !== null && _config$extensionASTN !== void 0 ? _config$extensionASTN : [];
    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription;
    this._directives = (_config$directives = config.directives) !== null && _config$directives !== void 0 ? _config$directives : specifiedDirectives;
    const allReferencedTypes = new Set(config.types);
    if (config.types != null) {
      for (const type of config.types) {
        allReferencedTypes.delete(type);
        collectReferencedTypes(type, allReferencedTypes);
      }
    }
    if (this._queryType != null) {
      collectReferencedTypes(this._queryType, allReferencedTypes);
    }
    if (this._mutationType != null) {
      collectReferencedTypes(this._mutationType, allReferencedTypes);
    }
    if (this._subscriptionType != null) {
      collectReferencedTypes(this._subscriptionType, allReferencedTypes);
    }
    for (const directive of this._directives) {
      if (isDirective(directive)) {
        for (const arg of directive.args) {
          collectReferencedTypes(arg.type, allReferencedTypes);
        }
      }
    }
    collectReferencedTypes(__Schema, allReferencedTypes);
    this._typeMap = /* @__PURE__ */ Object.create(null);
    this._subTypeMap = /* @__PURE__ */ Object.create(null);
    this._implementationsMap = /* @__PURE__ */ Object.create(null);
    for (const namedType of allReferencedTypes) {
      if (namedType == null) {
        continue;
      }
      const typeName = namedType.name;
      typeName || devAssert(
        false,
        "One of the provided types for building the Schema is missing a name."
      );
      if (this._typeMap[typeName] !== void 0) {
        throw new Error(
          `Schema must contain uniquely named types but contains multiple types named "${typeName}".`
        );
      }
      this._typeMap[typeName] = namedType;
      if (isInterfaceType(namedType)) {
        for (const iface of namedType.getInterfaces()) {
          if (isInterfaceType(iface)) {
            let implementations = this._implementationsMap[iface.name];
            if (implementations === void 0) {
              implementations = this._implementationsMap[iface.name] = {
                objects: [],
                interfaces: []
              };
            }
            implementations.interfaces.push(namedType);
          }
        }
      } else if (isObjectType(namedType)) {
        for (const iface of namedType.getInterfaces()) {
          if (isInterfaceType(iface)) {
            let implementations = this._implementationsMap[iface.name];
            if (implementations === void 0) {
              implementations = this._implementationsMap[iface.name] = {
                objects: [],
                interfaces: []
              };
            }
            implementations.objects.push(namedType);
          }
        }
      }
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLSchema";
  }
  getQueryType() {
    return this._queryType;
  }
  getMutationType() {
    return this._mutationType;
  }
  getSubscriptionType() {
    return this._subscriptionType;
  }
  getRootType(operation) {
    switch (operation) {
      case OperationTypeNode.QUERY:
        return this.getQueryType();
      case OperationTypeNode.MUTATION:
        return this.getMutationType();
      case OperationTypeNode.SUBSCRIPTION:
        return this.getSubscriptionType();
    }
  }
  getTypeMap() {
    return this._typeMap;
  }
  getType(name) {
    return this.getTypeMap()[name];
  }
  getPossibleTypes(abstractType) {
    return isUnionType(abstractType) ? abstractType.getTypes() : this.getImplementations(abstractType).objects;
  }
  getImplementations(interfaceType) {
    const implementations = this._implementationsMap[interfaceType.name];
    return implementations !== null && implementations !== void 0 ? implementations : {
      objects: [],
      interfaces: []
    };
  }
  isSubType(abstractType, maybeSubType) {
    let map = this._subTypeMap[abstractType.name];
    if (map === void 0) {
      map = /* @__PURE__ */ Object.create(null);
      if (isUnionType(abstractType)) {
        for (const type of abstractType.getTypes()) {
          map[type.name] = true;
        }
      } else {
        const implementations = this.getImplementations(abstractType);
        for (const type of implementations.objects) {
          map[type.name] = true;
        }
        for (const type of implementations.interfaces) {
          map[type.name] = true;
        }
      }
      this._subTypeMap[abstractType.name] = map;
    }
    return map[maybeSubType.name] !== void 0;
  }
  getDirectives() {
    return this._directives;
  }
  getDirective(name) {
    return this.getDirectives().find((directive) => directive.name === name);
  }
  toConfig() {
    return {
      description: this.description,
      query: this.getQueryType(),
      mutation: this.getMutationType(),
      subscription: this.getSubscriptionType(),
      types: Object.values(this.getTypeMap()),
      directives: this.getDirectives(),
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes,
      assumeValid: this.__validationErrors !== void 0
    };
  }
};
function collectReferencedTypes(type, typeSet) {
  const namedType = getNamedType(type);
  if (!typeSet.has(namedType)) {
    typeSet.add(namedType);
    if (isUnionType(namedType)) {
      for (const memberType of namedType.getTypes()) {
        collectReferencedTypes(memberType, typeSet);
      }
    } else if (isObjectType(namedType) || isInterfaceType(namedType)) {
      for (const interfaceType of namedType.getInterfaces()) {
        collectReferencedTypes(interfaceType, typeSet);
      }
      for (const field of Object.values(namedType.getFields())) {
        collectReferencedTypes(field.type, typeSet);
        for (const arg of field.args) {
          collectReferencedTypes(arg.type, typeSet);
        }
      }
    } else if (isInputObjectType(namedType)) {
      for (const field of Object.values(namedType.getFields())) {
        collectReferencedTypes(field.type, typeSet);
      }
    }
  }
  return typeSet;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/utilities/typeFromAST.mjs
function typeFromAST(schema, typeNode) {
  switch (typeNode.kind) {
    case Kind.LIST_TYPE: {
      const innerType = typeFromAST(schema, typeNode.type);
      return innerType && new GraphQLList(innerType);
    }
    case Kind.NON_NULL_TYPE: {
      const innerType = typeFromAST(schema, typeNode.type);
      return innerType && new GraphQLNonNull(innerType);
    }
    case Kind.NAMED_TYPE:
      return schema.getType(typeNode.name.value);
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/language/predicates.mjs
function isExecutableDefinitionNode(node) {
  return node.kind === Kind.OPERATION_DEFINITION || node.kind === Kind.FRAGMENT_DEFINITION;
}
function isTypeSystemDefinitionNode(node) {
  return node.kind === Kind.SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === Kind.DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
  return node.kind === Kind.SCALAR_TYPE_DEFINITION || node.kind === Kind.OBJECT_TYPE_DEFINITION || node.kind === Kind.INTERFACE_TYPE_DEFINITION || node.kind === Kind.UNION_TYPE_DEFINITION || node.kind === Kind.ENUM_TYPE_DEFINITION || node.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
  return node.kind === Kind.SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
  return node.kind === Kind.SCALAR_TYPE_EXTENSION || node.kind === Kind.OBJECT_TYPE_EXTENSION || node.kind === Kind.INTERFACE_TYPE_EXTENSION || node.kind === Kind.UNION_TYPE_EXTENSION || node.kind === Kind.ENUM_TYPE_EXTENSION || node.kind === Kind.INPUT_OBJECT_TYPE_EXTENSION;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs
function ExecutableDefinitionsRule(context) {
  return {
    Document(node) {
      for (const definition of node.definitions) {
        if (!isExecutableDefinitionNode(definition)) {
          const defName = definition.kind === Kind.SCHEMA_DEFINITION || definition.kind === Kind.SCHEMA_EXTENSION ? "schema" : '"' + definition.name.value + '"';
          context.reportError(
            new GraphQLError(`The ${defName} definition is not executable.`, {
              nodes: definition
            })
          );
        }
      }
      return false;
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs
function FieldsOnCorrectTypeRule(context) {
  return {
    Field(node) {
      const type = context.getParentType();
      if (type) {
        const fieldDef = context.getFieldDef();
        if (!fieldDef) {
          const schema = context.getSchema();
          const fieldName = node.name.value;
          let suggestion = didYouMean(
            "to use an inline fragment on",
            getSuggestedTypeNames(schema, type, fieldName)
          );
          if (suggestion === "") {
            suggestion = didYouMean(getSuggestedFieldNames(type, fieldName));
          }
          context.reportError(
            new GraphQLError(
              `Cannot query field "${fieldName}" on type "${type.name}".` + suggestion,
              {
                nodes: node
              }
            )
          );
        }
      }
    }
  };
}
function getSuggestedTypeNames(schema, type, fieldName) {
  if (!isAbstractType(type)) {
    return [];
  }
  const suggestedTypes = /* @__PURE__ */ new Set();
  const usageCount = /* @__PURE__ */ Object.create(null);
  for (const possibleType of schema.getPossibleTypes(type)) {
    if (!possibleType.getFields()[fieldName]) {
      continue;
    }
    suggestedTypes.add(possibleType);
    usageCount[possibleType.name] = 1;
    for (const possibleInterface of possibleType.getInterfaces()) {
      var _usageCount$possibleI;
      if (!possibleInterface.getFields()[fieldName]) {
        continue;
      }
      suggestedTypes.add(possibleInterface);
      usageCount[possibleInterface.name] = ((_usageCount$possibleI = usageCount[possibleInterface.name]) !== null && _usageCount$possibleI !== void 0 ? _usageCount$possibleI : 0) + 1;
    }
  }
  return [...suggestedTypes].sort((typeA, typeB) => {
    const usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];
    if (usageCountDiff !== 0) {
      return usageCountDiff;
    }
    if (isInterfaceType(typeA) && schema.isSubType(typeA, typeB)) {
      return -1;
    }
    if (isInterfaceType(typeB) && schema.isSubType(typeB, typeA)) {
      return 1;
    }
    return naturalCompare(typeA.name, typeB.name);
  }).map((x) => x.name);
}
function getSuggestedFieldNames(type, fieldName) {
  if (isObjectType(type) || isInterfaceType(type)) {
    const possibleFieldNames = Object.keys(type.getFields());
    return suggestionList(fieldName, possibleFieldNames);
  }
  return [];
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs
function FragmentsOnCompositeTypesRule(context) {
  return {
    InlineFragment(node) {
      const typeCondition = node.typeCondition;
      if (typeCondition) {
        const type = typeFromAST(context.getSchema(), typeCondition);
        if (type && !isCompositeType(type)) {
          const typeStr = print(typeCondition);
          context.reportError(
            new GraphQLError(
              `Fragment cannot condition on non composite type "${typeStr}".`,
              {
                nodes: typeCondition
              }
            )
          );
        }
      }
    },
    FragmentDefinition(node) {
      const type = typeFromAST(context.getSchema(), node.typeCondition);
      if (type && !isCompositeType(type)) {
        const typeStr = print(node.typeCondition);
        context.reportError(
          new GraphQLError(
            `Fragment "${node.name.value}" cannot condition on non composite type "${typeStr}".`,
            {
              nodes: node.typeCondition
            }
          )
        );
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs
function KnownArgumentNamesRule(context) {
  return {
    // eslint-disable-next-line new-cap
    ...KnownArgumentNamesOnDirectivesRule(context),
    Argument(argNode) {
      const argDef = context.getArgument();
      const fieldDef = context.getFieldDef();
      const parentType = context.getParentType();
      if (!argDef && fieldDef && parentType) {
        const argName = argNode.name.value;
        const knownArgsNames = fieldDef.args.map((arg) => arg.name);
        const suggestions = suggestionList(argName, knownArgsNames);
        context.reportError(
          new GraphQLError(
            `Unknown argument "${argName}" on field "${parentType.name}.${fieldDef.name}".` + didYouMean(suggestions),
            {
              nodes: argNode
            }
          )
        );
      }
    }
  };
}
function KnownArgumentNamesOnDirectivesRule(context) {
  const directiveArgs = /* @__PURE__ */ Object.create(null);
  const schema = context.getSchema();
  const definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;
  for (const directive of definedDirectives) {
    directiveArgs[directive.name] = directive.args.map((arg) => arg.name);
  }
  const astDefinitions = context.getDocument().definitions;
  for (const def of astDefinitions) {
    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      var _def$arguments;
      const argsNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
      directiveArgs[def.name.value] = argsNodes.map((arg) => arg.name.value);
    }
  }
  return {
    Directive(directiveNode) {
      const directiveName = directiveNode.name.value;
      const knownArgs = directiveArgs[directiveName];
      if (directiveNode.arguments && knownArgs) {
        for (const argNode of directiveNode.arguments) {
          const argName = argNode.name.value;
          if (!knownArgs.includes(argName)) {
            const suggestions = suggestionList(argName, knownArgs);
            context.reportError(
              new GraphQLError(
                `Unknown argument "${argName}" on directive "@${directiveName}".` + didYouMean(suggestions),
                {
                  nodes: argNode
                }
              )
            );
          }
        }
      }
      return false;
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/KnownDirectivesRule.mjs
function KnownDirectivesRule(context) {
  const locationsMap = /* @__PURE__ */ Object.create(null);
  const schema = context.getSchema();
  const definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;
  for (const directive of definedDirectives) {
    locationsMap[directive.name] = directive.locations;
  }
  const astDefinitions = context.getDocument().definitions;
  for (const def of astDefinitions) {
    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      locationsMap[def.name.value] = def.locations.map((name) => name.value);
    }
  }
  return {
    Directive(node, _key, _parent, _path, ancestors) {
      const name = node.name.value;
      const locations = locationsMap[name];
      if (!locations) {
        context.reportError(
          new GraphQLError(`Unknown directive "@${name}".`, {
            nodes: node
          })
        );
        return;
      }
      const candidateLocation = getDirectiveLocationForASTPath(ancestors);
      if (candidateLocation && !locations.includes(candidateLocation)) {
        context.reportError(
          new GraphQLError(
            `Directive "@${name}" may not be used on ${candidateLocation}.`,
            {
              nodes: node
            }
          )
        );
      }
    }
  };
}
function getDirectiveLocationForASTPath(ancestors) {
  const appliedTo = ancestors[ancestors.length - 1];
  "kind" in appliedTo || invariant(false);
  switch (appliedTo.kind) {
    case Kind.OPERATION_DEFINITION:
      return getDirectiveLocationForOperation(appliedTo.operation);
    case Kind.FIELD:
      return DirectiveLocation.FIELD;
    case Kind.FRAGMENT_SPREAD:
      return DirectiveLocation.FRAGMENT_SPREAD;
    case Kind.INLINE_FRAGMENT:
      return DirectiveLocation.INLINE_FRAGMENT;
    case Kind.FRAGMENT_DEFINITION:
      return DirectiveLocation.FRAGMENT_DEFINITION;
    case Kind.VARIABLE_DEFINITION:
      return DirectiveLocation.VARIABLE_DEFINITION;
    case Kind.SCHEMA_DEFINITION:
    case Kind.SCHEMA_EXTENSION:
      return DirectiveLocation.SCHEMA;
    case Kind.SCALAR_TYPE_DEFINITION:
    case Kind.SCALAR_TYPE_EXTENSION:
      return DirectiveLocation.SCALAR;
    case Kind.OBJECT_TYPE_DEFINITION:
    case Kind.OBJECT_TYPE_EXTENSION:
      return DirectiveLocation.OBJECT;
    case Kind.FIELD_DEFINITION:
      return DirectiveLocation.FIELD_DEFINITION;
    case Kind.INTERFACE_TYPE_DEFINITION:
    case Kind.INTERFACE_TYPE_EXTENSION:
      return DirectiveLocation.INTERFACE;
    case Kind.UNION_TYPE_DEFINITION:
    case Kind.UNION_TYPE_EXTENSION:
      return DirectiveLocation.UNION;
    case Kind.ENUM_TYPE_DEFINITION:
    case Kind.ENUM_TYPE_EXTENSION:
      return DirectiveLocation.ENUM;
    case Kind.ENUM_VALUE_DEFINITION:
      return DirectiveLocation.ENUM_VALUE;
    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
    case Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return DirectiveLocation.INPUT_OBJECT;
    case Kind.INPUT_VALUE_DEFINITION: {
      const parentNode = ancestors[ancestors.length - 3];
      "kind" in parentNode || invariant(false);
      return parentNode.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION ? DirectiveLocation.INPUT_FIELD_DEFINITION : DirectiveLocation.ARGUMENT_DEFINITION;
    }
    // Not reachable, all possible types have been considered.
    /* c8 ignore next */
    default:
      invariant(false, "Unexpected kind: " + inspect(appliedTo.kind));
  }
}
function getDirectiveLocationForOperation(operation) {
  switch (operation) {
    case OperationTypeNode.QUERY:
      return DirectiveLocation.QUERY;
    case OperationTypeNode.MUTATION:
      return DirectiveLocation.MUTATION;
    case OperationTypeNode.SUBSCRIPTION:
      return DirectiveLocation.SUBSCRIPTION;
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs
function KnownFragmentNamesRule(context) {
  return {
    FragmentSpread(node) {
      const fragmentName = node.name.value;
      const fragment = context.getFragment(fragmentName);
      if (!fragment) {
        context.reportError(
          new GraphQLError(`Unknown fragment "${fragmentName}".`, {
            nodes: node.name
          })
        );
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs
function KnownTypeNamesRule(context) {
  const schema = context.getSchema();
  const existingTypesMap = schema ? schema.getTypeMap() : /* @__PURE__ */ Object.create(null);
  const definedTypes = /* @__PURE__ */ Object.create(null);
  for (const def of context.getDocument().definitions) {
    if (isTypeDefinitionNode(def)) {
      definedTypes[def.name.value] = true;
    }
  }
  const typeNames = [
    ...Object.keys(existingTypesMap),
    ...Object.keys(definedTypes)
  ];
  return {
    NamedType(node, _1, parent, _2, ancestors) {
      const typeName = node.name.value;
      if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
        var _ancestors$;
        const definitionNode = (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0 ? _ancestors$ : parent;
        const isSDL = definitionNode != null && isSDLNode(definitionNode);
        if (isSDL && standardTypeNames.includes(typeName)) {
          return;
        }
        const suggestedTypes = suggestionList(
          typeName,
          isSDL ? standardTypeNames.concat(typeNames) : typeNames
        );
        context.reportError(
          new GraphQLError(
            `Unknown type "${typeName}".` + didYouMean(suggestedTypes),
            {
              nodes: node
            }
          )
        );
      }
    }
  };
}
var standardTypeNames = [...specifiedScalarTypes, ...introspectionTypes].map(
  (type) => type.name
);
function isSDLNode(value) {
  return "kind" in value && (isTypeSystemDefinitionNode(value) || isTypeSystemExtensionNode(value));
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs
function LoneAnonymousOperationRule(context) {
  let operationCount = 0;
  return {
    Document(node) {
      operationCount = node.definitions.filter(
        (definition) => definition.kind === Kind.OPERATION_DEFINITION
      ).length;
    },
    OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(
          new GraphQLError(
            "This anonymous operation must be the only defined operation.",
            {
              nodes: node
            }
          )
        );
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs
function LoneSchemaDefinitionRule(context) {
  var _ref, _ref2, _oldSchema$astNode;
  const oldSchema = context.getSchema();
  const alreadyDefined = (_ref = (_ref2 = (_oldSchema$astNode = oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0 ? _oldSchema$astNode : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getQueryType()) !== null && _ref2 !== void 0 ? _ref2 : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getMutationType()) !== null && _ref !== void 0 ? _ref : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getSubscriptionType();
  let schemaDefinitionsCount = 0;
  return {
    SchemaDefinition(node) {
      if (alreadyDefined) {
        context.reportError(
          new GraphQLError(
            "Cannot define a new schema within a schema extension.",
            {
              nodes: node
            }
          )
        );
        return;
      }
      if (schemaDefinitionsCount > 0) {
        context.reportError(
          new GraphQLError("Must provide only one schema definition.", {
            nodes: node
          })
        );
      }
      ++schemaDefinitionsCount;
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/MaxIntrospectionDepthRule.mjs
var MAX_LISTS_DEPTH = 3;
function MaxIntrospectionDepthRule(context) {
  function checkDepth(node, visitedFragments = /* @__PURE__ */ Object.create(null), depth = 0) {
    if (node.kind === Kind.FRAGMENT_SPREAD) {
      const fragmentName = node.name.value;
      if (visitedFragments[fragmentName] === true) {
        return false;
      }
      const fragment = context.getFragment(fragmentName);
      if (!fragment) {
        return false;
      }
      try {
        visitedFragments[fragmentName] = true;
        return checkDepth(fragment, visitedFragments, depth);
      } finally {
        visitedFragments[fragmentName] = void 0;
      }
    }
    if (node.kind === Kind.FIELD && // check all introspection lists
    (node.name.value === "fields" || node.name.value === "interfaces" || node.name.value === "possibleTypes" || node.name.value === "inputFields")) {
      depth++;
      if (depth >= MAX_LISTS_DEPTH) {
        return true;
      }
    }
    if ("selectionSet" in node && node.selectionSet) {
      for (const child of node.selectionSet.selections) {
        if (checkDepth(child, visitedFragments, depth)) {
          return true;
        }
      }
    }
    return false;
  }
  return {
    Field(node) {
      if (node.name.value === "__schema" || node.name.value === "__type") {
        if (checkDepth(node)) {
          context.reportError(
            new GraphQLError("Maximum introspection depth exceeded", {
              nodes: [node]
            })
          );
          return false;
        }
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs
function NoFragmentCyclesRule(context) {
  const visitedFrags = /* @__PURE__ */ Object.create(null);
  const spreadPath = [];
  const spreadPathIndexByName = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: () => false,
    FragmentDefinition(node) {
      detectCycleRecursive(node);
      return false;
    }
  };
  function detectCycleRecursive(fragment) {
    if (visitedFrags[fragment.name.value]) {
      return;
    }
    const fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;
    const spreadNodes = context.getFragmentSpreads(fragment.selectionSet);
    if (spreadNodes.length === 0) {
      return;
    }
    spreadPathIndexByName[fragmentName] = spreadPath.length;
    for (const spreadNode of spreadNodes) {
      const spreadName = spreadNode.name.value;
      const cycleIndex = spreadPathIndexByName[spreadName];
      spreadPath.push(spreadNode);
      if (cycleIndex === void 0) {
        const spreadFragment = context.getFragment(spreadName);
        if (spreadFragment) {
          detectCycleRecursive(spreadFragment);
        }
      } else {
        const cyclePath = spreadPath.slice(cycleIndex);
        const viaPath = cyclePath.slice(0, -1).map((s) => '"' + s.name.value + '"').join(", ");
        context.reportError(
          new GraphQLError(
            `Cannot spread fragment "${spreadName}" within itself` + (viaPath !== "" ? ` via ${viaPath}.` : "."),
            {
              nodes: cyclePath
            }
          )
        );
      }
      spreadPath.pop();
    }
    spreadPathIndexByName[fragmentName] = void 0;
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs
function NoUndefinedVariablesRule(context) {
  let variableNameDefined = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: {
      enter() {
        variableNameDefined = /* @__PURE__ */ Object.create(null);
      },
      leave(operation) {
        const usages = context.getRecursiveVariableUsages(operation);
        for (const { node } of usages) {
          const varName = node.name.value;
          if (variableNameDefined[varName] !== true) {
            context.reportError(
              new GraphQLError(
                operation.name ? `Variable "$${varName}" is not defined by operation "${operation.name.value}".` : `Variable "$${varName}" is not defined.`,
                {
                  nodes: [node, operation]
                }
              )
            );
          }
        }
      }
    },
    VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs
function NoUnusedFragmentsRule(context) {
  const operationDefs = [];
  const fragmentDefs = [];
  return {
    OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },
    Document: {
      leave() {
        const fragmentNameUsed = /* @__PURE__ */ Object.create(null);
        for (const operation of operationDefs) {
          for (const fragment of context.getRecursivelyReferencedFragments(
            operation
          )) {
            fragmentNameUsed[fragment.name.value] = true;
          }
        }
        for (const fragmentDef of fragmentDefs) {
          const fragName = fragmentDef.name.value;
          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(
              new GraphQLError(`Fragment "${fragName}" is never used.`, {
                nodes: fragmentDef
              })
            );
          }
        }
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs
function NoUnusedVariablesRule(context) {
  let variableDefs = [];
  return {
    OperationDefinition: {
      enter() {
        variableDefs = [];
      },
      leave(operation) {
        const variableNameUsed = /* @__PURE__ */ Object.create(null);
        const usages = context.getRecursiveVariableUsages(operation);
        for (const { node } of usages) {
          variableNameUsed[node.name.value] = true;
        }
        for (const variableDef of variableDefs) {
          const variableName = variableDef.variable.name.value;
          if (variableNameUsed[variableName] !== true) {
            context.reportError(
              new GraphQLError(
                operation.name ? `Variable "$${variableName}" is never used in operation "${operation.name.value}".` : `Variable "$${variableName}" is never used.`,
                {
                  nodes: variableDef
                }
              )
            );
          }
        }
      }
    },
    VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/utilities/sortValueNode.mjs
function sortValueNode(valueNode) {
  switch (valueNode.kind) {
    case Kind.OBJECT:
      return { ...valueNode, fields: sortFields(valueNode.fields) };
    case Kind.LIST:
      return { ...valueNode, values: valueNode.values.map(sortValueNode) };
    case Kind.INT:
    case Kind.FLOAT:
    case Kind.STRING:
    case Kind.BOOLEAN:
    case Kind.NULL:
    case Kind.ENUM:
    case Kind.VARIABLE:
      return valueNode;
  }
}
function sortFields(fields) {
  return fields.map((fieldNode) => ({
    ...fieldNode,
    value: sortValueNode(fieldNode.value)
  })).sort(
    (fieldA, fieldB) => naturalCompare(fieldA.name.value, fieldB.name.value)
  );
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs
function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(
      ([responseName, subReason]) => `subfields "${responseName}" conflict because ` + reasonMessage(subReason)
    ).join(" and ");
  }
  return reason;
}
function OverlappingFieldsCanBeMergedRule(context) {
  const comparedFieldsAndFragmentPairs = new OrderedPairSet();
  const comparedFragmentPairs = new PairSet();
  const cachedFieldsAndFragmentNames = /* @__PURE__ */ new Map();
  return {
    SelectionSet(selectionSet) {
      const conflicts = findConflictsWithinSelectionSet(
        context,
        cachedFieldsAndFragmentNames,
        comparedFieldsAndFragmentPairs,
        comparedFragmentPairs,
        context.getParentType(),
        selectionSet
      );
      for (const [[responseName, reason], fields1, fields2] of conflicts) {
        const reasonMsg = reasonMessage(reason);
        context.reportError(
          new GraphQLError(
            `Fields "${responseName}" conflict because ${reasonMsg}. Use different aliases on the fields to fetch both if this was intentional.`,
            {
              nodes: fields1.concat(fields2)
            }
          )
        );
      }
    }
  };
}
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, parentType, selectionSet) {
  const conflicts = [];
  const [fieldMap, fragmentNames] = getFieldsAndFragmentNames(
    context,
    cachedFieldsAndFragmentNames,
    parentType,
    selectionSet
  );
  collectConflictsWithin(
    context,
    conflicts,
    cachedFieldsAndFragmentNames,
    comparedFieldsAndFragmentPairs,
    comparedFragmentPairs,
    fieldMap
  );
  if (fragmentNames.length !== 0) {
    for (let i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(
        context,
        conflicts,
        cachedFieldsAndFragmentNames,
        comparedFieldsAndFragmentPairs,
        comparedFragmentPairs,
        false,
        fieldMap,
        fragmentNames[i]
      );
      for (let j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(
          context,
          conflicts,
          cachedFieldsAndFragmentNames,
          comparedFieldsAndFragmentPairs,
          comparedFragmentPairs,
          false,
          fragmentNames[i],
          fragmentNames[j]
        );
      }
    }
  }
  return conflicts;
}
function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  if (comparedFieldsAndFragmentPairs.has(
    fieldMap,
    fragmentName,
    areMutuallyExclusive
  )) {
    return;
  }
  comparedFieldsAndFragmentPairs.add(
    fieldMap,
    fragmentName,
    areMutuallyExclusive
  );
  const fragment = context.getFragment(fragmentName);
  if (!fragment) {
    return;
  }
  const [fieldMap2, referencedFragmentNames] = getReferencedFieldsAndFragmentNames(
    context,
    cachedFieldsAndFragmentNames,
    fragment
  );
  if (fieldMap === fieldMap2) {
    return;
  }
  collectConflictsBetween(
    context,
    conflicts,
    cachedFieldsAndFragmentNames,
    comparedFieldsAndFragmentPairs,
    comparedFragmentPairs,
    areMutuallyExclusive,
    fieldMap,
    fieldMap2
  );
  for (const referencedFragmentName of referencedFragmentNames) {
    collectConflictsBetweenFieldsAndFragment(
      context,
      conflicts,
      cachedFieldsAndFragmentNames,
      comparedFieldsAndFragmentPairs,
      comparedFragmentPairs,
      areMutuallyExclusive,
      fieldMap,
      referencedFragmentName
    );
  }
}
function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  if (fragmentName1 === fragmentName2) {
    return;
  }
  if (comparedFragmentPairs.has(
    fragmentName1,
    fragmentName2,
    areMutuallyExclusive
  )) {
    return;
  }
  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
  const fragment1 = context.getFragment(fragmentName1);
  const fragment2 = context.getFragment(fragmentName2);
  if (!fragment1 || !fragment2) {
    return;
  }
  const [fieldMap1, referencedFragmentNames1] = getReferencedFieldsAndFragmentNames(
    context,
    cachedFieldsAndFragmentNames,
    fragment1
  );
  const [fieldMap2, referencedFragmentNames2] = getReferencedFieldsAndFragmentNames(
    context,
    cachedFieldsAndFragmentNames,
    fragment2
  );
  collectConflictsBetween(
    context,
    conflicts,
    cachedFieldsAndFragmentNames,
    comparedFieldsAndFragmentPairs,
    comparedFragmentPairs,
    areMutuallyExclusive,
    fieldMap1,
    fieldMap2
  );
  for (const referencedFragmentName2 of referencedFragmentNames2) {
    collectConflictsBetweenFragments(
      context,
      conflicts,
      cachedFieldsAndFragmentNames,
      comparedFieldsAndFragmentPairs,
      comparedFragmentPairs,
      areMutuallyExclusive,
      fragmentName1,
      referencedFragmentName2
    );
  }
  for (const referencedFragmentName1 of referencedFragmentNames1) {
    collectConflictsBetweenFragments(
      context,
      conflicts,
      cachedFieldsAndFragmentNames,
      comparedFieldsAndFragmentPairs,
      comparedFragmentPairs,
      areMutuallyExclusive,
      referencedFragmentName1,
      fragmentName2
    );
  }
}
function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  const conflicts = [];
  const [fieldMap1, fragmentNames1] = getFieldsAndFragmentNames(
    context,
    cachedFieldsAndFragmentNames,
    parentType1,
    selectionSet1
  );
  const [fieldMap2, fragmentNames2] = getFieldsAndFragmentNames(
    context,
    cachedFieldsAndFragmentNames,
    parentType2,
    selectionSet2
  );
  collectConflictsBetween(
    context,
    conflicts,
    cachedFieldsAndFragmentNames,
    comparedFieldsAndFragmentPairs,
    comparedFragmentPairs,
    areMutuallyExclusive,
    fieldMap1,
    fieldMap2
  );
  for (const fragmentName2 of fragmentNames2) {
    collectConflictsBetweenFieldsAndFragment(
      context,
      conflicts,
      cachedFieldsAndFragmentNames,
      comparedFieldsAndFragmentPairs,
      comparedFragmentPairs,
      areMutuallyExclusive,
      fieldMap1,
      fragmentName2
    );
  }
  for (const fragmentName1 of fragmentNames1) {
    collectConflictsBetweenFieldsAndFragment(
      context,
      conflicts,
      cachedFieldsAndFragmentNames,
      comparedFieldsAndFragmentPairs,
      comparedFragmentPairs,
      areMutuallyExclusive,
      fieldMap2,
      fragmentName1
    );
  }
  for (const fragmentName1 of fragmentNames1) {
    for (const fragmentName2 of fragmentNames2) {
      collectConflictsBetweenFragments(
        context,
        conflicts,
        cachedFieldsAndFragmentNames,
        comparedFieldsAndFragmentPairs,
        comparedFragmentPairs,
        areMutuallyExclusive,
        fragmentName1,
        fragmentName2
      );
    }
  }
  return conflicts;
}
function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, fieldMap) {
  for (const [responseName, fields] of Object.entries(fieldMap)) {
    if (fields.length > 1) {
      for (let i = 0; i < fields.length; i++) {
        for (let j = i + 1; j < fields.length; j++) {
          const conflict = findConflict(
            context,
            cachedFieldsAndFragmentNames,
            comparedFieldsAndFragmentPairs,
            comparedFragmentPairs,
            false,
            // within one collection is never mutually exclusive
            responseName,
            fields[i],
            fields[j]
          );
          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
}
function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  for (const [responseName, fields1] of Object.entries(fieldMap1)) {
    const fields2 = fieldMap2[responseName];
    if (fields2) {
      for (const field1 of fields1) {
        for (const field2 of fields2) {
          const conflict = findConflict(
            context,
            cachedFieldsAndFragmentNames,
            comparedFieldsAndFragmentPairs,
            comparedFragmentPairs,
            parentFieldsAreMutuallyExclusive,
            responseName,
            field1,
            field2
          );
          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
}
function findConflict(context, cachedFieldsAndFragmentNames, comparedFieldsAndFragmentPairs, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  const [parentType1, node1, def1] = field1;
  const [parentType2, node2, def2] = field2;
  const areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && isObjectType(parentType1) && isObjectType(parentType2);
  if (!areMutuallyExclusive) {
    const name1 = node1.name.value;
    const name2 = node2.name.value;
    if (name1 !== name2) {
      return [
        [responseName, `"${name1}" and "${name2}" are different fields`],
        [node1],
        [node2]
      ];
    }
    if (!sameArguments(node1, node2)) {
      return [
        [responseName, "they have differing arguments"],
        [node1],
        [node2]
      ];
    }
  }
  const type1 = def1 === null || def1 === void 0 ? void 0 : def1.type;
  const type2 = def2 === null || def2 === void 0 ? void 0 : def2.type;
  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [
      [
        responseName,
        `they return conflicting types "${inspect(type1)}" and "${inspect(
          type2
        )}"`
      ],
      [node1],
      [node2]
    ];
  }
  const selectionSet1 = node1.selectionSet;
  const selectionSet2 = node2.selectionSet;
  if (selectionSet1 && selectionSet2) {
    const conflicts = findConflictsBetweenSubSelectionSets(
      context,
      cachedFieldsAndFragmentNames,
      comparedFieldsAndFragmentPairs,
      comparedFragmentPairs,
      areMutuallyExclusive,
      getNamedType(type1),
      selectionSet1,
      getNamedType(type2),
      selectionSet2
    );
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}
function sameArguments(node1, node2) {
  const args1 = node1.arguments;
  const args2 = node2.arguments;
  if (args1 === void 0 || args1.length === 0) {
    return args2 === void 0 || args2.length === 0;
  }
  if (args2 === void 0 || args2.length === 0) {
    return false;
  }
  if (args1.length !== args2.length) {
    return false;
  }
  const values2 = new Map(args2.map(({ name, value }) => [name.value, value]));
  return args1.every((arg1) => {
    const value1 = arg1.value;
    const value2 = values2.get(arg1.name.value);
    if (value2 === void 0) {
      return false;
    }
    return stringifyValue(value1) === stringifyValue(value2);
  });
}
function stringifyValue(value) {
  return print(sortValueNode(value));
}
function doTypesConflict(type1, type2) {
  if (isListType(type1)) {
    return isListType(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if (isListType(type2)) {
    return true;
  }
  if (isNonNullType(type1)) {
    return isNonNullType(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }
  if (isNonNullType(type2)) {
    return true;
  }
  if (isLeafType(type1) || isLeafType(type2)) {
    return type1 !== type2;
  }
  return false;
}
function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  const cached = cachedFieldsAndFragmentNames.get(selectionSet);
  if (cached) {
    return cached;
  }
  const nodeAndDefs = /* @__PURE__ */ Object.create(null);
  const fragmentNames = /* @__PURE__ */ Object.create(null);
  _collectFieldsAndFragmentNames(
    context,
    parentType,
    selectionSet,
    nodeAndDefs,
    fragmentNames
  );
  const result = [nodeAndDefs, Object.keys(fragmentNames)];
  cachedFieldsAndFragmentNames.set(selectionSet, result);
  return result;
}
function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  const cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);
  if (cached) {
    return cached;
  }
  const fragmentType = typeFromAST(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(
    context,
    cachedFieldsAndFragmentNames,
    fragmentType,
    fragment.selectionSet
  );
}
function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (const selection of selectionSet.selections) {
    switch (selection.kind) {
      case Kind.FIELD: {
        const fieldName = selection.name.value;
        let fieldDef;
        if (isObjectType(parentType) || isInterfaceType(parentType)) {
          fieldDef = parentType.getFields()[fieldName];
        }
        const responseName = selection.alias ? selection.alias.value : fieldName;
        if (!nodeAndDefs[responseName]) {
          nodeAndDefs[responseName] = [];
        }
        nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
        break;
      }
      case Kind.FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;
      case Kind.INLINE_FRAGMENT: {
        const typeCondition = selection.typeCondition;
        const inlineFragmentType = typeCondition ? typeFromAST(context.getSchema(), typeCondition) : parentType;
        _collectFieldsAndFragmentNames(
          context,
          inlineFragmentType,
          selection.selectionSet,
          nodeAndDefs,
          fragmentNames
        );
        break;
      }
    }
  }
}
function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [
      [responseName, conflicts.map(([reason]) => reason)],
      [node1, ...conflicts.map(([, fields1]) => fields1).flat()],
      [node2, ...conflicts.map(([, , fields2]) => fields2).flat()]
    ];
  }
}
var OrderedPairSet = class {
  constructor() {
    this._data = /* @__PURE__ */ new Map();
  }
  has(a, b, weaklyPresent) {
    var _this$_data$get;
    const result = (_this$_data$get = this._data.get(a)) === null || _this$_data$get === void 0 ? void 0 : _this$_data$get.get(b);
    if (result === void 0) {
      return false;
    }
    return weaklyPresent ? true : weaklyPresent === result;
  }
  add(a, b, weaklyPresent) {
    const map = this._data.get(a);
    if (map === void 0) {
      this._data.set(a, /* @__PURE__ */ new Map([[b, weaklyPresent]]));
    } else {
      map.set(b, weaklyPresent);
    }
  }
};
var PairSet = class {
  constructor() {
    this._orderedPairSet = new OrderedPairSet();
  }
  has(a, b, weaklyPresent) {
    return a < b ? this._orderedPairSet.has(a, b, weaklyPresent) : this._orderedPairSet.has(b, a, weaklyPresent);
  }
  add(a, b, weaklyPresent) {
    if (a < b) {
      this._orderedPairSet.add(a, b, weaklyPresent);
    } else {
      this._orderedPairSet.add(b, a, weaklyPresent);
    }
  }
};

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs
function PossibleFragmentSpreadsRule(context) {
  return {
    InlineFragment(node) {
      const fragType = context.getType();
      const parentType = context.getParentType();
      if (isCompositeType(fragType) && isCompositeType(parentType) && !doTypesOverlap(context.getSchema(), fragType, parentType)) {
        const parentTypeStr = inspect(parentType);
        const fragTypeStr = inspect(fragType);
        context.reportError(
          new GraphQLError(
            `Fragment cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`,
            {
              nodes: node
            }
          )
        );
      }
    },
    FragmentSpread(node) {
      const fragName = node.name.value;
      const fragType = getFragmentType(context, fragName);
      const parentType = context.getParentType();
      if (fragType && parentType && !doTypesOverlap(context.getSchema(), fragType, parentType)) {
        const parentTypeStr = inspect(parentType);
        const fragTypeStr = inspect(fragType);
        context.reportError(
          new GraphQLError(
            `Fragment "${fragName}" cannot be spread here as objects of type "${parentTypeStr}" can never be of type "${fragTypeStr}".`,
            {
              nodes: node
            }
          )
        );
      }
    }
  };
}
function getFragmentType(context, name) {
  const frag = context.getFragment(name);
  if (frag) {
    const type = typeFromAST(context.getSchema(), frag.typeCondition);
    if (isCompositeType(type)) {
      return type;
    }
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs
function PossibleTypeExtensionsRule(context) {
  const schema = context.getSchema();
  const definedTypes = /* @__PURE__ */ Object.create(null);
  for (const def of context.getDocument().definitions) {
    if (isTypeDefinitionNode(def)) {
      definedTypes[def.name.value] = def;
    }
  }
  return {
    ScalarTypeExtension: checkExtension,
    ObjectTypeExtension: checkExtension,
    InterfaceTypeExtension: checkExtension,
    UnionTypeExtension: checkExtension,
    EnumTypeExtension: checkExtension,
    InputObjectTypeExtension: checkExtension
  };
  function checkExtension(node) {
    const typeName = node.name.value;
    const defNode = definedTypes[typeName];
    const existingType = schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
    let expectedKind;
    if (defNode) {
      expectedKind = defKindToExtKind[defNode.kind];
    } else if (existingType) {
      expectedKind = typeToExtKind(existingType);
    }
    if (expectedKind) {
      if (expectedKind !== node.kind) {
        const kindStr = extensionKindToTypeName(node.kind);
        context.reportError(
          new GraphQLError(`Cannot extend non-${kindStr} type "${typeName}".`, {
            nodes: defNode ? [defNode, node] : node
          })
        );
      }
    } else {
      const allTypeNames = Object.keys({
        ...definedTypes,
        ...schema === null || schema === void 0 ? void 0 : schema.getTypeMap()
      });
      const suggestedTypes = suggestionList(typeName, allTypeNames);
      context.reportError(
        new GraphQLError(
          `Cannot extend type "${typeName}" because it is not defined.` + didYouMean(suggestedTypes),
          {
            nodes: node.name
          }
        )
      );
    }
  }
}
var defKindToExtKind = {
  [Kind.SCALAR_TYPE_DEFINITION]: Kind.SCALAR_TYPE_EXTENSION,
  [Kind.OBJECT_TYPE_DEFINITION]: Kind.OBJECT_TYPE_EXTENSION,
  [Kind.INTERFACE_TYPE_DEFINITION]: Kind.INTERFACE_TYPE_EXTENSION,
  [Kind.UNION_TYPE_DEFINITION]: Kind.UNION_TYPE_EXTENSION,
  [Kind.ENUM_TYPE_DEFINITION]: Kind.ENUM_TYPE_EXTENSION,
  [Kind.INPUT_OBJECT_TYPE_DEFINITION]: Kind.INPUT_OBJECT_TYPE_EXTENSION
};
function typeToExtKind(type) {
  if (isScalarType(type)) {
    return Kind.SCALAR_TYPE_EXTENSION;
  }
  if (isObjectType(type)) {
    return Kind.OBJECT_TYPE_EXTENSION;
  }
  if (isInterfaceType(type)) {
    return Kind.INTERFACE_TYPE_EXTENSION;
  }
  if (isUnionType(type)) {
    return Kind.UNION_TYPE_EXTENSION;
  }
  if (isEnumType(type)) {
    return Kind.ENUM_TYPE_EXTENSION;
  }
  if (isInputObjectType(type)) {
    return Kind.INPUT_OBJECT_TYPE_EXTENSION;
  }
  invariant(false, "Unexpected type: " + inspect(type));
}
function extensionKindToTypeName(kind) {
  switch (kind) {
    case Kind.SCALAR_TYPE_EXTENSION:
      return "scalar";
    case Kind.OBJECT_TYPE_EXTENSION:
      return "object";
    case Kind.INTERFACE_TYPE_EXTENSION:
      return "interface";
    case Kind.UNION_TYPE_EXTENSION:
      return "union";
    case Kind.ENUM_TYPE_EXTENSION:
      return "enum";
    case Kind.INPUT_OBJECT_TYPE_EXTENSION:
      return "input object";
    // Not reachable. All possible types have been considered
    /* c8 ignore next */
    default:
      invariant(false, "Unexpected kind: " + inspect(kind));
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs
function ProvidedRequiredArgumentsRule(context) {
  return {
    // eslint-disable-next-line new-cap
    ...ProvidedRequiredArgumentsOnDirectivesRule(context),
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave(fieldNode) {
        var _fieldNode$arguments;
        const fieldDef = context.getFieldDef();
        if (!fieldDef) {
          return false;
        }
        const providedArgs = new Set(
          // FIXME: https://github.com/graphql/graphql-js/issues/2203
          /* c8 ignore next */
          (_fieldNode$arguments = fieldNode.arguments) === null || _fieldNode$arguments === void 0 ? void 0 : _fieldNode$arguments.map((arg) => arg.name.value)
        );
        for (const argDef of fieldDef.args) {
          if (!providedArgs.has(argDef.name) && isRequiredArgument(argDef)) {
            const argTypeStr = inspect(argDef.type);
            context.reportError(
              new GraphQLError(
                `Field "${fieldDef.name}" argument "${argDef.name}" of type "${argTypeStr}" is required, but it was not provided.`,
                {
                  nodes: fieldNode
                }
              )
            );
          }
        }
      }
    }
  };
}
function ProvidedRequiredArgumentsOnDirectivesRule(context) {
  var _schema$getDirectives;
  const requiredArgsMap = /* @__PURE__ */ Object.create(null);
  const schema = context.getSchema();
  const definedDirectives = (_schema$getDirectives = schema === null || schema === void 0 ? void 0 : schema.getDirectives()) !== null && _schema$getDirectives !== void 0 ? _schema$getDirectives : specifiedDirectives;
  for (const directive of definedDirectives) {
    requiredArgsMap[directive.name] = keyMap(
      directive.args.filter(isRequiredArgument),
      (arg) => arg.name
    );
  }
  const astDefinitions = context.getDocument().definitions;
  for (const def of astDefinitions) {
    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      var _def$arguments;
      const argNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
      requiredArgsMap[def.name.value] = keyMap(
        argNodes.filter(isRequiredArgumentNode),
        (arg) => arg.name.value
      );
    }
  }
  return {
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave(directiveNode) {
        const directiveName = directiveNode.name.value;
        const requiredArgs = requiredArgsMap[directiveName];
        if (requiredArgs) {
          var _directiveNode$argume;
          const argNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
          const argNodeMap = new Set(argNodes.map((arg) => arg.name.value));
          for (const [argName, argDef] of Object.entries(requiredArgs)) {
            if (!argNodeMap.has(argName)) {
              const argType = isType(argDef.type) ? inspect(argDef.type) : print(argDef.type);
              context.reportError(
                new GraphQLError(
                  `Directive "@${directiveName}" argument "${argName}" of type "${argType}" is required, but it was not provided.`,
                  {
                    nodes: directiveNode
                  }
                )
              );
            }
          }
        }
      }
    }
  };
}
function isRequiredArgumentNode(arg) {
  return arg.type.kind === Kind.NON_NULL_TYPE && arg.defaultValue == null;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/ScalarLeafsRule.mjs
function ScalarLeafsRule(context) {
  return {
    Field(node) {
      const type = context.getType();
      const selectionSet = node.selectionSet;
      if (type) {
        if (isLeafType(getNamedType(type))) {
          if (selectionSet) {
            const fieldName = node.name.value;
            const typeStr = inspect(type);
            context.reportError(
              new GraphQLError(
                `Field "${fieldName}" must not have a selection since type "${typeStr}" has no subfields.`,
                {
                  nodes: selectionSet
                }
              )
            );
          }
        } else if (!selectionSet) {
          const fieldName = node.name.value;
          const typeStr = inspect(type);
          context.reportError(
            new GraphQLError(
              `Field "${fieldName}" of type "${typeStr}" must have a selection of subfields. Did you mean "${fieldName} { ... }"?`,
              {
                nodes: node
              }
            )
          );
        } else if (selectionSet.selections.length === 0) {
          const fieldName = node.name.value;
          const typeStr = inspect(type);
          context.reportError(
            new GraphQLError(
              `Field "${fieldName}" of type "${typeStr}" must have at least one field selected.`,
              {
                nodes: node
              }
            )
          );
        }
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/utilities/valueFromAST.mjs
function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    return;
  }
  if (valueNode.kind === Kind.VARIABLE) {
    const variableName = valueNode.name.value;
    if (variables == null || variables[variableName] === void 0) {
      return;
    }
    const variableValue = variables[variableName];
    if (variableValue === null && isNonNullType(type)) {
      return;
    }
    return variableValue;
  }
  if (isNonNullType(type)) {
    if (valueNode.kind === Kind.NULL) {
      return;
    }
    return valueFromAST(valueNode, type.ofType, variables);
  }
  if (valueNode.kind === Kind.NULL) {
    return null;
  }
  if (isListType(type)) {
    const itemType = type.ofType;
    if (valueNode.kind === Kind.LIST) {
      const coercedValues = [];
      for (const itemNode of valueNode.values) {
        if (isMissingVariable(itemNode, variables)) {
          if (isNonNullType(itemType)) {
            return;
          }
          coercedValues.push(null);
        } else {
          const itemValue = valueFromAST(itemNode, itemType, variables);
          if (itemValue === void 0) {
            return;
          }
          coercedValues.push(itemValue);
        }
      }
      return coercedValues;
    }
    const coercedValue = valueFromAST(valueNode, itemType, variables);
    if (coercedValue === void 0) {
      return;
    }
    return [coercedValue];
  }
  if (isInputObjectType(type)) {
    if (valueNode.kind !== Kind.OBJECT) {
      return;
    }
    const coercedObj = /* @__PURE__ */ Object.create(null);
    const fieldNodes = keyMap(valueNode.fields, (field) => field.name.value);
    for (const field of Object.values(type.getFields())) {
      const fieldNode = fieldNodes[field.name];
      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (field.defaultValue !== void 0) {
          coercedObj[field.name] = field.defaultValue;
        } else if (isNonNullType(field.type)) {
          return;
        }
        continue;
      }
      const fieldValue = valueFromAST(fieldNode.value, field.type, variables);
      if (fieldValue === void 0) {
        return;
      }
      coercedObj[field.name] = fieldValue;
    }
    if (type.isOneOf) {
      const keys = Object.keys(coercedObj);
      if (keys.length !== 1) {
        return;
      }
      if (coercedObj[keys[0]] === null) {
        return;
      }
    }
    return coercedObj;
  }
  if (isLeafType(type)) {
    let result;
    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return;
    }
    if (result === void 0) {
      return;
    }
    return result;
  }
  invariant(false, "Unexpected input type: " + inspect(type));
}
function isMissingVariable(valueNode, variables) {
  return valueNode.kind === Kind.VARIABLE && (variables == null || variables[valueNode.name.value] === void 0);
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/execution/values.mjs
function getArgumentValues(def, node, variableValues) {
  var _node$arguments;
  const coercedValues = {};
  const argumentNodes = (_node$arguments = node.arguments) !== null && _node$arguments !== void 0 ? _node$arguments : [];
  const argNodeMap = keyMap(argumentNodes, (arg) => arg.name.value);
  for (const argDef of def.args) {
    const name = argDef.name;
    const argType = argDef.type;
    const argumentNode = argNodeMap[name];
    if (!argumentNode) {
      if (argDef.defaultValue !== void 0) {
        coercedValues[name] = argDef.defaultValue;
      } else if (isNonNullType(argType)) {
        throw new GraphQLError(
          `Argument "${name}" of required type "${inspect(argType)}" was not provided.`,
          {
            nodes: node
          }
        );
      }
      continue;
    }
    const valueNode = argumentNode.value;
    let isNull = valueNode.kind === Kind.NULL;
    if (valueNode.kind === Kind.VARIABLE) {
      const variableName = valueNode.name.value;
      if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
        if (argDef.defaultValue !== void 0) {
          coercedValues[name] = argDef.defaultValue;
        } else if (isNonNullType(argType)) {
          throw new GraphQLError(
            `Argument "${name}" of required type "${inspect(argType)}" was provided the variable "$${variableName}" which was not provided a runtime value.`,
            {
              nodes: valueNode
            }
          );
        }
        continue;
      }
      isNull = variableValues[variableName] == null;
    }
    if (isNull && isNonNullType(argType)) {
      throw new GraphQLError(
        `Argument "${name}" of non-null type "${inspect(argType)}" must not be null.`,
        {
          nodes: valueNode
        }
      );
    }
    const coercedValue = valueFromAST(valueNode, argType, variableValues);
    if (coercedValue === void 0) {
      throw new GraphQLError(
        `Argument "${name}" has invalid value ${print(valueNode)}.`,
        {
          nodes: valueNode
        }
      );
    }
    coercedValues[name] = coercedValue;
  }
  return coercedValues;
}
function getDirectiveValues(directiveDef, node, variableValues) {
  var _node$directives;
  const directiveNode = (_node$directives = node.directives) === null || _node$directives === void 0 ? void 0 : _node$directives.find(
    (directive) => directive.name.value === directiveDef.name
  );
  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/execution/collectFields.mjs
function collectFields(schema, fragments, variableValues, runtimeType, selectionSet) {
  const fields = /* @__PURE__ */ new Map();
  collectFieldsImpl(
    schema,
    fragments,
    variableValues,
    runtimeType,
    selectionSet,
    fields,
    /* @__PURE__ */ new Set()
  );
  return fields;
}
function collectFieldsImpl(schema, fragments, variableValues, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (const selection of selectionSet.selections) {
    switch (selection.kind) {
      case Kind.FIELD: {
        if (!shouldIncludeNode(variableValues, selection)) {
          continue;
        }
        const name = getFieldEntryKey(selection);
        const fieldList = fields.get(name);
        if (fieldList !== void 0) {
          fieldList.push(selection);
        } else {
          fields.set(name, [selection]);
        }
        break;
      }
      case Kind.INLINE_FRAGMENT: {
        if (!shouldIncludeNode(variableValues, selection) || !doesFragmentConditionMatch(schema, selection, runtimeType)) {
          continue;
        }
        collectFieldsImpl(
          schema,
          fragments,
          variableValues,
          runtimeType,
          selection.selectionSet,
          fields,
          visitedFragmentNames
        );
        break;
      }
      case Kind.FRAGMENT_SPREAD: {
        const fragName = selection.name.value;
        if (visitedFragmentNames.has(fragName) || !shouldIncludeNode(variableValues, selection)) {
          continue;
        }
        visitedFragmentNames.add(fragName);
        const fragment = fragments[fragName];
        if (!fragment || !doesFragmentConditionMatch(schema, fragment, runtimeType)) {
          continue;
        }
        collectFieldsImpl(
          schema,
          fragments,
          variableValues,
          runtimeType,
          fragment.selectionSet,
          fields,
          visitedFragmentNames
        );
        break;
      }
    }
  }
}
function shouldIncludeNode(variableValues, node) {
  const skip = getDirectiveValues(GraphQLSkipDirective, node, variableValues);
  if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
    return false;
  }
  const include = getDirectiveValues(
    GraphQLIncludeDirective,
    node,
    variableValues
  );
  if ((include === null || include === void 0 ? void 0 : include.if) === false) {
    return false;
  }
  return true;
}
function doesFragmentConditionMatch(schema, fragment, type) {
  const typeConditionNode = fragment.typeCondition;
  if (!typeConditionNode) {
    return true;
  }
  const conditionalType = typeFromAST(schema, typeConditionNode);
  if (conditionalType === type) {
    return true;
  }
  if (isAbstractType(conditionalType)) {
    return schema.isSubType(conditionalType, type);
  }
  return false;
}
function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs
function SingleFieldSubscriptionsRule(context) {
  return {
    OperationDefinition(node) {
      if (node.operation === "subscription") {
        const schema = context.getSchema();
        const subscriptionType = schema.getSubscriptionType();
        if (subscriptionType) {
          const operationName = node.name ? node.name.value : null;
          const variableValues = /* @__PURE__ */ Object.create(null);
          const document = context.getDocument();
          const fragments = /* @__PURE__ */ Object.create(null);
          for (const definition of document.definitions) {
            if (definition.kind === Kind.FRAGMENT_DEFINITION) {
              fragments[definition.name.value] = definition;
            }
          }
          const fields = collectFields(
            schema,
            fragments,
            variableValues,
            subscriptionType,
            node.selectionSet
          );
          if (fields.size > 1) {
            const fieldSelectionLists = [...fields.values()];
            const extraFieldSelectionLists = fieldSelectionLists.slice(1);
            const extraFieldSelections = extraFieldSelectionLists.flat();
            context.reportError(
              new GraphQLError(
                operationName != null ? `Subscription "${operationName}" must select only one top level field.` : "Anonymous Subscription must select only one top level field.",
                {
                  nodes: extraFieldSelections
                }
              )
            );
          }
          for (const fieldNodes of fields.values()) {
            const field = fieldNodes[0];
            const fieldName = field.name.value;
            if (fieldName.startsWith("__")) {
              context.reportError(
                new GraphQLError(
                  operationName != null ? `Subscription "${operationName}" must not select an introspection top level field.` : "Anonymous Subscription must not select an introspection top level field.",
                  {
                    nodes: fieldNodes
                  }
                )
              );
            }
          }
        }
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/jsutils/groupBy.mjs
function groupBy(list, keyFn) {
  const result = /* @__PURE__ */ new Map();
  for (const item of list) {
    const key = keyFn(item);
    const group = result.get(key);
    if (group === void 0) {
      result.set(key, [item]);
    } else {
      group.push(item);
    }
  }
  return result;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueArgumentDefinitionNamesRule.mjs
function UniqueArgumentDefinitionNamesRule(context) {
  return {
    DirectiveDefinition(directiveNode) {
      var _directiveNode$argume;
      const argumentNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];
      return checkArgUniqueness(`@${directiveNode.name.value}`, argumentNodes);
    },
    InterfaceTypeDefinition: checkArgUniquenessPerField,
    InterfaceTypeExtension: checkArgUniquenessPerField,
    ObjectTypeDefinition: checkArgUniquenessPerField,
    ObjectTypeExtension: checkArgUniquenessPerField
  };
  function checkArgUniquenessPerField(typeNode) {
    var _typeNode$fields;
    const typeName = typeNode.name.value;
    const fieldNodes = (_typeNode$fields = typeNode.fields) !== null && _typeNode$fields !== void 0 ? _typeNode$fields : [];
    for (const fieldDef of fieldNodes) {
      var _fieldDef$arguments;
      const fieldName = fieldDef.name.value;
      const argumentNodes = (_fieldDef$arguments = fieldDef.arguments) !== null && _fieldDef$arguments !== void 0 ? _fieldDef$arguments : [];
      checkArgUniqueness(`${typeName}.${fieldName}`, argumentNodes);
    }
    return false;
  }
  function checkArgUniqueness(parentName, argumentNodes) {
    const seenArgs = groupBy(argumentNodes, (arg) => arg.name.value);
    for (const [argName, argNodes] of seenArgs) {
      if (argNodes.length > 1) {
        context.reportError(
          new GraphQLError(
            `Argument "${parentName}(${argName}:)" can only be defined once.`,
            {
              nodes: argNodes.map((node) => node.name)
            }
          )
        );
      }
    }
    return false;
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs
function UniqueArgumentNamesRule(context) {
  return {
    Field: checkArgUniqueness,
    Directive: checkArgUniqueness
  };
  function checkArgUniqueness(parentNode) {
    var _parentNode$arguments;
    const argumentNodes = (_parentNode$arguments = parentNode.arguments) !== null && _parentNode$arguments !== void 0 ? _parentNode$arguments : [];
    const seenArgs = groupBy(argumentNodes, (arg) => arg.name.value);
    for (const [argName, argNodes] of seenArgs) {
      if (argNodes.length > 1) {
        context.reportError(
          new GraphQLError(
            `There can be only one argument named "${argName}".`,
            {
              nodes: argNodes.map((node) => node.name)
            }
          )
        );
      }
    }
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs
function UniqueDirectiveNamesRule(context) {
  const knownDirectiveNames = /* @__PURE__ */ Object.create(null);
  const schema = context.getSchema();
  return {
    DirectiveDefinition(node) {
      const directiveName = node.name.value;
      if (schema !== null && schema !== void 0 && schema.getDirective(directiveName)) {
        context.reportError(
          new GraphQLError(
            `Directive "@${directiveName}" already exists in the schema. It cannot be redefined.`,
            {
              nodes: node.name
            }
          )
        );
        return;
      }
      if (knownDirectiveNames[directiveName]) {
        context.reportError(
          new GraphQLError(
            `There can be only one directive named "@${directiveName}".`,
            {
              nodes: [knownDirectiveNames[directiveName], node.name]
            }
          )
        );
      } else {
        knownDirectiveNames[directiveName] = node.name;
      }
      return false;
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs
function UniqueDirectivesPerLocationRule(context) {
  const uniqueDirectiveMap = /* @__PURE__ */ Object.create(null);
  const schema = context.getSchema();
  const definedDirectives = schema ? schema.getDirectives() : specifiedDirectives;
  for (const directive of definedDirectives) {
    uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
  }
  const astDefinitions = context.getDocument().definitions;
  for (const def of astDefinitions) {
    if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      uniqueDirectiveMap[def.name.value] = !def.repeatable;
    }
  }
  const schemaDirectives = /* @__PURE__ */ Object.create(null);
  const typeDirectivesMap = /* @__PURE__ */ Object.create(null);
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter(node) {
      if (!("directives" in node) || !node.directives) {
        return;
      }
      let seenDirectives;
      if (node.kind === Kind.SCHEMA_DEFINITION || node.kind === Kind.SCHEMA_EXTENSION) {
        seenDirectives = schemaDirectives;
      } else if (isTypeDefinitionNode(node) || isTypeExtensionNode(node)) {
        const typeName = node.name.value;
        seenDirectives = typeDirectivesMap[typeName];
        if (seenDirectives === void 0) {
          typeDirectivesMap[typeName] = seenDirectives = /* @__PURE__ */ Object.create(null);
        }
      } else {
        seenDirectives = /* @__PURE__ */ Object.create(null);
      }
      for (const directive of node.directives) {
        const directiveName = directive.name.value;
        if (uniqueDirectiveMap[directiveName]) {
          if (seenDirectives[directiveName]) {
            context.reportError(
              new GraphQLError(
                `The directive "@${directiveName}" can only be used once at this location.`,
                {
                  nodes: [seenDirectives[directiveName], directive]
                }
              )
            );
          } else {
            seenDirectives[directiveName] = directive;
          }
        }
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs
function UniqueEnumValueNamesRule(context) {
  const schema = context.getSchema();
  const existingTypeMap = schema ? schema.getTypeMap() : /* @__PURE__ */ Object.create(null);
  const knownValueNames = /* @__PURE__ */ Object.create(null);
  return {
    EnumTypeDefinition: checkValueUniqueness,
    EnumTypeExtension: checkValueUniqueness
  };
  function checkValueUniqueness(node) {
    var _node$values;
    const typeName = node.name.value;
    if (!knownValueNames[typeName]) {
      knownValueNames[typeName] = /* @__PURE__ */ Object.create(null);
    }
    const valueNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
    const valueNames = knownValueNames[typeName];
    for (const valueDef of valueNodes) {
      const valueName = valueDef.name.value;
      const existingType = existingTypeMap[typeName];
      if (isEnumType(existingType) && existingType.getValue(valueName)) {
        context.reportError(
          new GraphQLError(
            `Enum value "${typeName}.${valueName}" already exists in the schema. It cannot also be defined in this type extension.`,
            {
              nodes: valueDef.name
            }
          )
        );
      } else if (valueNames[valueName]) {
        context.reportError(
          new GraphQLError(
            `Enum value "${typeName}.${valueName}" can only be defined once.`,
            {
              nodes: [valueNames[valueName], valueDef.name]
            }
          )
        );
      } else {
        valueNames[valueName] = valueDef.name;
      }
    }
    return false;
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs
function UniqueFieldDefinitionNamesRule(context) {
  const schema = context.getSchema();
  const existingTypeMap = schema ? schema.getTypeMap() : /* @__PURE__ */ Object.create(null);
  const knownFieldNames = /* @__PURE__ */ Object.create(null);
  return {
    InputObjectTypeDefinition: checkFieldUniqueness,
    InputObjectTypeExtension: checkFieldUniqueness,
    InterfaceTypeDefinition: checkFieldUniqueness,
    InterfaceTypeExtension: checkFieldUniqueness,
    ObjectTypeDefinition: checkFieldUniqueness,
    ObjectTypeExtension: checkFieldUniqueness
  };
  function checkFieldUniqueness(node) {
    var _node$fields;
    const typeName = node.name.value;
    if (!knownFieldNames[typeName]) {
      knownFieldNames[typeName] = /* @__PURE__ */ Object.create(null);
    }
    const fieldNodes = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
    const fieldNames = knownFieldNames[typeName];
    for (const fieldDef of fieldNodes) {
      const fieldName = fieldDef.name.value;
      if (hasField(existingTypeMap[typeName], fieldName)) {
        context.reportError(
          new GraphQLError(
            `Field "${typeName}.${fieldName}" already exists in the schema. It cannot also be defined in this type extension.`,
            {
              nodes: fieldDef.name
            }
          )
        );
      } else if (fieldNames[fieldName]) {
        context.reportError(
          new GraphQLError(
            `Field "${typeName}.${fieldName}" can only be defined once.`,
            {
              nodes: [fieldNames[fieldName], fieldDef.name]
            }
          )
        );
      } else {
        fieldNames[fieldName] = fieldDef.name;
      }
    }
    return false;
  }
}
function hasField(type, fieldName) {
  if (isObjectType(type) || isInterfaceType(type) || isInputObjectType(type)) {
    return type.getFields()[fieldName] != null;
  }
  return false;
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs
function UniqueFragmentNamesRule(context) {
  const knownFragmentNames = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: () => false,
    FragmentDefinition(node) {
      const fragmentName = node.name.value;
      if (knownFragmentNames[fragmentName]) {
        context.reportError(
          new GraphQLError(
            `There can be only one fragment named "${fragmentName}".`,
            {
              nodes: [knownFragmentNames[fragmentName], node.name]
            }
          )
        );
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }
      return false;
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs
function UniqueInputFieldNamesRule(context) {
  const knownNameStack = [];
  let knownNames = /* @__PURE__ */ Object.create(null);
  return {
    ObjectValue: {
      enter() {
        knownNameStack.push(knownNames);
        knownNames = /* @__PURE__ */ Object.create(null);
      },
      leave() {
        const prevKnownNames = knownNameStack.pop();
        prevKnownNames || invariant(false);
        knownNames = prevKnownNames;
      }
    },
    ObjectField(node) {
      const fieldName = node.name.value;
      if (knownNames[fieldName]) {
        context.reportError(
          new GraphQLError(
            `There can be only one input field named "${fieldName}".`,
            {
              nodes: [knownNames[fieldName], node.name]
            }
          )
        );
      } else {
        knownNames[fieldName] = node.name;
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs
function UniqueOperationNamesRule(context) {
  const knownOperationNames = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition(node) {
      const operationName = node.name;
      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(
            new GraphQLError(
              `There can be only one operation named "${operationName.value}".`,
              {
                nodes: [
                  knownOperationNames[operationName.value],
                  operationName
                ]
              }
            )
          );
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }
      return false;
    },
    FragmentDefinition: () => false
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs
function UniqueOperationTypesRule(context) {
  const schema = context.getSchema();
  const definedOperationTypes = /* @__PURE__ */ Object.create(null);
  const existingOperationTypes = schema ? {
    query: schema.getQueryType(),
    mutation: schema.getMutationType(),
    subscription: schema.getSubscriptionType()
  } : {};
  return {
    SchemaDefinition: checkOperationTypes,
    SchemaExtension: checkOperationTypes
  };
  function checkOperationTypes(node) {
    var _node$operationTypes;
    const operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];
    for (const operationType of operationTypesNodes) {
      const operation = operationType.operation;
      const alreadyDefinedOperationType = definedOperationTypes[operation];
      if (existingOperationTypes[operation]) {
        context.reportError(
          new GraphQLError(
            `Type for ${operation} already defined in the schema. It cannot be redefined.`,
            {
              nodes: operationType
            }
          )
        );
      } else if (alreadyDefinedOperationType) {
        context.reportError(
          new GraphQLError(
            `There can be only one ${operation} type in schema.`,
            {
              nodes: [alreadyDefinedOperationType, operationType]
            }
          )
        );
      } else {
        definedOperationTypes[operation] = operationType;
      }
    }
    return false;
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs
function UniqueTypeNamesRule(context) {
  const knownTypeNames = /* @__PURE__ */ Object.create(null);
  const schema = context.getSchema();
  return {
    ScalarTypeDefinition: checkTypeName,
    ObjectTypeDefinition: checkTypeName,
    InterfaceTypeDefinition: checkTypeName,
    UnionTypeDefinition: checkTypeName,
    EnumTypeDefinition: checkTypeName,
    InputObjectTypeDefinition: checkTypeName
  };
  function checkTypeName(node) {
    const typeName = node.name.value;
    if (schema !== null && schema !== void 0 && schema.getType(typeName)) {
      context.reportError(
        new GraphQLError(
          `Type "${typeName}" already exists in the schema. It cannot also be defined in this type definition.`,
          {
            nodes: node.name
          }
        )
      );
      return;
    }
    if (knownTypeNames[typeName]) {
      context.reportError(
        new GraphQLError(`There can be only one type named "${typeName}".`, {
          nodes: [knownTypeNames[typeName], node.name]
        })
      );
    } else {
      knownTypeNames[typeName] = node.name;
    }
    return false;
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs
function UniqueVariableNamesRule(context) {
  return {
    OperationDefinition(operationNode) {
      var _operationNode$variab;
      const variableDefinitions = (_operationNode$variab = operationNode.variableDefinitions) !== null && _operationNode$variab !== void 0 ? _operationNode$variab : [];
      const seenVariableDefinitions = groupBy(
        variableDefinitions,
        (node) => node.variable.name.value
      );
      for (const [variableName, variableNodes] of seenVariableDefinitions) {
        if (variableNodes.length > 1) {
          context.reportError(
            new GraphQLError(
              `There can be only one variable named "$${variableName}".`,
              {
                nodes: variableNodes.map((node) => node.variable.name)
              }
            )
          );
        }
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs
function ValuesOfCorrectTypeRule(context) {
  let variableDefinitions = {};
  return {
    OperationDefinition: {
      enter() {
        variableDefinitions = {};
      }
    },
    VariableDefinition(definition) {
      variableDefinitions[definition.variable.name.value] = definition;
    },
    ListValue(node) {
      const type = getNullableType(context.getParentInputType());
      if (!isListType(type)) {
        isValidValueNode(context, node);
        return false;
      }
    },
    ObjectValue(node) {
      const type = getNamedType(context.getInputType());
      if (!isInputObjectType(type)) {
        isValidValueNode(context, node);
        return false;
      }
      const fieldNodeMap = keyMap(node.fields, (field) => field.name.value);
      for (const fieldDef of Object.values(type.getFields())) {
        const fieldNode = fieldNodeMap[fieldDef.name];
        if (!fieldNode && isRequiredInputField(fieldDef)) {
          const typeStr = inspect(fieldDef.type);
          context.reportError(
            new GraphQLError(
              `Field "${type.name}.${fieldDef.name}" of required type "${typeStr}" was not provided.`,
              {
                nodes: node
              }
            )
          );
        }
      }
      if (type.isOneOf) {
        validateOneOfInputObject(
          context,
          node,
          type,
          fieldNodeMap,
          variableDefinitions
        );
      }
    },
    ObjectField(node) {
      const parentType = getNamedType(context.getParentInputType());
      const fieldType = context.getInputType();
      if (!fieldType && isInputObjectType(parentType)) {
        const suggestions = suggestionList(
          node.name.value,
          Object.keys(parentType.getFields())
        );
        context.reportError(
          new GraphQLError(
            `Field "${node.name.value}" is not defined by type "${parentType.name}".` + didYouMean(suggestions),
            {
              nodes: node
            }
          )
        );
      }
    },
    NullValue(node) {
      const type = context.getInputType();
      if (isNonNullType(type)) {
        context.reportError(
          new GraphQLError(
            `Expected value of type "${inspect(type)}", found ${print(node)}.`,
            {
              nodes: node
            }
          )
        );
      }
    },
    EnumValue: (node) => isValidValueNode(context, node),
    IntValue: (node) => isValidValueNode(context, node),
    FloatValue: (node) => isValidValueNode(context, node),
    StringValue: (node) => isValidValueNode(context, node),
    BooleanValue: (node) => isValidValueNode(context, node)
  };
}
function isValidValueNode(context, node) {
  const locationType = context.getInputType();
  if (!locationType) {
    return;
  }
  const type = getNamedType(locationType);
  if (!isLeafType(type)) {
    const typeStr = inspect(locationType);
    context.reportError(
      new GraphQLError(
        `Expected value of type "${typeStr}", found ${print(node)}.`,
        {
          nodes: node
        }
      )
    );
    return;
  }
  try {
    const parseResult = type.parseLiteral(
      node,
      void 0
      /* variables */
    );
    if (parseResult === void 0) {
      const typeStr = inspect(locationType);
      context.reportError(
        new GraphQLError(
          `Expected value of type "${typeStr}", found ${print(node)}.`,
          {
            nodes: node
          }
        )
      );
    }
  } catch (error) {
    const typeStr = inspect(locationType);
    if (error instanceof GraphQLError) {
      context.reportError(error);
    } else {
      context.reportError(
        new GraphQLError(
          `Expected value of type "${typeStr}", found ${print(node)}; ` + error.message,
          {
            nodes: node,
            originalError: error
          }
        )
      );
    }
  }
}
function validateOneOfInputObject(context, node, type, fieldNodeMap, variableDefinitions) {
  var _fieldNodeMap$keys$;
  const keys = Object.keys(fieldNodeMap);
  const isNotExactlyOneField = keys.length !== 1;
  if (isNotExactlyOneField) {
    context.reportError(
      new GraphQLError(
        `OneOf Input Object "${type.name}" must specify exactly one key.`,
        {
          nodes: [node]
        }
      )
    );
    return;
  }
  const value = (_fieldNodeMap$keys$ = fieldNodeMap[keys[0]]) === null || _fieldNodeMap$keys$ === void 0 ? void 0 : _fieldNodeMap$keys$.value;
  const isNullLiteral = !value || value.kind === Kind.NULL;
  const isVariable = (value === null || value === void 0 ? void 0 : value.kind) === Kind.VARIABLE;
  if (isNullLiteral) {
    context.reportError(
      new GraphQLError(`Field "${type.name}.${keys[0]}" must be non-null.`, {
        nodes: [node]
      })
    );
    return;
  }
  if (isVariable) {
    const variableName = value.name.value;
    const definition = variableDefinitions[variableName];
    const isNullableVariable = definition.type.kind !== Kind.NON_NULL_TYPE;
    if (isNullableVariable) {
      context.reportError(
        new GraphQLError(
          `Variable "${variableName}" must be non-nullable to be used for OneOf Input Object "${type.name}".`,
          {
            nodes: [node]
          }
        )
      );
    }
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs
function VariablesAreInputTypesRule(context) {
  return {
    VariableDefinition(node) {
      const type = typeFromAST(context.getSchema(), node.type);
      if (type !== void 0 && !isInputType(type)) {
        const variableName = node.variable.name.value;
        const typeName = print(node.type);
        context.reportError(
          new GraphQLError(
            `Variable "$${variableName}" cannot be non-input type "${typeName}".`,
            {
              nodes: node.type
            }
          )
        );
      }
    }
  };
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs
function VariablesInAllowedPositionRule(context) {
  let varDefMap = /* @__PURE__ */ Object.create(null);
  return {
    OperationDefinition: {
      enter() {
        varDefMap = /* @__PURE__ */ Object.create(null);
      },
      leave(operation) {
        const usages = context.getRecursiveVariableUsages(operation);
        for (const { node, type, defaultValue } of usages) {
          const varName = node.name.value;
          const varDef = varDefMap[varName];
          if (varDef && type) {
            const schema = context.getSchema();
            const varType = typeFromAST(schema, varDef.type);
            if (varType && !allowedVariableUsage(
              schema,
              varType,
              varDef.defaultValue,
              type,
              defaultValue
            )) {
              const varTypeStr = inspect(varType);
              const typeStr = inspect(type);
              context.reportError(
                new GraphQLError(
                  `Variable "$${varName}" of type "${varTypeStr}" used in position expecting type "${typeStr}".`,
                  {
                    nodes: [varDef, node]
                  }
                )
              );
            }
          }
        }
      }
    },
    VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}
function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
  if (isNonNullType(locationType) && !isNonNullType(varType)) {
    const hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== Kind.NULL;
    const hasLocationDefaultValue = locationDefaultValue !== void 0;
    if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
      return false;
    }
    const nullableLocationType = locationType.ofType;
    return isTypeSubTypeOf(schema, varType, nullableLocationType);
  }
  return isTypeSubTypeOf(schema, varType, locationType);
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/specifiedRules.mjs
var recommendedRules = Object.freeze([MaxIntrospectionDepthRule]);
var specifiedRules = Object.freeze([
  ExecutableDefinitionsRule,
  UniqueOperationNamesRule,
  LoneAnonymousOperationRule,
  SingleFieldSubscriptionsRule,
  KnownTypeNamesRule,
  FragmentsOnCompositeTypesRule,
  VariablesAreInputTypesRule,
  ScalarLeafsRule,
  FieldsOnCorrectTypeRule,
  UniqueFragmentNamesRule,
  KnownFragmentNamesRule,
  NoUnusedFragmentsRule,
  PossibleFragmentSpreadsRule,
  NoFragmentCyclesRule,
  UniqueVariableNamesRule,
  NoUndefinedVariablesRule,
  NoUnusedVariablesRule,
  KnownDirectivesRule,
  UniqueDirectivesPerLocationRule,
  KnownArgumentNamesRule,
  UniqueArgumentNamesRule,
  ValuesOfCorrectTypeRule,
  ProvidedRequiredArgumentsRule,
  VariablesInAllowedPositionRule,
  OverlappingFieldsCanBeMergedRule,
  UniqueInputFieldNamesRule,
  ...recommendedRules
]);
var specifiedSDLRules = Object.freeze([
  LoneSchemaDefinitionRule,
  UniqueOperationTypesRule,
  UniqueTypeNamesRule,
  UniqueEnumValueNamesRule,
  UniqueFieldDefinitionNamesRule,
  UniqueArgumentDefinitionNamesRule,
  UniqueDirectiveNamesRule,
  KnownTypeNamesRule,
  KnownDirectivesRule,
  UniqueDirectivesPerLocationRule,
  PossibleTypeExtensionsRule,
  KnownArgumentNamesOnDirectivesRule,
  UniqueArgumentNamesRule,
  UniqueInputFieldNamesRule,
  ProvidedRequiredArgumentsOnDirectivesRule
]);

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/ValidationContext.mjs
var ASTValidationContext = class {
  constructor(ast, onError) {
    this._ast = ast;
    this._fragments = void 0;
    this._fragmentSpreads = /* @__PURE__ */ new Map();
    this._recursivelyReferencedFragments = /* @__PURE__ */ new Map();
    this._onError = onError;
  }
  get [Symbol.toStringTag]() {
    return "ASTValidationContext";
  }
  reportError(error) {
    this._onError(error);
  }
  getDocument() {
    return this._ast;
  }
  getFragment(name) {
    let fragments;
    if (this._fragments) {
      fragments = this._fragments;
    } else {
      fragments = /* @__PURE__ */ Object.create(null);
      for (const defNode of this.getDocument().definitions) {
        if (defNode.kind === Kind.FRAGMENT_DEFINITION) {
          fragments[defNode.name.value] = defNode;
        }
      }
      this._fragments = fragments;
    }
    return fragments[name];
  }
  getFragmentSpreads(node) {
    let spreads = this._fragmentSpreads.get(node);
    if (!spreads) {
      spreads = [];
      const setsToVisit = [node];
      let set;
      while (set = setsToVisit.pop()) {
        for (const selection of set.selections) {
          if (selection.kind === Kind.FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }
      this._fragmentSpreads.set(node, spreads);
    }
    return spreads;
  }
  getRecursivelyReferencedFragments(operation) {
    let fragments = this._recursivelyReferencedFragments.get(operation);
    if (!fragments) {
      fragments = [];
      const collectedNames = /* @__PURE__ */ Object.create(null);
      const nodesToVisit = [operation.selectionSet];
      let node;
      while (node = nodesToVisit.pop()) {
        for (const spread of this.getFragmentSpreads(node)) {
          const fragName = spread.name.value;
          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            const fragment = this.getFragment(fragName);
            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }
      this._recursivelyReferencedFragments.set(operation, fragments);
    }
    return fragments;
  }
};
var SDLValidationContext = class extends ASTValidationContext {
  constructor(ast, schema, onError) {
    super(ast, onError);
    this._schema = schema;
  }
  get [Symbol.toStringTag]() {
    return "SDLValidationContext";
  }
  getSchema() {
    return this._schema;
  }
};

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/validation/validate.mjs
function validateSDL(documentAST, schemaToExtend, rules = specifiedSDLRules) {
  const errors = [];
  const context = new SDLValidationContext(
    documentAST,
    schemaToExtend,
    (error) => {
      errors.push(error);
    }
  );
  const visitors = rules.map((rule) => rule(context));
  visit(documentAST, visitInParallel(visitors));
  return errors;
}
function assertValidSDL(documentAST) {
  const errors = validateSDL(documentAST);
  if (errors.length !== 0) {
    throw new Error(errors.map((error) => error.message).join("\n\n"));
  }
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/utilities/extendSchema.mjs
function extendSchemaImpl(schemaConfig, documentAST, options) {
  var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;
  const typeDefs = [];
  const typeExtensionsMap = /* @__PURE__ */ Object.create(null);
  const directiveDefs = [];
  let schemaDef;
  const schemaExtensions = [];
  for (const def of documentAST.definitions) {
    if (def.kind === Kind.SCHEMA_DEFINITION) {
      schemaDef = def;
    } else if (def.kind === Kind.SCHEMA_EXTENSION) {
      schemaExtensions.push(def);
    } else if (isTypeDefinitionNode(def)) {
      typeDefs.push(def);
    } else if (isTypeExtensionNode(def)) {
      const extendedTypeName = def.name.value;
      const existingTypeExtensions = typeExtensionsMap[extendedTypeName];
      typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([def]) : [def];
    } else if (def.kind === Kind.DIRECTIVE_DEFINITION) {
      directiveDefs.push(def);
    }
  }
  if (Object.keys(typeExtensionsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExtensions.length === 0 && schemaDef == null) {
    return schemaConfig;
  }
  const typeMap = /* @__PURE__ */ Object.create(null);
  for (const existingType of schemaConfig.types) {
    typeMap[existingType.name] = extendNamedType(existingType);
  }
  for (const typeNode of typeDefs) {
    var _stdTypeMap$name;
    const name = typeNode.name.value;
    typeMap[name] = (_stdTypeMap$name = stdTypeMap[name]) !== null && _stdTypeMap$name !== void 0 ? _stdTypeMap$name : buildType(typeNode);
  }
  const operationTypes = {
    // Get the extended root operation types.
    query: schemaConfig.query && replaceNamedType(schemaConfig.query),
    mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
    subscription: schemaConfig.subscription && replaceNamedType(schemaConfig.subscription),
    // Then, incorporate schema definition and all schema extensions.
    ...schemaDef && getOperationTypes([schemaDef]),
    ...getOperationTypes(schemaExtensions)
  };
  return {
    description: (_schemaDef = schemaDef) === null || _schemaDef === void 0 ? void 0 : (_schemaDef$descriptio = _schemaDef.description) === null || _schemaDef$descriptio === void 0 ? void 0 : _schemaDef$descriptio.value,
    ...operationTypes,
    types: Object.values(typeMap),
    directives: [
      ...schemaConfig.directives.map(replaceDirective),
      ...directiveDefs.map(buildDirective)
    ],
    extensions: /* @__PURE__ */ Object.create(null),
    astNode: (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0 ? _schemaDef2 : schemaConfig.astNode,
    extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
    assumeValid: (_options$assumeValid = options === null || options === void 0 ? void 0 : options.assumeValid) !== null && _options$assumeValid !== void 0 ? _options$assumeValid : false
  };
  function replaceType(type) {
    if (isListType(type)) {
      return new GraphQLList(replaceType(type.ofType));
    }
    if (isNonNullType(type)) {
      return new GraphQLNonNull(replaceType(type.ofType));
    }
    return replaceNamedType(type);
  }
  function replaceNamedType(type) {
    return typeMap[type.name];
  }
  function replaceDirective(directive) {
    const config = directive.toConfig();
    return new GraphQLDirective({
      ...config,
      args: mapValue(config.args, extendArg)
    });
  }
  function extendNamedType(type) {
    if (isIntrospectionType(type) || isSpecifiedScalarType(type)) {
      return type;
    }
    if (isScalarType(type)) {
      return extendScalarType(type);
    }
    if (isObjectType(type)) {
      return extendObjectType(type);
    }
    if (isInterfaceType(type)) {
      return extendInterfaceType(type);
    }
    if (isUnionType(type)) {
      return extendUnionType(type);
    }
    if (isEnumType(type)) {
      return extendEnumType(type);
    }
    if (isInputObjectType(type)) {
      return extendInputObjectType(type);
    }
    invariant(false, "Unexpected type: " + inspect(type));
  }
  function extendInputObjectType(type) {
    var _typeExtensionsMap$co;
    const config = type.toConfig();
    const extensions = (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co !== void 0 ? _typeExtensionsMap$co : [];
    return new GraphQLInputObjectType({
      ...config,
      fields: () => ({
        ...mapValue(config.fields, (field) => ({
          ...field,
          type: replaceType(field.type)
        })),
        ...buildInputFieldMap(extensions)
      }),
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    });
  }
  function extendEnumType(type) {
    var _typeExtensionsMap$ty;
    const config = type.toConfig();
    const extensions = (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null && _typeExtensionsMap$ty !== void 0 ? _typeExtensionsMap$ty : [];
    return new GraphQLEnumType({
      ...config,
      values: { ...config.values, ...buildEnumValueMap(extensions) },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    });
  }
  function extendScalarType(type) {
    var _typeExtensionsMap$co2;
    const config = type.toConfig();
    const extensions = (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co2 !== void 0 ? _typeExtensionsMap$co2 : [];
    let specifiedByURL = config.specifiedByURL;
    for (const extensionNode of extensions) {
      var _getSpecifiedByURL;
      specifiedByURL = (_getSpecifiedByURL = getSpecifiedByURL(extensionNode)) !== null && _getSpecifiedByURL !== void 0 ? _getSpecifiedByURL : specifiedByURL;
    }
    return new GraphQLScalarType({
      ...config,
      specifiedByURL,
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    });
  }
  function extendObjectType(type) {
    var _typeExtensionsMap$co3;
    const config = type.toConfig();
    const extensions = (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co3 !== void 0 ? _typeExtensionsMap$co3 : [];
    return new GraphQLObjectType({
      ...config,
      interfaces: () => [
        ...type.getInterfaces().map(replaceNamedType),
        ...buildInterfaces(extensions)
      ],
      fields: () => ({
        ...mapValue(config.fields, extendField),
        ...buildFieldMap(extensions)
      }),
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    });
  }
  function extendInterfaceType(type) {
    var _typeExtensionsMap$co4;
    const config = type.toConfig();
    const extensions = (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co4 !== void 0 ? _typeExtensionsMap$co4 : [];
    return new GraphQLInterfaceType({
      ...config,
      interfaces: () => [
        ...type.getInterfaces().map(replaceNamedType),
        ...buildInterfaces(extensions)
      ],
      fields: () => ({
        ...mapValue(config.fields, extendField),
        ...buildFieldMap(extensions)
      }),
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    });
  }
  function extendUnionType(type) {
    var _typeExtensionsMap$co5;
    const config = type.toConfig();
    const extensions = (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co5 !== void 0 ? _typeExtensionsMap$co5 : [];
    return new GraphQLUnionType({
      ...config,
      types: () => [
        ...type.getTypes().map(replaceNamedType),
        ...buildUnionTypes(extensions)
      ],
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    });
  }
  function extendField(field) {
    return {
      ...field,
      type: replaceType(field.type),
      args: field.args && mapValue(field.args, extendArg)
    };
  }
  function extendArg(arg) {
    return { ...arg, type: replaceType(arg.type) };
  }
  function getOperationTypes(nodes) {
    const opTypes = {};
    for (const node of nodes) {
      var _node$operationTypes;
      const operationTypesNodes = (
        /* c8 ignore next */
        (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : []
      );
      for (const operationType of operationTypesNodes) {
        opTypes[operationType.operation] = getNamedType2(operationType.type);
      }
    }
    return opTypes;
  }
  function getNamedType2(node) {
    var _stdTypeMap$name2;
    const name = node.name.value;
    const type = (_stdTypeMap$name2 = stdTypeMap[name]) !== null && _stdTypeMap$name2 !== void 0 ? _stdTypeMap$name2 : typeMap[name];
    if (type === void 0) {
      throw new Error(`Unknown type: "${name}".`);
    }
    return type;
  }
  function getWrappedType(node) {
    if (node.kind === Kind.LIST_TYPE) {
      return new GraphQLList(getWrappedType(node.type));
    }
    if (node.kind === Kind.NON_NULL_TYPE) {
      return new GraphQLNonNull(getWrappedType(node.type));
    }
    return getNamedType2(node);
  }
  function buildDirective(node) {
    var _node$description;
    return new GraphQLDirective({
      name: node.name.value,
      description: (_node$description = node.description) === null || _node$description === void 0 ? void 0 : _node$description.value,
      // @ts-expect-error
      locations: node.locations.map(({ value }) => value),
      isRepeatable: node.repeatable,
      args: buildArgumentMap(node.arguments),
      astNode: node
    });
  }
  function buildFieldMap(nodes) {
    const fieldConfigMap = /* @__PURE__ */ Object.create(null);
    for (const node of nodes) {
      var _node$fields;
      const nodeFields = (
        /* c8 ignore next */
        (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : []
      );
      for (const field of nodeFields) {
        var _field$description;
        fieldConfigMap[field.name.value] = {
          // Note: While this could make assertions to get the correctly typed
          // value, that would throw immediately while type system validation
          // with validateSchema() will produce more actionable results.
          type: getWrappedType(field.type),
          description: (_field$description = field.description) === null || _field$description === void 0 ? void 0 : _field$description.value,
          args: buildArgumentMap(field.arguments),
          deprecationReason: getDeprecationReason(field),
          astNode: field
        };
      }
    }
    return fieldConfigMap;
  }
  function buildArgumentMap(args) {
    const argsNodes = (
      /* c8 ignore next */
      args !== null && args !== void 0 ? args : []
    );
    const argConfigMap = /* @__PURE__ */ Object.create(null);
    for (const arg of argsNodes) {
      var _arg$description;
      const type = getWrappedType(arg.type);
      argConfigMap[arg.name.value] = {
        type,
        description: (_arg$description = arg.description) === null || _arg$description === void 0 ? void 0 : _arg$description.value,
        defaultValue: valueFromAST(arg.defaultValue, type),
        deprecationReason: getDeprecationReason(arg),
        astNode: arg
      };
    }
    return argConfigMap;
  }
  function buildInputFieldMap(nodes) {
    const inputFieldMap = /* @__PURE__ */ Object.create(null);
    for (const node of nodes) {
      var _node$fields2;
      const fieldsNodes = (
        /* c8 ignore next */
        (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0 ? _node$fields2 : []
      );
      for (const field of fieldsNodes) {
        var _field$description2;
        const type = getWrappedType(field.type);
        inputFieldMap[field.name.value] = {
          type,
          description: (_field$description2 = field.description) === null || _field$description2 === void 0 ? void 0 : _field$description2.value,
          defaultValue: valueFromAST(field.defaultValue, type),
          deprecationReason: getDeprecationReason(field),
          astNode: field
        };
      }
    }
    return inputFieldMap;
  }
  function buildEnumValueMap(nodes) {
    const enumValueMap = /* @__PURE__ */ Object.create(null);
    for (const node of nodes) {
      var _node$values;
      const valuesNodes = (
        /* c8 ignore next */
        (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : []
      );
      for (const value of valuesNodes) {
        var _value$description;
        enumValueMap[value.name.value] = {
          description: (_value$description = value.description) === null || _value$description === void 0 ? void 0 : _value$description.value,
          deprecationReason: getDeprecationReason(value),
          astNode: value
        };
      }
    }
    return enumValueMap;
  }
  function buildInterfaces(nodes) {
    return nodes.flatMap(
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      (node) => {
        var _node$interfaces$map, _node$interfaces;
        return (
          /* c8 ignore next */
          (_node$interfaces$map = (_node$interfaces = node.interfaces) === null || _node$interfaces === void 0 ? void 0 : _node$interfaces.map(getNamedType2)) !== null && _node$interfaces$map !== void 0 ? _node$interfaces$map : []
        );
      }
    );
  }
  function buildUnionTypes(nodes) {
    return nodes.flatMap(
      // FIXME: https://github.com/graphql/graphql-js/issues/2203
      (node) => {
        var _node$types$map, _node$types;
        return (
          /* c8 ignore next */
          (_node$types$map = (_node$types = node.types) === null || _node$types === void 0 ? void 0 : _node$types.map(getNamedType2)) !== null && _node$types$map !== void 0 ? _node$types$map : []
        );
      }
    );
  }
  function buildType(astNode) {
    var _typeExtensionsMap$na;
    const name = astNode.name.value;
    const extensionASTNodes = (_typeExtensionsMap$na = typeExtensionsMap[name]) !== null && _typeExtensionsMap$na !== void 0 ? _typeExtensionsMap$na : [];
    switch (astNode.kind) {
      case Kind.OBJECT_TYPE_DEFINITION: {
        var _astNode$description;
        const allNodes = [astNode, ...extensionASTNodes];
        return new GraphQLObjectType({
          name,
          description: (_astNode$description = astNode.description) === null || _astNode$description === void 0 ? void 0 : _astNode$description.value,
          interfaces: () => buildInterfaces(allNodes),
          fields: () => buildFieldMap(allNodes),
          astNode,
          extensionASTNodes
        });
      }
      case Kind.INTERFACE_TYPE_DEFINITION: {
        var _astNode$description2;
        const allNodes = [astNode, ...extensionASTNodes];
        return new GraphQLInterfaceType({
          name,
          description: (_astNode$description2 = astNode.description) === null || _astNode$description2 === void 0 ? void 0 : _astNode$description2.value,
          interfaces: () => buildInterfaces(allNodes),
          fields: () => buildFieldMap(allNodes),
          astNode,
          extensionASTNodes
        });
      }
      case Kind.ENUM_TYPE_DEFINITION: {
        var _astNode$description3;
        const allNodes = [astNode, ...extensionASTNodes];
        return new GraphQLEnumType({
          name,
          description: (_astNode$description3 = astNode.description) === null || _astNode$description3 === void 0 ? void 0 : _astNode$description3.value,
          values: buildEnumValueMap(allNodes),
          astNode,
          extensionASTNodes
        });
      }
      case Kind.UNION_TYPE_DEFINITION: {
        var _astNode$description4;
        const allNodes = [astNode, ...extensionASTNodes];
        return new GraphQLUnionType({
          name,
          description: (_astNode$description4 = astNode.description) === null || _astNode$description4 === void 0 ? void 0 : _astNode$description4.value,
          types: () => buildUnionTypes(allNodes),
          astNode,
          extensionASTNodes
        });
      }
      case Kind.SCALAR_TYPE_DEFINITION: {
        var _astNode$description5;
        return new GraphQLScalarType({
          name,
          description: (_astNode$description5 = astNode.description) === null || _astNode$description5 === void 0 ? void 0 : _astNode$description5.value,
          specifiedByURL: getSpecifiedByURL(astNode),
          astNode,
          extensionASTNodes
        });
      }
      case Kind.INPUT_OBJECT_TYPE_DEFINITION: {
        var _astNode$description6;
        const allNodes = [astNode, ...extensionASTNodes];
        return new GraphQLInputObjectType({
          name,
          description: (_astNode$description6 = astNode.description) === null || _astNode$description6 === void 0 ? void 0 : _astNode$description6.value,
          fields: () => buildInputFieldMap(allNodes),
          astNode,
          extensionASTNodes,
          isOneOf: isOneOf(astNode)
        });
      }
    }
  }
}
var stdTypeMap = keyMap(
  [...specifiedScalarTypes, ...introspectionTypes],
  (type) => type.name
);
function getDeprecationReason(node) {
  const deprecated = getDirectiveValues(GraphQLDeprecatedDirective, node);
  return deprecated === null || deprecated === void 0 ? void 0 : deprecated.reason;
}
function getSpecifiedByURL(node) {
  const specifiedBy = getDirectiveValues(GraphQLSpecifiedByDirective, node);
  return specifiedBy === null || specifiedBy === void 0 ? void 0 : specifiedBy.url;
}
function isOneOf(node) {
  return Boolean(getDirectiveValues(GraphQLOneOfDirective, node));
}

// node_modules/.pnpm/graphql@16.10.0/node_modules/graphql/utilities/buildASTSchema.mjs
function buildASTSchema(documentAST, options) {
  documentAST != null && documentAST.kind === Kind.DOCUMENT || devAssert(false, "Must provide valid Document AST.");
  if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
    assertValidSDL(documentAST);
  }
  const emptySchemaConfig = {
    description: void 0,
    types: [],
    directives: [],
    extensions: /* @__PURE__ */ Object.create(null),
    extensionASTNodes: [],
    assumeValid: false
  };
  const config = extendSchemaImpl(emptySchemaConfig, documentAST, options);
  if (config.astNode == null) {
    for (const type of config.types) {
      switch (type.name) {
        // Note: While this could make early assertions to get the correctly
        // typed values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable results.
        case "Query":
          config.query = type;
          break;
        case "Mutation":
          config.mutation = type;
          break;
        case "Subscription":
          config.subscription = type;
          break;
      }
    }
  }
  const directives = [
    ...config.directives,
    // If specified directives were not explicitly declared, add them.
    ...specifiedDirectives.filter(
      (stdDirective) => config.directives.every(
        (directive) => directive.name !== stdDirective.name
      )
    )
  ];
  return new GraphQLSchema({ ...config, directives });
}
function buildSchema(source, options) {
  const document = parse(source, {
    noLocation: options === null || options === void 0 ? void 0 : options.noLocation,
    allowLegacyFragmentVariables: options === null || options === void 0 ? void 0 : options.allowLegacyFragmentVariables
  });
  return buildASTSchema(document, {
    assumeValidSDL: options === null || options === void 0 ? void 0 : options.assumeValidSDL,
    assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
  });
}

// node_modules/.pnpm/graphql-request@6.1.0_encoding@0.1.13_graphql@16.10.0/node_modules/graphql-request/build/esm/defaultJsonSerializer.js
var defaultJsonSerializer = JSON;

// node_modules/.pnpm/graphql-request@6.1.0_encoding@0.1.13_graphql@16.10.0/node_modules/graphql-request/build/esm/helpers.js
var uppercase = (str) => str.toUpperCase();
var HeadersInstanceToPlainObject = (headers) => {
  const o = {};
  headers.forEach((v, k) => {
    o[k] = v;
  });
  return o;
};

// node_modules/.pnpm/graphql-request@6.1.0_encoding@0.1.13_graphql@16.10.0/node_modules/graphql-request/build/esm/parseArgs.js
var parseRequestArgs = (documentOrOptions, variables, requestHeaders) => {
  return documentOrOptions.document ? documentOrOptions : {
    document: documentOrOptions,
    variables,
    requestHeaders,
    signal: void 0
  };
};
var parseRawRequestArgs = (queryOrOptions, variables, requestHeaders) => {
  return queryOrOptions.query ? queryOrOptions : {
    query: queryOrOptions,
    variables,
    requestHeaders,
    signal: void 0
  };
};
var parseBatchRequestArgs = (documentsOrOptions, requestHeaders) => {
  return documentsOrOptions.documents ? documentsOrOptions : {
    documents: documentsOrOptions,
    requestHeaders,
    signal: void 0
  };
};

// node_modules/.pnpm/graphql-request@6.1.0_encoding@0.1.13_graphql@16.10.0/node_modules/graphql-request/build/esm/resolveRequestDocument.js
var extractOperationName = (document) => {
  let operationName = void 0;
  const operationDefinitions = document.definitions.filter((definition) => definition.kind === `OperationDefinition`);
  if (operationDefinitions.length === 1) {
    operationName = operationDefinitions[0]?.name?.value;
  }
  return operationName;
};
var resolveRequestDocument = (document) => {
  if (typeof document === `string`) {
    let operationName2 = void 0;
    try {
      const parsedDocument = parse(document);
      operationName2 = extractOperationName(parsedDocument);
    } catch (err) {
    }
    return { query: document, operationName: operationName2 };
  }
  const operationName = extractOperationName(document);
  return { query: print(document), operationName };
};

// node_modules/.pnpm/graphql-request@6.1.0_encoding@0.1.13_graphql@16.10.0/node_modules/graphql-request/build/esm/types.js
var ClientError = class _ClientError extends Error {
  constructor(response, request) {
    const message = `${_ClientError.extractMessage(response)}: ${JSON.stringify({
      response,
      request
    })}`;
    super(message);
    Object.setPrototypeOf(this, _ClientError.prototype);
    this.response = response;
    this.request = request;
    if (typeof Error.captureStackTrace === `function`) {
      Error.captureStackTrace(this, _ClientError);
    }
  }
  static extractMessage(response) {
    return response.errors?.[0]?.message ?? `GraphQL Error (Code: ${response.status})`;
  }
};

// node_modules/.pnpm/graphql-request@6.1.0_encoding@0.1.13_graphql@16.10.0/node_modules/graphql-request/build/esm/index.js
var CrossFetch = __toESM(require_browser_ponyfill(), 1);

// node_modules/.pnpm/graphql-request@6.1.0_encoding@0.1.13_graphql@16.10.0/node_modules/graphql-request/build/esm/graphql-ws.js
var CONNECTION_INIT = `connection_init`;
var CONNECTION_ACK = `connection_ack`;
var PING = `ping`;
var PONG = `pong`;
var SUBSCRIBE = `subscribe`;
var NEXT = `next`;
var ERROR = `error`;
var COMPLETE = `complete`;
var GraphQLWebSocketMessage = class _GraphQLWebSocketMessage {
  get type() {
    return this._type;
  }
  get id() {
    return this._id;
  }
  get payload() {
    return this._payload;
  }
  constructor(type, payload, id) {
    this._type = type;
    this._payload = payload;
    this._id = id;
  }
  get text() {
    const result = { type: this.type };
    if (this.id != null && this.id != void 0)
      result.id = this.id;
    if (this.payload != null && this.payload != void 0)
      result.payload = this.payload;
    return JSON.stringify(result);
  }
  static parse(data, f) {
    const { type, payload, id } = JSON.parse(data);
    return new _GraphQLWebSocketMessage(type, f(payload), id);
  }
};
var GraphQLWebSocketClient = class {
  constructor(socket, { onInit, onAcknowledged, onPing, onPong }) {
    this.socketState = { acknowledged: false, lastRequestId: 0, subscriptions: {} };
    this.socket = socket;
    socket.addEventListener(`open`, async (e) => {
      this.socketState.acknowledged = false;
      this.socketState.subscriptions = {};
      socket.send(ConnectionInit(onInit ? await onInit() : null).text);
    });
    socket.addEventListener(`close`, (e) => {
      this.socketState.acknowledged = false;
      this.socketState.subscriptions = {};
    });
    socket.addEventListener(`error`, (e) => {
      console.error(e);
    });
    socket.addEventListener(`message`, (e) => {
      try {
        const message = parseMessage(e.data);
        switch (message.type) {
          case CONNECTION_ACK: {
            if (this.socketState.acknowledged) {
              console.warn(`Duplicate CONNECTION_ACK message ignored`);
            } else {
              this.socketState.acknowledged = true;
              if (onAcknowledged)
                onAcknowledged(message.payload);
            }
            return;
          }
          case PING: {
            if (onPing)
              onPing(message.payload).then((r) => socket.send(Pong(r).text));
            else
              socket.send(Pong(null).text);
            return;
          }
          case PONG: {
            if (onPong)
              onPong(message.payload);
            return;
          }
        }
        if (!this.socketState.acknowledged) {
          return;
        }
        if (message.id === void 0 || message.id === null || !this.socketState.subscriptions[message.id]) {
          return;
        }
        const { query, variables, subscriber } = this.socketState.subscriptions[message.id];
        switch (message.type) {
          case NEXT: {
            if (!message.payload.errors && message.payload.data) {
              subscriber.next && subscriber.next(message.payload.data);
            }
            if (message.payload.errors) {
              subscriber.error && subscriber.error(new ClientError({ ...message.payload, status: 200 }, { query, variables }));
            } else {
            }
            return;
          }
          case ERROR: {
            subscriber.error && subscriber.error(new ClientError({ errors: message.payload, status: 200 }, { query, variables }));
            return;
          }
          case COMPLETE: {
            subscriber.complete && subscriber.complete();
            delete this.socketState.subscriptions[message.id];
            return;
          }
        }
      } catch (e2) {
        console.error(e2);
        socket.close(1006);
      }
      socket.close(4400, `Unknown graphql-ws message.`);
    });
  }
  makeSubscribe(query, operationName, subscriber, variables) {
    const subscriptionId = (this.socketState.lastRequestId++).toString();
    this.socketState.subscriptions[subscriptionId] = { query, variables, subscriber };
    this.socket.send(Subscribe(subscriptionId, { query, operationName, variables }).text);
    return () => {
      this.socket.send(Complete(subscriptionId).text);
      delete this.socketState.subscriptions[subscriptionId];
    };
  }
  rawRequest(query, variables) {
    return new Promise((resolve, reject) => {
      let result;
      this.rawSubscribe(query, {
        next: (data, extensions) => result = { data, extensions },
        error: reject,
        complete: () => resolve(result)
      }, variables);
    });
  }
  request(document, variables) {
    return new Promise((resolve, reject) => {
      let result;
      this.subscribe(document, {
        next: (data) => result = data,
        error: reject,
        complete: () => resolve(result)
      }, variables);
    });
  }
  subscribe(document, subscriber, variables) {
    const { query, operationName } = resolveRequestDocument(document);
    return this.makeSubscribe(query, operationName, subscriber, variables);
  }
  rawSubscribe(query, subscriber, variables) {
    return this.makeSubscribe(query, void 0, subscriber, variables);
  }
  ping(payload) {
    this.socket.send(Ping(payload).text);
  }
  close() {
    this.socket.close(1e3);
  }
};
GraphQLWebSocketClient.PROTOCOL = `graphql-transport-ws`;
function parseMessage(data, f = (a) => a) {
  const m = GraphQLWebSocketMessage.parse(data, f);
  return m;
}
function ConnectionInit(payload) {
  return new GraphQLWebSocketMessage(CONNECTION_INIT, payload);
}
function Ping(payload) {
  return new GraphQLWebSocketMessage(PING, payload, void 0);
}
function Pong(payload) {
  return new GraphQLWebSocketMessage(PONG, payload, void 0);
}
function Subscribe(id, payload) {
  return new GraphQLWebSocketMessage(SUBSCRIBE, payload, id);
}
function Complete(id) {
  return new GraphQLWebSocketMessage(COMPLETE, void 0, id);
}

// node_modules/.pnpm/graphql-request@6.1.0_encoding@0.1.13_graphql@16.10.0/node_modules/graphql-request/build/esm/index.js
var resolveHeaders = (headers) => {
  let oHeaders = {};
  if (headers) {
    if (typeof Headers !== `undefined` && headers instanceof Headers || CrossFetch && CrossFetch.Headers && headers instanceof CrossFetch.Headers) {
      oHeaders = HeadersInstanceToPlainObject(headers);
    } else if (Array.isArray(headers)) {
      headers.forEach(([name, value]) => {
        if (name && value !== void 0) {
          oHeaders[name] = value;
        }
      });
    } else {
      oHeaders = headers;
    }
  }
  return oHeaders;
};
var cleanQuery = (str) => str.replace(/([\s,]|#[^\n\r]+)+/g, ` `).trim();
var buildRequestConfig = (params) => {
  if (!Array.isArray(params.query)) {
    const params_2 = params;
    const search = [`query=${encodeURIComponent(cleanQuery(params_2.query))}`];
    if (params.variables) {
      search.push(`variables=${encodeURIComponent(params_2.jsonSerializer.stringify(params_2.variables))}`);
    }
    if (params_2.operationName) {
      search.push(`operationName=${encodeURIComponent(params_2.operationName)}`);
    }
    return search.join(`&`);
  }
  if (typeof params.variables !== `undefined` && !Array.isArray(params.variables)) {
    throw new Error(`Cannot create query with given variable type, array expected`);
  }
  const params_ = params;
  const payload = params.query.reduce((acc, currentQuery, index) => {
    acc.push({
      query: cleanQuery(currentQuery),
      variables: params_.variables ? params_.jsonSerializer.stringify(params_.variables[index]) : void 0
    });
    return acc;
  }, []);
  return `query=${encodeURIComponent(params_.jsonSerializer.stringify(payload))}`;
};
var createHttpMethodFetcher = (method) => async (params) => {
  const { url, query, variables, operationName, fetch: fetch2, fetchOptions, middleware } = params;
  const headers = { ...params.headers };
  let queryParams = ``;
  let body = void 0;
  if (method === `POST`) {
    body = createRequestBody(query, variables, operationName, fetchOptions.jsonSerializer);
    if (typeof body === `string`) {
      headers[`Content-Type`] = `application/json`;
    }
  } else {
    queryParams = buildRequestConfig({
      query,
      variables,
      operationName,
      jsonSerializer: fetchOptions.jsonSerializer ?? defaultJsonSerializer
    });
  }
  const init = {
    method,
    headers,
    body,
    ...fetchOptions
  };
  let urlResolved = url;
  let initResolved = init;
  if (middleware) {
    const result = await Promise.resolve(middleware({ ...init, url, operationName, variables }));
    const { url: urlNew, ...initNew } = result;
    urlResolved = urlNew;
    initResolved = initNew;
  }
  if (queryParams) {
    urlResolved = `${urlResolved}?${queryParams}`;
  }
  return await fetch2(urlResolved, initResolved);
};
var GraphQLClient = class {
  constructor(url, requestConfig = {}) {
    this.url = url;
    this.requestConfig = requestConfig;
    this.rawRequest = async (...args) => {
      const [queryOrOptions, variables, requestHeaders] = args;
      const rawRequestOptions = parseRawRequestArgs(queryOrOptions, variables, requestHeaders);
      const { headers, fetch: fetch2 = CrossFetch.default, method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
      const { url: url2 } = this;
      if (rawRequestOptions.signal !== void 0) {
        fetchOptions.signal = rawRequestOptions.signal;
      }
      const { operationName } = resolveRequestDocument(rawRequestOptions.query);
      return makeRequest({
        url: url2,
        query: rawRequestOptions.query,
        variables: rawRequestOptions.variables,
        headers: {
          ...resolveHeaders(callOrIdentity(headers)),
          ...resolveHeaders(rawRequestOptions.requestHeaders)
        },
        operationName,
        fetch: fetch2,
        method,
        fetchOptions,
        middleware: requestMiddleware
      }).then((response) => {
        if (responseMiddleware) {
          responseMiddleware(response);
        }
        return response;
      }).catch((error) => {
        if (responseMiddleware) {
          responseMiddleware(error);
        }
        throw error;
      });
    };
  }
  async request(documentOrOptions, ...variablesAndRequestHeaders) {
    const [variables, requestHeaders] = variablesAndRequestHeaders;
    const requestOptions = parseRequestArgs(documentOrOptions, variables, requestHeaders);
    const { headers, fetch: fetch2 = CrossFetch.default, method = `POST`, requestMiddleware, responseMiddleware, ...fetchOptions } = this.requestConfig;
    const { url } = this;
    if (requestOptions.signal !== void 0) {
      fetchOptions.signal = requestOptions.signal;
    }
    const { query, operationName } = resolveRequestDocument(requestOptions.document);
    return makeRequest({
      url,
      query,
      variables: requestOptions.variables,
      headers: {
        ...resolveHeaders(callOrIdentity(headers)),
        ...resolveHeaders(requestOptions.requestHeaders)
      },
      operationName,
      fetch: fetch2,
      method,
      fetchOptions,
      middleware: requestMiddleware
    }).then((response) => {
      if (responseMiddleware) {
        responseMiddleware(response);
      }
      return response.data;
    }).catch((error) => {
      if (responseMiddleware) {
        responseMiddleware(error);
      }
      throw error;
    });
  }
  // prettier-ignore
  batchRequests(documentsOrOptions, requestHeaders) {
    const batchRequestOptions = parseBatchRequestArgs(documentsOrOptions, requestHeaders);
    const { headers, ...fetchOptions } = this.requestConfig;
    if (batchRequestOptions.signal !== void 0) {
      fetchOptions.signal = batchRequestOptions.signal;
    }
    const queries = batchRequestOptions.documents.map(({ document }) => resolveRequestDocument(document).query);
    const variables = batchRequestOptions.documents.map(({ variables: variables2 }) => variables2);
    return makeRequest({
      url: this.url,
      query: queries,
      // @ts-expect-error TODO reconcile batch variables into system.
      variables,
      headers: {
        ...resolveHeaders(callOrIdentity(headers)),
        ...resolveHeaders(batchRequestOptions.requestHeaders)
      },
      operationName: void 0,
      fetch: this.requestConfig.fetch ?? CrossFetch.default,
      method: this.requestConfig.method || `POST`,
      fetchOptions,
      middleware: this.requestConfig.requestMiddleware
    }).then((response) => {
      if (this.requestConfig.responseMiddleware) {
        this.requestConfig.responseMiddleware(response);
      }
      return response.data;
    }).catch((error) => {
      if (this.requestConfig.responseMiddleware) {
        this.requestConfig.responseMiddleware(error);
      }
      throw error;
    });
  }
  setHeaders(headers) {
    this.requestConfig.headers = headers;
    return this;
  }
  /**
   * Attach a header to the client. All subsequent requests will have this header.
   */
  setHeader(key, value) {
    const { headers } = this.requestConfig;
    if (headers) {
      headers[key] = value;
    } else {
      this.requestConfig.headers = { [key]: value };
    }
    return this;
  }
  /**
   * Change the client endpoint. All subsequent requests will send to this endpoint.
   */
  setEndpoint(value) {
    this.url = value;
    return this;
  }
};
var makeRequest = async (params) => {
  const { query, variables, fetchOptions } = params;
  const fetcher = createHttpMethodFetcher(uppercase(params.method ?? `post`));
  const isBatchingQuery = Array.isArray(params.query);
  const response = await fetcher(params);
  const result = await getResult(response, fetchOptions.jsonSerializer ?? defaultJsonSerializer);
  const successfullyReceivedData = Array.isArray(result) ? !result.some(({ data }) => !data) : Boolean(result.data);
  const successfullyPassedErrorPolicy = Array.isArray(result) || !result.errors || Array.isArray(result.errors) && !result.errors.length || fetchOptions.errorPolicy === `all` || fetchOptions.errorPolicy === `ignore`;
  if (response.ok && successfullyPassedErrorPolicy && successfullyReceivedData) {
    const { errors: _, ...rest } = Array.isArray(result) ? result : result;
    const data = fetchOptions.errorPolicy === `ignore` ? rest : result;
    const dataEnvelope = isBatchingQuery ? { data } : data;
    return {
      ...dataEnvelope,
      headers: response.headers,
      status: response.status
    };
  } else {
    const errorResult = typeof result === `string` ? {
      error: result
    } : result;
    throw new ClientError(
      // @ts-expect-error TODO
      { ...errorResult, status: response.status, headers: response.headers },
      { query, variables }
    );
  }
};
var createRequestBody = (query, variables, operationName, jsonSerializer) => {
  const jsonSerializer_ = jsonSerializer ?? defaultJsonSerializer;
  if (!Array.isArray(query)) {
    return jsonSerializer_.stringify({ query, variables, operationName });
  }
  if (typeof variables !== `undefined` && !Array.isArray(variables)) {
    throw new Error(`Cannot create request body with given variable type, array expected`);
  }
  const payload = query.reduce((acc, currentQuery, index) => {
    acc.push({ query: currentQuery, variables: variables ? variables[index] : void 0 });
    return acc;
  }, []);
  return jsonSerializer_.stringify(payload);
};
var getResult = async (response, jsonSerializer) => {
  let contentType;
  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === `content-type`) {
      contentType = value;
    }
  });
  if (contentType && (contentType.toLowerCase().startsWith(`application/json`) || contentType.toLowerCase().startsWith(`application/graphql+json`) || contentType.toLowerCase().startsWith(`application/graphql-response+json`))) {
    return jsonSerializer.parse(await response.text());
  } else {
    return response.text();
  }
};
var callOrIdentity = (value) => {
  return typeof value === `function` ? value() : value;
};
var gql = (chunks, ...variables) => {
  return chunks.reduce((acc, chunk, index) => `${acc}${chunk}${index in variables ? String(variables[index]) : ``}`, ``);
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/utils/graphql.js
async function requestGraphql(...args) {
  const [url, ...requestArgs] = args;
  const client = new GraphQLClient(url, { fetch });
  const { errors, ...response } = await client.request(...requestArgs);
  const result = { ...response };
  if (errors?.length) {
    result.errors = errors.map(({ message, ...options }) => new GraphQLError(message, options));
  }
  return result;
}
function getFields(type) {
  if (type instanceof GraphQLObjectType) {
    return Object.entries(type.getFields()).map(([fieldName, field]) => {
      const fieldType = field.type instanceof GraphQLNonNull ? field.type.ofType : field.type;
      if (fieldType instanceof GraphQLObjectType || fieldType instanceof GraphQLUnionType) {
        return `${fieldName} { ${getFields(fieldType)} }`;
      }
      if (fieldType instanceof GraphQLList) {
        const listItemType = fieldType.ofType instanceof GraphQLNonNull ? fieldType.ofType.ofType : fieldType.ofType;
        if (listItemType instanceof GraphQLScalarType) {
          return fieldName;
        } else if (listItemType instanceof GraphQLObjectType || listItemType instanceof GraphQLUnionType) {
          return `${fieldName} { ${getFields(listItemType)} }`;
        } else {
          throw new Error(`List item type ${listItemType.toString()} is not handled`);
        }
      }
      return fieldName;
    }).join(" ");
  } else if (type instanceof GraphQLUnionType) {
    return type.getTypes().map((unionType) => {
      return `... on ${unionType.name} { ${getFields(unionType)} }`;
    }).join(" ");
  }
  return "";
}
function generateDocumentStateQueryFields(documentModelState2, options) {
  const name = pascalCase(documentModelState2.name);
  const spec = documentModelState2.specifications.at(-1);
  if (!spec) {
    throw new Error("No document model specification found");
  }
  const source = `${spec.state.global.schema} type Query { ${name}: ${name}State }`;
  const schema = buildSchema(source, options);
  const queryType = schema.getQueryType();
  if (!queryType) {
    throw new Error("No query type found");
  }
  const fields = queryType.getFields();
  const stateQuery = fields[name];
  if (!stateQuery) {
    throw new Error("No state query found");
  }
  const queryFields = getFields(stateQuery.type);
  return queryFields;
}
async function requestPublicDrive(url) {
  let drive;
  try {
    const result = await requestGraphql(url, gql`
        query getDrive {
          drive {
            id
            name
            icon
            slug
            meta {
              preferredEditor
            }
          }
        }
      `);
    if (result.errors?.length || !result.drive) {
      throw result.errors?.at(0) ?? new Error("Drive not found");
    }
    drive = result.drive;
  } catch (e) {
    logger.error(e);
    throw new Error("Couldn't find drive info");
  }
  return drive;
}
async function fetchDocument(url, documentId, documentModelModule) {
  const { documentModel, utils } = documentModelModule;
  const stateFields = generateDocumentStateQueryFields(documentModel);
  const name = pascalCase(documentModel.name);
  const result = await requestGraphql(url, gql`
            query ($id: String!) {
                document(id: $id) {
                    id
                    name
                    created
                    documentType
                    lastModified
                    revision
                    operations {
                        id
                        error
                        hash
                        index
                        skip
                        timestamp
                        type
                        inputText
                        context {
                            signer {
                                user {
                                    address
                                    networkId
                                    chainId
                                }
                                app {
                                    name
                                    key
                                }
                                signatures
                            }
                        }
                    }
                    ... on ${name} {
                        state {
                            ${stateFields}
                        }
                        initialState {
                            ${stateFields}
                        }
                    }
                }
            }
        `, { id: documentId });
  const document = result.document ? {
    ...result.document,
    revision: {
      global: result.document.revision.global,
      local: 0
    },
    state: result.document.state,
    operations: {
      global: result.document.operations.map(({ inputText, ...o }) => ({
        ...o,
        error: o.error ?? void 0,
        scope: "global",
        input: JSON.parse(inputText)
      })),
      local: []
    },
    attachments: {},
    initialState: utils.createExtendedState({
      // TODO: getDocument should return all the initial state fields
      created: result.document.created,
      lastModified: result.document.created,
      state: utils.createState({
        global: result.document.initialState.state.global
      })
    }),
    clipboard: []
  } : null;
  return {
    ...result,
    document
  };
}

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/read-mode/service.js
var ReadModeService = class {
  #getDocumentModelModule;
  #drives = /* @__PURE__ */ new Map();
  constructor(getDocumentModelModule) {
    this.#getDocumentModelModule = getDocumentModelModule;
  }
  #parseGraphQLErrors(errors, driveId, documentId) {
    for (const error of errors) {
      if (error.message === `Drive with id ${driveId} not found`) {
        return new ReadDriveNotFoundError(driveId);
      } else if (documentId && error.message === `Document with id ${documentId} not found`) {
        return new ReadDocumentNotFoundError(driveId, documentId);
      }
    }
    const firstError = errors.at(0);
    if (firstError) {
      return firstError;
    }
  }
  async #fetchDrive(id, url) {
    const { errors, document } = await fetchDocument(url, id, driveDocumentModelModule);
    const error = errors ? this.#parseGraphQLErrors(errors, id) : void 0;
    return error || document;
  }
  async fetchDrive(id) {
    const drive = this.#drives.get(id);
    if (!drive) {
      return new ReadDriveNotFoundError(id);
    }
    const document = await this.fetchDocument(id, id, documentType);
    if (document instanceof Error) {
      return document;
    }
    const result = { ...document, readContext: drive.context };
    drive.drive = result;
    return result;
  }
  async fetchDocument(driveId, documentId, documentType2) {
    const drive = this.#drives.get(driveId);
    if (!drive) {
      return new ReadDriveNotFoundError(driveId);
    }
    let documentModelModule = void 0;
    try {
      documentModelModule = this.#getDocumentModelModule(documentType2);
    } catch (error) {
      return new DocumentModelNotFoundError(documentType2, error);
    }
    const { url } = drive.context;
    const { errors, document } = await fetchDocument(url, documentId, documentModelModule);
    if (errors) {
      const error = this.#parseGraphQLErrors(errors, driveId, documentId);
      if (error instanceof ReadDriveError) {
        return error;
      } else if (error) {
        throw error;
      }
    }
    if (!document) {
      return new ReadDocumentNotFoundError(driveId, documentId);
    }
    return document;
  }
  async addReadDrive(url, options) {
    const { id } = options?.expectedDriveInfo ?? await requestPublicDrive(url);
    const result = await this.#fetchDrive(id, url);
    if (result instanceof Error) {
      throw result;
    } else if (!result) {
      throw new ReadDriveNotFoundError(id);
    }
    this.#drives.set(id, {
      drive: result,
      context: {
        ...options,
        url
      }
    });
  }
  async getReadDrives() {
    return Promise.resolve([...this.#drives.keys()]);
  }
  async getReadDrive(id) {
    const result = this.#drives.get(id);
    return Promise.resolve(result ? { ...result.drive, readContext: result.context } : new ReadDriveNotFoundError(id));
  }
  async getReadDriveBySlug(slug) {
    const readDrive = [...this.#drives.values()].find(({ drive }) => drive.state.global.slug === slug);
    return Promise.resolve(readDrive ? { ...readDrive.drive, readContext: readDrive.context } : new ReadDriveSlugNotFoundError(slug));
  }
  getReadDriveContext(id) {
    return Promise.resolve(this.#drives.get(id)?.context ?? new ReadDriveNotFoundError(id));
  }
  deleteReadDrive(id) {
    const deleted = this.#drives.delete(id);
    return Promise.resolve(deleted ? void 0 : new ReadDriveNotFoundError(id));
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/read-mode/server.js
function ReadModeServer(Base) {
  return class ReadMode extends Base {
    #readModeStorage;
    #listeners = /* @__PURE__ */ new Set();
    constructor(...args) {
      super(...args);
      this.#readModeStorage = new ReadModeService(this.getDocumentModelModule.bind(this));
      this.#buildDrives().then((drives) => {
        if (drives.length) {
          this.#notifyListeners(drives, "add");
        }
      }).catch(logger.error);
    }
    async #buildDrives() {
      const driveIds = await this.getReadDrives();
      const drives = (await Promise.all(driveIds.map((driveId) => this.getReadDrive(driveId)))).filter((drive) => !(drive instanceof Error));
      return drives;
    }
    #notifyListeners(drives, operation) {
      this.#listeners.forEach((listener) => listener(drives, operation));
    }
    getReadDrives() {
      return this.#readModeStorage.getReadDrives();
    }
    getReadDrive(id) {
      return this.#readModeStorage.getReadDrive(id);
    }
    getReadDriveBySlug(slug) {
      return this.#readModeStorage.getReadDriveBySlug(slug);
    }
    getReadDriveContext(id) {
      return this.#readModeStorage.getReadDriveContext(id);
    }
    async addReadDrive(url, options) {
      await this.#readModeStorage.addReadDrive(url, options);
      this.#notifyListeners(await this.#buildDrives(), "add");
    }
    fetchDrive(id) {
      return this.#readModeStorage.fetchDrive(id);
    }
    fetchDocument(driveId, documentId, documentType2) {
      return this.#readModeStorage.fetchDocument(driveId, documentId, documentType2);
    }
    async deleteReadDrive(id) {
      const error = await this.#readModeStorage.deleteReadDrive(id);
      if (error) {
        return error;
      }
      this.#notifyListeners(await this.#buildDrives(), "delete");
    }
    async migrateReadDrive(id, options) {
      const result = await this.getReadDriveContext(id);
      if (result instanceof Error) {
        return result;
      }
      const { url, ...readOptions } = result;
      try {
        const newDrive = await this.addRemoteDrive(url, options);
        return newDrive;
      } catch (error) {
        logger.error(error);
        await this.addReadDrive(result.url, readOptions);
        throw error;
      }
    }
    onReadDrivesUpdate(listener) {
      this.#listeners.add(listener);
      return Promise.resolve(() => this.#listeners.delete(listener));
    }
  };
}

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/utils/default-drives-manager.js
function isReadModeDriveServer(obj) {
  return typeof obj.getReadDrives === "function";
}
var DefaultDrivesManager = class {
  server;
  delegate;
  defaultRemoteDrives = /* @__PURE__ */ new Map();
  removeOldRemoteDrivesConfig;
  constructor(server, delegate, options) {
    this.server = server;
    this.delegate = delegate;
    if (options?.defaultDrives.remoteDrives) {
      for (const defaultDrive of options.defaultDrives.remoteDrives) {
        this.defaultRemoteDrives.set(defaultDrive.url, {
          ...defaultDrive,
          status: "PENDING"
        });
      }
    }
    this.removeOldRemoteDrivesConfig = options?.defaultDrives.removeOldRemoteDrives || {
      strategy: "preserve-all"
    };
  }
  getDefaultRemoteDrives() {
    return new Map(JSON.parse(JSON.stringify(Array.from(this.defaultRemoteDrives))));
  }
  async deleteDriveById(driveId) {
    try {
      await this.server.deleteDrive(driveId);
    } catch (error) {
      if (!(error instanceof DriveNotFoundError)) {
        logger.error(error);
      }
    }
  }
  async preserveDrivesById(driveIdsToPreserve, drives, removeStrategy = "detach") {
    const getAllDrives = drives.map((driveId) => this.server.getDrive(driveId));
    const drivesToRemove = (await Promise.all(getAllDrives)).filter((drive) => drive.state.local.listeners.length > 0 || drive.state.local.triggers.length > 0).filter((drive) => !driveIdsToPreserve.includes(drive.state.global.id));
    const driveIds = drivesToRemove.map((drive) => drive.state.global.id);
    if (removeStrategy === "detach") {
      await this.detachDrivesById(driveIds);
    } else {
      await this.removeDrivesById(driveIds);
    }
  }
  async removeDrivesById(driveIds) {
    for (const driveId of driveIds) {
      await this.deleteDriveById(driveId);
    }
  }
  async detachDrivesById(driveIds) {
    const detachDrivesPromises = driveIds.map((driveId) => this.delegate.detachDrive(driveId));
    await Promise.all(detachDrivesPromises);
  }
  async removeOldremoteDrives() {
    const driveids = await this.server.getDrives();
    switch (this.removeOldRemoteDrivesConfig.strategy) {
      case "preserve-by-id-and-detach":
      case "preserve-by-id": {
        const detach = this.removeOldRemoteDrivesConfig.strategy === "preserve-by-id-and-detach" ? "detach" : "remove";
        await this.preserveDrivesById(this.removeOldRemoteDrivesConfig.ids, driveids, detach);
        break;
      }
      case "preserve-by-url-and-detach":
      case "preserve-by-url": {
        const detach = this.removeOldRemoteDrivesConfig.strategy === "preserve-by-url-and-detach" ? "detach" : "remove";
        const getDrivesInfo = this.removeOldRemoteDrivesConfig.urls.map((url) => requestPublicDrive(url));
        const drivesIdsToPreserve = (await Promise.all(getDrivesInfo)).map((driveInfo) => driveInfo.id);
        await this.preserveDrivesById(drivesIdsToPreserve, driveids, detach);
        break;
      }
      case "remove-by-id": {
        const drivesIdsToRemove = this.removeOldRemoteDrivesConfig.ids.filter((driveId) => driveids.includes(driveId));
        await this.removeDrivesById(drivesIdsToRemove);
        break;
      }
      case "remove-by-url": {
        const getDrivesInfo = this.removeOldRemoteDrivesConfig.urls.map((driveUrl) => requestPublicDrive(driveUrl));
        const drivesInfo = await Promise.all(getDrivesInfo);
        const drivesIdsToRemove = drivesInfo.map((driveInfo) => driveInfo.id).filter((driveId) => driveids.includes(driveId));
        await this.removeDrivesById(drivesIdsToRemove);
        break;
      }
      case "remove-all": {
        const getDrives = driveids.map((driveId) => this.server.getDrive(driveId));
        const drives = await Promise.all(getDrives);
        const drivesToRemove = drives.filter((drive) => drive.state.local.listeners.length > 0 || drive.state.local.triggers.length > 0).map((drive) => drive.state.global.id);
        await this.removeDrivesById(drivesToRemove);
        break;
      }
      case "detach-by-id": {
        const drivesIdsToRemove = this.removeOldRemoteDrivesConfig.ids.filter((driveId) => driveids.includes(driveId));
        const detachDrivesPromises = drivesIdsToRemove.map((driveId) => this.delegate.detachDrive(driveId));
        await Promise.all(detachDrivesPromises);
        break;
      }
      case "detach-by-url": {
        const getDrivesInfo = this.removeOldRemoteDrivesConfig.urls.map((driveUrl) => requestPublicDrive(driveUrl));
        const drivesInfo = await Promise.all(getDrivesInfo);
        const drivesIdsToRemove = drivesInfo.map((driveInfo) => driveInfo.id).filter((driveId) => driveids.includes(driveId));
        const detachDrivesPromises = drivesIdsToRemove.map((driveId) => this.delegate.detachDrive(driveId));
        await Promise.all(detachDrivesPromises);
        break;
      }
    }
  }
  async setAllDefaultDrivesAccessLevel(level) {
    const drives = this.defaultRemoteDrives.values();
    for (const drive of drives) {
      await this.setDefaultDriveAccessLevel(drive.url, level);
    }
  }
  async setDefaultDriveAccessLevel(url, level) {
    const drive = this.defaultRemoteDrives.get(url);
    if (drive && drive.options.accessLevel !== level) {
      const newDriveValue = {
        ...drive,
        options: { ...drive.options, accessLevel: level }
      };
      this.defaultRemoteDrives.set(url, newDriveValue);
      await this.initializeDefaultRemoteDrives([newDriveValue]);
    }
  }
  async initializeDefaultRemoteDrives(defaultDrives = Array.from(this.defaultRemoteDrives.values())) {
    const drives = await this.server.getDrives();
    const readServer = isReadModeDriveServer(this.server) ? this.server : void 0;
    const readDrives = await readServer?.getReadDrives();
    for (const remoteDrive of defaultDrives) {
      let remoteDriveInfo = { ...remoteDrive };
      try {
        const driveInfo = remoteDrive.metadata ?? await requestPublicDrive(remoteDrive.url);
        remoteDriveInfo = { ...remoteDrive, metadata: driveInfo };
        this.defaultRemoteDrives.set(remoteDrive.url, remoteDriveInfo);
        const driveIsAdded = drives.includes(driveInfo.id);
        const readDriveIsAdded = readDrives?.includes(driveInfo.id);
        const hasAccessLevel = remoteDrive.options.accessLevel !== void 0;
        const readMode = readServer && remoteDrive.options.accessLevel === "READ";
        const isAdded = readMode ? readDriveIsAdded : driveIsAdded;
        const driveToDelete = hasAccessLevel && (readMode ? driveIsAdded : readDriveIsAdded);
        if (driveToDelete) {
          try {
            await (readMode ? this.server.deleteDrive(driveInfo.id) : readServer?.deleteReadDrive(driveInfo.id));
          } catch (e) {
            logger.error(e);
          }
        }
        if (isAdded) {
          remoteDriveInfo.status = "ALREADY_ADDED";
          this.defaultRemoteDrives.set(remoteDrive.url, remoteDriveInfo);
          this.delegate.emit("ALREADY_ADDED", this.defaultRemoteDrives, remoteDriveInfo, driveInfo.id, driveInfo.name);
          continue;
        }
        remoteDriveInfo.status = "ADDING";
        this.defaultRemoteDrives.set(remoteDrive.url, remoteDriveInfo);
        this.delegate.emit("ADDING", this.defaultRemoteDrives, remoteDriveInfo);
        if (!hasAccessLevel && readServer || readMode) {
          await readServer.addReadDrive(remoteDrive.url, {
            ...remoteDrive.options,
            expectedDriveInfo: driveInfo
          });
        } else {
          await this.server.addRemoteDrive(remoteDrive.url, {
            ...remoteDrive.options,
            expectedDriveInfo: driveInfo
          });
        }
        remoteDriveInfo.status = "SUCCESS";
        this.defaultRemoteDrives.set(remoteDrive.url, remoteDriveInfo);
        this.delegate.emit("SUCCESS", this.defaultRemoteDrives, remoteDriveInfo, driveInfo.id, driveInfo.name);
      } catch (error) {
        remoteDriveInfo.status = "ERROR";
        this.defaultRemoteDrives.set(remoteDrive.url, remoteDriveInfo);
        this.delegate.emit("ERROR", this.defaultRemoteDrives, remoteDriveInfo, void 0, void 0, error);
      }
    }
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/constants.js
var PULL_DRIVE_INTERVAL = 1500;

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/listener/transmitter/pull-responder.js
var MAX_REVISIONS_PER_ACK = 100;
var PullResponderTransmitter = class _PullResponderTransmitter {
  static staticLogger = childLogger([
    "PullResponderTransmitter",
    "static"
  ]);
  logger = childLogger([
    "PullResponderTransmitter",
    Math.floor(Math.random() * 999).toString()
  ]);
  listener;
  manager;
  constructor(listener, manager) {
    this.listener = listener;
    this.manager = manager;
    this.logger.verbose(`constructor(listener: ${listener.listenerId})`);
  }
  getStrands(options) {
    this.logger.verbose(`getStrands(drive: ${this.listener.driveId}, listener: ${this.listener.listenerId})`);
    return this.manager.getStrands(this.listener.driveId, this.listener.listenerId, options);
  }
  disconnect() {
    return Promise.resolve();
  }
  async processAcknowledge(driveId, listenerId, revisions) {
    this.logger.verbose(`processAcknowledge(drive: ${driveId}, listener: ${listenerId})`, revisions);
    const syncUnits = await this.manager.getListenerSyncUnitIds(driveId, listenerId);
    let success = true;
    for (const revision of revisions) {
      const syncUnit = syncUnits.find((s) => s.scope === revision.scope && s.branch === revision.branch && s.documentId == revision.documentId);
      if (!syncUnit) {
        this.logger.warn("Unknown sync unit was acknowledged", revision);
        success = false;
        continue;
      }
      await this.manager.updateListenerRevision(listenerId, driveId, syncUnit.syncId, revision.revision);
    }
    return success;
  }
  static async registerPullResponder(driveId, url, filter) {
    _PullResponderTransmitter.staticLogger.verbose(`registerPullResponder(url: ${url})`, filter);
    const result = await requestGraphql(url, gql`
        mutation registerPullResponderListener($filter: InputListenerFilter!) {
          registerPullResponderListener(filter: $filter) {
            listenerId
          }
        }
      `, { filter });
    const error = result.errors?.at(0);
    if (error) {
      throw error;
    }
    if (!result.registerPullResponderListener) {
      throw new Error("Error registering listener");
    }
    return result.registerPullResponderListener.listenerId;
  }
  static async pullStrands(driveId, url, listenerId, options) {
    this.staticLogger.verbose(`pullStrands(url: ${url}, listener: ${listenerId})`);
    const result = await requestGraphql(url, gql`
        query strands($listenerId: ID!) {
          system {
            sync {
              strands(listenerId: $listenerId) {
                driveId
                documentId
                scope
                branch
                operations {
                  id
                  timestamp
                  skip
                  type
                  input
                  hash
                  index
                  context {
                    signer {
                      user {
                        address
                        networkId
                        chainId
                      }
                      app {
                        name
                        key
                      }
                      signatures
                    }
                  }
                }
              }
            }
          }
        }
      `, { listenerId });
    const error = result.errors?.at(0);
    if (error) {
      throw error;
    }
    if (!result.system) {
      return [];
    }
    return result.system.sync.strands.map((s) => ({
      ...s,
      operations: s.operations.map((o) => ({
        ...o,
        input: JSON.parse(o.input)
      }))
    }));
  }
  static async acknowledgeStrands(url, listenerId, revisions) {
    this.staticLogger.verbose(`acknowledgeStrands(url: ${url}, listener: ${listenerId})`, revisions);
    const chunks = [];
    for (let i = 0; i < revisions.length; i += MAX_REVISIONS_PER_ACK) {
      chunks.push(revisions.slice(i, i + MAX_REVISIONS_PER_ACK));
    }
    if (chunks.length > 1) {
      this.staticLogger.verbose(`Breaking strand acknowledgement into ${chunks.length} chunks...`);
    }
    const results = await Promise.allSettled(chunks.map(async (chunk) => {
      const result = await requestGraphql(url, gql`
            mutation acknowledge(
              $listenerId: String!
              $revisions: [ListenerRevisionInput]
            ) {
              acknowledge(listenerId: $listenerId, revisions: $revisions)
            }
          `, { listenerId, revisions: chunk });
      const error = result.errors?.at(0);
      if (error) {
        throw error;
      }
      if (result.acknowledge === null || !result.acknowledge) {
        throw new Error("Error acknowledging strands");
      }
    }));
    const errors = results.filter((result) => result.status === "rejected");
    if (errors.length > 0) {
      throw new Error("Error acknowledging strands");
    }
  }
  static async executePull(driveId, trigger, onStrandUpdate, onError, onRevisions, onAcknowledge) {
    this.staticLogger.verbose(`executePull(driveId: ${driveId}), trigger:`, trigger);
    try {
      const { url, listenerId } = trigger.data;
      const strands = await _PullResponderTransmitter.pullStrands(driveId, url, listenerId);
      this.staticLogger.verbose("Pulled strands...");
      if (!strands.length) {
        onRevisions?.([]);
        this.staticLogger.verbose("No new strands, skipping...");
        return;
      }
      const listenerRevisions = [];
      for (const strand of strands) {
        const operations = strand.operations.map((op) => ({
          ...op,
          scope: strand.scope,
          branch: strand.branch
        }));
        this.staticLogger.verbose("Processing strand...");
        let error = void 0;
        try {
          const result = await onStrandUpdate(strand, {
            type: "trigger",
            trigger
          });
          if (result.error) {
            throw result.error;
          }
        } catch (e) {
          error = e;
          onError(error);
        }
        listenerRevisions.push({
          branch: strand.branch,
          documentId: strand.documentId || "",
          driveId: strand.driveId,
          revision: operations.pop()?.index ?? -1,
          scope: strand.scope,
          status: error ? error instanceof OperationError ? error.status : "ERROR" : "SUCCESS",
          error
        });
      }
      this.staticLogger.verbose("Processed strands...");
      onRevisions?.(listenerRevisions);
      this.staticLogger.verbose("Acknowledging strands...");
      let success = false;
      try {
        await _PullResponderTransmitter.acknowledgeStrands(url, listenerId, listenerRevisions.map((revision) => {
          const { error, ...rest } = revision;
          return rest;
        }));
        success = true;
      } catch (error) {
        this.staticLogger.error("ACK error", error);
      }
      if (success) {
        this.staticLogger.verbose("Acknowledged strands successfully.");
      } else {
        this.staticLogger.error("Failed to acknowledge strands");
      }
      onAcknowledge?.(success);
    } catch (error) {
      this.staticLogger.error("Pull error", error);
      onError(error);
    }
  }
  static setupPull(driveId, trigger, onStrandUpdate, onError, onRevisions, onAcknowledge) {
    this.staticLogger.verbose(`setupPull(drive: ${driveId}), trigger:`, trigger);
    const { interval } = trigger.data;
    let loopInterval = PULL_DRIVE_INTERVAL;
    if (interval) {
      try {
        const intervalNumber = parseInt(interval);
        if (intervalNumber) {
          loopInterval = intervalNumber;
        }
      } catch {
      }
    }
    let isCancelled = false;
    let timeout;
    const executeLoop = async () => {
      while (!isCancelled) {
        this.staticLogger.verbose("Execute loop...");
        await this.executePull(driveId, trigger, onStrandUpdate, onError, onRevisions, onAcknowledge);
        await new Promise((resolve) => {
          this.staticLogger.verbose(`Scheduling next pull in ${loopInterval} ms`);
          timeout = setTimeout(resolve, loopInterval);
        });
      }
    };
    executeLoop().catch(this.staticLogger.error);
    return () => {
      isCancelled = true;
      if (timeout !== void 0) {
        clearTimeout(timeout);
      }
    };
  }
  static async createPullResponderTrigger(driveId, url, options) {
    this.staticLogger.verbose(`createPullResponderTrigger(drive: ${driveId}, url: ${url})`);
    const { pullFilter, pullInterval } = options;
    const listenerId = await _PullResponderTransmitter.registerPullResponder(driveId, url, pullFilter ?? {
      documentId: ["*"],
      documentType: ["*"],
      branch: ["*"],
      scope: ["*"]
    });
    const pullTrigger = {
      id: generateUUID(),
      type: "PullResponder",
      data: {
        url,
        listenerId,
        interval: pullInterval?.toString() ?? ""
      }
    };
    return pullTrigger;
  }
  static isPullResponderTrigger(trigger) {
    return trigger.type === "PullResponder";
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/types.js
var TransmitterType;
(function(TransmitterType2) {
  TransmitterType2[TransmitterType2["Internal"] = 0] = "Internal";
  TransmitterType2[TransmitterType2["SwitchboardPush"] = 1] = "SwitchboardPush";
  TransmitterType2[TransmitterType2["PullResponder"] = 2] = "PullResponder";
  TransmitterType2[TransmitterType2["SecureConnect"] = 3] = "SecureConnect";
  TransmitterType2[TransmitterType2["MatrixConnect"] = 4] = "MatrixConnect";
  TransmitterType2[TransmitterType2["RESTWebhook"] = 5] = "RESTWebhook";
})(TransmitterType || (TransmitterType = {}));
var DefaultListenerManagerOptions = {
  sequentialUpdates: true
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/utils.js
function filterOperationsByRevision(operations, revisions) {
  if (!revisions) {
    return operations;
  }
  return Object.keys(operations).reduce((acc, scope) => {
    const revision = revisions[scope];
    if (revision !== void 0) {
      acc[scope] = operations[scope].filter((op) => op.index <= revision);
    }
    return acc;
  }, { global: [], local: [] });
}
function isAtRevision(document, revisions) {
  return !revisions || Object.entries(revisions).find(([scope, revision]) => {
    const operation = document.operations[scope].at(-1);
    if (revision === -1) {
      return operation !== void 0;
    }
    return operation?.index !== revision;
  }) === void 0;
}

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/base-server.js
var BaseDocumentDriveServer = class {
  // external dependencies
  documentModelModules;
  storage;
  documentStorage;
  cache;
  queueManager;
  eventEmitter;
  options;
  listenerManager;
  synchronizationManager;
  // internal dependencies
  defaultDrivesManager;
  defaultDrivesManagerDelegate = {
    detachDrive: this.detachDrive.bind(this),
    emit: (...args) => this.eventEmitter.emit("defaultRemoteDrive", ...args)
  };
  queueDelegate = {
    checkDocumentExists: (documentId) => this.documentStorage.exists(documentId),
    processOperationJob: async ({ driveId, documentId, operations, options }) => {
      return documentId ? this.addOperations(driveId, documentId, operations, options) : this.addDriveOperations(driveId, operations, options);
    },
    processActionJob: async ({ driveId, documentId, actions, options }) => {
      return documentId ? this.addActions(driveId, documentId, actions, options) : this.addDriveActions(driveId, actions, options);
    },
    processJob: async (job) => {
      if (isOperationJob(job)) {
        return this.queueDelegate.processOperationJob(job);
      } else if (isActionJob(job)) {
        return this.queueDelegate.processActionJob(job);
      } else {
        throw new Error("Unknown job type", job);
      }
    }
  };
  // internal state
  triggerMap = /* @__PURE__ */ new Map();
  initializePromise;
  constructor(documentModelModules, storage, documentStorage, cache, queueManager, eventEmitter, synchronizationManager, listenerManager, options) {
    this.documentModelModules = documentModelModules;
    this.storage = storage;
    this.documentStorage = documentStorage;
    this.cache = cache;
    this.queueManager = queueManager;
    this.eventEmitter = eventEmitter;
    this.synchronizationManager = synchronizationManager;
    this.listenerManager = listenerManager;
    this.options = {
      ...options,
      defaultDrives: {
        ...options?.defaultDrives
      },
      listenerManager: {
        ...DefaultListenerManagerOptions,
        ...options?.listenerManager
      },
      taskQueueMethod: options?.taskQueueMethod === void 0 ? RunAsap.runAsap : options.taskQueueMethod
    };
    this.defaultDrivesManager = new DefaultDrivesManager(this, this.defaultDrivesManagerDelegate, options);
    this.initializePromise = this._initialize();
  }
  // workaround for testing the ephemeral listeners -- we don't have DI in place yet
  // todo: remove this once we have DI
  get listeners() {
    return this.listenerManager;
  }
  initialize() {
    return this.initializePromise;
  }
  async _initialize() {
    await this.listenerManager.initialize(this.handleListenerError);
    await this.queueManager.init(this.queueDelegate, (error) => {
      logger.error(`Error initializing queue manager`, error);
      errors.push(error);
    });
    try {
      await this.defaultDrivesManager.removeOldremoteDrives();
    } catch (error) {
      logger.error(error);
    }
    const errors = [];
    const drives = await this.getDrives();
    for (const drive of drives) {
      await this._initializeDrive(drive).catch((error) => {
        logger.error(`Error initializing drive ${drive}`, error);
        errors.push(error);
      });
    }
    if (this.options.defaultDrives.loadOnInit !== false) {
      await this.defaultDrivesManager.initializeDefaultRemoteDrives();
    }
    return errors.length === 0 ? null : errors;
  }
  setDocumentModelModules(modules) {
    this.documentModelModules = [...modules];
    this.synchronizationManager.setDocumentModelModules([...modules]);
    this.eventEmitter.emit("documentModelModules", [...modules]);
  }
  initializeDefaultRemoteDrives() {
    return this.defaultDrivesManager.initializeDefaultRemoteDrives();
  }
  getDefaultRemoteDrives() {
    return this.defaultDrivesManager.getDefaultRemoteDrives();
  }
  setDefaultDriveAccessLevel(url, level) {
    return this.defaultDrivesManager.setDefaultDriveAccessLevel(url, level);
  }
  setAllDefaultDrivesAccessLevel(level) {
    return this.defaultDrivesManager.setAllDefaultDrivesAccessLevel(level);
  }
  getOperationSource(source) {
    return source.type === "local" ? "push" : "pull";
  }
  handleListenerError(error, driveId, listener) {
    logger.error(`Listener ${listener.listener.label ?? listener.listener.listenerId} error:`, error);
    const status = error instanceof OperationError ? error.status : "ERROR";
    this.synchronizationManager.updateSyncStatus(driveId, { push: status }, error);
  }
  shouldSyncRemoteDrive(drive) {
    return drive.state.local.availableOffline && drive.state.local.triggers.length > 0;
  }
  async startSyncRemoteDrive(driveId) {
    let driveTriggers = this.triggerMap.get(driveId);
    const syncUnits = await this.getSynchronizationUnitsIds(driveId);
    const drive = await this.getDrive(driveId);
    for (const trigger of drive.state.local.triggers) {
      if (driveTriggers?.get(trigger.id)) {
        continue;
      }
      if (!driveTriggers) {
        driveTriggers = /* @__PURE__ */ new Map();
      }
      this.synchronizationManager.updateSyncStatus(driveId, {
        pull: "SYNCING"
      });
      for (const syncUnit of syncUnits) {
        this.synchronizationManager.updateSyncStatus(syncUnit.syncId, {
          pull: "SYNCING"
        });
      }
      if (PullResponderTransmitter.isPullResponderTrigger(trigger)) {
        let firstPull = true;
        const cancelPullLoop = PullResponderTransmitter.setupPull(driveId, trigger, this.saveStrand.bind(this), (error) => {
          const statusError = error instanceof OperationError ? error.status : "ERROR";
          this.synchronizationManager.updateSyncStatus(driveId, { pull: statusError }, error);
          if (error instanceof ClientError) {
            this.eventEmitter.emit("clientStrandsError", driveId, trigger, error.response.status, error.message);
          }
        }, (revisions) => {
          const errorRevision = revisions.filter((r) => r.status !== "SUCCESS");
          if (errorRevision.length < 1) {
            this.synchronizationManager.updateSyncStatus(driveId, {
              pull: "SUCCESS"
            });
          }
          const documentIdsFromRevision = revisions.filter((rev) => rev.documentId !== "").map((rev) => rev.documentId);
          this.getSynchronizationUnitsIds(driveId, documentIdsFromRevision).then((revSyncUnits) => {
            for (const syncUnit of revSyncUnits) {
              const fileErrorRevision = errorRevision.find((r) => r.documentId === syncUnit.documentId);
              if (fileErrorRevision) {
                this.synchronizationManager.updateSyncStatus(syncUnit.syncId, { pull: fileErrorRevision.status }, fileErrorRevision.error);
              } else {
                this.synchronizationManager.updateSyncStatus(syncUnit.syncId, {
                  pull: "SUCCESS"
                });
              }
            }
          }).catch(console.error);
          if (firstPull) {
            firstPull = false;
            const pushListener = drive.state.local.listeners.find((listener) => trigger.data.url === listener.callInfo?.data);
            if (pushListener) {
              this.getSynchronizationUnitsRevision(driveId, syncUnits).then((syncUnitRevisions) => {
                for (const revision of syncUnitRevisions) {
                  this.listenerManager.updateListenerRevision(pushListener.listenerId, driveId, revision.syncId, revision.revision).catch(logger.error);
                }
              }).catch(logger.error);
            }
          }
        });
        driveTriggers.set(trigger.id, cancelPullLoop);
        this.triggerMap.set(driveId, driveTriggers);
      }
    }
  }
  async stopSyncRemoteDrive(driveId) {
    const syncUnits = await this.getSynchronizationUnitsIds(driveId);
    const filesNodeSyncId = syncUnits.filter((syncUnit) => syncUnit.documentId !== "").map((syncUnit) => syncUnit.syncId);
    const triggers = this.triggerMap.get(driveId);
    triggers?.forEach((cancel) => cancel());
    this.synchronizationManager.updateSyncStatus(driveId, null);
    for (const fileNodeSyncId of filesNodeSyncId) {
      this.synchronizationManager.updateSyncStatus(fileNodeSyncId, null);
    }
    return this.triggerMap.delete(driveId);
  }
  async _initializeDrive(driveId) {
    const drive = await this.getDrive(driveId);
    await this.synchronizationManager.initializeDriveSyncStatus(driveId, drive);
    if (this.shouldSyncRemoteDrive(drive)) {
      await this.startSyncRemoteDrive(driveId);
    }
  }
  // Delegate synchronization methods to synchronizationManager
  getSynchronizationUnits(driveId, documentId, scope, branch, documentType2) {
    return this.synchronizationManager.getSynchronizationUnits(driveId, documentId, scope, branch, documentType2);
  }
  getSynchronizationUnitsIds(driveId, documentId, scope, branch, documentType2) {
    return this.synchronizationManager.getSynchronizationUnitsIds(driveId, documentId, scope, branch, documentType2);
  }
  getOperationData(driveId, syncId, filter) {
    return this.synchronizationManager.getOperationData(driveId, syncId, filter);
  }
  getSynchronizationUnitsRevision(driveId, syncUnitsQuery) {
    return this.synchronizationManager.getSynchronizationUnitsRevision(driveId, syncUnitsQuery);
  }
  getDocumentModelModule(documentType2) {
    const documentModelModule = this.documentModelModules.find((module) => module.documentModel.id === documentType2);
    if (!documentModelModule) {
      throw new Error(`Document type ${documentType2} not supported`);
    }
    return documentModelModule;
  }
  getDocumentModelModules() {
    return [...this.documentModelModules];
  }
  async addDrive(input, preferredEditor) {
    const id = input.global.id || generateUUID();
    if (!id) {
      throw new Error("Invalid Drive Id");
    }
    const drives = await this.storage.getDrives();
    if (drives.includes(id)) {
      throw new DriveAlreadyExistsError(id);
    }
    const document = createDocument({
      state: input
    });
    document.meta = {
      preferredEditor
    };
    await this.storage.createDrive(id, document);
    if (input.global.slug) {
      await this.cache.deleteDocument("drives-slug", input.global.slug);
    }
    await this._initializeDrive(id);
    this.eventEmitter.emit("driveAdded", document);
    return document;
  }
  async addRemoteDrive(url, options) {
    const { id, name, slug, icon, meta } = options.expectedDriveInfo || await requestPublicDrive(url);
    const { pullFilter, pullInterval, availableOffline, sharingType, listeners, triggers } = options;
    const pullTrigger = await PullResponderTransmitter.createPullResponderTrigger(id, url, {
      pullFilter,
      pullInterval
    });
    return await this.addDrive({
      global: {
        id,
        name,
        slug,
        icon: icon ?? null
      },
      local: {
        triggers: [...triggers, pullTrigger],
        listeners,
        availableOffline,
        sharingType
      }
    }, meta?.preferredEditor);
  }
  async deleteDrive(driveId) {
    const result = await Promise.allSettled([
      this.stopSyncRemoteDrive(driveId),
      this.listenerManager.removeDrive(driveId),
      this.cache.deleteDocument("drives", driveId),
      this.storage.deleteDrive(driveId)
    ]);
    result.forEach((r) => {
      if (r.status === "rejected") {
        throw r.reason;
      }
    });
  }
  getDrives() {
    return this.storage.getDrives();
  }
  async getDrive(driveId, options) {
    let document;
    try {
      const cachedDocument = await this.cache.getDocument("drives", driveId);
      if (cachedDocument && isDocumentDrive(cachedDocument)) {
        document = cachedDocument;
        if (isAtRevision(document, options?.revisions)) {
          return document;
        }
      }
    } catch (e) {
      logger.error("Error getting drive from cache", e);
    }
    const driveStorage = document ?? await this.storage.getDrive(driveId);
    const result = this._buildDocument(driveStorage, options);
    if (!isDocumentDrive(result)) {
      throw new Error(`Document with id ${driveId} is not a Document Drive`);
    } else {
      if (!options?.revisions) {
        this.cache.setDocument("drives", driveId, result).catch(logger.error);
      }
      return result;
    }
  }
  async getDriveBySlug(slug, options) {
    try {
      const document2 = await this.cache.getDocument("drives-slug", slug);
      if (document2 && isDocumentDrive(document2)) {
        return document2;
      }
    } catch (e) {
      logger.error("Error getting drive from cache", e);
    }
    const driveStorage = await this.storage.getDriveBySlug(slug);
    const document = this._buildDocument(driveStorage, options);
    if (!isDocumentDrive(document)) {
      throw new Error(`Document with slug ${slug} is not a Document Drive`);
    } else {
      this.cache.setDocument("drives-slug", slug, document).catch(logger.error);
      return document;
    }
  }
  async getDocument(driveId, documentId, options) {
    let cachedDocument;
    try {
      cachedDocument = await this.cache.getDocument(driveId, documentId);
      if (cachedDocument && isAtRevision(cachedDocument, options?.revisions)) {
        return cachedDocument;
      }
    } catch (e) {
      logger.error("Error getting document from cache", e);
    }
    const documentStorage = cachedDocument ?? await this.storage.getDocument(driveId, documentId);
    const document = this._buildDocument(documentStorage, options);
    if (!options?.revisions) {
      this.cache.setDocument(driveId, documentId, document).catch(logger.error);
    }
    return document;
  }
  getDocuments(driveId) {
    return this.storage.getDocuments(driveId);
  }
  async createDocument(driveId, input) {
    let state = void 0;
    if (input.document) {
      if (input.documentType !== input.document.documentType) {
        throw new Error(`Provided document is not ${input.documentType}`);
      }
      const doc = this._buildDocument(input.document);
      state = doc.state;
    }
    const document = input.document ?? this.getDocumentModelModule(input.documentType).utils.createDocument();
    const documentStorage = {
      name: document.name,
      revision: document.revision,
      documentType: document.documentType,
      created: document.created,
      lastModified: document.lastModified,
      operations: { global: [], local: [] },
      initialState: document.initialState,
      clipboard: [],
      state: state ?? document.state
    };
    await this.storage.createDocument(driveId, input.id, documentStorage);
    for (const syncUnit of input.synchronizationUnits) {
      this.synchronizationManager.updateSyncStatus(syncUnit.syncId, {
        pull: this.triggerMap.get(driveId) ? "INITIAL_SYNC" : void 0,
        push: this.listenerManager.driveHasListeners(driveId) ? "SUCCESS" : void 0
      });
    }
    const operations = Object.values(document.operations).flat();
    if (operations.length) {
      if (isDocumentDrive(document)) {
        await this.storage.addDriveOperations(driveId, operations, document);
      } else {
        await this.storage.addDocumentOperations(driveId, input.id, operations, document);
      }
    }
    return document;
  }
  async deleteDocument(driveId, documentId) {
    try {
      const syncUnits = await this.getSynchronizationUnitsIds(driveId, [
        documentId
      ]);
      for (const syncUnit of syncUnits) {
        this.synchronizationManager.updateSyncStatus(syncUnit.syncId, null);
      }
      await this.listenerManager.removeSyncUnits(driveId, syncUnits);
    } catch (error) {
      logger.warn("Error deleting document", error);
    }
    await this.cache.deleteDocument(driveId, documentId);
    return this.storage.deleteDocument(driveId, documentId);
  }
  async _processOperations(driveId, documentId, documentStorage, operations) {
    const operationsApplied = [];
    const signals = [];
    const documentStorageWithState = await this._addDocumentResultingStage(documentStorage, driveId, documentId);
    let document = this._buildDocument(documentStorageWithState);
    let error;
    const operationsByScope = groupOperationsByScope(operations);
    for (const scope of Object.keys(operationsByScope)) {
      const storageDocumentOperations = documentStorage.operations[scope];
      const branch = removeExistingOperations(operationsByScope[scope] || [], storageDocumentOperations);
      if (branch.length < 1) {
        continue;
      }
      const trunk = garbageCollect(sortOperations(storageDocumentOperations));
      const [invertedTrunk, tail] = attachBranch(trunk, branch);
      const newHistory = tail.length < 1 ? invertedTrunk : merge(trunk, invertedTrunk, reshuffleByTimestamp);
      const newOperations = newHistory.filter((op) => trunk.length < 1 || precedes(trunk[trunk.length - 1], op));
      for (const nextOperation of newOperations) {
        let skipHashValidation = false;
        if (tail.length > 0) {
          const sourceOperation = operations.find((op) => op.hash === nextOperation.hash);
          skipHashValidation = !sourceOperation || sourceOperation.index !== nextOperation.index || sourceOperation.skip !== nextOperation.skip;
        }
        try {
          const taskQueueMethod = this.options.taskQueueMethod;
          const task = () => this._performOperation(driveId, documentId, document, nextOperation, skipHashValidation);
          const appliedResult = await (taskQueueMethod ? runAsapAsync(task, taskQueueMethod) : task());
          document = appliedResult.document;
          signals.push(...appliedResult.signals);
          operationsApplied.push(appliedResult.operation);
        } catch (e) {
          error = e instanceof OperationError ? e : new OperationError("ERROR", nextOperation, e.message, e.cause);
          break;
        }
      }
    }
    return {
      document,
      operationsApplied,
      signals,
      error
    };
  }
  async _addDocumentResultingStage(document, driveId, documentId, options) {
    const operations = options?.revisions !== void 0 ? filterOperationsByRevision(document.operations, options.revisions) : document.operations;
    const documentOperations = garbageCollectDocumentOperations(operations);
    for (const scope of Object.keys(documentOperations)) {
      const lastRemainingOperation = documentOperations[scope].at(-1);
      if (lastRemainingOperation && !lastRemainingOperation.resultingState) {
        lastRemainingOperation.resultingState = await (documentId ? this.storage.getOperationResultingState?.(driveId, documentId, lastRemainingOperation.index, lastRemainingOperation.scope, "main") : this.storage.getDriveOperationResultingState?.(driveId, lastRemainingOperation.index, lastRemainingOperation.scope, "main"));
      }
    }
    return {
      ...document,
      operations: documentOperations
    };
  }
  _buildDocument(documentStorage, options) {
    if (documentStorage.state && (!options || options.checkHashes === false) && isAtRevision(documentStorage, options?.revisions)) {
      return documentStorage;
    }
    const documentModelModule = this.getDocumentModelModule(documentStorage.documentType);
    const revisionOperations = options?.revisions !== void 0 ? filterOperationsByRevision(documentStorage.operations, options.revisions) : documentStorage.operations;
    const operations = garbageCollectDocumentOperations(revisionOperations);
    return replayDocument(documentStorage.initialState, operations, documentModelModule.reducer, void 0, documentStorage, void 0, {
      ...options,
      checkHashes: options?.checkHashes ?? true,
      reuseOperationResultingState: options?.checkHashes ?? true
    });
  }
  async _performOperation(driveId, documentId, document, operation, skipHashValidation = false) {
    const documentModelModule = this.getDocumentModelModule(document.documentType);
    const signalResults = [];
    let newDocument = document;
    const scope = operation.scope;
    const documentOperations = garbageCollectDocumentOperations({
      ...document.operations,
      [scope]: skipHeaderOperations(document.operations[scope], operation)
    });
    const lastRemainingOperation = documentOperations[scope].at(-1);
    if (lastRemainingOperation && !lastRemainingOperation.resultingState) {
      lastRemainingOperation.resultingState = await (documentId ? this.storage.getOperationResultingState?.(driveId, documentId, lastRemainingOperation.index, lastRemainingOperation.scope, "main") : this.storage.getDriveOperationResultingState?.(driveId, lastRemainingOperation.index, lastRemainingOperation.scope, "main"));
    }
    const operationSignals = [];
    newDocument = documentModelModule.reducer(newDocument, operation, (signal) => {
      let handler = void 0;
      switch (signal.type) {
        case "CREATE_CHILD_DOCUMENT":
          handler = () => this.createDocument(driveId, signal.input);
          break;
        case "DELETE_CHILD_DOCUMENT":
          handler = () => this.deleteDocument(driveId, signal.input.id);
          break;
        case "COPY_CHILD_DOCUMENT":
          handler = () => this.getDocument(driveId, signal.input.id).then((documentToCopy) => this.createDocument(driveId, {
            id: signal.input.newId,
            documentType: documentToCopy.documentType,
            document: documentToCopy,
            synchronizationUnits: signal.input.synchronizationUnits
          }));
          break;
      }
      if (handler) {
        operationSignals.push(() => handler().then((result) => ({ signal, result })));
      }
    }, { skip: operation.skip, reuseOperationResultingState: true });
    const appliedOperations = newDocument.operations[operation.scope].filter((op) => op.index == operation.index && op.skip == operation.skip);
    const appliedOperation = appliedOperations.at(0);
    if (!appliedOperation) {
      throw new OperationError("ERROR", operation, `Operation with index ${operation.index}:${operation.skip} was not applied.`);
    }
    if (!appliedOperation.error && appliedOperation.hash !== operation.hash && !skipHashValidation) {
      throw new ConflictOperationError(operation, appliedOperation);
    }
    for (const signalHandler of operationSignals) {
      const result = await signalHandler();
      signalResults.push(result);
    }
    return {
      document: newDocument,
      signals: signalResults,
      operation: appliedOperation
    };
  }
  addOperation(driveId, documentId, operation, options) {
    return this.addOperations(driveId, documentId, [operation], options);
  }
  async _addOperations(driveId, documentId, callback) {
    if (!this.storage.addDocumentOperationsWithTransaction) {
      const documentStorage = await this.storage.getDocument(driveId, documentId);
      const result = await callback(documentStorage);
      if (result.operations.length > 0) {
        await this.storage.addDocumentOperations(driveId, documentId, result.operations, result.header);
      }
    } else {
      await this.storage.addDocumentOperationsWithTransaction(driveId, documentId, callback);
    }
  }
  queueOperation(driveId, documentId, operation, options) {
    return this.queueOperations(driveId, documentId, [operation], options);
  }
  async resultIfExistingOperations(drive, id, operations) {
    try {
      const document = await this.getDocument(drive, id);
      const newOperation = operations.find((op) => !op.id || !document.operations[op.scope].find((existingOp) => existingOp.id === op.id && existingOp.index === op.index && existingOp.type === op.type && existingOp.hash === op.hash));
      if (!newOperation) {
        return {
          status: "SUCCESS",
          document,
          operations,
          signals: []
        };
      } else {
        return void 0;
      }
    } catch (error) {
      if (!error.message.includes(`Document with id ${id} not found`)) {
        console.error(error);
      }
      return void 0;
    }
  }
  async queueOperations(driveId, documentId, operations, options) {
    const result = await this.resultIfExistingOperations(driveId, documentId, operations);
    if (result) {
      return result;
    }
    try {
      const jobId = await this.queueManager.addJob({
        driveId,
        documentId,
        operations,
        options
      });
      return new Promise((resolve, reject) => {
        const unsubscribe = this.queueManager.on("jobCompleted", (job, result2) => {
          if (job.jobId === jobId) {
            unsubscribe();
            unsubscribeError();
            resolve(result2);
          }
        });
        const unsubscribeError = this.queueManager.on("jobFailed", (job, error) => {
          if (job.jobId === jobId) {
            unsubscribe();
            unsubscribeError();
            reject(error);
          }
        });
      });
    } catch (error) {
      logger.error("Error adding job", error);
      throw error;
    }
  }
  async queueAction(driveId, documentId, action, options) {
    return this.queueActions(driveId, documentId, [action], options);
  }
  async queueActions(driveId, documentId, actions, options) {
    try {
      const jobId = await this.queueManager.addJob({
        driveId,
        documentId,
        actions,
        options
      });
      return new Promise((resolve, reject) => {
        const unsubscribe = this.queueManager.on("jobCompleted", (job, result) => {
          if (job.jobId === jobId) {
            unsubscribe();
            unsubscribeError();
            resolve(result);
          }
        });
        const unsubscribeError = this.queueManager.on("jobFailed", (job, error) => {
          if (job.jobId === jobId) {
            unsubscribe();
            unsubscribeError();
            reject(error);
          }
        });
      });
    } catch (error) {
      logger.error("Error adding job", error);
      throw error;
    }
  }
  async queueDriveAction(driveId, action, options) {
    return this.queueDriveActions(driveId, [action], options);
  }
  async queueDriveActions(driveId, actions, options) {
    try {
      const jobId = await this.queueManager.addJob({
        driveId,
        actions,
        options
      });
      return new Promise((resolve, reject) => {
        const unsubscribe = this.queueManager.on("jobCompleted", (job, result) => {
          if (job.jobId === jobId) {
            unsubscribe();
            unsubscribeError();
            resolve(result);
          }
        });
        const unsubscribeError = this.queueManager.on("jobFailed", (job, error) => {
          if (job.jobId === jobId) {
            unsubscribe();
            unsubscribeError();
            reject(error);
          }
        });
      });
    } catch (error) {
      logger.error("Error adding drive job", error);
      throw error;
    }
  }
  async addOperations(driveId, documentId, operations, options) {
    const result = await this.resultIfExistingOperations(driveId, documentId, operations);
    if (result) {
      return result;
    }
    let document;
    const operationsApplied = [];
    const signals = [];
    let error;
    try {
      await this._addOperations(driveId, documentId, async (documentStorage) => {
        const result2 = await this._processOperations(driveId, documentId, documentStorage, operations);
        if (!result2.document) {
          logger.error("Invalid document");
          throw result2.error ?? new Error("Invalid document");
        }
        document = result2.document;
        error = result2.error;
        signals.push(...result2.signals);
        operationsApplied.push(...result2.operationsApplied);
        return {
          operations: result2.operationsApplied,
          header: result2.document,
          newState: document.state
        };
      });
      if (document) {
        this.cache.setDocument(driveId, documentId, document).catch(logger.error);
      }
      const { scopes, branches } = operationsApplied.reduce((acc, operation) => {
        if (!acc.scopes.includes(operation.scope)) {
          acc.scopes.push(operation.scope);
        }
        return acc;
      }, { scopes: [], branches: ["main"] });
      const syncUnits = await this.getSynchronizationUnits(driveId, [documentId], scopes, branches);
      const newOp = operationsApplied.find((appliedOp) => !operations.find((o) => o.id === appliedOp.id && o.index === appliedOp.index && o.skip === appliedOp.skip && o.hash === appliedOp.hash));
      const source = newOp ? { type: "local" } : options?.source ?? { type: "local" };
      const operationSource = this.getOperationSource(source);
      this.listenerManager.updateSynchronizationRevisions(driveId, syncUnits, source, () => {
        this.synchronizationManager.updateSyncStatus(driveId, {
          [operationSource]: "SYNCING"
        });
        for (const syncUnit of syncUnits) {
          this.synchronizationManager.updateSyncStatus(syncUnit.syncId, {
            [operationSource]: "SYNCING"
          });
        }
      }, this.handleListenerError.bind(this), options?.forceSync ?? source.type === "local").then((updates) => {
        if (updates.length) {
          this.synchronizationManager.updateSyncStatus(driveId, {
            [operationSource]: "SUCCESS"
          });
        }
        for (const syncUnit of syncUnits) {
          this.synchronizationManager.updateSyncStatus(syncUnit.syncId, {
            [operationSource]: "SUCCESS"
          });
        }
      }).catch((error2) => {
        logger.error("Non handled error updating sync revision", error2);
        this.synchronizationManager.updateSyncStatus(driveId, {
          [operationSource]: "ERROR"
        }, error2);
        for (const syncUnit of syncUnits) {
          this.synchronizationManager.updateSyncStatus(syncUnit.syncId, {
            [operationSource]: "ERROR"
          }, error2);
        }
      });
      if (error) {
        throw error;
      }
      return {
        status: "SUCCESS",
        document,
        operations: operationsApplied,
        signals
      };
    } catch (error2) {
      const operationError = error2 instanceof OperationError ? error2 : new OperationError("ERROR", void 0, error2.message, error2.cause);
      return {
        status: operationError.status,
        error: operationError,
        document,
        operations: operationsApplied,
        signals
      };
    }
  }
  addDriveOperation(driveId, operation, options) {
    return this.addDriveOperations(driveId, [operation], options);
  }
  async clearStorage() {
    for (const drive of await this.getDrives()) {
      await this.deleteDrive(drive);
    }
    await this.storage.clearStorage?.();
  }
  async _addDriveOperations(driveId, callback) {
    if (!this.storage.addDriveOperationsWithTransaction) {
      const documentStorage = await this.storage.getDrive(driveId);
      const result = await callback(documentStorage);
      if (result.operations.length > 0) {
        await this.storage.addDriveOperations(driveId, result.operations, result.header);
      }
      return result;
    } else {
      return this.storage.addDriveOperationsWithTransaction(driveId, callback);
    }
  }
  queueDriveOperation(driveId, operation, options) {
    return this.queueDriveOperations(driveId, [operation], options);
  }
  async resultIfExistingDriveOperations(driveId, operations) {
    try {
      const drive = await this.getDrive(driveId);
      const newOperation = operations.find((op) => !op.id || !drive.operations[op.scope].find((existingOp) => existingOp.id === op.id && existingOp.index === op.index && existingOp.type === op.type && existingOp.hash === op.hash));
      if (!newOperation) {
        return {
          status: "SUCCESS",
          document: drive,
          operations,
          signals: []
        };
      } else {
        return void 0;
      }
    } catch (error) {
      console.error(error);
      return void 0;
    }
  }
  async queueDriveOperations(driveId, operations, options) {
    const result = await this.resultIfExistingDriveOperations(driveId, operations);
    if (result) {
      return result;
    }
    try {
      const jobId = await this.queueManager.addJob({
        driveId,
        operations,
        options
      });
      return new Promise((resolve, reject) => {
        const unsubscribe = this.queueManager.on("jobCompleted", (job, result2) => {
          if (job.jobId === jobId) {
            unsubscribe();
            unsubscribeError();
            resolve(result2);
          }
        });
        const unsubscribeError = this.queueManager.on("jobFailed", (job, error) => {
          if (job.jobId === jobId) {
            unsubscribe();
            unsubscribeError();
            reject(error);
          }
        });
      });
    } catch (error) {
      logger.error("Error adding drive job", error);
      throw error;
    }
  }
  async addDriveOperations(driveId, operations, options) {
    let document;
    const operationsApplied = [];
    const signals = [];
    let error;
    const result = await this.resultIfExistingDriveOperations(driveId, operations);
    if (result) {
      return result;
    }
    try {
      await this._addDriveOperations(driveId, async (documentStorage) => {
        const result2 = await this._processOperations(driveId, void 0, documentStorage, operations.slice());
        document = result2.document;
        operationsApplied.push(...result2.operationsApplied);
        signals.push(...result2.signals);
        error = result2.error;
        return {
          operations: result2.operationsApplied,
          header: result2.document
        };
      });
      if (!document || !isDocumentDrive(document)) {
        throw error ?? new Error("Invalid Document Drive document");
      }
      this.cache.setDocument("drives", driveId, document).catch(logger.error);
      const lastOperation = operationsApplied.filter((op) => op.scope === "global").slice().pop();
      if (lastOperation) {
        const newOp = operationsApplied.find((appliedOp) => !operations.find((o) => o.id === appliedOp.id && o.index === appliedOp.index && o.skip === appliedOp.skip && o.hash === appliedOp.hash));
        const source = newOp ? { type: "local" } : options?.source ?? { type: "local" };
        const operationSource = this.getOperationSource(source);
        this.listenerManager.updateSynchronizationRevisions(driveId, [
          {
            syncId: "0",
            documentId: "",
            scope: "global",
            branch: "main",
            documentType: "powerhouse/document-drive",
            lastUpdated: lastOperation.timestamp,
            revision: lastOperation.index
          }
        ], source, () => {
          this.synchronizationManager.updateSyncStatus(driveId, {
            [operationSource]: "SYNCING"
          });
        }, this.handleListenerError.bind(this), options?.forceSync ?? source.type === "local").then((updates) => {
          if (updates.length) {
            this.synchronizationManager.updateSyncStatus(driveId, {
              [operationSource]: "SUCCESS"
            });
          }
        }).catch((error2) => {
          logger.error("Non handled error updating sync revision", error2);
          this.synchronizationManager.updateSyncStatus(driveId, {
            [operationSource]: "ERROR"
          }, error2);
        });
      }
      if (this.shouldSyncRemoteDrive(document)) {
        this.startSyncRemoteDrive(driveId);
      } else {
        this.stopSyncRemoteDrive(driveId);
      }
      if (error) {
        throw error;
      }
      return {
        status: "SUCCESS",
        document,
        operations: operationsApplied,
        signals
      };
    } catch (error2) {
      const operationError = error2 instanceof OperationError ? error2 : new OperationError("ERROR", void 0, error2.message, error2.cause);
      return {
        status: operationError.status,
        error: operationError,
        document,
        operations: operationsApplied,
        signals
      };
    }
  }
  _buildOperations(documentId, actions) {
    const operations = [];
    const { reducer: reducer4 } = this.getDocumentModelModule(documentId.documentType);
    for (const action of actions) {
      documentId = reducer4(documentId, action);
      const operation = documentId.operations[action.scope].slice().pop();
      if (!operation) {
        throw new Error("Error creating operations");
      }
      operations.push(operation);
    }
    return operations;
  }
  async addAction(driveId, documentId, action, options) {
    return this.addActions(driveId, documentId, [action], options);
  }
  async addActions(driveId, documentId, actions, options) {
    const document = await this.getDocument(driveId, documentId);
    const operations = this._buildOperations(document, actions);
    return this.addOperations(driveId, documentId, operations, options);
  }
  async addDriveAction(driveId, action, options) {
    return this.addDriveActions(driveId, [action], options);
  }
  async addDriveActions(driveId, actions, options) {
    const document = await this.getDrive(driveId);
    const operations = this._buildOperations(document, actions);
    const result = await this.addDriveOperations(driveId, operations, options);
    return result;
  }
  async detachDrive(driveId) {
    const documentDrive = await this.getDrive(driveId);
    const listeners = documentDrive.state.local.listeners || [];
    const triggers = documentDrive.state.local.triggers || [];
    for (const listener of listeners) {
      await this.addDriveAction(driveId, removeListener({ listenerId: listener.listenerId }));
    }
    for (const trigger of triggers) {
      await this.addDriveAction(driveId, removeTrigger({ triggerId: trigger.id }));
    }
    await this.addDriveAction(driveId, setSharingType({ type: "LOCAL" }));
  }
  getSyncStatus(syncUnitId) {
    return this.synchronizationManager.getSyncStatus(syncUnitId);
  }
  on(event, cb) {
    return this.eventEmitter.on(event, cb);
  }
  emit(event, ...args) {
    return this.eventEmitter.emit(event, ...args);
  }
  getSynchronizationUnit(driveId, syncId) {
    return this.synchronizationManager.getSynchronizationUnit(driveId, syncId);
  }
  // Add delegated methods to properly implement ISynchronizationManager
  updateSyncStatus(syncUnitId, status, error) {
    this.synchronizationManager.updateSyncStatus(syncUnitId, status, error);
  }
  initializeDriveSyncStatus(driveId, drive) {
    return this.synchronizationManager.initializeDriveSyncStatus(driveId, drive);
  }
  getCombinedSyncUnitStatus(syncUnitStatus) {
    return this.synchronizationManager.getCombinedSyncUnitStatus(syncUnitStatus);
  }
  // Add back the saveStrand method that was accidentally removed
  async saveStrand(strand, source) {
    const operations = strand.operations.map((op) => ({
      ...op,
      scope: strand.scope,
      branch: strand.branch
    }));
    const result = await (!strand.documentId ? this.queueDriveOperations(strand.driveId, operations, { source }) : this.queueOperations(strand.driveId, strand.documentId, operations, {
      source
    }));
    if (result.status === "ERROR") {
      const syncUnits = strand.documentId !== "" ? (await this.getSynchronizationUnitsIds(strand.driveId, [strand.documentId], [strand.scope], [strand.branch])).map((s) => s.syncId) : [strand.driveId];
      const operationSource = this.getOperationSource(source);
      for (const syncUnit of syncUnits) {
        this.synchronizationManager.updateSyncStatus(syncUnit, { [operationSource]: result.status }, result.error);
      }
    }
    this.eventEmitter.emit("strandUpdate", strand);
    return result;
  }
};
var DocumentDriveServer = ReadModeServer(BaseDocumentDriveServer);

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/event-emitter.js
var DefaultEventEmitter = class {
  emitter = createNanoEvents();
  emit(event, ...args) {
    return this.emitter.emit(event, ...args);
  }
  on(event, cb) {
    return this.emitter.on(event, cb);
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/listener/util.js
function debounce(func, delay = 250) {
  let timer;
  return (immediate, ...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    return new Promise((resolve, reject) => {
      if (immediate) {
        func(...args).then(resolve).catch(reject);
      } else {
        timer = setTimeout(() => {
          func(...args).then(resolve).catch(reject);
        }, delay);
      }
    });
  };
}

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/listener/listener-manager.js
var ListenerManager = class _ListenerManager {
  static LISTENER_UPDATE_DELAY = 250;
  logger = childLogger([
    "ListenerManager",
    Math.floor(Math.random() * 999).toString()
  ]);
  syncManager;
  options;
  // driveId -> listenerId -> listenerState
  listenerStateByDriveId = /* @__PURE__ */ new Map();
  constructor(syncManager, options = DefaultListenerManagerOptions) {
    this.syncManager = syncManager;
    this.options = { ...DefaultListenerManagerOptions, ...options };
    this.logger.verbose(`constructor(...)`);
  }
  async initialize(handler) {
    this.logger.verbose("initialize(...)");
    if (typeof window !== "undefined") {
      window.addEventListener("online", () => {
        this.triggerUpdate(false, { type: "local" }, handler).catch((error) => {
          this.logger.error("Non handled error updating listeners", error);
        });
      });
    }
  }
  driveHasListeners(driveId) {
    return this.listenerStateByDriveId.has(driveId);
  }
  async setListener(driveId, listener) {
    this.logger.verbose(`setListener(drive: ${driveId}, listener: ${listener.listenerId})`);
    if (driveId !== listener.driveId) {
      throw new Error("Drive ID mismatch");
    }
    let existingState;
    try {
      existingState = this.getListenerState(driveId, listener.listenerId);
    } catch {
      existingState = {};
    }
    this.setListenerState(driveId, listener.listenerId, {
      ...existingState,
      block: listener.block,
      driveId: listener.driveId,
      pendingTimeout: "0",
      listener,
      listenerStatus: "CREATED",
      syncUnits: /* @__PURE__ */ new Map()
    });
    await this.triggerUpdate(true, { type: "local" });
  }
  async removeListener(driveId, listenerId) {
    this.logger.verbose("setListener()");
    const driveMap = this.listenerStateByDriveId.get(driveId);
    if (!driveMap) {
      return false;
    }
    return Promise.resolve(driveMap.delete(listenerId));
  }
  async removeSyncUnits(driveId, syncUnits) {
    const listeners = this.listenerStateByDriveId.get(driveId);
    if (!listeners) {
      return;
    }
    for (const [, listener] of listeners) {
      for (const syncUnit of syncUnits) {
        listener.syncUnits.delete(syncUnit.syncId);
      }
    }
    return Promise.resolve();
  }
  async updateSynchronizationRevisions(driveId, syncUnits, source, willUpdate, onError, forceSync = false) {
    const listenerIdToListenerState = this.listenerStateByDriveId.get(driveId);
    if (!listenerIdToListenerState) {
      return [];
    }
    const outdatedListeners = [];
    for (const [, listenerState] of listenerIdToListenerState) {
      if (outdatedListeners.find((l) => l.listenerId === listenerState.listener.listenerId)) {
        continue;
      }
      const transmitter = listenerState.listener.transmitter;
      if (!transmitter?.transmit) {
        continue;
      }
      for (const syncUnit of syncUnits) {
        if (!this._checkFilter(listenerState.listener.filter, syncUnit)) {
          continue;
        }
        const listenerRev = listenerState.syncUnits.get(syncUnit.syncId);
        if (!listenerRev || listenerRev.listenerRev < syncUnit.revision) {
          outdatedListeners.push(listenerState.listener);
          break;
        }
      }
    }
    if (outdatedListeners.length) {
      willUpdate?.(outdatedListeners);
      return this.triggerUpdate(forceSync, source, onError);
    }
    return [];
  }
  async updateListenerRevision(listenerId, driveId, syncId, listenerRev) {
    const drive = this.listenerStateByDriveId.get(driveId);
    if (!drive) {
      return;
    }
    const listener = drive.get(listenerId);
    if (!listener) {
      return;
    }
    const lastUpdated = (/* @__PURE__ */ new Date()).toISOString();
    const entry = listener.syncUnits.get(syncId);
    if (entry) {
      entry.listenerRev = listenerRev;
      entry.lastUpdated = lastUpdated;
    } else {
      listener.syncUnits.set(syncId, { listenerRev, lastUpdated });
    }
    return Promise.resolve();
  }
  triggerUpdate = debounce(this._triggerUpdate.bind(this), _ListenerManager.LISTENER_UPDATE_DELAY);
  async _triggerUpdate(source, onError, maxContinues = 500) {
    this.logger.verbose(`_triggerUpdate(source: ${source.type}, maxContinues: ${maxContinues})`, this.listenerStateByDriveId);
    if (maxContinues < 0) {
      throw new Error("Maximum retries exhausted.");
    }
    const listenerUpdates = [];
    for (const [driveId, drive] of this.listenerStateByDriveId) {
      for (const [listenerId, listenerState] of drive) {
        const transmitter = listenerState.listener.transmitter;
        if (!transmitter?.transmit) {
          this.logger.verbose(`Transmitter not set on listener: ${listenerId}`);
          continue;
        }
        const syncUnits = await this.getListenerSyncUnits(driveId, listenerId);
        const strandUpdates = [];
        this.logger.verbose("syncUnits", syncUnits);
        const tasks = syncUnits.map((syncUnit) => async () => {
          const unitState = listenerState.syncUnits.get(syncUnit.syncId);
          if (unitState && unitState.listenerRev >= syncUnit.revision) {
            this.logger.verbose(`Abandoning push for sync unit ${syncUnit.syncId}: already up-to-date (${unitState.listenerRev} >= ${syncUnit.revision})`);
            return;
          } else {
            this.logger.verbose(`Listener out-of-date for sync unit (${syncUnit.scope}, ${syncUnit.documentId}): ${unitState?.listenerRev} < ${syncUnit.revision}`);
          }
          const opData = [];
          try {
            const data = await this.syncManager.getOperationData(
              // TODO - join queries, DEAL WITH INVALID SYNC ID ERROR
              driveId,
              syncUnit.syncId,
              {
                fromRevision: unitState?.listenerRev
              }
            );
            opData.push(...data);
          } catch (e) {
            this.logger.error(e);
          }
          if (!opData.length) {
            this.logger.verbose(`Abandoning push for ${syncUnit.syncId}: no operations found`);
            return;
          }
          strandUpdates.push({
            driveId,
            documentId: syncUnit.documentId,
            branch: syncUnit.branch,
            operations: opData,
            scope: syncUnit.scope
          });
        });
        if (this.options.sequentialUpdates) {
          this.logger.verbose(`Collecting ${tasks.length} syncUnit strandUpdates in sequence`);
          for (const task of tasks) {
            await task();
          }
        } else {
          this.logger.verbose(`Collecting ${tasks.length} syncUnit strandUpdates in parallel`);
          await Promise.all(tasks.map((task) => task()));
        }
        if (strandUpdates.length == 0) {
          this.logger.verbose(`No strandUpdates needed for listener ${listenerId}`);
          continue;
        }
        listenerState.pendingTimeout = new Date((/* @__PURE__ */ new Date()).getTime() / 1e3 + 300).toISOString();
        listenerState.listenerStatus = "PENDING";
        try {
          this.logger.verbose(`_triggerUpdate(source: ${source.type}) > transmitter.transmit`);
          const listenerRevisions = await transmitter.transmit(strandUpdates, source);
          this.logger.verbose(`_triggerUpdate(source: ${source.type}) > transmission succeeded`, listenerRevisions);
          listenerState.pendingTimeout = "0";
          listenerState.listenerStatus = "PENDING";
          const lastUpdated = (/* @__PURE__ */ new Date()).toISOString();
          let continuationNeeded = false;
          for (const revision of listenerRevisions) {
            const syncUnit = syncUnits.find((unit) => revision.documentId === unit.documentId && revision.scope === unit.scope && revision.branch === unit.branch);
            if (syncUnit) {
              listenerState.syncUnits.set(syncUnit.syncId, {
                lastUpdated,
                listenerRev: revision.revision
              });
              const su = strandUpdates.find((su2) => su2.driveId === revision.driveId && su2.documentId === revision.documentId && su2.scope === revision.scope && su2.branch === revision.branch);
              if (su && su.operations.length > 0) {
                const suIndex = su.operations.at(su.operations.length - 1)?.index;
                if (suIndex !== revision.revision) {
                  this.logger.verbose(`Revision still out-of-date for ${su.documentId}:${su.scope}:${su.branch} ${suIndex} <> ${revision.revision}`);
                  continuationNeeded = true;
                } else {
                  this.logger.verbose(`Revision match for ${su.documentId}:${su.scope}:${su.branch} ${suIndex}`);
                }
              } else {
                this.logger.verbose(`Cannot find strand update for (${revision.documentId}:${revision.scope}:${revision.branch} in drive ${revision.driveId})`);
              }
            } else {
              this.logger.warn(`Received revision for untracked unit for listener ${listenerState.listener.listenerId}`, revision);
            }
          }
          for (const revision of listenerRevisions) {
            const error = revision.status === "ERROR";
            if (revision.error?.includes("Missing operations")) {
              continuationNeeded = true;
            } else if (error) {
              throw new OperationError(revision.status, void 0, revision.error, revision.error);
            }
          }
          if (!continuationNeeded) {
            listenerUpdates.push({
              listenerId: listenerState.listener.listenerId,
              listenerRevisions
            });
          } else {
            const updates = await this._triggerUpdate(source, onError, maxContinues - 1);
            listenerUpdates.push(...updates);
          }
          listenerState.listenerStatus = "SUCCESS";
        } catch (e) {
          onError?.(e, driveId, listenerState);
          listenerState.listenerStatus = e instanceof OperationError ? e.status : "ERROR";
        }
      }
    }
    this.logger.verbose(`Returning listener updates (maxContinues: ${maxContinues})`, listenerUpdates);
    return listenerUpdates;
  }
  _checkFilter(filter, syncUnit) {
    const { branch, documentId, scope, documentType: documentType2 } = syncUnit;
    if ((!filter.branch || filter.branch.includes(branch) || filter.branch.includes("*")) && (!filter.documentId || filter.documentId.includes(documentId) || filter.documentId.includes("*")) && (!filter.scope || filter.scope.includes(scope) || filter.scope.includes("*")) && (!filter.documentType || filter.documentType.includes(documentType2) || filter.documentType.includes("*"))) {
      return true;
    }
    return false;
  }
  getListenerSyncUnits(driveId, listenerId) {
    const listener = this.listenerStateByDriveId.get(driveId)?.get(listenerId);
    if (!listener) {
      return [];
    }
    const filter = listener.listener.filter;
    return this.syncManager.getSynchronizationUnits(driveId, filter.documentId ?? ["*"], filter.scope ?? ["*"], filter.branch ?? ["*"], filter.documentType ?? ["*"]);
  }
  getListenerSyncUnitIds(driveId, listenerId) {
    const listener = this.listenerStateByDriveId.get(driveId)?.get(listenerId);
    if (!listener) {
      return Promise.resolve([]);
    }
    const filter = listener.listener.filter;
    return this.syncManager.getSynchronizationUnitsIds(driveId, filter.documentId ?? ["*"], filter.scope ?? ["*"], filter.branch ?? ["*"], filter.documentType ?? ["*"]);
  }
  async removeDrive(driveId) {
    const listenerIdToListenerState = this.listenerStateByDriveId.get(driveId);
    if (!listenerIdToListenerState) {
      return;
    }
    this.listenerStateByDriveId.delete(driveId);
    for (const [_, listenerState] of listenerIdToListenerState) {
      try {
        await listenerState.listener.transmitter?.disconnect?.();
      } catch (error) {
        this.logger.error(error);
      }
    }
  }
  async getStrands(driveId, listenerId, options) {
    const listenerState = this.getListenerState(driveId, listenerId);
    const strands = [];
    const syncUnits = await this.getListenerSyncUnits(driveId, listenerId);
    const limit = options?.limit;
    let operationsCount = 0;
    const tasks = syncUnits.map((syncUnit) => async () => {
      if (limit && operationsCount >= limit) {
        return;
      }
      if (syncUnit.revision < 0) {
        return;
      }
      const entry = listenerState.syncUnits.get(syncUnit.syncId);
      if (entry && entry.listenerRev >= syncUnit.revision) {
        return;
      }
      const { documentId, scope, branch } = syncUnit;
      try {
        const operations = await this.syncManager.getOperationData(
          // DEAL WITH INVALID SYNC ID ERROR
          driveId,
          syncUnit.syncId,
          {
            since: options?.since,
            fromRevision: options?.fromRevision ?? entry?.listenerRev,
            limit: limit ? limit - operationsCount : void 0
          }
        );
        if (!operations.length) {
          return;
        }
        operationsCount += operations.length;
        strands.push({
          driveId,
          documentId,
          scope,
          branch,
          operations
        });
      } catch (error) {
        this.logger.error(error);
        return;
      }
    });
    if (this.options.sequentialUpdates) {
      for (const task of tasks) {
        await task();
      }
    } else {
      await Promise.all(tasks.map((task) => task()));
    }
    return strands;
  }
  getListenerState(driveId, listenerId) {
    let listenerStateByListenerId = this.listenerStateByDriveId.get(driveId);
    if (!listenerStateByListenerId) {
      listenerStateByListenerId = /* @__PURE__ */ new Map();
      this.listenerStateByDriveId.set(driveId, listenerStateByListenerId);
    }
    const listenerState = listenerStateByListenerId.get(listenerId);
    if (!listenerState) {
      throw new Error("Listener not found");
    }
    return listenerState;
  }
  setListenerState(driveId, listenerId, listenerState) {
    let listenerStateByListenerId = this.listenerStateByDriveId.get(driveId);
    if (!listenerStateByListenerId) {
      listenerStateByListenerId = /* @__PURE__ */ new Map();
      this.listenerStateByDriveId.set(driveId, listenerStateByListenerId);
    }
    listenerStateByListenerId.set(listenerId, listenerState);
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/listener/transmitter/switchboard-push.js
var import_json_stringify_deterministic = __toESM(require_lib(), 1);
var SYNC_OPS_BATCH_LIMIT = 10;
var SwitchboardPushTransmitter = class {
  targetURL;
  logger = childLogger([
    "SwitchboardPushTransmitter",
    Math.floor(Math.random() * 999).toString()
  ]);
  constructor(targetURL) {
    this.targetURL = targetURL;
  }
  async transmit(strands, source) {
    if (source.type === "trigger" && source.trigger.data?.url === this.targetURL) {
      this.logger.verbose(`Cutting trigger loop from ${this.targetURL}.`);
      return strands.map((strand) => ({
        driveId: strand.driveId,
        documentId: strand.documentId,
        scope: strand.scope,
        branch: strand.branch,
        status: "SUCCESS",
        revision: strand.operations.at(-1)?.index ?? -1
      }));
    }
    const culledStrands = [];
    let opsCounter = 0;
    for (let s = 0; opsCounter <= SYNC_OPS_BATCH_LIMIT && s < strands.length; s++) {
      const currentStrand = strands.at(s);
      if (!currentStrand) {
        break;
      }
      const newOps = Math.min(SYNC_OPS_BATCH_LIMIT - opsCounter, currentStrand.operations.length);
      culledStrands.push({
        ...currentStrand,
        operations: currentStrand.operations.slice(0, newOps)
      });
      opsCounter += newOps;
    }
    this.logger.verbose(` Total update: [${strands.map((s) => s.operations.length).join(", ")}] operations`);
    this.logger.verbose(`Culled update: [${culledStrands.map((s) => s.operations.length).join(", ")}] operations`);
    try {
      const { pushUpdates } = await requestGraphql(this.targetURL, gql`
          mutation pushUpdates($strands: [InputStrandUpdate!]) {
            pushUpdates(strands: $strands) {
              driveId
              documentId
              scope
              branch
              status
              revision
              error
            }
          }
        `, {
        strands: culledStrands.map((strand) => ({
          ...strand,
          operations: strand.operations.map((op) => ({
            ...op,
            input: (0, import_json_stringify_deterministic.default)(op.input)
          }))
        }))
      });
      if (!pushUpdates) {
        throw new Error("Couldn't update listener revision");
      }
      return pushUpdates;
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
    return [];
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/listener/transmitter/factory.js
var TransmitterFactory = class {
  listenerManager;
  constructor(listenerManager) {
    this.listenerManager = listenerManager;
  }
  instance(transmitterType, listener, driveServer) {
    switch (transmitterType) {
      case "SwitchboardPush": {
        if (!listener.callInfo?.data) {
          throw new Error("No call info data: " + JSON.stringify(listener));
        }
        return new SwitchboardPushTransmitter(listener.callInfo.data);
      }
      case "Internal": {
        throw new Error("Internal transmitter not implemented");
      }
      default: {
        return new PullResponderTransmitter(listener, this.listenerManager);
      }
    }
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/sync-manager.js
var SynchronizationManager = class {
  storage;
  cache;
  documentModelModules;
  eventEmitter;
  syncStatus = /* @__PURE__ */ new Map();
  logger = childLogger(["SynchronizationManager"]);
  constructor(storage, cache, documentModelModules, eventEmitter) {
    this.storage = storage;
    this.cache = cache;
    this.documentModelModules = documentModelModules;
    this.eventEmitter = eventEmitter;
  }
  async getSynchronizationUnits(driveId, documentId, scope, branch, documentType2) {
    const synchronizationUnitsQuery = await this.getSynchronizationUnitsIds(driveId, documentId, scope, branch, documentType2);
    return this.getSynchronizationUnitsRevision(driveId, synchronizationUnitsQuery);
  }
  async getSynchronizationUnitsRevision(driveId, syncUnitsQuery) {
    const drive = await this.getDrive(driveId);
    const revisions = await this.storage.getSynchronizationUnitsRevision(syncUnitsQuery);
    return syncUnitsQuery.map((s) => ({
      ...s,
      lastUpdated: drive.created,
      revision: revisions.find((r) => r.documentId === s.documentId && r.scope === s.scope && r.branch === s.branch)?.revision ?? -1
    }));
  }
  async getSynchronizationUnitsIds(driveId, documentId, scope, branch, documentType2) {
    const drive = await this.getDrive(driveId);
    const nodes = drive.state.global.nodes.filter((node) => isFileNode(node) && (!documentId?.length || documentId.includes(node.id) || documentId.includes("*")) && (!documentType2?.length || documentType2.includes(node.documentType) || documentType2.includes("*")));
    if ((!documentId || documentId.includes("*") || documentId.includes("")) && (!documentType2?.length || documentType2.includes("powerhouse/document-drive") || documentType2.includes("*"))) {
      nodes.unshift({
        id: drive.state.global.id,
        documentType: "powerhouse/document-drive",
        synchronizationUnits: [
          {
            syncId: "0",
            scope: "global",
            branch: "main"
          }
        ]
      });
    }
    const synchronizationUnitsQuery = [];
    for (const node of nodes) {
      const nodeUnits = scope?.length || branch?.length ? node.synchronizationUnits.filter((unit) => (!scope?.length || scope.includes(unit.scope) || scope.includes("*")) && (!branch?.length || branch.includes(unit.branch) || branch.includes("*"))) : node.synchronizationUnits;
      if (!nodeUnits.length) {
        continue;
      }
      synchronizationUnitsQuery.push(...nodeUnits.map((n) => ({
        driveId,
        documentId: node.id,
        syncId: n.syncId,
        documentType: node.documentType,
        scope: n.scope,
        branch: n.branch
      })));
    }
    return synchronizationUnitsQuery;
  }
  async getSynchronizationUnitIdInfo(driveId, syncId) {
    const drive = await this.getDrive(driveId);
    const node = drive.state.global.nodes.find((node2) => isFileNode(node2) && node2.synchronizationUnits.find((unit) => unit.syncId === syncId));
    if (!node || !isFileNode(node)) {
      return void 0;
    }
    const syncUnit = node.synchronizationUnits.find((unit) => unit.syncId === syncId);
    if (!syncUnit) {
      return void 0;
    }
    return {
      syncId,
      scope: syncUnit.scope,
      branch: syncUnit.branch,
      documentId: node.id,
      documentType: node.documentType
    };
  }
  async getSynchronizationUnit(driveId, syncId) {
    const syncUnit = await this.getSynchronizationUnitIdInfo(driveId, syncId);
    if (!syncUnit) {
      return void 0;
    }
    const { scope, branch, documentId, documentType: documentType2 } = syncUnit;
    const document = await this.getDocument(driveId, documentId);
    const operations = document.operations[scope] ?? [];
    const lastOperation = operations[operations.length - 1];
    return {
      syncId,
      scope,
      branch,
      documentId,
      documentType: documentType2,
      lastUpdated: lastOperation.timestamp ?? document.lastModified,
      revision: lastOperation.index ?? 0
    };
  }
  async getOperationData(driveId, syncId, filter) {
    const syncUnit = syncId === "0" ? { documentId: "", scope: "global" } : await this.getSynchronizationUnitIdInfo(driveId, syncId);
    if (!syncUnit) {
      throw new Error(`Invalid Sync Id ${syncId} in drive ${driveId}`);
    }
    const document = syncId === "0" ? await this.getDrive(driveId) : await this.getDocument(driveId, syncUnit.documentId);
    const operations = document.operations[syncUnit.scope] ?? [];
    const filteredOperations = operations.filter((operation) => Object.keys(filter).length === 0 || (filter.since === void 0 || isBefore(filter.since, operation.timestamp)) && (filter.fromRevision === void 0 || operation.index > filter.fromRevision));
    const limitedOperations = filter.limit ? filteredOperations.slice(0, filter.limit) : filteredOperations;
    return limitedOperations.map((operation) => ({
      hash: operation.hash,
      index: operation.index,
      timestamp: operation.timestamp,
      type: operation.type,
      input: operation.input,
      skip: operation.skip,
      context: operation.context,
      id: operation.id
    }));
  }
  async getDrive(driveId) {
    try {
      const cachedDocument = await this.cache.getDocument("drives", driveId);
      if (cachedDocument && isDocumentDrive(cachedDocument)) {
        return cachedDocument;
      }
    } catch (e) {
      this.logger.error("Error getting drive from cache", e);
    }
    const driveStorage = await this.storage.getDrive(driveId);
    const result = this._buildDocument(driveStorage);
    if (!isDocumentDrive(result)) {
      throw new Error(`Document with id ${driveId} is not a Document Drive`);
    }
    return result;
  }
  async getDocument(driveId, documentId) {
    try {
      const cachedDocument = await this.cache.getDocument(driveId, documentId);
      if (cachedDocument) {
        return cachedDocument;
      }
    } catch (e) {
      this.logger.error("Error getting document from cache", e);
    }
    const documentStorage = await this.storage.getDocument(driveId, documentId);
    return this._buildDocument(documentStorage);
  }
  _buildDocument(documentStorage) {
    const documentModelModule = this.getDocumentModelModule(documentStorage.documentType);
    const operations = garbageCollectDocumentOperations(documentStorage.operations);
    return replayDocument(documentStorage.initialState, operations, documentModelModule.reducer, void 0, documentStorage, void 0, {
      checkHashes: true,
      reuseOperationResultingState: true
    });
  }
  setDocumentModelModules(modules) {
    this.documentModelModules = modules;
  }
  getDocumentModelModule(documentType2) {
    const documentModelModule = this.documentModelModules.find((m) => m.documentModel.id === documentType2);
    if (!documentModelModule) {
      throw new Error(`Document type ${documentType2} not supported`);
    }
    return documentModelModule;
  }
  getCombinedSyncUnitStatus(syncUnitStatus) {
    if (!syncUnitStatus.pull && !syncUnitStatus.push)
      return "INITIAL_SYNC";
    if (syncUnitStatus.pull === "INITIAL_SYNC")
      return "INITIAL_SYNC";
    if (syncUnitStatus.push === "INITIAL_SYNC")
      return syncUnitStatus.pull || "INITIAL_SYNC";
    const order = [
      "ERROR",
      "MISSING",
      "CONFLICT",
      "SYNCING",
      "SUCCESS"
    ];
    const sortedStatus = Object.values(syncUnitStatus).sort((a, b) => order.indexOf(a) - order.indexOf(b));
    return sortedStatus[0];
  }
  getSyncStatus(syncUnitId) {
    const status = this.syncStatus.get(syncUnitId);
    if (!status) {
      return new SynchronizationUnitNotFoundError(`Sync status not found for syncUnitId: ${syncUnitId}`, syncUnitId);
    }
    return this.getCombinedSyncUnitStatus(status);
  }
  updateSyncStatus(syncUnitId, status, error) {
    if (status === null) {
      this.syncStatus.delete(syncUnitId);
      return;
    }
    const syncUnitStatus = this.syncStatus.get(syncUnitId);
    if (!syncUnitStatus) {
      this.initSyncStatus(syncUnitId, status);
      return;
    }
    const shouldUpdateStatus = Object.entries(status).some(([key, _status]) => syncUnitStatus[key] !== _status);
    if (shouldUpdateStatus) {
      const newstatus = Object.entries(status).reduce((acc, [key, _status]) => {
        return {
          ...acc,
          // do not replace initial_syncing if it has not finished yet
          [key]: acc[key] === "INITIAL_SYNC" && _status === "SYNCING" ? "INITIAL_SYNC" : _status
        };
      }, syncUnitStatus);
      const previousCombinedStatus = this.getCombinedSyncUnitStatus(syncUnitStatus);
      const newCombinedStatus = this.getCombinedSyncUnitStatus(newstatus);
      this.syncStatus.set(syncUnitId, newstatus);
      if (previousCombinedStatus !== newCombinedStatus && this.eventEmitter) {
        this.eventEmitter.emit("syncStatus", syncUnitId, this.getCombinedSyncUnitStatus(newstatus), error, newstatus);
      }
    }
  }
  initSyncStatus(syncUnitId, status) {
    const defaultSyncUnitStatus = Object.entries(status).reduce((acc, [key, _status]) => {
      return {
        ...acc,
        [key]: _status !== "SYNCING" ? _status : "INITIAL_SYNC"
      };
    }, {});
    this.syncStatus.set(syncUnitId, defaultSyncUnitStatus);
    if (this.eventEmitter) {
      this.eventEmitter.emit("syncStatus", syncUnitId, this.getCombinedSyncUnitStatus(defaultSyncUnitStatus), void 0, defaultSyncUnitStatus);
    }
  }
  async initializeDriveSyncStatus(driveId, drive) {
    const syncUnits = await this.getSynchronizationUnitsIds(driveId);
    const syncStatus = {
      pull: drive.state.local.triggers.length > 0 ? "INITIAL_SYNC" : void 0,
      push: drive.state.local.listeners.length > 0 ? "SUCCESS" : void 0
    };
    if (!syncStatus.pull && !syncStatus.push)
      return;
    const syncUnitsIds = [driveId, ...syncUnits.map((s) => s.syncId)];
    for (const syncUnitId of syncUnitsIds) {
      this.initSyncStatus(syncUnitId, syncStatus);
    }
  }
};

// node_modules/.pnpm/document-drive@1.29.0-dev.1_@parcel+watcher@2.5.1_bufferutil@4.0.9_encoding@0.1.13_pg@8.14.1__mmjzfrulnwez6vefnsrtrx6ncu/node_modules/document-drive/dist/src/server/builder.js
var ReactorBuilder = class {
  documentModelModules = [];
  storage;
  cache;
  queueManager;
  eventEmitter;
  options;
  synchronizationManager;
  listenerManager;
  transmitterFactory;
  constructor(documentModelModules) {
    this.documentModelModules = documentModelModules;
  }
  withStorage(storage) {
    this.storage = storage;
    return this;
  }
  withCache(cache) {
    this.cache = cache;
    return this;
  }
  withQueueManager(queueManager) {
    this.queueManager = queueManager;
    return this;
  }
  withEventEmitter(eventEmitter) {
    this.eventEmitter = eventEmitter;
    return this;
  }
  withSynchronizationManager(synchronizationManager) {
    this.synchronizationManager = synchronizationManager;
    return this;
  }
  withListenerManager(listenerManager) {
    this.listenerManager = listenerManager;
    return this;
  }
  withTransmitterFactory(transmitterFactory) {
    this.transmitterFactory = transmitterFactory;
    return this;
  }
  withOptions(options) {
    this.options = options;
    return this;
  }
  build() {
    if (!this.documentModelModules.length) {
      throw new Error("Document models are required to build the server");
    }
    if (!this.storage) {
      this.storage = new MemoryStorage();
    }
    if (!this.cache) {
      this.cache = new memory_default();
    }
    if (!this.queueManager) {
      this.queueManager = new BaseQueueManager();
    }
    if (!this.eventEmitter) {
      this.eventEmitter = new DefaultEventEmitter();
    }
    if (!this.synchronizationManager) {
      this.synchronizationManager = new SynchronizationManager(this.storage, this.cache, this.documentModelModules, this.eventEmitter);
    }
    if (!this.listenerManager) {
      const config = {
        ...DefaultListenerManagerOptions,
        ...this.options?.listenerManager
      };
      this.listenerManager = new ListenerManager(this.synchronizationManager, config);
    }
    if (!this.transmitterFactory) {
      this.transmitterFactory = new TransmitterFactory(this.listenerManager);
    }
    return new DocumentDriveServer(
      this.documentModelModules,
      this.storage,
      // as we refactor, we're secretly making all the IStorage implementations also implement IDocumentStorage
      this.storage,
      this.cache,
      this.queueManager,
      this.eventEmitter,
      this.synchronizationManager,
      this.listenerManager,
      this.options
    );
  }
};

export {
  memory_default,
  addFolder,
  deleteNode,
  updateNode,
  copyNode,
  moveNode,
  isFileNode,
  isFolderNode,
  generateNodesCopy,
  generateAddNodeAction,
  DriveNotFoundError,
  mergeOperations,
  BaseQueueManager,
  ReadDriveNotFoundError,
  ReactorBuilder
};
