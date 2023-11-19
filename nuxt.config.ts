// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  srcDir: 'src',
  modules: ["@bg-dev/nuxt-naiveui"],
  css: ['~/assets/css/main.css'],
})
