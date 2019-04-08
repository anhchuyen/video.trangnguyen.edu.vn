// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'
// import 'vue-video-player/src/custom-theme.css'
// import 'videojs-flash'
// import 'videojs-contrib-hls/dist/videojs-contrib-hls'

import VueYoutube from 'vue-youtube'

import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
Raven
  .config('https://842524e157814712a2cce2d723a360d9@sentry.trangnguyen.edu.vn/6')
  .addPlugin(RavenVue, Vue)
  .install()

Vue.config.productionTip = false
// Vue.use(VueVideoPlayer)
Vue.use(VueYoutube)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
