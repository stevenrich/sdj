import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_GtoBtqwE.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout, e as $$Card, f as $$Pagination } from '../../../chunks/DefaultLayout_Ckszt5Vi.mjs';
import { $ as $$PageHeader } from '../../../chunks/PageHeader_Td31f_nY.mjs';
import { p as postImage1, a as postImage2, b as postImage3, c as postImage4, d as postImage5, e as postImage6 } from '../../../chunks/post-image-6_Dg_GvanW.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const postImages = [postImage1, postImage2, postImage3, postImage4, postImage5, postImage6];
  function truncateTitle(title) {
    const words = title.split(" ");
    const truncated = words.slice(0, 4).join(" ");
    return truncated;
  }
  const postsWithImages = data.slice(0, 30).map((post) => {
    const truncatedTitle = truncateTitle(post.title);
    return {
      ...post,
      featuredImage: postImages[post.id % postImages.length],
      title: truncatedTitle,
      shortUrl: truncatedTitle.replaceAll(" ", "-").toLowerCase()
    };
  });
  return paginate(postsWithImages, { pageSize: 6 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Blog", "description": "An example of a blog with dynamic content fetched from JSONPlaceholder using the title, body and userId." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Blog", "subtitle": 'An example of a blog with dynamic content fetched from <a href="https://jsonplaceholder.typicode.com/posts">JSONPlaceholder</a> using the title, body and userId. The Accessible Astro Card Component is used here to display al the posts.', "bgType": "bordered" })} ${maybeRenderHead()}<section class="my-12"> <div class="container"> <p class="text-sm"><em>Post ${page.start + 1} through ${page.end + 1} of ${page.total} total posts</em></p> <ul class="my-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"> ${page.data.map((post) => renderTemplate`<li> ${renderComponent($$result2, "Card", $$Card, { "url": "/blog/" + post.shortUrl, "title": post.title, "footer": "userId:" + post.userId }, { "default": async ($$result3) => renderTemplate`${post.body}` })} </li>`)} </ul> <div class="mt-12 grid place-content-center"> ${renderComponent($$result2, "Pagination", $$Pagination, { "firstPage": page.url.prev ? "/blog" : null, "previousPage": page.url.prev ? page.url.prev : null, "nextPage": page.url.next ? page.url.next : null, "lastPage": page.url.next ? `/blog/${Math.ceil(page.total / page.size)}` : null, "currentPage": `${page.currentPage}`, "totalPages": `${Math.ceil(page.total / page.size)}` })} </div> </div> </section> ` })} `;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/pages/resource-center/for-journalists/[...page].astro", void 0);

const $$file = "/Users/databae/Documents/accessible-astro-starter-main/src/pages/resource-center/for-journalists/[...page].astro";
const $$url = "/resource-center/for-journalists/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
