import { _ as __vitePreload } from './preload-helper-BC7ZYKCr.js';
import './remoteEntry-ZnVLn-8t.js';

const importMap = {
      
        "react": async () => {
          let pkg = await __vitePreload(() => import('./index-BbwSWFgd.js').then(n => n.i),true              ?[]:void 0);
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await __vitePreload(() => import('./index-Dtea_K5i.js').then(n => n.i),true              ?[]:void 0);
            return pkg;
        }
      ,
        "react-router-dom": async () => {
          let pkg = await __vitePreload(() => import('./index-DY9gQB0o.js'),true              ?[]:void 0);
            return pkg;
        }
      
    };
      const usedShared = {
      
          "react": {
            name: "react",
            version: "19.0.0",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__reactMfe",
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
          "react-dom": {
            name: "react-dom",
            version: "19.0.0",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__reactMfe",
            async get () {
              usedShared["react-dom"].loaded = true;
              const {"react-dom": pkgDynamicImport} = importMap;
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
          "react-router-dom": {
            name: "react-router-dom",
            version: "7.1.0",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__reactMfe",
            async get () {
              usedShared["react-router-dom"].loaded = true;
              const {"react-router-dom": pkgDynamicImport} = importMap;
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
              requiredVersion: "^7.1.0",
              
            }
          }
        
    };
      const usedRemotes = [
      ];

export { usedRemotes, usedShared };
