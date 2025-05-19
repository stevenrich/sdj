import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_GtoBtqwE.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout, a as $$Image } from '../../../chunks/DefaultLayout_Ckszt5Vi.mjs';
import { $ as $$PageHeader } from '../../../chunks/PageHeader_Td31f_nY.mjs';
import { $ as $$BreakoutImage, a as $$SocialShares } from '../../../chunks/BreakoutImage_DSUIRpa4.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
  const postImages = [
    { src: "/posts/post-image-1.png" },
    { src: "/posts/post-image-2.png" },
    { src: "/posts/post-image-3.png" },
    { src: "/posts/post-image-4.png" },
    { src: "/posts/post-image-5.png" },
    { src: "/posts/post-image-6.png" }
  ];
  function truncateTitle(title) {
    const words = title.split(" ");
    const truncated = words.slice(0, 4).join(" ");
    return {
      full: title,
      truncated
    };
  }
  return data.map((post) => {
    const titleObj = truncateTitle(post.title);
    const postWithImage = {
      ...post,
      featuredImage: postImages[post.id % postImages.length].src,
      title: titleObj.truncated
    };
    return {
      params: { post: titleObj.truncated.replaceAll(" ", "-").toLowerCase() },
      props: { post: postWithImage }
    };
  });
}
const $$post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$post;
  const { post } = Astro2.props;
  const author = {
    name: "A11Y Person",
    image: "/posts/post-image-1.png",
    bio: "Pasionate accessibility advocate"
  };
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": post.title, "description": post.body, "url": post.title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": post.title, "subtitle": post.body, "author": author, "bgType": "bordered", "featuredImage": post.featuredImage })} ${maybeRenderHead()}<section class="my-12"> <div class="narrow container"> <p class="text-2xl">${post.body}</p> </div> </section> <section class="my-12"> <div class="narrow space-content container"> <h2>Demo content</h2> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
</p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p> <div class="grid grid-cols-1 gap-4 md:grid-cols-2"> ${renderComponent($$result2, "Image", $$Image, { "src": "/posts/post-image-1.png", "alt": "", "width": 1200, "height": 600, "class": "h-[250px] w-full rounded-lg object-cover" })} ${renderComponent($$result2, "Image", $$Image, { "src": "/posts/post-image-2.png", "alt": "", "width": 1200, "height": 600, "class": "h-[250px] w-full rounded-lg object-cover" })} ${renderComponent($$result2, "Image", $$Image, { "src": "/posts/post-image-3.png", "alt": "", "width": 1200, "height": 600, "class": "h-[250px] w-full rounded-lg object-cover" })} ${renderComponent($$result2, "Image", $$Image, { "src": "/posts/post-image-4.png", "alt": "", "width": 1200, "height": 600, "class": "h-[250px] w-full rounded-lg object-cover" })} </div> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
</p> <h3>Demo content</h3> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
</p> <ul class="list-inside list-disc"> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li> <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li> </ul> <h3>Breakout Image</h3> <p>
This image breaks out of the narrow container on larger screens, creating a more immersive visual experience.
</p> ${renderComponent($$result2, "BreakoutImage", $$BreakoutImage, { "src": "/posts/post-image-2.png" })} <p>
Notice how the image above extends beyond the boundaries of the text content, creating visual interest and
        drawing attention to important visual elements.
</p> <h3>Demo content</h3> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
</p> </div> </section> <section class="my-12"> <div class="narrow space-content container"> <h2>Share this post</h2> <p>Like this post? Share it with your friends!</p> ${renderComponent($$result2, "SocialShares", $$SocialShares, {})} </div> </section> ` })}`;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/pages/resource-center/for-journalists/[post].astro", void 0);

const $$file = "/Users/databae/Documents/accessible-astro-starter-main/src/pages/resource-center/for-journalists/[post].astro";
const $$url = "/resource-center/for-journalists/[post]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$post,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
