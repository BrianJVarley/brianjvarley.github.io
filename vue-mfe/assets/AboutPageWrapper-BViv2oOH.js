import { _ as __mf_6 } from './__mfe_internal__vueMfe__loadShare__vue__loadShare__.js-7Qbf8ykb.js';
import { A as AboutPage$1, c as createPinia } from './AboutPage-CQnTH9_X.js';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function jsxProd(type, config, maybeKey) {
  var key = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config.key && (key = "" + config.key);
  if ("key" in config) {
    maybeKey = {};
    for (var propName in config)
      "key" !== propName && (maybeKey[propName] = config[propName]);
  } else maybeKey = config;
  config = maybeKey.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== config ? config : null,
    props: maybeKey
  };
}
reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
reactJsxRuntime_production.jsx = jsxProd;
reactJsxRuntime_production.jsxs = jsxProd;

{
  jsxRuntime.exports = reactJsxRuntime_production;
}

var jsxRuntimeExports = jsxRuntime.exports;

const AboutPageElement = __mf_6(AboutPage$1, {
  configureApp(app) {
    app.use(createPinia());
  }
});
if (!customElements.get("about-page")) {
  customElements.define("about-page", AboutPageElement);
}
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("about-page", {});
}
const __mfe_side_effects__ = true;

export { __mfe_side_effects__, AboutPage as default };
