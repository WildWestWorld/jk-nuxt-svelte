// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxt/image"
  ],
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    classSuffix: ''
  }
})
