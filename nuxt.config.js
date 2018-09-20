module.exports = {
  head: {
    title: 'young capital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: '@/assets/scss/element-ui.scss', lang:"scss"},
    '@/assets/css/main.css'
  ],
  loading: { color: '#3B8070' },
  plugins: [
    '@/plugins/element-ui'
  ],
  build: {

  }
}
