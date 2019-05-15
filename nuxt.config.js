import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Nuxt Movies",
    titleTemplate: '%s - Nuxt Movies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", 
        href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
        integrity: "sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",
        crossorigin: "anonymous"
      },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto+Condensed"},
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lato"}
    ],
    script: [
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4fc08d' },

  /*
  ** Global CSS
  */
  css: [
    './assets/scss/bootstrap.scss',
    './assets/css/main.css'
  ],

  /**
   * Router Object
   */
  router: {
    middleware: [
      'clearErrors'
    ]
  },

  /**
   * Server Middleware
   */
  serverMiddleware: ['redirect-ssl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/mixins/user.js',
    './plugins/mixins/validation.js',
    './plugins/axios.js',
    { src: './plugins/toasted.js', ssr: false },
    './plugins/bootstrap-vue.js'
    // './plugins/toasted.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "https://backend.nuxtmovies.com",
  },

auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: '/api/v1/auth/login', method: 'post', propertyName: 'meta.access_token' },
        logout: { url: '/api/v1/auth/logout', method: 'post' },
        user: { url: '/api/v1/auth/user', method: 'get', propertyName: 'data' }
      },
      // tokenRequired: true,
      // tokenType: 'bearer',
    }
  }
},

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
