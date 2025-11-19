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
})({"iUuJv":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "47f455d51fcc916e";
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

},{}],"fILKw":[function(require,module,exports,__globalThis) {
// js/main.js
var _appJs = require("./app.js");
const audioSources = {
    long: new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"),
    short: new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg")
};
document.addEventListener("DOMContentLoaded", ()=>{
    const app = (0, _appJs.createPomodoroApp)({
        audioSources
    });
    app.init();
    window._pomodoro = app; // optional debug handle
});

},{"./app.js":"2R06K"}],"2R06K":[function(require,module,exports,__globalThis) {
// js/app.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPomodoroApp", ()=>createPomodoroApp);
var _utilsJs = require("./utils.js");
var _timerJs = require("./timer.js");
var _domJs = require("./dom.js");
var _tasksJs = require("./tasks.js");
var _modalsJs = require("./modals.js");
function createPomodoroApp({ audioSources = {} } = {}) {
    // DOM elements (query once)
    const minutesDisplay = (0, _domJs.qs)("minutes");
    const secondsDisplay = (0, _domJs.qs)("seconds");
    const startBtn = (0, _domJs.qs)("start");
    const pauseBtn = (0, _domJs.qs)("pause");
    const resetBtn = (0, _domJs.qs)("reset");
    const taskList = (0, _domJs.qs)("task-list");
    const taskBtn = (0, _domJs.qs)("add-task");
    const taskTxt = (0, _domJs.qs)("new-task");
    const modes = document.querySelector(".modes");
    const container = document.querySelector(".container");
    const settingsBtn = (0, _domJs.qs)("settings-btn");
    const settingsOverlay = (0, _domJs.qs)("settings-overlay");
    const settingsForm = (0, _domJs.qs)("settings-form");
    const settingsCancelBtn = (0, _domJs.qs)("settings-cancel");
    const focusInput = (0, _domJs.qs)("focus-duration");
    const shortInput = (0, _domJs.qs)("short-break");
    const longInput = (0, _domJs.qs)("long-break");
    const lapsInput = (0, _domJs.qs)("laps-settings");
    const completedTasksBtn = (0, _domJs.qs)("show-completed");
    const completedOverlay = (0, _domJs.qs)("completed-overlay");
    const completedCloseBtn = (0, _domJs.qs)("completed-close");
    const completedList = (0, _domJs.qs)("completed-list");
    const clearCompletedBtn = (0, _domJs.qs)("clear-completed");
    const lapsEl = (0, _domJs.qs)("laps");
    const lapsText = (0, _domJs.qs)("laps-text");
    // Audio
    const longBreakAudio = audioSources.long || null;
    const shortBreakAudio = audioSources.short || null;
    // app state
    let tasks = _tasksJs.loadFromStorage((0, _utilsJs.STORAGE_KEYS).tasks) || [];
    if (!Array.isArray(tasks)) tasks = [];
    let completedTasks = _tasksJs.loadFromStorage((0, _utilsJs.STORAGE_KEYS).completed) || [];
    if (!Array.isArray(completedTasks)) completedTasks = [];
    let settingsSaved = _tasksJs.loadFromStorage((0, _utilsJs.STORAGE_KEYS).settings);
    // default settings (minutes)
    const defaultSettings = {
        focus: 25,
        short: 5,
        long: 15,
        laps: 4
    };
    const settings = settingsSaved || defaultSettings;
    let totalLaps = settings.laps;
    let curLap = 1;
    let modesMap = {
        focus: settings.focus * 60,
        short: settings.short * 60,
        long: settings.long * 60
    };
    let curMode = "focus";
    // timer factory instance
    let timer = (0, _timerJs.createTimer)({
        initialSeconds: modesMap[curMode],
        onTick: onTick,
        onComplete: onComplete
    });
    function renderTasks() {
        if (!taskList) return;
        taskList.innerHTML = "";
        tasks.forEach((t)=>taskList.appendChild((0, _domJs.createTaskElement)(t)));
    }
    function renderCompletedTasks() {
        if (!completedList) return;
        completedList.innerHTML = "";
        if (completedTasks.length === 0) {
            const placeholder = document.createElement("li");
            placeholder.className = "completed-empty";
            placeholder.textContent = "No completed tasks yet.";
            placeholder.setAttribute("role", "note");
            completedList.appendChild(placeholder);
            return;
        }
        completedTasks.forEach((t)=>{
            const li = document.createElement("li");
            li.textContent = t.text;
            li.setAttribute("aria-label", `Completed task: ${t.text}`);
            completedList.appendChild(li);
        });
    }
    function updateDisplay(secondsLeft = timer.getTime()) {
        const minutesLeft = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;
        minutesDisplay.textContent = String(minutesLeft).padStart(2, "0");
        secondsDisplay.textContent = String(seconds).padStart(2, "0");
    }
    function onTick(secondsLeft) {
        updateDisplay(secondsLeft);
    }
    function onComplete() {
        // play audio depending on next mode
        if (curMode === "focus") {
            // after focus -> short or long
            if (curLap + 1 <= totalLaps) {
                if (shortBreakAudio) shortBreakAudio.play();
            } else if (longBreakAudio) longBreakAudio.play();
        } else if (curMode === "short") {
            if (shortBreakAudio) shortBreakAudio.play();
        } else if (longBreakAudio) longBreakAudio.play();
        controller();
    }
    function controller() {
        if (curMode === "focus") {
            const next = curLap + 1 <= totalLaps ? "short" : "long";
            changeMode(next);
            timer.reset(modesMap[next]);
            timer.start();
        } else if (curMode === "short" && curLap + 1 <= totalLaps) {
            curLap += 1;
            changeMode("focus");
            lapsText.textContent = `${curLap}/${totalLaps} Lap`;
            timer.reset(modesMap.focus);
            timer.start();
        } else {
            // finished lap cycle => reset everything
            curLap = 1;
            totalLaps = settings.laps;
            modesMap = {
                focus: settings.focus * 60,
                short: settings.short * 60,
                long: settings.long * 60
            };
            changeMode("focus");
            timer.reset(modesMap.focus);
            (0, _domJs.setControlsState)("idle", startBtn, pauseBtn, resetBtn);
            lapsEl.classList.add("hidden");
        }
    }
    function changeMode(mode) {
        curMode = mode;
        (0, _domJs.syncModeButtonState)(mode, modes);
        timer.setSeconds(modesMap[mode]);
        updateTheme();
        updateDisplay(timer.getTime());
    }
    function updateTheme() {
        document.body.classList.remove("focus-theme", "short-theme", "long-theme");
        const themeClass = `${curMode}-theme`;
        document.body.classList.add(themeClass);
    }
    // public UI actions
    function startTimer() {
        if (timer.isRunning()) return;
        (0, _domJs.setControlsState)("running", startBtn, pauseBtn, resetBtn);
        lapsEl.classList.remove("hidden");
        lapsText.textContent = `${curLap}/${totalLaps} Lap`;
        timer.start();
    }
    function pauseTimer() {
        if (!timer.isRunning() && !timer.getTime) return;
        if (timer.isRunning()) {
            timer.pause();
            pauseBtn.textContent = "Resume";
        } else {
            timer.resume();
            pauseBtn.textContent = "Pause";
        }
    }
    function resetTimer() {
        pauseBtn.textContent = "Pause";
        timer.reset(modesMap.focus);
        curLap = 1;
        changeMode("focus");
        (0, _domJs.setControlsState)("idle", startBtn, pauseBtn, resetBtn);
        lapsEl.classList.add("hidden");
    }
    function addTaskFromInput() {
        const value = taskTxt.value.trim();
        if (!value) return;
        if (value.length > 100) {
            taskTxt.value = "";
            alert("Only 100 characters are allowed");
            return;
        }
        const newTask = {
            id: (0, _utilsJs.generateId)(),
            text: value
        };
        tasks = _tasksJs.addTask(tasks, newTask);
        renderTasks();
        taskTxt.value = "";
    }
    function deleteTaskFromNode(li) {
        const id = li.dataset.id;
        if (!id) {
            li.remove();
            return;
        }
        tasks = _tasksJs.deleteTask(tasks, id);
        renderTasks();
    }
    function editTaskFromNode(li) {
        const span = li.querySelector(".task-text");
        const id = li.dataset.id;
        if (!span || !id) return;
        const currentText = span.textContent;
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
        let finished = false;
        input.addEventListener("keydown", (e)=>{
            if (e.key === "Enter") save();
            else if (e.key === "Escape") cancel();
        }, {
            once: false
        });
        input.addEventListener("blur", save, {
            once: true
        });
        function save() {
            if (finished) return;
            finished = true;
            const newText = input.value.trim();
            if (newText) {
                tasks = _tasksJs.updateTask(tasks, id, newText);
                span.textContent = newText;
            }
            span.style.display = "";
            input.remove();
        }
        function cancel() {
            if (finished) return;
            finished = true;
            span.style.display = "";
            input.remove();
        }
        span.style.display = "none";
        li.insertBefore(input, span);
        input.focus();
        input.select();
    }
    function completeTaskFromNode(li) {
        const id = li.dataset.id;
        if (!id) return;
        const result = _tasksJs.completeTask(tasks, completedTasks, id);
        tasks = result.tasks;
        completedTasks = result.completedTasks;
        renderTasks();
        renderCompletedTasks();
    }
    // modal logic (uses modals helpers)
    const previouslyFocused = {
        value: null
    };
    function openSettingsModal() {
        focusInput.value = Math.round(settings.focus);
        shortInput.value = Math.round(settings.short);
        longInput.value = Math.round(settings.long);
        lapsInput.value = Math.round(settings.laps);
        _modalsJs.openModal(settingsOverlay, previouslyFocused, container);
        focusInput.focus();
    }
    function closeSettingsModal() {
        _modalsJs.closeModal(settingsOverlay, previouslyFocused, container);
        settingsForm.reset();
    }
    function submitSettingsForm(e) {
        e.preventDefault();
        const focus = parseInt(focusInput.value, 10);
        const short = parseInt(shortInput.value, 10);
        const long = parseInt(longInput.value, 10);
        const laps = parseInt(lapsInput.value, 10);
        if (Number.isNaN(focus) || Number.isNaN(short) || Number.isNaN(long) || Number.isNaN(laps) || focus <= 0 || short <= 0 || long <= 0 || laps <= 0 || focus > 120 || short > 20 || long > 60 || laps > 10) {
            alert("Please enter valid numeric values for all timers.");
            return;
        }
        settings.focus = focus;
        settings.short = short;
        settings.long = long;
        settings.laps = laps;
        // persist
        // taskHelpers.saveToStorage = taskHelpers.saveToStorage || (() => {}); // guard if not exported
        // localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
        // persist settings via exported helper (ensures consistent storage handling)
        if (typeof _tasksJs.saveToStorage === "function") _tasksJs.saveToStorage((0, _utilsJs.STORAGE_KEYS).settings, settings);
        else // fallback if helper is missing — direct localStorage
        localStorage.setItem((0, _utilsJs.STORAGE_KEYS).settings, JSON.stringify(settings));
        totalLaps = settings.laps;
        modesMap = {
            focus: settings.focus * 60,
            short: settings.short * 60,
            long: settings.long * 60
        };
        // reset timer to new focus
        resetTimer();
        closeSettingsModal();
    }
    // completed modal
    function openCompletedModal() {
        renderCompletedTasks();
        _modalsJs.openModal(completedOverlay, previouslyFocused, container);
        completedCloseBtn.focus();
    }
    function closeCompletedModal() {
        _modalsJs.closeModal(completedOverlay, previouslyFocused, container);
    }
    function clearCompleted() {
        completedTasks = [];
        renderCompletedTasks();
        localStorage.setItem((0, _utilsJs.STORAGE_KEYS).completed, JSON.stringify([]));
    }
    // event bindings
    function bindEvents() {
        startBtn.addEventListener("click", startTimer);
        pauseBtn.addEventListener("click", pauseTimer);
        resetBtn.addEventListener("click", resetTimer);
        taskBtn.addEventListener("click", addTaskFromInput);
        taskTxt.addEventListener("keydown", (e)=>{
            if (e.key === "Enter") addTaskFromInput();
        });
        // delegated task buttons
        taskList.addEventListener("click", (e)=>{
            const li = e.target.closest("li");
            if (!li) return;
            if (e.target.classList.contains("delete-btn")) deleteTaskFromNode(li);
            else if (e.target.classList.contains("edit-btn")) editTaskFromNode(li);
            else if (e.target.classList.contains("complete-btn")) {
                const res = _tasksJs.completeTask(tasks, completedTasks, li.dataset.id);
                tasks = res.tasks;
                completedTasks = res.completedTasks;
                renderTasks();
                renderCompletedTasks();
            }
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
            if (curMode === mode && !timer.isRunning()) return;
            timer.pause();
            timer.reset(modesMap[mode]);
            changeMode(mode);
            (0, _domJs.setControlsState)("idle", startBtn, pauseBtn, resetBtn);
        });
        settingsBtn.addEventListener("click", openSettingsModal);
        settingsCancelBtn.addEventListener("click", closeSettingsModal);
        settingsForm.addEventListener("submit", submitSettingsForm);
        settingsOverlay.addEventListener("click", (ev)=>{
            if (ev.target === settingsOverlay) closeSettingsModal();
        });
        completedTasksBtn.addEventListener("click", openCompletedModal);
        completedCloseBtn.addEventListener("click", closeCompletedModal);
        clearCompletedBtn.addEventListener("click", clearCompleted);
        completedOverlay.addEventListener("click", (ev)=>{
            if (ev.target === completedOverlay) closeCompletedModal();
        });
        document.addEventListener("keydown", (ev)=>{
            if (ev.key === "Escape") {
                if (!settingsOverlay.classList.contains("hidden")) closeSettingsModal();
                else if (!completedOverlay.classList.contains("hidden")) closeCompletedModal();
            }
        });
    }
    // initial render
    function init() {
        (0, _domJs.setControlsState)("idle", startBtn, pauseBtn, resetBtn);
        (0, _domJs.syncModeButtonState)("focus", modes);
        renderTasks();
        renderCompletedTasks();
        updateDisplay(modesMap.focus);
        bindEvents();
    }
    // public API for tests or external control
    return {
        init,
        startTimer,
        pauseTimer,
        resetTimer,
        addTaskFromInput,
        getState: ()=>({
                tasks,
                completedTasks,
                settings,
                curMode,
                curLap
            })
    };
}

},{"./utils.js":"khuqI","./timer.js":"clu9n","./dom.js":"jYv5E","./tasks.js":"iAzNu","./modals.js":"luJDY","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"khuqI":[function(require,module,exports,__globalThis) {
// js/utils.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STORAGE_KEYS", ()=>STORAGE_KEYS);
parcelHelpers.export(exports, "generateId", ()=>generateId);
parcelHelpers.export(exports, "safeText", ()=>safeText);
const STORAGE_KEYS = {
    tasks: "pomodoroTasks",
    completed: "pomodoroCompletedTasks",
    settings: "pomodoroSettings"
};
function generateId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
    return `${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}
function safeText(text = "") {
    return String(text).replace(/"/g, "'");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"clu9n":[function(require,module,exports,__globalThis) {
// js/timer.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTimer", ()=>createTimer);
function createTimer({ initialSeconds = 1500, onTick = ()=>{}, onComplete = ()=>{} } = {}) {
    let secondsLeft = initialSeconds;
    let intervalId = null;
    let paused = true;
    function setSeconds(s) {
        secondsLeft = Math.max(0, Math.floor(s));
    }
    function start() {
        if (intervalId !== null) return;
        paused = false;
        intervalId = setInterval(()=>{
            secondsLeft -= 1;
            onTick(secondsLeft);
            if (secondsLeft <= 0) {
                clearInterval(intervalId);
                intervalId = null;
                onComplete();
            }
        }, 1000);
        onTick(secondsLeft);
    }
    function pause() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            paused = true;
        }
    }
    function resume() {
        if (intervalId !== null) return;
        paused = false;
        start();
    }
    function reset(newSeconds = initialSeconds) {
        pause();
        setSeconds(newSeconds);
        onTick(secondsLeft);
    }
    function isRunning() {
        return intervalId !== null;
    }
    function getTime() {
        return secondsLeft;
    }
    return {
        start,
        pause,
        resume,
        reset,
        isRunning,
        getTime,
        setSeconds
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jYv5E":[function(require,module,exports,__globalThis) {
// js/dom.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "qs", ()=>qs);
parcelHelpers.export(exports, "createTaskElement", ()=>createTaskElement);
parcelHelpers.export(exports, "setControlsState", ()=>setControlsState);
parcelHelpers.export(exports, "syncModeButtonState", ()=>syncModeButtonState);
var _utilsJs = require("./utils.js");
function qs(id) {
    return document.getElementById(id);
}
function createTaskElement(task) {
    const listItem = document.createElement("li");
    listItem.dataset.id = task.id;
    const taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text";
    taskTextSpan.textContent = task.text;
    const buttonsWrapper = document.createElement("div");
    buttonsWrapper.className = "task-buttons";
    const completeButton = document.createElement("button");
    completeButton.className = "task-btn complete-btn";
    completeButton.title = "Completed";
    completeButton.type = "button";
    completeButton.textContent = "\u2714\uFE0F";
    completeButton.setAttribute("aria-label", `Mark ${(0, _utilsJs.safeText)(task.text)} as complete`);
    const editButton = document.createElement("button");
    editButton.className = "task-btn edit-btn";
    editButton.title = "Edit task";
    editButton.type = "button";
    editButton.textContent = "\u270F\uFE0F";
    editButton.setAttribute("aria-label", `Edit ${(0, _utilsJs.safeText)(task.text)}`);
    const deleteButton = document.createElement("button");
    deleteButton.className = "task-btn delete-btn";
    deleteButton.title = "Delete task";
    deleteButton.type = "button";
    deleteButton.textContent = "\uD83D\uDDD1\uFE0F";
    deleteButton.setAttribute("aria-label", `Delete ${(0, _utilsJs.safeText)(task.text)}`);
    buttonsWrapper.append(completeButton, editButton, deleteButton);
    listItem.append(taskTextSpan, buttonsWrapper);
    return listItem;
}
function setControlsState(state, startBtn, pauseBtn, resetBtn) {
    if (state === "idle") {
        startBtn.classList.remove("hidden");
        pauseBtn.classList.add("hidden");
        resetBtn.classList.add("hidden");
        pauseBtn.textContent = "Pause";
    } else if (state === "running") {
        startBtn.classList.add("hidden");
        pauseBtn.classList.remove("hidden");
        resetBtn.classList.remove("hidden");
    }
}
function syncModeButtonState(activeMode, modesContainer) {
    if (!modesContainer) return;
    modesContainer.querySelectorAll("button").forEach((button)=>{
        const isActive = button.id === activeMode;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

},{"./utils.js":"khuqI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iAzNu":[function(require,module,exports,__globalThis) {
// js/tasks.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadFromStorage", ()=>loadFromStorage);
parcelHelpers.export(exports, "saveToStorage", ()=>saveToStorage);
parcelHelpers.export(exports, "addTask", ()=>addTask);
parcelHelpers.export(exports, "deleteTask", ()=>deleteTask);
parcelHelpers.export(exports, "updateTask", ()=>updateTask);
parcelHelpers.export(exports, "completeTask", ()=>completeTask);
var _utilsJs = require("./utils.js");
function loadFromStorage(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error("Storage write failed", e);
    }
}
function addTask(tasks, newTask, save = true) {
    const next = [
        newTask,
        ...tasks
    ];
    if (save) saveToStorage((0, _utilsJs.STORAGE_KEYS).tasks, next);
    return next;
}
function deleteTask(tasks, taskId, save = true) {
    const next = tasks.filter((t)=>t.id !== taskId);
    if (save) saveToStorage((0, _utilsJs.STORAGE_KEYS).tasks, next);
    return next;
}
function updateTask(tasks, taskId, newText, save = true) {
    const next = tasks.map((t)=>t.id === taskId ? {
            ...t,
            text: newText
        } : t);
    if (save) saveToStorage((0, _utilsJs.STORAGE_KEYS).tasks, next);
    return next;
}
function completeTask(tasks, completedTasks, taskId, save = true) {
    const idx = tasks.findIndex((t)=>t.id === taskId);
    if (idx === -1) return {
        tasks,
        completedTasks
    };
    const [task] = tasks.slice(idx, idx + 1);
    const nextTasks = tasks.slice(0, idx).concat(tasks.slice(idx + 1));
    const nextCompleted = [
        {
            ...task,
            completedAt: Date.now()
        },
        ...completedTasks
    ];
    if (save) {
        saveToStorage((0, _utilsJs.STORAGE_KEYS).tasks, nextTasks);
        saveToStorage((0, _utilsJs.STORAGE_KEYS).completed, nextCompleted);
    }
    return {
        tasks: nextTasks,
        completedTasks: nextCompleted
    };
}

},{"./utils.js":"khuqI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"luJDY":[function(require,module,exports,__globalThis) {
// js/modals.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyOverlayBlur", ()=>applyOverlayBlur);
parcelHelpers.export(exports, "removeOverlayBlur", ()=>removeOverlayBlur);
parcelHelpers.export(exports, "openModal", ()=>openModal);
parcelHelpers.export(exports, "closeModal", ()=>closeModal);
function applyOverlayBlur(container) {
    if (!container) return;
    container.classList.add("blurred");
    container.setAttribute("aria-hidden", "true");
}
function removeOverlayBlur(container) {
    if (!container) return;
    container.classList.remove("blurred");
    container.removeAttribute("aria-hidden");
}
function openModal(overlayEl, previouslyFocusedRef, container) {
    previouslyFocusedRef.value = document.activeElement;
    applyOverlayBlur(container);
    overlayEl.classList.remove("hidden");
    overlayEl.setAttribute("aria-hidden", "false");
}
function closeModal(overlayEl, previouslyFocusedRef, container) {
    overlayEl.classList.add("hidden");
    overlayEl.setAttribute("aria-hidden", "true");
    removeOverlayBlur(container);
    const prev = previouslyFocusedRef.value;
    if (prev && typeof prev.focus === "function") prev.focus();
    previouslyFocusedRef.value = null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["iUuJv","fILKw"], "fILKw", "parcelRequire7e41", {})

//# sourceMappingURL=my_first_project.1fcc916e.js.map
