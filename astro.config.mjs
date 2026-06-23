import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://holosynthics.com',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
