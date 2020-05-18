<template>
  <div id="app">
    <!--<div class="indicator"></div>-->
    <vue-scroll-indicator
      height="7px"
      color="#11998e"
      background="none"
    >
    </vue-scroll-indicator>
    <img class="img-div" :src="imgSrc">
    <router-view/>
  </div>
</template>

<script>
import WaterMark from 'js-watermark' // 添加页面水印
import Notification from 'notification-koro1' // 添加PC端浏览器，桌面提示
export default {
  name: 'App',
  data () {
    return {
      imgSrc: '../static/images/1.png'
    }
  },
  methods: {
    notifyMe (title, options) {
      console.log('**********' + window.Notification)
      debugger
      // 先检查浏览器是否支持
      if (!window.Notification) {
        console.log('浏览器不支持通知')
      } else {
        console.log('通知权限的类型' + Notification.permission)
        // 检查用户曾经是否同意接受通知
        if (Notification.permission === 'granted') {
          const notification = new Notification(title, options) // 显示通知
          console.log(notification)
        } else if (Notification.permission === 'default') {
          // 用户还未选择，可以询问用户是否同意发送通知
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              console.log('用户同意授权')
              const notification = new Notification(title, options) // 显示通知
              console.log(notification)
            } else if (permission === 'default') {
              console.warn('用户关闭授权 未刷新页面之前 可以再次请求授权')
            } else {
              // denied
              console.log('用户拒绝授权 不能显示通知')
            }
          })
        } else {
          // denied 用户拒绝
          console.log('用户曾经拒绝显示通知')
        }
      }
    }
  },
  mounted () {
    WaterMark.configure({
      user: 'Jeffery Gou.',
      company: 'TMDM co.',
      time: false,
      watermark_y_space: 100
    })
    const title = 'Hello gy!'
    const options = {
      dir: 'auto', // 文字方向
      body: '通知：OBKoro1评论了你的朋友圈', // 通知主体
      requireInteraction: true, // 不自动关闭通知
      // 通知图标
      icon: 'https://upload-images.jianshu.io/upload_images/5245297-818e624b75271127.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
    }
    this.notifyMe(title, options)
  }
}
</script>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  .indicator {
    position: absolute;
    top: 0; right: 0; left: 0; bottom: 0;
    background: linear-gradient(to right top, teal 50%, transparent 50%) no-repeat;
    background-size:  100% calc(100% - 100vh + 10px);
    z-index: 10000;
    pointer-events: none;
    mix-blend-mode: darken;
    &::after {
       content: '';
       position: fixed;
       top:10px; bottom: 0; right: 0; left: 0;
       background: #fff;
       z-index: 10000;
     }
    }
}
.img-div {
  width: 600px;
  height: 200px;
}
// 页面进度条自定义颜色
#nprogress .bar {
  // background: red !important; //自定义颜色
}
</style>
