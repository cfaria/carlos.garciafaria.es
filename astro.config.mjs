// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlos.garciafaria.es',
  integrations: [mdx()],
  vite: {
    // @ts-expect-error
    plugins: [tailwindcss()], 
  },
});
