// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'



import store from './store'
 
// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'
 
// import {quillEditor, Quill} from 'vue-quill-editor'
//import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
// Quill.register('modules/ImageExtend', ImageExtend)
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

 
import Icon from 'vue-awesome/components/Icon'
 import $ from 'jquery'
// globally (in your main .js file)
   Vue.component('icon', Icon)

import '@/assets/iconfont.css'
import router from './router'
import Validator from 'vue-validator'
Vue.use(Validator)
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Fontawesome)
/* eslint-disable no-new */
// 创建和挂载根实例





new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
