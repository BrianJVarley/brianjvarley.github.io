const __mfPromiseGlobalKey = "__mf_init____mf__virtual/__mfe_internal__vueMfe__mf_v__runtimeInit__mf_v__.js__";
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

    
    const res = initPromise.then(runtime => runtime.loadShare("vue", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^3.5.0"
      }}
    }));
    const exportModule = await res.then((factory) => (typeof factory === "function" ? factory() : factory));
exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
    const { compile: __mf_0, Transition: __mf_1, TransitionGroup: __mf_2, VueElement: __mf_3, createApp: __mf_4, createSSRApp: __mf_5, defineCustomElement: __mf_6, defineSSRCustomElement: __mf_7, hydrate: __mf_8, initDirectivesForSSR: __mf_9, nodeOps: __mf_10, patchProp: __mf_11, render: __mf_12, useCssModule: __mf_13, useCssVars: __mf_14, useHost: __mf_15, useShadowRoot: __mf_16, vModelCheckbox: __mf_17, vModelDynamic: __mf_18, vModelRadio: __mf_19, vModelSelect: __mf_20, vModelText: __mf_21, vShow: __mf_22, withKeys: __mf_23, withModifiers: __mf_24, EffectScope: __mf_25, ReactiveEffect: __mf_26, TrackOpTypes: __mf_27, TriggerOpTypes: __mf_28, customRef: __mf_29, effect: __mf_30, effectScope: __mf_31, getCurrentScope: __mf_32, getCurrentWatcher: __mf_33, isProxy: __mf_34, isReactive: __mf_35, isReadonly: __mf_36, isRef: __mf_37, isShallow: __mf_38, markRaw: __mf_39, onScopeDispose: __mf_40, onWatcherCleanup: __mf_41, proxyRefs: __mf_42, reactive: __mf_43, readonly: __mf_44, ref: __mf_45, shallowReactive: __mf_46, shallowReadonly: __mf_47, shallowRef: __mf_48, stop: __mf_49, toRaw: __mf_50, toRef: __mf_51, toRefs: __mf_52, toValue: __mf_53, triggerRef: __mf_54, unref: __mf_55, camelize: __mf_56, capitalize: __mf_57, normalizeClass: __mf_58, normalizeProps: __mf_59, normalizeStyle: __mf_60, toDisplayString: __mf_61, toHandlerKey: __mf_62, BaseTransition: __mf_63, BaseTransitionPropsValidators: __mf_64, Comment: __mf_65, DeprecationTypes: __mf_66, ErrorCodes: __mf_67, ErrorTypeStrings: __mf_68, Fragment: __mf_69, KeepAlive: __mf_70, Static: __mf_71, Suspense: __mf_72, Teleport: __mf_73, Text: __mf_74, assertNumber: __mf_75, callWithAsyncErrorHandling: __mf_76, callWithErrorHandling: __mf_77, cloneVNode: __mf_78, compatUtils: __mf_79, computed: __mf_80, createBlock: __mf_81, createCommentVNode: __mf_82, createElementBlock: __mf_83, createElementVNode: __mf_84, createHydrationRenderer: __mf_85, createPropsRestProxy: __mf_86, createRenderer: __mf_87, createSlots: __mf_88, createStaticVNode: __mf_89, createTextVNode: __mf_90, createVNode: __mf_91, defineAsyncComponent: __mf_92, defineComponent: __mf_93, defineEmits: __mf_94, defineExpose: __mf_95, defineModel: __mf_96, defineOptions: __mf_97, defineProps: __mf_98, defineSlots: __mf_99, devtools: __mf_100, getCurrentInstance: __mf_101, getTransitionRawChildren: __mf_102, guardReactiveProps: __mf_103, h: __mf_104, handleError: __mf_105, hasInjectionContext: __mf_106, hydrateOnIdle: __mf_107, hydrateOnInteraction: __mf_108, hydrateOnMediaQuery: __mf_109, hydrateOnVisible: __mf_110, initCustomFormatter: __mf_111, inject: __mf_112, isMemoSame: __mf_113, isRuntimeOnly: __mf_114, isVNode: __mf_115, mergeDefaults: __mf_116, mergeModels: __mf_117, mergeProps: __mf_118, nextTick: __mf_119, onActivated: __mf_120, onBeforeMount: __mf_121, onBeforeUnmount: __mf_122, onBeforeUpdate: __mf_123, onDeactivated: __mf_124, onErrorCaptured: __mf_125, onMounted: __mf_126, onRenderTracked: __mf_127, onRenderTriggered: __mf_128, onServerPrefetch: __mf_129, onUnmounted: __mf_130, onUpdated: __mf_131, openBlock: __mf_132, popScopeId: __mf_133, provide: __mf_134, pushScopeId: __mf_135, queuePostFlushCb: __mf_136, registerRuntimeCompiler: __mf_137, renderList: __mf_138, renderSlot: __mf_139, resolveComponent: __mf_140, resolveDirective: __mf_141, resolveDynamicComponent: __mf_142, resolveFilter: __mf_143, resolveTransitionHooks: __mf_144, setBlockTracking: __mf_145, setDevtoolsHook: __mf_146, setTransitionHooks: __mf_147, ssrContextKey: __mf_148, ssrUtils: __mf_149, toHandlers: __mf_150, transformVNodeArgs: __mf_151, useAttrs: __mf_152, useId: __mf_153, useModel: __mf_154, useSSRContext: __mf_155, useSlots: __mf_156, useTemplateRef: __mf_157, useTransitionState: __mf_158, version: __mf_159, warn: __mf_160, watch: __mf_161, watchEffect: __mf_162, watchPostEffect: __mf_163, watchSyncEffect: __mf_164, withAsyncContext: __mf_165, withCtx: __mf_166, withDefaults: __mf_167, withDirectives: __mf_168, withMemo: __mf_169, withScopeId: __mf_170 } = exportModule;

export { __mf_58 as A, __mf_2 as B, __mf_166 as C, __mf_60 as D, __mf_6 as _, __mf_93 as a, __mf_132 as b, __mf_83 as c, __mf_84 as d, __mf_91 as e, __mf_4 as f, __mf_50 as g, __mf_80 as h, __mf_37 as i, __mf_35 as j, __mf_51 as k, __mf_31 as l, __mf_45 as m, __mf_39 as n, __mf_106 as o, __mf_112 as p, __mf_43 as q, __mf_32 as r, __mf_40 as s, __mf_161 as t, __mf_119 as u, __mf_52 as v, __mf_61 as w, __mf_69 as x, __mf_138 as y, __mf_55 as z };
