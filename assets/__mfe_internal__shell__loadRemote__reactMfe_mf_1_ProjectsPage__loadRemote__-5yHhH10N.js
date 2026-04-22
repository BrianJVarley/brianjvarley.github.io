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

const __mfPromiseGlobalKey = "__mf_init____mf__virtual/__mfe_internal__shell__mf_v__runtimeInit__mf_v__.js__";
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

    const res = initPromise.then(runtime => runtime.loadRemote("reactMfe/ProjectsPage"));
    const exportModule = await initPromise.then(_ => res);
    const __moduleExports = exportModule;
const __mfe_internal__shell__loadRemote__reactMfe_mf_1_ProjectsPage__loadRemote__ = exportModule.__esModule ? exportModule.default : exportModule;

const __mfe_internal__shell__loadRemote__reactMfe_mf_1_ProjectsPage__loadRemote__$1 = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: __mfe_internal__shell__loadRemote__reactMfe_mf_1_ProjectsPage__loadRemote__
}, [__moduleExports]);

export { __mfe_internal__shell__loadRemote__reactMfe_mf_1_ProjectsPage__loadRemote__$1 as _ };
