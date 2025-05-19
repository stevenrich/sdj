import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_GtoBtqwE.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_Ckszt5Vi.mjs';
import { $ as $$Icon } from '../chunks/Icon_C8xQT_ib.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Join" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"><h2 class="mb-16 text-6xl">Donate</h2> </div> <div class="container"> <p>Want to support our work? You can donate to us through *****
</p><br> <p> Donations are tax deductible and ***explain here*
</p><br> <div class="flex flex-col gap-3 min-[500px]:flex-row"> <a class="button has-icon color-secondary" href="https://github.com/markteekman/accessible-astro-starter/blob/main/README.md"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ion:cash-outline" })}
Donate
</a></div> <br> </div> <div class="container"><h3 class="text-4xl">Other ways to support us</h3> </div> <br><br> <div class="container"> <br> <ul> <li>- Send job openings to xyz</li> <li>- Volunteer opportunities – email us</li> <li>- Are you a newsroom that wants to partner with us for an event or training? Email us</li> </ul> </div> ` })}`;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/pages/donate/index.astro", void 0);

const $$file = "/Users/databae/Documents/accessible-astro-starter-main/src/pages/donate/index.astro";
const $$url = "/donate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
