export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  env: {
    tokken: '023831bd37407eba2e0d5642585318c685c13d6edd6327d1af42d3aae8c5d7345810e5a68daa94820addea06e70ea964a02dcd30f7fdc9e1c7d1b1246a83c0fec82c63778ba4cb600141717a61a4f65fd9818ccd370f7980a13f81a374385bfd7974c155d0beb20f58cfedf3f656294e5f5635271f8eee801688e320e36566ed',
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
