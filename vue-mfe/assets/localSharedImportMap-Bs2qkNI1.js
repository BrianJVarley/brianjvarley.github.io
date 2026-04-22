import { _ as __vitePreload } from './preload-helper-BC7ZYKCr.js';
import './remoteEntry-BelUO6nz.js';

const importMap = {
      
        "react": async () => {
          let pkg = await __vitePreload(() => import('./index-C9FsFaH7.js').then(n => n.i),true              ?[]:void 0);
            return pkg;
        }
      ,
        "vue": async () => {
          let pkg = await __vitePreload(() => import('./vue.runtime.esm-bundler-Bv2ejMVt.js'),true              ?[]:void 0);
            return pkg;
        }
      
    };
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.0.0",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__vueMfe",
            async get () {
              usedShared["react"].loaded = true;
              const {"react": pkgDynamicImport} = importMap;
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.0.0",
              
            }
          }
        ,
          "vue": {
            name: "vue",
            version: "3.5.0",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__vueMfe",
            async get () {
              usedShared["vue"].loaded = true;
              const {"vue": pkgDynamicImport} = importMap;
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.5.0",
              
            }
          }
        
    };
      const usedRemotes = [
      ];

export { usedRemotes, usedShared };
