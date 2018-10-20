const bDev = process.env.NODE_ENV === "development"
const host_url = bDev ? "http://localhost:3000" : "http://18.220.88.167:3000"
console.log(host_url);

module.exports = {
  head: {
    title: 'young capital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
    ],
    script:[
    ]
  },
  env:{
    // HOST_URL: "http://localhost:3000",
    HOST_URL: host_url,
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

  },
  modules: ["@nuxtjs/axios"],
  axios: {
    browserBaseURL: host_url
  }
}
