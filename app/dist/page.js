import { inject as i, ref as o, watch as r, provide as a, createBlock as f, openBlock as p, createApp as u } from "vue";
import { T as l, c as _ } from "./chunks/Page-LcUnlR2K.js";
const g = {
  __name: "Page",
  setup(c) {
    const t = i("config"), e = o([]), s = new l();
    return r(
      () => t.value.content,
      (n) => e.value = n,
      { deep: !0 }
    ), a("titles", s), (n, m) => (p(), f(_, { sections: e.value }, null, 8, ["sections"]));
  }
};
class d {
  /**
   * @param {String} selector CSS selector where to mount the page.
   * @param {Object} customConfig Custom configuration object.
   */
  constructor(t, e = {}) {
    t && (this.config = o(e), u(g).provide("config", this.config).mount(t));
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
  d as Page
};
