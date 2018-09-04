module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    NODE_ENV: 'dev'
  },
  head: {
    title: 'nuxt-demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  cache: true,
  loading: {
    color: '#3B8070',
    height: '4px'
  },
  plugins: [
    {
      src: '~/plugins/vue-material',
      ssr: false
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    analyze: true,
    extend (config, { isDev, isClient }) {
      if (isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.resolve.alias['vue'] = 'vue/dist/vue.common'
      }
    },
    vendor: ['axios']
    // vendor: ['~/plugins/vue-material', '~/assets/js/demo/index', 'axios']
  }
}
