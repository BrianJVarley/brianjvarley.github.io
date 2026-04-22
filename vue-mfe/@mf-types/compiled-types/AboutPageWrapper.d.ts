/**
 * AboutPageWrapper.ts
 *
 * The shell imports this file as 'vueMfe/AboutPage' via Module Federation.
 * Because the shell is a React app, we can't return a Vue SFC directly.
 *
 * Strategy: wrap the Vue component as a Custom Element (Web Component).
 * The shell renders <about-page /> as a native DOM element — no React/Vue
 * interop library needed. Vue 3 has first-class support for this via
 * defineCustomElement().
 *
 * Usage in shell (already wired in App.tsx):
 *   const AboutPage = lazy(() => import('vueMfe/AboutPage'))
 *   <AboutPage />  ← React renders the Web Component transparently
 */
/**
 * React-compatible default export.
 * Returns a thin function component that renders the custom element.
 * The shell's lazy() + Suspense wraps this seamlessly.
 */
export default function AboutPage(): import("react/jsx-runtime").JSX.Element;
export declare const __mfe_side_effects__ = true;
