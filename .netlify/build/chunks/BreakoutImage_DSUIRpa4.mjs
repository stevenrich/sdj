import { c as createComponent, a as createAstro, m as maybeRenderHead, f as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_GtoBtqwE.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Icon_C8xQT_ib.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$Image } from './DefaultLayout_Ckszt5Vi.mjs';

const $$Astro$1 = createAstro();
const $$SocialShares = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialShares;
  const { url = Astro2.url.href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="ml-[-10px] flex flex-wrap gap-3 pt-4"> <li class="animate-bouncing"> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "href")} target="_blank" rel="noopener noreferrer"> <span class="sr-only">Share on Facebook</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:facebook", "size": 40 })} </a> </li> <li class="animate-bouncing"> <a${addAttribute(`https://x.com/share?url=${encodeURIComponent(url)}`, "href")} target="_blank" rel="noopener noreferrer"> <span class="sr-only">Share on Twitter</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:twitter", "size": 40 })} </a> </li> <li class="animate-bouncing"> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "href")} target="_blank" rel="noopener noreferrer"> <span class="sr-only">Share on LinkedIn</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:linkedin", "size": 40 })} </a> </li> </ul>`;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/components/SocialShares.astro", void 0);

const $$Astro = createAstro();
const $$BreakoutImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BreakoutImage;
  const { src, alt = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative -mx-4 my-8 md:-mx-8 lg:-mx-[120px]"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "width": 1400, "height": 700, "class": "h-auto w-full rounded-lg object-cover", "loading": "lazy" })} <div class="absolute inset-0 rounded-lg shadow-inner"></div> </div>`;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/components/BreakoutImage.astro", void 0);

export { $$BreakoutImage as $, $$SocialShares as a };
