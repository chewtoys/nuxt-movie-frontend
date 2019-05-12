import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" },
      { rel: "stylesheet", 
        href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
        integrity: "sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",
        crossorigin: "anonymous"
      },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto+Condensed"}
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", type: "text/javascript" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js", type: "text/javascript" },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", type: "text/javascript" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /**
   * Router Object
   */
  router: {
    middleware: [
      'clearErrors'
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/mixins/user.js',
    './plugins/mixins/validation.js',
    './plugins/axios.js'
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
    baseURL: "http://127.0.0.1:8000/"
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
