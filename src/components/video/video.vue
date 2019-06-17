<template>
  <div class="video-content">
    <div class="video-main">
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer1"
                     :playsinline="true"
                     :options="playerOptions"
      ></video-player>
      <!--<video-player  class="video-player-box"-->
                     <!--ref="videoPlayer2"-->
                     <!--:options="playerOptions"-->
                     <!--:playsinline="true"-->
                     <!--customEventName="customstatechangedeventname"-->

                     <!--@play="onPlayerPlay($event)"-->
                     <!--@pause="onPlayerPause($event)"-->
                     <!--@ended="onPlayerEnded($event)"-->
                     <!--@waiting="onPlayerWaiting($event)"-->
                     <!--@playing="onPlayerPlaying($event)"-->
                     <!--@loadeddata="onPlayerLoadeddata($event)"-->
                     <!--@timeupdate="onPlayerTimeupdate($event)"-->
                     <!--@canplay="onPlayerCanplay($event)"-->
                     <!--@canplaythrough="onPlayerCanplaythrough($event)"-->

                     <!--@statechanged="playerStateChanged($event)"-->
                     <!--@ready="playerReadied">-->
      <!--</video-player>-->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4',
          src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
        }],
        poster: '../../static/images/1.png', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player2
    }
  },
  methods: {
    // listen event
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    onPlayerPause (player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged (playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>

<style lang='scss' scoped>
  // 播放器的样式设置，放在了static文件夹下的myVideoCss.css， 在main中引入才能修改生效
  .video-content {
    display: flex;
    justify-content: center;
    align-items: center;
    .video-main {
      position: relative;
      width: 100%;
      height: 300px;
      background-color: #fff000;
    }
  }
</style>
