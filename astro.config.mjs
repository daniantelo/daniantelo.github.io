import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://daniantelo.github.io",

  integrations: [
    mdx()
  ]

});