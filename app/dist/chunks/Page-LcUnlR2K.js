import { createElementBlock as c, openBlock as s, normalizeClass as p, renderSlot as _, createElementVNode as x, inject as $, createBlock as o, createCommentVNode as l, unref as m, withCtx as a, createTextVNode as f, toDisplayString as d, defineComponent as g, Fragment as u, renderList as h } from "vue";
class O {
  /**
   * @param {String} type Title type. Options: h1, h2, h3, h4, h5, h6.
   */
  constructor(e) {
    this.type = {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-sm"
    }, this.list = new Set(Object.keys(this.type)), this.options = [], this.list.forEach((n) => this.options.push(
      { type: n, content: `Título ${n.charAt(1)}` }
    )), this.fromType(e);
  }
  /**
   * Set the current title properties.
   * @param {String} type Title type. Options: h1, h2, h3, h4, h5, h6.
   * @return {self}
   */
  fromType(e) {
    return this.current = { type: null, class: "foo" }, this.list.has(e) && (this.current.type = e, this.current.class = this.type[e]), this;
  }
}
const k = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, b = {
  __name: "Title",
  props: { size: String },
  setup(t) {
    return (e, n) => (s(), c("h6", {
      class: p(["mb-3 min-h-2 font-bold", t.size])
    }, [
      _(e.$slots, "default")
    ], 2));
  }
}, w = { class: "w-full mb-3" }, S = ["src", "alt"], T = {
  __name: "Image",
  props: { src: String, alt: String },
  setup(t) {
    return (e, n) => (s(), c("div", w, [
      x("img", {
        src: t.src,
        alt: t.alt
      }, null, 8, S)
    ]));
  }
}, v = {}, z = { class: "mb-3 min-h-2" };
function C(t, e) {
  return s(), c("p", z, [
    _(t.$slots, "default")
  ]);
}
const j = /* @__PURE__ */ k(v, [["render", C]]), y = {
  __name: "Section",
  props: { section: Object },
  setup(t) {
    const e = $("titles");
    return (n, r) => (s(), c("div", {
      class: p(`w-full ${t.section.type}-section`)
    }, [
      m(e).list.has(t.section.type) ? (s(), o(b, {
        key: 0,
        size: m(e).type[t.section.type]
      }, {
        default: a(() => [
          f(d(t.section.content), 1)
        ]),
        _: 1
      }, 8, ["size"])) : l("", !0),
      t.section.type == "p" ? (s(), o(j, { key: 1 }, {
        default: a(() => [
          f(d(t.section.content), 1)
        ]),
        _: 1
      })) : l("", !0),
      t.section.type == "img" ? (s(), o(T, {
        key: 2,
        src: t.section.content
      }, null, 8, ["src"])) : l("", !0),
      _(n.$slots, "default")
    ], 2));
  }
}, A = { class: "w-full flex flex-col md:flex-row space-x-3" }, B = { class: "w-full md:w-1/2 mb-3" }, E = /* @__PURE__ */ g({
  __name: "Columns",
  props: { content: Array },
  setup(t) {
    return (e, n) => (s(), c("div", A, [
      (s(!0), c(u, null, h(t.content, (r) => (s(), c("div", B, [
        (s(!0), c(u, null, h(r, (i) => (s(), o(y, { section: i }, null, 8, ["section"]))), 256))
      ]))), 256))
    ]));
  }
}), P = {
  __name: "Page",
  props: { sections: Array },
  setup(t) {
    return (e, n) => (s(!0), c(u, null, h(t.sections, (r) => (s(), o(y, { section: r }, {
      default: a(() => [
        r.type == "col" ? (s(), o(E, {
          key: 0,
          content: r.content
        }, null, 8, ["content"])) : l("", !0)
      ]),
      _: 2
    }, 1032, ["section"]))), 256));
  }
};
export {
  j as P,
  O as T,
  k as _,
  b as a,
  T as b,
  P as c
};
