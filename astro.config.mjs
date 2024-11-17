import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

import { defineConfig } from 'astro/config'

function tina({
  directiveName = 'tina',
} = {}) {
  return {
    name: 'tina-cms',
    hooks: {
      'astro:config:setup': ({ addClientDirective, opts }) => {
        addClientDirective({
          name: directiveName,
          entrypoint: './client-directives/tina.mjs',
        })
      },
    },
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tina(), tailwind()],
})
