// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var n = 0;
var string = "\n*{\n    box-sizing: border-box;\n    padding: 0;margin: 0;\n}\n\nmain {\n    width: 600px;\n    height: 600px;\n    border-radius: 50%; \n    border: 3px solid black;\n    margin: 10vh auto;\n    background-color: rgb(60,157,202);\n    position: relative;\n}\n\n.face {\n    width: 540px;\n    height: 480px;\n    border:2px solid thick;\n    background-color: white;\n    border-radius: 270px/240px;\n    position: absolute;\n    top: 110px;\n    left: 30px;\n}\n.eye {\n    width: 120px;\n    height: 140px;\n    border: 1px solid black;\n    border-radius: 60px/70px;\n    background-color: white;\n    z-index: 1;\n}\n\n.left {\n    position: absolute;\n    right: 50%;\n    top: 55px;\n}\n .right {\n    position: absolute;\n    left: 50%;\n    top: 55px;\n}\n.nose {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: rgb(185,3,25);\n    position: relative;\n    left: 50%;\n    margin-left: -23px;\n    top:55px;\n    z-index: 1;\n}\n.nose::after{\n    content: '';\n    display: block;\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    position: relative;\n    top: 15px;\n    left: 8px;\n    background-color:white;\n}\n.centerLine{\n    width: 2px;\n    height: 290px;\n    background-color: #000;\n    position: absolute;\n    left: 50%;\n    margin-left: -2.5   px;\n    top:95px;\n    z-index: 1;\n}\n\n.mouth {\n   width: 400px;\n   height: 400px;\n   border-radius: 100%;\n   position: relative;\n   left: 50%;\n   margin-left: -200px;\n   bottom: 52px;\n   background-color: #000;\n}\n.mouth::after{\n    content: '';\n    display: block;\n    border-radius: 100%;\n    position: relative;\n    width: 402px;\n    height: 401px;\n    top: -3px;\n    left: -1.5px;\n    background-color: #fff;\n}\n.leftLine{\n    width: 2px;\n    height: 150px;\n    background-color: #000;\n    position: absolute;\n    transform: rotate(285deg);\n    top: 112px;\n    left: 120px;\n}\n.leftLine::before{\n    content: '';\n    display: block;\n    width: 2px;\n    height: 150px;\n    background-color: #000;\n    position: absolute;\n    transform: rotate(-14deg);\n    top: -15px;\n    left: -55px;\n}\n.leftLine::after {\n    content: '';\n    display: block;\n    width: 2px;\n    height: 150px;\n    background-color: #000;\n    position: absolute;\n    transform: rotate(330deg);\n    top: 10px;\n    left: -110px;\n}\n\n.rightLine {\n    width: 2px;\n    height: 150px;\n    background-color: #000;\n    position: absolute;\n    transform: rotate(75deg);\n    top: 112px;\n    right: 125px;\n}\n.rightLine::before{\n    content: '';\n    display: block;\n    width: 2px;\n    height: 150px;\n    background-color: #000;\n    position:relative;\n    transform: rotate(10deg);\n    top: -5px;\n    right:-50px;\n}\n.rightLine::after{\n    content: '';\n    display: block;\n    width: 2px;\n    height: 150px;\n    background-color: #000;\n    position:relative;\n    transform: rotate(26deg);\n    top: -136px;\n    right:-100px;\n}\n\n.eye_black{\n    width: 25px;\n    height: 35px;\n    border-radius: 100%;\n    background-color: #000;\n    position: relative;\n    top: 85px;\n    left: 15px;\n    animation: move 5s ease infinite;\n}\n\n.eye_black::after{\n    content: '';\n    display: block;\n    width: 10px;\n    height: 16px;\n    border-radius: 5px/8px;\n    background-color: white;\n    position: relative;\n    left: 5px;\n    top: 8px;\n}\n\n@keyframes move {\n    16%{top:95px;left:30px;}\n    32%{top:100px;left:60px;}\n    48%{top:80px;left:80px}\n    64%{top:100px;left:60px}\n    80%{top:95px;left:30px}\n  }\n";
var move = document.getElementById('move');
var move2 = document.getElementById('move2');
move.innerText = string.substr(0, n);
move2.innerHTML = string.substr(0, n);
var id = setInterval(function () {
  n = n + 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  move.innerText = string.substr(0, n);
  move2.innerHTML = string.substr(0, n);
  window.scrollTo(0, 9999);
}, 0);
},{}],"C:/Users/meng/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55878" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/meng/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map