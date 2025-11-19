// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7SvX3":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ae5be248d29bb997";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kyksZ":[function(require,module,exports,__globalThis) {
"use strict";
///////////////////////////////
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const strtBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const taskList = document.getElementById("task-list");
const taskBtn = document.getElementById("add-task");
const taskTxt = document.getElementById("new-task");
const modes = document.querySelector(".modes");
const container = document.querySelector(".container");
const settingsBtn = document.querySelector(".settings-btn");
const settingsOverlay = document.getElementById("settings-overlay");
const settingsForm = document.getElementById("settings-form");
const settingsCancelBtn = document.getElementById("settings-cancel");
const focusInput = document.getElementById("focus-duration");
const shortInput = document.getElementById("short-break");
const longInput = document.getElementById("long-break");
const lapsInput = document.getElementById("laps-settings");
const completedTasksBtn = document.getElementById("show-completed");
const completedOverlay = document.getElementById("completed-overlay");
const completedCloseBtn = document.getElementById("completed-close");
const completedList = document.getElementById("completed-list");
const clearCompletedBtn = document.getElementById("clear-completed");
const laps = document.getElementById("laps");
const lapsText = document.getElementById("laps-text");
const longBreakAudio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
const shortBreakAudio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
let previouslyFocusedElement = null;
const STORAGE_KEYS = {
    tasks: "pomodoroTasks",
    completed: "pomodoroCompletedTasks",
    settings: "pomodoroSettings"
};
function generateId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
    return `${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}
function createTaskElement(task) {
    const listItem = document.createElement("li");
    listItem.dataset.id = task.id;
    const accessibleText = task.text.replace(/"/g, "'");
    const taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text";
    taskTextSpan.textContent = task.text;
    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.className = "task-buttons";
    const completeButton = document.createElement("button");
    completeButton.className = "task-btn complete-btn";
    completeButton.title = "Completed";
    completeButton.textContent = "\u2714\uFE0F";
    completeButton.type = "button";
    completeButton.setAttribute("aria-label", `Mark ${accessibleText} as complete`);
    const editButton = document.createElement("button");
    editButton.className = "task-btn edit-btn";
    editButton.title = "Edit task";
    editButton.textContent = "\u270F\uFE0F";
    editButton.type = "button";
    editButton.setAttribute("aria-label", `Edit ${accessibleText}`);
    const deleteButton = document.createElement("button");
    deleteButton.className = "task-btn delete-btn";
    deleteButton.title = "Delete task";
    deleteButton.textContent = "\uD83D\uDDD1\uFE0F";
    deleteButton.type = "button";
    deleteButton.setAttribute("aria-label", `Delete ${accessibleText}`);
    buttonsWrapper.appendChild(completeButton);
    buttonsWrapper.appendChild(editButton);
    buttonsWrapper.appendChild(deleteButton);
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(buttonsWrapper);
    return listItem;
}
function setControlsState(state) {
    if (state === "idle") {
        strtBtn.classList.remove("hidden");
        pauseBtn.classList.add("hidden");
        resetBtn.classList.add("hidden");
        pauseBtn.textContent = "Pause";
    } else if (state === "running") {
        strtBtn.classList.add("hidden");
        pauseBtn.classList.remove("hidden");
        resetBtn.classList.remove("hidden");
    }
}
setControlsState("idle");
function syncModeButtonState(activeMode) {
    if (!modes) return;
    modes.querySelectorAll("button").forEach((button)=>{
        const isActive = button.id === activeMode;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}
syncModeButtonState("focus");
class app {
    constructor(){
        this.tasks = [];
        this.completedTasks = [];
        this.modes = null;
        this.themeRoot = document.body;
        this.totalLaps = 4;
        this.loaded = this.loadState();
        if (!this.loaded) this.init(1500, 300, 900, 4);
        // this.mode = document.getElementById("focus");
        this.curMode = "focus";
        this.updateTheme();
    }
    init(workTime, shortbreak, longbreak, lap) {
        this.workTime = workTime;
        this.timeLeft = this.workTime;
        this.timerInterval = null;
        this.pause = null;
        this.curLap = 1;
        this.totalLaps = lap;
        this.modes = {
            focus: workTime,
            short: shortbreak,
            long: longbreak
        };
        this.changeMode("focus");
        this.updateDisplay();
        setControlsState("idle");
        laps.classList.add("hidden");
    }
    controller() {
        if (this.curMode === "focus") {
            this.changeMode(`${this.curLap + 1 <= this.totalLaps ? "short" : "long"}`);
            shortBreakAudio.play();
            this.startTimer();
        } else if (this.curMode === "short" && this.curLap + 1 <= this.totalLaps) {
            this.curLap++;
            this.changeMode(`focus`);
            shortBreakAudio.play();
            this.startTimer();
        } else {
            longBreakAudio.play();
            this.init(this.workTime, this.modes.short, this.modes.long, this.totalLaps);
        }
    }
    updateDisplay() {
        const minutesLeft = Math.floor(this.timeLeft / 60);
        const secondsLeft = this.timeLeft % 60;
        minutesDisplay.textContent = String(minutesLeft).padStart(2, "0");
        secondsDisplay.textContent = String(secondsLeft).padStart(2, "0");
    }
    changeMode(mode) {
        this.curMode = mode;
        syncModeButtonState(mode);
        this.timeLeft = this.modes[mode];
        this.updateTheme();
        this.updateDisplay();
    }
    updateTheme() {
        if (!this.themeRoot) return;
        this.themeRoot.classList.remove("focus-theme", "short-theme", "long-theme");
        const themeClass = `${this.curMode}-theme`;
        this.themeRoot.classList.add(themeClass);
    }
    saveTasks() {
        try {
            localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(this.tasks));
        } catch (error) {
            alert(error);
            console.error("Failed to save tasks:", error);
        }
    }
    saveCompletedTasks() {
        try {
            localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify(this.completedTasks));
        } catch (error) {
            alert(error);
            console.error("Failed to save completed tasks:", error);
        }
    }
    saveSettings(settings) {
        try {
            localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
        } catch (error) {
            alert(error);
            console.error("Failed to save settings:", error);
        }
    }
    renderTasks() {
        if (!taskList) return;
        taskList.innerHTML = "";
        this.tasks.forEach((task)=>{
            taskList.appendChild(createTaskElement(task));
        });
    }
    renderCompletedTasks() {
        if (!completedList) return;
        completedList.innerHTML = "";
        if (this.completedTasks.length === 0) {
            const placeholder = document.createElement("li");
            placeholder.className = "completed-empty";
            placeholder.textContent = "No completed tasks yet.";
            placeholder.setAttribute("role", "note");
            completedList.appendChild(placeholder);
            return;
        }
        this.completedTasks.forEach((task)=>{
            const listItem = document.createElement("li");
            const safeText = task.text.replace(/"/g, "'");
            listItem.textContent = task.text;
            listItem.setAttribute("aria-label", `Completed task: ${safeText}`);
            completedList.appendChild(listItem);
        });
    }
    loadState() {
        const initialDomTasks = Array.from(taskList.querySelectorAll("li .task-text")).map((span)=>({
                id: generateId(),
                text: span.textContent.trim()
            })).filter((task)=>task.text.length > 0);
        let hasSavedTasks = false;
        let hasSavedSettings = false;
        try {
            const tasksRaw = localStorage.getItem(STORAGE_KEYS.tasks);
            if (tasksRaw) {
                hasSavedTasks = true;
                const parsedTasks = JSON.parse(tasksRaw);
                if (Array.isArray(parsedTasks)) this.tasks = parsedTasks.filter((task)=>{
                    if (typeof task === "string") return task.trim().length > 0;
                    return task && typeof task.text === "string";
                }).map((task)=>{
                    if (typeof task === "string") return {
                        id: generateId(),
                        text: task.trim()
                    };
                    return {
                        id: task.id || generateId(),
                        text: task.text.trim()
                    };
                }).filter((task)=>task.text.length > 0);
            }
            if (!Array.isArray(this.tasks) || this.tasks.length === 0) {
                this.tasks = hasSavedTasks ? [] : initialDomTasks;
                if (!hasSavedTasks && this.tasks.length > 0) this.saveTasks();
            }
            const completedRaw = localStorage.getItem(STORAGE_KEYS.completed);
            if (completedRaw) {
                const parsedCompleted = JSON.parse(completedRaw);
                if (Array.isArray(parsedCompleted)) this.completedTasks = parsedCompleted.filter((task)=>{
                    if (typeof task === "string") return task.trim().length > 0;
                    return task && typeof task.text === "string";
                }).map((task)=>{
                    if (typeof task === "string") return {
                        id: generateId(),
                        text: task.trim(),
                        completedAt: Date.now()
                    };
                    return {
                        id: task.id || generateId(),
                        text: task.text.trim(),
                        completedAt: typeof task.completedAt === "number" ? task.completedAt : Date.now()
                    };
                }).filter((task)=>task.text.length > 0);
            }
            if (!Array.isArray(this.completedTasks)) this.completedTasks = [];
            const settingsRaw = localStorage.getItem(STORAGE_KEYS.settings);
            if (settingsRaw) {
                hasSavedSettings = true;
                const parsedSettings = JSON.parse(settingsRaw);
                if (parsedSettings && [
                    "focus",
                    "short",
                    "long",
                    "laps"
                ].every((key)=>typeof parsedSettings[key] === "number" && parsedSettings[key] > 0)) this.applySettings(parsedSettings);
            }
        } catch (error) {
            alert(error);
            console.error("Failed to load saved state:", error);
            this.tasks = initialDomTasks;
            this.completedTasks = [];
        }
        this.renderTasks();
        this.renderCompletedTasks();
        return hasSavedSettings;
    }
    updateTaskText(taskId, newText) {
        const task = this.tasks.find((item)=>item.id === taskId);
        if (!task) return;
        task.text = newText;
        this.saveTasks();
    }
    applySettings({ focus, short, long, laps }) {
        const focusSeconds = focus * 60;
        const shortSeconds = short * 60;
        const longSeconds = long * 60;
        if (focusSeconds <= 0 || shortSeconds <= 0 || longSeconds <= 0 || laps <= 0) throw new Error("Timer values must be greater than zero.");
        this.saveSettings({
            focus,
            short,
            long,
            laps
        });
        clearInterval(this.timerInterval);
        // this.init(focusSeconds, shortSeconds, longSeconds, laps);
        this.timerInterval = null;
        this.pause = null;
        this.totalLaps = laps;
        this.curLap = 1;
        this.workTime = focusSeconds;
        this.modes = {
            focus: focusSeconds,
            short: shortSeconds,
            long: longSeconds
        };
        this.changeMode("focus");
        this.timeLeft = focusSeconds;
        this.updateDisplay();
        setControlsState("idle");
    }
    startTimer() {
        if (this.timerInterval !== null) return;
        setControlsState("running");
        laps.classList.remove("hidden");
        lapsText.textContent = `${this.curLap}/${this.totalLaps} Lap`;
        this.pause = false;
        pauseBtn.textContent = "Pause";
        this.timerInterval = setInterval(()=>{
            this.timeLeft -= 1;
            this.updateDisplay();
            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
                this.controller();
            }
        }, 1000);
    }
    pauseTimer() {
        if (this.pause === null) return;
        if (!this.pause) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
            pauseBtn.textContent = "Resume";
            this.pause = true;
        } else this.resumeTimer();
    }
    resumeTimer() {
        this.pause = false;
        pauseBtn.textContent = "Pause";
        this.timerInterval = setInterval(()=>{
            this.timeLeft -= 1;
            this.updateDisplay();
            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
                this.controller();
            }
        }, 1000);
    }
    resetTimer() {
        pauseBtn.textContent = "Pause";
        clearInterval(this.timerInterval);
        this.init(this.modes.focus, this.modes.short, this.modes.long, this.totalLaps);
    }
    addTask() {
        const value = taskTxt.value.trim();
        if (!value) return;
        if (value.length > 100) {
            taskTxt.value = "";
            alert("Only 100 characters are allowed");
            return;
        }
        const newTask = {
            id: generateId(),
            text: value
        };
        this.tasks.unshift(newTask);
        this.saveTasks();
        this.renderTasks();
        taskTxt.value = "";
    }
    deleteTask(taskItem) {
        const taskId = taskItem.dataset.id;
        if (!taskId) {
            taskItem.remove();
            return;
        }
        this.tasks = this.tasks.filter((task)=>task.id !== taskId);
        this.saveTasks();
        this.renderTasks();
    }
    editTask(taskItem) {
        const taskTextSpan = taskItem.querySelector(".task-text");
        const taskId = taskItem.dataset.id;
        if (!taskTextSpan || !taskId) return;
        const currentText = taskTextSpan.textContent;
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.className = "task-edit-input";
        input.style.cssText = `
      flex: 1;
      padding: 4px 8px;
      border: 2px solid var(--accent-color);
      border-radius: 4px;
      background: #2b2b2b;
      color: #fff;
      font-size: inherit;
      font-family: inherit;
    `;
        const saveEdit = ()=>{
            const newText = input.value.trim();
            if (newText) {
                taskTextSpan.textContent = newText;
                this.updateTaskText(taskId, newText);
            }
            taskTextSpan.style.display = "";
            input.remove();
        };
        const cancelEdit = ()=>{
            taskTextSpan.style.display = "";
            input.remove();
        };
        input.addEventListener("keydown", (e)=>{
            if (e.key === "Enter") saveEdit();
            else if (e.key === "Escape") cancelEdit();
        });
        input.addEventListener("blur", saveEdit);
        taskTextSpan.style.display = "none";
        taskItem.insertBefore(input, taskTextSpan);
        input.focus();
        input.select();
    }
    completeTask(taskItem) {
        const taskId = taskItem.dataset.id;
        if (!taskId) return;
        const taskIndex = this.tasks.findIndex((task)=>task.id === taskId);
        if (taskIndex === -1) return;
        const [completedTask] = this.tasks.splice(taskIndex, 1);
        this.saveTasks();
        if (completedTask && completedTask.text.trim()) {
            this.completedTasks.unshift({
                id: completedTask.id,
                text: completedTask.text.trim(),
                completedAt: Date.now()
            });
            this.saveCompletedTasks();
        }
        this.renderTasks();
        this.renderCompletedTasks();
    }
    handleModeSelection(mode) {
        // if (!this.modes || !this.modes[mode]) return;
        if (this.curMode === mode) return;
        if (this.curMode === mode && this.timerInterval === null && !this.pause) return;
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.pause = null;
        pauseBtn.textContent = "Pause";
        if (mode === "focus") this.curLap = 1;
        this.changeMode(mode);
        setControlsState("idle");
    }
}
const pomodoro = new app();
strtBtn.addEventListener("click", pomodoro.startTimer.bind(pomodoro));
pauseBtn.addEventListener("click", pomodoro.pauseTimer.bind(pomodoro));
resetBtn.addEventListener("click", pomodoro.resetTimer.bind(pomodoro));
taskBtn.addEventListener("click", pomodoro.addTask.bind(pomodoro));
taskTxt.addEventListener("keydown", function(e) {
    if (e.key === "Enter") pomodoro.addTask();
});
// Event delegation for task buttons
taskList.addEventListener("click", function(e) {
    const taskItem = e.target.closest("li");
    if (!taskItem) return;
    if (e.target.classList.contains("delete-btn")) pomodoro.deleteTask(taskItem);
    else if (e.target.classList.contains("edit-btn")) pomodoro.editTask(taskItem);
    else if (e.target.classList.contains("complete-btn")) pomodoro.completeTask(taskItem);
});
modes.addEventListener("click", (event)=>{
    const targetButton = event.target.closest("button");
    if (!targetButton) return;
    const mode = targetButton.id;
    if (![
        "focus",
        "short",
        "long"
    ].includes(mode)) return;
    pomodoro.handleModeSelection(mode);
});
function applyOverlayBlur() {
    if (!container) return;
    container.classList.add("blurred");
    container.setAttribute("aria-hidden", "true");
}
function removeOverlayBlur() {
    if (settingsOverlay.classList.contains("hidden") && completedOverlay.classList.contains("hidden")) {
        if (container) {
            container.classList.remove("blurred");
            container.removeAttribute("aria-hidden");
        }
    }
}
function openSettingsModal() {
    focusInput.value = Math.round(pomodoro.modes.focus / 60);
    shortInput.value = Math.round(pomodoro.modes.short / 60);
    longInput.value = Math.round(pomodoro.modes.long / 60);
    lapsInput.value = Math.round(pomodoro.totalLaps);
    previouslyFocusedElement = document.activeElement;
    applyOverlayBlur();
    settingsOverlay.classList.remove("hidden");
    settingsOverlay.setAttribute("aria-hidden", "false");
    settingsBtn.setAttribute("aria-expanded", "true");
    focusInput.focus();
}
function closeSettingsModal() {
    settingsOverlay.classList.add("hidden");
    settingsOverlay.setAttribute("aria-hidden", "true");
    settingsBtn.setAttribute("aria-expanded", "false");
    settingsForm.reset();
    removeOverlayBlur();
    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === "function") previouslyFocusedElement.focus();
    previouslyFocusedElement = null;
}
settingsBtn.addEventListener("click", openSettingsModal);
settingsCancelBtn.addEventListener("click", closeSettingsModal);
settingsOverlay.addEventListener("click", (event)=>{
    if (event.target === settingsOverlay) closeSettingsModal();
});
settingsForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const focusMinutes = parseInt(focusInput.value, 10);
    const shortMinutes = parseInt(shortInput.value, 10);
    const longMinutes = parseInt(longInput.value, 10);
    const laps = parseInt(lapsInput.value, 10);
    if (Number.isNaN(focusMinutes) || Number.isNaN(shortMinutes) || Number.isNaN(longMinutes) || Number.isNaN(laps) || focusMinutes <= 0 || shortMinutes <= 0 || longMinutes <= 0 || laps <= 0 || focusMinutes > 120 || shortMinutes > 20 || longMinutes > 60 || laps > 10) {
        alert("Please enter valid numeric values for all timers.");
        return;
    }
    try {
        pomodoro.applySettings({
            focus: focusMinutes,
            short: shortMinutes,
            long: longMinutes,
            laps: laps
        });
        closeSettingsModal();
    } catch (error) {
        alert(error.message);
    }
});
// Completed tasks modal logic
function openCompletedModal() {
    pomodoro.renderCompletedTasks();
    previouslyFocusedElement = document.activeElement;
    applyOverlayBlur();
    completedOverlay.classList.remove("hidden");
    completedOverlay.setAttribute("aria-hidden", "false");
    completedTasksBtn.setAttribute("aria-expanded", "true");
    completedCloseBtn.focus();
}
function clearCompletedTasks() {
    pomodoro.completedTasks = [];
    pomodoro.renderCompletedTasks();
    localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify([]));
}
function closeCompletedModal() {
    completedOverlay.classList.add("hidden");
    completedOverlay.setAttribute("aria-hidden", "true");
    completedTasksBtn.setAttribute("aria-expanded", "false");
    removeOverlayBlur();
    if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === "function") previouslyFocusedElement.focus();
    previouslyFocusedElement = null;
}
completedTasksBtn.addEventListener("click", openCompletedModal);
completedCloseBtn.addEventListener("click", closeCompletedModal);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
completedOverlay.addEventListener("click", (event)=>{
    if (event.target === completedOverlay) closeCompletedModal();
});
document.addEventListener("keydown", (event)=>{
    if (event.key === "Escape") {
        if (!settingsOverlay.classList.contains("hidden")) closeSettingsModal();
        else if (!completedOverlay.classList.contains("hidden")) closeCompletedModal();
    }
});

},{}]},["7SvX3","kyksZ"], "kyksZ", "parcelRequire7e41", {})

//# sourceMappingURL=my_first_project.d29bb997.js.map
