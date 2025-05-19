import { c as createComponent, a as createAstro, m as maybeRenderHead, f as addAttribute, r as renderComponent, b as renderTemplate, u as unescapeHTML } from './astro/server_GtoBtqwE.mjs';
import 'kleur/colors';
import { g as $$Breadcrumbs, a as $$Image, h as $$BreadcrumbsItem } from './DefaultLayout_Ckszt5Vi.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import sanitizeHtml from 'sanitize-html';
/* empty css                          */

const $$Astro = createAstro();
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { class: className, title, subtitle, bgType, showBreadcrumbs = true, featuredImage, author } = Astro2.props;
  const sanitizedSubtitle = subtitle ? sanitizeHtml(subtitle, {
    allowedTags: ["b", "i", "em", "strong", "a", "span", "br"],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
      span: ["class"]
    }
  }) : "";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([className, "page-header"], "class:list")} data-astro-cid-wu5dj4rx> <div class="container my-3" data-astro-cid-wu5dj4rx> ${showBreadcrumbs && (() => {
    const path = Astro2.url.pathname;
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 0) {
      return null;
    }
    return renderTemplate`${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "data-astro-cid-wu5dj4rx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BreadcrumbsItem", $$BreadcrumbsItem, { "href": "/", "label": "Home", "data-astro-cid-wu5dj4rx": true })} ${segments.map((segment, index) => {
      const url = `/${segments.slice(0, index + 1).join("/")}`;
      const isLast = index === segments.length - 1;
      const formattedName = segment.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      return renderTemplate`${renderComponent($$result2, "BreadcrumbsItem", $$BreadcrumbsItem, { "href": isLast ? void 0 : url, "label": formattedName, "currentPage": isLast, "data-astro-cid-wu5dj4rx": true })}`;
    })}` })}`;
  })()} </div> <div${addAttribute(["py-16", bgType && `bg-${bgType}`], "class:list")} data-astro-cid-wu5dj4rx> <div class="space-content container" data-astro-cid-wu5dj4rx> ${featuredImage && renderTemplate`<div class="featured-image-container mb-8" data-astro-cid-wu5dj4rx> ${renderComponent($$result, "Image", $$Image, { "src": featuredImage, "alt": "", "width": 1200, "height": 250, "class": "h-[250px] w-full rounded-lg object-cover", "data-astro-cid-wu5dj4rx": true })} </div>`} <h1 data-astro-cid-wu5dj4rx>${title}</h1> ${sanitizedSubtitle && renderTemplate`<p class="text-2xl" data-astro-cid-wu5dj4rx>${unescapeHTML(sanitizedSubtitle)}</p>`} </div> </div> </section> `;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/components/PageHeader.astro", void 0);

export { $$PageHeader as $ };
