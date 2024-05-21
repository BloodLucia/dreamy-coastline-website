import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import zeabur from "@zeabur/astro-adapter/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: zeabur(),
  integrations: [tailwind(), icon({ iconDir: "src/assets/icons" })],
  devToolbar: {
    enabled: import.meta.env.DEV,
  },
  prefetch: {
    prefetchAll: true,
  },
  trailingSlash: "never",
});
