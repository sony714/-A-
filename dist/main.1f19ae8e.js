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
})({"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "*{\nbox-sizing:border-box;\npadding:0;margin:0;\n}\n\nmain{\nwidth:600px;\nheight:600px;\nborder-radius:50%;\nborder:3px solid black;\nmargin:10vh auto;\nbackground-color:rgb(60,157,202);\nposition:relative;\n}\n\n.face{\nwidth:540px;\nheight:480px;\nborder:2px solid thick;\nbackground-color:white;\nborder-radius:270px/240px;\nposition:absolute;\ntop:110px;\nleft:30px;\n}\n.eye{\nwidth:120px;\nheight:140px;\nborder:1px solid black;\nborder-radius:60px/70px;\nbackground-color:white;\nz-index:1;\n}\n\n.left{\nposition:absolute;\nright:50%;\ntop:55px;\n}\n.right{\nposition:absolute;\nleft:50%;\ntop:55px;\n}\n.nose{\nwidth:40px;\nheight:40px;\nborder-radius:50%;\nbackground-color:rgb(185,3,25);\nposition:relative;\nleft:50%;\nmargin-left:-23px;\ntop:55px;\nz-index:1;\n}\n.nose::after{\ncontent:'';\ndisplay:block;\nwidth:15px;\nheight:15px;\nborder-radius:50%;\nposition:relative;\ntop:15px;\nleft:8px;\nbackground-color:white;\n}\n.centerLine{\nwidth:2px;\nheight:290px;\nbackground-color:#000;\nposition:absolute;\nleft:50%;\nmargin-left:-2.5px;\ntop:95px;\nz-index:1;\n}\n\n.mouth{\nwidth:400px;\nheight:400px;\nborder-radius:100%;\nposition:relative;\nleft:50%;\nmargin-left:-200px;\nbottom:52px;\nbackground-color:#000;\n}\n.mouth::after{\ncontent:'';\ndisplay:block;\nborder-radius:100%;\nposition:relative;\nwidth:402px;\nheight:401px;\ntop:-3px;\nleft:-1.5px;\nbackground-color:#fff;\n}\n.leftLine{\nwidth:2px;\nheight:150px;\nbackground-color:#000;\nposition:absolute;\ntransform:rotate(285deg);\ntop:112px;\nleft:120px;\n}\n.leftLine::before{\ncontent:'';\ndisplay:block;\nwidth:2px;\nheight:150px;\nbackground-color:#000;\nposition:absolute;\ntransform:rotate(-14deg);\ntop:-15px;\nleft:-55px;\n}\n.leftLine::after{\ncontent:'';\ndisplay:block;\nwidth:2px;\nheight:150px;\nbackground-color:#000;\nposition:absolute;\ntransform:rotate(330deg);\ntop:10px;\nleft:-110px;\n}\n\n.rightLine{\nwidth:2px;\nheight:150px;\nbackground-color:#000;\nposition:absolute;\ntransform:rotate(75deg);\ntop:112px;\nright:125px;\n}\n.rightLine::before{\ncontent:'';\ndisplay:block;\nwidth:2px;\nheight:150px;\nbackground-color:#000;\nposition:relative;\ntransform:rotate(10deg);\ntop:-5px;\nright:-50px;\n}\n.rightLine::after{\ncontent:'';\ndisplay:block;\nwidth:2px;\nheight:150px;\nbackground-color:#000;\nposition:relative;\ntransform:rotate(26deg);\ntop:-136px;\nright:-100px;\n}\n\n.eye_black{\nwidth:25px;\nheight:35px;\nborder-radius:100%;\nbackground-color:#000;\nposition:relative;\ntop:85px;\nleft:15px;\nanimation:move 5s ease infinite;\n}\n\n.eye_black::after{\ncontent:'';\ndisplay:block;\nwidth:10px;\nheight:16px;\nborder-radius:5px/8px;\nbackground-color:white;\nposition:relative;\nleft:5px;\ntop:8px;\n}\n\n@keyframes move{\n16%{top:95px;left:30px;}\n32%{top:100px;left:60px;}\n48%{top:80px;left:80px}\n64%{top:100px;left:60px}\n80%{top:95px;left:30px}\n}";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 0;
var time = 50;
var move = document.getElementById('move');
var move2 = document.getElementById('move2');
move.innerText = _style.default.substr(0, n);
move2.innerHTML = _style.default.substr(0, n);

var run = function run() {
  n = n + 1;

  if (n > _style.default.length) {
    window.clearInterval(id);
    return;
  }

  move.innerText = _style.default.substr(0, n);
  move2.innerHTML = _style.default.substr(0, n);
  window.scrollTo(0, 9999);
};

var play = function play() {
  return setInterval(run, time);
};

var pause = function pause() {
  window.clearInterval(id);
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = function () {
  pause();
  time = 200;
  id = play();
};

btnNormal.onclick = function () {
  pause();
  time = 50;
  id = play();
};

btnFast.onclick = function () {
  pause();
  time = 0;
  id = play();
};
},{"./style.js":"style.js"}],"C:/Users/meng/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56563" + '/');

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