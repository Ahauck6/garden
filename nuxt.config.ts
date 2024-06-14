// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
  head: {
    title: "Garden",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "A how-to website to guide garden novices on an easy garden for the Pacific Northwest."},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }},

  css: [
    '@/assets/main.css',
    '@/assets/base.css',
    '@/assets/styles.scss',
    '@/assets/responsive.scss'
  ],

})
