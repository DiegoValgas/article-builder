/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const N = {}, et = [], Se = () => {
}, Un = () => !1, Zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ns = (e) => e.startsWith("onUpdate:"), k = Object.assign, Ls = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Jr = Object.prototype.hasOwnProperty, j = (e, t) => Jr.call(e, t), P = Array.isArray, tt = (e) => Qt(e) === "[object Map]", Vn = (e) => Qt(e) === "[object Set]", M = (e) => typeof e == "function", G = (e) => typeof e == "string", De = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Kn = (e) => (B(e) || M(e)) && M(e.then) && M(e.catch), Bn = Object.prototype.toString, Qt = (e) => Bn.call(e), zr = (e) => Qt(e).slice(8, -1), Wn = (e) => Qt(e) === "[object Object]", Us = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gt = /* @__PURE__ */ Hs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), kt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((s) => t[s] || (t[s] = e(s)));
}, Yr = /-\w/g, Ve = kt(
  (e) => e.replace(Yr, (t) => t.slice(1).toUpperCase())
), Xr = /\B([A-Z])/g, Be = kt(
  (e) => e.replace(Xr, "-$1").toLowerCase()
), qn = kt((e) => e.charAt(0).toUpperCase() + e.slice(1)), fs = kt(
  (e) => e ? `on${qn(e)}` : ""
), Ue = (e, t) => !Object.is(e, t), Nt = (e, ...t) => {
  for (let s = 0; s < e.length; s++)
    e[s](...t);
}, Gn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, vs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let an;
const es = () => an || (an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vs(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = G(n) ? ei(n) : Vs(n);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (G(e) || B(e))
    return e;
}
const Zr = /;(?![^(]*\))/g, Qr = /:([^]+)/, kr = /\/\*[^]*?\*\//g;
function ei(e) {
  const t = {};
  return e.replace(kr, "").split(Zr).forEach((s) => {
    if (s) {
      const n = s.split(Qr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ot(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (P(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ot(e[s]);
      n && (t += n + " ");
    }
  else if (B(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const ti = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", si = /* @__PURE__ */ Hs(ti);
function Jn(e) {
  return !!e || e === "";
}
const zn = (e) => !!(e && e.__v_isRef === !0), Ss = (e) => G(e) ? e : e == null ? "" : P(e) || B(e) && (e.toString === Bn || !M(e.toString)) ? zn(e) ? Ss(e.value) : JSON.stringify(e, Yn, 2) : String(e), Yn = (e, t) => zn(t) ? Yn(e, t.value) : tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], i) => (s[us(n, i) + " =>"] = r, s),
    {}
  )
} : Vn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => us(s))
} : De(t) ? us(t) : B(t) && !P(t) && !Wn(t) ? String(t) : t, us = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    De(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ce;
class ni {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ce, !t && ce && (this.index = (ce.scopes || (ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].pause();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, s;
      if (this.scopes)
        for (t = 0, s = this.scopes.length; t < s; t++)
          this.scopes[t].resume();
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const s = ce;
      try {
        return ce = this, t();
      } finally {
        ce = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ce, ce = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ce = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ri() {
  return ce;
}
let V;
const as = /* @__PURE__ */ new WeakSet();
class Xn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ce && ce.active && ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, as.has(this) && (as.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Qn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, dn(this), kn(this);
    const t = V, s = he;
    V = this, he = !0;
    try {
      return this.fn();
    } finally {
      er(this), V = t, he = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ws(t);
      this.deps = this.depsTail = void 0, dn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? as.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ws(this) && this.run();
  }
  get dirty() {
    return ws(this);
  }
}
let Zn = 0, _t, mt;
function Qn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = mt, mt = e;
    return;
  }
  e.next = _t, _t = e;
}
function Ks() {
  Zn++;
}
function Bs() {
  if (--Zn > 0)
    return;
  if (mt) {
    let t = mt;
    for (mt = void 0; t; ) {
      const s = t.next;
      t.next = void 0, t.flags &= -9, t = s;
    }
  }
  let e;
  for (; _t; ) {
    let t = _t;
    for (_t = void 0; t; ) {
      const s = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = s;
    }
  }
  if (e) throw e;
}
function kn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function er(e) {
  let t, s = e.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Ws(n), ii(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  e.deps = t, e.depsTail = s;
}
function ws(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (tr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function tr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === St) || (e.globalVersion = St, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ws(e))))
    return;
  e.flags |= 2;
  const t = e.dep, s = V, n = he;
  V = e, he = !0;
  try {
    kn(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ue(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    V = s, he = n, er(e), e.flags &= -3;
  }
}
function Ws(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Ws(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function ii(e) {
  const { prevDep: t, nextDep: s } = e;
  t && (t.nextDep = s, e.prevDep = void 0), s && (s.prevDep = t, e.nextDep = void 0);
}
let he = !0;
const sr = [];
function Ie() {
  sr.push(he), he = !1;
}
function Re() {
  const e = sr.pop();
  he = e === void 0 ? !0 : e;
}
function dn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const s = V;
    V = void 0;
    try {
      t();
    } finally {
      V = s;
    }
  }
}
let St = 0;
class oi {
  constructor(t, s) {
    this.sub = t, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!V || !he || V === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== V)
      s = this.activeLink = new oi(V, this), V.deps ? (s.prevDep = V.depsTail, V.depsTail.nextDep = s, V.depsTail = s) : V.deps = V.depsTail = s, nr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = V.depsTail, s.nextDep = void 0, V.depsTail.nextDep = s, V.depsTail = s, V.deps === s && (V.deps = n);
    }
    return s;
  }
  trigger(t) {
    this.version++, St++, this.notify(t);
  }
  notify(t) {
    Ks();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Bs();
    }
  }
}
function nr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        nr(n);
    }
    const s = e.dep.subs;
    s !== e && (e.prevSub = s, s && (s.nextSub = e)), e.dep.subs = e;
  }
}
const Ts = /* @__PURE__ */ new WeakMap(), Xe = Symbol(
  ""
), Cs = Symbol(
  ""
), wt = Symbol(
  ""
);
function X(e, t, s) {
  if (he && V) {
    let n = Ts.get(e);
    n || Ts.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new qs()), r.map = n, r.key = s), r.track();
  }
}
function Oe(e, t, s, n, r, i) {
  const o = Ts.get(e);
  if (!o) {
    St++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (Ks(), t === "clear")
    o.forEach(l);
  else {
    const f = P(e), h = f && Us(s);
    if (f && s === "length") {
      const a = Number(n);
      o.forEach((p, w) => {
        (w === "length" || w === wt || !De(w) && w >= a) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), h && l(o.get(wt)), t) {
        case "add":
          f ? h && l(o.get("length")) : (l(o.get(Xe)), tt(e) && l(o.get(Cs)));
          break;
        case "delete":
          f || (l(o.get(Xe)), tt(e) && l(o.get(Cs)));
          break;
        case "set":
          tt(e) && l(o.get(Xe));
          break;
      }
  }
  Bs();
}
function Ze(e) {
  const t = $(e);
  return t === e ? t : (X(t, "iterate", wt), de(e) ? t : t.map(Y));
}
function ts(e) {
  return X(e = $(e), "iterate", wt), e;
}
const li = {
  __proto__: null,
  [Symbol.iterator]() {
    return ds(this, Symbol.iterator, Y);
  },
  concat(...e) {
    return Ze(this).concat(
      ...e.map((t) => P(t) ? Ze(t) : t)
    );
  },
  entries() {
    return ds(this, "entries", (e) => (e[1] = Y(e[1]), e));
  },
  every(e, t) {
    return Ce(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ce(this, "filter", e, t, (s) => s.map(Y), arguments);
  },
  find(e, t) {
    return Ce(this, "find", e, t, Y, arguments);
  },
  findIndex(e, t) {
    return Ce(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ce(this, "findLast", e, t, Y, arguments);
  },
  findLastIndex(e, t) {
    return Ce(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ce(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return hs(this, "includes", e);
  },
  indexOf(...e) {
    return hs(this, "indexOf", e);
  },
  join(e) {
    return Ze(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return hs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ce(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return at(this, "pop");
  },
  push(...e) {
    return at(this, "push", e);
  },
  reduce(e, ...t) {
    return hn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return hn(this, "reduceRight", e, t);
  },
  shift() {
    return at(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ce(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return at(this, "splice", e);
  },
  toReversed() {
    return Ze(this).toReversed();
  },
  toSorted(e) {
    return Ze(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ze(this).toSpliced(...e);
  },
  unshift(...e) {
    return at(this, "unshift", e);
  },
  values() {
    return ds(this, "values", Y);
  }
};
function ds(e, t, s) {
  const n = ts(e), r = n[t]();
  return n !== e && !de(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = s(i.value)), i;
  }), r;
}
const ci = Array.prototype;
function Ce(e, t, s, n, r, i) {
  const o = ts(e), l = o !== e && !de(e), f = o[t];
  if (f !== ci[t]) {
    const p = f.apply(e, i);
    return l ? Y(p) : p;
  }
  let h = s;
  o !== e && (l ? h = function(p, w) {
    return s.call(this, Y(p), w, e);
  } : s.length > 2 && (h = function(p, w) {
    return s.call(this, p, w, e);
  }));
  const a = f.call(o, h, n);
  return l && r ? r(a) : a;
}
function hn(e, t, s, n) {
  const r = ts(e);
  let i = s;
  return r !== e && (de(e) ? s.length > 3 && (i = function(o, l, f) {
    return s.call(this, o, l, f, e);
  }) : i = function(o, l, f) {
    return s.call(this, o, Y(l), f, e);
  }), r[t](i, ...n);
}
function hs(e, t, s) {
  const n = $(e);
  X(n, "iterate", wt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Ys(s[0]) ? (s[0] = $(s[0]), n[t](...s)) : r;
}
function at(e, t, s = []) {
  Ie(), Ks();
  const n = $(e)[t].apply(e, s);
  return Bs(), Re(), n;
}
const fi = /* @__PURE__ */ Hs("__proto__,__v_isRef,__isVue"), rr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
);
function ui(e) {
  De(e) || (e = String(e));
  const t = $(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class ir {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    if (s === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? xi : fr : i ? cr : lr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = P(t);
    if (!r) {
      let f;
      if (o && (f = li[s]))
        return f;
      if (s === "hasOwnProperty")
        return ui;
    }
    const l = Reflect.get(
      t,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Q(t) ? t : n
    );
    if ((De(s) ? rr.has(s) : fi(s)) || (r || X(t, "get", s), i))
      return l;
    if (Q(l)) {
      const f = o && Us(s) ? l : l.value;
      return r && B(f) ? Os(f) : f;
    }
    return B(l) ? r ? Os(l) : Js(l) : l;
  }
}
class or extends ir {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    if (!this._isShallow) {
      const f = Ke(i);
      if (!de(n) && !Ke(n) && (i = $(i), n = $(n)), !P(t) && Q(i) && !Q(n))
        return f || (i.value = n), !0;
    }
    const o = P(t) && Us(s) ? Number(s) < t.length : j(t, s), l = Reflect.set(
      t,
      s,
      n,
      Q(t) ? t : r
    );
    return t === $(r) && (o ? Ue(n, i) && Oe(t, "set", s, n) : Oe(t, "add", s, n)), l;
  }
  deleteProperty(t, s) {
    const n = j(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Oe(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!De(s) || !rr.has(s)) && X(t, "has", s), n;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      P(t) ? "length" : Xe
    ), Reflect.ownKeys(t);
  }
}
class ai extends ir {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const di = /* @__PURE__ */ new or(), hi = /* @__PURE__ */ new ai(), pi = /* @__PURE__ */ new or(!0);
const Es = (e) => e, $t = (e) => Reflect.getPrototypeOf(e);
function gi(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, i = $(r), o = tt(i), l = e === "entries" || e === Symbol.iterator && o, f = e === "keys" && o, h = r[e](...n), a = s ? Es : t ? Kt : Y;
    return !t && X(
      i,
      "iterate",
      f ? Cs : Xe
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = h.next();
        return w ? { value: p, done: w } : {
          value: l ? [a(p[0]), a(p[1])] : a(p),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function jt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _i(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = $(i), l = $(r);
      e || (Ue(r, l) && X(o, "get", r), X(o, "get", l));
      const { has: f } = $t(o), h = t ? Es : e ? Kt : Y;
      if (f.call(o, r))
        return h(i.get(r));
      if (f.call(o, l))
        return h(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && X($(r), "iterate", Xe), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = $(i), l = $(r);
      return e || (Ue(r, l) && X(o, "has", r), X(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, f = $(l), h = t ? Es : e ? Kt : Y;
      return !e && X(f, "iterate", Xe), l.forEach((a, p) => r.call(i, h(a), h(p), o));
    }
  };
  return k(
    s,
    e ? {
      add: jt("add"),
      set: jt("set"),
      delete: jt("delete"),
      clear: jt("clear")
    } : {
      add(r) {
        !t && !de(r) && !Ke(r) && (r = $(r));
        const i = $(this);
        return $t(i).has.call(i, r) || (i.add(r), Oe(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !de(i) && !Ke(i) && (i = $(i));
        const o = $(this), { has: l, get: f } = $t(o);
        let h = l.call(o, r);
        h || (r = $(r), h = l.call(o, r));
        const a = f.call(o, r);
        return o.set(r, i), h ? Ue(i, a) && Oe(o, "set", r, i) : Oe(o, "add", r, i), this;
      },
      delete(r) {
        const i = $(this), { has: o, get: l } = $t(i);
        let f = o.call(i, r);
        f || (r = $(r), f = o.call(i, r)), l && l.call(i, r);
        const h = i.delete(r);
        return f && Oe(i, "delete", r, void 0), h;
      },
      clear() {
        const r = $(this), i = r.size !== 0, o = r.clear();
        return i && Oe(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = gi(r, e, t);
  }), s;
}
function Gs(e, t) {
  const s = _i(e, t);
  return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    j(s, r) && r in n ? s : n,
    r,
    i
  );
}
const mi = {
  get: /* @__PURE__ */ Gs(!1, !1)
}, bi = {
  get: /* @__PURE__ */ Gs(!1, !0)
}, yi = {
  get: /* @__PURE__ */ Gs(!0, !1)
};
const lr = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap();
function vi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Si(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vi(zr(e));
}
function Js(e) {
  return Ke(e) ? e : zs(
    e,
    !1,
    di,
    mi,
    lr
  );
}
function wi(e) {
  return zs(
    e,
    !1,
    pi,
    bi,
    cr
  );
}
function Os(e) {
  return zs(
    e,
    !0,
    hi,
    yi,
    fr
  );
}
function zs(e, t, s, n, r) {
  if (!B(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Si(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, l), l;
}
function st(e) {
  return Ke(e) ? st(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ke(e) {
  return !!(e && e.__v_isReadonly);
}
function de(e) {
  return !!(e && e.__v_isShallow);
}
function Ys(e) {
  return e ? !!e.__v_raw : !1;
}
function $(e) {
  const t = e && e.__v_raw;
  return t ? $(t) : e;
}
function Ti(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && Gn(e, "__v_skip", !0), e;
}
const Y = (e) => B(e) ? Js(e) : e, Kt = (e) => B(e) ? Os(e) : e;
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Al(e) {
  return Ci(e, !1);
}
function Ci(e, t) {
  return Q(e) ? e : new Ei(e, t);
}
class Ei {
  constructor(t, s) {
    this.dep = new qs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? t : $(t), this._value = s ? t : Y(t), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const s = this._rawValue, n = this.__v_isShallow || de(t) || Ke(t);
    t = n ? t : $(t), Ue(t, s) && (this._rawValue = t, this._value = n ? t : Y(t), this.dep.trigger());
  }
}
function As(e) {
  return Q(e) ? e.value : e;
}
const Oi = {
  get: (e, t, s) => t === "__v_raw" ? e : As(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return Q(r) && !Q(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function ur(e) {
  return st(e) ? e : new Proxy(e, Oi);
}
class Ai {
  constructor(t, s, n) {
    this.fn = t, this.setter = s, this._value = void 0, this.dep = new qs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = St - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return Qn(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return tr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Pi(e, t, s = !1) {
  let n, r;
  return M(e) ? n = e : (n = e.get, r = e.set), new Ai(n, r, s);
}
const Ht = {}, Bt = /* @__PURE__ */ new WeakMap();
let Ye;
function Mi(e, t = !1, s = Ye) {
  if (s) {
    let n = Bt.get(s);
    n || Bt.set(s, n = []), n.push(e);
  }
}
function Ii(e, t, s = N) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: f } = s, h = (O) => r ? O : de(O) || r === !1 || r === 0 ? Ae(O, 1) : Ae(O);
  let a, p, w, T, I = !1, F = !1;
  if (Q(e) ? (p = () => e.value, I = de(e)) : st(e) ? (p = () => h(e), I = !0) : P(e) ? (F = !0, I = e.some((O) => st(O) || de(O)), p = () => e.map((O) => {
    if (Q(O))
      return O.value;
    if (st(O))
      return h(O);
    if (M(O))
      return f ? f(O, 2) : O();
  })) : M(e) ? t ? p = f ? () => f(e, 2) : e : p = () => {
    if (w) {
      Ie();
      try {
        w();
      } finally {
        Re();
      }
    }
    const O = Ye;
    Ye = a;
    try {
      return f ? f(e, 3, [T]) : e(T);
    } finally {
      Ye = O;
    }
  } : p = Se, t && r) {
    const O = p, J = r === !0 ? 1 / 0 : r;
    p = () => Ae(O(), J);
  }
  const ee = ri(), D = () => {
    a.stop(), ee && ee.active && Ls(ee.effects, a);
  };
  if (i && t) {
    const O = t;
    t = (...J) => {
      O(...J), D();
    };
  }
  let K = F ? new Array(e.length).fill(Ht) : Ht;
  const q = (O) => {
    if (!(!(a.flags & 1) || !a.dirty && !O))
      if (t) {
        const J = a.run();
        if (r || I || (F ? J.some((je, pe) => Ue(je, K[pe])) : Ue(J, K))) {
          w && w();
          const je = Ye;
          Ye = a;
          try {
            const pe = [
              J,
              // pass undefined as the old value when it's changed for the first time
              K === Ht ? void 0 : F && K[0] === Ht ? [] : K,
              T
            ];
            K = J, f ? f(t, 3, pe) : (
              // @ts-expect-error
              t(...pe)
            );
          } finally {
            Ye = je;
          }
        }
      } else
        a.run();
  };
  return l && l(q), a = new Xn(p), a.scheduler = o ? () => o(q, !1) : q, T = (O) => Mi(O, !1, a), w = a.onStop = () => {
    const O = Bt.get(a);
    if (O) {
      if (f)
        f(O, 4);
      else
        for (const J of O) J();
      Bt.delete(a);
    }
  }, t ? n ? q(!0) : K = a.run() : o ? o(q.bind(null, !0), !0) : a.run(), D.pause = a.pause.bind(a), D.resume = a.resume.bind(a), D.stop = D, D;
}
function Ae(e, t = 1 / 0, s) {
  if (t <= 0 || !B(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(e) || 0) >= t))
    return e;
  if (s.set(e, t), t--, Q(e))
    Ae(e.value, t, s);
  else if (P(e))
    for (let n = 0; n < e.length; n++)
      Ae(e[n], t, s);
  else if (Vn(e) || tt(e))
    e.forEach((n) => {
      Ae(n, t, s);
    });
  else if (Wn(e)) {
    for (const n in e)
      Ae(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ae(e[n], t, s);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function At(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    ss(r, t, s);
  }
}
function Te(e, t, s, n) {
  if (M(e)) {
    const r = At(e, t, s, n);
    return r && Kn(r) && r.catch((i) => {
      ss(i, t, s);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Te(e[i], t, s, n));
    return r;
  }
}
function ss(e, t, s, n = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || N;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ie(), At(i, null, 10, [
        e,
        f,
        h
      ]), Re();
      return;
    }
  }
  Ri(e, s, r, n, o);
}
function Ri(e, t, s, n = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ne = [];
let xe = -1;
const nt = [];
let Ne = null, Qe = 0;
const ar = /* @__PURE__ */ Promise.resolve();
let Wt = null;
function Fi(e) {
  const t = Wt || ar;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Di(e) {
  let t = xe + 1, s = ne.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = ne[n], i = Tt(r);
    i < e || i === e && r.flags & 2 ? t = n + 1 : s = n;
  }
  return t;
}
function Xs(e) {
  if (!(e.flags & 1)) {
    const t = Tt(e), s = ne[ne.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Tt(s) ? ne.push(e) : ne.splice(Di(t), 0, e), e.flags |= 1, dr();
  }
}
function dr() {
  Wt || (Wt = ar.then(pr));
}
function $i(e) {
  P(e) ? nt.push(...e) : Ne && e.id === -1 ? Ne.splice(Qe + 1, 0, e) : e.flags & 1 || (nt.push(e), e.flags |= 1), dr();
}
function pn(e, t, s = xe + 1) {
  for (; s < ne.length; s++) {
    const n = ne[s];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ne.splice(s, 1), s--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function hr(e) {
  if (nt.length) {
    const t = [...new Set(nt)].sort(
      (s, n) => Tt(s) - Tt(n)
    );
    if (nt.length = 0, Ne) {
      Ne.push(...t);
      return;
    }
    for (Ne = t, Qe = 0; Qe < Ne.length; Qe++) {
      const s = Ne[Qe];
      s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), s.flags &= -2;
    }
    Ne = null, Qe = 0;
  }
}
const Tt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pr(e) {
  try {
    for (xe = 0; xe < ne.length; xe++) {
      const t = ne[xe];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), At(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xe < ne.length; xe++) {
      const t = ne[xe];
      t && (t.flags &= -2);
    }
    xe = -1, ne.length = 0, hr(), Wt = null, (ne.length || nt.length) && pr();
  }
}
let Z = null, gr = null;
function qt(e) {
  const t = Z;
  return Z = e, gr = e && e.type.__scopeId || null, t;
}
function Gt(e, t = Z, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && Tn(-1);
    const i = qt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      qt(i), n._d && Tn(1);
    }
    return o;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Pl(e, t) {
  if (Z === null)
    return e;
  const s = os(Z), n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, f = N] = t[r];
    i && (M(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Ae(o), n.push({
      dir: i,
      instance: s,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function Je(e, t, s, n) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let f = l.dir[n];
    f && (Ie(), Te(f, s, 8, [
      e.el,
      l,
      e,
      t
    ]), Re());
  }
}
const ji = Symbol("_vte"), Hi = (e) => e.__isTeleport, Ni = Symbol("_leaveCb");
function Zs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Li(e, t) {
  return M(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    k({ name: e.name }, t, { setup: e })
  ) : e;
}
function _r(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Jt = /* @__PURE__ */ new WeakMap();
function bt(e, t, s, n, r = !1) {
  if (P(e)) {
    e.forEach(
      (I, F) => bt(
        I,
        t && (P(t) ? t[F] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (rt(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && bt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? os(n.component) : n.el, o = r ? null : i, { i: l, r: f } = e, h = t && t.r, a = l.refs === N ? l.refs = {} : l.refs, p = l.setupState, w = $(p), T = p === N ? Un : (I) => j(w, I);
  if (h != null && h !== f) {
    if (gn(t), G(h))
      a[h] = null, T(h) && (p[h] = null);
    else if (Q(h)) {
      h.value = null;
      const I = t;
      I.k && (a[I.k] = null);
    }
  }
  if (M(f))
    At(f, l, 12, [o, a]);
  else {
    const I = G(f), F = Q(f);
    if (I || F) {
      const ee = () => {
        if (e.f) {
          const D = I ? T(f) ? p[f] : a[f] : f.value;
          if (r)
            P(D) && Ls(D, i);
          else if (P(D))
            D.includes(i) || D.push(i);
          else if (I)
            a[f] = [i], T(f) && (p[f] = a[f]);
          else {
            const K = [i];
            f.value = K, e.k && (a[e.k] = K);
          }
        } else I ? (a[f] = o, T(f) && (p[f] = o)) : F && (f.value = o, e.k && (a[e.k] = o));
      };
      if (o) {
        const D = () => {
          ee(), Jt.delete(e);
        };
        D.id = -1, Jt.set(e, D), ue(D, s);
      } else
        gn(e), ee();
    }
  }
}
function gn(e) {
  const t = Jt.get(e);
  t && (t.flags |= 8, Jt.delete(e));
}
es().requestIdleCallback;
es().cancelIdleCallback;
const rt = (e) => !!e.type.__asyncLoader, mr = (e) => e.type.__isKeepAlive;
function Ui(e, t) {
  br(e, "a", t);
}
function Vi(e, t) {
  br(e, "da", t);
}
function br(e, t, s = ie) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (ns(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      mr(r.parent.vnode) && Ki(n, t, s, r), r = r.parent;
  }
}
function Ki(e, t, s, n) {
  const r = ns(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  yr(() => {
    Ls(n[t], r);
  }, s);
}
function ns(e, t, s = ie, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ie();
      const l = Pt(s), f = Te(t, s, e, o);
      return l(), Re(), f;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const $e = (e) => (t, s = ie) => {
  (!Et || e === "sp") && ns(e, (...n) => t(...n), s);
}, Bi = $e("bm"), Wi = $e("m"), qi = $e(
  "bu"
), Gi = $e("u"), Ji = $e(
  "bum"
), yr = $e("um"), zi = $e(
  "sp"
), Yi = $e("rtg"), Xi = $e("rtc");
function Zi(e, t = ie) {
  ns("ec", e, t);
}
const Qi = Symbol.for("v-ndc");
function Ps(e, t, s, n) {
  let r;
  const i = s, o = P(e);
  if (o || G(e)) {
    const l = o && st(e);
    let f = !1, h = !1;
    l && (f = !de(e), h = Ke(e), e = ts(e)), r = new Array(e.length);
    for (let a = 0, p = e.length; a < p; a++)
      r[a] = t(
        f ? h ? Kt(Y(e[a])) : Y(e[a]) : e[a],
        a,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (B(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, f) => t(l, f, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let f = 0, h = l.length; f < h; f++) {
        const a = l[f];
        r[f] = t(e[a], a, f, i);
      }
    }
  else
    r = [];
  return r;
}
function Qs(e, t, s = {}, n, r) {
  if (Z.ce || Z.parent && rt(Z.parent) && Z.parent.ce) {
    const h = Object.keys(s).length > 0;
    return z(), Me(
      re,
      null,
      [we("slot", s, n)],
      h ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), z();
  const o = i && xr(i(s)), l = s.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, f = Me(
    re,
    {
      key: (l && !De(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && n ? "_fb" : "")
    },
    o || [],
    o && e._ === 1 ? 64 : -2
  );
  return f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), i && i._c && (i._d = !0), f;
}
function xr(e) {
  return e.some((t) => tn(t) ? !(t.type === Fe || t.type === re && !xr(t.children)) : !0) ? e : null;
}
const Ms = (e) => e ? Ur(e) ? os(e) : Ms(e.parent) : null, yt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ k(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ms(e.parent),
    $root: (e) => Ms(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fi.bind(e.proxy)),
    $watch: (e) => vo.bind(e)
  })
), ps = (e, t) => e !== N && !e.__isScriptSetup && j(e, t), ki = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: f } = e;
    let h;
    if (t[0] !== "$") {
      const T = o[t];
      if (T !== void 0)
        switch (T) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return i[t];
        }
      else {
        if (ps(n, t))
          return o[t] = 1, n[t];
        if (r !== N && j(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && j(h, t)
        )
          return o[t] = 3, i[t];
        if (s !== N && j(s, t))
          return o[t] = 4, s[t];
        Is && (o[t] = 0);
      }
    }
    const a = yt[t];
    let p, w;
    if (a)
      return t === "$attrs" && X(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (s !== N && j(s, t))
      return o[t] = 4, s[t];
    if (
      // global properties
      w = f.config.globalProperties, j(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: i } = e;
    return ps(r, t) ? (r[t] = s, !0) : n !== N && j(n, t) ? (n[t] = s, !0) : j(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: i, type: o }
  }, l) {
    let f, h;
    return !!(s[l] || e !== N && l[0] !== "$" && j(e, l) || ps(t, l) || (f = i[0]) && j(f, l) || j(n, l) || j(yt, l) || j(r.config.globalProperties, l) || (h = o.__cssModules) && h[l]);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : j(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function _n(e) {
  return P(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let Is = !0;
function eo(e) {
  const t = Sr(e), s = e.proxy, n = e.ctx;
  Is = !1, t.beforeCreate && mn(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: w,
    beforeUpdate: T,
    updated: I,
    activated: F,
    deactivated: ee,
    beforeDestroy: D,
    beforeUnmount: K,
    destroyed: q,
    unmounted: O,
    render: J,
    renderTracked: je,
    renderTriggered: pe,
    errorCaptured: He,
    serverPrefetch: Mt,
    // public API
    expose: We,
    inheritAttrs: lt,
    // assets
    components: It,
    directives: Rt,
    filters: ls
  } = t;
  if (h && to(h, n, null), o)
    for (const W in o) {
      const L = o[W];
      M(L) && (n[W] = L.bind(s));
    }
  if (r) {
    const W = r.call(s, s);
    B(W) && (e.data = Js(W));
  }
  if (Is = !0, i)
    for (const W in i) {
      const L = i[W], qe = M(L) ? L.bind(s, s) : M(L.get) ? L.get.bind(s, s) : Se, Ft = !M(L) && M(L.set) ? L.set.bind(s) : Se, Ge = Bo({
        get: qe,
        set: Ft
      });
      Object.defineProperty(n, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Ge.value,
        set: (ge) => Ge.value = ge
      });
    }
  if (l)
    for (const W in l)
      vr(l[W], n, s, W);
  if (f) {
    const W = M(f) ? f.call(s) : f;
    Reflect.ownKeys(W).forEach((L) => {
      lo(L, W[L]);
    });
  }
  a && mn(a, e, "c");
  function te(W, L) {
    P(L) ? L.forEach((qe) => W(qe.bind(s))) : L && W(L.bind(s));
  }
  if (te(Bi, p), te(Wi, w), te(qi, T), te(Gi, I), te(Ui, F), te(Vi, ee), te(Zi, He), te(Xi, je), te(Yi, pe), te(Ji, K), te(yr, O), te(zi, Mt), P(We))
    if (We.length) {
      const W = e.exposed || (e.exposed = {});
      We.forEach((L) => {
        Object.defineProperty(W, L, {
          get: () => s[L],
          set: (qe) => s[L] = qe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Se && (e.render = J), lt != null && (e.inheritAttrs = lt), It && (e.components = It), Rt && (e.directives = Rt), Mt && _r(e);
}
function to(e, t, s = Se) {
  P(e) && (e = Rs(e));
  for (const n in e) {
    const r = e[n];
    let i;
    B(r) ? "default" in r ? i = xt(
      r.from || n,
      r.default,
      !0
    ) : i = xt(r.from || n) : i = xt(r), Q(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[n] = i;
  }
}
function mn(e, t, s) {
  Te(
    P(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function vr(e, t, s, n) {
  let r = n.includes(".") ? $r(s, n) : () => s[n];
  if (G(e)) {
    const i = t[e];
    M(i) && _s(r, i);
  } else if (M(e))
    _s(r, e.bind(s));
  else if (B(e))
    if (P(e))
      e.forEach((i) => vr(i, t, s, n));
    else {
      const i = M(e.handler) ? e.handler.bind(s) : t[e.handler];
      M(i) && _s(r, i, e);
    }
}
function Sr(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let f;
  return l ? f = l : !r.length && !s && !n ? f = t : (f = {}, r.length && r.forEach(
    (h) => zt(f, h, o, !0)
  ), zt(f, t, o)), B(t) && i.set(t, f), f;
}
function zt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  i && zt(e, i, s, !0), r && r.forEach(
    (o) => zt(e, o, s, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = so[o] || s && s[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const so = {
  data: bn,
  props: yn,
  emits: yn,
  // objects
  methods: pt,
  computed: pt,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: pt,
  directives: pt,
  // watch
  watch: ro,
  // provide / inject
  provide: bn,
  inject: no
};
function bn(e, t) {
  return t ? e ? function() {
    return k(
      M(e) ? e.call(this, this) : e,
      M(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function no(e, t) {
  return pt(Rs(e), Rs(t));
}
function Rs(e) {
  if (P(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pt(e, t) {
  return e ? k(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yn(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : k(
    /* @__PURE__ */ Object.create(null),
    _n(e),
    _n(t ?? {})
  ) : t;
}
function ro(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = k(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = se(e[n], t[n]);
  return s;
}
function wr() {
  return {
    app: null,
    config: {
      isNativeTag: Un,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let io = 0;
function oo(e, t) {
  return function(n, r = null) {
    M(n) || (n = k({}, n)), r != null && !B(r) && (r = null);
    const i = wr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = i.app = {
      _uid: io++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Wo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && M(a.install) ? (o.add(a), a.install(h, ...p)) : M(a) && (o.add(a), a(h, ...p))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, p) {
        return p ? (i.components[a] = p, h) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, h) : i.directives[a];
      },
      mount(a, p, w) {
        if (!f) {
          const T = h._ceVNode || we(n, r);
          return T.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(T, a, w), f = !0, h._container = a, a.__vue_app__ = h, os(T.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        f && (Te(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, h;
      },
      runWithContext(a) {
        const p = it;
        it = h;
        try {
          return a();
        } finally {
          it = p;
        }
      }
    };
    return h;
  };
}
let it = null;
function lo(e, t) {
  if (ie) {
    let s = ie.provides;
    const n = ie.parent && ie.parent.provides;
    n === s && (s = ie.provides = Object.create(n)), s[e] = t;
  }
}
function xt(e, t, s = !1) {
  const n = Ho();
  if (n || it) {
    let r = it ? it._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && M(t) ? t.call(n && n.proxy) : t;
  }
}
const Tr = {}, Cr = () => Object.create(Tr), Er = (e) => Object.getPrototypeOf(e) === Tr;
function co(e, t, s, n = !1) {
  const r = {}, i = Cr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Or(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? e.props = n ? r : wi(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function fo(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = $(r), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let w = a[p];
        if (rs(e.emitsOptions, w))
          continue;
        const T = t[w];
        if (f)
          if (j(i, w))
            T !== i[w] && (i[w] = T, h = !0);
          else {
            const I = Ve(w);
            r[I] = Fs(
              f,
              l,
              I,
              T,
              e,
              !1
            );
          }
        else
          T !== i[w] && (i[w] = T, h = !0);
      }
    }
  } else {
    Or(e, t, r, i) && (h = !0);
    let a;
    for (const p in l)
      (!t || // for camelCase
      !j(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Be(p)) === p || !j(t, a))) && (f ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[a] !== void 0) && (r[p] = Fs(
        f,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!t || !j(t, p)) && (delete i[p], h = !0);
  }
  h && Oe(e.attrs, "set", "");
}
function Or(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let f in t) {
      if (gt(f))
        continue;
      const h = t[f];
      let a;
      r && j(r, a = Ve(f)) ? !i || !i.includes(a) ? s[a] = h : (l || (l = {}))[a] = h : rs(e.emitsOptions, f) || (!(f in n) || h !== n[f]) && (n[f] = h, o = !0);
    }
  if (i) {
    const f = $(s), h = l || N;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      s[p] = Fs(
        r,
        f,
        p,
        h[p],
        e,
        !j(h, p)
      );
    }
  }
  return o;
}
function Fs(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = j(o, "default");
    if (l && n === void 0) {
      const f = o.default;
      if (o.type !== Function && !o.skipFactory && M(f)) {
        const { propsDefaults: h } = r;
        if (s in h)
          n = h[s];
        else {
          const a = Pt(r);
          n = h[s] = f.call(
            null,
            t
          ), a();
        }
      } else
        n = f;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Be(s)) && (n = !0));
  }
  return n;
}
const uo = /* @__PURE__ */ new WeakMap();
function Ar(e, t, s = !1) {
  const n = s ? uo : t.propsCache, r = n.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let f = !1;
  if (!M(e)) {
    const a = (p) => {
      f = !0;
      const [w, T] = Ar(p, t, !0);
      k(o, w), T && l.push(...T);
    };
    !s && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !f)
    return B(e) && n.set(e, et), et;
  if (P(i))
    for (let a = 0; a < i.length; a++) {
      const p = Ve(i[a]);
      xn(p) && (o[p] = N);
    }
  else if (i)
    for (const a in i) {
      const p = Ve(a);
      if (xn(p)) {
        const w = i[a], T = o[p] = P(w) || M(w) ? { type: w } : k({}, w), I = T.type;
        let F = !1, ee = !0;
        if (P(I))
          for (let D = 0; D < I.length; ++D) {
            const K = I[D], q = M(K) && K.name;
            if (q === "Boolean") {
              F = !0;
              break;
            } else q === "String" && (ee = !1);
          }
        else
          F = M(I) && I.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = F, T[
          1
          /* shouldCastTrue */
        ] = ee, (F || j(T, "default")) && l.push(p);
      }
    }
  const h = [o, l];
  return B(e) && n.set(e, h), h;
}
function xn(e) {
  return e[0] !== "$" && !gt(e);
}
const ks = (e) => e === "_" || e === "_ctx" || e === "$stable", en = (e) => P(e) ? e.map(ve) : [ve(e)], ao = (e, t, s) => {
  if (t._n)
    return t;
  const n = Gt((...r) => en(t(...r)), s);
  return n._c = !1, n;
}, Pr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (ks(r)) continue;
    const i = e[r];
    if (M(i))
      t[r] = ao(r, i, n);
    else if (i != null) {
      const o = en(i);
      t[r] = () => o;
    }
  }
}, Mr = (e, t) => {
  const s = en(t);
  e.slots.default = () => s;
}, Ir = (e, t, s) => {
  for (const n in t)
    (s || !ks(n)) && (e[n] = t[n]);
}, ho = (e, t, s) => {
  const n = e.slots = Cr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ir(n, t, s), s && Gn(n, "_", r, !0)) : Pr(t, n);
  } else t && Mr(e, t);
}, po = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let i = !0, o = N;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? s && l === 1 ? i = !1 : Ir(r, t, s) : (i = !t.$stable, Pr(t, r)), o = t;
  } else t && (Mr(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !ks(l) && o[l] == null && delete r[l];
}, ue = Po;
function go(e) {
  return _o(e);
}
function _o(e, t) {
  const s = es();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: a,
    parentNode: p,
    nextSibling: w,
    setScopeId: T = Se,
    insertStaticContent: I
  } = e, F = (c, u, d, m = null, g = null, _ = null, v = void 0, x = null, y = !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !dt(c, u) && (m = Dt(c), ge(c, g, _, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: b, ref: E, shapeFlag: S } = u;
    switch (b) {
      case is:
        ee(c, u, d, m);
        break;
      case Fe:
        D(c, u, d, m);
        break;
      case ms:
        c == null && K(u, d, m, v);
        break;
      case re:
        It(
          c,
          u,
          d,
          m,
          g,
          _,
          v,
          x,
          y
        );
        break;
      default:
        S & 1 ? J(
          c,
          u,
          d,
          m,
          g,
          _,
          v,
          x,
          y
        ) : S & 6 ? Rt(
          c,
          u,
          d,
          m,
          g,
          _,
          v,
          x,
          y
        ) : (S & 64 || S & 128) && b.process(
          c,
          u,
          d,
          m,
          g,
          _,
          v,
          x,
          y,
          ft
        );
    }
    E != null && g ? bt(E, c && c.ref, _, u || c, !u) : E == null && c && c.ref != null && bt(c.ref, null, _, c, !0);
  }, ee = (c, u, d, m) => {
    if (c == null)
      n(
        u.el = l(u.children),
        d,
        m
      );
    else {
      const g = u.el = c.el;
      u.children !== c.children && h(g, u.children);
    }
  }, D = (c, u, d, m) => {
    c == null ? n(
      u.el = f(u.children || ""),
      d,
      m
    ) : u.el = c.el;
  }, K = (c, u, d, m) => {
    [c.el, c.anchor] = I(
      c.children,
      u,
      d,
      m,
      c.el,
      c.anchor
    );
  }, q = ({ el: c, anchor: u }, d, m) => {
    let g;
    for (; c && c !== u; )
      g = w(c), n(c, d, m), c = g;
    n(u, d, m);
  }, O = ({ el: c, anchor: u }) => {
    let d;
    for (; c && c !== u; )
      d = w(c), r(c), c = d;
    r(u);
  }, J = (c, u, d, m, g, _, v, x, y) => {
    u.type === "svg" ? v = "svg" : u.type === "math" && (v = "mathml"), c == null ? je(
      u,
      d,
      m,
      g,
      _,
      v,
      x,
      y
    ) : Mt(
      c,
      u,
      g,
      _,
      v,
      x,
      y
    );
  }, je = (c, u, d, m, g, _, v, x) => {
    let y, b;
    const { props: E, shapeFlag: S, transition: C, dirs: A } = c;
    if (y = c.el = o(
      c.type,
      _,
      E && E.is,
      E
    ), S & 8 ? a(y, c.children) : S & 16 && He(
      c.children,
      y,
      null,
      m,
      g,
      gs(c, _),
      v,
      x
    ), A && Je(c, null, m, "created"), pe(y, c, c.scopeId, v, m), E) {
      for (const U in E)
        U !== "value" && !gt(U) && i(y, U, null, E[U], _, m);
      "value" in E && i(y, "value", null, E.value, _), (b = E.onVnodeBeforeMount) && ye(b, m, c);
    }
    A && Je(c, null, m, "beforeMount");
    const R = mo(g, C);
    R && C.beforeEnter(y), n(y, u, d), ((b = E && E.onVnodeMounted) || R || A) && ue(() => {
      b && ye(b, m, c), R && C.enter(y), A && Je(c, null, m, "mounted");
    }, g);
  }, pe = (c, u, d, m, g) => {
    if (d && T(c, d), m)
      for (let _ = 0; _ < m.length; _++)
        T(c, m[_]);
    if (g) {
      let _ = g.subTree;
      if (u === _ || Hr(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const v = g.vnode;
        pe(
          c,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, He = (c, u, d, m, g, _, v, x, y = 0) => {
    for (let b = y; b < c.length; b++) {
      const E = c[b] = x ? Le(c[b]) : ve(c[b]);
      F(
        null,
        E,
        u,
        d,
        m,
        g,
        _,
        v,
        x
      );
    }
  }, Mt = (c, u, d, m, g, _, v) => {
    const x = u.el = c.el;
    let { patchFlag: y, dynamicChildren: b, dirs: E } = u;
    y |= c.patchFlag & 16;
    const S = c.props || N, C = u.props || N;
    let A;
    if (d && ze(d, !1), (A = C.onVnodeBeforeUpdate) && ye(A, d, u, c), E && Je(u, c, d, "beforeUpdate"), d && ze(d, !0), (S.innerHTML && C.innerHTML == null || S.textContent && C.textContent == null) && a(x, ""), b ? We(
      c.dynamicChildren,
      b,
      x,
      d,
      m,
      gs(u, g),
      _
    ) : v || L(
      c,
      u,
      x,
      null,
      d,
      m,
      gs(u, g),
      _,
      !1
    ), y > 0) {
      if (y & 16)
        lt(x, S, C, d, g);
      else if (y & 2 && S.class !== C.class && i(x, "class", null, C.class, g), y & 4 && i(x, "style", S.style, C.style, g), y & 8) {
        const R = u.dynamicProps;
        for (let U = 0; U < R.length; U++) {
          const H = R[U], oe = S[H], le = C[H];
          (le !== oe || H === "value") && i(x, H, oe, le, g, d);
        }
      }
      y & 1 && c.children !== u.children && a(x, u.children);
    } else !v && b == null && lt(x, S, C, d, g);
    ((A = C.onVnodeUpdated) || E) && ue(() => {
      A && ye(A, d, u, c), E && Je(u, c, d, "updated");
    }, m);
  }, We = (c, u, d, m, g, _, v) => {
    for (let x = 0; x < u.length; x++) {
      const y = c[x], b = u[x], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !dt(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? p(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      F(
        y,
        b,
        E,
        null,
        m,
        g,
        _,
        v,
        !0
      );
    }
  }, lt = (c, u, d, m, g) => {
    if (u !== d) {
      if (u !== N)
        for (const _ in u)
          !gt(_) && !(_ in d) && i(
            c,
            _,
            u[_],
            null,
            g,
            m
          );
      for (const _ in d) {
        if (gt(_)) continue;
        const v = d[_], x = u[_];
        v !== x && _ !== "value" && i(c, _, x, v, g, m);
      }
      "value" in d && i(c, "value", u.value, d.value, g);
    }
  }, It = (c, u, d, m, g, _, v, x, y) => {
    const b = u.el = c ? c.el : l(""), E = u.anchor = c ? c.anchor : l("");
    let { patchFlag: S, dynamicChildren: C, slotScopeIds: A } = u;
    A && (x = x ? x.concat(A) : A), c == null ? (n(b, d, m), n(E, d, m), He(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      d,
      E,
      g,
      _,
      v,
      x,
      y
    )) : S > 0 && S & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (We(
      c.dynamicChildren,
      C,
      d,
      g,
      _,
      v,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || g && u === g.subTree) && Rr(
      c,
      u,
      !0
      /* shallow */
    )) : L(
      c,
      u,
      d,
      E,
      g,
      _,
      v,
      x,
      y
    );
  }, Rt = (c, u, d, m, g, _, v, x, y) => {
    u.slotScopeIds = x, c == null ? u.shapeFlag & 512 ? g.ctx.activate(
      u,
      d,
      m,
      v,
      y
    ) : ls(
      u,
      d,
      m,
      g,
      _,
      v,
      y
    ) : rn(c, u, y);
  }, ls = (c, u, d, m, g, _, v) => {
    const x = c.component = jo(
      c,
      m,
      g
    );
    if (mr(c) && (x.ctx.renderer = ft), No(x, !1, v), x.asyncDep) {
      if (g && g.registerDep(x, te, v), !c.el) {
        const y = x.subTree = we(Fe);
        D(null, y, u, d), c.placeholder = y.el;
      }
    } else
      te(
        x,
        c,
        u,
        d,
        g,
        _,
        v
      );
  }, rn = (c, u, d) => {
    const m = u.component = c.component;
    if (Oo(c, u, d))
      if (m.asyncDep && !m.asyncResolved) {
        W(m, u, d);
        return;
      } else
        m.next = u, m.update();
    else
      u.el = c.el, m.vnode = u;
  }, te = (c, u, d, m, g, _, v) => {
    const x = () => {
      if (c.isMounted) {
        let { next: S, bu: C, u: A, parent: R, vnode: U } = c;
        {
          const me = Fr(c);
          if (me) {
            S && (S.el = U.el, W(c, S, v)), me.asyncDep.then(() => {
              c.isUnmounted || x();
            });
            return;
          }
        }
        let H = S, oe;
        ze(c, !1), S ? (S.el = U.el, W(c, S, v)) : S = U, C && Nt(C), (oe = S.props && S.props.onVnodeBeforeUpdate) && ye(oe, R, S, U), ze(c, !0);
        const le = Sn(c), _e = c.subTree;
        c.subTree = le, F(
          _e,
          le,
          // parent may have changed if it's in a teleport
          p(_e.el),
          // anchor may have changed if it's in a fragment
          Dt(_e),
          c,
          g,
          _
        ), S.el = le.el, H === null && Ao(c, le.el), A && ue(A, g), (oe = S.props && S.props.onVnodeUpdated) && ue(
          () => ye(oe, R, S, U),
          g
        );
      } else {
        let S;
        const { el: C, props: A } = u, { bm: R, m: U, parent: H, root: oe, type: le } = c, _e = rt(u);
        ze(c, !1), R && Nt(R), !_e && (S = A && A.onVnodeBeforeMount) && ye(S, H, u), ze(c, !0);
        {
          oe.ce && // @ts-expect-error _def is private
          oe.ce._def.shadowRoot !== !1 && oe.ce._injectChildStyle(le);
          const me = c.subTree = Sn(c);
          F(
            null,
            me,
            d,
            m,
            c,
            g,
            _
          ), u.el = me.el;
        }
        if (U && ue(U, g), !_e && (S = A && A.onVnodeMounted)) {
          const me = u;
          ue(
            () => ye(S, H, me),
            g
          );
        }
        (u.shapeFlag & 256 || H && rt(H.vnode) && H.vnode.shapeFlag & 256) && c.a && ue(c.a, g), c.isMounted = !0, u = d = m = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Xn(x);
    c.scope.off();
    const b = c.update = y.run.bind(y), E = c.job = y.runIfDirty.bind(y);
    E.i = c, E.id = c.uid, y.scheduler = () => Xs(E), ze(c, !0), b();
  }, W = (c, u, d) => {
    u.component = c;
    const m = c.vnode.props;
    c.vnode = u, c.next = null, fo(c, u.props, m, d), po(c, u.children, d), Ie(), pn(c), Re();
  }, L = (c, u, d, m, g, _, v, x, y = !1) => {
    const b = c && c.children, E = c ? c.shapeFlag : 0, S = u.children, { patchFlag: C, shapeFlag: A } = u;
    if (C > 0) {
      if (C & 128) {
        Ft(
          b,
          S,
          d,
          m,
          g,
          _,
          v,
          x,
          y
        );
        return;
      } else if (C & 256) {
        qe(
          b,
          S,
          d,
          m,
          g,
          _,
          v,
          x,
          y
        );
        return;
      }
    }
    A & 8 ? (E & 16 && ct(b, g, _), S !== b && a(d, S)) : E & 16 ? A & 16 ? Ft(
      b,
      S,
      d,
      m,
      g,
      _,
      v,
      x,
      y
    ) : ct(b, g, _, !0) : (E & 8 && a(d, ""), A & 16 && He(
      S,
      d,
      m,
      g,
      _,
      v,
      x,
      y
    ));
  }, qe = (c, u, d, m, g, _, v, x, y) => {
    c = c || et, u = u || et;
    const b = c.length, E = u.length, S = Math.min(b, E);
    let C;
    for (C = 0; C < S; C++) {
      const A = u[C] = y ? Le(u[C]) : ve(u[C]);
      F(
        c[C],
        A,
        d,
        null,
        g,
        _,
        v,
        x,
        y
      );
    }
    b > E ? ct(
      c,
      g,
      _,
      !0,
      !1,
      S
    ) : He(
      u,
      d,
      m,
      g,
      _,
      v,
      x,
      y,
      S
    );
  }, Ft = (c, u, d, m, g, _, v, x, y) => {
    let b = 0;
    const E = u.length;
    let S = c.length - 1, C = E - 1;
    for (; b <= S && b <= C; ) {
      const A = c[b], R = u[b] = y ? Le(u[b]) : ve(u[b]);
      if (dt(A, R))
        F(
          A,
          R,
          d,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= S && b <= C; ) {
      const A = c[S], R = u[C] = y ? Le(u[C]) : ve(u[C]);
      if (dt(A, R))
        F(
          A,
          R,
          d,
          null,
          g,
          _,
          v,
          x,
          y
        );
      else
        break;
      S--, C--;
    }
    if (b > S) {
      if (b <= C) {
        const A = C + 1, R = A < E ? u[A].el : m;
        for (; b <= C; )
          F(
            null,
            u[b] = y ? Le(u[b]) : ve(u[b]),
            d,
            R,
            g,
            _,
            v,
            x,
            y
          ), b++;
      }
    } else if (b > C)
      for (; b <= S; )
        ge(c[b], g, _, !0), b++;
    else {
      const A = b, R = b, U = /* @__PURE__ */ new Map();
      for (b = R; b <= C; b++) {
        const fe = u[b] = y ? Le(u[b]) : ve(u[b]);
        fe.key != null && U.set(fe.key, b);
      }
      let H, oe = 0;
      const le = C - R + 1;
      let _e = !1, me = 0;
      const ut = new Array(le);
      for (b = 0; b < le; b++) ut[b] = 0;
      for (b = A; b <= S; b++) {
        const fe = c[b];
        if (oe >= le) {
          ge(fe, g, _, !0);
          continue;
        }
        let be;
        if (fe.key != null)
          be = U.get(fe.key);
        else
          for (H = R; H <= C; H++)
            if (ut[H - R] === 0 && dt(fe, u[H])) {
              be = H;
              break;
            }
        be === void 0 ? ge(fe, g, _, !0) : (ut[be - R] = b + 1, be >= me ? me = be : _e = !0, F(
          fe,
          u[be],
          d,
          null,
          g,
          _,
          v,
          x,
          y
        ), oe++);
      }
      const cn = _e ? bo(ut) : et;
      for (H = cn.length - 1, b = le - 1; b >= 0; b--) {
        const fe = R + b, be = u[fe], fn = u[fe + 1], un = fe + 1 < E ? (
          // #13559, fallback to el placeholder for unresolved async component
          fn.el || fn.placeholder
        ) : m;
        ut[b] === 0 ? F(
          null,
          be,
          d,
          un,
          g,
          _,
          v,
          x,
          y
        ) : _e && (H < 0 || b !== cn[H] ? Ge(be, d, un, 2) : H--);
      }
    }
  }, Ge = (c, u, d, m, g = null) => {
    const { el: _, type: v, transition: x, children: y, shapeFlag: b } = c;
    if (b & 6) {
      Ge(c.component.subTree, u, d, m);
      return;
    }
    if (b & 128) {
      c.suspense.move(u, d, m);
      return;
    }
    if (b & 64) {
      v.move(c, u, d, ft);
      return;
    }
    if (v === re) {
      n(_, u, d);
      for (let S = 0; S < y.length; S++)
        Ge(y[S], u, d, m);
      n(c.anchor, u, d);
      return;
    }
    if (v === ms) {
      q(c, u, d);
      return;
    }
    if (m !== 2 && b & 1 && x)
      if (m === 0)
        x.beforeEnter(_), n(_, u, d), ue(() => x.enter(_), g);
      else {
        const { leave: S, delayLeave: C, afterLeave: A } = x, R = () => {
          c.ctx.isUnmounted ? r(_) : n(_, u, d);
        }, U = () => {
          _._isLeaving && _[Ni](
            !0
            /* cancelled */
          ), S(_, () => {
            R(), A && A();
          });
        };
        C ? C(_, R, U) : U();
      }
    else
      n(_, u, d);
  }, ge = (c, u, d, m = !1, g = !1) => {
    const {
      type: _,
      props: v,
      ref: x,
      children: y,
      dynamicChildren: b,
      shapeFlag: E,
      patchFlag: S,
      dirs: C,
      cacheIndex: A
    } = c;
    if (S === -2 && (g = !1), x != null && (Ie(), bt(x, null, d, c, !0), Re()), A != null && (u.renderCache[A] = void 0), E & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const R = E & 1 && C, U = !rt(c);
    let H;
    if (U && (H = v && v.onVnodeBeforeUnmount) && ye(H, u, c), E & 6)
      Gr(c.component, d, m);
    else {
      if (E & 128) {
        c.suspense.unmount(d, m);
        return;
      }
      R && Je(c, null, u, "beforeUnmount"), E & 64 ? c.type.remove(
        c,
        u,
        d,
        ft,
        m
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== re || S > 0 && S & 64) ? ct(
        b,
        u,
        d,
        !1,
        !0
      ) : (_ === re && S & 384 || !g && E & 16) && ct(y, u, d), m && on(c);
    }
    (U && (H = v && v.onVnodeUnmounted) || R) && ue(() => {
      H && ye(H, u, c), R && Je(c, null, u, "unmounted");
    }, d);
  }, on = (c) => {
    const { type: u, el: d, anchor: m, transition: g } = c;
    if (u === re) {
      qr(d, m);
      return;
    }
    if (u === ms) {
      O(c);
      return;
    }
    const _ = () => {
      r(d), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: x } = g, y = () => v(d, _);
      x ? x(c.el, _, y) : y();
    } else
      _();
  }, qr = (c, u) => {
    let d;
    for (; c !== u; )
      d = w(c), r(c), c = d;
    r(u);
  }, Gr = (c, u, d) => {
    const { bum: m, scope: g, job: _, subTree: v, um: x, m: y, a: b } = c;
    vn(y), vn(b), m && Nt(m), g.stop(), _ && (_.flags |= 8, ge(v, c, u, d)), x && ue(x, u), ue(() => {
      c.isUnmounted = !0;
    }, u);
  }, ct = (c, u, d, m = !1, g = !1, _ = 0) => {
    for (let v = _; v < c.length; v++)
      ge(c[v], u, d, m, g);
  }, Dt = (c) => {
    if (c.shapeFlag & 6)
      return Dt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = w(c.anchor || c.el), d = u && u[ji];
    return d ? w(d) : u;
  };
  let cs = !1;
  const ln = (c, u, d) => {
    c == null ? u._vnode && ge(u._vnode, null, null, !0) : F(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      d
    ), u._vnode = c, cs || (cs = !0, pn(), hr(), cs = !1);
  }, ft = {
    p: F,
    um: ge,
    m: Ge,
    r: on,
    mt: ls,
    mc: He,
    pc: L,
    pbc: We,
    n: Dt,
    o: e
  };
  return {
    render: ln,
    hydrate: void 0,
    createApp: oo(ln)
  };
}
function gs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function ze({ effect: e, job: t }, s) {
  s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mo(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Rr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (P(n) && P(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Le(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Rr(o, l)), l.type === is && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === Fe && !l.el && (l.el = o.el);
    }
}
function bo(e) {
  const t = e.slice(), s = [0];
  let n, r, i, o, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const h = e[n];
    if (h !== 0) {
      if (r = s[s.length - 1], e[r] < h) {
        t[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, e[s[l]] < h ? i = l + 1 : o = l;
      h < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = t[o];
  return s;
}
function Fr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fr(t);
}
function vn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const yo = Symbol.for("v-scx"), xo = () => xt(yo);
function _s(e, t, s) {
  return Dr(e, t, s);
}
function Dr(e, t, s = N) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = k({}, s), f = t && n || !t && i !== "post";
  let h;
  if (Et) {
    if (i === "sync") {
      const T = xo();
      h = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!f) {
      const T = () => {
      };
      return T.stop = Se, T.resume = Se, T.pause = Se, T;
    }
  }
  const a = ie;
  l.call = (T, I, F) => Te(T, a, I, F);
  let p = !1;
  i === "post" ? l.scheduler = (T) => {
    ue(T, a && a.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (T, I) => {
    I ? T() : Xs(T);
  }), l.augmentJob = (T) => {
    t && (T.flags |= 4), p && (T.flags |= 2, a && (T.id = a.uid, T.i = a));
  };
  const w = Ii(e, t, l);
  return Et && (h ? h.push(w) : f && w()), w;
}
function vo(e, t, s) {
  const n = this.proxy, r = G(e) ? e.includes(".") ? $r(n, e) : () => n[e] : e.bind(n, n);
  let i;
  M(t) ? i = t : (i = t.handler, s = t);
  const o = Pt(this), l = Dr(r, i.bind(n), s);
  return o(), l;
}
function $r(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
const So = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Be(t)}Modifiers`];
function wo(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || N;
  let r = s;
  const i = t.startsWith("update:"), o = i && So(n, t.slice(7));
  o && (o.trim && (r = s.map((a) => G(a) ? a.trim() : a)), o.number && (r = s.map(vs)));
  let l, f = n[l = fs(t)] || // also try camelCase event handler (#2249)
  n[l = fs(Ve(t))];
  !f && i && (f = n[l = fs(Be(t))]), f && Te(
    f,
    e,
    6,
    r
  );
  const h = n[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Te(
      h,
      e,
      6,
      r
    );
  }
}
const To = /* @__PURE__ */ new WeakMap();
function jr(e, t, s = !1) {
  const n = s ? To : t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!M(e)) {
    const f = (h) => {
      const a = jr(h, t, !0);
      a && (l = !0, k(o, a));
    };
    !s && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !i && !l ? (B(e) && n.set(e, null), null) : (P(i) ? i.forEach((f) => o[f] = null) : k(o, i), B(e) && n.set(e, o), o);
}
function rs(e, t) {
  return !e || !Zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, Be(t)) || j(e, t));
}
function Sn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: f,
    render: h,
    renderCache: a,
    props: p,
    data: w,
    setupState: T,
    ctx: I,
    inheritAttrs: F
  } = e, ee = qt(e);
  let D, K;
  try {
    if (s.shapeFlag & 4) {
      const O = r || n, J = O;
      D = ve(
        h.call(
          J,
          O,
          a,
          p,
          T,
          w,
          I
        )
      ), K = l;
    } else {
      const O = t;
      D = ve(
        O.length > 1 ? O(
          p,
          { attrs: l, slots: o, emit: f }
        ) : O(
          p,
          null
        )
      ), K = t.props ? l : Co(l);
    }
  } catch (O) {
    vt.length = 0, ss(O, e, 1), D = we(Fe);
  }
  let q = D;
  if (K && F !== !1) {
    const O = Object.keys(K), { shapeFlag: J } = q;
    O.length && J & 7 && (i && O.some(Ns) && (K = Eo(
      K,
      i
    )), q = ot(q, K, !1, !0));
  }
  return s.dirs && (q = ot(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(s.dirs) : s.dirs), s.transition && Zs(q, s.transition), D = q, qt(ee), D;
}
const Co = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Zt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Eo = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ns(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Oo(e, t, s) {
  const { props: n, children: r, component: i } = e, { props: o, children: l, patchFlag: f } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? wn(n, o, h) : !!o;
    if (f & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (o[w] !== n[w] && !rs(h, w))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? wn(n, o, h) : !0 : !!o;
  return !1;
}
function wn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !rs(s, i))
      return !0;
  }
  return !1;
}
function Ao({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Hr = (e) => e.__isSuspense;
function Po(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : $i(e);
}
const re = Symbol.for("v-fgt"), is = Symbol.for("v-txt"), Fe = Symbol.for("v-cmt"), ms = Symbol.for("v-stc"), vt = [];
let ae = null;
function z(e = !1) {
  vt.push(ae = e ? null : []);
}
function Mo() {
  vt.pop(), ae = vt[vt.length - 1] || null;
}
let Ct = 1;
function Tn(e, t = !1) {
  Ct += e, e < 0 && ae && t && (ae.hasOnce = !0);
}
function Nr(e) {
  return e.dynamicChildren = Ct > 0 ? ae || et : null, Mo(), Ct > 0 && ae && ae.push(e), e;
}
function Pe(e, t, s, n, r, i) {
  return Nr(
    sn(
      e,
      t,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function Me(e, t, s, n, r) {
  return Nr(
    we(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function dt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Lr = ({ key: e }) => e ?? null, Lt = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || Q(e) || M(e) ? { i: Z, r: e, k: t, f: !!s } : e : null);
function sn(e, t = null, s = null, n = 0, r = null, i = e === re ? 0 : 1, o = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Lr(t),
    ref: t && Lt(t),
    scopeId: gr,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Z
  };
  return l ? (nn(f, s), i & 128 && e.normalize(f)) : s && (f.shapeFlag |= G(s) ? 8 : 16), Ct > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ae.push(f), f;
}
const we = Io;
function Io(e, t = null, s = null, n = 0, r = null, i = !1) {
  if ((!e || e === Qi) && (e = Fe), tn(e)) {
    const l = ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && nn(l, s), Ct > 0 && !i && ae && (l.shapeFlag & 6 ? ae[ae.indexOf(e)] = l : ae.push(l)), l.patchFlag = -2, l;
  }
  if (Ko(e) && (e = e.__vccOpts), t) {
    t = Ro(t);
    let { class: l, style: f } = t;
    l && !G(l) && (t.class = Ot(l)), B(f) && (Ys(f) && !P(f) && (f = k({}, f)), t.style = Vs(f));
  }
  const o = G(e) ? 1 : Hr(e) ? 128 : Hi(e) ? 64 : B(e) ? 4 : M(e) ? 2 : 0;
  return sn(
    e,
    t,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Ro(e) {
  return e ? Ys(e) || Er(e) ? k({}, e) : e : null;
}
function ot(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: f } = e, h = t ? Fo(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Lr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? P(i) ? i.concat(Lt(t)) : [i, Lt(t)] : Lt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== re ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ot(e.ssContent),
    ssFallback: e.ssFallback && ot(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && Zs(
    a,
    f.clone(a)
  ), a;
}
function Ds(e = " ", t = 0) {
  return we(is, null, e, t);
}
function Ut(e = "", t = !1) {
  return t ? (z(), Me(Fe, null, e)) : we(Fe, null, e);
}
function ve(e) {
  return e == null || typeof e == "boolean" ? we(Fe) : P(e) ? we(
    re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : tn(e) ? Le(e) : we(is, null, String(e));
}
function Le(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e);
}
function nn(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (P(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), nn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !Er(t) ? t._ctx = Z : r === 3 && Z && (Z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else M(t) ? (t = { default: t, _ctx: Z }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Ds(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Fo(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Ot([t.class, n.class]));
      else if (r === "style")
        t.style = Vs([t.style, n.style]);
      else if (Zt(r)) {
        const i = t[r], o = n[r];
        o && i !== o && !(P(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function ye(e, t, s, n = null) {
  Te(e, t, 7, [
    s,
    n
  ]);
}
const Do = wr();
let $o = 0;
function jo(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Do, i = {
    uid: $o++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ni(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ar(n, r),
    emitsOptions: jr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: N,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: N,
    data: N,
    props: N,
    attrs: N,
    slots: N,
    refs: N,
    setupState: N,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = wo.bind(null, i), e.ce && e.ce(i), i;
}
let ie = null;
const Ho = () => ie || Z;
let Yt, $s;
{
  const e = es(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Yt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ie = s
  ), $s = t(
    "__VUE_SSR_SETTERS__",
    (s) => Et = s
  );
}
const Pt = (e) => {
  const t = ie;
  return Yt(e), e.scope.on(), () => {
    e.scope.off(), Yt(t);
  };
}, Cn = () => {
  ie && ie.scope.off(), Yt(null);
};
function Ur(e) {
  return e.vnode.shapeFlag & 4;
}
let Et = !1;
function No(e, t = !1, s = !1) {
  t && $s(t);
  const { props: n, children: r } = e.vnode, i = Ur(e);
  co(e, n, i, t), ho(e, r, s || t);
  const o = i ? Lo(e, t) : void 0;
  return t && $s(!1), o;
}
function Lo(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ki);
  const { setup: n } = s;
  if (n) {
    Ie();
    const r = e.setupContext = n.length > 1 ? Vo(e) : null, i = Pt(e), o = At(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Kn(o);
    if (Re(), i(), (l || e.sp) && !rt(e) && _r(e), l) {
      if (o.then(Cn, Cn), t)
        return o.then((f) => {
          En(e, f);
        }).catch((f) => {
          ss(f, e, 0);
        });
      e.asyncDep = o;
    } else
      En(e, o);
  } else
    Vr(e);
}
function En(e, t, s) {
  M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = ur(t)), Vr(e);
}
function Vr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Se);
  {
    const r = Pt(e);
    Ie();
    try {
      eo(e);
    } finally {
      Re(), r();
    }
  }
}
const Uo = {
  get(e, t) {
    return X(e, "get", ""), e[t];
  }
};
function Vo(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Uo),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function os(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ur(Ti(e.exposed)), {
    get(t, s) {
      if (s in t)
        return t[s];
      if (s in yt)
        return yt[s](e);
    },
    has(t, s) {
      return s in t || s in yt;
    }
  })) : e.proxy;
}
function Ko(e) {
  return M(e) && "__vccOpts" in e;
}
const Bo = (e, t) => Pi(e, t, Et), Wo = "3.5.22";
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let js;
const On = typeof window < "u" && window.trustedTypes;
if (On)
  try {
    js = /* @__PURE__ */ On.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Kr = js ? (e) => js.createHTML(e) : (e) => e, qo = "http://www.w3.org/2000/svg", Go = "http://www.w3.org/1998/Math/MathML", Ee = typeof document < "u" ? document : null, An = Ee && /* @__PURE__ */ Ee.createElement("template"), Jo = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Ee.createElementNS(qo, e) : t === "mathml" ? Ee.createElementNS(Go, e) : s ? Ee.createElement(e, { is: s }) : Ee.createElement(e);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Ee.createTextNode(e),
  createComment: (e) => Ee.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ee.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, i) {
    const o = s ? s.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      An.innerHTML = Kr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = An.content;
      if (n === "svg" || n === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, zo = Symbol("_vtc");
function Yo(e, t, s) {
  const n = e[zo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Xt = Symbol("_vod"), Br = Symbol("_vsh"), Ml = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: s }) {
    e[Xt] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : ht(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), ht(e, !0), n.enter(e)) : n.leave(e, () => {
      ht(e, !1);
    }) : ht(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ht(e, t);
  }
};
function ht(e, t) {
  e.style.display = t ? e[Xt] : "none", e[Br] = !t;
}
const Xo = Symbol(""), Zo = /(?:^|;)\s*display\s*:/;
function Qo(e, t, s) {
  const n = e.style, r = G(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (G(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Vt(n, l, "");
        }
      else
        for (const o in t)
          s[o] == null && Vt(n, o, "");
    for (const o in s)
      o === "display" && (i = !0), Vt(n, o, s[o]);
  } else if (r) {
    if (t !== s) {
      const o = n[Xo];
      o && (s += ";" + o), n.cssText = s, i = Zo.test(s);
    }
  } else t && e.removeAttribute("style");
  Xt in e && (e[Xt] = i ? n.display : "", e[Br] && (n.display = "none"));
}
const Pn = /\s*!important$/;
function Vt(e, t, s) {
  if (P(s))
    s.forEach((n) => Vt(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = ko(e, t);
    Pn.test(s) ? e.setProperty(
      Be(n),
      s.replace(Pn, ""),
      "important"
    ) : e[n] = s;
  }
}
const Mn = ["Webkit", "Moz", "ms"], bs = {};
function ko(e, t) {
  const s = bs[t];
  if (s)
    return s;
  let n = Ve(t);
  if (n !== "filter" && n in e)
    return bs[t] = n;
  n = qn(n);
  for (let r = 0; r < Mn.length; r++) {
    const i = Mn[r] + n;
    if (i in e)
      return bs[t] = i;
  }
  return t;
}
const In = "http://www.w3.org/1999/xlink";
function Rn(e, t, s, n, r, i = si(t)) {
  n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(In, t.slice(6, t.length)) : e.setAttributeNS(In, t, s) : s == null || i && !Jn(s) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : De(s) ? String(s) : s
  );
}
function Fn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Kr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, f = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== f || !("_value" in e)) && (e.value = f), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean" ? s = Jn(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function ke(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function el(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Dn = Symbol("_vei");
function tl(e, t, s, n, r = null) {
  const i = e[Dn] || (e[Dn] = {}), o = i[t];
  if (n && o)
    o.value = n;
  else {
    const [l, f] = sl(t);
    if (n) {
      const h = i[t] = il(
        n,
        r
      );
      ke(e, l, h, f);
    } else o && (el(e, l, o, f), i[t] = void 0);
  }
}
const $n = /(?:Once|Passive|Capture)$/;
function sl(e) {
  let t;
  if ($n.test(e)) {
    t = {};
    let n;
    for (; n = e.match($n); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Be(e.slice(2)), t];
}
let ys = 0;
const nl = /* @__PURE__ */ Promise.resolve(), rl = () => ys || (nl.then(() => ys = 0), ys = Date.now());
function il(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    Te(
      ol(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = rl(), s;
}
function ol(e, t) {
  if (P(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ll = (e, t, s, n, r, i) => {
  const o = r === "svg";
  t === "class" ? Yo(e, n, o) : t === "style" ? Qo(e, s, n) : Zt(t) ? Ns(t) || tl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cl(e, t, n, o)) ? (Fn(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rn(e, t, n, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(n)) ? Fn(e, Ve(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Rn(e, t, n, o));
};
function cl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && jn(t) && M(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return jn(t) && G(s) ? !1 : t in e;
}
const Hn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return P(t) ? (s) => Nt(t, s) : t;
};
function fl(e) {
  e.target.composing = !0;
}
function Nn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const xs = Symbol("_assign"), Il = {
  created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
    e[xs] = Hn(r);
    const i = n || r.props && r.props.type === "number";
    ke(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      s && (l = l.trim()), i && (l = vs(l)), e[xs](l);
    }), s && ke(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ke(e, "compositionstart", fl), ke(e, "compositionend", Nn), ke(e, "change", Nn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: i } }, o) {
    if (e[xs] = Hn(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? vs(e.value) : e.value, f = t ?? "";
    l !== f && (document.activeElement === e && e.type !== "range" && (n && t === s || r && e.value.trim() === f) || (e.value = f));
  }
}, ul = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Rl = (e, t) => {
  const s = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return s[n] || (s[n] = ((r) => {
    if (!("key" in r))
      return;
    const i = Be(r.key);
    if (t.some(
      (o) => o === i || ul[o] === i
    ))
      return e(r);
  }));
}, al = /* @__PURE__ */ k({ patchProp: ll }, Jo);
let Ln;
function dl() {
  return Ln || (Ln = go(al));
}
const Fl = ((...e) => {
  const t = dl().createApp(...e), { mount: s } = t;
  return t.mount = (n) => {
    const r = pl(n);
    if (!r) return;
    const i = t._component;
    !M(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, hl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function hl(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function pl(e) {
  return G(e) ? document.querySelector(e) : e;
}
class Dl {
  /**
   * @param {String} type Title type. Options: h1, h2, h3, h4, h5, h6.
   */
  constructor(t) {
    this.type = {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-sm"
    }, this.list = new Set(Object.keys(this.type)), this.options = [], this.list.forEach((s) => this.options.push(
      { type: s, content: `Título ${s.charAt(1)}` }
    )), this.fromType(t);
  }
  /**
   * Set the current title properties.
   * @param {String} type Title type. Options: h1, h2, h3, h4, h5, h6.
   * @return {self}
   */
  fromType(t) {
    return this.current = { type: null, class: "foo" }, this.list.has(t) && (this.current.type = t, this.current.class = this.type[t]), this;
  }
}
const gl = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, _l = {
  __name: "Title",
  props: { size: String },
  setup(e) {
    return (t, s) => (z(), Pe("h6", {
      class: Ot(["mb-3 min-h-2 font-bold", e.size])
    }, [
      Qs(t.$slots, "default")
    ], 2));
  }
}, ml = { class: "w-full mb-3" }, bl = ["src", "alt"], yl = {
  __name: "Image",
  props: { src: String, alt: String },
  setup(e) {
    return (t, s) => (z(), Pe("div", ml, [
      sn("img", {
        src: e.src,
        alt: e.alt
      }, null, 8, bl)
    ]));
  }
}, xl = {}, vl = { class: "mb-3 min-h-2" };
function Sl(e, t) {
  return z(), Pe("p", vl, [
    Qs(e.$slots, "default")
  ]);
}
const wl = /* @__PURE__ */ gl(xl, [["render", Sl]]), Wr = {
  __name: "Section",
  props: { section: Object },
  setup(e) {
    const t = xt("titles");
    return (s, n) => (z(), Pe("div", {
      class: Ot(`w-full ${e.section.type}-section`)
    }, [
      As(t).list.has(e.section.type) ? (z(), Me(_l, {
        key: 0,
        size: As(t).type[e.section.type]
      }, {
        default: Gt(() => [
          Ds(Ss(e.section.content), 1)
        ]),
        _: 1
      }, 8, ["size"])) : Ut("", !0),
      e.section.type == "p" ? (z(), Me(wl, { key: 1 }, {
        default: Gt(() => [
          Ds(Ss(e.section.content), 1)
        ]),
        _: 1
      })) : Ut("", !0),
      e.section.type == "img" ? (z(), Me(yl, {
        key: 2,
        src: e.section.content
      }, null, 8, ["src"])) : Ut("", !0),
      Qs(s.$slots, "default")
    ], 2));
  }
}, Tl = { class: "w-full flex flex-col md:flex-row space-x-3" }, Cl = { class: "w-full md:w-1/2 mb-3" }, El = /* @__PURE__ */ Li({
  __name: "Columns",
  props: { content: Array },
  setup(e) {
    return (t, s) => (z(), Pe("div", Tl, [
      (z(!0), Pe(re, null, Ps(e.content, (n) => (z(), Pe("div", Cl, [
        (z(!0), Pe(re, null, Ps(n, (r) => (z(), Me(Wr, { section: r }, null, 8, ["section"]))), 256))
      ]))), 256))
    ]));
  }
}), $l = {
  __name: "Page",
  props: { sections: Array },
  setup(e) {
    return (t, s) => (z(!0), Pe(re, null, Ps(e.sections, (n) => (z(), Me(Wr, { section: n }, {
      default: Gt(() => [
        n.type == "col" ? (z(), Me(El, {
          key: 0,
          content: n.content
        }, null, 8, ["content"])) : Ut("", !0)
      ]),
      _: 2
    }, 1032, ["section"]))), 256));
  }
};
export {
  yl as A,
  $l as B,
  Fl as C,
  re as F,
  wl as P,
  Dl as T,
  gl as _,
  Me as a,
  Bo as b,
  Pe as c,
  Li as d,
  Ut as e,
  sn as f,
  Al as g,
  Pl as h,
  xt as i,
  we as j,
  Ps as k,
  _l as l,
  Fo as m,
  Ds as n,
  z as o,
  lo as p,
  _s as q,
  Qs as r,
  Fi as s,
  Ss as t,
  As as u,
  Ml as v,
  Gt as w,
  Ot as x,
  Rl as y,
  Il as z
};
