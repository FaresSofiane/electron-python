import { app as Z, BrowserWindow as Pn } from "electron";
import { fileURLToPath as $t } from "node:url";
import V from "node:path";
import gt, { spawn as Ft, execFile as Ot } from "child_process";
import Be from "fs";
import kt from "constants";
import Pt from "stream";
import Nt from "util";
import Nn from "assert";
import D from "path";
import Tt from "os";
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Tn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _n = { exports: {} }, Je = {}, W = {};
W.fromCallback = function(e) {
  return Object.defineProperty(function() {
    if (typeof arguments[arguments.length - 1] == "function") e.apply(this, arguments);
    else
      return new Promise((t, n) => {
        arguments[arguments.length] = (r, i) => {
          if (r) return n(r);
          t(i);
        }, arguments.length++, e.apply(this, arguments);
      });
  }, "name", { value: e.name });
};
W.fromPromise = function(e) {
  return Object.defineProperty(function() {
    const t = arguments[arguments.length - 1];
    if (typeof t != "function") return e.apply(this, arguments);
    e.apply(this, arguments).then((n) => t(null, n), t);
  }, "name", { value: e.name });
};
var Y = kt, _t = process.cwd, Ee = null, Dt = process.env.GRACEFUL_FS_PLATFORM || process.platform;
process.cwd = function() {
  return Ee || (Ee = _t.call(process)), Ee;
};
try {
  process.cwd();
} catch {
}
if (typeof process.chdir == "function") {
  var ze = process.chdir;
  process.chdir = function(e) {
    Ee = null, ze.call(process, e);
  }, Object.setPrototypeOf && Object.setPrototypeOf(process.chdir, ze);
}
var xt = It;
function It(e) {
  Y.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./) && t(e), e.lutimes || n(e), e.chown = o(e.chown), e.fchown = o(e.fchown), e.lchown = o(e.lchown), e.chmod = r(e.chmod), e.fchmod = r(e.fchmod), e.lchmod = r(e.lchmod), e.chownSync = u(e.chownSync), e.fchownSync = u(e.fchownSync), e.lchownSync = u(e.lchownSync), e.chmodSync = i(e.chmodSync), e.fchmodSync = i(e.fchmodSync), e.lchmodSync = i(e.lchmodSync), e.stat = c(e.stat), e.fstat = c(e.fstat), e.lstat = c(e.lstat), e.statSync = s(e.statSync), e.fstatSync = s(e.fstatSync), e.lstatSync = s(e.lstatSync), e.chmod && !e.lchmod && (e.lchmod = function(f, l, y) {
    y && process.nextTick(y);
  }, e.lchmodSync = function() {
  }), e.chown && !e.lchown && (e.lchown = function(f, l, y, a) {
    a && process.nextTick(a);
  }, e.lchownSync = function() {
  }), Dt === "win32" && (e.rename = typeof e.rename != "function" ? e.rename : function(f) {
    function l(y, a, d) {
      var $ = Date.now(), E = 0;
      f(y, a, function O(B) {
        if (B && (B.code === "EACCES" || B.code === "EPERM" || B.code === "EBUSY") && Date.now() - $ < 6e4) {
          setTimeout(function() {
            e.stat(a, function(M, te) {
              M && M.code === "ENOENT" ? f(y, a, O) : d(B);
            });
          }, E), E < 100 && (E += 10);
          return;
        }
        d && d(B);
      });
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(l, f), l;
  }(e.rename)), e.read = typeof e.read != "function" ? e.read : function(f) {
    function l(y, a, d, $, E, O) {
      var B;
      if (O && typeof O == "function") {
        var M = 0;
        B = function(te, Qe, Xe) {
          if (te && te.code === "EAGAIN" && M < 10)
            return M++, f.call(e, y, a, d, $, E, B);
          O.apply(this, arguments);
        };
      }
      return f.call(e, y, a, d, $, E, B);
    }
    return Object.setPrototypeOf && Object.setPrototypeOf(l, f), l;
  }(e.read), e.readSync = typeof e.readSync != "function" ? e.readSync : /* @__PURE__ */ function(f) {
    return function(l, y, a, d, $) {
      for (var E = 0; ; )
        try {
          return f.call(e, l, y, a, d, $);
        } catch (O) {
          if (O.code === "EAGAIN" && E < 10) {
            E++;
            continue;
          }
          throw O;
        }
    };
  }(e.readSync);
  function t(f) {
    f.lchmod = function(l, y, a) {
      f.open(
        l,
        Y.O_WRONLY | Y.O_SYMLINK,
        y,
        function(d, $) {
          if (d) {
            a && a(d);
            return;
          }
          f.fchmod($, y, function(E) {
            f.close($, function(O) {
              a && a(E || O);
            });
          });
        }
      );
    }, f.lchmodSync = function(l, y) {
      var a = f.openSync(l, Y.O_WRONLY | Y.O_SYMLINK, y), d = !0, $;
      try {
        $ = f.fchmodSync(a, y), d = !1;
      } finally {
        if (d)
          try {
            f.closeSync(a);
          } catch {
          }
        else
          f.closeSync(a);
      }
      return $;
    };
  }
  function n(f) {
    Y.hasOwnProperty("O_SYMLINK") && f.futimes ? (f.lutimes = function(l, y, a, d) {
      f.open(l, Y.O_SYMLINK, function($, E) {
        if ($) {
          d && d($);
          return;
        }
        f.futimes(E, y, a, function(O) {
          f.close(E, function(B) {
            d && d(O || B);
          });
        });
      });
    }, f.lutimesSync = function(l, y, a) {
      var d = f.openSync(l, Y.O_SYMLINK), $, E = !0;
      try {
        $ = f.futimesSync(d, y, a), E = !1;
      } finally {
        if (E)
          try {
            f.closeSync(d);
          } catch {
          }
        else
          f.closeSync(d);
      }
      return $;
    }) : f.futimes && (f.lutimes = function(l, y, a, d) {
      d && process.nextTick(d);
    }, f.lutimesSync = function() {
    });
  }
  function r(f) {
    return f && function(l, y, a) {
      return f.call(e, l, y, function(d) {
        m(d) && (d = null), a && a.apply(this, arguments);
      });
    };
  }
  function i(f) {
    return f && function(l, y) {
      try {
        return f.call(e, l, y);
      } catch (a) {
        if (!m(a)) throw a;
      }
    };
  }
  function o(f) {
    return f && function(l, y, a, d) {
      return f.call(e, l, y, a, function($) {
        m($) && ($ = null), d && d.apply(this, arguments);
      });
    };
  }
  function u(f) {
    return f && function(l, y, a) {
      try {
        return f.call(e, l, y, a);
      } catch (d) {
        if (!m(d)) throw d;
      }
    };
  }
  function c(f) {
    return f && function(l, y, a) {
      typeof y == "function" && (a = y, y = null);
      function d($, E) {
        E && (E.uid < 0 && (E.uid += 4294967296), E.gid < 0 && (E.gid += 4294967296)), a && a.apply(this, arguments);
      }
      return y ? f.call(e, l, y, d) : f.call(e, l, d);
    };
  }
  function s(f) {
    return f && function(l, y) {
      var a = y ? f.call(e, l, y) : f.call(e, l);
      return a && (a.uid < 0 && (a.uid += 4294967296), a.gid < 0 && (a.gid += 4294967296)), a;
    };
  }
  function m(f) {
    if (!f || f.code === "ENOSYS")
      return !0;
    var l = !process.getuid || process.getuid() !== 0;
    return !!(l && (f.code === "EINVAL" || f.code === "EPERM"));
  }
}
var Ze = Pt.Stream, jt = Rt;
function Rt(e) {
  return {
    ReadStream: t,
    WriteStream: n
  };
  function t(r, i) {
    if (!(this instanceof t)) return new t(r, i);
    Ze.call(this);
    var o = this;
    this.path = r, this.fd = null, this.readable = !0, this.paused = !1, this.flags = "r", this.mode = 438, this.bufferSize = 64 * 1024, i = i || {};
    for (var u = Object.keys(i), c = 0, s = u.length; c < s; c++) {
      var m = u[c];
      this[m] = i[m];
    }
    if (this.encoding && this.setEncoding(this.encoding), this.start !== void 0) {
      if (typeof this.start != "number")
        throw TypeError("start must be a Number");
      if (this.end === void 0)
        this.end = 1 / 0;
      else if (typeof this.end != "number")
        throw TypeError("end must be a Number");
      if (this.start > this.end)
        throw new Error("start must be <= end");
      this.pos = this.start;
    }
    if (this.fd !== null) {
      process.nextTick(function() {
        o._read();
      });
      return;
    }
    e.open(this.path, this.flags, this.mode, function(f, l) {
      if (f) {
        o.emit("error", f), o.readable = !1;
        return;
      }
      o.fd = l, o.emit("open", l), o._read();
    });
  }
  function n(r, i) {
    if (!(this instanceof n)) return new n(r, i);
    Ze.call(this), this.path = r, this.fd = null, this.writable = !0, this.flags = "w", this.encoding = "binary", this.mode = 438, this.bytesWritten = 0, i = i || {};
    for (var o = Object.keys(i), u = 0, c = o.length; u < c; u++) {
      var s = o[u];
      this[s] = i[s];
    }
    if (this.start !== void 0) {
      if (typeof this.start != "number")
        throw TypeError("start must be a Number");
      if (this.start < 0)
        throw new Error("start must be >= zero");
      this.pos = this.start;
    }
    this.busy = !1, this._queue = [], this.fd === null && (this._open = e.open, this._queue.push([this._open, this.path, this.flags, this.mode, void 0]), this.flush());
  }
}
var Lt = Mt, Ct = Object.getPrototypeOf || function(e) {
  return e.__proto__;
};
function Mt(e) {
  if (e === null || typeof e != "object")
    return e;
  if (e instanceof Object)
    var t = { __proto__: Ct(e) };
  else
    var t = /* @__PURE__ */ Object.create(null);
  return Object.getOwnPropertyNames(e).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
  }), t;
}
var P = Be, At = xt, Wt = jt, Bt = Lt, me = Nt, R, ge;
typeof Symbol == "function" && typeof Symbol.for == "function" ? (R = Symbol.for("graceful-fs.queue"), ge = Symbol.for("graceful-fs.previous")) : (R = "___graceful-fs.queue", ge = "___graceful-fs.previous");
function Jt() {
}
function Dn(e, t) {
  Object.defineProperty(e, R, {
    get: function() {
      return t;
    }
  });
}
var z = Jt;
me.debuglog ? z = me.debuglog("gfs4") : /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && (z = function() {
  var e = me.format.apply(me, arguments);
  e = "GFS4: " + e.split(/\n/).join(`
GFS4: `), console.error(e);
});
if (!P[R]) {
  var qt = Re[R] || [];
  Dn(P, qt), P.close = function(e) {
    function t(n, r) {
      return e.call(P, n, function(i) {
        i || be(), typeof r == "function" && r.apply(this, arguments);
      });
    }
    return Object.defineProperty(t, ge, {
      value: e
    }), t;
  }(P.close), P.closeSync = function(e) {
    function t(n) {
      e.apply(P, arguments), be();
    }
    return Object.defineProperty(t, ge, {
      value: e
    }), t;
  }(P.closeSync), /\bgfs4\b/i.test(process.env.NODE_DEBUG || "") && process.on("exit", function() {
    z(P[R]), Nn.equal(P[R].length, 0);
  });
}
Re[R] || Dn(Re, P[R]);
var T = qe(Bt(P));
process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !P.__patched && (T = qe(P), P.__patched = !0);
function qe(e) {
  At(e), e.gracefulify = qe, e.createReadStream = Qe, e.createWriteStream = Xe;
  var t = e.readFile;
  e.readFile = n;
  function n(h, w, S) {
    return typeof w == "function" && (S = w, w = null), x(h, w, S);
    function x(I, _, k, N) {
      return t(I, _, function(p) {
        p && (p.code === "EMFILE" || p.code === "ENFILE") ? b([x, [I, _, k], p, N || Date.now(), Date.now()]) : typeof k == "function" && k.apply(this, arguments);
      });
    }
  }
  var r = e.writeFile;
  e.writeFile = i;
  function i(h, w, S, x) {
    return typeof S == "function" && (x = S, S = null), I(h, w, S, x);
    function I(_, k, N, p, j) {
      return r(_, k, N, function(g) {
        g && (g.code === "EMFILE" || g.code === "ENFILE") ? b([I, [_, k, N, p], g, j || Date.now(), Date.now()]) : typeof p == "function" && p.apply(this, arguments);
      });
    }
  }
  var o = e.appendFile;
  o && (e.appendFile = u);
  function u(h, w, S, x) {
    return typeof S == "function" && (x = S, S = null), I(h, w, S, x);
    function I(_, k, N, p, j) {
      return o(_, k, N, function(g) {
        g && (g.code === "EMFILE" || g.code === "ENFILE") ? b([I, [_, k, N, p], g, j || Date.now(), Date.now()]) : typeof p == "function" && p.apply(this, arguments);
      });
    }
  }
  var c = e.copyFile;
  c && (e.copyFile = s);
  function s(h, w, S, x) {
    return typeof S == "function" && (x = S, S = 0), I(h, w, S, x);
    function I(_, k, N, p, j) {
      return c(_, k, N, function(g) {
        g && (g.code === "EMFILE" || g.code === "ENFILE") ? b([I, [_, k, N, p], g, j || Date.now(), Date.now()]) : typeof p == "function" && p.apply(this, arguments);
      });
    }
  }
  var m = e.readdir;
  e.readdir = l;
  var f = /^v[0-5]\./;
  function l(h, w, S) {
    typeof w == "function" && (S = w, w = null);
    var x = f.test(process.version) ? function(k, N, p, j) {
      return m(k, I(
        k,
        N,
        p,
        j
      ));
    } : function(k, N, p, j) {
      return m(k, N, I(
        k,
        N,
        p,
        j
      ));
    };
    return x(h, w, S);
    function I(_, k, N, p) {
      return function(j, g) {
        j && (j.code === "EMFILE" || j.code === "ENFILE") ? b([
          x,
          [_, k, N],
          j,
          p || Date.now(),
          Date.now()
        ]) : (g && g.sort && g.sort(), typeof N == "function" && N.call(this, j, g));
      };
    }
  }
  if (process.version.substr(0, 4) === "v0.8") {
    var y = Wt(e);
    O = y.ReadStream, M = y.WriteStream;
  }
  var a = e.ReadStream;
  a && (O.prototype = Object.create(a.prototype), O.prototype.open = B);
  var d = e.WriteStream;
  d && (M.prototype = Object.create(d.prototype), M.prototype.open = te), Object.defineProperty(e, "ReadStream", {
    get: function() {
      return O;
    },
    set: function(h) {
      O = h;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "WriteStream", {
    get: function() {
      return M;
    },
    set: function(h) {
      M = h;
    },
    enumerable: !0,
    configurable: !0
  });
  var $ = O;
  Object.defineProperty(e, "FileReadStream", {
    get: function() {
      return $;
    },
    set: function(h) {
      $ = h;
    },
    enumerable: !0,
    configurable: !0
  });
  var E = M;
  Object.defineProperty(e, "FileWriteStream", {
    get: function() {
      return E;
    },
    set: function(h) {
      E = h;
    },
    enumerable: !0,
    configurable: !0
  });
  function O(h, w) {
    return this instanceof O ? (a.apply(this, arguments), this) : O.apply(Object.create(O.prototype), arguments);
  }
  function B() {
    var h = this;
    Ne(h.path, h.flags, h.mode, function(w, S) {
      w ? (h.autoClose && h.destroy(), h.emit("error", w)) : (h.fd = S, h.emit("open", S), h.read());
    });
  }
  function M(h, w) {
    return this instanceof M ? (d.apply(this, arguments), this) : M.apply(Object.create(M.prototype), arguments);
  }
  function te() {
    var h = this;
    Ne(h.path, h.flags, h.mode, function(w, S) {
      w ? (h.destroy(), h.emit("error", w)) : (h.fd = S, h.emit("open", S));
    });
  }
  function Qe(h, w) {
    return new e.ReadStream(h, w);
  }
  function Xe(h, w) {
    return new e.WriteStream(h, w);
  }
  var pt = e.open;
  e.open = Ne;
  function Ne(h, w, S, x) {
    return typeof S == "function" && (x = S, S = null), I(h, w, S, x);
    function I(_, k, N, p, j) {
      return pt(_, k, N, function(g, vo) {
        g && (g.code === "EMFILE" || g.code === "ENFILE") ? b([I, [_, k, N, p], g, j || Date.now(), Date.now()]) : typeof p == "function" && p.apply(this, arguments);
      });
    }
  }
  return e;
}
function b(e) {
  z("ENQUEUE", e[0].name, e[1]), P[R].push(e), Ue();
}
var de;
function be() {
  for (var e = Date.now(), t = 0; t < P[R].length; ++t)
    P[R][t].length > 2 && (P[R][t][3] = e, P[R][t][4] = e);
  Ue();
}
function Ue() {
  if (clearTimeout(de), de = void 0, P[R].length !== 0) {
    var e = P[R].shift(), t = e[0], n = e[1], r = e[2], i = e[3], o = e[4];
    if (i === void 0)
      z("RETRY", t.name, n), t.apply(null, n);
    else if (Date.now() - i >= 6e4) {
      z("TIMEOUT", t.name, n);
      var u = n.pop();
      typeof u == "function" && u.call(null, r);
    } else {
      var c = Date.now() - o, s = Math.max(o - i, 1), m = Math.min(s * 1.2, 100);
      c >= m ? (z("RETRY", t.name, n), t.apply(null, n.concat([i]))) : P[R].push(e);
    }
    de === void 0 && (de = setTimeout(Ue, 0));
  }
}
(function(e) {
  const t = W.fromCallback, n = T, r = [
    "access",
    "appendFile",
    "chmod",
    "chown",
    "close",
    "copyFile",
    "fchmod",
    "fchown",
    "fdatasync",
    "fstat",
    "fsync",
    "ftruncate",
    "futimes",
    "lchown",
    "lchmod",
    "link",
    "lstat",
    "mkdir",
    "mkdtemp",
    "open",
    "readFile",
    "readdir",
    "readlink",
    "realpath",
    "rename",
    "rmdir",
    "stat",
    "symlink",
    "truncate",
    "unlink",
    "utimes",
    "writeFile"
  ].filter((i) => typeof n[i] == "function");
  Object.keys(n).forEach((i) => {
    i !== "promises" && (e[i] = n[i]);
  }), r.forEach((i) => {
    e[i] = t(n[i]);
  }), e.exists = function(i, o) {
    return typeof o == "function" ? n.exists(i, o) : new Promise((u) => n.exists(i, u));
  }, e.read = function(i, o, u, c, s, m) {
    return typeof m == "function" ? n.read(i, o, u, c, s, m) : new Promise((f, l) => {
      n.read(i, o, u, c, s, (y, a, d) => {
        if (y) return l(y);
        f({ bytesRead: a, buffer: d });
      });
    });
  }, e.write = function(i, o, ...u) {
    return typeof u[u.length - 1] == "function" ? n.write(i, o, ...u) : new Promise((c, s) => {
      n.write(i, o, ...u, (m, f, l) => {
        if (m) return s(m);
        c({ bytesWritten: f, buffer: l });
      });
    });
  }, typeof n.realpath.native == "function" && (e.realpath.native = t(n.realpath.native));
})(Je);
const Te = D;
function xn(e) {
  return e = Te.normalize(Te.resolve(e)).split(Te.sep), e.length > 0 ? e[0] : null;
}
const Ut = /[<>:"|?*]/;
function Vt(e) {
  const t = xn(e);
  return e = e.replace(t, ""), Ut.test(e);
}
var In = {
  getRootPath: xn,
  invalidWin32Path: Vt
};
const Gt = T, _e = D, Yt = In.invalidWin32Path, Ht = parseInt("0777", 8);
function Le(e, t, n, r) {
  if (typeof t == "function" ? (n = t, t = {}) : (!t || typeof t != "object") && (t = { mode: t }), process.platform === "win32" && Yt(e)) {
    const u = new Error(e + " contains invalid WIN32 path characters.");
    return u.code = "EINVAL", n(u);
  }
  let i = t.mode;
  const o = t.fs || Gt;
  i === void 0 && (i = Ht & ~process.umask()), r || (r = null), n = n || function() {
  }, e = _e.resolve(e), o.mkdir(e, i, (u) => {
    if (!u)
      return r = r || e, n(null, r);
    switch (u.code) {
      case "ENOENT":
        if (_e.dirname(e) === e) return n(u);
        Le(_e.dirname(e), t, (c, s) => {
          c ? n(c, s) : Le(e, t, n, s);
        });
        break;
      default:
        o.stat(e, (c, s) => {
          c || !s.isDirectory() ? n(u, r) : n(null, r);
        });
        break;
    }
  });
}
var Kt = Le;
const Qt = T, De = D, Xt = In.invalidWin32Path, zt = parseInt("0777", 8);
function Ce(e, t, n) {
  (!t || typeof t != "object") && (t = { mode: t });
  let r = t.mode;
  const i = t.fs || Qt;
  if (process.platform === "win32" && Xt(e)) {
    const o = new Error(e + " contains invalid WIN32 path characters.");
    throw o.code = "EINVAL", o;
  }
  r === void 0 && (r = zt & ~process.umask()), n || (n = null), e = De.resolve(e);
  try {
    i.mkdirSync(e, r), n = n || e;
  } catch (o) {
    if (o.code === "ENOENT") {
      if (De.dirname(e) === e) throw o;
      n = Ce(De.dirname(e), t, n), Ce(e, t, n);
    } else {
      let u;
      try {
        u = i.statSync(e);
      } catch {
        throw o;
      }
      if (!u.isDirectory()) throw o;
    }
  }
  return n;
}
var Zt = Ce;
const bt = W.fromCallback, xe = bt(Kt), Ie = Zt;
var U = {
  mkdirs: xe,
  mkdirsSync: Ie,
  // alias
  mkdirp: xe,
  mkdirpSync: Ie,
  ensureDir: xe,
  ensureDirSync: Ie
};
const C = T, jn = Tt, Fe = D;
function er() {
  let e = Fe.join("millis-test-sync" + Date.now().toString() + Math.random().toString().slice(2));
  e = Fe.join(jn.tmpdir(), e);
  const t = /* @__PURE__ */ new Date(1435410243862);
  C.writeFileSync(e, "https://github.com/jprichardson/node-fs-extra/pull/141");
  const n = C.openSync(e, "r+");
  return C.futimesSync(n, t, t), C.closeSync(n), C.statSync(e).mtime > 1435410243e3;
}
function nr(e) {
  let t = Fe.join("millis-test" + Date.now().toString() + Math.random().toString().slice(2));
  t = Fe.join(jn.tmpdir(), t);
  const n = /* @__PURE__ */ new Date(1435410243862);
  C.writeFile(t, "https://github.com/jprichardson/node-fs-extra/pull/141", (r) => {
    if (r) return e(r);
    C.open(t, "r+", (i, o) => {
      if (i) return e(i);
      C.futimes(o, n, n, (u) => {
        if (u) return e(u);
        C.close(o, (c) => {
          if (c) return e(c);
          C.stat(t, (s, m) => {
            if (s) return e(s);
            e(null, m.mtime > 1435410243e3);
          });
        });
      });
    });
  });
}
function tr(e) {
  if (typeof e == "number")
    return Math.floor(e / 1e3) * 1e3;
  if (e instanceof Date)
    return new Date(Math.floor(e.getTime() / 1e3) * 1e3);
  throw new Error("fs-extra: timeRemoveMillis() unknown parameter type");
}
function rr(e, t, n, r) {
  C.open(e, "r+", (i, o) => {
    if (i) return r(i);
    C.futimes(o, t, n, (u) => {
      C.close(o, (c) => {
        r && r(u || c);
      });
    });
  });
}
function ir(e, t, n) {
  const r = C.openSync(e, "r+");
  return C.futimesSync(r, t, n), C.closeSync(r);
}
var Rn = {
  hasMillisRes: nr,
  hasMillisResSync: er,
  timeRemoveMillis: tr,
  utimesMillis: rr,
  utimesMillisSync: ir
};
const q = T, J = D, en = 10, nn = 5, or = 0, Ve = process.versions.node.split("."), tn = Number.parseInt(Ve[0], 10), rn = Number.parseInt(Ve[1], 10), ur = Number.parseInt(Ve[2], 10);
function ue() {
  if (tn > en)
    return !0;
  if (tn === en) {
    if (rn > nn)
      return !0;
    if (rn === nn && ur >= or)
      return !0;
  }
  return !1;
}
function cr(e, t, n) {
  ue() ? q.stat(e, { bigint: !0 }, (r, i) => {
    if (r) return n(r);
    q.stat(t, { bigint: !0 }, (o, u) => o ? o.code === "ENOENT" ? n(null, { srcStat: i, destStat: null }) : n(o) : n(null, { srcStat: i, destStat: u }));
  }) : q.stat(e, (r, i) => {
    if (r) return n(r);
    q.stat(t, (o, u) => o ? o.code === "ENOENT" ? n(null, { srcStat: i, destStat: null }) : n(o) : n(null, { srcStat: i, destStat: u }));
  });
}
function fr(e, t) {
  let n, r;
  ue() ? n = q.statSync(e, { bigint: !0 }) : n = q.statSync(e);
  try {
    ue() ? r = q.statSync(t, { bigint: !0 }) : r = q.statSync(t);
  } catch (i) {
    if (i.code === "ENOENT") return { srcStat: n, destStat: null };
    throw i;
  }
  return { srcStat: n, destStat: r };
}
function sr(e, t, n, r) {
  cr(e, t, (i, o) => {
    if (i) return r(i);
    const { srcStat: u, destStat: c } = o;
    return c && c.ino && c.dev && c.ino === u.ino && c.dev === u.dev ? r(new Error("Source and destination must not be the same.")) : u.isDirectory() && Ge(e, t) ? r(new Error(ce(e, t, n))) : r(null, { srcStat: u, destStat: c });
  });
}
function ar(e, t, n) {
  const { srcStat: r, destStat: i } = fr(e, t);
  if (i && i.ino && i.dev && i.ino === r.ino && i.dev === r.dev)
    throw new Error("Source and destination must not be the same.");
  if (r.isDirectory() && Ge(e, t))
    throw new Error(ce(e, t, n));
  return { srcStat: r, destStat: i };
}
function Me(e, t, n, r, i) {
  const o = J.resolve(J.dirname(e)), u = J.resolve(J.dirname(n));
  if (u === o || u === J.parse(u).root) return i();
  ue() ? q.stat(u, { bigint: !0 }, (c, s) => c ? c.code === "ENOENT" ? i() : i(c) : s.ino && s.dev && s.ino === t.ino && s.dev === t.dev ? i(new Error(ce(e, n, r))) : Me(e, t, u, r, i)) : q.stat(u, (c, s) => c ? c.code === "ENOENT" ? i() : i(c) : s.ino && s.dev && s.ino === t.ino && s.dev === t.dev ? i(new Error(ce(e, n, r))) : Me(e, t, u, r, i));
}
function Ln(e, t, n, r) {
  const i = J.resolve(J.dirname(e)), o = J.resolve(J.dirname(n));
  if (o === i || o === J.parse(o).root) return;
  let u;
  try {
    ue() ? u = q.statSync(o, { bigint: !0 }) : u = q.statSync(o);
  } catch (c) {
    if (c.code === "ENOENT") return;
    throw c;
  }
  if (u.ino && u.dev && u.ino === t.ino && u.dev === t.dev)
    throw new Error(ce(e, n, r));
  return Ln(e, t, o, r);
}
function Ge(e, t) {
  const n = J.resolve(e).split(J.sep).filter((i) => i), r = J.resolve(t).split(J.sep).filter((i) => i);
  return n.reduce((i, o, u) => i && r[u] === o, !0);
}
function ce(e, t, n) {
  return `Cannot ${n} '${e}' to a subdirectory of itself, '${t}'.`;
}
var ke = {
  checkPaths: sr,
  checkPathsSync: ar,
  checkParentPaths: Me,
  checkParentPathsSync: Ln,
  isSrcSubdir: Ge
}, je, on;
function lr() {
  return on || (on = 1, je = function(e) {
    if (typeof Buffer.allocUnsafe == "function")
      try {
        return Buffer.allocUnsafe(e);
      } catch {
        return new Buffer(e);
      }
    return new Buffer(e);
  }), je;
}
const F = T, fe = D, yr = U.mkdirsSync, mr = Rn.utimesMillisSync, se = ke;
function dr(e, t, n) {
  typeof n == "function" && (n = { filter: n }), n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`);
  const { srcStat: r, destStat: i } = se.checkPathsSync(e, t, "copy");
  return se.checkParentPathsSync(e, r, t, "copy"), hr(i, e, t, n);
}
function hr(e, t, n, r) {
  if (r.filter && !r.filter(t, n)) return;
  const i = fe.dirname(n);
  return F.existsSync(i) || yr(i), Cn(e, t, n, r);
}
function Cn(e, t, n, r) {
  if (!(r.filter && !r.filter(t, n)))
    return Sr(e, t, n, r);
}
function Sr(e, t, n, r) {
  const o = (r.dereference ? F.statSync : F.lstatSync)(t);
  if (o.isDirectory()) return pr(o, e, t, n, r);
  if (o.isFile() || o.isCharacterDevice() || o.isBlockDevice()) return vr(o, e, t, n, r);
  if (o.isSymbolicLink()) return Fr(e, t, n, r);
}
function vr(e, t, n, r, i) {
  return t ? wr(e, n, r, i) : Mn(e, n, r, i);
}
function wr(e, t, n, r) {
  if (r.overwrite)
    return F.unlinkSync(n), Mn(e, t, n, r);
  if (r.errorOnExist)
    throw new Error(`'${n}' already exists`);
}
function Mn(e, t, n, r) {
  return typeof F.copyFileSync == "function" ? (F.copyFileSync(t, n), F.chmodSync(n, e.mode), r.preserveTimestamps ? mr(n, e.atime, e.mtime) : void 0) : Er(e, t, n, r);
}
function Er(e, t, n, r) {
  const o = lr()(65536), u = F.openSync(t, "r"), c = F.openSync(n, "w", e.mode);
  let s = 0;
  for (; s < e.size; ) {
    const m = F.readSync(u, o, 0, 65536, s);
    F.writeSync(c, o, 0, m), s += m;
  }
  r.preserveTimestamps && F.futimesSync(c, e.atime, e.mtime), F.closeSync(u), F.closeSync(c);
}
function pr(e, t, n, r, i) {
  if (!t) return $r(e, n, r, i);
  if (t && !t.isDirectory())
    throw new Error(`Cannot overwrite non-directory '${r}' with directory '${n}'.`);
  return An(n, r, i);
}
function $r(e, t, n, r) {
  return F.mkdirSync(n), An(t, n, r), F.chmodSync(n, e.mode);
}
function An(e, t, n) {
  F.readdirSync(e).forEach((r) => gr(r, e, t, n));
}
function gr(e, t, n, r) {
  const i = fe.join(t, e), o = fe.join(n, e), { destStat: u } = se.checkPathsSync(i, o, "copy");
  return Cn(u, i, o, r);
}
function Fr(e, t, n, r) {
  let i = F.readlinkSync(t);
  if (r.dereference && (i = fe.resolve(process.cwd(), i)), e) {
    let o;
    try {
      o = F.readlinkSync(n);
    } catch (u) {
      if (u.code === "EINVAL" || u.code === "UNKNOWN") return F.symlinkSync(i, n);
      throw u;
    }
    if (r.dereference && (o = fe.resolve(process.cwd(), o)), se.isSrcSubdir(i, o))
      throw new Error(`Cannot copy '${i}' to a subdirectory of itself, '${o}'.`);
    if (F.statSync(n).isDirectory() && se.isSrcSubdir(o, i))
      throw new Error(`Cannot overwrite '${o}' with '${i}'.`);
    return Or(i, n);
  } else
    return F.symlinkSync(i, n);
}
function Or(e, t) {
  return F.unlinkSync(t), F.symlinkSync(e, t);
}
var kr = dr, Wn = {
  copySync: kr
};
const Pr = W.fromPromise, Bn = Je;
function Nr(e) {
  return Bn.access(e).then(() => !0).catch(() => !1);
}
var G = {
  pathExists: Pr(Nr),
  pathExistsSync: Bn.existsSync
};
const L = T, ae = D, Tr = U.mkdirs, _r = G.pathExists, Dr = Rn.utimesMillis, le = ke;
function xr(e, t, n, r) {
  typeof n == "function" && !r ? (r = n, n = {}) : typeof n == "function" && (n = { filter: n }), r = r || function() {
  }, n = n || {}, n.clobber = "clobber" in n ? !!n.clobber : !0, n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber, n.preserveTimestamps && process.arch === "ia32" && console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;

    see https://github.com/jprichardson/node-fs-extra/issues/269`), le.checkPaths(e, t, "copy", (i, o) => {
    if (i) return r(i);
    const { srcStat: u, destStat: c } = o;
    le.checkParentPaths(e, u, t, "copy", (s) => s ? r(s) : n.filter ? Jn(un, c, e, t, n, r) : un(c, e, t, n, r));
  });
}
function un(e, t, n, r, i) {
  const o = ae.dirname(n);
  _r(o, (u, c) => {
    if (u) return i(u);
    if (c) return Ae(e, t, n, r, i);
    Tr(o, (s) => s ? i(s) : Ae(e, t, n, r, i));
  });
}
function Jn(e, t, n, r, i, o) {
  Promise.resolve(i.filter(n, r)).then((u) => u ? e(t, n, r, i, o) : o(), (u) => o(u));
}
function Ae(e, t, n, r, i) {
  return r.filter ? Jn(cn, e, t, n, r, i) : cn(e, t, n, r, i);
}
function cn(e, t, n, r, i) {
  (r.dereference ? L.stat : L.lstat)(t, (u, c) => {
    if (u) return i(u);
    if (c.isDirectory()) return Lr(c, e, t, n, r, i);
    if (c.isFile() || c.isCharacterDevice() || c.isBlockDevice()) return Ir(c, e, t, n, r, i);
    if (c.isSymbolicLink()) return Ar(e, t, n, r, i);
  });
}
function Ir(e, t, n, r, i, o) {
  return t ? jr(e, n, r, i, o) : qn(e, n, r, i, o);
}
function jr(e, t, n, r, i) {
  if (r.overwrite)
    L.unlink(n, (o) => o ? i(o) : qn(e, t, n, r, i));
  else return r.errorOnExist ? i(new Error(`'${n}' already exists`)) : i();
}
function qn(e, t, n, r, i) {
  return typeof L.copyFile == "function" ? L.copyFile(t, n, (o) => o ? i(o) : Un(e, n, r, i)) : Rr(e, t, n, r, i);
}
function Rr(e, t, n, r, i) {
  const o = L.createReadStream(t);
  o.on("error", (u) => i(u)).once("open", () => {
    const u = L.createWriteStream(n, { mode: e.mode });
    u.on("error", (c) => i(c)).on("open", () => o.pipe(u)).once("close", () => Un(e, n, r, i));
  });
}
function Un(e, t, n, r) {
  L.chmod(t, e.mode, (i) => i ? r(i) : n.preserveTimestamps ? Dr(t, e.atime, e.mtime, r) : r());
}
function Lr(e, t, n, r, i, o) {
  return t ? t && !t.isDirectory() ? o(new Error(`Cannot overwrite non-directory '${r}' with directory '${n}'.`)) : Vn(n, r, i, o) : Cr(e, n, r, i, o);
}
function Cr(e, t, n, r, i) {
  L.mkdir(n, (o) => {
    if (o) return i(o);
    Vn(t, n, r, (u) => u ? i(u) : L.chmod(n, e.mode, i));
  });
}
function Vn(e, t, n, r) {
  L.readdir(e, (i, o) => i ? r(i) : Gn(o, e, t, n, r));
}
function Gn(e, t, n, r, i) {
  const o = e.pop();
  return o ? Mr(e, o, t, n, r, i) : i();
}
function Mr(e, t, n, r, i, o) {
  const u = ae.join(n, t), c = ae.join(r, t);
  le.checkPaths(u, c, "copy", (s, m) => {
    if (s) return o(s);
    const { destStat: f } = m;
    Ae(f, u, c, i, (l) => l ? o(l) : Gn(e, n, r, i, o));
  });
}
function Ar(e, t, n, r, i) {
  L.readlink(t, (o, u) => {
    if (o) return i(o);
    if (r.dereference && (u = ae.resolve(process.cwd(), u)), e)
      L.readlink(n, (c, s) => c ? c.code === "EINVAL" || c.code === "UNKNOWN" ? L.symlink(u, n, i) : i(c) : (r.dereference && (s = ae.resolve(process.cwd(), s)), le.isSrcSubdir(u, s) ? i(new Error(`Cannot copy '${u}' to a subdirectory of itself, '${s}'.`)) : e.isDirectory() && le.isSrcSubdir(s, u) ? i(new Error(`Cannot overwrite '${s}' with '${u}'.`)) : Wr(u, n, i)));
    else
      return L.symlink(u, n, i);
  });
}
function Wr(e, t, n) {
  L.unlink(t, (r) => r ? n(r) : L.symlink(e, t, n));
}
var Br = xr;
const Jr = W.fromCallback;
var Yn = {
  copy: Jr(Br)
};
const fn = T, Hn = D, v = Nn, ye = process.platform === "win32";
function Kn(e) {
  [
    "unlink",
    "chmod",
    "stat",
    "lstat",
    "rmdir",
    "readdir"
  ].forEach((n) => {
    e[n] = e[n] || fn[n], n = n + "Sync", e[n] = e[n] || fn[n];
  }), e.maxBusyTries = e.maxBusyTries || 3;
}
function Ye(e, t, n) {
  let r = 0;
  typeof t == "function" && (n = t, t = {}), v(e, "rimraf: missing path"), v.strictEqual(typeof e, "string", "rimraf: path should be a string"), v.strictEqual(typeof n, "function", "rimraf: callback function required"), v(t, "rimraf: invalid options argument provided"), v.strictEqual(typeof t, "object", "rimraf: options should be object"), Kn(t), sn(e, t, function i(o) {
    if (o) {
      if ((o.code === "EBUSY" || o.code === "ENOTEMPTY" || o.code === "EPERM") && r < t.maxBusyTries) {
        r++;
        const u = r * 100;
        return setTimeout(() => sn(e, t, i), u);
      }
      o.code === "ENOENT" && (o = null);
    }
    n(o);
  });
}
function sn(e, t, n) {
  v(e), v(t), v(typeof n == "function"), t.lstat(e, (r, i) => {
    if (r && r.code === "ENOENT")
      return n(null);
    if (r && r.code === "EPERM" && ye)
      return an(e, t, r, n);
    if (i && i.isDirectory())
      return pe(e, t, r, n);
    t.unlink(e, (o) => {
      if (o) {
        if (o.code === "ENOENT")
          return n(null);
        if (o.code === "EPERM")
          return ye ? an(e, t, o, n) : pe(e, t, o, n);
        if (o.code === "EISDIR")
          return pe(e, t, o, n);
      }
      return n(o);
    });
  });
}
function an(e, t, n, r) {
  v(e), v(t), v(typeof r == "function"), n && v(n instanceof Error), t.chmod(e, 438, (i) => {
    i ? r(i.code === "ENOENT" ? null : n) : t.stat(e, (o, u) => {
      o ? r(o.code === "ENOENT" ? null : n) : u.isDirectory() ? pe(e, t, n, r) : t.unlink(e, r);
    });
  });
}
function ln(e, t, n) {
  let r;
  v(e), v(t), n && v(n instanceof Error);
  try {
    t.chmodSync(e, 438);
  } catch (i) {
    if (i.code === "ENOENT")
      return;
    throw n;
  }
  try {
    r = t.statSync(e);
  } catch (i) {
    if (i.code === "ENOENT")
      return;
    throw n;
  }
  r.isDirectory() ? $e(e, t, n) : t.unlinkSync(e);
}
function pe(e, t, n, r) {
  v(e), v(t), n && v(n instanceof Error), v(typeof r == "function"), t.rmdir(e, (i) => {
    i && (i.code === "ENOTEMPTY" || i.code === "EEXIST" || i.code === "EPERM") ? qr(e, t, r) : i && i.code === "ENOTDIR" ? r(n) : r(i);
  });
}
function qr(e, t, n) {
  v(e), v(t), v(typeof n == "function"), t.readdir(e, (r, i) => {
    if (r) return n(r);
    let o = i.length, u;
    if (o === 0) return t.rmdir(e, n);
    i.forEach((c) => {
      Ye(Hn.join(e, c), t, (s) => {
        if (!u) {
          if (s) return n(u = s);
          --o === 0 && t.rmdir(e, n);
        }
      });
    });
  });
}
function Qn(e, t) {
  let n;
  t = t || {}, Kn(t), v(e, "rimraf: missing path"), v.strictEqual(typeof e, "string", "rimraf: path should be a string"), v(t, "rimraf: missing options"), v.strictEqual(typeof t, "object", "rimraf: options should be object");
  try {
    n = t.lstatSync(e);
  } catch (r) {
    if (r.code === "ENOENT")
      return;
    r.code === "EPERM" && ye && ln(e, t, r);
  }
  try {
    n && n.isDirectory() ? $e(e, t, null) : t.unlinkSync(e);
  } catch (r) {
    if (r.code === "ENOENT")
      return;
    if (r.code === "EPERM")
      return ye ? ln(e, t, r) : $e(e, t, r);
    if (r.code !== "EISDIR")
      throw r;
    $e(e, t, r);
  }
}
function $e(e, t, n) {
  v(e), v(t), n && v(n instanceof Error);
  try {
    t.rmdirSync(e);
  } catch (r) {
    if (r.code === "ENOTDIR")
      throw n;
    if (r.code === "ENOTEMPTY" || r.code === "EEXIST" || r.code === "EPERM")
      Ur(e, t);
    else if (r.code !== "ENOENT")
      throw r;
  }
}
function Ur(e, t) {
  if (v(e), v(t), t.readdirSync(e).forEach((n) => Qn(Hn.join(e, n), t)), ye) {
    const n = Date.now();
    do
      try {
        return t.rmdirSync(e, t);
      } catch {
      }
    while (Date.now() - n < 500);
  } else
    return t.rmdirSync(e, t);
}
var Vr = Ye;
Ye.sync = Qn;
const Gr = W.fromCallback, yn = Vr;
var Pe = {
  remove: Gr(yn),
  removeSync: yn.sync
};
const Yr = W.fromCallback, Xn = T, zn = D, Zn = U, bn = Pe, mn = Yr(function(t, n) {
  n = n || function() {
  }, Xn.readdir(t, (r, i) => {
    if (r) return Zn.mkdirs(t, n);
    i = i.map((u) => zn.join(t, u)), o();
    function o() {
      const u = i.pop();
      if (!u) return n();
      bn.remove(u, (c) => {
        if (c) return n(c);
        o();
      });
    }
  });
});
function dn(e) {
  let t;
  try {
    t = Xn.readdirSync(e);
  } catch {
    return Zn.mkdirsSync(e);
  }
  t.forEach((n) => {
    n = zn.join(e, n), bn.removeSync(n);
  });
}
var Hr = {
  emptyDirSync: dn,
  emptydirSync: dn,
  emptyDir: mn,
  emptydir: mn
};
const Kr = W.fromCallback, et = D, re = T, nt = U, Qr = G.pathExists;
function Xr(e, t) {
  function n() {
    re.writeFile(e, "", (r) => {
      if (r) return t(r);
      t();
    });
  }
  re.stat(e, (r, i) => {
    if (!r && i.isFile()) return t();
    const o = et.dirname(e);
    Qr(o, (u, c) => {
      if (u) return t(u);
      if (c) return n();
      nt.mkdirs(o, (s) => {
        if (s) return t(s);
        n();
      });
    });
  });
}
function zr(e) {
  let t;
  try {
    t = re.statSync(e);
  } catch {
  }
  if (t && t.isFile()) return;
  const n = et.dirname(e);
  re.existsSync(n) || nt.mkdirsSync(n), re.writeFileSync(e, "");
}
var Zr = {
  createFile: Kr(Xr),
  createFileSync: zr
};
const br = W.fromCallback, tt = D, X = T, rt = U, hn = G.pathExists;
function ei(e, t, n) {
  function r(i, o) {
    X.link(i, o, (u) => {
      if (u) return n(u);
      n(null);
    });
  }
  hn(t, (i, o) => {
    if (i) return n(i);
    if (o) return n(null);
    X.lstat(e, (u) => {
      if (u)
        return u.message = u.message.replace("lstat", "ensureLink"), n(u);
      const c = tt.dirname(t);
      hn(c, (s, m) => {
        if (s) return n(s);
        if (m) return r(e, t);
        rt.mkdirs(c, (f) => {
          if (f) return n(f);
          r(e, t);
        });
      });
    });
  });
}
function ni(e, t) {
  if (X.existsSync(t)) return;
  try {
    X.lstatSync(e);
  } catch (o) {
    throw o.message = o.message.replace("lstat", "ensureLink"), o;
  }
  const r = tt.dirname(t);
  return X.existsSync(r) || rt.mkdirsSync(r), X.linkSync(e, t);
}
var ti = {
  createLink: br(ei),
  createLinkSync: ni
};
const K = D, ie = T, ri = G.pathExists;
function ii(e, t, n) {
  if (K.isAbsolute(e))
    return ie.lstat(e, (r) => r ? (r.message = r.message.replace("lstat", "ensureSymlink"), n(r)) : n(null, {
      toCwd: e,
      toDst: e
    }));
  {
    const r = K.dirname(t), i = K.join(r, e);
    return ri(i, (o, u) => o ? n(o) : u ? n(null, {
      toCwd: i,
      toDst: e
    }) : ie.lstat(e, (c) => c ? (c.message = c.message.replace("lstat", "ensureSymlink"), n(c)) : n(null, {
      toCwd: e,
      toDst: K.relative(r, e)
    })));
  }
}
function oi(e, t) {
  let n;
  if (K.isAbsolute(e)) {
    if (n = ie.existsSync(e), !n) throw new Error("absolute srcpath does not exist");
    return {
      toCwd: e,
      toDst: e
    };
  } else {
    const r = K.dirname(t), i = K.join(r, e);
    if (n = ie.existsSync(i), n)
      return {
        toCwd: i,
        toDst: e
      };
    if (n = ie.existsSync(e), !n) throw new Error("relative srcpath does not exist");
    return {
      toCwd: e,
      toDst: K.relative(r, e)
    };
  }
}
var ui = {
  symlinkPaths: ii,
  symlinkPathsSync: oi
};
const it = T;
function ci(e, t, n) {
  if (n = typeof t == "function" ? t : n, t = typeof t == "function" ? !1 : t, t) return n(null, t);
  it.lstat(e, (r, i) => {
    if (r) return n(null, "file");
    t = i && i.isDirectory() ? "dir" : "file", n(null, t);
  });
}
function fi(e, t) {
  let n;
  if (t) return t;
  try {
    n = it.lstatSync(e);
  } catch {
    return "file";
  }
  return n && n.isDirectory() ? "dir" : "file";
}
var si = {
  symlinkType: ci,
  symlinkTypeSync: fi
};
const ai = W.fromCallback, ot = D, ee = T, ut = U, li = ut.mkdirs, yi = ut.mkdirsSync, ct = ui, mi = ct.symlinkPaths, di = ct.symlinkPathsSync, ft = si, hi = ft.symlinkType, Si = ft.symlinkTypeSync, Sn = G.pathExists;
function vi(e, t, n, r) {
  r = typeof n == "function" ? n : r, n = typeof n == "function" ? !1 : n, Sn(t, (i, o) => {
    if (i) return r(i);
    if (o) return r(null);
    mi(e, t, (u, c) => {
      if (u) return r(u);
      e = c.toDst, hi(c.toCwd, n, (s, m) => {
        if (s) return r(s);
        const f = ot.dirname(t);
        Sn(f, (l, y) => {
          if (l) return r(l);
          if (y) return ee.symlink(e, t, m, r);
          li(f, (a) => {
            if (a) return r(a);
            ee.symlink(e, t, m, r);
          });
        });
      });
    });
  });
}
function wi(e, t, n) {
  if (ee.existsSync(t)) return;
  const i = di(e, t);
  e = i.toDst, n = Si(i.toCwd, n);
  const o = ot.dirname(t);
  return ee.existsSync(o) || yi(o), ee.symlinkSync(e, t, n);
}
var Ei = {
  createSymlink: ai(vi),
  createSymlinkSync: wi
};
const he = Zr, Se = ti, ve = Ei;
var pi = {
  // file
  createFile: he.createFile,
  createFileSync: he.createFileSync,
  ensureFile: he.createFile,
  ensureFileSync: he.createFileSync,
  // link
  createLink: Se.createLink,
  createLinkSync: Se.createLinkSync,
  ensureLink: Se.createLink,
  ensureLinkSync: Se.createLinkSync,
  // symlink
  createSymlink: ve.createSymlink,
  createSymlinkSync: ve.createSymlinkSync,
  ensureSymlink: ve.createSymlink,
  ensureSymlinkSync: ve.createSymlinkSync
}, ne;
try {
  ne = T;
} catch {
  ne = Be;
}
function $i(e, t, n) {
  n == null && (n = t, t = {}), typeof t == "string" && (t = { encoding: t }), t = t || {};
  var r = t.fs || ne, i = !0;
  "throws" in t && (i = t.throws), r.readFile(e, t, function(o, u) {
    if (o) return n(o);
    u = at(u);
    var c;
    try {
      c = JSON.parse(u, t ? t.reviver : null);
    } catch (s) {
      return i ? (s.message = e + ": " + s.message, n(s)) : n(null, null);
    }
    n(null, c);
  });
}
function gi(e, t) {
  t = t || {}, typeof t == "string" && (t = { encoding: t });
  var n = t.fs || ne, r = !0;
  "throws" in t && (r = t.throws);
  try {
    var i = n.readFileSync(e, t);
    return i = at(i), JSON.parse(i, t.reviver);
  } catch (o) {
    if (r)
      throw o.message = e + ": " + o.message, o;
    return null;
  }
}
function st(e, t) {
  var n, r = `
`;
  typeof t == "object" && t !== null && (t.spaces && (n = t.spaces), t.EOL && (r = t.EOL));
  var i = JSON.stringify(e, t ? t.replacer : null, n);
  return i.replace(/\n/g, r) + r;
}
function Fi(e, t, n, r) {
  r == null && (r = n, n = {}), n = n || {};
  var i = n.fs || ne, o = "";
  try {
    o = st(t, n);
  } catch (u) {
    r && r(u, null);
    return;
  }
  i.writeFile(e, o, n, r);
}
function Oi(e, t, n) {
  n = n || {};
  var r = n.fs || ne, i = st(t, n);
  return r.writeFileSync(e, i, n);
}
function at(e) {
  return Buffer.isBuffer(e) && (e = e.toString("utf8")), e = e.replace(/^\uFEFF/, ""), e;
}
var ki = {
  readFile: $i,
  readFileSync: gi,
  writeFile: Fi,
  writeFileSync: Oi
}, Pi = ki;
const vn = W.fromCallback, we = Pi;
var He = {
  // jsonfile exports
  readJson: vn(we.readFile),
  readJsonSync: we.readFileSync,
  writeJson: vn(we.writeFile),
  writeJsonSync: we.writeFileSync
};
const Ni = D, Ti = U, _i = G.pathExists, wn = He;
function Di(e, t, n, r) {
  typeof n == "function" && (r = n, n = {});
  const i = Ni.dirname(e);
  _i(i, (o, u) => {
    if (o) return r(o);
    if (u) return wn.writeJson(e, t, n, r);
    Ti.mkdirs(i, (c) => {
      if (c) return r(c);
      wn.writeJson(e, t, n, r);
    });
  });
}
var xi = Di;
const Ii = T, ji = D, Ri = U, Li = He;
function Ci(e, t, n) {
  const r = ji.dirname(e);
  Ii.existsSync(r) || Ri.mkdirsSync(r), Li.writeJsonSync(e, t, n);
}
var Mi = Ci;
const Ai = W.fromCallback, A = He;
A.outputJson = Ai(xi);
A.outputJsonSync = Mi;
A.outputJSON = A.outputJson;
A.outputJSONSync = A.outputJsonSync;
A.writeJSON = A.writeJson;
A.writeJSONSync = A.writeJsonSync;
A.readJSON = A.readJson;
A.readJSONSync = A.readJsonSync;
var Wi = A;
const lt = T, Bi = D, Ji = Wn.copySync, yt = Pe.removeSync, qi = U.mkdirpSync, En = ke;
function Ui(e, t, n) {
  n = n || {};
  const r = n.overwrite || n.clobber || !1, { srcStat: i } = En.checkPathsSync(e, t, "move");
  return En.checkParentPathsSync(e, i, t, "move"), qi(Bi.dirname(t)), Vi(e, t, r);
}
function Vi(e, t, n) {
  if (n)
    return yt(t), pn(e, t, n);
  if (lt.existsSync(t)) throw new Error("dest already exists.");
  return pn(e, t, n);
}
function pn(e, t, n) {
  try {
    lt.renameSync(e, t);
  } catch (r) {
    if (r.code !== "EXDEV") throw r;
    return Gi(e, t, n);
  }
}
function Gi(e, t, n) {
  return Ji(e, t, {
    overwrite: n,
    errorOnExist: !0
  }), yt(e);
}
var Yi = Ui, Hi = {
  moveSync: Yi
};
const Ki = T, Qi = D, Xi = Yn.copy, mt = Pe.remove, zi = U.mkdirp, Zi = G.pathExists, $n = ke;
function bi(e, t, n, r) {
  typeof n == "function" && (r = n, n = {});
  const i = n.overwrite || n.clobber || !1;
  $n.checkPaths(e, t, "move", (o, u) => {
    if (o) return r(o);
    const { srcStat: c } = u;
    $n.checkParentPaths(e, c, t, "move", (s) => {
      if (s) return r(s);
      zi(Qi.dirname(t), (m) => m ? r(m) : eo(e, t, i, r));
    });
  });
}
function eo(e, t, n, r) {
  if (n)
    return mt(t, (i) => i ? r(i) : gn(e, t, n, r));
  Zi(t, (i, o) => i ? r(i) : o ? r(new Error("dest already exists.")) : gn(e, t, n, r));
}
function gn(e, t, n, r) {
  Ki.rename(e, t, (i) => i ? i.code !== "EXDEV" ? r(i) : no(e, t, n, r) : r());
}
function no(e, t, n, r) {
  Xi(e, t, {
    overwrite: n,
    errorOnExist: !0
  }, (o) => o ? r(o) : mt(e, r));
}
var to = bi;
const ro = W.fromCallback;
var io = {
  move: ro(to)
};
const oo = W.fromCallback, oe = T, dt = D, ht = U, uo = G.pathExists;
function co(e, t, n, r) {
  typeof n == "function" && (r = n, n = "utf8");
  const i = dt.dirname(e);
  uo(i, (o, u) => {
    if (o) return r(o);
    if (u) return oe.writeFile(e, t, n, r);
    ht.mkdirs(i, (c) => {
      if (c) return r(c);
      oe.writeFile(e, t, n, r);
    });
  });
}
function fo(e, ...t) {
  const n = dt.dirname(e);
  if (oe.existsSync(n))
    return oe.writeFileSync(e, ...t);
  ht.mkdirsSync(n), oe.writeFileSync(e, ...t);
}
var so = {
  outputFile: oo(co),
  outputFileSync: fo
};
(function(e) {
  e.exports = Object.assign(
    {},
    // Export promiseified graceful-fs:
    Je,
    // Export extra methods:
    Wn,
    Yn,
    Hr,
    pi,
    Wi,
    U,
    Hi,
    io,
    so,
    G,
    Pe
  );
  const t = Be;
  Object.getOwnPropertyDescriptor(t, "promises") && Object.defineProperty(e.exports, "promises", {
    get() {
      return t.promises;
    }
  });
})(_n);
var ao = _n.exports;
const lo = /* @__PURE__ */ Tn(ao);
var St = gt, Fn = St.spawn, yo = St.exec, mo = function(e, t, n) {
  if (typeof t == "function" && n === void 0 && (n = t, t = void 0), e = parseInt(e), Number.isNaN(e)) {
    if (n)
      return n(new Error("pid must be a number"));
    throw new Error("pid must be a number");
  }
  var r = {}, i = {};
  switch (r[e] = [], i[e] = 1, process.platform) {
    case "win32":
      yo("taskkill /pid " + e + " /T /F", n);
      break;
    case "darwin":
      We(e, r, i, function(o) {
        return Fn("pgrep", ["-P", o]);
      }, function() {
        On(r, t, n);
      });
      break;
    default:
      We(e, r, i, function(o) {
        return Fn("ps", ["-o", "pid", "--no-headers", "--ppid", o]);
      }, function() {
        On(r, t, n);
      });
      break;
  }
};
function On(e, t, n) {
  var r = {};
  try {
    Object.keys(e).forEach(function(i) {
      e[i].forEach(function(o) {
        r[o] || (kn(o, t), r[o] = 1);
      }), r[i] || (kn(i, t), r[i] = 1);
    });
  } catch (i) {
    if (n)
      return n(i);
    throw i;
  }
  if (n)
    return n();
}
function kn(e, t) {
  try {
    process.kill(parseInt(e, 10), t);
  } catch (n) {
    if (n.code !== "ESRCH") throw n;
  }
}
function We(e, t, n, r, i) {
  var o = r(e), u = "";
  o.stdout.on("data", function(m) {
    var m = m.toString("ascii");
    u += m;
  });
  var c = function(s) {
    if (delete n[e], s != 0) {
      Object.keys(n).length == 0 && i();
      return;
    }
    u.match(/\d+/g).forEach(function(m) {
      m = parseInt(m, 10), t[e].push(m), t[m] = [], n[m] = 1, We(m, t, n, r, i);
    });
  };
  o.on("close", c);
}
const vt = /* @__PURE__ */ Tn(mo), Ke = V.dirname($t(import.meta.url));
process.env.APP_ROOT = V.join(Ke, "..");
const Oe = process.env.VITE_DEV_SERVER_URL, _o = V.join(process.env.APP_ROOT, "dist-electron"), wt = V.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = Oe ? V.join(process.env.APP_ROOT, "public") : wt;
let Q = null, H;
const ho = !!Oe;
async function So() {
  const e = V.join(process.resourcesPath, "..", "lib", "main");
  try {
    if (ho) {
      const t = V.join(Ke, "..", "python", "main.py");
      console.log("Running Python script at (dev mode):", t), Q = Ft("python", [t]);
    } else {
      const t = V.join(e, process.platform === "win32" ? "main.exe" : "main");
      console.log("Running Python executable at:", t), process.platform !== "win32" && await lo.chmod(t, "755"), Q = Ot(t, (n, r, i) => {
        if (n) {
          console.error(`Error: ${n.message}`);
          return;
        }
        if (i) {
          console.error(`Error: ${i}`);
          return;
        }
        console.log(`Output: ${r}`);
      });
    }
  } catch (t) {
    console.error(`Error handling Python executable: ${t.message}`);
  }
}
function Et() {
  H = new Pn({
    icon: V.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: V.join(Ke, "preload.mjs")
    }
  }), H.webContents.on("did-finish-load", () => {
    H == null || H.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), Oe ? H.loadURL(Oe) : H.loadFile(V.join(wt, "index.html"));
}
Z.on("window-all-closed", () => {
  process.platform !== "darwin" && (Z.quit(), H = null);
});
Z.on("activate", () => {
  Pn.getAllWindows().length === 0 && Et();
});
Z.on("before-quit", () => {
  Q && vt(Q.pid, "SIGTERM", (e) => {
    e && console.error(`Error killing Python process: ${e.message}`), Q = null;
  });
});
Z.on("will-quit", (e) => {
  Q && (e.preventDefault(), vt(Q.pid, "SIGTERM", (t) => {
    t && console.error(`Error killing Python process: ${t.message}`), Q = null, Z.quit();
  }));
});
Z.whenReady().then(async () => {
  await So(), Et();
});
export {
  _o as MAIN_DIST,
  wt as RENDERER_DIST,
  Oe as VITE_DEV_SERVER_URL
};
