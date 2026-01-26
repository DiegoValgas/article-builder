import { i as a, g as n, T as i, q as r, p, a as f, B as u, o as l, C as g } from "./chunks/Page-BZCK4smU.js";
const _ = {
  __name: "Page",
  setup(o) {
    const t = a("config"), e = n([]), c = new i();
    return r(
      () => t.value.content,
      (s) => e.value = s,
      { deep: !0 }
    ), p("titles", c), (s, m) => (l(), f(u, { sections: e.value }, null, 8, ["sections"]));
  }
};
class h {
  /**
   * @param {String} selector CSS selector where to mount the page.
   * @param {Object} customConfig Custom configuration object.
   */
  constructor(t, e = {}) {
    t && (this.config = n(e), g(_).provide("config", this.config).mount(t));
  }
  /**
   * Set the content that build the page.
   * @param {String} content The page content.
   * @return {void}
   */
  setContent(t) {
    typeof t == "string" && (this.config.value.content = JSON.parse(t));
  }
}
export {
  h as Page
};
