import { g as n, T as a, q as i, a as r, B as p, i as f, o as u, p as l, C as g } from "./Page-DjQGXeEO.js";
const _ = {
  __name: "Page",
  setup(o) {
    const t = f("config"), e = n([]), c = new a();
    return i(
      () => t.value.content,
      (s) => e.value = s,
      { deep: !0 }
    ), l("titles", c), (s, m) => (u(), r(p, { sections: e.value }, null, 8, ["sections"]));
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
