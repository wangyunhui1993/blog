// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import { Search ,Toast,XInput ,XButton ,PopupRadio ,Selector ,Cell ,Group , Tab, TabItem,Swiper,SwiperItem,Grid, GridItem,Popup,Actionsheet ,Loading } from 'vux'
Vue.component('search', Search)
Vue.component('toast', Toast)
Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('popup-radio', PopupRadio)
Vue.component('selector', Selector)
Vue.component('cell', Cell)
Vue.component('group', Group)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('popup', Popup)
Vue.component('actionsheet', Actionsheet)
Vue.component('loading', Loading)
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
