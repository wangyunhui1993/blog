// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import '../node_modules/swiper/dist/css/swiper.min.css'
import 'swiper'
import vueQuillEditor from 'vue-quill-editor'
//Vue.use(editor,options);
Vue.use(Mint)
Vue.component('icon', Icon)
Vue.component(vueQuillEditor)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  template: '<App/>',
  components: { App }
})
