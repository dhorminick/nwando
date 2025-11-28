// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: [
    "~/assets/main.css",
    "primeicons/primeicons.css",
    // "primeflex/primeflex.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: "false",
          cssLayer: false,
        },
      },
    },
  },
  nitro: {
    experimental: {
      websocket: true,
    },
    routeRules: {
      "/**": {
        cors: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
          "Access-Control-Allow-Headers":
            "Authorization, X-Custom-Key, Content-Type",
          "Access-Control-Allow-Credentials": "true",
        },
      },
    },
  },
});
