import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import BarChart from '@/charts/bar/Bar'
// import LineChart from '@/charts/line/Line'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vueTest/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    },
    {
      path: '/bar',
      name: 'BarChart',
      component: resolve => require(['@/charts/bar/Bar'], resolve)
    },
    {
      path: '/line',
      name: 'LineChart',
      component: resolve => require(['@/charts/line/Line'], resolve)
    },
    {
      path: '/flex',
      name: 'Flexible',
      component: resolve => require(['@/charts/flexible/Flexible'], resolve)
    },
    {
      path: '/table',
      name: 'TestTable',
      component: resolve => require(['@/charts/flexible/TestTable'], resolve)
    },
    {
      path: '/test',
      name: 'TestDraw',
      component: resolve => require(['@/components/TestDrawerLayout'], resolve)
    },
    {
      path: '/full',
      name: 'FullPage',
      component: resolve => require(['@/components/FullPage'], resolve)
    },
    {
      path: '/scoll',
      name: 'ScollTable',
      component: resolve => require(['@/components/ScollTable'], resolve)
    },
    {
      path: '/carousel',
      name: 'CarouselPage',
      component: resolve => require(['@/components/CarouselPage'], resolve)
    }
  ]
})
