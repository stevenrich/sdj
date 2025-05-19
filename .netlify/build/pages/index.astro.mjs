import { c as createComponent, a as createAstro, m as maybeRenderHead, d as renderSlot, r as renderComponent, f as addAttribute, b as renderTemplate } from '../chunks/astro/server_GtoBtqwE.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_Ckszt5Vi.mjs';
import { $ as $$Icon } from '../chunks/Icon_C8xQT_ib.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { src = "/stock1.jpeg" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero my-24" data-astro-cid-bbe6dxrz> <div class="container" data-astro-cid-bbe6dxrz> <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2" data-astro-cid-bbe6dxrz> <div class="flex flex-col items-center gap-8 md:items-start" data-astro-cid-bbe6dxrz> <h1 class="text-center text-6xl md:text-left lg:text-8xl" data-astro-cid-bbe6dxrz> ${renderSlot($$result, $$slots["default"], renderTemplate`Society of Disabled Journalists`)} </h1> <div class="flex flex-col gap-3 min-[500px]:flex-row" data-astro-cid-bbe6dxrz> <a class="button has-icon" href="https://github.com/markteekman/accessible-astro-starter" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Icon", $$Icon, { "name": "ion:newspaper-outline", "data-astro-cid-bbe6dxrz": true })}
Subscribe to SDJ News
</a> <a class="button has-icon color-secondary" href="https://github.com/markteekman/accessible-astro-starter/blob/main/README.md" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Icon", $$Icon, { "name": "ion:cash-outline", "data-astro-cid-bbe6dxrz": true })}
Donate
</a> </div> </div> <img class="hidden lg:block"${addAttribute(src, "src")} alt="" decoding="async" data-astro-cid-bbe6dxrz> </div> </div> </section> `;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/pages/index.astro", void 0);

const $$file = "/Users/databae/Documents/accessible-astro-starter-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
