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
})({"../node_modules/daisyui/dist/resets/general.js":[function(require,module,exports) {
module.exports = {"html":{"WebkitTapHighlightColor":"transparent"}};
},{}],"js/sockets/sockjs.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* sockjs-client v1.0.2 | http://sockjs.org | MIT license */
!function (t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var e;
    "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.SockJS = t();
  }
}(function () {
  var t;
  return function e(t, n, r) {
    function i(s, a) {
      if (!n[s]) {
        if (!t[s]) {
          var u = "function" == typeof require && require;
          if (!a && u) return u(s, !0);
          if (o) return o(s, !0);
          var l = new Error("Cannot find module '" + s + "'");
          throw l.code = "MODULE_NOT_FOUND", l;
        }

        var c = n[s] = {
          exports: {}
        };
        t[s][0].call(c.exports, function (e) {
          var n = t[s][1][e];
          return i(n ? n : e);
        }, c, c.exports, e, t, n, r);
      }

      return n[s].exports;
    }

    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) {
      i(r[s]);
    }

    return i;
  }({
    1: [function (t, e) {
      (function (n) {
        "use strict";

        var r = t("./transport-list");
        e.exports = t("./main")(r), "_sockjs_onload" in n && setTimeout(n._sockjs_onload, 1);
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./main": 14,
      "./transport-list": 16
    }],
    2: [function (t, e) {
      "use strict";

      function n() {
        i.call(this), this.initEvent("close", !1, !1), this.wasClean = !1, this.code = 0, this.reason = "";
      }

      var r = t("inherits"),
          i = t("./event");
      r(n, i), e.exports = n;
    }, {
      "./event": 4,
      inherits: 54
    }],
    3: [function (t, e) {
      "use strict";

      function n() {
        i.call(this);
      }

      var r = t("inherits"),
          i = t("./eventtarget");
      r(n, i), n.prototype.removeAllListeners = function (t) {
        t ? delete this._listeners[t] : this._listeners = {};
      }, n.prototype.once = function (t, e) {
        function n() {
          r.removeListener(t, n), i || (i = !0, e.apply(this, arguments));
        }

        var r = this,
            i = !1;
        this.on(t, n);
      }, n.prototype.emit = function (t) {
        var e = this._listeners[t];
        if (e) for (var n = Array.prototype.slice.call(arguments, 1), r = 0; r < e.length; r++) {
          e[r].apply(this, n);
        }
      }, n.prototype.on = n.prototype.addListener = i.prototype.addEventListener, n.prototype.removeListener = i.prototype.removeEventListener, e.exports.EventEmitter = n;
    }, {
      "./eventtarget": 5,
      inherits: 54
    }],
    4: [function (t, e) {
      "use strict";

      function n(t) {
        this.type = t;
      }

      n.prototype.initEvent = function (t, e, n) {
        return this.type = t, this.bubbles = e, this.cancelable = n, this.timeStamp = +new Date(), this;
      }, n.prototype.stopPropagation = function () {}, n.prototype.preventDefault = function () {}, n.CAPTURING_PHASE = 1, n.AT_TARGET = 2, n.BUBBLING_PHASE = 3, e.exports = n;
    }, {}],
    5: [function (t, e) {
      "use strict";

      function n() {
        this._listeners = {};
      }

      n.prototype.addEventListener = function (t, e) {
        t in this._listeners || (this._listeners[t] = []);
        var n = this._listeners[t];
        -1 === n.indexOf(e) && (n = n.concat([e])), this._listeners[t] = n;
      }, n.prototype.removeEventListener = function (t, e) {
        var n = this._listeners[t];

        if (n) {
          var r = n.indexOf(e);
          return -1 !== r ? void (n.length > 1 ? this._listeners[t] = n.slice(0, r).concat(n.slice(r + 1)) : delete this._listeners[t]) : void 0;
        }
      }, n.prototype.dispatchEvent = function (t) {
        var e = t.type,
            n = Array.prototype.slice.call(arguments, 0);
        if (this["on" + e] && this["on" + e].apply(this, n), e in this._listeners) for (var r = this._listeners[e], i = 0; i < r.length; i++) {
          r[i].apply(this, n);
        }
      }, e.exports = n;
    }, {}],
    6: [function (t, e) {
      "use strict";

      function n(t) {
        i.call(this), this.initEvent("message", !1, !1), this.data = t;
      }

      var r = t("inherits"),
          i = t("./event");
      r(n, i), e.exports = n;
    }, {
      "./event": 4,
      inherits: 54
    }],
    7: [function (t, e) {
      "use strict";

      function n(t) {
        this._transport = t, t.on("message", this._transportMessage.bind(this)), t.on("close", this._transportClose.bind(this));
      }

      var r = t("json3"),
          i = t("./utils/iframe");
      n.prototype._transportClose = function (t, e) {
        i.postMessage("c", r.stringify([t, e]));
      }, n.prototype._transportMessage = function (t) {
        i.postMessage("t", t);
      }, n.prototype._send = function (t) {
        this._transport.send(t);
      }, n.prototype._close = function () {
        this._transport.close(), this._transport.removeAllListeners();
      }, e.exports = n;
    }, {
      "./utils/iframe": 47,
      json3: 55
    }],
    8: [function (t, e) {
      "use strict";

      var n = t("./utils/url"),
          r = t("./utils/event"),
          i = t("json3"),
          o = t("./facade"),
          s = t("./info-iframe-receiver"),
          a = t("./utils/iframe"),
          u = t("./location");

      e.exports = function (t, e) {
        var l = {};
        e.forEach(function (t) {
          t.facadeTransport && (l[t.facadeTransport.transportName] = t.facadeTransport);
        }), l[s.transportName] = s;
        var c;

        t.bootstrap_iframe = function () {
          var e;
          a.currentWindowId = u.hash.slice(1);

          var s = function s(r) {
            if (r.source === parent && ("undefined" == typeof c && (c = r.origin), r.origin === c)) {
              var s;

              try {
                s = i.parse(r.data);
              } catch (f) {
                return;
              }

              if (s.windowId === a.currentWindowId) switch (s.type) {
                case "s":
                  var h;

                  try {
                    h = i.parse(s.data);
                  } catch (f) {
                    break;
                  }

                  var d = h[0],
                      p = h[1],
                      v = h[2],
                      m = h[3];
                  if (d !== t.version) throw new Error('Incompatibile SockJS! Main site uses: "' + d + '", the iframe: "' + t.version + '".');
                  if (!n.isOriginEqual(v, u.href) || !n.isOriginEqual(m, u.href)) throw new Error("Can't connect to different domain from within an iframe. (" + u.href + ", " + v + ", " + m + ")");
                  e = new o(new l[p](v, m));
                  break;

                case "m":
                  e._send(s.data);

                  break;

                case "c":
                  e && e._close(), e = null;
              }
            }
          };

          r.attachEvent("message", s), a.postMessage("s");
        };
      };
    }, {
      "./facade": 7,
      "./info-iframe-receiver": 10,
      "./location": 13,
      "./utils/event": 46,
      "./utils/iframe": 47,
      "./utils/url": 52,
      debug: void 0,
      json3: 55
    }],
    9: [function (t, e) {
      "use strict";

      function n(t, e) {
        r.call(this);
        var n = this,
            i = +new Date();
        this.xo = new e("GET", t), this.xo.once("finish", function (t, e) {
          var r, a;

          if (200 === t) {
            if (a = +new Date() - i, e) try {
              r = o.parse(e);
            } catch (u) {}
            s.isObject(r) || (r = {});
          }

          n.emit("finish", r, a), n.removeAllListeners();
        });
      }

      var r = t("events").EventEmitter,
          i = t("inherits"),
          o = t("json3"),
          s = t("./utils/object");
      i(n, r), n.prototype.close = function () {
        this.removeAllListeners(), this.xo.close();
      }, e.exports = n;
    }, {
      "./utils/object": 49,
      debug: void 0,
      events: 3,
      inherits: 54,
      json3: 55
    }],
    10: [function (t, e) {
      "use strict";

      function n(t) {
        var e = this;
        i.call(this), this.ir = new a(t, s), this.ir.once("finish", function (t, n) {
          e.ir = null, e.emit("message", o.stringify([t, n]));
        });
      }

      var r = t("inherits"),
          i = t("events").EventEmitter,
          o = t("json3"),
          s = t("./transport/sender/xhr-local"),
          a = t("./info-ajax");
      r(n, i), n.transportName = "iframe-info-receiver", n.prototype.close = function () {
        this.ir && (this.ir.close(), this.ir = null), this.removeAllListeners();
      }, e.exports = n;
    }, {
      "./info-ajax": 9,
      "./transport/sender/xhr-local": 37,
      events: 3,
      inherits: 54,
      json3: 55
    }],
    11: [function (t, e) {
      (function (n) {
        "use strict";

        function r(t, e) {
          var r = this;
          i.call(this);

          var o = function o() {
            var n = r.ifr = new u(l.transportName, e, t);
            n.once("message", function (t) {
              if (t) {
                var e;

                try {
                  e = s.parse(t);
                } catch (n) {
                  return r.emit("finish"), void r.close();
                }

                var i = e[0],
                    o = e[1];
                r.emit("finish", i, o);
              }

              r.close();
            }), n.once("close", function () {
              r.emit("finish"), r.close();
            });
          };

          n.document.body ? o() : a.attachEvent("load", o);
        }

        var i = t("events").EventEmitter,
            o = t("inherits"),
            s = t("json3"),
            a = t("./utils/event"),
            u = t("./transport/iframe"),
            l = t("./info-iframe-receiver");
        o(r, i), r.enabled = function () {
          return u.enabled();
        }, r.prototype.close = function () {
          this.ifr && this.ifr.close(), this.removeAllListeners(), this.ifr = null;
        }, e.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./info-iframe-receiver": 10,
      "./transport/iframe": 22,
      "./utils/event": 46,
      debug: void 0,
      events: 3,
      inherits: 54,
      json3: 55
    }],
    12: [function (t, e) {
      "use strict";

      function n(t, e) {
        var n = this;
        r.call(this), setTimeout(function () {
          n.doXhr(t, e);
        }, 0);
      }

      var r = t("events").EventEmitter,
          i = t("inherits"),
          o = t("./utils/url"),
          s = t("./transport/sender/xdr"),
          a = t("./transport/sender/xhr-cors"),
          u = t("./transport/sender/xhr-local"),
          l = t("./transport/sender/xhr-fake"),
          c = t("./info-iframe"),
          f = t("./info-ajax");
      i(n, r), n._getReceiver = function (t, e, n) {
        return n.sameOrigin ? new f(e, u) : a.enabled ? new f(e, a) : s.enabled && n.sameScheme ? new f(e, s) : c.enabled() ? new c(t, e) : new f(e, l);
      }, n.prototype.doXhr = function (t, e) {
        var r = this,
            i = o.addPath(t, "/info");
        this.xo = n._getReceiver(t, i, e), this.timeoutRef = setTimeout(function () {
          r._cleanup(!1), r.emit("finish");
        }, n.timeout), this.xo.once("finish", function (t, e) {
          r._cleanup(!0), r.emit("finish", t, e);
        });
      }, n.prototype._cleanup = function (t) {
        clearTimeout(this.timeoutRef), this.timeoutRef = null, !t && this.xo && this.xo.close(), this.xo = null;
      }, n.prototype.close = function () {
        this.removeAllListeners(), this._cleanup(!1);
      }, n.timeout = 8e3, e.exports = n;
    }, {
      "./info-ajax": 9,
      "./info-iframe": 11,
      "./transport/sender/xdr": 34,
      "./transport/sender/xhr-cors": 35,
      "./transport/sender/xhr-fake": 36,
      "./transport/sender/xhr-local": 37,
      "./utils/url": 52,
      debug: void 0,
      events: 3,
      inherits: 54
    }],
    13: [function (t, e) {
      (function (t) {
        "use strict";

        e.exports = t.location || {
          origin: "http://localhost:80",
          protocol: "http",
          host: "localhost",
          port: 80,
          href: "http://localhost/",
          hash: ""
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    14: [function (t, e) {
      (function (n) {
        "use strict";

        function r(t, e, n) {
          if (!(this instanceof r)) return new r(t, e, n);
          if (arguments.length < 1) throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");
          b.call(this), this.readyState = r.CONNECTING, this.extensions = "", this.protocol = "", n = n || {}, n.protocols_whitelist && m.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."), this._transportsWhitelist = n.transports;
          var i = n.sessionId || 8;
          if ("function" == typeof i) this._generateSessionId = i;else {
            if ("number" != typeof i) throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");

            this._generateSessionId = function () {
              return l.string(i);
            };
          }
          this._server = n.server || l.numberString(1e3);
          var o = new s(t);
          if (!o.host || !o.protocol) throw new SyntaxError("The URL '" + t + "' is invalid");
          if (o.hash) throw new SyntaxError("The URL must not contain a fragment");
          if ("http:" !== o.protocol && "https:" !== o.protocol) throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '" + o.protocol + "' is not allowed.");
          var a = "https:" === o.protocol;
          if ("https" === g.protocol && !a) throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");
          e ? Array.isArray(e) || (e = [e]) : e = [];
          var u = e.sort();
          u.forEach(function (t, e) {
            if (!t) throw new SyntaxError("The protocols entry '" + t + "' is invalid.");
            if (e < u.length - 1 && t === u[e + 1]) throw new SyntaxError("The protocols entry '" + t + "' is duplicated.");
          });
          var c = f.getOrigin(g.href);
          this._origin = c ? c.toLowerCase() : null, o.set("pathname", o.pathname.replace(/\/+$/, "")), this.url = o.href, this._urlInfo = {
            nullOrigin: !v.hasDomain(),
            sameOrigin: f.isOriginEqual(this.url, g.href),
            sameScheme: f.isSchemeEqual(this.url, g.href)
          }, this._ir = new _(this.url, this._urlInfo), this._ir.once("finish", this._receiveInfo.bind(this));
        }

        function i(t) {
          return 1e3 === t || t >= 3e3 && 4999 >= t;
        }

        t("./shims");

        var o,
            s = t("url-parse"),
            a = t("inherits"),
            u = t("json3"),
            l = t("./utils/random"),
            c = t("./utils/escape"),
            f = t("./utils/url"),
            h = t("./utils/event"),
            d = t("./utils/transport"),
            p = t("./utils/object"),
            v = t("./utils/browser"),
            m = t("./utils/log"),
            y = t("./event/event"),
            b = t("./event/eventtarget"),
            g = t("./location"),
            w = t("./event/close"),
            x = t("./event/trans-message"),
            _ = t("./info-receiver");

        a(r, b), r.prototype.close = function (t, e) {
          if (t && !i(t)) throw new Error("InvalidAccessError: Invalid code");
          if (e && e.length > 123) throw new SyntaxError("reason argument has an invalid length");

          if (this.readyState !== r.CLOSING && this.readyState !== r.CLOSED) {
            var n = !0;

            this._close(t || 1e3, e || "Normal closure", n);
          }
        }, r.prototype.send = function (t) {
          if ("string" != typeof t && (t = "" + t), this.readyState === r.CONNECTING) throw new Error("InvalidStateError: The connection has not been established yet");
          this.readyState === r.OPEN && this._transport.send(c.quote(t));
        }, r.version = t("./version"), r.CONNECTING = 0, r.OPEN = 1, r.CLOSING = 2, r.CLOSED = 3, r.prototype._receiveInfo = function (t, e) {
          if (this._ir = null, !t) return void this._close(1002, "Cannot connect to server");
          this._rto = this.countRTO(e), this._transUrl = t.base_url ? t.base_url : this.url, t = p.extend(t, this._urlInfo);
          var n = o.filterToEnabled(this._transportsWhitelist, t);
          this._transports = n.main, this._connect();
        }, r.prototype._connect = function () {
          for (var t = this._transports.shift(); t; t = this._transports.shift()) {
            if (t.needBody && (!n.document.body || "undefined" != typeof n.document.readyState && "complete" !== n.document.readyState && "interactive" !== n.document.readyState)) return this._transports.unshift(t), void h.attachEvent("load", this._connect.bind(this));
            var e = this._rto * t.roundTrips || 5e3;
            this._transportTimeoutId = setTimeout(this._transportTimeout.bind(this), e);
            var r = f.addPath(this._transUrl, "/" + this._server + "/" + this._generateSessionId()),
                i = new t(r, this._transUrl);
            return i.on("message", this._transportMessage.bind(this)), i.once("close", this._transportClose.bind(this)), i.transportName = t.transportName, void (this._transport = i);
          }

          this._close(2e3, "All transports failed", !1);
        }, r.prototype._transportTimeout = function () {
          this.readyState === r.CONNECTING && this._transportClose(2007, "Transport timed out");
        }, r.prototype._transportMessage = function (t) {
          var e,
              n = this,
              r = t.slice(0, 1),
              i = t.slice(1);

          switch (r) {
            case "o":
              return void this._open();

            case "h":
              return void this.dispatchEvent(new y("heartbeat"));
          }

          if (i) try {
            e = u.parse(i);
          } catch (o) {}
          if ("undefined" != typeof e) switch (r) {
            case "a":
              Array.isArray(e) && e.forEach(function (t) {
                n.dispatchEvent(new x(t));
              });
              break;

            case "m":
              this.dispatchEvent(new x(e));
              break;

            case "c":
              Array.isArray(e) && 2 === e.length && this._close(e[0], e[1], !0);
          }
        }, r.prototype._transportClose = function (t, e) {
          return this._transport && (this._transport.removeAllListeners(), this._transport = null, this.transport = null), i(t) || 2e3 === t || this.readyState !== r.CONNECTING ? void this._close(t, e) : void this._connect();
        }, r.prototype._open = function () {
          this.readyState === r.CONNECTING ? (this._transportTimeoutId && (clearTimeout(this._transportTimeoutId), this._transportTimeoutId = null), this.readyState = r.OPEN, this.transport = this._transport.transportName, this.dispatchEvent(new y("open"))) : this._close(1006, "Server lost session");
        }, r.prototype._close = function (t, e, n) {
          var i = !1;
          if (this._ir && (i = !0, this._ir.close(), this._ir = null), this._transport && (this._transport.close(), this._transport = null, this.transport = null), this.readyState === r.CLOSED) throw new Error("InvalidStateError: SockJS has already been closed");
          this.readyState = r.CLOSING, setTimeout(function () {
            this.readyState = r.CLOSED, i && this.dispatchEvent(new y("error"));
            var o = new w("close");
            o.wasClean = n || !1, o.code = t || 1e3, o.reason = e, this.dispatchEvent(o), this.onmessage = this.onclose = this.onerror = null;
          }.bind(this), 0);
        }, r.prototype.countRTO = function (t) {
          return t > 100 ? 4 * t : 300 + t;
        }, e.exports = function (e) {
          return o = d(e), t("./iframe-bootstrap")(r, e), r;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./event/close": 2,
      "./event/event": 4,
      "./event/eventtarget": 5,
      "./event/trans-message": 6,
      "./iframe-bootstrap": 8,
      "./info-receiver": 12,
      "./location": 13,
      "./shims": 15,
      "./utils/browser": 44,
      "./utils/escape": 45,
      "./utils/event": 46,
      "./utils/log": 48,
      "./utils/object": 49,
      "./utils/random": 50,
      "./utils/transport": 51,
      "./utils/url": 52,
      "./version": 53,
      debug: void 0,
      inherits: 54,
      json3: 55,
      "url-parse": 56
    }],
    15: [function () {
      "use strict";

      function t(t) {
        var e = +t;
        return e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e;
      }

      function e(t) {
        return t >>> 0;
      }

      function n() {}

      var r,
          i = Array.prototype,
          o = Object.prototype,
          s = Function.prototype,
          a = String.prototype,
          u = i.slice,
          l = o.toString,
          c = function c(t) {
        return "[object Function]" === o.toString.call(t);
      },
          f = function f(t) {
        return "[object Array]" === l.call(t);
      },
          h = function h(t) {
        return "[object String]" === l.call(t);
      },
          d = Object.defineProperty && function () {
        try {
          return Object.defineProperty({}, "x", {}), !0;
        } catch (t) {
          return !1;
        }
      }();

      r = d ? function (t, e, n, r) {
        !r && e in t || Object.defineProperty(t, e, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: n
        });
      } : function (t, e, n, r) {
        !r && e in t || (t[e] = n);
      };

      var p = function p(t, e, n) {
        for (var i in e) {
          o.hasOwnProperty.call(e, i) && r(t, i, e[i], n);
        }
      },
          v = function v(t) {
        if (null == t) throw new TypeError("can't convert " + t + " to object");
        return Object(t);
      };

      p(s, {
        bind: function bind(t) {
          var e = this;
          if (!c(e)) throw new TypeError("Function.prototype.bind called on incompatible " + e);

          for (var r = u.call(arguments, 1), i = function i() {
            if (this instanceof l) {
              var n = e.apply(this, r.concat(u.call(arguments)));
              return Object(n) === n ? n : this;
            }

            return e.apply(t, r.concat(u.call(arguments)));
          }, o = Math.max(0, e.length - r.length), s = [], a = 0; o > a; a++) {
            s.push("$" + a);
          }

          var l = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this, arguments); }")(i);
          return e.prototype && (n.prototype = e.prototype, l.prototype = new n(), n.prototype = null), l;
        }
      }), p(Array, {
        isArray: f
      });

      var m = Object("a"),
          y = "a" !== m[0] || !(0 in m),
          b = function b(t) {
        var e = !0,
            n = !0;
        return t && (t.call("foo", function (t, n, r) {
          "object" != _typeof(r) && (e = !1);
        }), t.call([1], function () {
          n = "string" == typeof this;
        }, "x")), !!t && e && n;
      };

      p(i, {
        forEach: function forEach(t) {
          var e = v(this),
              n = y && h(this) ? this.split("") : e,
              r = arguments[1],
              i = -1,
              o = n.length >>> 0;
          if (!c(t)) throw new TypeError();

          for (; ++i < o;) {
            i in n && t.call(r, n[i], i, e);
          }
        }
      }, !b(i.forEach));
      var g = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
      p(i, {
        indexOf: function indexOf(e) {
          var n = y && h(this) ? this.split("") : v(this),
              r = n.length >>> 0;
          if (!r) return -1;
          var i = 0;

          for (arguments.length > 1 && (i = t(arguments[1])), i = i >= 0 ? i : Math.max(0, r + i); r > i; i++) {
            if (i in n && n[i] === e) return i;
          }

          return -1;
        }
      }, g);
      var w = a.split;
      2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function () {
        var t = void 0 === /()??/.exec("")[1];

        a.split = function (n, r) {
          var o = this;
          if (void 0 === n && 0 === r) return [];
          if ("[object RegExp]" !== l.call(n)) return w.call(this, n, r);
          var s,
              a,
              u,
              c,
              f = [],
              h = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.extended ? "x" : "") + (n.sticky ? "y" : ""),
              d = 0;

          for (n = new RegExp(n.source, h + "g"), o += "", t || (s = new RegExp("^" + n.source + "$(?!\\s)", h)), r = void 0 === r ? -1 >>> 0 : e(r); (a = n.exec(o)) && (u = a.index + a[0].length, !(u > d && (f.push(o.slice(d, a.index)), !t && a.length > 1 && a[0].replace(s, function () {
            for (var t = 1; t < arguments.length - 2; t++) {
              void 0 === arguments[t] && (a[t] = void 0);
            }
          }), a.length > 1 && a.index < o.length && i.push.apply(f, a.slice(1)), c = a[0].length, d = u, f.length >= r)));) {
            n.lastIndex === a.index && n.lastIndex++;
          }

          return d === o.length ? (c || !n.test("")) && f.push("") : f.push(o.slice(d)), f.length > r ? f.slice(0, r) : f;
        };
      }() : "0".split(void 0, 0).length && (a.split = function (t, e) {
        return void 0 === t && 0 === e ? [] : w.call(this, t, e);
      });
      var x = "\t\n\x0B\f\r \xC2\xA0\xE1\u0161\u20AC\xE1\xA0\u017D\xE2\u20AC\u20AC\xE2\u20AC\x81\xE2\u20AC\u201A\xE2\u20AC\u0192\xE2\u20AC\u201E\xE2\u20AC\u2026\xE2\u20AC\u2020\xE2\u20AC\u2021\xE2\u20AC\u02C6\xE2\u20AC\u2030\xE2\u20AC\u0160\xE2\u20AC\xAF\xE2\x81\u0178\xE3\u20AC\u20AC\u2028\u2029\xEF\xBB\xBF",
          _ = "â€‹",
          E = "[" + x + "]",
          j = new RegExp("^" + E + E + "*"),
          T = new RegExp(E + E + "*$"),
          S = a.trim && (x.trim() || !_.trim());
      p(a, {
        trim: function trim() {
          if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
          return String(this).replace(j, "").replace(T, "");
        }
      }, S);
      var O = a.substr,
          C = "".substr && "b" !== "0b".substr(-1);
      p(a, {
        substr: function substr(t, e) {
          return O.call(this, 0 > t && (t = this.length + t) < 0 ? 0 : t, e);
        }
      }, C);
    }, {}],
    16: [function (t, e) {
      "use strict";

      e.exports = [t("./transport/websocket"), t("./transport/xhr-streaming"), t("./transport/xdr-streaming"), t("./transport/eventsource"), t("./transport/lib/iframe-wrap")(t("./transport/eventsource")), t("./transport/htmlfile"), t("./transport/lib/iframe-wrap")(t("./transport/htmlfile")), t("./transport/xhr-polling"), t("./transport/xdr-polling"), t("./transport/lib/iframe-wrap")(t("./transport/xhr-polling")), t("./transport/jsonp-polling")];
    }, {
      "./transport/eventsource": 20,
      "./transport/htmlfile": 21,
      "./transport/jsonp-polling": 23,
      "./transport/lib/iframe-wrap": 26,
      "./transport/websocket": 38,
      "./transport/xdr-polling": 39,
      "./transport/xdr-streaming": 40,
      "./transport/xhr-polling": 41,
      "./transport/xhr-streaming": 42
    }],
    17: [function (t, e) {
      (function (n) {
        "use strict";

        function r(t, e, n, r) {
          var o = this;
          i.call(this), setTimeout(function () {
            o._start(t, e, n, r);
          }, 0);
        }

        var i = t("events").EventEmitter,
            o = t("inherits"),
            s = t("../../utils/event"),
            a = t("../../utils/url"),
            u = n.XMLHttpRequest;
        o(r, i), r.prototype._start = function (t, e, n, i) {
          var o = this;

          try {
            this.xhr = new u();
          } catch (l) {}

          if (!this.xhr) return this.emit("finish", 0, "no xhr support"), void this._cleanup();
          e = a.addQuery(e, "t=" + +new Date()), this.unloadRef = s.unloadAdd(function () {
            o._cleanup(!0);
          });

          try {
            this.xhr.open(t, e, !0), this.timeout && "timeout" in this.xhr && (this.xhr.timeout = this.timeout, this.xhr.ontimeout = function () {
              o.emit("finish", 0, ""), o._cleanup(!1);
            });
          } catch (c) {
            return this.emit("finish", 0, ""), void this._cleanup(!1);
          }

          if (i && i.noCredentials || !r.supportsCORS || (this.xhr.withCredentials = "true"), i && i.headers) for (var f in i.headers) {
            this.xhr.setRequestHeader(f, i.headers[f]);
          }

          this.xhr.onreadystatechange = function () {
            if (o.xhr) {
              var t,
                  e,
                  n = o.xhr;

              switch (n.readyState) {
                case 3:
                  try {
                    e = n.status, t = n.responseText;
                  } catch (r) {}

                  1223 === e && (e = 204), 200 === e && t && t.length > 0 && o.emit("chunk", e, t);
                  break;

                case 4:
                  e = n.status, 1223 === e && (e = 204), (12005 === e || 12029 === e) && (e = 0), o.emit("finish", e, n.responseText), o._cleanup(!1);
              }
            }
          };

          try {
            o.xhr.send(n);
          } catch (c) {
            o.emit("finish", 0, ""), o._cleanup(!1);
          }
        }, r.prototype._cleanup = function (t) {
          if (this.xhr) {
            if (this.removeAllListeners(), s.unloadDel(this.unloadRef), this.xhr.onreadystatechange = function () {}, this.xhr.ontimeout && (this.xhr.ontimeout = null), t) try {
              this.xhr.abort();
            } catch (e) {}
            this.unloadRef = this.xhr = null;
          }
        }, r.prototype.close = function () {
          this._cleanup(!0);
        }, r.enabled = !!u;
        var l = ["Active"].concat("Object").join("X");
        !r.enabled && l in n && (u = function u() {
          try {
            return new n[l]("Microsoft.XMLHTTP");
          } catch (t) {
            return null;
          }
        }, r.enabled = !!new u());
        var c = !1;

        try {
          c = "withCredentials" in new u();
        } catch (f) {}

        r.supportsCORS = c, e.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/event": 46,
      "../../utils/url": 52,
      debug: void 0,
      events: 3,
      inherits: 54
    }],
    18: [function (t, e) {
      (function (t) {
        e.exports = t.EventSource;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    19: [function (t, e) {
      (function (t) {
        e.exports = t.WebSocket || t.MozWebSocket;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    20: [function (t, e) {
      "use strict";

      function n(t) {
        if (!n.enabled()) throw new Error("Transport created when disabled");
        i.call(this, t, "/eventsource", o, s);
      }

      var r = t("inherits"),
          i = t("./lib/ajax-based"),
          o = t("./receiver/eventsource"),
          s = t("./sender/xhr-cors"),
          a = t("eventsource");
      r(n, i), n.enabled = function () {
        return !!a;
      }, n.transportName = "eventsource", n.roundTrips = 2, e.exports = n;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/eventsource": 29,
      "./sender/xhr-cors": 35,
      eventsource: 18,
      inherits: 54
    }],
    21: [function (t, e) {
      "use strict";

      function n(t) {
        if (!i.enabled) throw new Error("Transport created when disabled");
        s.call(this, t, "/htmlfile", i, o);
      }

      var r = t("inherits"),
          i = t("./receiver/htmlfile"),
          o = t("./sender/xhr-local"),
          s = t("./lib/ajax-based");
      r(n, s), n.enabled = function (t) {
        return i.enabled && t.sameOrigin;
      }, n.transportName = "htmlfile", n.roundTrips = 2, e.exports = n;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/htmlfile": 30,
      "./sender/xhr-local": 37,
      inherits: 54
    }],
    22: [function (t, e) {
      "use strict";

      function n(t, e, r) {
        if (!n.enabled()) throw new Error("Transport created when disabled");
        o.call(this);
        var i = this;
        this.origin = a.getOrigin(r), this.baseUrl = r, this.transUrl = e, this.transport = t, this.windowId = c.string(8);
        var s = a.addPath(r, "/iframe.html") + "#" + this.windowId;
        this.iframeObj = u.createIframe(s, function (t) {
          i.emit("close", 1006, "Unable to load an iframe (" + t + ")"), i.close();
        }), this.onmessageCallback = this._message.bind(this), l.attachEvent("message", this.onmessageCallback);
      }

      var r = t("inherits"),
          i = t("json3"),
          o = t("events").EventEmitter,
          s = t("../version"),
          a = t("../utils/url"),
          u = t("../utils/iframe"),
          l = t("../utils/event"),
          c = t("../utils/random");
      r(n, o), n.prototype.close = function () {
        if (this.removeAllListeners(), this.iframeObj) {
          l.detachEvent("message", this.onmessageCallback);

          try {
            this.postMessage("c");
          } catch (t) {}

          this.iframeObj.cleanup(), this.iframeObj = null, this.onmessageCallback = this.iframeObj = null;
        }
      }, n.prototype._message = function (t) {
        if (a.isOriginEqual(t.origin, this.origin)) {
          var e;

          try {
            e = i.parse(t.data);
          } catch (n) {
            return;
          }

          if (e.windowId === this.windowId) switch (e.type) {
            case "s":
              this.iframeObj.loaded(), this.postMessage("s", i.stringify([s, this.transport, this.transUrl, this.baseUrl]));
              break;

            case "t":
              this.emit("message", e.data);
              break;

            case "c":
              var r;

              try {
                r = i.parse(e.data);
              } catch (n) {
                return;
              }

              this.emit("close", r[0], r[1]), this.close();
          }
        }
      }, n.prototype.postMessage = function (t, e) {
        this.iframeObj.post(i.stringify({
          windowId: this.windowId,
          type: t,
          data: e || ""
        }), this.origin);
      }, n.prototype.send = function (t) {
        this.postMessage("m", t);
      }, n.enabled = function () {
        return u.iframeEnabled;
      }, n.transportName = "iframe", n.roundTrips = 2, e.exports = n;
    }, {
      "../utils/event": 46,
      "../utils/iframe": 47,
      "../utils/random": 50,
      "../utils/url": 52,
      "../version": 53,
      debug: void 0,
      events: 3,
      inherits: 54,
      json3: 55
    }],
    23: [function (t, e) {
      (function (n) {
        "use strict";

        function r(t) {
          if (!r.enabled()) throw new Error("Transport created when disabled");
          o.call(this, t, "/jsonp", a, s);
        }

        var i = t("inherits"),
            o = t("./lib/sender-receiver"),
            s = t("./receiver/jsonp"),
            a = t("./sender/jsonp");
        i(r, o), r.enabled = function () {
          return !!n.document;
        }, r.transportName = "jsonp-polling", r.roundTrips = 1, r.needBody = !0, e.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./lib/sender-receiver": 28,
      "./receiver/jsonp": 31,
      "./sender/jsonp": 33,
      inherits: 54
    }],
    24: [function (t, e) {
      "use strict";

      function n(t) {
        return function (e, n, r) {
          var i = {};
          "string" == typeof n && (i.headers = {
            "Content-type": "text/plain"
          });
          var s = o.addPath(e, "/xhr_send"),
              a = new t("POST", s, n, i);
          return a.once("finish", function (t) {
            return a = null, 200 !== t && 204 !== t ? r(new Error("http status " + t)) : void r();
          }), function () {
            a.close(), a = null;
            var t = new Error("Aborted");
            t.code = 1e3, r(t);
          };
        };
      }

      function r(t, e, r, i) {
        s.call(this, t, e, n(i), r, i);
      }

      var i = t("inherits"),
          o = t("../../utils/url"),
          s = t("./sender-receiver");
      i(r, s), e.exports = r;
    }, {
      "../../utils/url": 52,
      "./sender-receiver": 28,
      debug: void 0,
      inherits: 54
    }],
    25: [function (t, e) {
      "use strict";

      function n(t, e) {
        i.call(this), this.sendBuffer = [], this.sender = e, this.url = t;
      }

      var r = t("inherits"),
          i = t("events").EventEmitter;
      r(n, i), n.prototype.send = function (t) {
        this.sendBuffer.push(t), this.sendStop || this.sendSchedule();
      }, n.prototype.sendScheduleWait = function () {
        var t,
            e = this;
        this.sendStop = function () {
          e.sendStop = null, clearTimeout(t);
        }, t = setTimeout(function () {
          e.sendStop = null, e.sendSchedule();
        }, 25);
      }, n.prototype.sendSchedule = function () {
        var t = this;

        if (this.sendBuffer.length > 0) {
          var e = "[" + this.sendBuffer.join(",") + "]";
          this.sendStop = this.sender(this.url, e, function (e) {
            t.sendStop = null, e ? (t.emit("close", e.code || 1006, "Sending error: " + e), t._cleanup()) : t.sendScheduleWait();
          }), this.sendBuffer = [];
        }
      }, n.prototype._cleanup = function () {
        this.removeAllListeners();
      }, n.prototype.stop = function () {
        this._cleanup(), this.sendStop && (this.sendStop(), this.sendStop = null);
      }, e.exports = n;
    }, {
      debug: void 0,
      events: 3,
      inherits: 54
    }],
    26: [function (t, e) {
      (function (n) {
        "use strict";

        var r = t("inherits"),
            i = t("../iframe"),
            o = t("../../utils/object");

        e.exports = function (t) {
          function e(e, n) {
            i.call(this, t.transportName, e, n);
          }

          return r(e, i), e.enabled = function (e, r) {
            if (!n.document) return !1;
            var s = o.extend({}, r);
            return s.sameOrigin = !0, t.enabled(s) && i.enabled();
          }, e.transportName = "iframe-" + t.transportName, e.needBody = !0, e.roundTrips = i.roundTrips + t.roundTrips - 1, e.facadeTransport = t, e;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/object": 49,
      "../iframe": 22,
      inherits: 54
    }],
    27: [function (t, e) {
      "use strict";

      function n(t, e, n) {
        i.call(this), this.Receiver = t, this.receiveUrl = e, this.AjaxObject = n, this._scheduleReceiver();
      }

      var r = t("inherits"),
          i = t("events").EventEmitter;
      r(n, i), n.prototype._scheduleReceiver = function () {
        var t = this,
            e = this.poll = new this.Receiver(this.receiveUrl, this.AjaxObject);
        e.on("message", function (e) {
          t.emit("message", e);
        }), e.once("close", function (n, r) {
          t.poll = e = null, t.pollIsClosing || ("network" === r ? t._scheduleReceiver() : (t.emit("close", n || 1006, r), t.removeAllListeners()));
        });
      }, n.prototype.abort = function () {
        this.removeAllListeners(), this.pollIsClosing = !0, this.poll && this.poll.abort();
      }, e.exports = n;
    }, {
      debug: void 0,
      events: 3,
      inherits: 54
    }],
    28: [function (t, e) {
      "use strict";

      function n(t, e, n, r, a) {
        var u = i.addPath(t, e),
            l = this;
        o.call(this, t, n), this.poll = new s(r, u, a), this.poll.on("message", function (t) {
          l.emit("message", t);
        }), this.poll.once("close", function (t, e) {
          l.poll = null, l.emit("close", t, e), l.close();
        });
      }

      var r = t("inherits"),
          i = t("../../utils/url"),
          o = t("./buffered-sender"),
          s = t("./polling");
      r(n, o), n.prototype.close = function () {
        this.removeAllListeners(), this.poll && (this.poll.abort(), this.poll = null), this.stop();
      }, e.exports = n;
    }, {
      "../../utils/url": 52,
      "./buffered-sender": 25,
      "./polling": 27,
      debug: void 0,
      inherits: 54
    }],
    29: [function (t, e) {
      "use strict";

      function n(t) {
        i.call(this);
        var e = this,
            n = this.es = new o(t);
        n.onmessage = function (t) {
          e.emit("message", decodeURI(t.data));
        }, n.onerror = function (t) {
          var r = 2 !== n.readyState ? "network" : "permanent";
          e._cleanup(), e._close(r);
        };
      }

      var r = t("inherits"),
          i = t("events").EventEmitter,
          o = t("eventsource");
      r(n, i), n.prototype.abort = function () {
        this._cleanup(), this._close("user");
      }, n.prototype._cleanup = function () {
        var t = this.es;
        t && (t.onmessage = t.onerror = null, t.close(), this.es = null);
      }, n.prototype._close = function (t) {
        var e = this;
        setTimeout(function () {
          e.emit("close", null, t), e.removeAllListeners();
        }, 200);
      }, e.exports = n;
    }, {
      debug: void 0,
      events: 3,
      eventsource: 18,
      inherits: 54
    }],
    30: [function (t, e) {
      (function (n) {
        "use strict";

        function r(t) {
          a.call(this);
          var e = this;
          o.polluteGlobalNamespace(), this.id = "a" + u.string(6), t = s.addQuery(t, "c=" + decodeURIComponent(o.WPrefix + "." + this.id));
          var i = r.htmlfileEnabled ? o.createHtmlfile : o.createIframe;
          n[o.WPrefix][this.id] = {
            start: function start() {
              e.iframeObj.loaded();
            },
            message: function message(t) {
              e.emit("message", t);
            },
            stop: function stop() {
              e._cleanup(), e._close("network");
            }
          }, this.iframeObj = i(t, function () {
            e._cleanup(), e._close("permanent");
          });
        }

        var i = t("inherits"),
            o = t("../../utils/iframe"),
            s = t("../../utils/url"),
            a = t("events").EventEmitter,
            u = t("../../utils/random");
        i(r, a), r.prototype.abort = function () {
          this._cleanup(), this._close("user");
        }, r.prototype._cleanup = function () {
          this.iframeObj && (this.iframeObj.cleanup(), this.iframeObj = null), delete n[o.WPrefix][this.id];
        }, r.prototype._close = function (t) {
          this.emit("close", null, t), this.removeAllListeners();
        }, r.htmlfileEnabled = !1;
        var l = ["Active"].concat("Object").join("X");
        if (l in n) try {
          r.htmlfileEnabled = !!new n[l]("htmlfile");
        } catch (c) {}
        r.enabled = r.htmlfileEnabled || o.iframeEnabled, e.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/iframe": 47,
      "../../utils/random": 50,
      "../../utils/url": 52,
      debug: void 0,
      events: 3,
      inherits: 54
    }],
    31: [function (t, e) {
      (function (n) {
        "use strict";

        function r(t) {
          var e = this;
          l.call(this), i.polluteGlobalNamespace(), this.id = "a" + o.string(6);
          var s = a.addQuery(t, "c=" + encodeURIComponent(i.WPrefix + "." + this.id));
          n[i.WPrefix][this.id] = this._callback.bind(this), this._createScript(s), this.timeoutId = setTimeout(function () {
            e._abort(new Error("JSONP script loaded abnormally (timeout)"));
          }, r.timeout);
        }

        var i = t("../../utils/iframe"),
            o = t("../../utils/random"),
            s = t("../../utils/browser"),
            a = t("../../utils/url"),
            u = t("inherits"),
            l = t("events").EventEmitter;
        u(r, l), r.prototype.abort = function () {
          if (n[i.WPrefix][this.id]) {
            var t = new Error("JSONP user aborted read");
            t.code = 1e3, this._abort(t);
          }
        }, r.timeout = 35e3, r.scriptErrorTimeout = 1e3, r.prototype._callback = function (t) {
          this._cleanup(), this.aborting || (t && this.emit("message", t), this.emit("close", null, "network"), this.removeAllListeners());
        }, r.prototype._abort = function (t) {
          this._cleanup(), this.aborting = !0, this.emit("close", t.code, t.message), this.removeAllListeners();
        }, r.prototype._cleanup = function () {
          if (clearTimeout(this.timeoutId), this.script2 && (this.script2.parentNode.removeChild(this.script2), this.script2 = null), this.script) {
            var t = this.script;
            t.parentNode.removeChild(t), t.onreadystatechange = t.onerror = t.onload = t.onclick = null, this.script = null;
          }

          delete n[i.WPrefix][this.id];
        }, r.prototype._scriptError = function () {
          var t = this;
          this.errorTimer || (this.errorTimer = setTimeout(function () {
            t.loadedOkay || t._abort(new Error("JSONP script loaded abnormally (onerror)"));
          }, r.scriptErrorTimeout));
        }, r.prototype._createScript = function (t) {
          var e,
              r = this,
              i = this.script = n.document.createElement("script");
          if (i.id = "a" + o.string(8), i.src = t, i.type = "text/javascript", i.charset = "UTF-8", i.onerror = this._scriptError.bind(this), i.onload = function () {
            r._abort(new Error("JSONP script loaded abnormally (onload)"));
          }, i.onreadystatechange = function () {
            if (/loaded|closed/.test(i.readyState)) {
              if (i && i.htmlFor && i.onclick) {
                r.loadedOkay = !0;

                try {
                  i.onclick();
                } catch (t) {}
              }

              i && r._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"));
            }
          }, "undefined" == typeof i.async && n.document.attachEvent) if (s.isOpera()) e = this.script2 = n.document.createElement("script"), e.text = "try{var a = document.getElementById('" + i.id + "'); if(a)a.onerror();}catch(x){};", i.async = e.async = !1;else {
            try {
              i.htmlFor = i.id, i.event = "onclick";
            } catch (a) {}

            i.async = !0;
          }
          "undefined" != typeof i.async && (i.async = !0);
          var u = n.document.getElementsByTagName("head")[0];
          u.insertBefore(i, u.firstChild), e && u.insertBefore(e, u.firstChild);
        }, e.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/browser": 44,
      "../../utils/iframe": 47,
      "../../utils/random": 50,
      "../../utils/url": 52,
      debug: void 0,
      events: 3,
      inherits: 54
    }],
    32: [function (t, e) {
      "use strict";

      function n(t, e) {
        i.call(this);
        var n = this;
        this.bufferPosition = 0, this.xo = new e("POST", t, null), this.xo.on("chunk", this._chunkHandler.bind(this)), this.xo.once("finish", function (t, e) {
          n._chunkHandler(t, e), n.xo = null;
          var r = 200 === t ? "network" : "permanent";
          n.emit("close", null, r), n._cleanup();
        });
      }

      var r = t("inherits"),
          i = t("events").EventEmitter;
      r(n, i), n.prototype._chunkHandler = function (t, e) {
        if (200 === t && e) for (var n = -1;; this.bufferPosition += n + 1) {
          var r = e.slice(this.bufferPosition);
          if (n = r.indexOf("\n"), -1 === n) break;
          var i = r.slice(0, n);
          i && this.emit("message", i);
        }
      }, n.prototype._cleanup = function () {
        this.removeAllListeners();
      }, n.prototype.abort = function () {
        this.xo && (this.xo.close(), this.emit("close", null, "user"), this.xo = null), this._cleanup();
      }, e.exports = n;
    }, {
      debug: void 0,
      events: 3,
      inherits: 54
    }],
    33: [function (t, e) {
      (function (n) {
        "use strict";

        function r(t) {
          try {
            return n.document.createElement('<iframe name="' + t + '">');
          } catch (e) {
            var r = n.document.createElement("iframe");
            return r.name = t, r;
          }
        }

        function i() {
          o = n.document.createElement("form"), o.style.display = "none", o.style.position = "absolute", o.method = "POST", o.enctype = "application/x-www-form-urlencoded", o.acceptCharset = "UTF-8", s = n.document.createElement("textarea"), s.name = "d", o.appendChild(s), n.document.body.appendChild(o);
        }

        var o,
            s,
            a = t("../../utils/random"),
            u = t("../../utils/url");

        e.exports = function (t, e, n) {
          o || i();
          var l = "a" + a.string(8);
          o.target = l, o.action = u.addQuery(u.addPath(t, "/jsonp_send"), "i=" + l);
          var c = r(l);
          c.id = l, c.style.display = "none", o.appendChild(c);

          try {
            s.value = e;
          } catch (f) {}

          o.submit();

          var h = function h(t) {
            c.onerror && (c.onreadystatechange = c.onerror = c.onload = null, setTimeout(function () {
              c.parentNode.removeChild(c), c = null;
            }, 500), s.value = "", n(t));
          };

          return c.onerror = function () {
            h();
          }, c.onload = function () {
            h();
          }, c.onreadystatechange = function (t) {
            "complete" === c.readyState && h();
          }, function () {
            h(new Error("Aborted"));
          };
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/random": 50,
      "../../utils/url": 52,
      debug: void 0
    }],
    34: [function (t, e) {
      (function (n) {
        "use strict";

        function r(t, e, n) {
          var r = this;
          i.call(this), setTimeout(function () {
            r._start(t, e, n);
          }, 0);
        }

        var i = t("events").EventEmitter,
            o = t("inherits"),
            s = t("../../utils/event"),
            a = t("../../utils/browser"),
            u = t("../../utils/url");
        o(r, i), r.prototype._start = function (t, e, r) {
          var i = this,
              o = new n.XDomainRequest();
          e = u.addQuery(e, "t=" + +new Date()), o.onerror = function () {
            i._error();
          }, o.ontimeout = function () {
            i._error();
          }, o.onprogress = function () {
            i.emit("chunk", 200, o.responseText);
          }, o.onload = function () {
            i.emit("finish", 200, o.responseText), i._cleanup(!1);
          }, this.xdr = o, this.unloadRef = s.unloadAdd(function () {
            i._cleanup(!0);
          });

          try {
            this.xdr.open(t, e), this.timeout && (this.xdr.timeout = this.timeout), this.xdr.send(r);
          } catch (a) {
            this._error();
          }
        }, r.prototype._error = function () {
          this.emit("finish", 0, ""), this._cleanup(!1);
        }, r.prototype._cleanup = function (t) {
          if (this.xdr) {
            if (this.removeAllListeners(), s.unloadDel(this.unloadRef), this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null, t) try {
              this.xdr.abort();
            } catch (e) {}
            this.unloadRef = this.xdr = null;
          }
        }, r.prototype.close = function () {
          this._cleanup(!0);
        }, r.enabled = !(!n.XDomainRequest || !a.hasDomain()), e.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../../utils/browser": 44,
      "../../utils/event": 46,
      "../../utils/url": 52,
      debug: void 0,
      events: 3,
      inherits: 54
    }],
    35: [function (t, e) {
      "use strict";

      function n(t, e, n, r) {
        i.call(this, t, e, n, r);
      }

      var r = t("inherits"),
          i = t("../driver/xhr");
      r(n, i), n.enabled = i.enabled && i.supportsCORS, e.exports = n;
    }, {
      "../driver/xhr": 17,
      inherits: 54
    }],
    36: [function (t, e) {
      "use strict";

      function n() {
        var t = this;
        r.call(this), this.to = setTimeout(function () {
          t.emit("finish", 200, "{}");
        }, n.timeout);
      }

      var r = t("events").EventEmitter,
          i = t("inherits");
      i(n, r), n.prototype.close = function () {
        clearTimeout(this.to);
      }, n.timeout = 2e3, e.exports = n;
    }, {
      events: 3,
      inherits: 54
    }],
    37: [function (t, e) {
      "use strict";

      function n(t, e, n) {
        i.call(this, t, e, n, {
          noCredentials: !0
        });
      }

      var r = t("inherits"),
          i = t("../driver/xhr");
      r(n, i), n.enabled = i.enabled, e.exports = n;
    }, {
      "../driver/xhr": 17,
      inherits: 54
    }],
    38: [function (t, e) {
      "use strict";

      function n(t) {
        if (!n.enabled()) throw new Error("Transport created when disabled");
        s.call(this);
        var e = this,
            o = i.addPath(t, "/websocket");
        o = "https" === o.slice(0, 5) ? "wss" + o.slice(5) : "ws" + o.slice(4), this.url = o, this.ws = new a(this.url), this.ws.onmessage = function (t) {
          e.emit("message", t.data);
        }, this.unloadRef = r.unloadAdd(function () {
          e.ws.close();
        }), this.ws.onclose = function (t) {
          e.emit("close", t.code, t.reason), e._cleanup();
        }, this.ws.onerror = function (t) {
          e.emit("close", 1006, "WebSocket connection broken"), e._cleanup();
        };
      }

      var r = t("../utils/event"),
          i = t("../utils/url"),
          o = t("inherits"),
          s = t("events").EventEmitter,
          a = t("./driver/websocket");
      o(n, s), n.prototype.send = function (t) {
        var e = "[" + t + "]";
        this.ws.send(e);
      }, n.prototype.close = function () {
        this.ws && this.ws.close(), this._cleanup();
      }, n.prototype._cleanup = function () {
        var t = this.ws;
        t && (t.onmessage = t.onclose = t.onerror = null), r.unloadDel(this.unloadRef), this.unloadRef = this.ws = null, this.removeAllListeners();
      }, n.enabled = function () {
        return !!a;
      }, n.transportName = "websocket", n.roundTrips = 2, e.exports = n;
    }, {
      "../utils/event": 46,
      "../utils/url": 52,
      "./driver/websocket": 19,
      debug: void 0,
      events: 3,
      inherits: 54
    }],
    39: [function (t, e) {
      "use strict";

      function n(t) {
        if (!a.enabled) throw new Error("Transport created when disabled");
        i.call(this, t, "/xhr", s, a);
      }

      var r = t("inherits"),
          i = t("./lib/ajax-based"),
          o = t("./xdr-streaming"),
          s = t("./receiver/xhr"),
          a = t("./sender/xdr");
      r(n, i), n.enabled = o.enabled, n.transportName = "xdr-polling", n.roundTrips = 2, e.exports = n;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xdr": 34,
      "./xdr-streaming": 40,
      inherits: 54
    }],
    40: [function (t, e) {
      "use strict";

      function n(t) {
        if (!s.enabled) throw new Error("Transport created when disabled");
        i.call(this, t, "/xhr_streaming", o, s);
      }

      var r = t("inherits"),
          i = t("./lib/ajax-based"),
          o = t("./receiver/xhr"),
          s = t("./sender/xdr");
      r(n, i), n.enabled = function (t) {
        return t.cookie_needed || t.nullOrigin ? !1 : s.enabled && t.sameScheme;
      }, n.transportName = "xdr-streaming", n.roundTrips = 2, e.exports = n;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xdr": 34,
      inherits: 54
    }],
    41: [function (t, e) {
      "use strict";

      function n(t) {
        if (!a.enabled && !s.enabled) throw new Error("Transport created when disabled");
        i.call(this, t, "/xhr", o, s);
      }

      var r = t("inherits"),
          i = t("./lib/ajax-based"),
          o = t("./receiver/xhr"),
          s = t("./sender/xhr-cors"),
          a = t("./sender/xhr-local");
      r(n, i), n.enabled = function (t) {
        return t.nullOrigin ? !1 : a.enabled && t.sameOrigin ? !0 : s.enabled;
      }, n.transportName = "xhr-polling", n.roundTrips = 2, e.exports = n;
    }, {
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xhr-cors": 35,
      "./sender/xhr-local": 37,
      inherits: 54
    }],
    42: [function (t, e) {
      (function (n) {
        "use strict";

        function r(t) {
          if (!u.enabled && !a.enabled) throw new Error("Transport created when disabled");
          o.call(this, t, "/xhr_streaming", s, a);
        }

        var i = t("inherits"),
            o = t("./lib/ajax-based"),
            s = t("./receiver/xhr"),
            a = t("./sender/xhr-cors"),
            u = t("./sender/xhr-local"),
            l = t("../utils/browser");
        i(r, o), r.enabled = function (t) {
          return t.nullOrigin ? !1 : l.isOpera() ? !1 : a.enabled;
        }, r.transportName = "xhr-streaming", r.roundTrips = 2, r.needBody = !!n.document, e.exports = r;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "../utils/browser": 44,
      "./lib/ajax-based": 24,
      "./receiver/xhr": 32,
      "./sender/xhr-cors": 35,
      "./sender/xhr-local": 37,
      inherits: 54
    }],
    43: [function (t, e) {
      (function (t) {
        "use strict";

        e.exports.randomBytes = t.crypto && t.crypto.getRandomValues ? function (e) {
          var n = new Uint8Array(e);
          return t.crypto.getRandomValues(n), n;
        } : function (t) {
          for (var e = new Array(t), n = 0; t > n; n++) {
            e[n] = Math.floor(256 * Math.random());
          }

          return e;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    44: [function (t, e) {
      (function (t) {
        "use strict";

        e.exports = {
          isOpera: function isOpera() {
            return t.navigator && /opera/i.test(t.navigator.userAgent);
          },
          isKonqueror: function isKonqueror() {
            return t.navigator && /konqueror/i.test(t.navigator.userAgent);
          },
          hasDomain: function hasDomain() {
            if (!t.document) return !0;

            try {
              return !!t.document.domain;
            } catch (e) {
              return !1;
            }
          }
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    45: [function (t, e) {
      "use strict";

      var n,
          r = t("json3"),
          i = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
          o = function o(t) {
        var e,
            n = {},
            r = [];

        for (e = 0; 65536 > e; e++) {
          r.push(String.fromCharCode(e));
        }

        return t.lastIndex = 0, r.join("").replace(t, function (t) {
          return n[t] = "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4), "";
        }), t.lastIndex = 0, n;
      };

      e.exports = {
        quote: function quote(t) {
          var e = r.stringify(t);
          return i.lastIndex = 0, i.test(e) ? (n || (n = o(i)), e.replace(i, function (t) {
            return n[t];
          })) : e;
        }
      };
    }, {
      json3: 55
    }],
    46: [function (t, e) {
      (function (n) {
        "use strict";

        var r = t("./random"),
            i = {},
            o = !1,
            s = n.chrome && n.chrome.app && n.chrome.app.runtime;
        e.exports = {
          attachEvent: function attachEvent(t, e) {
            "undefined" != typeof n.addEventListener ? n.addEventListener(t, e, !1) : n.document && n.attachEvent && (n.document.attachEvent("on" + t, e), n.attachEvent("on" + t, e));
          },
          detachEvent: function detachEvent(t, e) {
            "undefined" != typeof n.addEventListener ? n.removeEventListener(t, e, !1) : n.document && n.detachEvent && (n.document.detachEvent("on" + t, e), n.detachEvent("on" + t, e));
          },
          unloadAdd: function unloadAdd(t) {
            if (s) return null;
            var e = r.string(8);
            return i[e] = t, o && setTimeout(this.triggerUnloadCallbacks, 0), e;
          },
          unloadDel: function unloadDel(t) {
            t in i && delete i[t];
          },
          triggerUnloadCallbacks: function triggerUnloadCallbacks() {
            for (var t in i) {
              i[t](), delete i[t];
            }
          }
        };

        var a = function a() {
          o || (o = !0, e.exports.triggerUnloadCallbacks());
        };

        s || e.exports.attachEvent("unload", a);
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./random": 50
    }],
    47: [function (t, e) {
      (function (n) {
        "use strict";

        var r = t("./event"),
            i = t("json3"),
            o = t("./browser");
        e.exports = {
          WPrefix: "_jp",
          currentWindowId: null,
          polluteGlobalNamespace: function polluteGlobalNamespace() {
            e.exports.WPrefix in n || (n[e.exports.WPrefix] = {});
          },
          postMessage: function postMessage(t, r) {
            n.parent !== n && n.parent.postMessage(i.stringify({
              windowId: e.exports.currentWindowId,
              type: t,
              data: r || ""
            }), "*");
          },
          createIframe: function createIframe(t, e) {
            var i,
                o,
                s = n.document.createElement("iframe"),
                a = function a() {
              clearTimeout(i);

              try {
                s.onload = null;
              } catch (t) {}

              s.onerror = null;
            },
                u = function u() {
              s && (a(), setTimeout(function () {
                s && s.parentNode.removeChild(s), s = null;
              }, 0), r.unloadDel(o));
            },
                l = function l(t) {
              s && (u(), e(t));
            },
                c = function c(t, e) {
              try {
                setTimeout(function () {
                  s && s.contentWindow && s.contentWindow.postMessage(t, e);
                }, 0);
              } catch (n) {}
            };

            return s.src = t, s.style.display = "none", s.style.position = "absolute", s.onerror = function () {
              l("onerror");
            }, s.onload = function () {
              clearTimeout(i), i = setTimeout(function () {
                l("onload timeout");
              }, 2e3);
            }, n.document.body.appendChild(s), i = setTimeout(function () {
              l("timeout");
            }, 15e3), o = r.unloadAdd(u), {
              post: c,
              cleanup: u,
              loaded: a
            };
          },
          createHtmlfile: function createHtmlfile(t, i) {
            var o,
                s,
                a,
                u = ["Active"].concat("Object").join("X"),
                l = new n[u]("htmlfile"),
                c = function c() {
              clearTimeout(o), a.onerror = null;
            },
                f = function f() {
              l && (c(), r.unloadDel(s), a.parentNode.removeChild(a), a = l = null, CollectGarbage());
            },
                h = function h(t) {
              l && (f(), i(t));
            },
                d = function d(t, e) {
              try {
                setTimeout(function () {
                  a && a.contentWindow && a.contentWindow.postMessage(t, e);
                }, 0);
              } catch (n) {}
            };

            l.open(), l.write('<html><script>document.domain="' + n.document.domain + '";</script></html>'), l.close(), l.parentWindow[e.exports.WPrefix] = n[e.exports.WPrefix];
            var p = l.createElement("div");
            return l.body.appendChild(p), a = l.createElement("iframe"), p.appendChild(a), a.src = t, a.onerror = function () {
              h("onerror");
            }, o = setTimeout(function () {
              h("timeout");
            }, 15e3), s = r.unloadAdd(f), {
              post: d,
              cleanup: f,
              loaded: c
            };
          }
        }, e.exports.iframeEnabled = !1, n.document && (e.exports.iframeEnabled = ("function" == typeof n.postMessage || "object" == _typeof(n.postMessage)) && !o.isKonqueror());
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./browser": 44,
      "./event": 46,
      debug: void 0,
      json3: 55
    }],
    48: [function (t, e) {
      (function (t) {
        "use strict";

        var n = {};
        ["log", "debug", "warn"].forEach(function (e) {
          var r = t.console && t.console[e] && t.console[e].apply;
          n[e] = r ? function () {
            return t.console[e].apply(t.console, arguments);
          } : "log" === e ? function () {} : n.log;
        }), e.exports = n;
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    49: [function (t, e) {
      "use strict";

      e.exports = {
        isObject: function isObject(t) {
          var e = _typeof(t);

          return "function" === e || "object" === e && !!t;
        },
        extend: function extend(t) {
          if (!this.isObject(t)) return t;

          for (var e, n, r = 1, i = arguments.length; i > r; r++) {
            e = arguments[r];

            for (n in e) {
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }
          }

          return t;
        }
      };
    }, {}],
    50: [function (t, e) {
      "use strict";

      var n = t("crypto"),
          r = "abcdefghijklmnopqrstuvwxyz012345";
      e.exports = {
        string: function string(t) {
          for (var e = r.length, i = n.randomBytes(t), o = [], s = 0; t > s; s++) {
            o.push(r.substr(i[s] % e, 1));
          }

          return o.join("");
        },
        number: function number(t) {
          return Math.floor(Math.random() * t);
        },
        numberString: function numberString(t) {
          var e = ("" + (t - 1)).length,
              n = new Array(e + 1).join("0");
          return (n + this.number(t)).slice(-e);
        }
      };
    }, {
      crypto: 43
    }],
    51: [function (t, e) {
      "use strict";

      e.exports = function (t) {
        return {
          filterToEnabled: function filterToEnabled(e, n) {
            var r = {
              main: [],
              facade: []
            };
            return e ? "string" == typeof e && (e = [e]) : e = [], t.forEach(function (t) {
              t && ("websocket" !== t.transportName || n.websocket !== !1) && (e.length && -1 === e.indexOf(t.transportName) || t.enabled(n) && (r.main.push(t), t.facadeTransport && r.facade.push(t.facadeTransport)));
            }), r;
          }
        };
      };
    }, {
      debug: void 0
    }],
    52: [function (t, e) {
      "use strict";

      var n = t("url-parse");
      e.exports = {
        getOrigin: function getOrigin(t) {
          if (!t) return null;
          var e = new n(t);
          if ("file:" === e.protocol) return null;
          var r = e.port;
          return r || (r = "https:" === e.protocol ? "443" : "80"), e.protocol + "//" + e.hostname + ":" + r;
        },
        isOriginEqual: function isOriginEqual(t, e) {
          var n = this.getOrigin(t) === this.getOrigin(e);
          return n;
        },
        isSchemeEqual: function isSchemeEqual(t, e) {
          return t.split(":")[0] === e.split(":")[0];
        },
        addPath: function addPath(t, e) {
          var n = t.split("?");
          return n[0] + e + (n[1] ? "?" + n[1] : "");
        },
        addQuery: function addQuery(t, e) {
          return t + (-1 === t.indexOf("?") ? "?" + e : "&" + e);
        }
      };
    }, {
      debug: void 0,
      "url-parse": 56
    }],
    53: [function (t, e) {
      e.exports = "1.0.2";
    }, {}],
    54: [function (t, e) {
      e.exports = "function" == typeof Object.create ? function (t, e) {
        t.super_ = e, t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
      } : function (t, e) {
        t.super_ = e;

        var n = function n() {};

        n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
      };
    }, {}],
    55: [function (e, n, r) {
      (function (e) {
        (function () {
          function i(t, e) {
            function n(t) {
              if (n[t] !== m) return n[t];
              var i;
              if ("bug-string-char-index" == t) i = "a" != "a"[0];else if ("json" == t) i = n("json-stringify") && n("json-parse");else {
                var s,
                    a = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}";

                if ("json-stringify" == t) {
                  var u = e.stringify,
                      c = "function" == typeof u && g;

                  if (c) {
                    (s = function s() {
                      return 1;
                    }).toJSON = s;

                    try {
                      c = "0" === u(0) && "0" === u(new r()) && '""' == u(new o()) && u(b) === m && u(m) === m && u() === m && "1" === u(s) && "[1]" == u([s]) && "[null]" == u([m]) && "null" == u(null) && "[null,null,null]" == u([m, b, null]) && u({
                        a: [s, !0, !1, null, "\x00\b\n\f\r	"]
                      }) == a && "1" === u(null, s) && "[\n 1,\n 2\n]" == u([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == u(new l(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == u(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == u(new l(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == u(new l(-1));
                    } catch (f) {
                      c = !1;
                    }
                  }

                  i = c;
                }

                if ("json-parse" == t) {
                  var h = e.parse;
                  if ("function" == typeof h) try {
                    if (0 === h("0") && !h(!1)) {
                      s = h(a);
                      var d = 5 == s.a.length && 1 === s.a[0];

                      if (d) {
                        try {
                          d = !h('"	"');
                        } catch (f) {}

                        if (d) try {
                          d = 1 !== h("01");
                        } catch (f) {}
                        if (d) try {
                          d = 1 !== h("1.");
                        } catch (f) {}
                      }
                    }
                  } catch (f) {
                    d = !1;
                  }
                  i = d;
                }
              }
              return n[t] = !!i;
            }

            t || (t = u.Object()), e || (e = u.Object());
            var r = t.Number || u.Number,
                o = t.String || u.String,
                a = t.Object || u.Object,
                l = t.Date || u.Date,
                c = t.SyntaxError || u.SyntaxError,
                f = t.TypeError || u.TypeError,
                h = t.Math || u.Math,
                d = t.JSON || u.JSON;
            "object" == _typeof(d) && d && (e.stringify = d.stringify, e.parse = d.parse);

            var _p,
                _v,
                m,
                y = a.prototype,
                b = y.toString,
                g = new l(-0xc782b5b800cec);

            try {
              g = -109252 == g.getUTCFullYear() && 0 === g.getUTCMonth() && 1 === g.getUTCDate() && 10 == g.getUTCHours() && 37 == g.getUTCMinutes() && 6 == g.getUTCSeconds() && 708 == g.getUTCMilliseconds();
            } catch (w) {}

            if (!n("json")) {
              var x = "[object Function]",
                  _ = "[object Date]",
                  E = "[object Number]",
                  j = "[object String]",
                  T = "[object Array]",
                  S = "[object Boolean]",
                  O = n("bug-string-char-index");
              if (!g) var C = h.floor,
                  A = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                  N = function N(t, e) {
                return A[e] + 365 * (t - 1970) + C((t - 1969 + (e = +(e > 1))) / 4) - C((t - 1901 + e) / 100) + C((t - 1601 + e) / 400);
              };

              if ((_p = y.hasOwnProperty) || (_p = function p(t) {
                var e,
                    n = {};
                return (n.__proto__ = null, n.__proto__ = {
                  toString: 1
                }, n).toString != b ? _p = function p(t) {
                  var e = this.__proto__,
                      n = (t in (this.__proto__ = null, this));
                  return this.__proto__ = e, n;
                } : (e = n.constructor, _p = function p(t) {
                  var n = (this.constructor || e).prototype;
                  return t in this && !(t in n && this[t] === n[t]);
                }), n = null, _p.call(this, t);
              }), _v = function v(t, e) {
                var n,
                    r,
                    i,
                    o = 0;
                (n = function n() {
                  this.valueOf = 0;
                }).prototype.valueOf = 0, r = new n();

                for (i in r) {
                  _p.call(r, i) && o++;
                }

                return n = r = null, o ? _v = 2 == o ? function (t, e) {
                  var n,
                      r = {},
                      i = b.call(t) == x;

                  for (n in t) {
                    i && "prototype" == n || _p.call(r, n) || !(r[n] = 1) || !_p.call(t, n) || e(n);
                  }
                } : function (t, e) {
                  var n,
                      r,
                      i = b.call(t) == x;

                  for (n in t) {
                    i && "prototype" == n || !_p.call(t, n) || (r = "constructor" === n) || e(n);
                  }

                  (r || _p.call(t, n = "constructor")) && e(n);
                } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], _v = function v(t, e) {
                  var n,
                      i,
                      o = b.call(t) == x,
                      a = !o && "function" != typeof t.constructor && s[_typeof(t.hasOwnProperty)] && t.hasOwnProperty || _p;

                  for (n in t) {
                    o && "prototype" == n || !a.call(t, n) || e(n);
                  }

                  for (i = r.length; n = r[--i]; a.call(t, n) && e(n)) {
                    ;
                  }
                }), _v(t, e);
              }, !n("json-stringify")) {
                var k = {
                  92: "\\\\",
                  34: '\\"',
                  8: "\\b",
                  12: "\\f",
                  10: "\\n",
                  13: "\\r",
                  9: "\\t"
                },
                    I = "000000",
                    P = function P(t, e) {
                  return (I + (e || 0)).slice(-t);
                },
                    L = "\\u00",
                    R = function R(t) {
                  for (var e = '"', n = 0, r = t.length, i = !O || r > 10, o = i && (O ? t.split("") : t); r > n; n++) {
                    var s = t.charCodeAt(n);

                    switch (s) {
                      case 8:
                      case 9:
                      case 10:
                      case 12:
                      case 13:
                      case 34:
                      case 92:
                        e += k[s];
                        break;

                      default:
                        if (32 > s) {
                          e += L + P(2, s.toString(16));
                          break;
                        }

                        e += i ? o[n] : t.charAt(n);
                    }
                  }

                  return e + '"';
                },
                    U = function U(t, e, n, r, i, o, s) {
                  var a, u, l, c, h, d, y, g, w, x, O, A, k, I, L, M;

                  try {
                    a = e[t];
                  } catch (q) {}

                  if ("object" == _typeof(a) && a) if (u = b.call(a), u != _ || _p.call(a, "toJSON")) "function" == typeof a.toJSON && (u != E && u != j && u != T || _p.call(a, "toJSON")) && (a = a.toJSON(t));else if (a > -1 / 0 && 1 / 0 > a) {
                    if (N) {
                      for (h = C(a / 864e5), l = C(h / 365.2425) + 1970 - 1; N(l + 1, 0) <= h; l++) {
                        ;
                      }

                      for (c = C((h - N(l, 0)) / 30.42); N(l, c + 1) <= h; c++) {
                        ;
                      }

                      h = 1 + h - N(l, c), d = (a % 864e5 + 864e5) % 864e5, y = C(d / 36e5) % 24, g = C(d / 6e4) % 60, w = C(d / 1e3) % 60, x = d % 1e3;
                    } else l = a.getUTCFullYear(), c = a.getUTCMonth(), h = a.getUTCDate(), y = a.getUTCHours(), g = a.getUTCMinutes(), w = a.getUTCSeconds(), x = a.getUTCMilliseconds();

                    a = (0 >= l || l >= 1e4 ? (0 > l ? "-" : "+") + P(6, 0 > l ? -l : l) : P(4, l)) + "-" + P(2, c + 1) + "-" + P(2, h) + "T" + P(2, y) + ":" + P(2, g) + ":" + P(2, w) + "." + P(3, x) + "Z";
                  } else a = null;
                  if (n && (a = n.call(e, t, a)), null === a) return "null";
                  if (u = b.call(a), u == S) return "" + a;
                  if (u == E) return a > -1 / 0 && 1 / 0 > a ? "" + a : "null";
                  if (u == j) return R("" + a);

                  if ("object" == _typeof(a)) {
                    for (I = s.length; I--;) {
                      if (s[I] === a) throw f();
                    }

                    if (s.push(a), O = [], L = o, o += i, u == T) {
                      for (k = 0, I = a.length; I > k; k++) {
                        A = U(k, a, n, r, i, o, s), O.push(A === m ? "null" : A);
                      }

                      M = O.length ? i ? "[\n" + o + O.join(",\n" + o) + "\n" + L + "]" : "[" + O.join(",") + "]" : "[]";
                    } else _v(r || a, function (t) {
                      var e = U(t, a, n, r, i, o, s);
                      e !== m && O.push(R(t) + ":" + (i ? " " : "") + e);
                    }), M = O.length ? i ? "{\n" + o + O.join(",\n" + o) + "\n" + L + "}" : "{" + O.join(",") + "}" : "{}";

                    return s.pop(), M;
                  }
                };

                e.stringify = function (t, e, n) {
                  var r, i, o, a;
                  if (s[_typeof(e)] && e) if ((a = b.call(e)) == x) i = e;else if (a == T) {
                    o = {};

                    for (var u, l = 0, c = e.length; c > l; u = e[l++], a = b.call(u), (a == j || a == E) && (o[u] = 1)) {
                      ;
                    }
                  }
                  if (n) if ((a = b.call(n)) == E) {
                    if ((n -= n % 1) > 0) for (r = "", n > 10 && (n = 10); r.length < n; r += " ") {
                      ;
                    }
                  } else a == j && (r = n.length <= 10 ? n : n.slice(0, 10));
                  return U("", (u = {}, u[""] = t, u), i, o, r, "", []);
                };
              }

              if (!n("json-parse")) {
                var M,
                    q,
                    D = o.fromCharCode,
                    W = {
                  92: "\\",
                  34: '"',
                  47: "/",
                  98: "\b",
                  116: "	",
                  110: "\n",
                  102: "\f",
                  114: "\r"
                },
                    J = function J() {
                  throw M = q = null, c();
                },
                    B = function B() {
                  for (var t, e, n, r, i, o = q, s = o.length; s > M;) {
                    switch (i = o.charCodeAt(M)) {
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        M++;
                        break;

                      case 123:
                      case 125:
                      case 91:
                      case 93:
                      case 58:
                      case 44:
                        return t = O ? o.charAt(M) : o[M], M++, t;

                      case 34:
                        for (t = "@", M++; s > M;) {
                          if (i = o.charCodeAt(M), 32 > i) J();else if (92 == i) switch (i = o.charCodeAt(++M)) {
                            case 92:
                            case 34:
                            case 47:
                            case 98:
                            case 116:
                            case 110:
                            case 102:
                            case 114:
                              t += W[i], M++;
                              break;

                            case 117:
                              for (e = ++M, n = M + 4; n > M; M++) {
                                i = o.charCodeAt(M), i >= 48 && 57 >= i || i >= 97 && 102 >= i || i >= 65 && 70 >= i || J();
                              }

                              t += D("0x" + o.slice(e, M));
                              break;

                            default:
                              J();
                          } else {
                            if (34 == i) break;

                            for (i = o.charCodeAt(M), e = M; i >= 32 && 92 != i && 34 != i;) {
                              i = o.charCodeAt(++M);
                            }

                            t += o.slice(e, M);
                          }
                        }

                        if (34 == o.charCodeAt(M)) return M++, t;
                        J();

                      default:
                        if (e = M, 45 == i && (r = !0, i = o.charCodeAt(++M)), i >= 48 && 57 >= i) {
                          for (48 == i && (i = o.charCodeAt(M + 1), i >= 48 && 57 >= i) && J(), r = !1; s > M && (i = o.charCodeAt(M), i >= 48 && 57 >= i); M++) {
                            ;
                          }

                          if (46 == o.charCodeAt(M)) {
                            for (n = ++M; s > n && (i = o.charCodeAt(n), i >= 48 && 57 >= i); n++) {
                              ;
                            }

                            n == M && J(), M = n;
                          }

                          if (i = o.charCodeAt(M), 101 == i || 69 == i) {
                            for (i = o.charCodeAt(++M), (43 == i || 45 == i) && M++, n = M; s > n && (i = o.charCodeAt(n), i >= 48 && 57 >= i); n++) {
                              ;
                            }

                            n == M && J(), M = n;
                          }

                          return +o.slice(e, M);
                        }

                        if (r && J(), "true" == o.slice(M, M + 4)) return M += 4, !0;
                        if ("false" == o.slice(M, M + 5)) return M += 5, !1;
                        if ("null" == o.slice(M, M + 4)) return M += 4, null;
                        J();
                    }
                  }

                  return "$";
                },
                    G = function G(t) {
                  var e, n;

                  if ("$" == t && J(), "string" == typeof t) {
                    if ("@" == (O ? t.charAt(0) : t[0])) return t.slice(1);

                    if ("[" == t) {
                      for (e = []; t = B(), "]" != t; n || (n = !0)) {
                        n && ("," == t ? (t = B(), "]" == t && J()) : J()), "," == t && J(), e.push(G(t));
                      }

                      return e;
                    }

                    if ("{" == t) {
                      for (e = {}; t = B(), "}" != t; n || (n = !0)) {
                        n && ("," == t ? (t = B(), "}" == t && J()) : J()), ("," == t || "string" != typeof t || "@" != (O ? t.charAt(0) : t[0]) || ":" != B()) && J(), e[t.slice(1)] = G(B());
                      }

                      return e;
                    }

                    J();
                  }

                  return t;
                },
                    F = function F(t, e, n) {
                  var r = H(t, e, n);
                  r === m ? delete t[e] : t[e] = r;
                },
                    H = function H(t, e, n) {
                  var r,
                      i = t[e];
                  if ("object" == _typeof(i) && i) if (b.call(i) == T) for (r = i.length; r--;) {
                    F(i, r, n);
                  } else _v(i, function (t) {
                    F(i, t, n);
                  });
                  return n.call(t, e, i);
                };

                e.parse = function (t, e) {
                  var n, r;
                  return M = 0, q = "" + t, n = G(B()), "$" != B() && J(), M = q = null, e && b.call(e) == x ? H((r = {}, r[""] = n, r), "", e) : n;
                };
              }
            }

            return e.runInContext = i, e;
          }

          var o = "function" == typeof t && t.amd,
              s = {
            "function": !0,
            object: !0
          },
              a = s[_typeof(r)] && r && !r.nodeType && r,
              u = s[typeof window === "undefined" ? "undefined" : _typeof(window)] && window || this,
              l = a && s[_typeof(n)] && n && !n.nodeType && "object" == _typeof(e) && e;
          if (!l || l.global !== l && l.window !== l && l.self !== l || (u = l), a && !o) i(u, a);else {
            var c = u.JSON,
                f = u.JSON3,
                h = !1,
                d = i(u, u.JSON3 = {
              noConflict: function noConflict() {
                return h || (h = !0, u.JSON = c, u.JSON3 = f, c = f = null), d;
              }
            });
            u.JSON = {
              parse: d.parse,
              stringify: d.stringify
            };
          }
          o && t(function () {
            return d;
          });
        }).call(this);
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    56: [function (t, e) {
      "use strict";

      function n(t, e, u) {
        if (!(this instanceof n)) return new n(t, e, u);

        var l,
            c,
            f,
            h,
            d = s.test(t),
            p = _typeof(e),
            v = this,
            m = 0;

        for ("object" !== p && "string" !== p && (u = e, e = null), u && "function" != typeof u && (u = o.parse), e = i(e); m < a.length; m++) {
          c = a[m], l = c[0], h = c[1], l !== l ? v[h] = t : "string" == typeof l ? ~(f = t.indexOf(l)) && ("number" == typeof c[2] ? (v[h] = t.slice(0, f), t = t.slice(f + c[2])) : (v[h] = t.slice(f), t = t.slice(0, f))) : (f = l.exec(t)) && (v[h] = f[1], t = t.slice(0, t.length - f[0].length)), v[h] = v[h] || (c[3] || "port" === h && d ? e[h] || "" : ""), c[4] && (v[h] = v[h].toLowerCase());
        }

        u && (v.query = u(v.query)), r(v.port, v.protocol) || (v.host = v.hostname, v.port = ""), v.username = v.password = "", v.auth && (c = v.auth.split(":"), v.username = c[0] || "", v.password = c[1] || ""), v.href = v.toString();
      }

      var r = t("requires-port"),
          i = t("./lolcation"),
          o = t("querystringify"),
          s = /^\/(?!\/)/,
          a = [["#", "hash"], ["?", "query"], ["//", "protocol", 2, 1, 1], ["/", "pathname"], ["@", "auth", 1], [0 / 0, "host", void 0, 1, 1], [/\:(\d+)$/, "port"], [0 / 0, "hostname", void 0, 1, 1]];
      n.prototype.set = function (t, e, n) {
        var i = this;
        return "query" === t ? ("string" == typeof e && (e = (n || o.parse)(e)), i[t] = e) : "port" === t ? (i[t] = e, r(e, i.protocol) ? e && (i.host = i.hostname + ":" + e) : (i.host = i.hostname, i[t] = "")) : "hostname" === t ? (i[t] = e, i.port && (e += ":" + i.port), i.host = e) : "host" === t ? (i[t] = e, /\:\d+/.test(e) && (e = e.split(":"), i.hostname = e[0], i.port = e[1])) : i[t] = e, i.href = i.toString(), i;
      }, n.prototype.toString = function (t) {
        t && "function" == typeof t || (t = o.stringify);
        var e,
            n = this,
            r = n.protocol + "//";
        return n.username && (r += n.username, n.password && (r += ":" + n.password), r += "@"), r += n.hostname, n.port && (r += ":" + n.port), r += n.pathname, n.query && (e = "object" == _typeof(n.query) ? t(n.query) : n.query, r += ("?" === e.charAt(0) ? "" : "?") + e), n.hash && (r += n.hash), r;
      }, n.qs = o, n.location = i, e.exports = n;
    }, {
      "./lolcation": 57,
      querystringify: 58,
      "requires-port": 59
    }],
    57: [function (t, e) {
      (function (n) {
        "use strict";

        var r,
            i = {
          hash: 1,
          query: 1
        };

        e.exports = function (e) {
          e = e || n.location || {}, r = r || t("./");

          var o,
              s = {},
              a = _typeof(e);

          if ("blob:" === e.protocol) s = new r(unescape(e.pathname), {});else if ("string" === a) {
            s = new r(e, {});

            for (o in i) {
              delete s[o];
            }
          } else if ("object" === a) for (o in e) {
            o in i || (s[o] = e[o]);
          }
          return s;
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      "./": 56
    }],
    58: [function (t, e, n) {
      "use strict";

      function r(t) {
        for (var e, n = /([^=?&]+)=([^&]*)/g, r = {}; e = n.exec(t); r[decodeURIComponent(e[1])] = decodeURIComponent(e[2])) {
          ;
        }

        return r;
      }

      function i(t, e) {
        e = e || "";
        var n = [];
        "string" != typeof e && (e = "?");

        for (var r in t) {
          o.call(t, r) && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
        }

        return n.length ? e + n.join("&") : "";
      }

      var o = Object.prototype.hasOwnProperty;
      n.stringify = i, n.parse = r;
    }, {}],
    59: [function (t, e) {
      "use strict";

      e.exports = function (t, e) {
        if (e = e.split(":")[0], t = +t, !t) return !1;

        switch (e) {
          case "http":
          case "ws":
            return 80 !== t;

          case "https":
          case "wss":
            return 443 !== t;

          case "ftp":
            return 22 !== t;

          case "gopher":
            return 70 !== t;

          case "file":
            return !1;
        }

        return 0 !== t;
      };
    }, {}]
  }, {}, [1])(1);
});
},{}],"js/sockets/stomp.min.js":[function(require,module,exports) {
// Generated by CoffeeScript 1.7.1

/*
   Stomp Over WebSocket http://www.jmesnil.net/stomp-websocket/doc/ | Apache License V2.0

   Copyright (C) 2010-2013 [Jeff Mesnil](http://jmesnil.net/)
   Copyright (C) 2012 [FuseSource, Inc.](http://fusesource.com)
 */
(function () {
  var t,
      e,
      n,
      i,
      r = {}.hasOwnProperty,
      o = [].slice;
  t = {
    LF: "\n",
    NULL: "\x00"
  };

  n = function () {
    var e;

    function n(t, e, n) {
      this.command = t;
      this.headers = e != null ? e : {};
      this.body = n != null ? n : "";
    }

    n.prototype.toString = function () {
      var e, i, o, s, u;
      e = [this.command];
      o = this.headers["content-length"] === false ? true : false;

      if (o) {
        delete this.headers["content-length"];
      }

      u = this.headers;

      for (i in u) {
        if (!r.call(u, i)) continue;
        s = u[i];
        e.push("" + i + ":" + s);
      }

      if (this.body && !o) {
        e.push("content-length:" + n.sizeOfUTF8(this.body));
      }

      e.push(t.LF + this.body);
      return e.join(t.LF);
    };

    n.sizeOfUTF8 = function (t) {
      if (t) {
        return encodeURI(t).match(/%..|./g).length;
      } else {
        return 0;
      }
    };

    e = function e(_e) {
      var i, r, o, s, u, a, c, f, h, l, p, d, g, b, m, v, y;
      s = _e.search(RegExp("" + t.LF + t.LF));
      u = _e.substring(0, s).split(t.LF);
      o = u.shift();
      a = {};

      d = function d(t) {
        return t.replace(/^\s+|\s+$/g, "");
      };

      v = u.reverse();

      for (g = 0, m = v.length; g < m; g++) {
        l = v[g];
        f = l.indexOf(":");
        a[d(l.substring(0, f))] = d(l.substring(f + 1));
      }

      i = "";
      p = s + 2;

      if (a["content-length"]) {
        h = parseInt(a["content-length"]);
        i = ("" + _e).substring(p, p + h);
      } else {
        r = null;

        for (c = b = p, y = _e.length; p <= y ? b < y : b > y; c = p <= y ? ++b : --b) {
          r = _e.charAt(c);

          if (r === t.NULL) {
            break;
          }

          i += r;
        }
      }

      return new n(o, a, i);
    };

    n.unmarshall = function (n) {
      var i;
      return function () {
        var r, o, s, u;
        s = n.split(RegExp("" + t.NULL + t.LF + "*"));
        u = [];

        for (r = 0, o = s.length; r < o; r++) {
          i = s[r];

          if ((i != null ? i.length : void 0) > 0) {
            u.push(e(i));
          }
        }

        return u;
      }();
    };

    n.marshall = function (e, i, r) {
      var o;
      o = new n(e, i, r);
      return o.toString() + t.NULL;
    };

    return n;
  }();

  e = function () {
    var e;

    function r(t) {
      this.ws = t;
      this.ws.binaryType = "arraybuffer";
      this.counter = 0;
      this.connected = false;
      this.heartbeat = {
        outgoing: 1e4,
        incoming: 1e4
      };
      this.maxWebSocketFrameSize = 16 * 1024;
      this.subscriptions = {};
    }

    r.prototype.debug = function (t) {
      var e;
      return typeof window !== "undefined" && window !== null ? (e = window.console) != null ? e.log(t) : void 0 : void 0;
    };

    e = function e() {
      if (Date.now) {
        return Date.now();
      } else {
        return new Date().valueOf;
      }
    };

    r.prototype._transmit = function (t, e, i) {
      var r;
      r = n.marshall(t, e, i);

      if (typeof this.debug === "function") {
        this.debug(">>> " + r);
      }

      while (true) {
        if (r.length > this.maxWebSocketFrameSize) {
          this.ws.send(r.substring(0, this.maxWebSocketFrameSize));
          r = r.substring(this.maxWebSocketFrameSize);

          if (typeof this.debug === "function") {
            this.debug("remaining = " + r.length);
          }
        } else {
          return this.ws.send(r);
        }
      }
    };

    r.prototype._setupHeartbeat = function (n) {
      var r, o, s, u, a, c;

      if ((a = n.version) !== i.VERSIONS.V1_1 && a !== i.VERSIONS.V1_2) {
        return;
      }

      c = function () {
        var t, e, i, r;
        i = n["heart-beat"].split(",");
        r = [];

        for (t = 0, e = i.length; t < e; t++) {
          u = i[t];
          r.push(parseInt(u));
        }

        return r;
      }(), o = c[0], r = c[1];

      if (!(this.heartbeat.outgoing === 0 || r === 0)) {
        s = Math.max(this.heartbeat.outgoing, r);

        if (typeof this.debug === "function") {
          this.debug("send PING every " + s + "ms");
        }

        this.pinger = i.setInterval(s, function (e) {
          return function () {
            e.ws.send(t.LF);
            return typeof e.debug === "function" ? e.debug(">>> PING") : void 0;
          };
        }(this));
      }

      if (!(this.heartbeat.incoming === 0 || o === 0)) {
        s = Math.max(this.heartbeat.incoming, o);

        if (typeof this.debug === "function") {
          this.debug("check PONG every " + s + "ms");
        }

        return this.ponger = i.setInterval(s, function (t) {
          return function () {
            var n;
            n = e() - t.serverActivity;

            if (n > s * 2) {
              if (typeof t.debug === "function") {
                t.debug("did not receive server activity for the last " + n + "ms");
              }

              return t.ws.close();
            }
          };
        }(this));
      }
    };

    r.prototype._parseConnect = function () {
      var t, e, n, i;
      t = 1 <= arguments.length ? o.call(arguments, 0) : [];
      i = {};

      switch (t.length) {
        case 2:
          i = t[0], e = t[1];
          break;

        case 3:
          if (t[1] instanceof Function) {
            i = t[0], e = t[1], n = t[2];
          } else {
            i.login = t[0], i.passcode = t[1], e = t[2];
          }

          break;

        case 4:
          i.login = t[0], i.passcode = t[1], e = t[2], n = t[3];
          break;

        default:
          i.login = t[0], i.passcode = t[1], e = t[2], n = t[3], i.host = t[4];
      }

      return [i, e, n];
    };

    r.prototype.connect = function () {
      var r, s, u, a;
      r = 1 <= arguments.length ? o.call(arguments, 0) : [];
      a = this._parseConnect.apply(this, r);
      u = a[0], this.connectCallback = a[1], s = a[2];

      if (typeof this.debug === "function") {
        this.debug("Opening Web Socket...");
      }

      this.ws.onmessage = function (i) {
        return function (r) {
          var o, u, a, c, f, h, l, p, d, g, b, m;
          c = typeof ArrayBuffer !== "undefined" && r.data instanceof ArrayBuffer ? (o = new Uint8Array(r.data), typeof i.debug === "function" ? i.debug("--- got data length: " + o.length) : void 0, function () {
            var t, e, n;
            n = [];

            for (t = 0, e = o.length; t < e; t++) {
              u = o[t];
              n.push(String.fromCharCode(u));
            }

            return n;
          }().join("")) : r.data;
          i.serverActivity = e();

          if (c === t.LF) {
            if (typeof i.debug === "function") {
              i.debug("<<< PONG");
            }

            return;
          }

          if (typeof i.debug === "function") {
            i.debug("<<< " + c);
          }

          b = n.unmarshall(c);
          m = [];

          for (d = 0, g = b.length; d < g; d++) {
            f = b[d];

            switch (f.command) {
              case "CONNECTED":
                if (typeof i.debug === "function") {
                  i.debug("connected to server " + f.headers.server);
                }

                i.connected = true;

                i._setupHeartbeat(f.headers);

                m.push(typeof i.connectCallback === "function" ? i.connectCallback(f) : void 0);
                break;

              case "MESSAGE":
                p = f.headers.subscription;
                l = i.subscriptions[p] || i.onreceive;

                if (l) {
                  a = i;
                  h = f.headers["message-id"];

                  f.ack = function (t) {
                    if (t == null) {
                      t = {};
                    }

                    return a.ack(h, p, t);
                  };

                  f.nack = function (t) {
                    if (t == null) {
                      t = {};
                    }

                    return a.nack(h, p, t);
                  };

                  m.push(l(f));
                } else {
                  m.push(typeof i.debug === "function" ? i.debug("Unhandled received MESSAGE: " + f) : void 0);
                }

                break;

              case "RECEIPT":
                m.push(typeof i.onreceipt === "function" ? i.onreceipt(f) : void 0);
                break;

              case "ERROR":
                m.push(typeof s === "function" ? s(f) : void 0);
                break;

              default:
                m.push(typeof i.debug === "function" ? i.debug("Unhandled frame: " + f) : void 0);
            }
          }

          return m;
        };
      }(this);

      this.ws.onclose = function (t) {
        return function () {
          var e;
          e = "Whoops! Lost connection to " + t.ws.url;

          if (typeof t.debug === "function") {
            t.debug(e);
          }

          t._cleanUp();

          return typeof s === "function" ? s(e) : void 0;
        };
      }(this);

      return this.ws.onopen = function (t) {
        return function () {
          if (typeof t.debug === "function") {
            t.debug("Web Socket Opened...");
          }

          u["accept-version"] = i.VERSIONS.supportedVersions();
          u["heart-beat"] = [t.heartbeat.outgoing, t.heartbeat.incoming].join(",");
          return t._transmit("CONNECT", u);
        };
      }(this);
    };

    r.prototype.disconnect = function (t, e) {
      if (e == null) {
        e = {};
      }

      this._transmit("DISCONNECT", e);

      this.ws.onclose = null;
      this.ws.close();

      this._cleanUp();

      return typeof t === "function" ? t() : void 0;
    };

    r.prototype._cleanUp = function () {
      this.connected = false;

      if (this.pinger) {
        i.clearInterval(this.pinger);
      }

      if (this.ponger) {
        return i.clearInterval(this.ponger);
      }
    };

    r.prototype.send = function (t, e, n) {
      if (e == null) {
        e = {};
      }

      if (n == null) {
        n = "";
      }

      e.destination = t;
      return this._transmit("SEND", e, n);
    };

    r.prototype.subscribe = function (t, e, n) {
      var i;

      if (n == null) {
        n = {};
      }

      if (!n.id) {
        n.id = "sub-" + this.counter++;
      }

      n.destination = t;
      this.subscriptions[n.id] = e;

      this._transmit("SUBSCRIBE", n);

      i = this;
      return {
        id: n.id,
        unsubscribe: function unsubscribe() {
          return i.unsubscribe(n.id);
        }
      };
    };

    r.prototype.unsubscribe = function (t) {
      delete this.subscriptions[t];
      return this._transmit("UNSUBSCRIBE", {
        id: t
      });
    };

    r.prototype.begin = function (t) {
      var e, n;
      n = t || "tx-" + this.counter++;

      this._transmit("BEGIN", {
        transaction: n
      });

      e = this;
      return {
        id: n,
        commit: function commit() {
          return e.commit(n);
        },
        abort: function abort() {
          return e.abort(n);
        }
      };
    };

    r.prototype.commit = function (t) {
      return this._transmit("COMMIT", {
        transaction: t
      });
    };

    r.prototype.abort = function (t) {
      return this._transmit("ABORT", {
        transaction: t
      });
    };

    r.prototype.ack = function (t, e, n) {
      if (n == null) {
        n = {};
      }

      n["message-id"] = t;
      n.subscription = e;
      return this._transmit("ACK", n);
    };

    r.prototype.nack = function (t, e, n) {
      if (n == null) {
        n = {};
      }

      n["message-id"] = t;
      n.subscription = e;
      return this._transmit("NACK", n);
    };

    return r;
  }();

  i = {
    VERSIONS: {
      V1_0: "1.0",
      V1_1: "1.1",
      V1_2: "1.2",
      supportedVersions: function supportedVersions() {
        return "1.1,1.0";
      }
    },
    client: function client(t, n) {
      var r, o;

      if (n == null) {
        n = ["v10.stomp", "v11.stomp"];
      }

      r = i.WebSocketClass || WebSocket;
      o = new r(t, n);
      return new e(o);
    },
    over: function over(t) {
      return new e(t);
    },
    Frame: n
  };

  if (typeof exports !== "undefined" && exports !== null) {
    exports.Stomp = i;
  }

  if (typeof window !== "undefined" && window !== null) {
    i.setInterval = function (t, e) {
      return window.setInterval(e, t);
    };

    i.clearInterval = function (t) {
      return window.clearInterval(t);
    };

    window.Stomp = i;
  } else if (!exports) {
    self.Stomp = i;
  }
}).call(this);
},{}],"js/utils/StringUtils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create_UUID = create_UUID;

function create_UUID() {
  var dt = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : r & 0x3 | 0x8).toString(16);
  });
}
},{}],"js/modules/initForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initForm = void 0;

var _sockjs = _interopRequireDefault(require("../sockets/sockjs.min"));

var _stomp = require("../sockets/stomp.min");

var _StringUtils = require("../utils/StringUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainForm = document.querySelector("#objective");
var titleTextarea = document.querySelector("#input-title");
var mainTextarea = document.querySelector("#textarea-main");
var consoleContainer = document.querySelector(".console-container");
var codeBlock = document.querySelector(".mockup-code");
var iframeBlock = document.querySelector(".iframe-block");
var loader = document.querySelector(".loader");
var stompClient = null;
var uuid = (0, _StringUtils.create_UUID)();

function connect() {
  var socket = new _sockjs.default("https://api.autotests.cloud/ws"); // todo add exception
  // const socket = new SockJS("http://localhost:8080/ws"); // todo add exception

  stompClient = _stomp.Stomp.over(socket);
  stompClient.connect({}, function (status) {
    console.log("Connected: " + status);
    stompClient.subscribe("/topic/".concat(uuid), function (message) {
      console.log("Message: " + message); // todo add exception

      addSocketEvent(JSON.parse(message.body));
    });
  });
}

function addSocketEvent(message) {
  var pre = document.createElement("pre");
  pre.setAttribute("data-prefix", message.prefix);

  switch (message.contentType) {
    case "info":
      pre.className = "list-auto flex";
      pre.innerHTML = "<code>".concat(message.content, "</code>");
      break;

    case "generated":
      pre.className = "text-warning flex";
      pre.innerHTML = "<code>".concat(message.content, "<a target=\"_blank\" class=\"green-link\" href=\"").concat(message.url, "\">").concat(message.urlText, "</a></div></code>");
      break;

    case "launched":
      pre.className = "text-warning flex";
      pre.innerHTML = "<code>".concat(message.content, "<a target=\"_blank\" class=\"green-link\" href=\"").concat(message.url, "\">").concat(message.urlText, "</a> </code> <label class=\"loader\"></label>");
      break;

    case "finished":
      pre.className = "text-warning flex";
      pre.innerHTML = "<code>".concat(message.content, "<a target=\"_blank\" class=\"green-link\" href=\"").concat(message.url, "\">").concat(message.urlText, "</a></div></code>");
      document.querySelector(".loader").remove();
      break;

    case "in progress":
      pre.className = "text-warning flex";
      pre.innerHTML = "<code>".concat(message.content, " </code>");
      break;

    case "can-automate":
      pre.className = "flex";
      pre.innerHTML = "<code>".concat(message.content, "</code>");
      break;

    case "telegram-info":
      pre.className = "flex";
      pre.innerHTML = "<code>".concat(message.content, "<a target=\"_blank\" class=\"blue-link\" href=\"").concat(message.url, "\">").concat(message.urlText, "</a> \uD83D\uDC48</code>");
      break;

    case "telegram-notification":
      pre.className = "flex";
      pre.innerHTML = "<code> </code>";
      displayNotification(message.content);
      break;

    case "empty":
      pre.className = "list-auto flex";
      pre.innerHTML = "<code> </code>";
      break;

    case "error":
      pre.className = "text-error flex";
      pre.innerHTML = "<code>".concat(message.content, "</code>");
      break;
  }

  document.querySelector("#console").append(pre);
}

function displayNotification(messagePath) {
  iframeBlock.innerHTML = "<iframe id=\"telegram-post-autotests_cloud-17\" class=\"telegram-iframe w-full h-full h-80\"\n          src=\"https://t.me/".concat(messagePath, "?embed=1&discussion=1&comments_limit=5&dark=1\"></iframe>");
}

var initForm = function initForm() {
  connect();

  function submitForm(event) {
    event.preventDefault();
    var formData = new FormData(mainForm);
    var values = Object.fromEntries(formData.entries());
    console.log(values);

    if (!!values.steps && values.title) {
      values.price = "free";
      values.email = "admin@qa.guru";
      console.log(values);
      stompClient.send("/app/orders/".concat(uuid), {}, JSON.stringify(values));
      consoleContainer.classList.remove("hidden");
      mainForm.classList.add("hidden");
      iframeBlock.classList.remove("hidden");
      mainForm.reset();
    } else {
      if (!mainTextarea.value) {
        mainTextarea.classList.add("border-red-500");
      }

      if (!titleTextarea.value) {
        titleTextarea.classList.add("border-red-500");
      }

      setTimeout(function () {
        mainTextarea.classList.remove("border-red-500");
        titleTextarea.classList.remove("border-red-500");
      }, 2000);
    }
  }

  mainForm.addEventListener("submit", submitForm);
};

exports.initForm = initForm;
},{"../sockets/sockjs.min":"js/sockets/sockjs.min.js","../sockets/stomp.min":"js/sockets/stomp.min.js","../utils/StringUtils":"js/utils/StringUtils.js"}],"js/modules/LocalLang.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LocalLang = /*#__PURE__*/function () {
  function LocalLang() {
    _classCallCheck(this, LocalLang);
  }

  _createClass(LocalLang, null, [{
    key: "saveLocalLang",
    value: function saveLocalLang(language) {
      var langs;

      if (localStorage.getItem("langs") === null) {
        langs = [];
      } else {
        langs = JSON.parse(localStorage.getItem("langs"));
      }

      langs.push(language);
      localStorage.setItem("langs", JSON.stringify(langs));
    }
  }, {
    key: "getLocalLang",
    value: function getLocalLang() {
      var langs;

      if (localStorage.getItem("langs") === null) {
        langs = [];
      } else {
        langs = JSON.parse(localStorage.getItem("langs"));
      }

      var lang = langs[langs.length - 1];
      return lang;
    }
  }, {
    key: "getDictionary",
    value: function getDictionary() {
      return {
        en_lang: {
          // title: "Test automation as a Service",
          // alert_success: "Automation has started!",
          description: "Describe your manual test step by step",
          test_title: "Test title",
          textarea: "Open 'https://github.com/login' \n\nSet username 'Alex' \nSet password '12%#5f'\nSubmit form \n\nVerify successful authorization as 'Alex'",
          checkout_button: "Automate it! (free now)" // copyright: `<a target="_blank" class="green-link" href="https://qa.guru">qa.guru</a>
          //     copyright`,

        },
        ru_lang: {
          // title: "Тест аутомейшн эс а сервис",
          // alert_success: "Аутомэйшн хэс стартед!",
          description: "\n            \u0420\u0430\u0441\u043F\u0438\u0448\u0438\u0442\u0435 \u0440\u0443\u0447\u043D\u043E\u0439 \u0442\u0435\u0441\u0442 \u0448\u0430\u0433 \u0437\u0430 \u0448\u0430\u0433\u043E\u043C",
          test_title: "Название теста",
          textarea: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C 'https://github.com/login' \n\n\u0412\u0432\u0435\u0441\u0442\u0438 \u043B\u043E\u0433\u0438\u043D 'Alex' \n\u0412\u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u0440\u043E\u043B\u044C '12%#5f' \n\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \n\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u0443\u044E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044E \u043F\u043E\u0434 'Alex'",
          checkout_button: "Автоматизировать!" // copyright: `<a target="_blank" class="green-link" href="https://qa.guru">qa.guru</a>
          //     копирайт`,

        }
      };
    }
  }]);

  return LocalLang;
}();

var _default = LocalLang;
exports.default = _default;
},{}],"js/modules/initLanguage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initLanguage = void 0;

var _LocalLang = _interopRequireDefault(require("./LocalLang"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initLanguage = function initLanguage() {
  document.addEventListener("DOMContentLoaded", changeLanguage);
  var languageButtons = document.querySelectorAll(".translate");
  var blocksForTranslate = document.querySelectorAll(".lang");
  languageButtons.forEach(function (button) {
    button.addEventListener("click", changeLanguage);
  });

  function changeLanguage() {
    var blocksForTranslate = document.querySelectorAll(".lang");
    var lang = this.tagName === undefined ? _LocalLang.default.getLocalLang() : this.getAttribute("id");
    blocksForTranslate.forEach(function (block) {
      var currentBlock = block.getAttribute("key");

      if (block.tagName !== "TEXTAREA") {
        block.innerHTML = _LocalLang.default.getDictionary()[lang][currentBlock];
      }

      if (block.getAttribute("placeholder") !== null) {
        block.setAttribute("placeholder", _LocalLang.default.getDictionary()[lang][currentBlock]);
      }
    });

    _LocalLang.default.saveLocalLang(lang);

    languageButtons.forEach(function (button) {
      button.classList.remove("translate--active");

      if (button.id === _LocalLang.default.getLocalLang()) {
        button.classList.add("translate--active");
      }
    });

    if (this.id === _LocalLang.default.getLocalLang()) {
      this.classList.add("translate--active");
    } // console.log(LocalLang.getDictionary()[LocalLang.getLocalLang()]);

  }
};

exports.initLanguage = initLanguage;
},{"./LocalLang":"js/modules/LocalLang.js"}],"js/modules/initDisco.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDisco = void 0;

var initDisco = function initDisco() {
  var mainContainer = document.querySelector("#app");
  var consoleContainer = document.querySelector(".console-container");
  var console = document.querySelector("#console");
  var mainForm = document.querySelector("#objective");
  var mainTitle = document.querySelector("h1");
  var discoBtn = document.querySelector(".tools__item--disco");
  var catParty = document.querySelector("#party");
  var discoElementBanana = document.querySelectorAll(".disco-element--banana");
  var discoElementWoman = document.querySelectorAll(".disco-element--woman");
  var dancers = document.querySelectorAll(".disco-element");
  var mainTitleText;
  var danceInterval;
  var colorInterval;
  var danceFlag = true;
  discoBtn.addEventListener("click", function () {
    if (danceFlag) {
      startDisco();
    } else {
      stopDisco();
    }
  });

  function startDisco() {
    mainTitleText = mainTitle.innerHTML;
    mainTitle.innerHTML = "Test automation as a <span class=\"disco__word disco__word--1\">D</span><span class=\"disco__word disco__word--2\">i</span><span class=\"disco__word disco__word--3\">s</span><span class=\"disco__word disco__word--4\">c</span><span class=\"disco__word disco__word--5\">o</span>";

    var rand = function rand(multi) {
      return parseInt(multi * Math.random(), 10);
    };

    var ww = window.innerWidth / 2;
    var wh = window.innerHeight;
    var constraint = Math.min(ww, wh);

    function move() {
      dancers.forEach(function (dancer) {
        var w = rand(constraint);
        var x = rand(ww - w);
        var y = rand(wh - w);
        dancer.style.height = w / 3 + "px";
        dancer.style.top = y + "px";
        dancer.style.left = x + ww / 4 + "px";
        dancer.style.transition = rand(100) + 2000 + "ms";
      });
    }

    move();
    catParty.classList.remove("hidden");
    consoleContainer.classList.add("hidden");
    mainForm.classList.add("hidden");
    discoElementBanana.forEach(function (element) {
      element.classList.remove("hidden");
    });
    discoElementWoman.forEach(function (element) {
      element.classList.remove("hidden");
    });
    colorInterval = window.setInterval(changeColors, 500);
    danceInterval = window.setInterval(move, 1500);
    danceFlag = false;
  }

  function stopDisco() {
    var iframe = document.querySelector("iframe");
    mainTitle.innerHTML = mainTitleText;
    discoElementBanana.forEach(function (element) {
      element.classList.add("hidden");
    });
    discoElementWoman.forEach(function (element) {
      element.classList.add("hidden");
    });

    if (iframe) {
      consoleContainer.classList.remove("hidden");
    } else {
      mainForm.classList.remove("hidden");
    }

    catParty.classList.add("hidden");
    danceFlag = true;
    clearInterval(danceInterval);
    clearInterval(colorInterval);
  }

  function randColor(elem) {
    var code_color = document.querySelector(".code_color"),
        r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256),
        color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    elem.style.color = color;
  }

  function changeColors() {
    var allDiscoLetters = document.querySelectorAll(".disco__word");
    allDiscoLetters.forEach(function (element) {
      randColor(element);
    });
  }
};

exports.initDisco = initDisco;
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./img\\tenor.gif":[["tenor.160d12b8.gif","img/tenor.gif"],"img/tenor.gif"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _general = _interopRequireDefault(require("daisyui/dist/resets/general"));

var _initForm = require("./js/modules/initForm");

var _initLanguage = require("./js/modules/initLanguage");

var _initDisco = require("./js/modules/initDisco");

require("./styles.css");

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _initForm.initForm)();
(0, _initLanguage.initLanguage)();
(0, _initDisco.initDisco)();
},{"daisyui/dist/resets/general":"../node_modules/daisyui/dist/resets/general.js","./js/modules/initForm":"js/modules/initForm.js","./js/modules/initLanguage":"js/modules/initLanguage.js","./js/modules/initDisco":"js/modules/initDisco.js","./styles.css":"styles.css","./styles.scss":"styles.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60037" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map