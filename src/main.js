// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Store from './store'
import 'lib-flexible/flexible'
import axios from 'axios'
// 进度条
import VueProgressBar from 'vue-progressbar'
// 页面滚动
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css'

// 引入echarts
import echarts from 'echarts'
import 'echarts-liquidfill/dist/echarts-liquidfill'
// 生产二维码
import VueQriously from 'vue-qriously'
// 触控支持
import VueTouch from 'vue-touch'
// 抽屉布局
import DrawerLayout from 'vue-drawer-layout'
// 全屏切换
import VueFullPage from 'vue-fullpage'
// 无缝轮播
import scroll from 'vue-seamless-scroll'
// 画廊轮播
import Carousel3d from 'vue-carousel-3d'

Vue.use(Carousel3d)

Vue.use(DrawerLayout)
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.use(vuescroll)
Vue.use(VueQriously)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(VueFullPage)
Vue.use(scroll)

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options)

const store = new Vuex.Store(Store)

axios.get('serverconfig.json').then((result) => {
  localStorage.setItem('ApiUrl', result.data.ApiUrl)
  alert(localStorage.getItem('ApiUrl'))
}).catch((error) => { console.log(error) })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})