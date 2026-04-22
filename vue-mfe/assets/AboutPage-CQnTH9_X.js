import { g as __mf_50, h as __mf_80, i as __mf_37, j as __mf_35, k as __mf_51, l as __mf_31, m as __mf_45, n as __mf_39, o as __mf_106, p as __mf_112, q as __mf_43, r as __mf_32, s as __mf_40, t as __mf_161, u as __mf_119, v as __mf_52, a as __mf_93, b as __mf_132, c as __mf_83, d as __mf_84, w as __mf_61, x as __mf_69, y as __mf_138, z as __mf_55, A as __mf_58, e as __mf_91, B as __mf_2, C as __mf_166, D as __mf_60 } from './__mfe_internal__vueMfe__loadShare__vue__loadShare__.js-7Qbf8ykb.js';

/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = __mf_31(true);
  const state = scope.run(() => __mf_45({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = __mf_39({
    install(app) {
      setActivePinia(pinia);
      pinia._a = app;
      app.provide(piniaSymbol, pinia);
      app.config.globalProperties.$pinia = pinia;
      toBeInstalled.forEach((plugin) => _p.push(plugin));
      toBeInstalled = [];
    },
    use(plugin) {
      if (!this._a) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.add(callback);
  const removeSubscription = () => {
    const isDel = subscriptions.delete(callback);
    isDel && onCleanup();
  };
  if (!detached && __mf_32()) {
    __mf_40(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
const ACTION_MARKER = Symbol();
const ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  } else if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !__mf_37(subPatch) && !__mf_35(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !Object.prototype.hasOwnProperty.call(obj, skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(__mf_37(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      pinia.state.value[id] = state ? state() : {};
    }
    const localState = __mf_52(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = __mf_39(__mf_80(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = { deep: true };
  let isListening;
  let isSyncListening;
  let subscriptions = /* @__PURE__ */ new Set();
  let actionSubscriptions = /* @__PURE__ */ new Set();
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    pinia.state.value[$id] = {};
  }
  __mf_45({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    __mf_119().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions.clear();
    actionSubscriptions.clear();
    pinia._s.delete($id);
  }
  const action = (fn, name = "") => {
    if (ACTION_MARKER in fn) {
      fn[ACTION_NAME] = name;
      return fn;
    }
    const wrappedAction = function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackSet = /* @__PURE__ */ new Set();
      const onErrorCallbackSet = /* @__PURE__ */ new Set();
      function after(callback) {
        afterCallbackSet.add(callback);
      }
      function onError(callback) {
        onErrorCallbackSet.add(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name: wrappedAction[ACTION_NAME],
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = fn.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackSet, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackSet, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackSet, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackSet, ret);
      return ret;
    };
    wrappedAction[ACTION_MARKER] = true;
    wrappedAction[ACTION_NAME] = name;
    return wrappedAction;
  };
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => __mf_161(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = __mf_43(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = __mf_31()).run(() => setup({ action }))));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (__mf_37(prop) && !isComputed(prop) || __mf_35(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (__mf_37(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        pinia.state.value[$id][key] = prop;
      }
    } else if (typeof prop === "function") {
      const actionValue = action(prop, key);
      setupStore[key] = actionValue;
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  assign(store, setupStore);
  assign(__mf_50(store), setupStore);
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineStore(id, setup, setupOptions) {
  let options;
  const isSetupStore = typeof setup === "function";
  options = isSetupStore ? setupOptions : setup;
  function useStore(pinia, hot) {
    const hasContext = __mf_106();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? __mf_112(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function storeToRefs(store) {
  const rawStore = __mf_50(store);
  const refs = {};
  for (const key in rawStore) {
    const value = rawStore[key];
    if (value.effect) {
      refs[key] = // ...
      __mf_80({
        get: () => store[key],
        set(value2) {
          store[key] = value2;
        }
      });
    } else if (__mf_37(value) || __mf_35(value)) {
      refs[key] = // ---
      __mf_51(store, key);
    }
  }
  return refs;
}

const ALL_SKILLS = [
  { name: "TypeScript", level: 95, category: "Frontend" },
  { name: "Angular", level: 92, category: "Frontend" },
  { name: "NgRx", level: 92, category: "Frontend" },
  { name: "Angular Signals", level: 92, category: "Frontend" },
  { name: "Flexbox / Grid Layout", level: 92, category: "CSS" },
  { name: "Bootstrap", level: 85, category: "CSS" },
  {
    name: "Design Systems (Reuseable Components)",
    level: 92,
    category: "Frontend"
  },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Vue 3", level: 40, category: "Frontend" },
  { name: "WCAG 2.0 Compliance", level: 80, category: "Frontend" },
  {
    name: "Accessibility (WCAG),Axe Dev tools",
    level: 90,
    category: "Testing"
  },
  {
    name: "Accessibility (WCAG),Screen readers (VoiceOver)",
    level: 90,
    category: "Testing"
  },
  { name: "Playwright", level: 90, category: "Testing" },
  { name: "Jest", level: 90, category: "Testing" },
  { name: "RxJS", level: 88, category: "Frontend" }
];
const CATEGORIES = [
  "All",
  "Frontend",
  "Testing",
  "CSS"
];
const useSkillsStore = defineStore("skills", () => {
  const selectedCategory = __mf_45("All");
  const filteredSkills = __mf_80(
    () => selectedCategory.value === "All" ? ALL_SKILLS : ALL_SKILLS.filter((s) => s.category === selectedCategory.value)
  );
  function setCategory(cat) {
    selectedCategory.value = cat;
  }
  return { selectedCategory, filteredSkills, setCategory };
});

const _hoisted_1 = { class: "mfe-page about" };
const _hoisted_2 = { class: "about__intro" };
const _hoisted_3 = { class: "about__lead" };
const _hoisted_4 = { class: "about__grid" };
const _hoisted_5 = { class: "about__col" };
const _hoisted_6 = {
  class: "skill-tabs",
  role: "group",
  "aria-label": "Filter skills by category"
};
const _hoisted_7 = ["aria-pressed", "onClick"];
const _hoisted_8 = { class: "skill-item__name" };
const _hoisted_9 = { class: "sr-only" };
const _hoisted_10 = { class: "about__col" };
const _hoisted_11 = {
  class: "timeline",
  role: "list"
};
const _hoisted_12 = { class: "timeline__period" };
const _hoisted_13 = { class: "timeline__role" };
const _hoisted_14 = { class: "timeline__company" };
const _hoisted_15 = { class: "about__col about__col--full" };
const _hoisted_16 = {
  class: "values-list",
  role: "list"
};
const _hoisted_17 = {
  class: "value-card__icon",
  "aria-hidden": "true"
};
const _hoisted_18 = { class: "value-card__label" };
const _hoisted_19 = { class: "value-card__desc" };
const _sfc_main = /* @__PURE__ */ __mf_93({
  __name: "AboutPage",
  setup(__props) {
    const yearsExp = __mf_80(() => (/* @__PURE__ */ new Date()).getFullYear() - 2015);
    const skillsStore = useSkillsStore();
    const { selectedCategory, filteredSkills } = storeToRefs(skillsStore);
    const { setCategory } = skillsStore;
    const roles = [
      {
        period: "2021–now",
        title: "Senior Frontend Engineer",
        company: "Backbase"
      },
      { period: "2017–21", title: "Senior Frontend Engineer", company: "Avaya" },
      { period: "2015–17", title: "Junior Frontend Engineer", company: "HPE" },
      {
        period: "2013–15",
        title: "Graduate Software Engineer",
        company: "Codec-dss"
      }
    ];
    const values = [
      {
        icon: "♿",
        label: "Accessibility-first",
        desc: "WCAG 2.1 AA as a baseline, not an afterthought. Screenreader-tested, keyboard-navigable."
      },
      {
        icon: "⚡",
        label: "Performance-aware",
        desc: "Bundle budgets, lazy loading, and Core Web Vitals baked into every build."
      },
      {
        icon: "🧩",
        label: "Systems thinking",
        desc: "Design tokens, shared component libraries, and consistent patterns across codebases."
      },
      {
        icon: "🚀",
        label: "Delivery focused",
        desc: "Efficient and timely delivery of high-quality software solutions."
      }
    ];
    return (_ctx, _cache) => {
      return __mf_132(), __mf_83("section", _hoisted_1, [
        _cache[4] || (_cache[4] = __mf_84("span", { class: "mfe-badge" }, "Vue MFE", -1)),
        __mf_84("div", _hoisted_2, [
          _cache[0] || (_cache[0] = __mf_84("h2", { class: "section-title" }, "About Me", -1)),
          __mf_84("p", _hoisted_3, " Senior Frontend Engineer with " + __mf_61(yearsExp.value) + "+ years building production web applications and libraries — fintech, unified communications, accessibility, design systems. ", 1)
        ]),
        __mf_84("div", _hoisted_4, [
          __mf_84("div", _hoisted_5, [
            _cache[1] || (_cache[1] = __mf_84("h3", { class: "col-heading" }, "Stack", -1)),
            __mf_84("div", _hoisted_6, [
              (__mf_132(true), __mf_83(__mf_69, null, __mf_138(__mf_55(CATEGORIES), (cat) => {
                return __mf_132(), __mf_83("button", {
                  key: cat,
                  class: __mf_58([
                    "tab-btn",
                    { "tab-btn--active": __mf_55(selectedCategory) === cat }
                  ]),
                  "aria-pressed": __mf_55(selectedCategory) === cat,
                  onClick: ($event) => __mf_55(setCategory)(cat)
                }, __mf_61(cat), 11, _hoisted_7);
              }), 128))
            ]),
            __mf_91(__mf_2, {
              name: "skill",
              tag: "ul",
              class: "skill-list",
              role: "list"
            }, {
              default: __mf_166(() => [
                (__mf_132(true), __mf_83(__mf_69, null, __mf_138(__mf_55(filteredSkills), (skill) => {
                  return __mf_132(), __mf_83("li", {
                    key: skill.name,
                    class: "skill-item"
                  }, [
                    __mf_84("span", _hoisted_8, __mf_61(skill.name), 1),
                    __mf_84("span", {
                      class: "skill-item__bar",
                      style: __mf_60({ "--w": skill.level + "%" }),
                      "aria-hidden": "true"
                    }, null, 4),
                    __mf_84("span", _hoisted_9, __mf_61(skill.level) + "%", 1)
                  ]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          __mf_84("div", _hoisted_10, [
            _cache[2] || (_cache[2] = __mf_84("h3", { class: "col-heading" }, "Experience", -1)),
            __mf_84("ul", _hoisted_11, [
              (__mf_132(), __mf_83(__mf_69, null, __mf_138(roles, (role) => {
                return __mf_84("li", {
                  key: role.company,
                  class: "timeline__item"
                }, [
                  __mf_84("span", _hoisted_12, __mf_61(role.period), 1),
                  __mf_84("span", _hoisted_13, __mf_61(role.title), 1),
                  __mf_84("span", _hoisted_14, __mf_61(role.company), 1)
                ]);
              }), 64))
            ])
          ]),
          __mf_84("div", _hoisted_15, [
            _cache[3] || (_cache[3] = __mf_84("h3", { class: "col-heading" }, "Values", -1)),
            __mf_84("ul", _hoisted_16, [
              (__mf_132(), __mf_83(__mf_69, null, __mf_138(values, (v) => {
                return __mf_84("li", {
                  key: v.label,
                  class: "value-card"
                }, [
                  __mf_84("span", _hoisted_17, __mf_61(v.icon), 1),
                  __mf_84("div", null, [
                    __mf_84("strong", _hoisted_18, __mf_61(v.label), 1),
                    __mf_84("p", _hoisted_19, __mf_61(v.desc), 1)
                  ])
                ]);
              }), 64))
            ])
          ])
        ])
      ]);
    };
  }
});

const _style_0 = "\n.about[data-v-67440b5c] {\n  font-family: \"DM Mono\", monospace;\n}\n.mfe-badge[data-v-67440b5c] {\n  display: inline-block;\n  font-size: 0.6rem;\n  letter-spacing: 0.15em;\n  text-transform: uppercase;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  border: 1px solid #42b883;\n  color: #42b883;\n  margin-bottom: 1.25rem;\n}\n.about__intro[data-v-67440b5c] {\n  margin-bottom: 3rem;\n}\n.section-title[data-v-67440b5c] {\n  font-family: \"DM Serif Display\", Georgia, serif;\n  font-size: clamp(1.8rem, 4vw, 2.8rem);\n  letter-spacing: -0.03em;\n  color: #e8e6e1;\n  margin-bottom: 0.75rem;\n}\n.about__lead[data-v-67440b5c] {\n  font-size: 0.875rem;\n  line-height: 1.7;\n  color: #9a9898;\n  max-width: 520px;\n}\n.about__grid[data-v-67440b5c] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem 4rem;\n}\n.about__col--full[data-v-67440b5c] {\n  grid-column: 1 / -1;\n}\n.col-heading[data-v-67440b5c] {\n  font-size: 0.65rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: #6b6970;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #222228;\n}\n\n/* ── Skill filter tabs ── */\n.skill-tabs[data-v-67440b5c] {\n  display: flex;\n  gap: 0.35rem;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n}\n.tab-btn[data-v-67440b5c] {\n  font-family: inherit;\n  font-size: 0.65rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n  border: 1px solid #2a2a30;\n  background: transparent;\n  color: #6b6970;\n  cursor: pointer;\n  transition:\n    border-color 150ms ease,\n    color 150ms ease,\n    background 150ms ease;\n}\n.tab-btn[data-v-67440b5c]:hover {\n  border-color: #42b883;\n  color: #42b883;\n}\n.tab-btn--active[data-v-67440b5c] {\n  border-color: #42b883;\n  color: #42b883;\n  background: rgba(66, 184, 131, 0.08);\n}\n\n/* ── Skills ── */\n.skill-list[data-v-67440b5c] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.skill-item[data-v-67440b5c] {\n  display: grid;\n  grid-template-columns: 130px 1fr;\n  align-items: center;\n  gap: 1rem;\n  font-size: 0.75rem;\n  color: #9a9898;\n}\n.skill-item__bar[data-v-67440b5c] {\n  display: block;\n  height: 2px;\n  background: #222228;\n  border-radius: 999px;\n  position: relative;\n  overflow: hidden;\n}\n.skill-item__bar[data-v-67440b5c]::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  width: var(--w, 0%);\n  background: #42b883;\n  border-radius: 999px;\n  animation: barGrow-67440b5c 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;\n}\n@keyframes barGrow-67440b5c {\nfrom {\n    width: 0;\n}\nto {\n    width: var(--w);\n}\n}\n\n/* ── TransitionGroup: .skill-enter/leave classes ── */\n.skill-list[data-v-67440b5c] {\n  position: relative; /* anchor for leave-active absolute positioning */\n}\n.skill-enter-active[data-v-67440b5c],\n.skill-leave-active[data-v-67440b5c] {\n  transition:\n    opacity 0.25s ease,\n    transform 0.25s ease;\n}\n\n/* Item that is leaving is taken out of flow so others can FLIP into place */\n.skill-leave-active[data-v-67440b5c] {\n  position: absolute;\n  width: 100%;\n}\n.skill-enter-from[data-v-67440b5c] {\n  opacity: 0;\n  transform: translateX(-10px);\n}\n.skill-leave-to[data-v-67440b5c] {\n  opacity: 0;\n  transform: translateX(10px);\n}\n\n/* ── Timeline ── */\n.timeline[data-v-67440b5c] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.timeline__item[data-v-67440b5c] {\n  display: grid;\n  grid-template-columns: 72px 1fr;\n  grid-template-rows: auto auto;\n  column-gap: 1rem;\n  padding: 0.9rem 0;\n  border-bottom: 1px solid #1a1a1f;\n  font-size: 0.75rem;\n}\n.timeline__period[data-v-67440b5c] {\n  grid-row: 1 / 3;\n  color: #6b6970;\n  font-size: 0.65rem;\n  padding-top: 2px;\n  letter-spacing: 0.05em;\n}\n.timeline__role[data-v-67440b5c] {\n  color: #e8e6e1;\n}\n.timeline__company[data-v-67440b5c] {\n  color: #6b6970;\n  font-size: 0.7rem;\n  margin-top: 2px;\n}\n\n/* ── Values ── */\n.values-list[data-v-67440b5c] {\n  list-style: none;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1px;\n  border: 1px solid #222228;\n}\n.value-card[data-v-67440b5c] {\n  background: #131316;\n  padding: 1.5rem;\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  transition: background 200ms ease;\n}\n.value-card[data-v-67440b5c]:hover {\n  background: #1a1a1f;\n}\n.value-card__icon[data-v-67440b5c] {\n  font-size: 1.2rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.value-card__label[data-v-67440b5c] {\n  display: block;\n  font-size: 0.8rem;\n  color: #e8e6e1;\n  margin-bottom: 0.4rem;\n  font-weight: 500;\n}\n.value-card__desc[data-v-67440b5c] {\n  font-size: 0.75rem;\n  line-height: 1.6;\n  color: #6b6970;\n}\n.sr-only[data-v-67440b5c] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n@media (max-width: 600px) {\n.about__grid[data-v-67440b5c] {\n    grid-template-columns: 1fr;\n}\n.about__col--full[data-v-67440b5c] {\n    grid-column: 1;\n}\n}\n";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const AboutPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__scopeId", "data-v-67440b5c"]]);

export { AboutPage as A, _export_sfc as _, createPinia as c };
