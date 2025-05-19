import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_GtoBtqwE.mjs';
import 'kleur/colors';
import { $ as $$DefaultLayout } from '../chunks/DefaultLayout_Ckszt5Vi.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Join" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"><h2 class="mb-16 text-6xl">Contact Us</h2> </div> <div class="container"> <form action="action_page.php"> <label for="fname">First Name</label> <input type="text" id="fname" name="firstname" placeholder="First name"> <label for="lname">Last Name</label> <input type="text" id="lname" name="lastname" placeholder="Last name"> <label for="membership">Membership status</label> <br> <select id="membership" name="membership"> <option value="full">Full Member</option> <option value="student">Student Member</option> <option value="associate">Associate Member</option> <option value="retired">Retired Member</option> <option value="not">Not a Member</option> </select> <br> <label for="subject">Subject</label> <input type="text" id="subject" name="subject" placeholder="Subject"> <label for="message">Message</label> <textarea id="body" name="body" placeholder="Message" style="height:200px"></textarea> <input type="submit" value="Submit"> </form> </div> ` })}`;
}, "/Users/databae/Documents/accessible-astro-starter-main/src/pages/contact/index.astro", void 0);

const $$file = "/Users/databae/Documents/accessible-astro-starter-main/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
