import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, d as renderSlot, b as renderTemplate } from '../chunks/astro/server_GtoBtqwE.mjs';
import 'kleur/colors';
import { a as $$Image, $ as $$DefaultLayout } from '../chunks/DefaultLayout_Ckszt5Vi.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const amanda = new Proxy({"src":"/_astro/amanda-morris.R5KQdiS0.png","width":777,"height":777,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/databae/Documents/accessible-astro-starter-main/src/assets/img/amanda-morris.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feature;
  const { image = amanda, title = "Title", alt = "Alt" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="feature flex flex-col gap-4" data-astro-cid-ezsi7upz> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": alt, "data-astro-cid-ezsi7upz": true })} <div class="content" data-astro-cid-ezsi7upz> <h3 data-astro-cid-ezsi7upz>${title}</h3> <p data-astro-cid-ezsi7upz> ${renderSlot($$result, $$slots["default"], renderTemplate`Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.`)} </p> </div> </div> `;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/components/Feature.astro", void 0);

const hannah = new Proxy({"src":"/_astro/hannah-wise.BphRRuhV.jpeg","width":2400,"height":2401,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/databae/Documents/accessible-astro-starter-main/src/assets/img/hannah-wise.jpeg";
							}
							
							return target[name];
						}
					});

const emyle = new Proxy({"src":"/_astro/emyle-watkins.DXQ8Tc3b.png","width":300,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/databae/Documents/accessible-astro-starter-main/src/assets/img/emyle-watkins.png";
							}
							
							return target[name];
						}
					});

const eric = new Proxy({"src":"/_astro/eric-garcia.LWZn75DW.jpg","width":192,"height":192,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/databae/Documents/accessible-astro-starter-main/src/assets/img/eric-garcia.jpg";
							}
							
							return target[name];
						}
					});

const kate = new Proxy({"src":"/_astro/kate-guarino.BkZ47qic.jpeg","width":389,"height":389,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/databae/Documents/accessible-astro-starter-main/src/assets/img/kate-guarino.jpeg";
							}
							
							return target[name];
						}
					});

const shruti = new Proxy({"src":"/_astro/shruti-rajkumar.BlRDfJ4u.jpeg","width":1197,"height":1197,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/databae/Documents/accessible-astro-starter-main/src/assets/img/shruti-rajkumar.jpeg";
							}
							
							return target[name];
						}
					});

const sara = new Proxy({"src":"/_astro/sara-luterman.DJYdlsoK.jpeg","width":2246,"height":2246,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/databae/Documents/accessible-astro-starter-main/src/assets/img/sara-luterman.jpeg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"><h2 class="mb-16 text-6xl">Our Mission</h2>
SDJ aims to see all disabled journalists, including those who identify as neurodivergent or have chronic conditions, find support in the media industry through connection and collaboration. SDJ seeks to serve as a resource and guide for our industry in how to cover disability issues respectfully, deliver news and information in accessible formats, and how to support the needs of disabled colleagues. <br><br><br></div> <div class="container"> <h2 class="mb-16 text-6xl">Board of Directors</h2> <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"> ${renderComponent($$result2, "Feature", $$Feature, { "image": amanda, "title": "Executive Director" }, { "default": ($$result3) => renderTemplate` <b></b>Amanda Morris<br>Disability Reporter<br><i>The Washington Post</i> ` })} ${renderComponent($$result2, "Feature", $$Feature, { "image": hannah, "title": "Communications Director" }, { "default": ($$result3) => renderTemplate` <b>Hannah Wise</b><br>Assistant Managing Editor for Engagement & Experimentation <br><i>The Kansas City Star</i> ` })} ${renderComponent($$result2, "Feature", $$Feature, { "image": emyle, "title": "Programs Director" }, { "default": ($$result3) => renderTemplate` <b>Emyle Watkins</b><br>Lead Disability Desk Reporter<br><i>WBFO</i> ` })} ${renderComponent($$result2, "Feature", $$Feature, { "image": eric, "title": "Budget Director" }, { "default": ($$result3) => renderTemplate` <b>Eric Garcia</b><br>Senior Washington Correspondent<br><i>The Independent</i> ` })} ${renderComponent($$result2, "Feature", $$Feature, { "image": kate, "title": "Membership Co-Director" }, { "default": ($$result3) => renderTemplate` <b>Kate Guarino</b><br>Associate Audience Editor<br><i>The Atlantic</i> ` })} ${renderComponent($$result2, "Feature", $$Feature, { "image": shruti, "title": "Membership Co-Director" }, { "default": ($$result3) => renderTemplate` <b>Shruti Rajkumar</b><br>Reporter<br><i>The Huffington Post</i> ` })} ${renderComponent($$result2, "Feature", $$Feature, { "image": sara, "title": "Standards Director" }, { "default": ($$result3) => renderTemplate` <b>Sara Luterman</b><br>Caregiving Reporter<br><i>The 19th</i> ` })} </div> </div> ` })}`;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/pages/about/index.astro", void 0);

const $$file = "/Users/databae/Documents/accessible-astro-starter-main/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
