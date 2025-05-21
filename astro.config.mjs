import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'

import netlify from '@astrojs/netlify';

import { defineConfig } from 'astro/config'


// https://astro.build/config
export default defineConfig({
  site: 'https://stevenrich.github.io',
  base: 'sdj',
  compressHTML: true,

  integrations: [
    mdx(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
  },

  adapter: netlify(),
})


