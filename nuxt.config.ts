// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  typescript: {
    typeCheck: true,
    strict: true,
    shim: false,
  },

  /*
   ** Global CSS
   ** SEE: https://nuxt.com/docs/api/nuxt-config#css
   */
  css: ["~~/assets/scss/global-styles/index.scss"],
});
