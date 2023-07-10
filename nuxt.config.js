export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'IEEE International Symposium on Computer, Consumer and Control, 2023',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        // hid: 'description',
        name: 'description',
        content:
          'IS3C 2023 is the International Symposium on Computer, Consumer and Control sponsored by IEEE and National Chin-Yi University of Technology.',
      },
      // { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'is3c2023, IS3C2023, IS3C-2023' },
      {
        name: 'google-site-verification',
        content: 'Hc4qlXiHVRWw6714s0rT4Uy9x6mU_-2eaestrAPpAQ4',
      },
      { name: 'robots', content: 'index,follow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/globalComponents.js', '~/plugins/globalVariables.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    credentials: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    fallback: '/error.html',
  },

  generate: {
    fallback: '/error.html',
    dir: '../dist',
  },

  router: {
    // base: "./"
  },
}
