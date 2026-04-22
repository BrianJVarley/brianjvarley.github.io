import './virtualExposes-DKVCWsLk.js';
import './remoteEntry-BelUO6nz.js';
import { a as __mf_93, b as __mf_132, c as __mf_83, d as __mf_84, e as __mf_91, f as __mf_4 } from './__mfe_internal__vueMfe__loadShare__vue__loadShare__.js-7Qbf8ykb.js';
import { A as AboutPage, _ as _export_sfc, c as createPinia } from './AboutPage-CQnTH9_X.js';
import './preload-helper-BC7ZYKCr.js';

true              &&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

const _hoisted_1 = { style: { "padding": "2rem" } };
const _sfc_main = /* @__PURE__ */ __mf_93({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return __mf_132(), __mf_83("div", _hoisted_1, [
        _cache[0] || (_cache[0] = __mf_84("p", { class: "dev-badge" }, "↳ Vue MFE · Standalone dev mode", -1)),
        __mf_91(AboutPage)
      ]);
    };
  }
});

const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a848da1"]]);

const app = __mf_4(App);
app.use(createPinia());
app.mount("#app");
