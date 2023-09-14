export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  env: {
    tokken: '1f3f797c4bab29842afb7402b15412bb0b1905150c3d9045b3cd0c662a303e30a7cfe600be9d8b5399e7fb65706c7529993818f0cdedd2b94d2074c7f62b1df763d721f6c35a220fd454f8ef4fc245c9e7e8b9492519d9b9a6b494031124537bbd49b5b9659d13c91ec04b7df5a6c1eefe9d383d674ec1b844be4c3d4404ae22',
    // apiUrl: 'http://anik.serveftp.com:12764'
    apiUrl: 'http://localhost:1341'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ефект дитини',
    htmlAttrs: {
      lang: 'ua'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', size: '120x120', href: '/120.png' },
      { rel: 'apple-touch-icon', size: '152x152', href: '/152.png' },
      { rel: 'apple-touch-icon', size: '167x167', href: '/167.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/v-mask.js',
    '@plugins/youtube-embed.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'uk'
      },
      locales: [
        {
          name: 'Ukraine',
          code: 'uk',
          iso: 'uk-UA',
          file: 'uk-UA.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'uk',
    }],
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    runtime: true // Support `$md()`
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
