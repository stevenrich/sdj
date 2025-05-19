import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_GtoBtqwE.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout, b as $$Accordion, c as $$AccordionItem } from '../chunks/DefaultLayout_Ckszt5Vi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Governance" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"><h2 class="mb-16 text-6xl">Governance</h2> </div> <div class="container"> ${renderComponent($$result2, "Accordion", $$Accordion, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "AccordionItem", $$AccordionItem, { "name": "exclusive", "title": "Bylaws" }, { "default": ($$result4) => renderTemplate` <p>
**insert here once they are finalized**
</p> ` })} ${renderComponent($$result3, "AccordionItem", $$AccordionItem, { "name": "exclusive", "title": "Code of Ethics" }, { "default": ($$result4) => renderTemplate` <p>
**insert here once it is finalized**
</p> ` })} ` })} </div> ` })}`;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/pages/governance/index.astro", void 0);

const $$file = "/Users/databae/Documents/accessible-astro-starter-main/src/pages/governance/index.astro";
const $$url = "/governance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
