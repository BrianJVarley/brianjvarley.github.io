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

    
    const res = initPromise.then(runtime => runtime.loadShare("react-router-dom", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^7.1.0"
      }}
    }));
    const exportModule = await res.then((factory) => (typeof factory === "function" ? factory() : factory));
exportModule.__esModule ? exportModule.default : exportModule.default ?? exportModule;
    const { HydratedRouter: __mf_0, RouterProvider: __mf_1, Await: __mf_2, BrowserRouter: __mf_3, Form: __mf_4, HashRouter: __mf_5, IDLE_BLOCKER: __mf_6, IDLE_FETCHER: __mf_7, IDLE_NAVIGATION: __mf_8, Link: __mf_9, Links: __mf_10, MemoryRouter: __mf_11, Meta: __mf_12, NavLink: __mf_13, Navigate: __mf_14, NavigationType: __mf_15, Outlet: __mf_16, PrefetchPageLinks: __mf_17, Route: __mf_18, Router: __mf_19, RouterContextProvider: __mf_20, Routes: __mf_21, Scripts: __mf_22, ScrollRestoration: __mf_23, ServerRouter: __mf_24, StaticRouter: __mf_25, StaticRouterProvider: __mf_26, UNSAFE_AwaitContextProvider: __mf_27, UNSAFE_DataRouterContext: __mf_28, UNSAFE_DataRouterStateContext: __mf_29, UNSAFE_ErrorResponseImpl: __mf_30, UNSAFE_FetchersContext: __mf_31, UNSAFE_FrameworkContext: __mf_32, UNSAFE_LocationContext: __mf_33, UNSAFE_NavigationContext: __mf_34, UNSAFE_RSCDefaultRootErrorBoundary: __mf_35, UNSAFE_RemixErrorBoundary: __mf_36, UNSAFE_RouteContext: __mf_37, UNSAFE_ServerMode: __mf_38, UNSAFE_SingleFetchRedirectSymbol: __mf_39, UNSAFE_ViewTransitionContext: __mf_40, UNSAFE_WithComponentProps: __mf_41, UNSAFE_WithErrorBoundaryProps: __mf_42, UNSAFE_WithHydrateFallbackProps: __mf_43, UNSAFE_createBrowserHistory: __mf_44, UNSAFE_createClientRoutes: __mf_45, UNSAFE_createClientRoutesWithHMRRevalidationOptOut: __mf_46, UNSAFE_createHashHistory: __mf_47, UNSAFE_createMemoryHistory: __mf_48, UNSAFE_createRouter: __mf_49, UNSAFE_decodeViaTurboStream: __mf_50, UNSAFE_deserializeErrors: __mf_51, UNSAFE_getHydrationData: __mf_52, UNSAFE_getPatchRoutesOnNavigationFunction: __mf_53, UNSAFE_getTurboStreamSingleFetchDataStrategy: __mf_54, UNSAFE_hydrationRouteProperties: __mf_55, UNSAFE_invariant: __mf_56, UNSAFE_mapRouteProperties: __mf_57, UNSAFE_shouldHydrateRouteLoader: __mf_58, UNSAFE_useFogOFWarDiscovery: __mf_59, UNSAFE_useScrollRestoration: __mf_60, UNSAFE_withComponentProps: __mf_61, UNSAFE_withErrorBoundaryProps: __mf_62, UNSAFE_withHydrateFallbackProps: __mf_63, createBrowserRouter: __mf_64, createContext: __mf_65, createCookie: __mf_66, createCookieSessionStorage: __mf_67, createHashRouter: __mf_68, createMemoryRouter: __mf_69, createMemorySessionStorage: __mf_70, createPath: __mf_71, createRequestHandler: __mf_72, createRoutesFromChildren: __mf_73, createRoutesFromElements: __mf_74, createRoutesStub: __mf_75, createSearchParams: __mf_76, createSession: __mf_77, createSessionStorage: __mf_78, createStaticHandler: __mf_79, createStaticRouter: __mf_80, data: __mf_81, generatePath: __mf_82, href: __mf_83, isCookie: __mf_84, isRouteErrorResponse: __mf_85, isSession: __mf_86, matchPath: __mf_87, matchRoutes: __mf_88, parsePath: __mf_89, redirect: __mf_90, redirectDocument: __mf_91, renderMatches: __mf_92, replace: __mf_93, resolvePath: __mf_94, unstable_HistoryRouter: __mf_95, unstable_RSCStaticRouter: __mf_96, unstable_routeRSCServerRequest: __mf_97, unstable_setDevServerHooks: __mf_98, unstable_usePrompt: __mf_99, unstable_useRoute: __mf_100, useActionData: __mf_101, useAsyncError: __mf_102, useAsyncValue: __mf_103, useBeforeUnload: __mf_104, useBlocker: __mf_105, useFetcher: __mf_106, useFetchers: __mf_107, useFormAction: __mf_108, useHref: __mf_109, useInRouterContext: __mf_110, useLinkClickHandler: __mf_111, useLoaderData: __mf_112, useLocation: __mf_113, useMatch: __mf_114, useMatches: __mf_115, useNavigate: __mf_116, useNavigation: __mf_117, useNavigationType: __mf_118, useOutlet: __mf_119, useOutletContext: __mf_120, useParams: __mf_121, useResolvedPath: __mf_122, useRevalidator: __mf_123, useRouteError: __mf_124, useRouteLoaderData: __mf_125, useRoutes: __mf_126, useSearchParams: __mf_127, useSubmit: __mf_128, useViewTransitionState: __mf_129 } = exportModule;

export { __mf_5 as _, __mf_9 as a, __mf_13 as b, __mf_21 as c, __mf_18 as d };
