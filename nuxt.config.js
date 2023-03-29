export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Just Eat Engineer Recruitment Test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['vue-slick-carousel/dist/vue-slick-carousel.css', '@/styles/main.css' ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [ '~/plugins/persistedState.js', '~/plugins/cacheAxios.js', '@/plugins/axiosHandlers.js', {src: '~/plugins/toast.js', mode: 'client'}, "~/plugins/errorHandler.js", "@/plugins/piniaExtra.js", "@plugins/starRating.client.js", { src: './plugins/vue-slick-carousel.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxt/postcss8',
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@nuxtjs/composition-api/module',
    // https://pinia.vuejs.org/ssr/nuxt.html#installation
    '@pinia/nuxt',

    "@nuxtjs/svg",
    
   
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@fengsi/nuxt-axios-cache',
    'vue-geolocation-api/nuxt',
  ],

  geolocation:  {
     watch: true,
  },
  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
    proxy: process.env.NODE_ENV !== "production"
  },
  proxy: {
    target: process.env.API_URL
  },
  // Storybook module configuration: https://storybook.nuxtjs.org/api/options
  storybook: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  devServerHandlers: [],
};
