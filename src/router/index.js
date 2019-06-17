import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import BarChart from '@/charts/bar/Bar'
// import LineChart from '@/charts/line/Line'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: '/vueTest/',
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
    },
    {
      path: '/loading',
      name: 'LoadingPage',
      component: resolve => require(['@/components/loading/LoadingComp'], resolve)
    },
    {
      path: '/sticky',
      name: 'StickyDemo',
      component: resolve => require(['@/components/StickyDemo'], resolve)
    },
    {
      path: '/miltHead',
      name: 'MiltHead',
      component: resolve => require(['@/components/MiltHeadTable'], resolve)
    },
    {
      path: '/treeTable',
      name: 'treeTable',
      component: resolve => require(['@/components/TreeData/TreeTablePage'], resolve)
    },
    {
      path: '/treeTable2',
      name: 'treeTable2',
      component: resolve => require(['@/components/TreeTable/index'], resolve)
    },
    {
      path: '/mulit',
      name: 'mulit',
      component: resolve => require(['@/components/MulitHeader/Table'], resolve)
    },
    {
      path: '/card',
      name: 'card',
      component: resolve => require(['@/components/card/CardPage'], resolve)
    },
    {
      path: '/testTable',
      name: 'testTable',
      component: resolve => require(['@/components/card/TableTest'], resolve)
    },
    {
      path: '/clist',
      name: 'clist',
      component: resolve => require(['@/components/CityList/index'], resolve)
    },
    {
      path: '/lockTable',
      name: 'lockTable',
      component: resolve => require(['@/components/newTreeTable/TableLocked'], resolve)
    },
    {
      path: '/myQuee',
      name: 'myQuee',
      component: resolve => require(['@/components/marquee/TestQuee'], resolve)
    },
    {
      path: '/numCounter',
      name: 'numCounter',
      component: resolve => require(['@/components/NumCounter'], resolve)
    },
    {
      path: '/easyTable',
      name: 'easyTable',
      component: resolve => require(['@/components/EasyTableTest'], resolve)
    },
    {
      path: '/baiduMap',
      name: 'baiduMap',
      component: resolve => require(['@/components/BaiduMapComp'], resolve)
    },
    {
      path: '/needTable',
      name: 'needTable',
      component: resolve => require(['@/components/NeedTable'], resolve)
    },
    {
      path: '/vant',
      name: 'vant',
      component: resolve => require(['@/components/vant/VantTest'], resolve)
    },
    {
      path: '/video',
      name: 'video',
      component: resolve => require(['@/components/video/video'], resolve)
    },
    {
      path: '/scss',
      name: 'scss',
      component: resolve => require(['@/components/ScssTest'], resolve)
    },
    {
      path: '/refreshList',
      name: 'refreshList',
      component: resolve => require(['@/components/RefreshList'], resolve)
    },
    {
      path: '/cssIndicator',
      name: 'cssIndicator',
      component: resolve => require(['@/components/CssIndicator'], resolve)
    },
    {
      path: '/skeleton',
      name: 'skeleton',
      component: resolve => require(['@/components/Skeleton'], resolve)
    }
  ]
})
