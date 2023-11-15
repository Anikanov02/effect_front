export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  env: {
    //tokken: '8573828dc23cf2577982f245bedd5c8ad33e935fc34cff5ec46d40c2d105522b6dbe04a936b377c7c88ae1640e1017e729bb124a0915893fcfba194d7fc26afa7f6b876256aa2f3a6ca1f1d9208cce753007f88c53c745997583089798f4cd0a7eb90ac5283d8c5ba042d1f1389f35fc7cfc28bbfba689e4a32ca3ee7f81428e',
    //apiUrl: 'http://localhost:1341'

    //local
    tokken: '6ae960b6bb280bbc0e47dad633e596ce93b69fc6161c73e9acfc9243f6aee0e9b47690a10c0ffb45bb90ae061aa035c85e8abf2a22209cd9ef5d3aa0bad86d1e34ce2e6d85b82f22c786582c7d01bdae858f84e71f5b97101f393d4bd22d9844436c871e81b5c5088efa40a3d16d1c0e2c8297bc7d696077c1002d9ae7b748e1',
    apiUrl: 'http://kristex.asuscomm.com:1342'
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
        fallbackLocale: 'uk',
        strategy: "prefix",
      },
      locales: [
        {
          name: 'Ukraine',
          code: 'uk',
          iso: 'uk-UA',
          file: 'uk-UA.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
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
    extend(config, ctx) {}
  },
  server: {
    host: "0.0.0.0"
  }
}
