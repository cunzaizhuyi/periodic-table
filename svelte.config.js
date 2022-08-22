import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'

export default {
  extensions: [`.svelte`, `.svx`, `.md`],

  preprocess: [preprocess(), mdsvex({ extensions: [`.svx`, `.md`] })],

  kit: {
    adapter: adapter(),

    prerender: { default: true },

    paths: {
      assets: `https://cunzaizhuyi.github.io/periodic-table/build`
      // base: `/build`
    }
  },
}
