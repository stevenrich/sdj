import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Vf2dURLW.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/donate.astro.mjs');
const _page4 = () => import('./pages/governance.astro.mjs');
const _page5 = () => import('./pages/join.astro.mjs');
const _page6 = () => import('./pages/markdown-page.astro.mjs');
const _page7 = () => import('./pages/mdx-page.astro.mjs');
const _page8 = () => import('./pages/news/_post_.astro.mjs');
const _page9 = () => import('./pages/news/_---page_.astro.mjs');
const _page10 = () => import('./pages/policies.astro.mjs');
const _page11 = () => import('./pages/resource-center/for-journalists/_post_.astro.mjs');
const _page12 = () => import('./pages/resource-center/for-journalists/_---page_.astro.mjs');
const _page13 = () => import('./pages/resource-center/for-newsrooms/_post_.astro.mjs');
const _page14 = () => import('./pages/resource-center/for-newsrooms/_---page_.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about/index.astro", _page1],
    ["src/pages/contact/index.astro", _page2],
    ["src/pages/donate/index.astro", _page3],
    ["src/pages/governance/index.astro", _page4],
    ["src/pages/join/index.astro", _page5],
    ["src/pages/markdown-page.md", _page6],
    ["src/pages/mdx-page.mdx", _page7],
    ["src/pages/news/[post].astro", _page8],
    ["src/pages/news/[...page].astro", _page9],
    ["src/pages/policies/index.astro", _page10],
    ["src/pages/resource-center/for-journalists/[post].astro", _page11],
    ["src/pages/resource-center/for-journalists/[...page].astro", _page12],
    ["src/pages/resource-center/for-newsrooms/[post].astro", _page13],
    ["src/pages/resource-center/for-newsrooms/[...page].astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d91b3313-deac-46bb-9af0-92c0a1239804"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
