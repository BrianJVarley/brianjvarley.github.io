function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

const __mfPromiseGlobalKey = "__mf_init____mf__virtual/__mfe_internal__reactMfe__mf_v__runtimeInit__mf_v__.js__";
let __mfPromiseState = globalThis[__mfPromiseGlobalKey];
if (!__mfPromiseState) {
  let initResolve, initReject;
  const initPromise = new Promise((re, rj) => {
    initResolve = re;
    initReject = rj;
  });
  __mfPromiseState = globalThis[__mfPromiseGlobalKey] = {
    initPromise,
    initResolve,
    initReject,
  };
  if (typeof window === 'undefined') {
    initResolve({
      loadRemote: function() { return Promise.resolve(undefined); },
      loadShare: function() { return Promise.resolve(undefined); },
    });
  }
}
const initPromise = __mfPromiseState.initPromise;

    
    const res = initPromise.then(runtime => runtime.loadShare("react-dom", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^19.0.0"
      }}
    }));
    const exportModule = await res.then((factory) => (typeof factory === "function" ? factory() : factory));
    const __moduleExports = exportModule;
const __mfe_internal__reactMfe__loadShare__react_mf_2_dom__loadShare__ = exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
    const { __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: __mf_0, createPortal: __mf_1, flushSync: __mf_2, preconnect: __mf_3, prefetchDNS: __mf_4, preinit: __mf_5, preinitModule: __mf_6, preload: __mf_7, preloadModule: __mf_8, requestFormReset: __mf_9, unstable_batchedUpdates: __mf_10, useFormState: __mf_11, useFormStatus: __mf_12, version: __mf_13 } = exportModule;

const __mfe_internal__reactMfe__loadShare__react_mf_2_dom__loadShare__$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: __mf_0,
  createPortal: __mf_1,
  default: __mfe_internal__reactMfe__loadShare__react_mf_2_dom__loadShare__,
  flushSync: __mf_2,
  preconnect: __mf_3,
  prefetchDNS: __mf_4,
  preinit: __mf_5,
  preinitModule: __mf_6,
  preload: __mf_7,
  preloadModule: __mf_8,
  requestFormReset: __mf_9,
  unstable_batchedUpdates: __mf_10,
  useFormState: __mf_11,
  useFormStatus: __mf_12,
  version: __mf_13
}, [__moduleExports]);

export { __mfe_internal__reactMfe__loadShare__react_mf_2_dom__loadShare__$1 as _, __mf_2 as a };
