// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://adolfitou.github.io',
    base: '/Portfolio/',        // <- nombre del repo con barra inicial y final
    output: 'static',
});
