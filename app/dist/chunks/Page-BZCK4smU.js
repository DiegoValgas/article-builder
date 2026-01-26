var ji = {};
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const K = ji.NODE_ENV !== "production" ? Object.freeze({}) : {}, xt = ji.NODE_ENV !== "production" ? Object.freeze([]) : [], Q = () => {
}, Hi = () => !1, Xt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), bn = (e) => e.startsWith("onUpdate:"), X = Object.assign, Vo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, os = Object.prototype.hasOwnProperty, H = (e, t) => os.call(e, t), T = Array.isArray, dt = (e) => Pn(e) === "[object Map]", Li = (e) => Pn(e) === "[object Set]", A = (e) => typeof e == "function", z = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", So = (e) => (W(e) || A(e)) && A(e.then) && A(e.catch), Ui = Object.prototype.toString, Pn = (e) => Ui.call(e), Co = (e) => Pn(e).slice(8, -1), ki = (e) => Pn(e) === "[object Object]", To = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lt = /* @__PURE__ */ Ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), is = /* @__PURE__ */ Ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, rs = /-\w/g, we = In(
  (e) => e.replace(rs, (t) => t.slice(1).toUpperCase())
), ss = /\B([A-Z])/g, Ye = In(
  (e) => e.replace(ss, "-$1").toLowerCase()
), Rn = In((e) => e.charAt(0).toUpperCase() + e.slice(1)), ut = In(
  (e) => e ? `on${Rn(e)}` : ""
), st = (e, t) => !Object.is(e, t), vt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Nn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, so = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ei;
const Zt = () => ei || (ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $o(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = z(o) ? us(o) : $o(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (z(e) || W(e))
    return e;
}
const ls = /;(?![^(]*\))/g, cs = /:([^]+)/, fs = /\/\*[^]*?\*\//g;
function us(e) {
  const t = {};
  return e.replace(fs, "").split(ls).forEach((n) => {
    if (n) {
      const o = n.split(cs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Qt(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Qt(e[n]);
      o && (t += o + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const as = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ds = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ps = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", hs = /* @__PURE__ */ Ze(as), gs = /* @__PURE__ */ Ze(ds), ms = /* @__PURE__ */ Ze(ps), _s = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Es = /* @__PURE__ */ Ze(_s);
function Ki(e) {
  return !!e || e === "";
}
const Bi = (e) => !!(e && e.__v_isRef === !0), lo = (e) => z(e) ? e : e == null ? "" : T(e) || W(e) && (e.toString === Ui || !A(e.toString)) ? Bi(e) ? lo(e.value) : JSON.stringify(e, Wi, 2) : String(e), Wi = (e, t) => Bi(t) ? Wi(e, t.value) : dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], r) => (n[Jn(o, r) + " =>"] = i, n),
    {}
  )
} : Li(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jn(n))
} : Qe(t) ? Jn(t) : W(t) && !T(t) && !ki(t) ? String(t) : t, Jn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var q = {};
function De(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let me;
class bs {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = me, !t && me && (this.index = (me.scopes || (me.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = me;
      try {
        return me = this, t();
      } finally {
        me = n;
      }
    } else q.NODE_ENV !== "production" && De("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = me, me = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (me = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ns() {
  return me;
}
let k;
const zn = /* @__PURE__ */ new WeakSet();
class qi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, me && me.active && me.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, zn.has(this) && (zn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ji(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ti(this), zi(this);
    const t = k, n = xe;
    k = this, xe = !0;
    try {
      return this.fn();
    } finally {
      q.NODE_ENV !== "production" && k !== this && De(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Yi(this), k = t, xe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Po(t);
      this.deps = this.depsTail = void 0, ti(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? zn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    co(this) && this.run();
  }
  get dirty() {
    return co(this);
  }
}
let Gi = 0, Ut, kt;
function Ji(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = kt, kt = e;
    return;
  }
  e.next = Ut, Ut = e;
}
function Ao() {
  Gi++;
}
function Mo() {
  if (--Gi > 0)
    return;
  if (kt) {
    let t = kt;
    for (kt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ut; ) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function zi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yi(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), Po(o), ys(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function co(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Xi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Xi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qt) || (e.globalVersion = qt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !co(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = k, o = xe;
  k = e, xe = !0;
  try {
    zi(e);
    const i = e.fn(e._value);
    (t.version === 0 || st(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    k = n, xe = o, Yi(e), e.flags &= -3;
  }
}
function Po(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), q.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Po(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ys(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let xe = !0;
const Zi = [];
function Ve() {
  Zi.push(xe), xe = !1;
}
function Se() {
  const e = Zi.pop();
  xe = e === void 0 ? !0 : e;
}
function ti(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = k;
    k = void 0;
    try {
      t();
    } finally {
      k = n;
    }
  }
}
let qt = 0;
class vs {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Io {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, q.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!k || !xe || k === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== k)
      n = this.activeLink = new vs(k, this), k.deps ? (n.prevDep = k.depsTail, k.depsTail.nextDep = n, k.depsTail = n) : k.deps = k.depsTail = n, Qi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = k.depsTail, n.nextDep = void 0, k.depsTail.nextDep = n, k.depsTail = n, k.deps === n && (k.deps = o);
    }
    return q.NODE_ENV !== "production" && k.onTrack && k.onTrack(
      X(
        {
          effect: k
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, qt++, this.notify(t);
  }
  notify(t) {
    Ao();
    try {
      if (q.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            X(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Mo();
    }
  }
}
function Qi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Qi(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), q.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const fo = /* @__PURE__ */ new WeakMap(), pt = Symbol(
  q.NODE_ENV !== "production" ? "Object iterate" : ""
), uo = Symbol(
  q.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Gt = Symbol(
  q.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Z(e, t, n) {
  if (xe && k) {
    let o = fo.get(e);
    o || fo.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new Io()), i.map = o, i.key = n), q.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Ie(e, t, n, o, i, r) {
  const s = fo.get(e);
  if (!s) {
    qt++;
    return;
  }
  const l = (f) => {
    f && (q.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : f.trigger());
  };
  if (Ao(), t === "clear")
    s.forEach(l);
  else {
    const f = T(e), h = f && To(n);
    if (f && n === "length") {
      const d = Number(o);
      s.forEach((a, m) => {
        (m === "length" || m === Gt || !Qe(m) && m >= d) && l(a);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), h && l(s.get(Gt)), t) {
        case "add":
          f ? h && l(s.get("length")) : (l(s.get(pt)), dt(e) && l(s.get(uo)));
          break;
        case "delete":
          f || (l(s.get(pt)), dt(e) && l(s.get(uo)));
          break;
        case "set":
          dt(e) && l(s.get(pt));
          break;
      }
  }
  Mo();
}
function bt(e) {
  const t = I(e);
  return t === e ? t : (Z(t, "iterate", Gt), ae(e) ? t : t.map(ie));
}
function Fn(e) {
  return Z(e = I(e), "iterate", Gt), e;
}
const Os = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, ie);
  },
  concat(...e) {
    return bt(this).concat(
      ...e.map((t) => T(t) ? bt(t) : t)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = ie(e[1]), e));
  },
  every(e, t) {
    return Ke(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ke(this, "filter", e, t, (n) => n.map(ie), arguments);
  },
  find(e, t) {
    return Ke(this, "find", e, t, ie, arguments);
  },
  findIndex(e, t) {
    return Ke(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ke(this, "findLast", e, t, ie, arguments);
  },
  findLastIndex(e, t) {
    return Ke(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ke(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xn(this, "includes", e);
  },
  indexOf(...e) {
    return Xn(this, "indexOf", e);
  },
  join(e) {
    return bt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ke(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Pt(this, "pop");
  },
  push(...e) {
    return Pt(this, "push", e);
  },
  reduce(e, ...t) {
    return ni(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ni(this, "reduceRight", e, t);
  },
  shift() {
    return Pt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ke(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Pt(this, "splice", e);
  },
  toReversed() {
    return bt(this).toReversed();
  },
  toSorted(e) {
    return bt(this).toSorted(e);
  },
  toSpliced(...e) {
    return bt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Pt(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", ie);
  }
};
function Yn(e, t, n) {
  const o = Fn(e), i = o[t]();
  return o !== e && !ae(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.done || (r.value = n(r.value)), r;
  }), i;
}
const ws = Array.prototype;
function Ke(e, t, n, o, i, r) {
  const s = Fn(e), l = s !== e && !ae(e), f = s[t];
  if (f !== ws[t]) {
    const a = f.apply(e, r);
    return l ? ie(a) : a;
  }
  let h = n;
  s !== e && (l ? h = function(a, m) {
    return n.call(this, ie(a), m, e);
  } : n.length > 2 && (h = function(a, m) {
    return n.call(this, a, m, e);
  }));
  const d = f.call(s, h, o);
  return l && i ? i(d) : d;
}
function ni(e, t, n, o) {
  const i = Fn(e);
  let r = n;
  return i !== e && (ae(e) ? n.length > 3 && (r = function(s, l, f) {
    return n.call(this, s, l, f, e);
  }) : r = function(s, l, f) {
    return n.call(this, s, ie(l), f, e);
  }), i[t](r, ...o);
}
function Xn(e, t, n) {
  const o = I(e);
  Z(o, "iterate", Gt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && yn(n[0]) ? (n[0] = I(n[0]), o[t](...n)) : i;
}
function Pt(e, t, n = []) {
  Ve(), Ao();
  const o = I(e)[t].apply(e, n);
  return Mo(), Se(), o;
}
const xs = /* @__PURE__ */ Ze("__proto__,__v_isRef,__isVue"), er = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function Ds(e) {
  Qe(e) || (e = String(e));
  const t = I(this);
  return Z(t, "has", e), t.hasOwnProperty(e);
}
class tr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? lr : sr : r ? rr : ir).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = T(t);
    if (!i) {
      let f;
      if (s && (f = Os[n]))
        return f;
      if (n === "hasOwnProperty")
        return Ds;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Y(t) ? t : o
    );
    if ((Qe(n) ? er.has(n) : xs(n)) || (i || Z(t, "get", n), r))
      return l;
    if (Y(l)) {
      const f = s && To(n) ? l : l.value;
      return i && W(f) ? po(f) : f;
    }
    return W(l) ? i ? po(l) : Ro(l) : l;
  }
}
class nr extends tr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const f = Le(r);
      if (!ae(o) && !Le(o) && (r = I(r), o = I(o)), !T(t) && Y(r) && !Y(o))
        return f ? (q.NODE_ENV !== "production" && De(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = o, !0);
    }
    const s = T(t) && To(n) ? Number(n) < t.length : H(t, n), l = Reflect.set(
      t,
      n,
      o,
      Y(t) ? t : i
    );
    return t === I(i) && (s ? st(o, r) && Ie(t, "set", n, o, r) : Ie(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = H(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Ie(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Qe(n) || !er.has(n)) && Z(t, "has", n), o;
  }
  ownKeys(t) {
    return Z(
      t,
      "iterate",
      T(t) ? "length" : pt
    ), Reflect.ownKeys(t);
  }
}
class or extends tr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return q.NODE_ENV !== "production" && De(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return q.NODE_ENV !== "production" && De(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Vs = /* @__PURE__ */ new nr(), Ss = /* @__PURE__ */ new or(), Cs = /* @__PURE__ */ new nr(!0), Ts = /* @__PURE__ */ new or(!0), ao = (e) => e, cn = (e) => Reflect.getPrototypeOf(e);
function $s(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = I(i), s = dt(r), l = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, h = i[e](...o), d = n ? ao : t ? vn : ie;
    return !t && Z(
      r,
      "iterate",
      f ? uo : pt
    ), {
      // iterator protocol
      next() {
        const { value: a, done: m } = h.next();
        return m ? { value: a, done: m } : {
          value: l ? [d(a[0]), d(a[1])] : d(a),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function fn(e) {
  return function(...t) {
    if (q.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      De(
        `${Rn(e)} operation ${n}failed: target is readonly.`,
        I(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function As(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = I(r), l = I(i);
      e || (st(i, l) && Z(s, "get", i), Z(s, "get", l));
      const { has: f } = cn(s), h = t ? ao : e ? vn : ie;
      if (f.call(s, i))
        return h(r.get(i));
      if (f.call(s, l))
        return h(r.get(l));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Z(I(i), "iterate", pt), i.size;
    },
    has(i) {
      const r = this.__v_raw, s = I(r), l = I(i);
      return e || (st(i, l) && Z(s, "has", i), Z(s, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const s = this, l = s.__v_raw, f = I(l), h = t ? ao : e ? vn : ie;
      return !e && Z(f, "iterate", pt), l.forEach((d, a) => i.call(r, h(d), h(a), s));
    }
  };
  return X(
    n,
    e ? {
      add: fn("add"),
      set: fn("set"),
      delete: fn("delete"),
      clear: fn("clear")
    } : {
      add(i) {
        !t && !ae(i) && !Le(i) && (i = I(i));
        const r = I(this);
        return cn(r).has.call(r, i) || (r.add(i), Ie(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !ae(r) && !Le(r) && (r = I(r));
        const s = I(this), { has: l, get: f } = cn(s);
        let h = l.call(s, i);
        h ? q.NODE_ENV !== "production" && oi(s, l, i) : (i = I(i), h = l.call(s, i));
        const d = f.call(s, i);
        return s.set(i, r), h ? st(r, d) && Ie(s, "set", i, r, d) : Ie(s, "add", i, r), this;
      },
      delete(i) {
        const r = I(this), { has: s, get: l } = cn(r);
        let f = s.call(r, i);
        f ? q.NODE_ENV !== "production" && oi(r, s, i) : (i = I(i), f = s.call(r, i));
        const h = l ? l.call(r, i) : void 0, d = r.delete(i);
        return f && Ie(r, "delete", i, void 0, h), d;
      },
      clear() {
        const i = I(this), r = i.size !== 0, s = q.NODE_ENV !== "production" ? dt(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return r && Ie(
          i,
          "clear",
          void 0,
          void 0,
          s
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = $s(i, e, t);
  }), n;
}
function jn(e, t) {
  const n = As(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    H(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Ms = {
  get: /* @__PURE__ */ jn(!1, !1)
}, Ps = {
  get: /* @__PURE__ */ jn(!1, !0)
}, Is = {
  get: /* @__PURE__ */ jn(!0, !1)
}, Rs = {
  get: /* @__PURE__ */ jn(!0, !0)
};
function oi(e, t, n) {
  const o = I(n);
  if (o !== n && t.call(e, o)) {
    const i = Co(e);
    De(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ir = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap();
function Fs(e) {
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
function js(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fs(Co(e));
}
function Ro(e) {
  return Le(e) ? e : Hn(
    e,
    !1,
    Vs,
    Ms,
    ir
  );
}
function Hs(e) {
  return Hn(
    e,
    !1,
    Cs,
    Ps,
    rr
  );
}
function po(e) {
  return Hn(
    e,
    !0,
    Ss,
    Is,
    sr
  );
}
function Fe(e) {
  return Hn(
    e,
    !0,
    Ts,
    Rs,
    lr
  );
}
function Hn(e, t, n, o, i) {
  if (!W(e))
    return q.NODE_ENV !== "production" && De(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = js(e);
  if (r === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const l = new Proxy(
    e,
    r === 2 ? o : n
  );
  return i.set(e, l), l;
}
function ht(e) {
  return Le(e) ? ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Le(e) {
  return !!(e && e.__v_isReadonly);
}
function ae(e) {
  return !!(e && e.__v_isShallow);
}
function yn(e) {
  return e ? !!e.__v_raw : !1;
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
function Ls(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && Nn(e, "__v_skip", !0), e;
}
const ie = (e) => W(e) ? Ro(e) : e, vn = (e) => W(e) ? po(e) : e;
function Y(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function wf(e) {
  return Us(e, !1);
}
function Us(e, t) {
  return Y(e) ? e : new ks(e, t);
}
class ks {
  constructor(t, n) {
    this.dep = new Io(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : I(t), this._value = n ? t : ie(t), this.__v_isShallow = n;
  }
  get value() {
    return q.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || ae(t) || Le(t);
    t = o ? t : I(t), st(t, n) && (this._rawValue = t, this._value = o ? t : ie(t), q.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ho(e) {
  return Y(e) ? e.value : e;
}
const Ks = {
  get: (e, t, n) => t === "__v_raw" ? e : ho(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return Y(i) && !Y(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function cr(e) {
  return ht(e) ? e : new Proxy(e, Ks);
}
class Bs {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Io(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    k !== this)
      return Ji(this, !0), !0;
  }
  get value() {
    const t = q.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Xi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : q.NODE_ENV !== "production" && De("Write operation failed: computed value is readonly");
  }
}
function Ws(e, t, n = !1) {
  let o, i;
  return A(e) ? o = e : (o = e.get, i = e.set), new Bs(o, i, n);
}
const un = {}, On = /* @__PURE__ */ new WeakMap();
let at;
function qs(e, t = !1, n = at) {
  if (n) {
    let o = On.get(n);
    o || On.set(n, o = []), o.push(e);
  } else q.NODE_ENV !== "production" && !t && De(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Gs(e, t, n = K) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: l, call: f } = n, h = (C) => {
    (n.onWarn || De)(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (C) => i ? C : ae(C) || i === !1 || i === 0 ? qe(C, 1) : qe(C);
  let a, m, x, M, S = !1, te = !1;
  if (Y(e) ? (m = () => e.value, S = ae(e)) : ht(e) ? (m = () => d(e), S = !0) : T(e) ? (te = !0, S = e.some((C) => ht(C) || ae(C)), m = () => e.map((C) => {
    if (Y(C))
      return C.value;
    if (ht(C))
      return d(C);
    if (A(C))
      return f ? f(C, 2) : C();
    q.NODE_ENV !== "production" && h(C);
  })) : A(e) ? t ? m = f ? () => f(e, 2) : e : m = () => {
    if (x) {
      Ve();
      try {
        x();
      } finally {
        Se();
      }
    }
    const C = at;
    at = a;
    try {
      return f ? f(e, 3, [M]) : e(M);
    } finally {
      at = C;
    }
  } : (m = Q, q.NODE_ENV !== "production" && h(e)), t && i) {
    const C = m, ne = i === !0 ? 1 / 0 : i;
    m = () => qe(C(), ne);
  }
  const J = Ns(), U = () => {
    a.stop(), J && J.active && Vo(J.effects, a);
  };
  if (r && t) {
    const C = t;
    t = (...ne) => {
      C(...ne), U();
    };
  }
  let L = te ? new Array(e.length).fill(un) : un;
  const Ee = (C) => {
    if (!(!(a.flags & 1) || !a.dirty && !C))
      if (t) {
        const ne = a.run();
        if (i || S || (te ? ne.some((ye, se) => st(ye, L[se])) : st(ne, L))) {
          x && x();
          const ye = at;
          at = a;
          try {
            const se = [
              ne,
              // pass undefined as the old value when it's changed for the first time
              L === un ? void 0 : te && L[0] === un ? [] : L,
              M
            ];
            L = ne, f ? f(t, 3, se) : (
              // @ts-expect-error
              t(...se)
            );
          } finally {
            at = ye;
          }
        }
      } else
        a.run();
  };
  return l && l(Ee), a = new qi(m), a.scheduler = s ? () => s(Ee, !1) : Ee, M = (C) => qs(C, !1, a), x = a.onStop = () => {
    const C = On.get(a);
    if (C) {
      if (f)
        f(C, 4);
      else
        for (const ne of C) ne();
      On.delete(a);
    }
  }, q.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? Ee(!0) : L = a.run() : s ? s(Ee.bind(null, !0), !0) : a.run(), U.pause = a.pause.bind(a), U.resume = a.resume.bind(a), U.stop = U, U;
}
function qe(e, t = 1 / 0, n) {
  if (t <= 0 || !W(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Y(e))
    qe(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      qe(e[o], t, n);
  else if (Li(e) || dt(e))
    e.forEach((o) => {
      qe(o, t, n);
    });
  else if (ki(e)) {
    for (const o in e)
      qe(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && qe(e[o], t, n);
  }
  return e;
}
var p = {};
const gt = [];
function an(e) {
  gt.push(e);
}
function dn() {
  gt.pop();
}
let Zn = !1;
function O(e, ...t) {
  if (Zn) return;
  Zn = !0, Ve();
  const n = gt.length ? gt[gt.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Js();
  if (o)
    Ct(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var s, l;
          return (l = (s = r.toString) == null ? void 0 : s.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${Bn(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...zs(i)), console.warn(...r);
  }
  Se(), Zn = !1;
}
function Js() {
  let e = gt[gt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function zs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ys(n));
  }), t;
}
function Ys({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${Bn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...Xs(e.props), r] : [i + r];
}
function Xs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...fr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fr(e, t, n) {
  return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Y(t) ? (t = fr(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const Fo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Ct(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    en(i, t, n);
  }
}
function Ue(e, t, n, o) {
  if (A(e)) {
    const i = Ct(e, t, n, o);
    return i && So(i) && i.catch((r) => {
      en(r, t, n);
    }), i;
  }
  if (T(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ue(e[r], t, n, o));
    return i;
  } else p.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function en(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || K;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = p.NODE_ENV !== "production" ? Fo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let a = 0; a < d.length; a++)
          if (d[a](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Ve(), Ct(r, null, 10, [
        e,
        f,
        h
      ]), Se();
      return;
    }
  }
  Zs(e, n, i, o, s);
}
function Zs(e, t, n, o = !0, i = !1) {
  if (p.NODE_ENV !== "production") {
    const r = Fo[t];
    if (n && an(n), O(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && dn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const ue = [];
let Pe = -1;
const Dt = [];
let it = null, Ot = 0;
const ur = /* @__PURE__ */ Promise.resolve();
let wn = null;
const Qs = 100;
function el(e) {
  const t = wn || ur;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tl(e) {
  let t = Pe + 1, n = ue.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = ue[o], r = Jt(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Ln(e) {
  if (!(e.flags & 1)) {
    const t = Jt(e), n = ue[ue.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jt(n) ? ue.push(e) : ue.splice(tl(t), 0, e), e.flags |= 1, ar();
  }
}
function ar() {
  wn || (wn = ur.then(hr));
}
function dr(e) {
  T(e) ? Dt.push(...e) : it && e.id === -1 ? it.splice(Ot + 1, 0, e) : e.flags & 1 || (Dt.push(e), e.flags |= 1), ar();
}
function ii(e, t, n = Pe + 1) {
  for (p.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ue.length; n++) {
    const o = ue[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || p.NODE_ENV !== "production" && jo(t, o))
        continue;
      ue.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function pr(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)].sort(
      (n, o) => Jt(n) - Jt(o)
    );
    if (Dt.length = 0, it) {
      it.push(...t);
      return;
    }
    for (it = t, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ot = 0; Ot < it.length; Ot++) {
      const n = it[Ot];
      p.NODE_ENV !== "production" && jo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    it = null, Ot = 0;
  }
}
const Jt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hr(e) {
  p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = p.NODE_ENV !== "production" ? (n) => jo(e, n) : Q;
  try {
    for (Pe = 0; Pe < ue.length; Pe++) {
      const n = ue[Pe];
      if (n && !(n.flags & 8)) {
        if (p.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ct(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Pe < ue.length; Pe++) {
      const n = ue[Pe];
      n && (n.flags &= -2);
    }
    Pe = -1, ue.length = 0, pr(e), wn = null, (ue.length || Dt.length) && hr(e);
  }
}
function jo(e, t) {
  const n = e.get(t) || 0;
  if (n > Qs) {
    const o = t.i, i = o && Yr(o.type);
    return en(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let je = !1;
const pn = /* @__PURE__ */ new Map();
p.NODE_ENV !== "production" && (Zt().__VUE_HMR_RUNTIME__ = {
  createRecord: Qn(gr),
  rerender: Qn(il),
  reload: Qn(rl)
});
const _t = /* @__PURE__ */ new Map();
function nl(e) {
  const t = e.type.__hmrId;
  let n = _t.get(t);
  n || (gr(t, e.type), n = _t.get(t)), n.instances.add(e);
}
function ol(e) {
  _t.get(e.type.__hmrId).instances.delete(e);
}
function gr(e, t) {
  return _t.has(e) ? !1 : (_t.set(e, {
    initialDef: xn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function xn(e) {
  return Xr(e) ? e.__vccOpts : e;
}
function il(e, t) {
  const n = _t.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, xn(o.type).render = t), o.renderCache = [], je = !0, o.job.flags & 8 || o.update(), je = !1;
  }));
}
function rl(e, t) {
  const n = _t.get(e);
  if (!n) return;
  t = xn(t), ri(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = xn(r.type);
    let l = pn.get(s);
    l || (s !== n.initialDef && ri(s, t), pn.set(s, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Ln(() => {
      r.job.flags & 8 || (je = !0, r.parent.update(), je = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  dr(() => {
    pn.clear();
  });
}
function ri(e, t) {
  X(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Qn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Re, jt = [], go = !1;
function tn(e, ...t) {
  Re ? Re.emit(e, ...t) : go || jt.push({ event: e, args: t });
}
function mr(e, t) {
  var n, o;
  Re = e, Re ? (Re.enabled = !0, jt.forEach(({ event: i, args: r }) => Re.emit(i, ...r)), jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    mr(r, t);
  }), setTimeout(() => {
    Re || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, go = !0, jt = []);
  }, 3e3)) : (go = !0, jt = []);
}
function sl(e, t) {
  tn("app:init", e, t, {
    Fragment: le,
    Text: nn,
    Comment: _e,
    Static: gn
  });
}
function ll(e) {
  tn("app:unmount", e);
}
const cl = /* @__PURE__ */ Ho(
  "component:added"
  /* COMPONENT_ADDED */
), _r = /* @__PURE__ */ Ho(
  "component:updated"
  /* COMPONENT_UPDATED */
), fl = /* @__PURE__ */ Ho(
  "component:removed"
  /* COMPONENT_REMOVED */
), ul = (e) => {
  Re && typeof Re.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Re.cleanupBuffer(e) && fl(e);
};
// @__NO_SIDE_EFFECTS__
function Ho(e) {
  return (t) => {
    tn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const al = /* @__PURE__ */ Er(
  "perf:start"
  /* PERFORMANCE_START */
), dl = /* @__PURE__ */ Er(
  "perf:end"
  /* PERFORMANCE_END */
);
function Er(e) {
  return (t, n, o) => {
    tn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function pl(e, t, n) {
  tn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ee = null, br = null;
function Dn(e) {
  const t = ee;
  return ee = e, br = e && e.type.__scopeId || null, t;
}
function Vn(e, t = ee, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && bi(-1);
    const r = Dn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Dn(r), o._d && bi(1);
    }
    return p.NODE_ENV !== "production" && _r(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Nr(e) {
  is(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function xf(e, t) {
  if (ee === null)
    return p.NODE_ENV !== "production" && O("withDirectives can only be used inside render functions."), e;
  const n = Kn(ee), o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, s, l, f = K] = t[i];
    r && (A(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && qe(s), o.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function ct(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    r && (l.oldValue = r[s].value);
    let f = l.dir[o];
    f && (Ve(), Ue(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Se());
  }
}
const hl = Symbol("_vte"), gl = (e) => e.__isTeleport, ml = Symbol("_leaveCb");
function Lo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Lo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function _l(e, t) {
  return A(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    X({ name: e.name }, t, { setup: e })
  ) : e;
}
function yr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const si = /* @__PURE__ */ new WeakSet(), Sn = /* @__PURE__ */ new WeakMap();
function Kt(e, t, n, o, i = !1) {
  if (T(e)) {
    e.forEach(
      (S, te) => Kt(
        S,
        t && (T(t) ? t[te] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Vt(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Kt(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Kn(o.component) : o.el, s = i ? null : r, { i: l, r: f } = e;
  if (p.NODE_ENV !== "production" && !l) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, d = l.refs === K ? l.refs = {} : l.refs, a = l.setupState, m = I(a), x = a === K ? Hi : (S) => p.NODE_ENV !== "production" && (H(m, S) && !Y(m[S]) && O(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), si.has(m[S])) ? !1 : H(m, S), M = (S) => p.NODE_ENV === "production" || !si.has(S);
  if (h != null && h !== f) {
    if (li(t), z(h))
      d[h] = null, x(h) && (a[h] = null);
    else if (Y(h)) {
      M(h) && (h.value = null);
      const S = t;
      S.k && (d[S.k] = null);
    }
  }
  if (A(f))
    Ct(f, l, 12, [s, d]);
  else {
    const S = z(f), te = Y(f);
    if (S || te) {
      const J = () => {
        if (e.f) {
          const U = S ? x(f) ? a[f] : d[f] : M(f) || !e.k ? f.value : d[e.k];
          if (i)
            T(U) && Vo(U, r);
          else if (T(U))
            U.includes(r) || U.push(r);
          else if (S)
            d[f] = [r], x(f) && (a[f] = d[f]);
          else {
            const L = [r];
            M(f) && (f.value = L), e.k && (d[e.k] = L);
          }
        } else S ? (d[f] = s, x(f) && (a[f] = s)) : te ? (M(f) && (f.value = s), e.k && (d[e.k] = s)) : p.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (s) {
        const U = () => {
          J(), Sn.delete(e);
        };
        U.id = -1, Sn.set(e, U), be(U, n);
      } else
        li(e), J();
    } else p.NODE_ENV !== "production" && O("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function li(e) {
  const t = Sn.get(e);
  t && (t.flags |= 8, Sn.delete(e));
}
Zt().requestIdleCallback;
Zt().cancelIdleCallback;
const Vt = (e) => !!e.type.__asyncLoader, Uo = (e) => e.type.__isKeepAlive;
function El(e, t) {
  vr(e, "a", t);
}
function bl(e, t) {
  vr(e, "da", t);
}
function vr(e, t, n = re) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Un(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Uo(i.parent.vnode) && Nl(o, t, n, i), i = i.parent;
  }
}
function Nl(e, t, n, o) {
  const i = Un(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Or(() => {
    Vo(o[t], i);
  }, n);
}
function Un(e, t, n = re, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      Ve();
      const l = rn(n), f = Ue(t, n, e, s);
      return l(), Se(), f;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (p.NODE_ENV !== "production") {
    const i = ut(Fo[e].replace(/ hook$/, ""));
    O(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const et = (e) => (t, n = re) => {
  (!Yt || e === "sp") && Un(e, (...o) => t(...o), n);
}, yl = et("bm"), vl = et("m"), Ol = et(
  "bu"
), wl = et("u"), xl = et(
  "bum"
), Or = et("um"), Dl = et(
  "sp"
), Vl = et("rtg"), Sl = et("rtc");
function Cl(e, t = re) {
  Un("ec", e, t);
}
const Tl = Symbol.for("v-ndc");
function mo(e, t, n, o) {
  let i;
  const r = n, s = T(e);
  if (s || z(e)) {
    const l = s && ht(e);
    let f = !1, h = !1;
    l && (f = !ae(e), h = Le(e), e = Fn(e)), i = new Array(e.length);
    for (let d = 0, a = e.length; d < a; d++)
      i[d] = t(
        f ? h ? vn(ie(e[d])) : ie(e[d]) : e[d],
        d,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    p.NODE_ENV !== "production" && !Number.isInteger(e) && O(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (W(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, f) => t(l, f, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let f = 0, h = l.length; f < h; f++) {
        const d = l[f];
        i[f] = t(e[d], d, f, r);
      }
    }
  else
    i = [];
  return i;
}
function ko(e, t, n = {}, o, i) {
  if (ee.ce || ee.parent && Vt(ee.parent) && ee.parent.ce) {
    const h = Object.keys(n).length > 0;
    return oe(), Je(
      le,
      null,
      [He("slot", n, o)],
      h ? -2 : 64
    );
  }
  let r = e[t];
  p.NODE_ENV !== "production" && r && r.length > 1 && (O(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), oe();
  const s = r && wr(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  s && s.key, f = Je(
    le,
    {
      key: (l && !Qe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!s && o ? "_fb" : "")
    },
    s || [],
    s && e._ === 1 ? 64 : -2
  );
  return f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), r && r._c && (r._d = !0), f;
}
function wr(e) {
  return e.some((t) => on(t) ? !(t.type === _e || t.type === le && !wr(t.children)) : !0) ? e : null;
}
const _o = (e) => e ? Jr(e) ? Kn(e) : _o(e.parent) : null, mt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? Fe(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? Fe(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? Fe(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? Fe(e.refs) : e.refs,
    $parent: (e) => _o(e.parent),
    $root: (e) => _o(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Vr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ln(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = el.bind(e.proxy)),
    $watch: (e) => fc.bind(e)
  })
), Ko = (e) => e === "_" || e === "$", eo = (e, t) => e !== K && !e.__isScriptSetup && H(e, t), xr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: l, appContext: f } = e;
    if (p.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const x = s[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (eo(o, t))
          return s[t] = 1, o[t];
        if (i !== K && H(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && H(h, t)
        )
          return s[t] = 3, r[t];
        if (n !== K && H(n, t))
          return s[t] = 4, n[t];
        Eo && (s[t] = 0);
      }
    }
    const d = mt[t];
    let a, m;
    if (d)
      return t === "$attrs" ? (Z(e.attrs, "get", ""), p.NODE_ENV !== "production" && $n()) : p.NODE_ENV !== "production" && t === "$slots" && Z(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== K && H(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      m = f.config.globalProperties, H(m, t)
    )
      return m[t];
    p.NODE_ENV !== "production" && ee && (!z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== K && Ko(t[0]) && H(i, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ee && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return eo(i, t) ? (i[t] = n, !0) : p.NODE_ENV !== "production" && i.__isScriptSetup && H(i, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== K && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (p.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (p.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r, type: s }
  }, l) {
    let f, h;
    return !!(n[l] || e !== K && l[0] !== "$" && H(e, l) || eo(t, l) || (f = r[0]) && H(f, l) || H(o, l) || H(mt, l) || H(i.config.globalProperties, l) || (h = s.__cssModules) && h[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
p.NODE_ENV !== "production" && (xr.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function $l(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(mt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => mt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Q
    });
  }), t;
}
function Al(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Q
    });
  });
}
function Ml(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(I(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Ko(o[0])) {
        O(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Q
      });
    }
  });
}
function ci(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Pl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Eo = !0;
function Il(e) {
  const t = Vr(e), n = e.proxy, o = e.ctx;
  Eo = !1, t.beforeCreate && fi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: a,
    mounted: m,
    beforeUpdate: x,
    updated: M,
    activated: S,
    deactivated: te,
    beforeDestroy: J,
    beforeUnmount: U,
    destroyed: L,
    unmounted: Ee,
    render: C,
    renderTracked: ne,
    renderTriggered: ye,
    errorCaptured: se,
    serverPrefetch: de,
    // public API
    expose: ke,
    inheritAttrs: tt,
    // assets
    components: ve,
    directives: sn,
    filters: zo
  } = t, nt = p.NODE_ENV !== "production" ? Pl() : null;
  if (p.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const R in F)
        nt("Props", R);
  }
  if (h && Rl(h, o, nt), s)
    for (const F in s) {
      const R = s[F];
      A(R) ? (p.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: R.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = R.bind(n), p.NODE_ENV !== "production" && nt("Methods", F)) : p.NODE_ENV !== "production" && O(
        `Method "${F}" has type "${typeof R}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    p.NODE_ENV !== "production" && !A(i) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = i.call(n, n);
    if (p.NODE_ENV !== "production" && So(F) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !W(F))
      p.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = Ro(F), p.NODE_ENV !== "production")
      for (const R in F)
        nt("Data", R), Ko(R[0]) || Object.defineProperty(o, R, {
          configurable: !0,
          enumerable: !0,
          get: () => F[R],
          set: Q
        });
  }
  if (Eo = !0, r)
    for (const F in r) {
      const R = r[F], Ce = A(R) ? R.bind(n, n) : A(R.get) ? R.get.bind(n, n) : Q;
      p.NODE_ENV !== "production" && Ce === Q && O(`Computed property "${F}" has no getter.`);
      const Wn = !A(R) && A(R.set) ? R.set.bind(n) : p.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : Q, Tt = Mc({
        get: Ce,
        set: Wn
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (Et) => Tt.value = Et
      }), p.NODE_ENV !== "production" && nt("Computed", F);
    }
  if (l)
    for (const F in l)
      Dr(l[F], o, n, F);
  if (f) {
    const F = A(f) ? f.call(n) : f;
    Reflect.ownKeys(F).forEach((R) => {
      kl(R, F[R]);
    });
  }
  d && fi(d, e, "c");
  function pe(F, R) {
    T(R) ? R.forEach((Ce) => F(Ce.bind(n))) : R && F(R.bind(n));
  }
  if (pe(yl, a), pe(vl, m), pe(Ol, x), pe(wl, M), pe(El, S), pe(bl, te), pe(Cl, se), pe(Sl, ne), pe(Vl, ye), pe(xl, U), pe(Or, Ee), pe(Dl, de), T(ke))
    if (ke.length) {
      const F = e.exposed || (e.exposed = {});
      ke.forEach((R) => {
        Object.defineProperty(F, R, {
          get: () => n[R],
          set: (Ce) => n[R] = Ce,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Q && (e.render = C), tt != null && (e.inheritAttrs = tt), ve && (e.components = ve), sn && (e.directives = sn), de && yr(e);
}
function Rl(e, t, n = Q) {
  T(e) && (e = bo(e));
  for (const o in e) {
    const i = e[o];
    let r;
    W(i) ? "default" in i ? r = Bt(
      i.from || o,
      i.default,
      !0
    ) : r = Bt(i.from || o) : r = Bt(i), Y(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, p.NODE_ENV !== "production" && n("Inject", o);
  }
}
function fi(e, t, n) {
  Ue(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Dr(e, t, n, o) {
  let i = o.includes(".") ? Hr(n, o) : () => n[o];
  if (z(e)) {
    const r = t[e];
    A(r) ? no(i, r) : p.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if (A(e))
    no(i, e.bind(n));
  else if (W(e))
    if (T(e))
      e.forEach((r) => Dr(r, t, n, o));
    else {
      const r = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(r) ? no(i, r, e) : p.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else p.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function Vr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = r.get(t);
  let f;
  return l ? f = l : !i.length && !n && !o ? f = t : (f = {}, i.length && i.forEach(
    (h) => Cn(f, h, s, !0)
  ), Cn(f, t, s)), W(t) && r.set(t, f), f;
}
function Cn(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && Cn(e, r, n, !0), i && i.forEach(
    (s) => Cn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      p.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Fl[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Fl = {
  data: ui,
  props: ai,
  emits: ai,
  // objects
  methods: Ht,
  computed: Ht,
  // lifecycle
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  // assets
  components: Ht,
  directives: Ht,
  // watch
  watch: Hl,
  // provide / inject
  provide: ui,
  inject: jl
};
function ui(e, t) {
  return t ? e ? function() {
    return X(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jl(e, t) {
  return Ht(bo(e), bo(t));
}
function bo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ai(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    ci(e),
    ci(t ?? {})
  ) : t;
}
function Hl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = fe(e[o], t[o]);
  return n;
}
function Sr() {
  return {
    app: null,
    config: {
      isNativeTag: Hi,
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
let Ll = 0;
function Ul(e, t) {
  return function(o, i = null) {
    A(o) || (o = X({}, o)), i != null && !W(i) && (p.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), i = null);
    const r = Sr(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = r.app = {
      _uid: Ll++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Oi,
      get config() {
        return r.config;
      },
      set config(d) {
        p.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...a) {
        return s.has(d) ? p.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : d && A(d.install) ? (s.add(d), d.install(h, ...a)) : A(d) ? (s.add(d), d(h, ...a)) : p.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(d) {
        return r.mixins.includes(d) ? p.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : r.mixins.push(d), h;
      },
      component(d, a) {
        return p.NODE_ENV !== "production" && xo(d, r.config), a ? (p.NODE_ENV !== "production" && r.components[d] && O(`Component "${d}" has already been registered in target app.`), r.components[d] = a, h) : r.components[d];
      },
      directive(d, a) {
        return p.NODE_ENV !== "production" && Nr(d), a ? (p.NODE_ENV !== "production" && r.directives[d] && O(`Directive "${d}" has already been registered in target app.`), r.directives[d] = a, h) : r.directives[d];
      },
      mount(d, a, m) {
        if (f)
          p.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          p.NODE_ENV !== "production" && d.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const x = h._ceVNode || He(o, i);
          return x.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), p.NODE_ENV !== "production" && (r.reload = () => {
            const M = lt(x);
            M.el = null, e(M, d, m);
          }), e(x, d, m), f = !0, h._container = d, d.__vue_app__ = h, p.NODE_ENV !== "production" && (h._instance = x.component, sl(h, Oi)), Kn(x.component);
        }
      },
      onUnmount(d) {
        p.NODE_ENV !== "production" && typeof d != "function" && O(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        f ? (Ue(
          l,
          h._instance,
          16
        ), e(null, h._container), p.NODE_ENV !== "production" && (h._instance = null, ll(h)), delete h._container.__vue_app__) : p.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(d, a) {
        return p.NODE_ENV !== "production" && d in r.provides && (H(r.provides, d) ? O(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : O(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[d] = a, h;
      },
      runWithContext(d) {
        const a = St;
        St = h;
        try {
          return d();
        } finally {
          St = a;
        }
      }
    };
    return h;
  };
}
let St = null;
function kl(e, t) {
  if (!re)
    p.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = re.provides;
    const o = re.parent && re.parent.provides;
    o === n && (n = re.provides = Object.create(o)), n[e] = t;
  }
}
function Bt(e, t, n = !1) {
  const o = Gr();
  if (o || St) {
    let i = St ? St._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(o && o.proxy) : t;
    p.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else p.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const Cr = {}, Tr = () => Object.create(Cr), $r = (e) => Object.getPrototypeOf(e) === Cr;
function Kl(e, t, n, o = !1) {
  const i = {}, r = Tr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ar(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  p.NODE_ENV !== "production" && Pr(t || {}, i, e), n ? e.props = o ? i : Hs(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Bl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Wl(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, l = I(i), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(p.NODE_ENV !== "production" && Bl(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        let m = d[a];
        if (kn(e.emitsOptions, m))
          continue;
        const x = t[m];
        if (f)
          if (H(r, m))
            x !== r[m] && (r[m] = x, h = !0);
          else {
            const M = we(m);
            i[M] = No(
              f,
              l,
              M,
              x,
              e,
              !1
            );
          }
        else
          x !== r[m] && (r[m] = x, h = !0);
      }
    }
  } else {
    Ar(e, t, i, r) && (h = !0);
    let d;
    for (const a in l)
      (!t || // for camelCase
      !H(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ye(a)) === a || !H(t, d))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[a] = No(
        f,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete i[a]);
    if (r !== l)
      for (const a in r)
        (!t || !H(t, a)) && (delete r[a], h = !0);
  }
  h && Ie(e.attrs, "set", ""), p.NODE_ENV !== "production" && Pr(t || {}, i, e);
}
function Ar(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let f in t) {
      if (Lt(f))
        continue;
      const h = t[f];
      let d;
      i && H(i, d = we(f)) ? !r || !r.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : kn(e.emitsOptions, f) || (!(f in o) || h !== o[f]) && (o[f] = h, s = !0);
    }
  if (r) {
    const f = I(n), h = l || K;
    for (let d = 0; d < r.length; d++) {
      const a = r[d];
      n[a] = No(
        i,
        f,
        a,
        h[a],
        e,
        !H(h, a)
      );
    }
  }
  return s;
}
function No(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const l = H(s, "default");
    if (l && o === void 0) {
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && A(f)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const d = rn(i);
          o = h[n] = f.call(
            null,
            t
          ), d();
        }
      } else
        o = f;
      i.ce && i.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Ye(n)) && (o = !0));
  }
  return o;
}
const ql = /* @__PURE__ */ new WeakMap();
function Mr(e, t, n = !1) {
  const o = n ? ql : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, l = [];
  let f = !1;
  if (!A(e)) {
    const d = (a) => {
      f = !0;
      const [m, x] = Mr(a, t, !0);
      X(s, m), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!r && !f)
    return W(e) && o.set(e, xt), xt;
  if (T(r))
    for (let d = 0; d < r.length; d++) {
      p.NODE_ENV !== "production" && !z(r[d]) && O("props must be strings when using array syntax.", r[d]);
      const a = we(r[d]);
      di(a) && (s[a] = K);
    }
  else if (r) {
    p.NODE_ENV !== "production" && !W(r) && O("invalid props options", r);
    for (const d in r) {
      const a = we(d);
      if (di(a)) {
        const m = r[d], x = s[a] = T(m) || A(m) ? { type: m } : X({}, m), M = x.type;
        let S = !1, te = !0;
        if (T(M))
          for (let J = 0; J < M.length; ++J) {
            const U = M[J], L = A(U) && U.name;
            if (L === "Boolean") {
              S = !0;
              break;
            } else L === "String" && (te = !1);
          }
        else
          S = A(M) && M.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = S, x[
          1
          /* shouldCastTrue */
        ] = te, (S || H(x, "default")) && l.push(a);
      }
    }
  }
  const h = [s, l];
  return W(e) && o.set(e, h), h;
}
function di(e) {
  return e[0] !== "$" && !Lt(e) ? !0 : (p.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Gl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Pr(e, t, n) {
  const o = I(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => we(s));
  for (const s in i) {
    let l = i[s];
    l != null && Jl(
      s,
      o[s],
      l,
      p.NODE_ENV !== "production" ? Fe(o) : o,
      !r.includes(s)
    );
  }
}
function Jl(e, t, n, o, i) {
  const { type: r, required: s, validator: l, skipCheck: f } = n;
  if (s && i) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !f) {
      let h = !1;
      const d = T(r) ? r : [r], a = [];
      for (let m = 0; m < d.length && !h; m++) {
        const { valid: x, expectedType: M } = Yl(t, d[m]);
        a.push(M || ""), h = x;
      }
      if (!h) {
        O(Xl(e, t, a));
        return;
      }
    }
    l && !l(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const zl = /* @__PURE__ */ Ze(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Yl(e, t) {
  let n;
  const o = Gl(t);
  if (o === "null")
    n = e === null;
  else if (zl(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = W(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Xl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Rn).join(" | ")}`;
  const i = n[0], r = Co(t), s = pi(t, i), l = pi(t, r);
  return n.length === 1 && hi(i) && !Zl(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, hi(r) && (o += `with value ${l}.`), o;
}
function pi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function hi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Zl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Bo = (e) => e === "_" || e === "_ctx" || e === "$stable", Wo = (e) => T(e) ? e.map(Oe) : [Oe(e)], Ql = (e, t, n) => {
  if (t._n)
    return t;
  const o = Vn((...i) => (p.NODE_ENV !== "production" && re && !(n === null && ee) && !(n && n.root !== re.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Wo(t(...i))), n);
  return o._c = !1, o;
}, Ir = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Bo(i)) continue;
    const r = e[i];
    if (A(r))
      t[i] = Ql(i, r, o);
    else if (r != null) {
      p.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Wo(r);
      t[i] = () => s;
    }
  }
}, Rr = (e, t) => {
  p.NODE_ENV !== "production" && !Uo(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Wo(t);
  e.slots.default = () => n;
}, yo = (e, t, n) => {
  for (const o in t)
    (n || !Bo(o)) && (e[o] = t[o]);
}, ec = (e, t, n) => {
  const o = e.slots = Tr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (yo(o, t, n), n && Nn(o, "_", i, !0)) : Ir(t, o);
  } else t && Rr(e, t);
}, tc = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = K;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? p.NODE_ENV !== "production" && je ? (yo(i, t, n), Ie(e, "set", "$slots")) : n && l === 1 ? r = !1 : yo(i, t, n) : (r = !t.$stable, Ir(t, i)), s = t;
  } else t && (Rr(e, t), s = { default: 1 });
  if (r)
    for (const l in i)
      !Bo(l) && s[l] == null && delete i[l];
};
let It, We;
function Nt(e, t) {
  e.appContext.config.performance && Tn() && We.mark(`vue-${t}-${e.uid}`), p.NODE_ENV !== "production" && al(e, t, Tn() ? We.now() : Date.now());
}
function yt(e, t) {
  if (e.appContext.config.performance && Tn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", i = `<${Bn(e, e.type)}> ${t}`;
    We.mark(o), We.measure(i, n, o), We.clearMeasures(i), We.clearMarks(n), We.clearMarks(o);
  }
  p.NODE_ENV !== "production" && dl(e, t, Tn() ? We.now() : Date.now());
}
function Tn() {
  return It !== void 0 || (typeof window < "u" && window.performance ? (It = !0, We = window.performance) : It = !1), It;
}
function nc() {
  const e = [];
  if (p.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const be = _c;
function oc(e) {
  return ic(e);
}
function ic(e, t) {
  nc();
  const n = Zt();
  n.__VUE__ = !0, p.NODE_ENV !== "production" && mr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: d,
    parentNode: a,
    nextSibling: m,
    setScopeId: x = Q,
    insertStaticContent: M
  } = e, S = (c, u, g, b = null, _ = null, E = null, w = void 0, v = null, y = p.NODE_ENV !== "production" && je ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Rt(c, u) && (b = ln(c), ot(c, _, E, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: N, ref: $, shapeFlag: D } = u;
    switch (N) {
      case nn:
        te(c, u, g, b);
        break;
      case _e:
        J(c, u, g, b);
        break;
      case gn:
        c == null ? U(u, g, b, w) : p.NODE_ENV !== "production" && L(c, u, g, w);
        break;
      case le:
        sn(
          c,
          u,
          g,
          b,
          _,
          E,
          w,
          v,
          y
        );
        break;
      default:
        D & 1 ? ne(
          c,
          u,
          g,
          b,
          _,
          E,
          w,
          v,
          y
        ) : D & 6 ? zo(
          c,
          u,
          g,
          b,
          _,
          E,
          w,
          v,
          y
        ) : D & 64 || D & 128 ? N.process(
          c,
          u,
          g,
          b,
          _,
          E,
          w,
          v,
          y,
          At
        ) : p.NODE_ENV !== "production" && O("Invalid VNode type:", N, `(${typeof N})`);
    }
    $ != null && _ ? Kt($, c && c.ref, E, u || c, !u) : $ == null && c && c.ref != null && Kt(c.ref, null, E, c, !0);
  }, te = (c, u, g, b) => {
    if (c == null)
      o(
        u.el = l(u.children),
        g,
        b
      );
    else {
      const _ = u.el = c.el;
      u.children !== c.children && h(_, u.children);
    }
  }, J = (c, u, g, b) => {
    c == null ? o(
      u.el = f(u.children || ""),
      g,
      b
    ) : u.el = c.el;
  }, U = (c, u, g, b) => {
    [c.el, c.anchor] = M(
      c.children,
      u,
      g,
      b,
      c.el,
      c.anchor
    );
  }, L = (c, u, g, b) => {
    if (u.children !== c.children) {
      const _ = m(c.anchor);
      C(c), [u.el, u.anchor] = M(
        u.children,
        g,
        _,
        b
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, Ee = ({ el: c, anchor: u }, g, b) => {
    let _;
    for (; c && c !== u; )
      _ = m(c), o(c, g, b), c = _;
    o(u, g, b);
  }, C = ({ el: c, anchor: u }) => {
    let g;
    for (; c && c !== u; )
      g = m(c), i(c), c = g;
    i(u);
  }, ne = (c, u, g, b, _, E, w, v, y) => {
    u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null ? ye(
      u,
      g,
      b,
      _,
      E,
      w,
      v,
      y
    ) : ke(
      c,
      u,
      _,
      E,
      w,
      v,
      y
    );
  }, ye = (c, u, g, b, _, E, w, v) => {
    let y, N;
    const { props: $, shapeFlag: D, transition: V, dirs: P } = c;
    if (y = c.el = s(
      c.type,
      E,
      $ && $.is,
      $
    ), D & 8 ? d(y, c.children) : D & 16 && de(
      c.children,
      y,
      null,
      b,
      _,
      to(c, E),
      w,
      v
    ), P && ct(c, null, b, "created"), se(y, c, c.scopeId, w, b), $) {
      for (const G in $)
        G !== "value" && !Lt(G) && r(y, G, null, $[G], E, b);
      "value" in $ && r(y, "value", null, $.value, E), (N = $.onVnodeBeforeMount) && Me(N, b, c);
    }
    p.NODE_ENV !== "production" && (Nn(y, "__vnode", c, !0), Nn(y, "__vueParentComponent", b, !0)), P && ct(c, null, b, "beforeMount");
    const j = rc(_, V);
    j && V.beforeEnter(y), o(y, u, g), ((N = $ && $.onVnodeMounted) || j || P) && be(() => {
      N && Me(N, b, c), j && V.enter(y), P && ct(c, null, b, "mounted");
    }, _);
  }, se = (c, u, g, b, _) => {
    if (g && x(c, g), b)
      for (let E = 0; E < b.length; E++)
        x(c, b[E]);
    if (_) {
      let E = _.subTree;
      if (p.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = qo(E.children) || E), u === E || kr(E.type) && (E.ssContent === u || E.ssFallback === u)) {
        const w = _.vnode;
        se(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          _.parent
        );
      }
    }
  }, de = (c, u, g, b, _, E, w, v, y = 0) => {
    for (let N = y; N < c.length; N++) {
      const $ = c[N] = v ? rt(c[N]) : Oe(c[N]);
      S(
        null,
        $,
        u,
        g,
        b,
        _,
        E,
        w,
        v
      );
    }
  }, ke = (c, u, g, b, _, E, w) => {
    const v = u.el = c.el;
    p.NODE_ENV !== "production" && (v.__vnode = u);
    let { patchFlag: y, dynamicChildren: N, dirs: $ } = u;
    y |= c.patchFlag & 16;
    const D = c.props || K, V = u.props || K;
    let P;
    if (g && ft(g, !1), (P = V.onVnodeBeforeUpdate) && Me(P, g, u, c), $ && ct(u, c, g, "beforeUpdate"), g && ft(g, !0), p.NODE_ENV !== "production" && je && (y = 0, w = !1, N = null), (D.innerHTML && V.innerHTML == null || D.textContent && V.textContent == null) && d(v, ""), N ? (tt(
      c.dynamicChildren,
      N,
      v,
      g,
      b,
      to(u, _),
      E
    ), p.NODE_ENV !== "production" && hn(c, u)) : w || Ce(
      c,
      u,
      v,
      null,
      g,
      b,
      to(u, _),
      E,
      !1
    ), y > 0) {
      if (y & 16)
        ve(v, D, V, g, _);
      else if (y & 2 && D.class !== V.class && r(v, "class", null, V.class, _), y & 4 && r(v, "style", D.style, V.style, _), y & 8) {
        const j = u.dynamicProps;
        for (let G = 0; G < j.length; G++) {
          const B = j[G], he = D[B], ge = V[B];
          (ge !== he || B === "value") && r(v, B, he, ge, _, g);
        }
      }
      y & 1 && c.children !== u.children && d(v, u.children);
    } else !w && N == null && ve(v, D, V, g, _);
    ((P = V.onVnodeUpdated) || $) && be(() => {
      P && Me(P, g, u, c), $ && ct(u, c, g, "updated");
    }, b);
  }, tt = (c, u, g, b, _, E, w) => {
    for (let v = 0; v < u.length; v++) {
      const y = c[v], N = u[v], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Rt(y, N) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? a(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      S(
        y,
        N,
        $,
        null,
        b,
        _,
        E,
        w,
        !0
      );
    }
  }, ve = (c, u, g, b, _) => {
    if (u !== g) {
      if (u !== K)
        for (const E in u)
          !Lt(E) && !(E in g) && r(
            c,
            E,
            u[E],
            null,
            _,
            b
          );
      for (const E in g) {
        if (Lt(E)) continue;
        const w = g[E], v = u[E];
        w !== v && E !== "value" && r(c, E, v, w, _, b);
      }
      "value" in g && r(c, "value", u.value, g.value, _);
    }
  }, sn = (c, u, g, b, _, E, w, v, y) => {
    const N = u.el = c ? c.el : l(""), $ = u.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: V, slotScopeIds: P } = u;
    p.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (je || D & 2048) && (D = 0, y = !1, V = null), P && (v = v ? v.concat(P) : P), c == null ? (o(N, g, b), o($, g, b), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      g,
      $,
      _,
      E,
      w,
      v,
      y
    )) : D > 0 && D & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (tt(
      c.dynamicChildren,
      V,
      g,
      _,
      E,
      w,
      v
    ), p.NODE_ENV !== "production" ? hn(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && hn(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Ce(
      c,
      u,
      g,
      $,
      _,
      E,
      w,
      v,
      y
    );
  }, zo = (c, u, g, b, _, E, w, v, y) => {
    u.slotScopeIds = v, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      g,
      b,
      w,
      y
    ) : nt(
      u,
      g,
      b,
      _,
      E,
      w,
      y
    ) : pe(c, u, y);
  }, nt = (c, u, g, b, _, E, w) => {
    const v = c.component = wc(
      c,
      b,
      _
    );
    if (p.NODE_ENV !== "production" && v.type.__hmrId && nl(v), p.NODE_ENV !== "production" && (an(c), Nt(v, "mount")), Uo(c) && (v.ctx.renderer = At), p.NODE_ENV !== "production" && Nt(v, "init"), Dc(v, !1, w), p.NODE_ENV !== "production" && yt(v, "init"), p.NODE_ENV !== "production" && je && (c.el = null), v.asyncDep) {
      if (_ && _.registerDep(v, F, w), !c.el) {
        const y = v.subTree = He(_e);
        J(null, y, u, g), c.placeholder = y.el;
      }
    } else
      F(
        v,
        c,
        u,
        g,
        _,
        E,
        w
      );
    p.NODE_ENV !== "production" && (dn(), yt(v, "mount"));
  }, pe = (c, u, g) => {
    const b = u.component = c.component;
    if (gc(c, u, g))
      if (b.asyncDep && !b.asyncResolved) {
        p.NODE_ENV !== "production" && an(u), R(b, u, g), p.NODE_ENV !== "production" && dn();
        return;
      } else
        b.next = u, b.update();
    else
      u.el = c.el, b.vnode = u;
  }, F = (c, u, g, b, _, E, w) => {
    const v = () => {
      if (c.isMounted) {
        let { next: D, bu: V, u: P, parent: j, vnode: G } = c;
        {
          const $e = Fr(c);
          if ($e) {
            D && (D.el = G.el, R(c, D, w)), $e.asyncDep.then(() => {
              c.isUnmounted || v();
            });
            return;
          }
        }
        let B = D, he;
        p.NODE_ENV !== "production" && an(D || c.vnode), ft(c, !1), D ? (D.el = G.el, R(c, D, w)) : D = G, V && vt(V), (he = D.props && D.props.onVnodeBeforeUpdate) && Me(he, j, D, G), ft(c, !0), p.NODE_ENV !== "production" && Nt(c, "render");
        const ge = mi(c);
        p.NODE_ENV !== "production" && yt(c, "render");
        const Te = c.subTree;
        c.subTree = ge, p.NODE_ENV !== "production" && Nt(c, "patch"), S(
          Te,
          ge,
          // parent may have changed if it's in a teleport
          a(Te.el),
          // anchor may have changed if it's in a fragment
          ln(Te),
          c,
          _,
          E
        ), p.NODE_ENV !== "production" && yt(c, "patch"), D.el = ge.el, B === null && mc(c, ge.el), P && be(P, _), (he = D.props && D.props.onVnodeUpdated) && be(
          () => Me(he, j, D, G),
          _
        ), p.NODE_ENV !== "production" && _r(c), p.NODE_ENV !== "production" && dn();
      } else {
        let D;
        const { el: V, props: P } = u, { bm: j, m: G, parent: B, root: he, type: ge } = c, Te = Vt(u);
        ft(c, !1), j && vt(j), !Te && (D = P && P.onVnodeBeforeMount) && Me(D, B, u), ft(c, !0);
        {
          he.ce && // @ts-expect-error _def is private
          he.ce._def.shadowRoot !== !1 && he.ce._injectChildStyle(ge), p.NODE_ENV !== "production" && Nt(c, "render");
          const $e = c.subTree = mi(c);
          p.NODE_ENV !== "production" && yt(c, "render"), p.NODE_ENV !== "production" && Nt(c, "patch"), S(
            null,
            $e,
            g,
            b,
            c,
            _,
            E
          ), p.NODE_ENV !== "production" && yt(c, "patch"), u.el = $e.el;
        }
        if (G && be(G, _), !Te && (D = P && P.onVnodeMounted)) {
          const $e = u;
          be(
            () => Me(D, B, $e),
            _
          );
        }
        (u.shapeFlag & 256 || B && Vt(B.vnode) && B.vnode.shapeFlag & 256) && c.a && be(c.a, _), c.isMounted = !0, p.NODE_ENV !== "production" && cl(c), u = g = b = null;
      }
    };
    c.scope.on();
    const y = c.effect = new qi(v);
    c.scope.off();
    const N = c.update = y.run.bind(y), $ = c.job = y.runIfDirty.bind(y);
    $.i = c, $.id = c.uid, y.scheduler = () => Ln($), ft(c, !0), p.NODE_ENV !== "production" && (y.onTrack = c.rtc ? (D) => vt(c.rtc, D) : void 0, y.onTrigger = c.rtg ? (D) => vt(c.rtg, D) : void 0), N();
  }, R = (c, u, g) => {
    u.component = c;
    const b = c.vnode.props;
    c.vnode = u, c.next = null, Wl(c, u.props, b, g), tc(c, u.children, g), Ve(), ii(c), Se();
  }, Ce = (c, u, g, b, _, E, w, v, y = !1) => {
    const N = c && c.children, $ = c ? c.shapeFlag : 0, D = u.children, { patchFlag: V, shapeFlag: P } = u;
    if (V > 0) {
      if (V & 128) {
        Tt(
          N,
          D,
          g,
          b,
          _,
          E,
          w,
          v,
          y
        );
        return;
      } else if (V & 256) {
        Wn(
          N,
          D,
          g,
          b,
          _,
          E,
          w,
          v,
          y
        );
        return;
      }
    }
    P & 8 ? ($ & 16 && $t(N, _, E), D !== N && d(g, D)) : $ & 16 ? P & 16 ? Tt(
      N,
      D,
      g,
      b,
      _,
      E,
      w,
      v,
      y
    ) : $t(N, _, E, !0) : ($ & 8 && d(g, ""), P & 16 && de(
      D,
      g,
      b,
      _,
      E,
      w,
      v,
      y
    ));
  }, Wn = (c, u, g, b, _, E, w, v, y) => {
    c = c || xt, u = u || xt;
    const N = c.length, $ = u.length, D = Math.min(N, $);
    let V;
    for (V = 0; V < D; V++) {
      const P = u[V] = y ? rt(u[V]) : Oe(u[V]);
      S(
        c[V],
        P,
        g,
        null,
        _,
        E,
        w,
        v,
        y
      );
    }
    N > $ ? $t(
      c,
      _,
      E,
      !0,
      !1,
      D
    ) : de(
      u,
      g,
      b,
      _,
      E,
      w,
      v,
      y,
      D
    );
  }, Tt = (c, u, g, b, _, E, w, v, y) => {
    let N = 0;
    const $ = u.length;
    let D = c.length - 1, V = $ - 1;
    for (; N <= D && N <= V; ) {
      const P = c[N], j = u[N] = y ? rt(u[N]) : Oe(u[N]);
      if (Rt(P, j))
        S(
          P,
          j,
          g,
          null,
          _,
          E,
          w,
          v,
          y
        );
      else
        break;
      N++;
    }
    for (; N <= D && N <= V; ) {
      const P = c[D], j = u[V] = y ? rt(u[V]) : Oe(u[V]);
      if (Rt(P, j))
        S(
          P,
          j,
          g,
          null,
          _,
          E,
          w,
          v,
          y
        );
      else
        break;
      D--, V--;
    }
    if (N > D) {
      if (N <= V) {
        const P = V + 1, j = P < $ ? u[P].el : b;
        for (; N <= V; )
          S(
            null,
            u[N] = y ? rt(u[N]) : Oe(u[N]),
            g,
            j,
            _,
            E,
            w,
            v,
            y
          ), N++;
      }
    } else if (N > V)
      for (; N <= D; )
        ot(c[N], _, E, !0), N++;
    else {
      const P = N, j = N, G = /* @__PURE__ */ new Map();
      for (N = j; N <= V; N++) {
        const ce = u[N] = y ? rt(u[N]) : Oe(u[N]);
        ce.key != null && (p.NODE_ENV !== "production" && G.has(ce.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(ce.key),
          "Make sure keys are unique."
        ), G.set(ce.key, N));
      }
      let B, he = 0;
      const ge = V - j + 1;
      let Te = !1, $e = 0;
      const Mt = new Array(ge);
      for (N = 0; N < ge; N++) Mt[N] = 0;
      for (N = P; N <= D; N++) {
        const ce = c[N];
        if (he >= ge) {
          ot(ce, _, E, !0);
          continue;
        }
        let Ae;
        if (ce.key != null)
          Ae = G.get(ce.key);
        else
          for (B = j; B <= V; B++)
            if (Mt[B - j] === 0 && Rt(ce, u[B])) {
              Ae = B;
              break;
            }
        Ae === void 0 ? ot(ce, _, E, !0) : (Mt[Ae - j] = N + 1, Ae >= $e ? $e = Ae : Te = !0, S(
          ce,
          u[Ae],
          g,
          null,
          _,
          E,
          w,
          v,
          y
        ), he++);
      }
      const Xo = Te ? sc(Mt) : xt;
      for (B = Xo.length - 1, N = ge - 1; N >= 0; N--) {
        const ce = j + N, Ae = u[ce], Zo = u[ce + 1], Qo = ce + 1 < $ ? (
          // #13559, fallback to el placeholder for unresolved async component
          Zo.el || Zo.placeholder
        ) : b;
        Mt[N] === 0 ? S(
          null,
          Ae,
          g,
          Qo,
          _,
          E,
          w,
          v,
          y
        ) : Te && (B < 0 || N !== Xo[B] ? Et(Ae, g, Qo, 2) : B--);
      }
    }
  }, Et = (c, u, g, b, _ = null) => {
    const { el: E, type: w, transition: v, children: y, shapeFlag: N } = c;
    if (N & 6) {
      Et(c.component.subTree, u, g, b);
      return;
    }
    if (N & 128) {
      c.suspense.move(u, g, b);
      return;
    }
    if (N & 64) {
      w.move(c, u, g, At);
      return;
    }
    if (w === le) {
      o(E, u, g);
      for (let D = 0; D < y.length; D++)
        Et(y[D], u, g, b);
      o(c.anchor, u, g);
      return;
    }
    if (w === gn) {
      Ee(c, u, g);
      return;
    }
    if (b !== 2 && N & 1 && v)
      if (b === 0)
        v.beforeEnter(E), o(E, u, g), be(() => v.enter(E), _);
      else {
        const { leave: D, delayLeave: V, afterLeave: P } = v, j = () => {
          c.ctx.isUnmounted ? i(E) : o(E, u, g);
        }, G = () => {
          E._isLeaving && E[ml](
            !0
            /* cancelled */
          ), D(E, () => {
            j(), P && P();
          });
        };
        V ? V(E, j, G) : G();
      }
    else
      o(E, u, g);
  }, ot = (c, u, g, b = !1, _ = !1) => {
    const {
      type: E,
      props: w,
      ref: v,
      children: y,
      dynamicChildren: N,
      shapeFlag: $,
      patchFlag: D,
      dirs: V,
      cacheIndex: P
    } = c;
    if (D === -2 && (_ = !1), v != null && (Ve(), Kt(v, null, g, c, !0), Se()), P != null && (u.renderCache[P] = void 0), $ & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const j = $ & 1 && V, G = !Vt(c);
    let B;
    if (G && (B = w && w.onVnodeBeforeUnmount) && Me(B, u, c), $ & 6)
      ns(c.component, g, b);
    else {
      if ($ & 128) {
        c.suspense.unmount(g, b);
        return;
      }
      j && ct(c, null, u, "beforeUnmount"), $ & 64 ? c.type.remove(
        c,
        u,
        g,
        At,
        b
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== le || D > 0 && D & 64) ? $t(
        N,
        u,
        g,
        !1,
        !0
      ) : (E === le && D & 384 || !_ && $ & 16) && $t(y, u, g), b && qn(c);
    }
    (G && (B = w && w.onVnodeUnmounted) || j) && be(() => {
      B && Me(B, u, c), j && ct(c, null, u, "unmounted");
    }, g);
  }, qn = (c) => {
    const { type: u, el: g, anchor: b, transition: _ } = c;
    if (u === le) {
      p.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((w) => {
        w.type === _e ? i(w.el) : qn(w);
      }) : ts(g, b);
      return;
    }
    if (u === gn) {
      C(c);
      return;
    }
    const E = () => {
      i(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: w, delayLeave: v } = _, y = () => w(g, E);
      v ? v(c.el, E, y) : y();
    } else
      E();
  }, ts = (c, u) => {
    let g;
    for (; c !== u; )
      g = m(c), i(c), c = g;
    i(u);
  }, ns = (c, u, g) => {
    p.NODE_ENV !== "production" && c.type.__hmrId && ol(c);
    const { bum: b, scope: _, job: E, subTree: w, um: v, m: y, a: N } = c;
    gi(y), gi(N), b && vt(b), _.stop(), E && (E.flags |= 8, ot(w, c, u, g)), v && be(v, u), be(() => {
      c.isUnmounted = !0;
    }, u), p.NODE_ENV !== "production" && ul(c);
  }, $t = (c, u, g, b = !1, _ = !1, E = 0) => {
    for (let w = E; w < c.length; w++)
      ot(c[w], u, g, b, _);
  }, ln = (c) => {
    if (c.shapeFlag & 6)
      return ln(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = m(c.anchor || c.el), g = u && u[hl];
    return g ? m(g) : u;
  };
  let Gn = !1;
  const Yo = (c, u, g) => {
    c == null ? u._vnode && ot(u._vnode, null, null, !0) : S(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      g
    ), u._vnode = c, Gn || (Gn = !0, ii(), pr(), Gn = !1);
  }, At = {
    p: S,
    um: ot,
    m: Et,
    r: qn,
    mt: nt,
    mc: de,
    pc: Ce,
    pbc: tt,
    n: ln,
    o: e
  };
  return {
    render: Yo,
    hydrate: void 0,
    createApp: Ul(Yo)
  };
}
function to({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ft({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (T(o) && T(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = rt(i[r]), l.el = s.el), !n && l.patchFlag !== -2 && hn(s, l)), l.type === nn && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = s.el), l.type === _e && !l.el && (l.el = s.el), p.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function sc(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        l = r + s >> 1, e[n[l]] < h ? r = l + 1 : s = l;
      h < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function Fr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fr(t);
}
function gi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const lc = Symbol.for("v-scx"), cc = () => {
  {
    const e = Bt(lc);
    return e || p.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function no(e, t, n) {
  return p.NODE_ENV !== "production" && !A(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), jr(e, t, n);
}
function jr(e, t, n = K) {
  const { immediate: o, deep: i, flush: r, once: s } = n;
  p.NODE_ENV !== "production" && !t && (o !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = X({}, n);
  p.NODE_ENV !== "production" && (l.onWarn = O);
  const f = t && o || !t && r !== "post";
  let h;
  if (Yt) {
    if (r === "sync") {
      const x = cc();
      h = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!f) {
      const x = () => {
      };
      return x.stop = Q, x.resume = Q, x.pause = Q, x;
    }
  }
  const d = re;
  l.call = (x, M, S) => Ue(x, d, M, S);
  let a = !1;
  r === "post" ? l.scheduler = (x) => {
    be(x, d && d.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (x, M) => {
    M ? x() : Ln(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), a && (x.flags |= 2, d && (x.id = d.uid, x.i = d));
  };
  const m = Gs(e, t, l);
  return Yt && (h ? h.push(m) : f && m()), m;
}
function fc(e, t, n) {
  const o = this.proxy, i = z(e) ? e.includes(".") ? Hr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  A(t) ? r = t : (r = t.handler, n = t);
  const s = rn(this), l = jr(i, r.bind(o), n);
  return s(), l;
}
function Hr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const uc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${Ye(t)}Modifiers`];
function ac(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || K;
  if (p.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [a]
    } = e;
    if (d)
      if (!(t in d))
        (!a || !(ut(we(t)) in a)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ut(we(t))}" prop.`
        );
      else {
        const m = d[t];
        A(m) && (m(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && uc(o, t.slice(7));
  if (s && (s.trim && (i = n.map((d) => z(d) ? d.trim() : d)), s.number && (i = n.map(so))), p.NODE_ENV !== "production" && pl(e, t, i), p.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[ut(d)] && O(
      `Event "${d}" is emitted in component ${Bn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ye(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = o[l = ut(t)] || // also try camelCase event handler (#2249)
  o[l = ut(we(t))];
  !f && r && (f = o[l = ut(Ye(t))]), f && Ue(
    f,
    e,
    6,
    i
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ue(
      h,
      e,
      6,
      i
    );
  }
}
const dc = /* @__PURE__ */ new WeakMap();
function Lr(e, t, n = !1) {
  const o = n ? dc : t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, l = !1;
  if (!A(e)) {
    const f = (h) => {
      const d = Lr(h, t, !0);
      d && (l = !0, X(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !l ? (W(e) && o.set(e, null), null) : (T(r) ? r.forEach((f) => s[f] = null) : X(s, r), W(e) && o.set(e, s), s);
}
function kn(e, t) {
  return !e || !Xt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Ye(t)) || H(e, t));
}
let vo = !1;
function $n() {
  vo = !0;
}
function mi(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: l,
    emit: f,
    render: h,
    renderCache: d,
    props: a,
    data: m,
    setupState: x,
    ctx: M,
    inheritAttrs: S
  } = e, te = Dn(e);
  let J, U;
  p.NODE_ENV !== "production" && (vo = !1);
  try {
    if (n.shapeFlag & 4) {
      const C = i || o, ne = p.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(C, {
        get(ye, se, de) {
          return O(
            `Property '${String(
              se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ye, se, de);
        }
      }) : C;
      J = Oe(
        h.call(
          ne,
          C,
          d,
          p.NODE_ENV !== "production" ? Fe(a) : a,
          x,
          m,
          M
        )
      ), U = l;
    } else {
      const C = t;
      p.NODE_ENV !== "production" && l === a && $n(), J = Oe(
        C.length > 1 ? C(
          p.NODE_ENV !== "production" ? Fe(a) : a,
          p.NODE_ENV !== "production" ? {
            get attrs() {
              return $n(), Fe(l);
            },
            slots: s,
            emit: f
          } : { attrs: l, slots: s, emit: f }
        ) : C(
          p.NODE_ENV !== "production" ? Fe(a) : a,
          null
        )
      ), U = t.props ? l : pc(l);
    }
  } catch (C) {
    Wt.length = 0, en(C, e, 1), J = He(_e);
  }
  let L = J, Ee;
  if (p.NODE_ENV !== "production" && J.patchFlag > 0 && J.patchFlag & 2048 && ([L, Ee] = Ur(J)), U && S !== !1) {
    const C = Object.keys(U), { shapeFlag: ne } = L;
    if (C.length) {
      if (ne & 7)
        r && C.some(bn) && (U = hc(
          U,
          r
        )), L = lt(L, U, !1, !0);
      else if (p.NODE_ENV !== "production" && !vo && L.type !== _e) {
        const ye = Object.keys(l), se = [], de = [];
        for (let ke = 0, tt = ye.length; ke < tt; ke++) {
          const ve = ye[ke];
          Xt(ve) ? bn(ve) || se.push(ve[2].toLowerCase() + ve.slice(3)) : de.push(ve);
        }
        de.length && O(
          `Extraneous non-props attributes (${de.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), se.length && O(
          `Extraneous non-emits event listeners (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (p.NODE_ENV !== "production" && !_i(L) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = lt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (p.NODE_ENV !== "production" && !_i(L) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Lo(L, n.transition)), p.NODE_ENV !== "production" && Ee ? Ee(L) : J = L, Dn(te), J;
}
const Ur = (e) => {
  const t = e.children, n = e.dynamicChildren, o = qo(t, !1);
  if (o) {
    if (p.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Ur(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (l) => {
    t[i] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Oe(o), s];
};
function qo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (on(i)) {
      if (i.type !== _e || i.children === "v-if") {
        if (n)
          return;
        if (n = i, p.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return qo(n.children);
      }
    } else
      return;
  }
  return n;
}
const pc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, hc = (e, t) => {
  const n = {};
  for (const o in e)
    (!bn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, _i = (e) => e.shapeFlag & 7 || e.type === _e;
function gc(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: l, patchFlag: f } = t, h = r.emitsOptions;
  if (p.NODE_ENV !== "production" && (i || l) && je || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? Ei(o, s, h) : !!s;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        const m = d[a];
        if (s[m] !== o[m] && !kn(h, m))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? Ei(o, s, h) : !0 : !!s;
  return !1;
}
function Ei(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !kn(n, r))
      return !0;
  }
  return !1;
}
function mc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const kr = (e) => e.__isSuspense;
function _c(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : dr(e);
}
const le = Symbol.for("v-fgt"), nn = Symbol.for("v-txt"), _e = Symbol.for("v-cmt"), gn = Symbol.for("v-stc"), Wt = [];
let Ne = null;
function oe(e = !1) {
  Wt.push(Ne = e ? null : []);
}
function Ec() {
  Wt.pop(), Ne = Wt[Wt.length - 1] || null;
}
let zt = 1;
function bi(e, t = !1) {
  zt += e, e < 0 && Ne && t && (Ne.hasOnce = !0);
}
function Kr(e) {
  return e.dynamicChildren = zt > 0 ? Ne || xt : null, Ec(), zt > 0 && Ne && Ne.push(e), e;
}
function Ge(e, t, n, o, i, r) {
  return Kr(
    Go(
      e,
      t,
      n,
      o,
      i,
      r,
      !0
    )
  );
}
function Je(e, t, n, o, i) {
  return Kr(
    He(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function on(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Rt(e, t) {
  if (p.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = pn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const bc = (...e) => Wr(
  ...e
), Br = ({ key: e }) => e ?? null, mn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || Y(e) || A(e) ? { i: ee, r: e, k: t, f: !!n } : e : null);
function Go(e, t = null, n = null, o = 0, i = null, r = e === le ? 0 : 1, s = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Br(t),
    ref: t && mn(t),
    scopeId: br,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ee
  };
  return l ? (Jo(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= z(n) ? 8 : 16), p.NODE_ENV !== "production" && f.key !== f.key && O("VNode created with invalid key (NaN). VNode type:", f.type), zt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ne && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Ne.push(f), f;
}
const He = p.NODE_ENV !== "production" ? bc : Wr;
function Wr(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === Tl) && (p.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = _e), on(e)) {
    const l = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Jo(l, n), zt > 0 && !r && Ne && (l.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = l : Ne.push(l)), l.patchFlag = -2, l;
  }
  if (Xr(e) && (e = e.__vccOpts), t) {
    t = Nc(t);
    let { class: l, style: f } = t;
    l && !z(l) && (t.class = Qt(l)), W(f) && (yn(f) && !T(f) && (f = X({}, f)), t.style = $o(f));
  }
  const s = z(e) ? 1 : kr(e) ? 128 : gl(e) ? 64 : W(e) ? 4 : A(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && s & 4 && yn(e) && (e = I(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Go(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function Nc(e) {
  return e ? yn(e) || $r(e) ? X({}, e) : e : null;
}
function lt(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: l, transition: f } = e, h = t ? yc(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Br(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(mn(t)) : [r, mn(t)] : mn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && s === -1 && T(l) ? l.map(qr) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== le ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && Lo(
    d,
    f.clone(d)
  ), d;
}
function qr(e) {
  const t = lt(e);
  return T(e.children) && (t.children = e.children.map(qr)), t;
}
function Oo(e = " ", t = 0) {
  return He(nn, null, e, t);
}
function _n(e = "", t = !1) {
  return t ? (oe(), Je(_e, null, e)) : He(_e, null, e);
}
function Oe(e) {
  return e == null || typeof e == "boolean" ? He(_e) : T(e) ? He(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : on(e) ? rt(e) : He(nn, null, String(e));
}
function rt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
}
function Jo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Jo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !$r(t) ? t._ctx = ee : i === 3 && ee && (ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else A(t) ? (t = { default: t, _ctx: ee }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Oo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function yc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = Qt([t.class, o.class]));
      else if (i === "style")
        t.style = $o([t.style, o.style]);
      else if (Xt(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(T(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Me(e, t, n, o = null) {
  Ue(e, t, 7, [
    n,
    o
  ]);
}
const vc = Sr();
let Oc = 0;
function wc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || vc, r = {
    uid: Oc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new bs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Mr(o, i),
    emitsOptions: Lr(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return p.NODE_ENV !== "production" ? r.ctx = $l(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ac.bind(null, r), e.ce && e.ce(r), r;
}
let re = null;
const Gr = () => re || ee;
let An, wo;
{
  const e = Zt(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  An = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => re = n
  ), wo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yt = n
  );
}
const rn = (e) => {
  const t = re;
  return An(e), e.scope.on(), () => {
    e.scope.off(), An(t);
  };
}, Ni = () => {
  re && re.scope.off(), An(null);
}, xc = /* @__PURE__ */ Ze("slot,component");
function xo(e, { isNativeTag: t }) {
  (xc(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Jr(e) {
  return e.vnode.shapeFlag & 4;
}
let Yt = !1;
function Dc(e, t = !1, n = !1) {
  t && wo(t);
  const { props: o, children: i } = e.vnode, r = Jr(e);
  Kl(e, o, r, t), ec(e, i, n || t);
  const s = r ? Vc(e, t) : void 0;
  return t && wo(!1), s;
}
function Vc(e, t) {
  var n;
  const o = e.type;
  if (p.NODE_ENV !== "production") {
    if (o.name && xo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        xo(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        Nr(r[s]);
    }
    o.compilerOptions && Sc() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xr), p.NODE_ENV !== "production" && Al(e);
  const { setup: i } = o;
  if (i) {
    Ve();
    const r = e.setupContext = i.length > 1 ? Tc(e) : null, s = rn(e), l = Ct(
      i,
      e,
      0,
      [
        p.NODE_ENV !== "production" ? Fe(e.props) : e.props,
        r
      ]
    ), f = So(l);
    if (Se(), s(), (f || e.sp) && !Vt(e) && yr(e), f) {
      if (l.then(Ni, Ni), t)
        return l.then((h) => {
          yi(e, h, t);
        }).catch((h) => {
          en(h, e, 0);
        });
      if (e.asyncDep = l, p.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        O(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      yi(e, l, t);
  } else
    zr(e, t);
}
function yi(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? (p.NODE_ENV !== "production" && on(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), p.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = cr(t), p.NODE_ENV !== "production" && Ml(e)) : p.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), zr(e, n);
}
const Sc = () => !0;
function zr(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Q);
  {
    const i = rn(e);
    Ve();
    try {
      Il(e);
    } finally {
      Se(), i();
    }
  }
  p.NODE_ENV !== "production" && !o.render && e.render === Q && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", o));
}
const vi = p.NODE_ENV !== "production" ? {
  get(e, t) {
    return $n(), Z(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Z(e, "get", ""), e[t];
  }
};
function Cc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Z(e, "get", "$slots"), t[n];
    }
  });
}
function Tc(e) {
  const t = (n) => {
    if (p.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : Y(n) && (o = "ref")), o !== "object" && O(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (p.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, vi));
      },
      get slots() {
        return o || (o = Cc(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, vi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Kn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(cr(Ls(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in mt)
        return mt[n](e);
    },
    has(t, n) {
      return n in t || n in mt;
    }
  })) : e.proxy;
}
const $c = /(?:^|[-_])\w/g, Ac = (e) => e.replace($c, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Yr(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Bn(e, t, n = !1) {
  let o = Yr(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? Ac(o) : n ? "App" : "Anonymous";
}
function Xr(e) {
  return A(e) && "__vccOpts" in e;
}
const Mc = (e, t) => {
  const n = Ws(e, t, Yt);
  if (p.NODE_ENV !== "production") {
    const o = Gr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Pc() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!W(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (Y(a)) {
        Ve();
        const m = a.value;
        return Se(), [
          "div",
          {},
          ["span", e, d(a)],
          "<",
          l(m),
          ">"
        ];
      } else {
        if (ht(a))
          return [
            "div",
            {},
            ["span", e, ae(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${Le(a) ? " (readonly)" : ""}`
          ];
        if (Le(a))
          return [
            "div",
            {},
            ["span", e, ae(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const m = [];
    a.type.props && a.props && m.push(s("props", I(a.props))), a.setupState !== K && m.push(s("setup", a.setupState)), a.data !== K && m.push(s("data", I(a.data)));
    const x = f(a, "computed");
    x && m.push(s("computed", x));
    const M = f(a, "inject");
    return M && m.push(s("injected", M)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), m;
  }
  function s(a, m) {
    return m = X({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          l(m[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, m = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : W(a) ? ["object", { object: m ? I(a) : a }] : ["span", n, String(a)];
  }
  function f(a, m) {
    const x = a.type;
    if (A(x))
      return;
    const M = {};
    for (const S in a.ctx)
      h(x, S, m) && (M[S] = a.ctx[S]);
    return M;
  }
  function h(a, m, x) {
    const M = a[x];
    if (T(M) && M.includes(m) || W(M) && m in M || a.extends && h(a.extends, m, x) || a.mixins && a.mixins.some((S) => h(S, m, x)))
      return !0;
  }
  function d(a) {
    return ae(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Oi = "3.5.22", ze = p.NODE_ENV !== "production" ? O : Q;
var Xe = {};
let Do;
const wi = typeof window < "u" && window.trustedTypes;
if (wi)
  try {
    Do = /* @__PURE__ */ wi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Xe.NODE_ENV !== "production" && ze(`Error creating trusted types policy: ${e}`);
  }
const Zr = Do ? (e) => Do.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Rc = "http://www.w3.org/1998/Math/MathML", Be = typeof document < "u" ? document : null, xi = Be && /* @__PURE__ */ Be.createElement("template"), Fc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Be.createElementNS(Ic, e) : t === "mathml" ? Be.createElementNS(Rc, e) : n ? Be.createElement(e, { is: n }) : Be.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Be.createTextNode(e),
  createComment: (e) => Be.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Be.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      xi.innerHTML = Zr(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = xi.content;
      if (o === "svg" || o === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, jc = Symbol("_vtc");
function Hc(e, t, n) {
  const o = e[jc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Mn = Symbol("_vod"), Qr = Symbol("_vsh"), Df = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Mn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ft(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Ft(e, !0), o.enter(e)) : o.leave(e, () => {
      Ft(e, !1);
    }) : Ft(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ft(e, t);
  }
};
function Ft(e, t) {
  e.style.display = t ? e[Mn] : "none", e[Qr] = !t;
}
const Lc = Symbol(Xe.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Uc = /(?:^|;)\s*display\s*:/;
function kc(e, t, n) {
  const o = e.style, i = z(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (z(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && En(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && En(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), En(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[Lc];
      s && (n += ";" + s), o.cssText = n, r = Uc.test(n);
    }
  } else t && e.removeAttribute("style");
  Mn in e && (e[Mn] = r ? o.display : "", e[Qr] && (o.display = "none"));
}
const Kc = /[^\\];\s*$/, Di = /\s*!important$/;
function En(e, t, n) {
  if (T(n))
    n.forEach((o) => En(e, t, o));
  else if (n == null && (n = ""), Xe.NODE_ENV !== "production" && Kc.test(n) && ze(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Bc(e, t);
    Di.test(n) ? e.setProperty(
      Ye(o),
      n.replace(Di, ""),
      "important"
    ) : e[o] = n;
  }
}
const Vi = ["Webkit", "Moz", "ms"], oo = {};
function Bc(e, t) {
  const n = oo[t];
  if (n)
    return n;
  let o = we(t);
  if (o !== "filter" && o in e)
    return oo[t] = o;
  o = Rn(o);
  for (let i = 0; i < Vi.length; i++) {
    const r = Vi[i] + o;
    if (r in e)
      return oo[t] = r;
  }
  return t;
}
const Si = "http://www.w3.org/1999/xlink";
function Ci(e, t, n, o, i, r = Es(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Si, t.slice(6, t.length)) : e.setAttributeNS(Si, t, n) : n == null || r && !Ki(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Qe(n) ? String(n) : n
  );
}
function Ti(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Zr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ki(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    Xe.NODE_ENV !== "production" && !s && ze(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(i || t);
}
function wt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Wc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const $i = Symbol("_vei");
function qc(e, t, n, o, i = null) {
  const r = e[$i] || (e[$i] = {}), s = r[t];
  if (o && s)
    s.value = Xe.NODE_ENV !== "production" ? Mi(o, t) : o;
  else {
    const [l, f] = Gc(t);
    if (o) {
      const h = r[t] = Yc(
        Xe.NODE_ENV !== "production" ? Mi(o, t) : o,
        i
      );
      wt(e, l, h, f);
    } else s && (Wc(e, l, s, f), r[t] = void 0);
  }
}
const Ai = /(?:Once|Passive|Capture)$/;
function Gc(e) {
  let t;
  if (Ai.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ai); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ye(e.slice(2)), t];
}
let io = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), zc = () => io || (Jc.then(() => io = 0), io = Date.now());
function Yc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ue(
      Xc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = zc(), n;
}
function Mi(e, t) {
  return A(e) || T(e) ? e : (ze(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Q);
}
function Xc(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Pi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? Hc(e, o, s) : t === "style" ? kc(e, n, o) : Xt(t) ? bn(t) || qc(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, o, s)) ? (Ti(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ci(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !z(o)) ? Ti(e, we(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ci(e, t, o, s));
};
function Qc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Pi(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Pi(t) && z(n) ? !1 : t in e;
}
const Ii = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return T(t) ? (n) => vt(t, n) : t;
};
function ef(e) {
  e.target.composing = !0;
}
function Ri(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ro = Symbol("_assign"), Vf = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
    e[ro] = Ii(i);
    const r = o || i.props && i.props.type === "number";
    wt(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = so(l)), e[ro](l);
    }), n && wt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (wt(e, "compositionstart", ef), wt(e, "compositionend", Ri), wt(e, "change", Ri));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: i, number: r } }, s) {
    if (e[ro] = Ii(s), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? so(e.value) : e.value, f = t ?? "";
    l !== f && (document.activeElement === e && e.type !== "range" && (o && t === n || i && e.value.trim() === f) || (e.value = f));
  }
}, tf = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Sf = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = ((i) => {
    if (!("key" in i))
      return;
    const r = Ye(i.key);
    if (t.some(
      (s) => s === r || tf[s] === r
    ))
      return e(i);
  }));
}, nf = /* @__PURE__ */ X({ patchProp: Zc }, Fc);
let Fi;
function of() {
  return Fi || (Fi = oc(nf));
}
const Cf = ((...e) => {
  const t = of().createApp(...e);
  Xe.NODE_ENV !== "production" && (sf(t), lf(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = cf(o);
    if (!i) return;
    const r = t._component;
    !A(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, rf(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function rf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function sf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => hs(t) || gs(t) || ms(t),
    writable: !1
  });
}
function lf(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ze(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ze(o), n;
      },
      set() {
        ze(o);
      }
    });
  }
}
function cf(e) {
  if (z(e)) {
    const t = document.querySelector(e);
    return Xe.NODE_ENV !== "production" && !t && ze(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Xe.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ze(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var ff = {};
function uf() {
  Pc();
}
ff.NODE_ENV !== "production" && uf();
class Tf {
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
    }, this.list = new Set(Object.keys(this.type)), this.options = [], this.list.forEach((n) => this.options.push(
      { type: n, content: `Título ${n.charAt(1)}` }
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
const af = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, df = {
  __name: "Title",
  props: { size: String },
  setup(e) {
    return (t, n) => (oe(), Ge("h6", {
      class: Qt(["mb-3 min-h-2 font-bold", e.size])
    }, [
      ko(t.$slots, "default")
    ], 2));
  }
}, pf = { class: "w-full mb-3" }, hf = ["src", "alt"], gf = {
  __name: "Image",
  props: { src: String, alt: String },
  setup(e) {
    return (t, n) => (oe(), Ge("div", pf, [
      Go("img", {
        src: e.src,
        alt: e.alt
      }, null, 8, hf)
    ]));
  }
}, mf = {}, _f = { class: "mb-3 min-h-2" };
function Ef(e, t) {
  return oe(), Ge("p", _f, [
    ko(e.$slots, "default")
  ]);
}
const bf = /* @__PURE__ */ af(mf, [["render", Ef]]), es = {
  __name: "Section",
  props: { section: Object },
  setup(e) {
    const t = Bt("titles");
    return (n, o) => (oe(), Ge("div", {
      class: Qt(`w-full ${e.section.type}-section`)
    }, [
      ho(t).list.has(e.section.type) ? (oe(), Je(df, {
        key: 0,
        size: ho(t).type[e.section.type]
      }, {
        default: Vn(() => [
          Oo(lo(e.section.content), 1)
        ]),
        _: 1
      }, 8, ["size"])) : _n("", !0),
      e.section.type == "p" ? (oe(), Je(bf, { key: 1 }, {
        default: Vn(() => [
          Oo(lo(e.section.content), 1)
        ]),
        _: 1
      })) : _n("", !0),
      e.section.type == "img" ? (oe(), Je(gf, {
        key: 2,
        src: e.section.content
      }, null, 8, ["src"])) : _n("", !0),
      ko(n.$slots, "default")
    ], 2));
  }
}, Nf = { class: "w-full flex flex-col md:flex-row space-x-3" }, yf = { class: "w-full md:w-1/2 mb-3" }, vf = /* @__PURE__ */ _l({
  __name: "Columns",
  props: { content: Array },
  setup(e) {
    return (t, n) => (oe(), Ge("div", Nf, [
      (oe(!0), Ge(le, null, mo(e.content, (o) => (oe(), Ge("div", yf, [
        (oe(!0), Ge(le, null, mo(o, (i) => (oe(), Je(es, { section: i }, null, 8, ["section"]))), 256))
      ]))), 256))
    ]));
  }
}), $f = {
  __name: "Page",
  props: { sections: Array },
  setup(e) {
    return (t, n) => (oe(!0), Ge(le, null, mo(e.sections, (o) => (oe(), Je(es, { section: o }, {
      default: Vn(() => [
        o.type == "col" ? (oe(), Je(vf, {
          key: 0,
          content: o.content
        }, null, 8, ["content"])) : _n("", !0)
      ]),
      _: 2
    }, 1032, ["section"]))), 256));
  }
};
export {
  gf as A,
  $f as B,
  Cf as C,
  le as F,
  bf as P,
  Tf as T,
  af as _,
  Je as a,
  Mc as b,
  Ge as c,
  _l as d,
  _n as e,
  Go as f,
  wf as g,
  xf as h,
  Bt as i,
  He as j,
  mo as k,
  df as l,
  yc as m,
  Oo as n,
  oe as o,
  kl as p,
  no as q,
  ko as r,
  el as s,
  lo as t,
  ho as u,
  Df as v,
  Vn as w,
  Qt as x,
  Sf as y,
  Vf as z
};
