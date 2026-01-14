/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ze(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const k = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, yt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], X = () => {
}, Rs = () => !1, Jt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), mn = (e) => e.startsWith("onUpdate:"), z = Object.assign, wo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Qr = Object.prototype.hasOwnProperty, j = (e, t) => Qr.call(e, t), C = Array.isArray, ft = (e) => $n(e) === "[object Map]", Fs = (e) => $n(e) === "[object Set]", $ = (e) => typeof e == "function", G = (e) => typeof e == "string", Ye = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", xo = (e) => (B(e) || $(e)) && $(e.then) && $(e.catch), js = Object.prototype.toString, $n = (e) => js.call(e), Do = (e) => $n(e).slice(8, -1), Hs = (e) => $n(e) === "[object Object]", Vo = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ft = /* @__PURE__ */ ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ei = /* @__PURE__ */ ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), An = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ti = /-\w/g, Oe = An(
  (e) => e.replace(ti, (t) => t.slice(1).toUpperCase())
), ni = /\B([A-Z])/g, Je = An(
  (e) => e.replace(ni, "-$1").toLowerCase()
), Pn = An((e) => e.charAt(0).toUpperCase() + e.slice(1)), ct = An(
  (e) => e ? `on${Pn(e)}` : ""
), ot = (e, t) => !Object.is(e, t), Et = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, _n = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, oo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Zo;
const zt = () => Zo || (Zo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function So(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = G(o) ? ii(o) : So(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (G(e) || B(e))
    return e;
}
const oi = /;(?![^(]*\))/g, si = /:([^]+)/, ri = /\/\*[^]*?\*\//g;
function ii(e) {
  const t = {};
  return e.replace(ri, "").split(oi).forEach((n) => {
    if (n) {
      const o = n.split(si);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Yt(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = Yt(e[n]);
      o && (t += o + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ci = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", li = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", fi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ui = /* @__PURE__ */ ze(ci), ai = /* @__PURE__ */ ze(li), pi = /* @__PURE__ */ ze(fi), di = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", hi = /* @__PURE__ */ ze(di);
function Ls(e) {
  return !!e || e === "";
}
const Us = (e) => !!(e && e.__v_isRef === !0), so = (e) => G(e) ? e : e == null ? "" : C(e) || B(e) && (e.toString === js || !$(e.toString)) ? Us(e) ? so(e.value) : JSON.stringify(e, ks, 2) : String(e), ks = (e, t) => Us(t) ? ks(e, t.value) : ft(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[Wn(o, r) + " =>"] = s, n),
    {}
  )
} : Fs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Wn(n))
} : Ye(t) ? Wn(t) : B(t) && !C(t) && !Hs(t) ? String(t) : t, Wn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ye(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let he;
class gi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(
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
      const n = he;
      try {
        return he = this, t();
      } finally {
        he = n;
      }
    } else process.env.NODE_ENV !== "production" && xe("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = he, he = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (he = this.prevScope, this.prevScope = void 0);
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
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function mi() {
  return he;
}
let U;
const qn = /* @__PURE__ */ new WeakSet();
class Ks {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && he.active && he.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qn.has(this) && (qn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ws(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Qo(this), qs(this);
    const t = U, n = we;
    U = this, we = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && U !== this && xe(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Gs(this), U = t, we = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $o(t);
      this.deps = this.depsTail = void 0, Qo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ro(this) && this.run();
  }
  get dirty() {
    return ro(this);
  }
}
let Bs = 0, jt, Ht;
function Ws(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ht, Ht = e;
    return;
  }
  e.next = jt, jt = e;
}
function Co() {
  Bs++;
}
function To() {
  if (--Bs > 0)
    return;
  if (Ht) {
    let t = Ht;
    for (Ht = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jt; ) {
    let t = jt;
    for (jt = void 0; t; ) {
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
function qs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Gs(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), $o(o), _i(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function ro(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Js(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Js(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Kt) || (e.globalVersion = Kt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ro(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, o = we;
  U = e, we = !0;
  try {
    qs(e);
    const s = e.fn(e._value);
    (t.version === 0 || ot(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    U = n, we = o, Gs(e), e.flags &= -3;
  }
}
function $o(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      $o(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function _i(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let we = !0;
const zs = [];
function De() {
  zs.push(we), we = !1;
}
function Ve() {
  const e = zs.pop();
  we = e === void 0 ? !0 : e;
}
function Qo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let Kt = 0;
class vi {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ao {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!U || !we || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new vi(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Ys(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = o);
    }
    return process.env.NODE_ENV !== "production" && U.onTrack && U.onTrack(
      z(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Kt++, this.notify(t);
  }
  notify(t) {
    Co();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            z(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      To();
    }
  }
}
function Ys(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Ys(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const io = /* @__PURE__ */ new WeakMap(), ut = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), co = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Bt = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Y(e, t, n) {
  if (we && U) {
    let o = io.get(e);
    o || io.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new Ao()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function Me(e, t, n, o, s, r) {
  const i = io.get(e);
  if (!i) {
    Kt++;
    return;
  }
  const c = (f) => {
    f && (process.env.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : f.trigger());
  };
  if (Co(), t === "clear")
    i.forEach(c);
  else {
    const f = C(e), d = f && Vo(n);
    if (f && n === "length") {
      const p = Number(o);
      i.forEach((a, g) => {
        (g === "length" || g === Bt || !Ye(g) && g >= p) && c(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && c(i.get(n)), d && c(i.get(Bt)), t) {
        case "add":
          f ? d && c(i.get("length")) : (c(i.get(ut)), ft(e) && c(i.get(co)));
          break;
        case "delete":
          f || (c(i.get(ut)), ft(e) && c(i.get(co)));
          break;
        case "set":
          ft(e) && c(i.get(ut));
          break;
      }
  }
  To();
}
function mt(e) {
  const t = M(e);
  return t === e ? t : (Y(t, "iterate", Bt), fe(e) ? t : t.map(ne));
}
function Mn(e) {
  return Y(e = M(e), "iterate", Bt), e;
}
const Ei = {
  __proto__: null,
  [Symbol.iterator]() {
    return Gn(this, Symbol.iterator, ne);
  },
  concat(...e) {
    return mt(this).concat(
      ...e.map((t) => C(t) ? mt(t) : t)
    );
  },
  entries() {
    return Gn(this, "entries", (e) => (e[1] = ne(e[1]), e));
  },
  every(e, t) {
    return Ue(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ue(this, "filter", e, t, (n) => n.map(ne), arguments);
  },
  find(e, t) {
    return Ue(this, "find", e, t, ne, arguments);
  },
  findIndex(e, t) {
    return Ue(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ue(this, "findLast", e, t, ne, arguments);
  },
  findLastIndex(e, t) {
    return Ue(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ue(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Jn(this, "includes", e);
  },
  indexOf(...e) {
    return Jn(this, "indexOf", e);
  },
  join(e) {
    return mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ue(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return $t(this, "pop");
  },
  push(...e) {
    return $t(this, "push", e);
  },
  reduce(e, ...t) {
    return es(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return es(this, "reduceRight", e, t);
  },
  shift() {
    return $t(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ue(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return $t(this, "splice", e);
  },
  toReversed() {
    return mt(this).toReversed();
  },
  toSorted(e) {
    return mt(this).toSorted(e);
  },
  toSpliced(...e) {
    return mt(this).toSpliced(...e);
  },
  unshift(...e) {
    return $t(this, "unshift", e);
  },
  values() {
    return Gn(this, "values", ne);
  }
};
function Gn(e, t, n) {
  const o = Mn(e), s = o[t]();
  return o !== e && !fe(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n(r.value)), r;
  }), s;
}
const bi = Array.prototype;
function Ue(e, t, n, o, s, r) {
  const i = Mn(e), c = i !== e && !fe(e), f = i[t];
  if (f !== bi[t]) {
    const a = f.apply(e, r);
    return c ? ne(a) : a;
  }
  let d = n;
  i !== e && (c ? d = function(a, g) {
    return n.call(this, ne(a), g, e);
  } : n.length > 2 && (d = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const p = f.call(i, d, o);
  return c && s ? s(p) : p;
}
function es(e, t, n, o) {
  const s = Mn(e);
  let r = n;
  return s !== e && (fe(e) ? n.length > 3 && (r = function(i, c, f) {
    return n.call(this, i, c, f, e);
  }) : r = function(i, c, f) {
    return n.call(this, i, ne(c), f, e);
  }), s[t](r, ...o);
}
function Jn(e, t, n) {
  const o = M(e);
  Y(o, "iterate", Bt);
  const s = o[t](...n);
  return (s === -1 || s === !1) && vn(n[0]) ? (n[0] = M(n[0]), o[t](...n)) : s;
}
function $t(e, t, n = []) {
  De(), Co();
  const o = M(e)[t].apply(e, n);
  return To(), Ve(), o;
}
const Ni = /* @__PURE__ */ ze("__proto__,__v_isRef,__isVue"), Xs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ye)
);
function yi(e) {
  Ye(e) || (e = String(e));
  const t = M(this);
  return Y(t, "has", e), t.hasOwnProperty(e);
}
class Zs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? sr : or : r ? nr : tr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = C(t);
    if (!s) {
      let f;
      if (i && (f = Ei[n]))
        return f;
      if (n === "hasOwnProperty")
        return yi;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      J(t) ? t : o
    );
    if ((Ye(n) ? Xs.has(n) : Ni(n)) || (s || Y(t, "get", n), r))
      return c;
    if (J(c)) {
      const f = i && Vo(n) ? c : c.value;
      return s && B(f) ? fo(f) : f;
    }
    return B(c) ? s ? fo(c) : Po(c) : c;
  }
}
class Qs extends Zs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const f = je(r);
      if (!fe(o) && !je(o) && (r = M(r), o = M(o)), !C(t) && J(r) && !J(o))
        return f ? (process.env.NODE_ENV !== "production" && xe(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = o, !0);
    }
    const i = C(t) && Vo(n) ? Number(n) < t.length : j(t, n), c = Reflect.set(
      t,
      n,
      o,
      J(t) ? t : s
    );
    return t === M(s) && (i ? ot(o, r) && Me(t, "set", n, o, r) : Me(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = j(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Me(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Ye(n) || !Xs.has(n)) && Y(t, "has", n), o;
  }
  ownKeys(t) {
    return Y(
      t,
      "iterate",
      C(t) ? "length" : ut
    ), Reflect.ownKeys(t);
  }
}
class er extends Zs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && xe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && xe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Oi = /* @__PURE__ */ new Qs(), wi = /* @__PURE__ */ new er(), xi = /* @__PURE__ */ new Qs(!0), Di = /* @__PURE__ */ new er(!0), lo = (e) => e, sn = (e) => Reflect.getPrototypeOf(e);
function Vi(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = M(s), i = ft(r), c = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, d = s[e](...o), p = n ? lo : t ? En : ne;
    return !t && Y(
      r,
      "iterate",
      f ? co : ut
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = d.next();
        return g ? { value: a, done: g } : {
          value: c ? [p(a[0]), p(a[1])] : p(a),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function rn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      xe(
        `${Pn(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Si(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = M(r), c = M(s);
      e || (ot(s, c) && Y(i, "get", s), Y(i, "get", c));
      const { has: f } = sn(i), d = t ? lo : e ? En : ne;
      if (f.call(i, s))
        return d(r.get(s));
      if (f.call(i, c))
        return d(r.get(c));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Y(M(s), "iterate", ut), s.size;
    },
    has(s) {
      const r = this.__v_raw, i = M(r), c = M(s);
      return e || (ot(s, c) && Y(i, "has", s), Y(i, "has", c)), s === c ? r.has(s) : r.has(s) || r.has(c);
    },
    forEach(s, r) {
      const i = this, c = i.__v_raw, f = M(c), d = t ? lo : e ? En : ne;
      return !e && Y(f, "iterate", ut), c.forEach((p, a) => s.call(r, d(p), d(a), i));
    }
  };
  return z(
    n,
    e ? {
      add: rn("add"),
      set: rn("set"),
      delete: rn("delete"),
      clear: rn("clear")
    } : {
      add(s) {
        !t && !fe(s) && !je(s) && (s = M(s));
        const r = M(this);
        return sn(r).has.call(r, s) || (r.add(s), Me(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !fe(r) && !je(r) && (r = M(r));
        const i = M(this), { has: c, get: f } = sn(i);
        let d = c.call(i, s);
        d ? process.env.NODE_ENV !== "production" && ts(i, c, s) : (s = M(s), d = c.call(i, s));
        const p = f.call(i, s);
        return i.set(s, r), d ? ot(r, p) && Me(i, "set", s, r, p) : Me(i, "add", s, r), this;
      },
      delete(s) {
        const r = M(this), { has: i, get: c } = sn(r);
        let f = i.call(r, s);
        f ? process.env.NODE_ENV !== "production" && ts(r, i, s) : (s = M(s), f = i.call(r, s));
        const d = c ? c.call(r, s) : void 0, p = r.delete(s);
        return f && Me(r, "delete", s, void 0, d), p;
      },
      clear() {
        const s = M(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? ft(s) ? new Map(s) : new Set(s) : void 0, c = s.clear();
        return r && Me(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Vi(s, e, t);
  }), n;
}
function In(e, t) {
  const n = Si(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    j(n, s) && s in o ? n : o,
    s,
    r
  );
}
const Ci = {
  get: /* @__PURE__ */ In(!1, !1)
}, Ti = {
  get: /* @__PURE__ */ In(!1, !0)
}, $i = {
  get: /* @__PURE__ */ In(!0, !1)
}, Ai = {
  get: /* @__PURE__ */ In(!0, !0)
};
function ts(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const s = Do(e);
    xe(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap();
function Pi(e) {
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
function Mi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Pi(Do(e));
}
function Po(e) {
  return je(e) ? e : Rn(
    e,
    !1,
    Oi,
    Ci,
    tr
  );
}
function Ii(e) {
  return Rn(
    e,
    !1,
    xi,
    Ti,
    nr
  );
}
function fo(e) {
  return Rn(
    e,
    !0,
    wi,
    $i,
    or
  );
}
function Ie(e) {
  return Rn(
    e,
    !0,
    Di,
    Ai,
    sr
  );
}
function Rn(e, t, n, o, s) {
  if (!B(e))
    return process.env.NODE_ENV !== "production" && xe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Mi(e);
  if (r === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const c = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, c), c;
}
function at(e) {
  return je(e) ? at(e.__v_raw) : !!(e && e.__v_isReactive);
}
function je(e) {
  return !!(e && e.__v_isReadonly);
}
function fe(e) {
  return !!(e && e.__v_isShallow);
}
function vn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Ri(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && _n(e, "__v_skip", !0), e;
}
const ne = (e) => B(e) ? Po(e) : e, En = (e) => B(e) ? fo(e) : e;
function J(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ef(e) {
  return Fi(e, !1);
}
function Fi(e, t) {
  return J(e) ? e : new ji(e, t);
}
class ji {
  constructor(t, n) {
    this.dep = new Ao(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : M(t), this._value = n ? t : ne(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || fe(t) || je(t);
    t = o ? t : M(t), ot(t, n) && (this._rawValue = t, this._value = o ? t : ne(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function uo(e) {
  return J(e) ? e.value : e;
}
const Hi = {
  get: (e, t, n) => t === "__v_raw" ? e : uo(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return J(s) && !J(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function rr(e) {
  return at(e) ? e : new Proxy(e, Hi);
}
class Li {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ao(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Kt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Ws(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Js(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && xe("Write operation failed: computed value is readonly");
  }
}
function Ui(e, t, n = !1) {
  let o, s;
  $(e) ? o = e : (o = e.get, s = e.set);
  const r = new Li(o, s, n);
  return process.env.NODE_ENV, r;
}
const cn = {}, bn = /* @__PURE__ */ new WeakMap();
let lt;
function ki(e, t = !1, n = lt) {
  if (n) {
    let o = bn.get(n);
    o || bn.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && xe(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ki(e, t, n = k) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: c, call: f } = n, d = (S) => {
    (n.onWarn || xe)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (S) => s ? S : fe(S) || s === !1 || s === 0 ? Be(S, 1) : Be(S);
  let a, g, w, A, V = !1, Q = !1;
  if (J(e) ? (g = () => e.value, V = fe(e)) : at(e) ? (g = () => p(e), V = !0) : C(e) ? (Q = !0, V = e.some((S) => at(S) || fe(S)), g = () => e.map((S) => {
    if (J(S))
      return S.value;
    if (at(S))
      return p(S);
    if ($(S))
      return f ? f(S, 2) : S();
    process.env.NODE_ENV !== "production" && d(S);
  })) : $(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (w) {
      De();
      try {
        w();
      } finally {
        Ve();
      }
    }
    const S = lt;
    lt = a;
    try {
      return f ? f(e, 3, [A]) : e(A);
    } finally {
      lt = S;
    }
  } : (g = X, process.env.NODE_ENV !== "production" && d(e)), t && s) {
    const S = g, ee = s === !0 ? 1 / 0 : s;
    g = () => Be(S(), ee);
  }
  const q = mi(), L = () => {
    a.stop(), q && q.active && wo(q.effects, a);
  };
  if (r && t) {
    const S = t;
    t = (...ee) => {
      S(...ee), L();
    };
  }
  let H = Q ? new Array(e.length).fill(cn) : cn;
  const me = (S) => {
    if (!(!(a.flags & 1) || !a.dirty && !S))
      if (t) {
        const ee = a.run();
        if (s || V || (Q ? ee.some((Ee, se) => ot(Ee, H[se])) : ot(ee, H))) {
          w && w();
          const Ee = lt;
          lt = a;
          try {
            const se = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              H === cn ? void 0 : Q && H[0] === cn ? [] : H,
              A
            ];
            H = ee, f ? f(t, 3, se) : (
              // @ts-expect-error
              t(...se)
            );
          } finally {
            lt = Ee;
          }
        }
      } else
        a.run();
  };
  return c && c(me), a = new Ks(g), a.scheduler = i ? () => i(me, !1) : me, A = (S) => ki(S, !1, a), w = a.onStop = () => {
    const S = bn.get(a);
    if (S) {
      if (f)
        f(S, 4);
      else
        for (const ee of S) ee();
      bn.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? me(!0) : H = a.run() : i ? i(me.bind(null, !0), !0) : a.run(), L.pause = a.pause.bind(a), L.resume = a.resume.bind(a), L.stop = L, L;
}
function Be(e, t = 1 / 0, n) {
  if (t <= 0 || !B(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, J(e))
    Be(e.value, t, n);
  else if (C(e))
    for (let o = 0; o < e.length; o++)
      Be(e[o], t, n);
  else if (Fs(e) || ft(e))
    e.forEach((o) => {
      Be(o, t, n);
    });
  else if (Hs(e)) {
    for (const o in e)
      Be(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Be(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const pt = [];
function ln(e) {
  pt.push(e);
}
function fn() {
  pt.pop();
}
let zn = !1;
function y(e, ...t) {
  if (zn) return;
  zn = !0, De();
  const n = pt.length ? pt[pt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Bi();
  if (o)
    Dt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, c;
          return (c = (i = r.toString) == null ? void 0 : i.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Un(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Wi(s)), console.warn(...r);
  }
  Ve(), zn = !1;
}
function Bi() {
  let e = pt[pt.length - 1];
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
function Wi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...qi(n));
  }), t;
}
function qi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Un(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Gi(e.props), r] : [s + r];
}
function Gi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ir(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ir(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : J(t) ? (t = ir(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const Mo = {
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
function Dt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Xt(s, t, n);
  }
}
function He(e, t, n, o) {
  if ($(e)) {
    const s = Dt(e, t, n, o);
    return s && xo(s) && s.catch((r) => {
      Xt(r, t, n);
    }), s;
  }
  if (C(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(He(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Xt(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || k;
  if (t) {
    let c = t.parent;
    const f = t.proxy, d = process.env.NODE_ENV !== "production" ? Mo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, f, d) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      De(), Dt(r, null, 10, [
        e,
        f,
        d
      ]), Ve();
      return;
    }
  }
  Ji(e, n, s, o, i);
}
function Ji(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Mo[t];
    if (n && ln(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && fn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const le = [];
let Pe = -1;
const Ot = [];
let tt = null, bt = 0;
const cr = /* @__PURE__ */ Promise.resolve();
let Nn = null;
const zi = 100;
function Yi(e) {
  const t = Nn || cr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xi(e) {
  let t = Pe + 1, n = le.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = le[o], r = Wt(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Fn(e) {
  if (!(e.flags & 1)) {
    const t = Wt(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wt(n) ? le.push(e) : le.splice(Xi(t), 0, e), e.flags |= 1, lr();
  }
}
function lr() {
  Nn || (Nn = cr.then(ar));
}
function fr(e) {
  C(e) ? Ot.push(...e) : tt && e.id === -1 ? tt.splice(bt + 1, 0, e) : e.flags & 1 || (Ot.push(e), e.flags |= 1), lr();
}
function ns(e, t, n = Pe + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < le.length; n++) {
    const o = le[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && Io(t, o))
        continue;
      le.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function ur(e) {
  if (Ot.length) {
    const t = [...new Set(Ot)].sort(
      (n, o) => Wt(n) - Wt(o)
    );
    if (Ot.length = 0, tt) {
      tt.push(...t);
      return;
    }
    for (tt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), bt = 0; bt < tt.length; bt++) {
      const n = tt[bt];
      process.env.NODE_ENV !== "production" && Io(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    tt = null, bt = 0;
  }
}
const Wt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ar(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Io(e, n) : X;
  try {
    for (Pe = 0; Pe < le.length; Pe++) {
      const n = le[Pe];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Dt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Pe < le.length; Pe++) {
      const n = le[Pe];
      n && (n.flags &= -2);
    }
    Pe = -1, le.length = 0, ur(e), Nn = null, (le.length || Ot.length) && ar(e);
  }
}
function Io(e, t) {
  const n = e.get(t) || 0;
  if (n > zi) {
    const o = t.i, s = o && qr(o.type);
    return Xt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Re = !1;
const un = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (zt().__VUE_HMR_RUNTIME__ = {
  createRecord: Yn(pr),
  rerender: Yn(ec),
  reload: Yn(tc)
});
const ht = /* @__PURE__ */ new Map();
function Zi(e) {
  const t = e.type.__hmrId;
  let n = ht.get(t);
  n || (pr(t, e.type), n = ht.get(t)), n.instances.add(e);
}
function Qi(e) {
  ht.get(e.type.__hmrId).instances.delete(e);
}
function pr(e, t) {
  return ht.has(e) ? !1 : (ht.set(e, {
    initialDef: yn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function yn(e) {
  return Gr(e) ? e.__vccOpts : e;
}
function ec(e, t) {
  const n = ht.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, yn(o.type).render = t), o.renderCache = [], Re = !0, o.job.flags & 8 || o.update(), Re = !1;
  }));
}
function tc(e, t) {
  const n = ht.get(e);
  if (!n) return;
  t = yn(t), os(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = yn(r.type);
    let c = un.get(i);
    c || (i !== n.initialDef && os(i, t), un.set(i, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? Fn(() => {
      r.job.flags & 8 || (Re = !0, r.parent.update(), Re = !1, c.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  fr(() => {
    un.clear();
  });
}
function os(e, t) {
  z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Yn(e) {
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
let ye, It = [], ao = !1;
function Zt(e, ...t) {
  ye ? ye.emit(e, ...t) : ao || It.push({ event: e, args: t });
}
function Ro(e, t) {
  var n, o;
  ye = e, ye ? (ye.enabled = !0, It.forEach(({ event: s, args: r }) => ye.emit(s, ...r)), It = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ro(r, t);
  }), setTimeout(() => {
    ye || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ao = !0, It = []);
  }, 3e3)) : (ao = !0, It = []);
}
function nc(e, t) {
  Zt("app:init", e, t, {
    Fragment: re,
    Text: Qt,
    Comment: ge,
    Static: pn
  });
}
function oc(e) {
  Zt("app:unmount", e);
}
const sc = /* @__PURE__ */ Fo(
  "component:added"
  /* COMPONENT_ADDED */
), dr = /* @__PURE__ */ Fo(
  "component:updated"
  /* COMPONENT_UPDATED */
), rc = /* @__PURE__ */ Fo(
  "component:removed"
  /* COMPONENT_REMOVED */
), ic = (e) => {
  ye && typeof ye.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ye.cleanupBuffer(e) && rc(e);
};
// @__NO_SIDE_EFFECTS__
function Fo(e) {
  return (t) => {
    Zt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const cc = /* @__PURE__ */ hr(
  "perf:start"
  /* PERFORMANCE_START */
), lc = /* @__PURE__ */ hr(
  "perf:end"
  /* PERFORMANCE_END */
);
function hr(e) {
  return (t, n, o) => {
    Zt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function fc(e, t, n) {
  Zt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Z = null, gr = null;
function On(e) {
  const t = Z;
  return Z = e, gr = e && e.type.__scopeId || null, t;
}
function wn(e, t = Z, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && _s(-1);
    const r = On(t);
    let i;
    try {
      i = e(...s);
    } finally {
      On(r), o._d && _s(1);
    }
    return process.env.NODE_ENV !== "production" && dr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function mr(e) {
  ei(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function bf(e, t) {
  if (Z === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const n = Ln(Z), o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, i, c, f = k] = t[s];
    r && ($(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Be(i), o.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: f
    }));
  }
  return e;
}
function rt(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    r && (c.oldValue = r[i].value);
    let f = c.dir[o];
    f && (De(), He(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Ve());
  }
}
const uc = Symbol("_vte"), ac = (e) => e.__isTeleport, pc = Symbol("_leaveCb");
function jo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, jo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function dc(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    z({ name: e.name }, t, { setup: e })
  ) : e;
}
function _r(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ss = /* @__PURE__ */ new WeakSet(), xn = /* @__PURE__ */ new WeakMap();
function Lt(e, t, n, o, s = !1) {
  if (C(e)) {
    e.forEach(
      (V, Q) => Lt(
        V,
        t && (C(t) ? t[Q] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (wt(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Lt(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Ln(o.component) : o.el, i = s ? null : r, { i: c, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !c) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = c.refs === k ? c.refs = {} : c.refs, a = c.setupState, g = M(a), w = a === k ? Rs : (V) => process.env.NODE_ENV !== "production" && (j(g, V) && !J(g[V]) && y(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), ss.has(g[V])) ? !1 : j(g, V), A = (V) => process.env.NODE_ENV === "production" || !ss.has(V);
  if (d != null && d !== f) {
    if (rs(t), G(d))
      p[d] = null, w(d) && (a[d] = null);
    else if (J(d)) {
      A(d) && (d.value = null);
      const V = t;
      V.k && (p[V.k] = null);
    }
  }
  if ($(f))
    Dt(f, c, 12, [i, p]);
  else {
    const V = G(f), Q = J(f);
    if (V || Q) {
      const q = () => {
        if (e.f) {
          const L = V ? w(f) ? a[f] : p[f] : A(f) || !e.k ? f.value : p[e.k];
          if (s)
            C(L) && wo(L, r);
          else if (C(L))
            L.includes(r) || L.push(r);
          else if (V)
            p[f] = [r], w(f) && (a[f] = p[f]);
          else {
            const H = [r];
            A(f) && (f.value = H), e.k && (p[e.k] = H);
          }
        } else V ? (p[f] = i, w(f) && (a[f] = i)) : Q ? (A(f) && (f.value = i), e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (i) {
        const L = () => {
          q(), xn.delete(e);
        };
        L.id = -1, xn.set(e, L), _e(L, n);
      } else
        rs(e), q();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function rs(e) {
  const t = xn.get(e);
  t && (t.flags |= 8, xn.delete(e));
}
zt().requestIdleCallback;
zt().cancelIdleCallback;
const wt = (e) => !!e.type.__asyncLoader, Ho = (e) => e.type.__isKeepAlive;
function hc(e, t) {
  vr(e, "a", t);
}
function gc(e, t) {
  vr(e, "da", t);
}
function vr(e, t, n = oe) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (jn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Ho(s.parent.vnode) && mc(o, t, n, s), s = s.parent;
  }
}
function mc(e, t, n, o) {
  const s = jn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Er(() => {
    wo(o[t], s);
  }, n);
}
function jn(e, t, n = oe, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      De();
      const c = tn(n), f = He(t, n, e, i);
      return c(), Ve(), f;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = ct(Mo[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Xe = (e) => (t, n = oe) => {
  (!Gt || e === "sp") && jn(e, (...o) => t(...o), n);
}, _c = Xe("bm"), vc = Xe("m"), Ec = Xe(
  "bu"
), bc = Xe("u"), Nc = Xe(
  "bum"
), Er = Xe("um"), yc = Xe(
  "sp"
), Oc = Xe("rtg"), wc = Xe("rtc");
function xc(e, t = oe) {
  jn("ec", e, t);
}
const Dc = Symbol.for("v-ndc");
function po(e, t, n, o) {
  let s;
  const r = n, i = C(e);
  if (i || G(e)) {
    const c = i && at(e);
    let f = !1, d = !1;
    c && (f = !fe(e), d = je(e), e = Mn(e)), s = new Array(e.length);
    for (let p = 0, a = e.length; p < a; p++)
      s[p] = t(
        f ? d ? En(ne(e[p])) : ne(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && y(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let c = 0; c < e; c++)
      s[c] = t(c + 1, c, void 0, r);
  } else if (B(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (c, f) => t(c, f, void 0, r)
      );
    else {
      const c = Object.keys(e);
      s = new Array(c.length);
      for (let f = 0, d = c.length; f < d; f++) {
        const p = c[f];
        s[f] = t(e[p], p, f, r);
      }
    }
  else
    s = [];
  return s;
}
function Lo(e, t, n = {}, o, s) {
  if (Z.ce || Z.parent && wt(Z.parent) && Z.parent.ce) {
    const d = Object.keys(n).length > 0;
    return te(), qe(
      re,
      null,
      [Fe("slot", n, o)],
      d ? -2 : 64
    );
  }
  let r = e[t];
  process.env.NODE_ENV !== "production" && r && r.length > 1 && (y(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), te();
  const i = r && br(r(n)), c = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, f = qe(
    re,
    {
      key: (c && !Ye(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && o ? "_fb" : "")
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return f.scopeId && (f.slotScopeIds = [f.scopeId + "-s"]), r && r._c && (r._d = !0), f;
}
function br(e) {
  return e.some((t) => en(t) ? !(t.type === ge || t.type === re && !br(t.children)) : !0) ? e : null;
}
const ho = (e) => e ? Br(e) ? Ln(e) : ho(e.parent) : null, dt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ie(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ie(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ie(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ie(e.refs) : e.refs,
    $parent: (e) => ho(e.parent),
    $root: (e) => ho(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Or(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Yi.bind(e.proxy)),
    $watch: (e) => rl.bind(e)
  })
), Uo = (e) => e === "_" || e === "$", Xn = (e, t) => e !== k && !e.__isScriptSetup && j(e, t), Nr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: c, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Xn(o, t))
          return i[t] = 1, o[t];
        if (s !== k && j(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && j(d, t)
        )
          return i[t] = 3, r[t];
        if (n !== k && j(n, t))
          return i[t] = 4, n[t];
        go && (i[t] = 0);
      }
    }
    const p = dt[t];
    let a, g;
    if (p)
      return t === "$attrs" ? (Y(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Sn()) : process.env.NODE_ENV !== "production" && t === "$slots" && Y(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== k && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = f.config.globalProperties, j(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && Z && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== k && Uo(t[0]) && j(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Z && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Xn(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && j(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== k && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r, type: i }
  }, c) {
    let f, d;
    return !!(n[c] || e !== k && c[0] !== "$" && j(e, c) || Xn(t, c) || (f = r[0]) && j(f, c) || j(o, c) || j(dt, c) || j(s.config.globalProperties, c) || (d = i.__cssModules) && d[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Nr.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Vc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(dt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => dt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: X
    });
  }), t;
}
function Sc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: X
    });
  });
}
function Cc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Uo(o[0])) {
        y(
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
        set: X
      });
    }
  });
}
function is(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Tc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let go = !0;
function $c(e) {
  const t = Or(e), n = e.proxy, o = e.ctx;
  go = !1, t.beforeCreate && cs(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: g,
    beforeUpdate: w,
    updated: A,
    activated: V,
    deactivated: Q,
    beforeDestroy: q,
    beforeUnmount: L,
    destroyed: H,
    unmounted: me,
    render: S,
    renderTracked: ee,
    renderTriggered: Ee,
    errorCaptured: se,
    serverPrefetch: ue,
    // public API
    expose: Le,
    inheritAttrs: Ze,
    // assets
    components: be,
    directives: nn,
    filters: Go
  } = t, Qe = process.env.NODE_ENV !== "production" ? Tc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const I in R)
        Qe("Props", I);
  }
  if (d && Ac(d, o, Qe), i)
    for (const R in i) {
      const I = i[R];
      $(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = I.bind(n), process.env.NODE_ENV !== "production" && Qe("Methods", R)) : process.env.NODE_ENV !== "production" && y(
        `Method "${R}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !$(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && xo(R) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !B(R))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = Po(R), process.env.NODE_ENV !== "production")
      for (const I in R)
        Qe("Data", I), Uo(I[0]) || Object.defineProperty(o, I, {
          configurable: !0,
          enumerable: !0,
          get: () => R[I],
          set: X
        });
  }
  if (go = !0, r)
    for (const R in r) {
      const I = r[R], Se = $(I) ? I.bind(n, n) : $(I.get) ? I.get.bind(n, n) : X;
      process.env.NODE_ENV !== "production" && Se === X && y(`Computed property "${R}" has no getter.`);
      const kn = !$(I) && $(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : X, Vt = Cl({
        get: Se,
        set: kn
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Vt.value,
        set: (gt) => Vt.value = gt
      }), process.env.NODE_ENV !== "production" && Qe("Computed", R);
    }
  if (c)
    for (const R in c)
      yr(c[R], o, n, R);
  if (f) {
    const R = $(f) ? f.call(n) : f;
    Reflect.ownKeys(R).forEach((I) => {
      jc(I, R[I]);
    });
  }
  p && cs(p, e, "c");
  function ae(R, I) {
    C(I) ? I.forEach((Se) => R(Se.bind(n))) : I && R(I.bind(n));
  }
  if (ae(_c, a), ae(vc, g), ae(Ec, w), ae(bc, A), ae(hc, V), ae(gc, Q), ae(xc, se), ae(wc, ee), ae(Oc, Ee), ae(Nc, L), ae(Er, me), ae(yc, ue), C(Le))
    if (Le.length) {
      const R = e.exposed || (e.exposed = {});
      Le.forEach((I) => {
        Object.defineProperty(R, I, {
          get: () => n[I],
          set: (Se) => n[I] = Se,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === X && (e.render = S), Ze != null && (e.inheritAttrs = Ze), be && (e.components = be), nn && (e.directives = nn), ue && _r(e);
}
function Ac(e, t, n = X) {
  C(e) && (e = mo(e));
  for (const o in e) {
    const s = e[o];
    let r;
    B(s) ? "default" in s ? r = Ut(
      s.from || o,
      s.default,
      !0
    ) : r = Ut(s.from || o) : r = Ut(s), J(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function cs(e, t, n) {
  He(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function yr(e, t, n, o) {
  let s = o.includes(".") ? Ir(n, o) : () => n[o];
  if (G(e)) {
    const r = t[e];
    $(r) ? Qn(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    Qn(s, e.bind(n));
  else if (B(e))
    if (C(e))
      e.forEach((r) => yr(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? Qn(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function Or(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = r.get(t);
  let f;
  return c ? f = c : !s.length && !n && !o ? f = t : (f = {}, s.length && s.forEach(
    (d) => Dn(f, d, i, !0)
  ), Dn(f, t, i)), B(t) && r.set(t, f), f;
}
function Dn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Dn(e, r, n, !0), s && s.forEach(
    (i) => Dn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Pc[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Pc = {
  data: ls,
  props: fs,
  emits: fs,
  // objects
  methods: Rt,
  computed: Rt,
  // lifecycle
  beforeCreate: ce,
  created: ce,
  beforeMount: ce,
  mounted: ce,
  beforeUpdate: ce,
  updated: ce,
  beforeDestroy: ce,
  beforeUnmount: ce,
  destroyed: ce,
  unmounted: ce,
  activated: ce,
  deactivated: ce,
  errorCaptured: ce,
  serverPrefetch: ce,
  // assets
  components: Rt,
  directives: Rt,
  // watch
  watch: Ic,
  // provide / inject
  provide: ls,
  inject: Mc
};
function ls(e, t) {
  return t ? e ? function() {
    return z(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Mc(e, t) {
  return Rt(mo(e), mo(t));
}
function mo(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ce(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Rt(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fs(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    is(e),
    is(t ?? {})
  ) : t;
}
function Ic(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = z(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ce(e[o], t[o]);
  return n;
}
function wr() {
  return {
    app: null,
    config: {
      isNativeTag: Rs,
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
let Rc = 0;
function Fc(e, t) {
  return function(o, s = null) {
    $(o) || (o = z({}, o)), s != null && !B(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = wr(), i = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const d = r.app = {
      _uid: Rc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Ns,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && $(p.install) ? (i.add(p), p.install(d, ...a)) : $(p) ? (i.add(p), p(d, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && yo(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = a, d) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && mr(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, d) : r.directives[p];
      },
      mount(p, a, g) {
        if (f)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const w = d._ceVNode || Fe(o, s);
          return w.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const A = st(w);
            A.el = null, e(A, p, g);
          }), e(w, p, g), f = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = w.component, nc(d, Ns)), Ln(w.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), c.push(p);
      },
      unmount() {
        f ? (He(
          c,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, oc(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (j(r.provides, p) ? y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = a, d;
      },
      runWithContext(p) {
        const a = xt;
        xt = d;
        try {
          return p();
        } finally {
          xt = a;
        }
      }
    };
    return d;
  };
}
let xt = null;
function jc(e, t) {
  if (!oe)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = oe.provides;
    const o = oe.parent && oe.parent.provides;
    o === n && (n = oe.provides = Object.create(o)), n[e] = t;
  }
}
function Ut(e, t, n = !1) {
  const o = Kr();
  if (o || xt) {
    let s = xt ? xt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const xr = {}, Dr = () => Object.create(xr), Vr = (e) => Object.getPrototypeOf(e) === xr;
function Hc(e, t, n, o = !1) {
  const s = {}, r = Dr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sr(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && Tr(t || {}, s, e), n ? e.props = o ? s : Ii(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Lc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Uc(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, c = M(s), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Lc(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let g = p[a];
        if (Hn(e.emitsOptions, g))
          continue;
        const w = t[g];
        if (f)
          if (j(r, g))
            w !== r[g] && (r[g] = w, d = !0);
          else {
            const A = Oe(g);
            s[A] = _o(
              f,
              c,
              A,
              w,
              e,
              !1
            );
          }
        else
          w !== r[g] && (r[g] = w, d = !0);
      }
    }
  } else {
    Sr(e, t, s, r) && (d = !0);
    let p;
    for (const a in c)
      (!t || // for camelCase
      !j(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Je(a)) === a || !j(t, p))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[a] = _o(
        f,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (r !== c)
      for (const a in r)
        (!t || !j(t, a)) && (delete r[a], d = !0);
  }
  d && Me(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Tr(t || {}, s, e);
}
function Sr(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let f in t) {
      if (Ft(f))
        continue;
      const d = t[f];
      let p;
      s && j(s, p = Oe(f)) ? !r || !r.includes(p) ? n[p] = d : (c || (c = {}))[p] = d : Hn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, i = !0);
    }
  if (r) {
    const f = M(n), d = c || k;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = _o(
        s,
        f,
        a,
        d[a],
        e,
        !j(d, a)
      );
    }
  }
  return i;
}
function _o(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const c = j(i, "default");
    if (c && o === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && $(f)) {
        const { propsDefaults: d } = s;
        if (n in d)
          o = d[n];
        else {
          const p = tn(s);
          o = d[n] = f.call(
            null,
            t
          ), p();
        }
      } else
        o = f;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Je(n)) && (o = !0));
  }
  return o;
}
const kc = /* @__PURE__ */ new WeakMap();
function Cr(e, t, n = !1) {
  const o = n ? kc : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, c = [];
  let f = !1;
  if (!$(e)) {
    const p = (a) => {
      f = !0;
      const [g, w] = Cr(a, t, !0);
      z(i, g), w && c.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !f)
    return B(e) && o.set(e, yt), yt;
  if (C(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !G(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const a = Oe(r[p]);
      us(a) && (i[a] = k);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !B(r) && y("invalid props options", r);
    for (const p in r) {
      const a = Oe(p);
      if (us(a)) {
        const g = r[p], w = i[a] = C(g) || $(g) ? { type: g } : z({}, g), A = w.type;
        let V = !1, Q = !0;
        if (C(A))
          for (let q = 0; q < A.length; ++q) {
            const L = A[q], H = $(L) && L.name;
            if (H === "Boolean") {
              V = !0;
              break;
            } else H === "String" && (Q = !1);
          }
        else
          V = $(A) && A.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = V, w[
          1
          /* shouldCastTrue */
        ] = Q, (V || j(w, "default")) && c.push(a);
      }
    }
  }
  const d = [i, c];
  return B(e) && o.set(e, d), d;
}
function us(e) {
  return e[0] !== "$" && !Ft(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Kc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Tr(e, t, n) {
  const o = M(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => Oe(i));
  for (const i in s) {
    let c = s[i];
    c != null && Bc(
      i,
      o[i],
      c,
      process.env.NODE_ENV !== "production" ? Ie(o) : o,
      !r.includes(i)
    );
  }
}
function Bc(e, t, n, o, s) {
  const { type: r, required: i, validator: c, skipCheck: f } = n;
  if (i && s) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !f) {
      let d = !1;
      const p = C(r) ? r : [r], a = [];
      for (let g = 0; g < p.length && !d; g++) {
        const { valid: w, expectedType: A } = qc(t, p[g]);
        a.push(A || ""), d = w;
      }
      if (!d) {
        y(Gc(e, t, a));
        return;
      }
    }
    c && !c(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Wc = /* @__PURE__ */ ze(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function qc(e, t) {
  let n;
  const o = Kc(t);
  if (o === "null")
    n = e === null;
  else if (Wc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = B(e) : o === "Array" ? n = C(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Gc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Pn).join(" | ")}`;
  const s = n[0], r = Do(t), i = as(t, s), c = as(t, r);
  return n.length === 1 && ps(s) && !Jc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, ps(r) && (o += `with value ${c}.`), o;
}
function as(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ps(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Jc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ko = (e) => e === "_" || e === "_ctx" || e === "$stable", Ko = (e) => C(e) ? e.map(Ne) : [Ne(e)], zc = (e, t, n) => {
  if (t._n)
    return t;
  const o = wn((...s) => (process.env.NODE_ENV !== "production" && oe && !(n === null && Z) && !(n && n.root !== oe.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ko(t(...s))), n);
  return o._c = !1, o;
}, $r = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (ko(s)) continue;
    const r = e[s];
    if ($(r))
      t[s] = zc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Ko(r);
      t[s] = () => i;
    }
  }
}, Ar = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ho(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ko(t);
  e.slots.default = () => n;
}, vo = (e, t, n) => {
  for (const o in t)
    (n || !ko(o)) && (e[o] = t[o]);
}, Yc = (e, t, n) => {
  const o = e.slots = Dr();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (vo(o, t, n), n && _n(o, "_", s, !0)) : $r(t, o);
  } else t && Ar(e, t);
}, Xc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = k;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? process.env.NODE_ENV !== "production" && Re ? (vo(s, t, n), Me(e, "set", "$slots")) : n && c === 1 ? r = !1 : vo(s, t, n) : (r = !t.$stable, $r(t, s)), i = t;
  } else t && (Ar(e, t), i = { default: 1 });
  if (r)
    for (const c in s)
      !ko(c) && i[c] == null && delete s[c];
};
let At, Ke;
function _t(e, t) {
  e.appContext.config.performance && Vn() && Ke.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && cc(e, t, Vn() ? Ke.now() : Date.now());
}
function vt(e, t) {
  if (e.appContext.config.performance && Vn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${Un(e, e.type)}> ${t}`;
    Ke.mark(o), Ke.measure(s, n, o), Ke.clearMeasures(s), Ke.clearMarks(n), Ke.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && lc(e, t, Vn() ? Ke.now() : Date.now());
}
function Vn() {
  return At !== void 0 || (typeof window < "u" && window.performance ? (At = !0, Ke = window.performance) : At = !1), At;
}
function Zc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const _e = dl;
function Qc(e) {
  return el(e);
}
function el(e, t) {
  Zc();
  const n = zt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ro(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: p,
    parentNode: a,
    nextSibling: g,
    setScopeId: w = X,
    insertStaticContent: A
  } = e, V = (l, u, h, v = null, m = null, _ = null, O = void 0, N = null, b = process.env.NODE_ENV !== "production" && Re ? !1 : !!u.dynamicChildren) => {
    if (l === u)
      return;
    l && !Pt(l, u) && (v = on(l), et(l, m, _, !0), l = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: E, ref: T, shapeFlag: x } = u;
    switch (E) {
      case Qt:
        Q(l, u, h, v);
        break;
      case ge:
        q(l, u, h, v);
        break;
      case pn:
        l == null ? L(u, h, v, O) : process.env.NODE_ENV !== "production" && H(l, u, h, O);
        break;
      case re:
        nn(
          l,
          u,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        );
        break;
      default:
        x & 1 ? ee(
          l,
          u,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        ) : x & 6 ? Go(
          l,
          u,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        ) : x & 64 || x & 128 ? E.process(
          l,
          u,
          h,
          v,
          m,
          _,
          O,
          N,
          b,
          Ct
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    T != null && m ? Lt(T, l && l.ref, _, u || l, !u) : T == null && l && l.ref != null && Lt(l.ref, null, _, l, !0);
  }, Q = (l, u, h, v) => {
    if (l == null)
      o(
        u.el = c(u.children),
        h,
        v
      );
    else {
      const m = u.el = l.el;
      u.children !== l.children && d(m, u.children);
    }
  }, q = (l, u, h, v) => {
    l == null ? o(
      u.el = f(u.children || ""),
      h,
      v
    ) : u.el = l.el;
  }, L = (l, u, h, v) => {
    [l.el, l.anchor] = A(
      l.children,
      u,
      h,
      v,
      l.el,
      l.anchor
    );
  }, H = (l, u, h, v) => {
    if (u.children !== l.children) {
      const m = g(l.anchor);
      S(l), [u.el, u.anchor] = A(
        u.children,
        h,
        m,
        v
      );
    } else
      u.el = l.el, u.anchor = l.anchor;
  }, me = ({ el: l, anchor: u }, h, v) => {
    let m;
    for (; l && l !== u; )
      m = g(l), o(l, h, v), l = m;
    o(u, h, v);
  }, S = ({ el: l, anchor: u }) => {
    let h;
    for (; l && l !== u; )
      h = g(l), s(l), l = h;
    s(u);
  }, ee = (l, u, h, v, m, _, O, N, b) => {
    u.type === "svg" ? O = "svg" : u.type === "math" && (O = "mathml"), l == null ? Ee(
      u,
      h,
      v,
      m,
      _,
      O,
      N,
      b
    ) : Le(
      l,
      u,
      m,
      _,
      O,
      N,
      b
    );
  }, Ee = (l, u, h, v, m, _, O, N) => {
    let b, E;
    const { props: T, shapeFlag: x, transition: D, dirs: P } = l;
    if (b = l.el = i(
      l.type,
      _,
      T && T.is,
      T
    ), x & 8 ? p(b, l.children) : x & 16 && ue(
      l.children,
      b,
      null,
      v,
      m,
      Zn(l, _),
      O,
      N
    ), P && rt(l, null, v, "created"), se(b, l, l.scopeId, O, v), T) {
      for (const W in T)
        W !== "value" && !Ft(W) && r(b, W, null, T[W], _, v);
      "value" in T && r(b, "value", null, T.value, _), (E = T.onVnodeBeforeMount) && Ae(E, v, l);
    }
    process.env.NODE_ENV !== "production" && (_n(b, "__vnode", l, !0), _n(b, "__vueParentComponent", v, !0)), P && rt(l, null, v, "beforeMount");
    const F = tl(m, D);
    F && D.beforeEnter(b), o(b, u, h), ((E = T && T.onVnodeMounted) || F || P) && _e(() => {
      E && Ae(E, v, l), F && D.enter(b), P && rt(l, null, v, "mounted");
    }, m);
  }, se = (l, u, h, v, m) => {
    if (h && w(l, h), v)
      for (let _ = 0; _ < v.length; _++)
        w(l, v[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = Bo(_.children) || _), u === _ || jr(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const O = m.vnode;
        se(
          l,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, ue = (l, u, h, v, m, _, O, N, b = 0) => {
    for (let E = b; E < l.length; E++) {
      const T = l[E] = N ? nt(l[E]) : Ne(l[E]);
      V(
        null,
        T,
        u,
        h,
        v,
        m,
        _,
        O,
        N
      );
    }
  }, Le = (l, u, h, v, m, _, O) => {
    const N = u.el = l.el;
    process.env.NODE_ENV !== "production" && (N.__vnode = u);
    let { patchFlag: b, dynamicChildren: E, dirs: T } = u;
    b |= l.patchFlag & 16;
    const x = l.props || k, D = u.props || k;
    let P;
    if (h && it(h, !1), (P = D.onVnodeBeforeUpdate) && Ae(P, h, u, l), T && rt(u, l, h, "beforeUpdate"), h && it(h, !0), process.env.NODE_ENV !== "production" && Re && (b = 0, O = !1, E = null), (x.innerHTML && D.innerHTML == null || x.textContent && D.textContent == null) && p(N, ""), E ? (Ze(
      l.dynamicChildren,
      E,
      N,
      h,
      v,
      Zn(u, m),
      _
    ), process.env.NODE_ENV !== "production" && an(l, u)) : O || Se(
      l,
      u,
      N,
      null,
      h,
      v,
      Zn(u, m),
      _,
      !1
    ), b > 0) {
      if (b & 16)
        be(N, x, D, h, m);
      else if (b & 2 && x.class !== D.class && r(N, "class", null, D.class, m), b & 4 && r(N, "style", x.style, D.style, m), b & 8) {
        const F = u.dynamicProps;
        for (let W = 0; W < F.length; W++) {
          const K = F[W], pe = x[K], de = D[K];
          (de !== pe || K === "value") && r(N, K, pe, de, m, h);
        }
      }
      b & 1 && l.children !== u.children && p(N, u.children);
    } else !O && E == null && be(N, x, D, h, m);
    ((P = D.onVnodeUpdated) || T) && _e(() => {
      P && Ae(P, h, u, l), T && rt(u, l, h, "updated");
    }, v);
  }, Ze = (l, u, h, v, m, _, O) => {
    for (let N = 0; N < u.length; N++) {
      const b = l[N], E = u[N], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === re || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(b, E) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 198) ? a(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(
        b,
        E,
        T,
        null,
        v,
        m,
        _,
        O,
        !0
      );
    }
  }, be = (l, u, h, v, m) => {
    if (u !== h) {
      if (u !== k)
        for (const _ in u)
          !Ft(_) && !(_ in h) && r(
            l,
            _,
            u[_],
            null,
            m,
            v
          );
      for (const _ in h) {
        if (Ft(_)) continue;
        const O = h[_], N = u[_];
        O !== N && _ !== "value" && r(l, _, N, O, m, v);
      }
      "value" in h && r(l, "value", u.value, h.value, m);
    }
  }, nn = (l, u, h, v, m, _, O, N, b) => {
    const E = u.el = l ? l.el : c(""), T = u.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: D, slotScopeIds: P } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Re || x & 2048) && (x = 0, b = !1, D = null), P && (N = N ? N.concat(P) : P), l == null ? (o(E, h, v), o(T, h, v), ue(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      T,
      m,
      _,
      O,
      N,
      b
    )) : x > 0 && x & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Ze(
      l.dynamicChildren,
      D,
      h,
      m,
      _,
      O,
      N
    ), process.env.NODE_ENV !== "production" ? an(l, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || m && u === m.subTree) && an(
        l,
        u,
        !0
        /* shallow */
      )
    )) : Se(
      l,
      u,
      h,
      T,
      m,
      _,
      O,
      N,
      b
    );
  }, Go = (l, u, h, v, m, _, O, N, b) => {
    u.slotScopeIds = N, l == null ? u.shapeFlag & 512 ? m.ctx.activate(
      u,
      h,
      v,
      O,
      b
    ) : Qe(
      u,
      h,
      v,
      m,
      _,
      O,
      b
    ) : ae(l, u, b);
  }, Qe = (l, u, h, v, m, _, O) => {
    const N = l.component = bl(
      l,
      v,
      m
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && Zi(N), process.env.NODE_ENV !== "production" && (ln(l), _t(N, "mount")), Ho(l) && (N.ctx.renderer = Ct), process.env.NODE_ENV !== "production" && _t(N, "init"), yl(N, !1, O), process.env.NODE_ENV !== "production" && vt(N, "init"), process.env.NODE_ENV !== "production" && Re && (l.el = null), N.asyncDep) {
      if (m && m.registerDep(N, R, O), !l.el) {
        const b = N.subTree = Fe(ge);
        q(null, b, u, h), l.placeholder = b.el;
      }
    } else
      R(
        N,
        l,
        u,
        h,
        m,
        _,
        O
      );
    process.env.NODE_ENV !== "production" && (fn(), vt(N, "mount"));
  }, ae = (l, u, h) => {
    const v = u.component = l.component;
    if (al(l, u, h))
      if (v.asyncDep && !v.asyncResolved) {
        process.env.NODE_ENV !== "production" && ln(u), I(v, u, h), process.env.NODE_ENV !== "production" && fn();
        return;
      } else
        v.next = u, v.update();
    else
      u.el = l.el, v.vnode = u;
  }, R = (l, u, h, v, m, _, O) => {
    const N = () => {
      if (l.isMounted) {
        let { next: x, bu: D, u: P, parent: F, vnode: W } = l;
        {
          const Te = Pr(l);
          if (Te) {
            x && (x.el = W.el, I(l, x, O)), Te.asyncDep.then(() => {
              l.isUnmounted || N();
            });
            return;
          }
        }
        let K = x, pe;
        process.env.NODE_ENV !== "production" && ln(x || l.vnode), it(l, !1), x ? (x.el = W.el, I(l, x, O)) : x = W, D && Et(D), (pe = x.props && x.props.onVnodeBeforeUpdate) && Ae(pe, F, x, W), it(l, !0), process.env.NODE_ENV !== "production" && _t(l, "render");
        const de = hs(l);
        process.env.NODE_ENV !== "production" && vt(l, "render");
        const Ce = l.subTree;
        l.subTree = de, process.env.NODE_ENV !== "production" && _t(l, "patch"), V(
          Ce,
          de,
          // parent may have changed if it's in a teleport
          a(Ce.el),
          // anchor may have changed if it's in a fragment
          on(Ce),
          l,
          m,
          _
        ), process.env.NODE_ENV !== "production" && vt(l, "patch"), x.el = de.el, K === null && pl(l, de.el), P && _e(P, m), (pe = x.props && x.props.onVnodeUpdated) && _e(
          () => Ae(pe, F, x, W),
          m
        ), process.env.NODE_ENV !== "production" && dr(l), process.env.NODE_ENV !== "production" && fn();
      } else {
        let x;
        const { el: D, props: P } = u, { bm: F, m: W, parent: K, root: pe, type: de } = l, Ce = wt(u);
        it(l, !1), F && Et(F), !Ce && (x = P && P.onVnodeBeforeMount) && Ae(x, K, u), it(l, !0);
        {
          pe.ce && // @ts-expect-error _def is private
          pe.ce._def.shadowRoot !== !1 && pe.ce._injectChildStyle(de), process.env.NODE_ENV !== "production" && _t(l, "render");
          const Te = l.subTree = hs(l);
          process.env.NODE_ENV !== "production" && vt(l, "render"), process.env.NODE_ENV !== "production" && _t(l, "patch"), V(
            null,
            Te,
            h,
            v,
            l,
            m,
            _
          ), process.env.NODE_ENV !== "production" && vt(l, "patch"), u.el = Te.el;
        }
        if (W && _e(W, m), !Ce && (x = P && P.onVnodeMounted)) {
          const Te = u;
          _e(
            () => Ae(x, K, Te),
            m
          );
        }
        (u.shapeFlag & 256 || K && wt(K.vnode) && K.vnode.shapeFlag & 256) && l.a && _e(l.a, m), l.isMounted = !0, process.env.NODE_ENV !== "production" && sc(l), u = h = v = null;
      }
    };
    l.scope.on();
    const b = l.effect = new Ks(N);
    l.scope.off();
    const E = l.update = b.run.bind(b), T = l.job = b.runIfDirty.bind(b);
    T.i = l, T.id = l.uid, b.scheduler = () => Fn(T), it(l, !0), process.env.NODE_ENV !== "production" && (b.onTrack = l.rtc ? (x) => Et(l.rtc, x) : void 0, b.onTrigger = l.rtg ? (x) => Et(l.rtg, x) : void 0), E();
  }, I = (l, u, h) => {
    u.component = l;
    const v = l.vnode.props;
    l.vnode = u, l.next = null, Uc(l, u.props, v, h), Xc(l, u.children, h), De(), ns(l), Ve();
  }, Se = (l, u, h, v, m, _, O, N, b = !1) => {
    const E = l && l.children, T = l ? l.shapeFlag : 0, x = u.children, { patchFlag: D, shapeFlag: P } = u;
    if (D > 0) {
      if (D & 128) {
        Vt(
          E,
          x,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        );
        return;
      } else if (D & 256) {
        kn(
          E,
          x,
          h,
          v,
          m,
          _,
          O,
          N,
          b
        );
        return;
      }
    }
    P & 8 ? (T & 16 && St(E, m, _), x !== E && p(h, x)) : T & 16 ? P & 16 ? Vt(
      E,
      x,
      h,
      v,
      m,
      _,
      O,
      N,
      b
    ) : St(E, m, _, !0) : (T & 8 && p(h, ""), P & 16 && ue(
      x,
      h,
      v,
      m,
      _,
      O,
      N,
      b
    ));
  }, kn = (l, u, h, v, m, _, O, N, b) => {
    l = l || yt, u = u || yt;
    const E = l.length, T = u.length, x = Math.min(E, T);
    let D;
    for (D = 0; D < x; D++) {
      const P = u[D] = b ? nt(u[D]) : Ne(u[D]);
      V(
        l[D],
        P,
        h,
        null,
        m,
        _,
        O,
        N,
        b
      );
    }
    E > T ? St(
      l,
      m,
      _,
      !0,
      !1,
      x
    ) : ue(
      u,
      h,
      v,
      m,
      _,
      O,
      N,
      b,
      x
    );
  }, Vt = (l, u, h, v, m, _, O, N, b) => {
    let E = 0;
    const T = u.length;
    let x = l.length - 1, D = T - 1;
    for (; E <= x && E <= D; ) {
      const P = l[E], F = u[E] = b ? nt(u[E]) : Ne(u[E]);
      if (Pt(P, F))
        V(
          P,
          F,
          h,
          null,
          m,
          _,
          O,
          N,
          b
        );
      else
        break;
      E++;
    }
    for (; E <= x && E <= D; ) {
      const P = l[x], F = u[D] = b ? nt(u[D]) : Ne(u[D]);
      if (Pt(P, F))
        V(
          P,
          F,
          h,
          null,
          m,
          _,
          O,
          N,
          b
        );
      else
        break;
      x--, D--;
    }
    if (E > x) {
      if (E <= D) {
        const P = D + 1, F = P < T ? u[P].el : v;
        for (; E <= D; )
          V(
            null,
            u[E] = b ? nt(u[E]) : Ne(u[E]),
            h,
            F,
            m,
            _,
            O,
            N,
            b
          ), E++;
      }
    } else if (E > D)
      for (; E <= x; )
        et(l[E], m, _, !0), E++;
    else {
      const P = E, F = E, W = /* @__PURE__ */ new Map();
      for (E = F; E <= D; E++) {
        const ie = u[E] = b ? nt(u[E]) : Ne(u[E]);
        ie.key != null && (process.env.NODE_ENV !== "production" && W.has(ie.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ie.key),
          "Make sure keys are unique."
        ), W.set(ie.key, E));
      }
      let K, pe = 0;
      const de = D - F + 1;
      let Ce = !1, Te = 0;
      const Tt = new Array(de);
      for (E = 0; E < de; E++) Tt[E] = 0;
      for (E = P; E <= x; E++) {
        const ie = l[E];
        if (pe >= de) {
          et(ie, m, _, !0);
          continue;
        }
        let $e;
        if (ie.key != null)
          $e = W.get(ie.key);
        else
          for (K = F; K <= D; K++)
            if (Tt[K - F] === 0 && Pt(ie, u[K])) {
              $e = K;
              break;
            }
        $e === void 0 ? et(ie, m, _, !0) : (Tt[$e - F] = E + 1, $e >= Te ? Te = $e : Ce = !0, V(
          ie,
          u[$e],
          h,
          null,
          m,
          _,
          O,
          N,
          b
        ), pe++);
      }
      const zo = Ce ? nl(Tt) : yt;
      for (K = zo.length - 1, E = de - 1; E >= 0; E--) {
        const ie = F + E, $e = u[ie], Yo = u[ie + 1], Xo = ie + 1 < T ? (
          // #13559, fallback to el placeholder for unresolved async component
          Yo.el || Yo.placeholder
        ) : v;
        Tt[E] === 0 ? V(
          null,
          $e,
          h,
          Xo,
          m,
          _,
          O,
          N,
          b
        ) : Ce && (K < 0 || E !== zo[K] ? gt($e, h, Xo, 2) : K--);
      }
    }
  }, gt = (l, u, h, v, m = null) => {
    const { el: _, type: O, transition: N, children: b, shapeFlag: E } = l;
    if (E & 6) {
      gt(l.component.subTree, u, h, v);
      return;
    }
    if (E & 128) {
      l.suspense.move(u, h, v);
      return;
    }
    if (E & 64) {
      O.move(l, u, h, Ct);
      return;
    }
    if (O === re) {
      o(_, u, h);
      for (let x = 0; x < b.length; x++)
        gt(b[x], u, h, v);
      o(l.anchor, u, h);
      return;
    }
    if (O === pn) {
      me(l, u, h);
      return;
    }
    if (v !== 2 && E & 1 && N)
      if (v === 0)
        N.beforeEnter(_), o(_, u, h), _e(() => N.enter(_), m);
      else {
        const { leave: x, delayLeave: D, afterLeave: P } = N, F = () => {
          l.ctx.isUnmounted ? s(_) : o(_, u, h);
        }, W = () => {
          _._isLeaving && _[pc](
            !0
            /* cancelled */
          ), x(_, () => {
            F(), P && P();
          });
        };
        D ? D(_, F, W) : W();
      }
    else
      o(_, u, h);
  }, et = (l, u, h, v = !1, m = !1) => {
    const {
      type: _,
      props: O,
      ref: N,
      children: b,
      dynamicChildren: E,
      shapeFlag: T,
      patchFlag: x,
      dirs: D,
      cacheIndex: P
    } = l;
    if (x === -2 && (m = !1), N != null && (De(), Lt(N, null, h, l, !0), Ve()), P != null && (u.renderCache[P] = void 0), T & 256) {
      u.ctx.deactivate(l);
      return;
    }
    const F = T & 1 && D, W = !wt(l);
    let K;
    if (W && (K = O && O.onVnodeBeforeUnmount) && Ae(K, u, l), T & 6)
      Zr(l.component, h, v);
    else {
      if (T & 128) {
        l.suspense.unmount(h, v);
        return;
      }
      F && rt(l, null, u, "beforeUnmount"), T & 64 ? l.type.remove(
        l,
        u,
        h,
        Ct,
        v
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== re || x > 0 && x & 64) ? St(
        E,
        u,
        h,
        !1,
        !0
      ) : (_ === re && x & 384 || !m && T & 16) && St(b, u, h), v && Kn(l);
    }
    (W && (K = O && O.onVnodeUnmounted) || F) && _e(() => {
      K && Ae(K, u, l), F && rt(l, null, u, "unmounted");
    }, h);
  }, Kn = (l) => {
    const { type: u, el: h, anchor: v, transition: m } = l;
    if (u === re) {
      process.env.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((O) => {
        O.type === ge ? s(O.el) : Kn(O);
      }) : Xr(h, v);
      return;
    }
    if (u === pn) {
      S(l);
      return;
    }
    const _ = () => {
      s(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: N } = m, b = () => O(h, _);
      N ? N(l.el, _, b) : b();
    } else
      _();
  }, Xr = (l, u) => {
    let h;
    for (; l !== u; )
      h = g(l), s(l), l = h;
    s(u);
  }, Zr = (l, u, h) => {
    process.env.NODE_ENV !== "production" && l.type.__hmrId && Qi(l);
    const { bum: v, scope: m, job: _, subTree: O, um: N, m: b, a: E } = l;
    ds(b), ds(E), v && Et(v), m.stop(), _ && (_.flags |= 8, et(O, l, u, h)), N && _e(N, u), _e(() => {
      l.isUnmounted = !0;
    }, u), process.env.NODE_ENV !== "production" && ic(l);
  }, St = (l, u, h, v = !1, m = !1, _ = 0) => {
    for (let O = _; O < l.length; O++)
      et(l[O], u, h, v, m);
  }, on = (l) => {
    if (l.shapeFlag & 6)
      return on(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const u = g(l.anchor || l.el), h = u && u[uc];
    return h ? g(h) : u;
  };
  let Bn = !1;
  const Jo = (l, u, h) => {
    l == null ? u._vnode && et(u._vnode, null, null, !0) : V(
      u._vnode || null,
      l,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = l, Bn || (Bn = !0, ns(), ur(), Bn = !1);
  }, Ct = {
    p: V,
    um: et,
    m: gt,
    r: Kn,
    mt: Qe,
    mc: ue,
    pc: Se,
    pbc: Ze,
    n: on,
    o: e
  };
  return {
    render: Jo,
    hydrate: void 0,
    createApp: Fc(Jo)
  };
}
function Zn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function it({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function tl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function an(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (C(o) && C(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let c = s[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[r] = nt(s[r]), c.el = i.el), !n && c.patchFlag !== -2 && an(i, c)), c.type === Qt && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = i.el), c.type === ge && !c.el && (c.el = i.el), process.env.NODE_ENV !== "production" && c.el && (c.el.__vnode = c);
    }
}
function nl(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, c;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const d = e[o];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        c = r + i >> 1, e[n[c]] < d ? r = c + 1 : i = c;
      d < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Pr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pr(t);
}
function ds(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ol = Symbol.for("v-scx"), sl = () => {
  {
    const e = Ut(ol);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Qn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Mr(e, t, n);
}
function Mr(e, t, n = k) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = z({}, n);
  process.env.NODE_ENV !== "production" && (c.onWarn = y);
  const f = t && o || !t && r !== "post";
  let d;
  if (Gt) {
    if (r === "sync") {
      const w = sl();
      d = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!f) {
      const w = () => {
      };
      return w.stop = X, w.resume = X, w.pause = X, w;
    }
  }
  const p = oe;
  c.call = (w, A, V) => He(w, p, A, V);
  let a = !1;
  r === "post" ? c.scheduler = (w) => {
    _e(w, p && p.suspense);
  } : r !== "sync" && (a = !0, c.scheduler = (w, A) => {
    A ? w() : Fn(w);
  }), c.augmentJob = (w) => {
    t && (w.flags |= 4), a && (w.flags |= 2, p && (w.id = p.uid, w.i = p));
  };
  const g = Ki(e, t, c);
  return Gt && (d ? d.push(g) : f && g()), g;
}
function rl(e, t, n) {
  const o = this.proxy, s = G(e) ? e.includes(".") ? Ir(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const i = tn(this), c = Mr(s, r.bind(o), n);
  return i(), c;
}
function Ir(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const il = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Oe(t)}Modifiers`] || e[`${Je(t)}Modifiers`];
function cl(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || k;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(ct(Oe(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ct(Oe(t))}" prop.`
        );
      else {
        const g = p[t];
        $(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && il(o, t.slice(7));
  if (i && (i.trim && (s = n.map((p) => G(p) ? p.trim() : p)), i.number && (s = n.map(oo))), process.env.NODE_ENV !== "production" && fc(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[ct(p)] && y(
      `Event "${p}" is emitted in component ${Un(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Je(
        t
      )}" instead of "${t}".`
    );
  }
  let c, f = o[c = ct(t)] || // also try camelCase event handler (#2249)
  o[c = ct(Oe(t))];
  !f && r && (f = o[c = ct(Je(t))]), f && He(
    f,
    e,
    6,
    s
  );
  const d = o[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, He(
      d,
      e,
      6,
      s
    );
  }
}
const ll = /* @__PURE__ */ new WeakMap();
function Rr(e, t, n = !1) {
  const o = n ? ll : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, c = !1;
  if (!$(e)) {
    const f = (d) => {
      const p = Rr(d, t, !0);
      p && (c = !0, z(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !r && !c ? (B(e) && o.set(e, null), null) : (C(r) ? r.forEach((f) => i[f] = null) : z(i, r), B(e) && o.set(e, i), i);
}
function Hn(e, t) {
  return !e || !Jt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, Je(t)) || j(e, t));
}
let Eo = !1;
function Sn() {
  Eo = !0;
}
function hs(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: c,
    emit: f,
    render: d,
    renderCache: p,
    props: a,
    data: g,
    setupState: w,
    ctx: A,
    inheritAttrs: V
  } = e, Q = On(e);
  let q, L;
  process.env.NODE_ENV !== "production" && (Eo = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = s || o, ee = process.env.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(S, {
        get(Ee, se, ue) {
          return y(
            `Property '${String(
              se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ee, se, ue);
        }
      }) : S;
      q = Ne(
        d.call(
          ee,
          S,
          p,
          process.env.NODE_ENV !== "production" ? Ie(a) : a,
          w,
          g,
          A
        )
      ), L = c;
    } else {
      const S = t;
      process.env.NODE_ENV !== "production" && c === a && Sn(), q = Ne(
        S.length > 1 ? S(
          process.env.NODE_ENV !== "production" ? Ie(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Sn(), Ie(c);
            },
            slots: i,
            emit: f
          } : { attrs: c, slots: i, emit: f }
        ) : S(
          process.env.NODE_ENV !== "production" ? Ie(a) : a,
          null
        )
      ), L = t.props ? c : fl(c);
    }
  } catch (S) {
    kt.length = 0, Xt(S, e, 1), q = Fe(ge);
  }
  let H = q, me;
  if (process.env.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([H, me] = Fr(q)), L && V !== !1) {
    const S = Object.keys(L), { shapeFlag: ee } = H;
    if (S.length) {
      if (ee & 7)
        r && S.some(mn) && (L = ul(
          L,
          r
        )), H = st(H, L, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Eo && H.type !== ge) {
        const Ee = Object.keys(c), se = [], ue = [];
        for (let Le = 0, Ze = Ee.length; Le < Ze; Le++) {
          const be = Ee[Le];
          Jt(be) ? mn(be) || se.push(be[2].toLowerCase() + be.slice(3)) : ue.push(be);
        }
        ue.length && y(
          `Extraneous non-props attributes (${ue.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), se.length && y(
          `Extraneous non-emits event listeners (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !gs(H) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = st(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !gs(H) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), jo(H, n.transition)), process.env.NODE_ENV !== "production" && me ? me(H) : q = H, On(Q), q;
}
const Fr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Bo(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Fr(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (c) => {
    t[s] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [Ne(o), i];
};
function Bo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (en(s)) {
      if (s.type !== ge || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Bo(n.children);
      }
    } else
      return;
  }
  return n;
}
const fl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ul = (e, t) => {
  const n = {};
  for (const o in e)
    (!mn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, gs = (e) => e.shapeFlag & 7 || e.type === ge;
function al(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: c, patchFlag: f } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || c) && Re || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? ms(o, i, d) : !!i;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const g = p[a];
        if (i[g] !== o[g] && !Hn(d, g))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : o === i ? !1 : o ? i ? ms(o, i, d) : !0 : !!i;
  return !1;
}
function ms(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !Hn(n, r))
      return !0;
  }
  return !1;
}
function pl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const jr = (e) => e.__isSuspense;
function dl(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : fr(e);
}
const re = Symbol.for("v-fgt"), Qt = Symbol.for("v-txt"), ge = Symbol.for("v-cmt"), pn = Symbol.for("v-stc"), kt = [];
let ve = null;
function te(e = !1) {
  kt.push(ve = e ? null : []);
}
function hl() {
  kt.pop(), ve = kt[kt.length - 1] || null;
}
let qt = 1;
function _s(e, t = !1) {
  qt += e, e < 0 && ve && t && (ve.hasOnce = !0);
}
function Hr(e) {
  return e.dynamicChildren = qt > 0 ? ve || yt : null, hl(), qt > 0 && ve && ve.push(e), e;
}
function We(e, t, n, o, s, r) {
  return Hr(
    Wo(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function qe(e, t, n, o, s) {
  return Hr(
    Fe(
      e,
      t,
      n,
      o,
      s,
      !0
    )
  );
}
function en(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = un.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const gl = (...e) => Ur(
  ...e
), Lr = ({ key: e }) => e ?? null, dn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || J(e) || $(e) ? { i: Z, r: e, k: t, f: !!n } : e : null);
function Wo(e, t = null, n = null, o = 0, s = null, r = e === re ? 0 : 1, i = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Lr(t),
    ref: t && dn(t),
    scopeId: gr,
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
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Z
  };
  return c ? (qo(f, n), r & 128 && e.normalize(f)) : n && (f.shapeFlag |= G(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), qt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ve.push(f), f;
}
const Fe = process.env.NODE_ENV !== "production" ? gl : Ur;
function Ur(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Dc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ge), en(e)) {
    const c = st(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && qo(c, n), qt > 0 && !r && ve && (c.shapeFlag & 6 ? ve[ve.indexOf(e)] = c : ve.push(c)), c.patchFlag = -2, c;
  }
  if (Gr(e) && (e = e.__vccOpts), t) {
    t = ml(t);
    let { class: c, style: f } = t;
    c && !G(c) && (t.class = Yt(c)), B(f) && (vn(f) && !C(f) && (f = z({}, f)), t.style = So(f));
  }
  const i = G(e) ? 1 : jr(e) ? 128 : ac(e) ? 64 : B(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && vn(e) && (e = M(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Wo(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function ml(e) {
  return e ? vn(e) || Vr(e) ? z({}, e) : e : null;
}
function st(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: c, transition: f } = e, d = t ? _l(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Lr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(dn(t)) : [r, dn(t)] : dn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && C(c) ? c.map(kr) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== re ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && st(e.ssContent),
    ssFallback: e.ssFallback && st(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && jo(
    p,
    f.clone(p)
  ), p;
}
function kr(e) {
  const t = st(e);
  return C(e.children) && (t.children = e.children.map(kr)), t;
}
function bo(e = " ", t = 0) {
  return Fe(Qt, null, e, t);
}
function hn(e = "", t = !1) {
  return t ? (te(), qe(ge, null, e)) : Fe(ge, null, e);
}
function Ne(e) {
  return e == null || typeof e == "boolean" ? Fe(ge) : C(e) ? Fe(
    re,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : en(e) ? nt(e) : Fe(Qt, null, String(e));
}
function nt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : st(e);
}
function qo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), qo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Vr(t) ? t._ctx = Z : s === 3 && Z && (Z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: Z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [bo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _l(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Yt([t.class, o.class]));
      else if (s === "style")
        t.style = So([t.style, o.style]);
      else if (Jt(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(C(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Ae(e, t, n, o = null) {
  He(e, t, 7, [
    n,
    o
  ]);
}
const vl = wr();
let El = 0;
function bl(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || vl, r = {
    uid: El++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new gi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Cr(o, s),
    emitsOptions: Rr(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: k,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: k,
    data: k,
    props: k,
    attrs: k,
    slots: k,
    refs: k,
    setupState: k,
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
  return process.env.NODE_ENV !== "production" ? r.ctx = Vc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = cl.bind(null, r), e.ce && e.ce(r), r;
}
let oe = null;
const Kr = () => oe || Z;
let Cn, No;
{
  const e = zt(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  Cn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => oe = n
  ), No = t(
    "__VUE_SSR_SETTERS__",
    (n) => Gt = n
  );
}
const tn = (e) => {
  const t = oe;
  return Cn(e), e.scope.on(), () => {
    e.scope.off(), Cn(t);
  };
}, vs = () => {
  oe && oe.scope.off(), Cn(null);
}, Nl = /* @__PURE__ */ ze("slot,component");
function yo(e, { isNativeTag: t }) {
  (Nl(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Br(e) {
  return e.vnode.shapeFlag & 4;
}
let Gt = !1;
function yl(e, t = !1, n = !1) {
  t && No(t);
  const { props: o, children: s } = e.vnode, r = Br(e);
  Hc(e, o, r, t), Yc(e, s, n || t);
  const i = r ? Ol(e, t) : void 0;
  return t && No(!1), i;
}
function Ol(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && yo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        yo(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        mr(r[i]);
    }
    o.compilerOptions && wl() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nr), process.env.NODE_ENV !== "production" && Sc(e);
  const { setup: s } = o;
  if (s) {
    De();
    const r = e.setupContext = s.length > 1 ? Dl(e) : null, i = tn(e), c = Dt(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Ie(e.props) : e.props,
        r
      ]
    ), f = xo(c);
    if (Ve(), i(), (f || e.sp) && !wt(e) && _r(e), f) {
      if (c.then(vs, vs), t)
        return c.then((d) => {
          Es(e, d, t);
        }).catch((d) => {
          Xt(d, e, 0);
        });
      if (e.asyncDep = c, process.env.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Es(e, c, t);
  } else
    Wr(e, t);
}
function Es(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) ? (process.env.NODE_ENV !== "production" && en(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = rr(t), process.env.NODE_ENV !== "production" && Cc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Wr(e, n);
}
const wl = () => !0;
function Wr(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || X);
  {
    const s = tn(e);
    De();
    try {
      $c(e);
    } finally {
      Ve(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === X && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", o));
}
const bs = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Sn(), Y(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Y(e, "get", ""), e[t];
  }
};
function xl(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Y(e, "get", "$slots"), t[n];
    }
  });
}
function Dl(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : J(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, bs));
      },
      get slots() {
        return o || (o = xl(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, bs),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ln(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rr(Ri(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in dt)
        return dt[n](e);
    },
    has(t, n) {
      return n in t || n in dt;
    }
  })) : e.proxy;
}
const Vl = /(?:^|[-_])\w/g, Sl = (e) => e.replace(Vl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function qr(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Un(e, t, n = !1) {
  let o = qr(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Sl(o) : n ? "App" : "Anonymous";
}
function Gr(e) {
  return $(e) && "__vccOpts" in e;
}
const Cl = (e, t) => {
  const n = Ui(e, t, Gt);
  if (process.env.NODE_ENV !== "production") {
    const o = Kr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Tl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!B(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (J(a)) {
        De();
        const g = a.value;
        return Ve(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          c(g),
          ">"
        ];
      } else {
        if (at(a))
          return [
            "div",
            {},
            ["span", e, fe(a) ? "ShallowReactive" : "Reactive"],
            "<",
            c(a),
            `>${je(a) ? " (readonly)" : ""}`
          ];
        if (je(a))
          return [
            "div",
            {},
            ["span", e, fe(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(a),
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
    const g = [];
    a.type.props && a.props && g.push(i("props", M(a.props))), a.setupState !== k && g.push(i("setup", a.setupState)), a.data !== k && g.push(i("data", M(a.data)));
    const w = f(a, "computed");
    w && g.push(i("computed", w));
    const A = f(a, "inject");
    return A && g.push(i("injected", A)), g.push([
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
    ]), g;
  }
  function i(a, g) {
    return g = z({}, g), Object.keys(g).length ? [
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
        ...Object.keys(g).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          c(g[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : B(a) ? ["object", { object: g ? M(a) : a }] : ["span", n, String(a)];
  }
  function f(a, g) {
    const w = a.type;
    if ($(w))
      return;
    const A = {};
    for (const V in a.ctx)
      d(w, V, g) && (A[V] = a.ctx[V]);
    return A;
  }
  function d(a, g, w) {
    const A = a[w];
    if (C(A) && A.includes(g) || B(A) && g in A || a.extends && d(a.extends, g, w) || a.mixins && a.mixins.some((V) => d(V, g, w)))
      return !0;
  }
  function p(a) {
    return fe(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Ns = "3.5.22", Ge = process.env.NODE_ENV !== "production" ? y : X;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Oo;
const ys = typeof window < "u" && window.trustedTypes;
if (ys)
  try {
    Oo = /* @__PURE__ */ ys.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Ge(`Error creating trusted types policy: ${e}`);
  }
const Jr = Oo ? (e) => Oo.createHTML(e) : (e) => e, $l = "http://www.w3.org/2000/svg", Al = "http://www.w3.org/1998/Math/MathML", ke = typeof document < "u" ? document : null, Os = ke && /* @__PURE__ */ ke.createElement("template"), Pl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? ke.createElementNS($l, e) : t === "mathml" ? ke.createElementNS(Al, e) : n ? ke.createElement(e, { is: n }) : ke.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => ke.createTextNode(e),
  createComment: (e) => ke.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ke.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Os.innerHTML = Jr(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Os.content;
      if (o === "svg" || o === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ml = Symbol("_vtc");
function Il(e, t, n) {
  const o = e[Ml];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Tn = Symbol("_vod"), zr = Symbol("_vsh"), Nf = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Tn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Mt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), Mt(e, !0), o.enter(e)) : o.leave(e, () => {
      Mt(e, !1);
    }) : Mt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Mt(e, t);
  }
};
function Mt(e, t) {
  e.style.display = t ? e[Tn] : "none", e[zr] = !t;
}
const Rl = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Fl = /(?:^|;)\s*display\s*:/;
function jl(e, t, n) {
  const o = e.style, s = G(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (G(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          n[c] == null && gn(o, c, "");
        }
      else
        for (const i in t)
          n[i] == null && gn(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), gn(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[Rl];
      i && (n += ";" + i), o.cssText = n, r = Fl.test(n);
    }
  } else t && e.removeAttribute("style");
  Tn in e && (e[Tn] = r ? o.display : "", e[zr] && (o.display = "none"));
}
const Hl = /[^\\];\s*$/, ws = /\s*!important$/;
function gn(e, t, n) {
  if (C(n))
    n.forEach((o) => gn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Hl.test(n) && Ge(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Ll(e, t);
    ws.test(n) ? e.setProperty(
      Je(o),
      n.replace(ws, ""),
      "important"
    ) : e[o] = n;
  }
}
const xs = ["Webkit", "Moz", "ms"], eo = {};
function Ll(e, t) {
  const n = eo[t];
  if (n)
    return n;
  let o = Oe(t);
  if (o !== "filter" && o in e)
    return eo[t] = o;
  o = Pn(o);
  for (let s = 0; s < xs.length; s++) {
    const r = xs[s] + o;
    if (r in e)
      return eo[t] = r;
  }
  return t;
}
const Ds = "http://www.w3.org/1999/xlink";
function Vs(e, t, n, o, s, r = hi(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ds, t.slice(6, t.length)) : e.setAttributeNS(Ds, t, n) : n == null || r && !Ls(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ye(n) ? String(n) : n
  );
}
function Ss(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Jr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Ls(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !i && Ge(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  i && e.removeAttribute(s || t);
}
function Nt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ul(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Cs = Symbol("_vei");
function kl(e, t, n, o, s = null) {
  const r = e[Cs] || (e[Cs] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? $s(o, t) : o;
  else {
    const [c, f] = Kl(t);
    if (o) {
      const d = r[t] = ql(
        process.env.NODE_ENV !== "production" ? $s(o, t) : o,
        s
      );
      Nt(e, c, d, f);
    } else i && (Ul(e, c, i, f), r[t] = void 0);
  }
}
const Ts = /(?:Once|Passive|Capture)$/;
function Kl(e) {
  let t;
  if (Ts.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Ts); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Je(e.slice(2)), t];
}
let to = 0;
const Bl = /* @__PURE__ */ Promise.resolve(), Wl = () => to || (Bl.then(() => to = 0), to = Date.now());
function ql(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    He(
      Gl(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Wl(), n;
}
function $s(e, t) {
  return $(e) || C(e) ? e : (Ge(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), X);
}
function Gl(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const As = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jl = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? Il(e, o, i) : t === "style" ? jl(e, n, o) : Jt(t) ? mn(t) || kl(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : zl(e, t, o, i)) ? (Ss(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vs(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(o)) ? Ss(e, Oe(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Vs(e, t, o, i));
};
function zl(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && As(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return As(t) && G(n) ? !1 : t in e;
}
const Ps = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return C(t) ? (n) => Et(t, n) : t;
};
function Yl(e) {
  e.target.composing = !0;
}
function Ms(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const no = Symbol("_assign"), yf = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, s) {
    e[no] = Ps(s);
    const r = o || s.props && s.props.type === "number";
    Nt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let c = e.value;
      n && (c = c.trim()), r && (c = oo(c)), e[no](c);
    }), n && Nt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Nt(e, "compositionstart", Yl), Nt(e, "compositionend", Ms), Nt(e, "change", Ms));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: s, number: r } }, i) {
    if (e[no] = Ps(i), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? oo(e.value) : e.value, f = t ?? "";
    c !== f && (document.activeElement === e && e.type !== "range" && (o && t === n || s && e.value.trim() === f) || (e.value = f));
  }
}, Xl = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Of = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = ((s) => {
    if (!("key" in s))
      return;
    const r = Je(s.key);
    if (t.some(
      (i) => i === r || Xl[i] === r
    ))
      return e(s);
  }));
}, Zl = /* @__PURE__ */ z({ patchProp: Jl }, Pl);
let Is;
function Ql() {
  return Is || (Is = Qc(Zl));
}
const wf = ((...e) => {
  const t = Ql().createApp(...e);
  process.env.NODE_ENV !== "production" && (tf(t), nf(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = of(o);
    if (!s) return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, ef(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
});
function ef(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ui(t) || ai(t) || pi(t),
    writable: !1
  });
}
function nf(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ge(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ge(o), n;
      },
      set() {
        Ge(o);
      }
    });
  }
}
function of(e) {
  if (G(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Ge(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ge(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function sf() {
  Tl();
}
process.env.NODE_ENV !== "production" && sf();
class xf {
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
const rf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, cf = {
  __name: "Title",
  props: { size: String },
  setup(e) {
    return (t, n) => (te(), We("h6", {
      class: Yt(["mb-3 min-h-2 font-bold", e.size])
    }, [
      Lo(t.$slots, "default")
    ], 2));
  }
}, lf = { class: "w-full mb-3" }, ff = ["src", "alt"], uf = {
  __name: "Image",
  props: { src: String, alt: String },
  setup(e) {
    return (t, n) => (te(), We("div", lf, [
      Wo("img", {
        src: e.src,
        alt: e.alt
      }, null, 8, ff)
    ]));
  }
}, af = {}, pf = { class: "mb-3 min-h-2" };
function df(e, t) {
  return te(), We("p", pf, [
    Lo(e.$slots, "default")
  ]);
}
const hf = /* @__PURE__ */ rf(af, [["render", df]]), Yr = {
  __name: "Section",
  props: { section: Object },
  setup(e) {
    const t = Ut("titles");
    return (n, o) => (te(), We("div", {
      class: Yt(`w-full ${e.section.type}-section`)
    }, [
      uo(t).list.has(e.section.type) ? (te(), qe(cf, {
        key: 0,
        size: uo(t).type[e.section.type]
      }, {
        default: wn(() => [
          bo(so(e.section.content), 1)
        ]),
        _: 1
      }, 8, ["size"])) : hn("", !0),
      e.section.type == "p" ? (te(), qe(hf, { key: 1 }, {
        default: wn(() => [
          bo(so(e.section.content), 1)
        ]),
        _: 1
      })) : hn("", !0),
      e.section.type == "img" ? (te(), qe(uf, {
        key: 2,
        src: e.section.content
      }, null, 8, ["src"])) : hn("", !0),
      Lo(n.$slots, "default")
    ], 2));
  }
}, gf = { class: "w-full flex flex-col md:flex-row space-x-3" }, mf = { class: "w-full md:w-1/2 mb-3" }, _f = /* @__PURE__ */ dc({
  __name: "Columns",
  props: { content: Array },
  setup(e) {
    return (t, n) => (te(), We("div", gf, [
      (te(!0), We(re, null, po(e.content, (o) => (te(), We("div", mf, [
        (te(!0), We(re, null, po(o, (s) => (te(), qe(Yr, { section: s }, null, 8, ["section"]))), 256))
      ]))), 256))
    ]));
  }
}), Df = {
  __name: "Page",
  props: { sections: Array },
  setup(e) {
    return (t, n) => (te(!0), We(re, null, po(e.sections, (o) => (te(), qe(Yr, { section: o }, {
      default: wn(() => [
        o.type == "col" ? (te(), qe(_f, {
          key: 0,
          content: o.content
        }, null, 8, ["content"])) : hn("", !0)
      ]),
      _: 2
    }, 1032, ["section"]))), 256));
  }
};
export {
  uf as A,
  Df as B,
  wf as C,
  re as F,
  hf as P,
  xf as T,
  rf as _,
  qe as a,
  Cl as b,
  We as c,
  dc as d,
  hn as e,
  Wo as f,
  Ef as g,
  bf as h,
  Ut as i,
  Fe as j,
  po as k,
  cf as l,
  _l as m,
  bo as n,
  te as o,
  jc as p,
  Qn as q,
  Lo as r,
  Yi as s,
  so as t,
  uo as u,
  Nf as v,
  wn as w,
  Yt as x,
  Of as y,
  yf as z
};
