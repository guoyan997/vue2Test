<template>
<div class="svg-page">
  <svg-compent name="flag" size="60"></svg-compent>
  <!--属性preserveAspectRatio和viewBox是控制缩放的，以为屏幕不同所以我选择不按照比例缩放适应不同屏幕-->
  <svg id="svgs" width="80%" height="80%" preserveAspectRatio="none" viewBox="0,0,800,300">
    <rect x="250" y="250" width="50" height="50" fill="#4bc0c8">
      <animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 200 200" to="360 400 400" repeatCount="indefinite" />
    </rect>
  </svg>
  <button id="btn">开始运行</button>

  <svg width="440" height="440" viewbox="0 0 440 440">
    <circle
      cx="220" cy="220"
      r="170"
      stroke-width="50"
      stroke="#D1D3D7"
      fill="none">
    </circle>
    <circle
      cx="220" cy="220"
      r="170"
      stroke-width="50"
      stroke="#00A5E0"
      fill="none"
      transform="matrix(0,-1,1,0,0,440)"
      stroke-dasharray="0 1069">
    </circle>
  </svg>
  <p>拖我：<input id="range" type="range" min="0" max="100" value="0" style="width:300px;"></p>
<div class="svg-content">
  <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
       width="284.929px" height="143.542px" viewBox="0 0 284.929 143.542" enable-background="new 0 0 284.929 143.542"
       xml:space="preserve">
<path class="alibaba" fill-rule="evenodd" clip-rule="evenodd" fill="none" d="M130.224,71.699c-1.119,0-2.238,0-3.357,0
    c-0.224-1.567-0.448-3.134-0.672-4.701c-4.7,2.462-9.402,4.925-14.102,7.387c-12.896,5.328-29.525,3.09-43.65,1.343
    c0,5.148,0,10.297,0,15.445c-10.34,2.544-23.941,10.769-24.175,23.504c10.591,20.382,60.005,4.57,77.899,2.015
    c0,0.224,0,0.448,0,0.672c-0.448,0-0.896,0-1.343,0c-18.776,14.243-93.198,33.523-100.731-3.358
    C15.876,93.371,33.556,77.8,41.58,67.669c20.558-25.953,93.976-74.961,147.068-57.082c49.84,16.786,7.64,61.106-8.058,81.257
    c-4.61,5.917-16.906,14.347-12.76,24.176c41.213,4.064,75.658-17.662,106.775-27.533c-0.224,0.448-0.448,0.896-0.672,1.343
    c-29.935,11.595-56.382,29.979-90.658,39.621c-11.694,3.29-34.207,6.583-38.278-5.372c-8.923-26.204,62.138-65.446,52.38-88.644
    c-4.779-11.076-21.725-12.767-33.577-16.788c-1.12,0.895-2.239,1.791-3.358,2.686c0,0.224,0,0.448,0,0.671
    c2.238,1.791,4.477,3.582,6.715,5.372c0,0.224,0,0.448,0,0.672c-30.254,1.578-56.749,14.34-82.6,21.489
    c1.381,4.517,3.486,7.65,2.015,11.417c-3.581,3.357-7.164,6.716-10.745,10.073c13.009,10.827,40.156-3.109,47.679-8.059
    c-1.343-1.343-2.686-2.686-4.029-4.029c0.896,0,1.791,0,2.687,0c3.186,1.525,5.217,2.786,6.715,6.044
    C129.329,67.221,129.776,69.46,130.224,71.699z"/>
</svg>
  <svg width="350" height="160">
    <g class="layer" transform="translate(60,10)">
      <circle r="5" cx="0"   cy="105" />
      <circle r="5" cx="90"  cy="90"  />
      <circle r="5" cx="180" cy="60"  />
      <circle r="5" cx="270" cy="0"   />

      <g class="y axis">
        <line x1="0" y1="0" x2="0" y2="120" />
        <text x="-40" y="105" dy="5">$10</text>
        <text x="-40" y="0"   dy="5">$80</text>
      </g>
      <g class="x axis" transform="translate(0, 120)">
        <line x1="0" y1="0" x2="270" y2="0" />
        <text x="-30"   y="20">January 2014</text>
        <text x="240" y="20">April</text>
      </g>
    </g>
  </svg>
</div>
  <svg width="60" height="60" viewBox="0 0 60 60" id="normal" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="getG">
    <!-- Generator: Sketch 55.2 (78181) - https://sketchapp.com -->
    <title>正常</title>
    <desc>Created with Sketch.</desc>
    <g id="0927-ipad" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="08-市场份额" transform="translate(-176.000000, -579.000000)" fill-rule="nonzero">
        <g transform="translate(176.000000, 579.000000)"  id="G1">
          <rect id="Rectangle-6" stroke="#00B050" stroke-width="1.5" x="0.75" y="0.75" width="16.5" height="16.5" rx="8.25"></rect>
          <path d="M14,9 C14,11.7614237 11.7614237,14 9,14 C6.23857625,14 4,11.7614237 4,9" id="Rectangle-6" stroke="#00B050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <circle id="Oval" fill="#06B254" cx="6.5" cy="6.5" r="1.5"></circle>
          <circle id="Oval" fill="#06B254" cx="11.5" cy="6.5" r="1.5"></circle>
        </g>
      </g>
    </g>
  </svg>
</div>
</template>
<script>
import $ from 'jquery'
import Snap from 'snapsvg'
import svgCompent from './svgCompent'
export default {
  name: '',
  data () {
    return {}
  },
  mounted () {
    const svg = Snap('#svgs')
    // Lets create big circle in the middle:
    const bigCircle = svg.circle(150, 150, 100)
    // By default its black, lets change its attributes
    bigCircle.attr({
      fill: '#bada55',
      stroke: '#000',
      strokeWidth: 5
    })
    const $svg = $('#svgs')
    // 运行代码的时候发现filter也有width和height属性，源码中获取的是父级的offsetheight和offsetwidth，但是父级offsetheight和offsetwidth是空，没办法，只好手动添加了
    svg.paper.node.offsetHeight = $svg.height()
    svg.paper.node.offsetWidth = $svg.width()
    // 不用矩阵定义过滤器颜色真是nice
    const f = svg.paper.filter(Snap.filter.shadow(0, 0, 3))
    const p1 = svg.paper.path('M179 209L128 217L375 221L208 291L437 295L447 272').attr({
      stroke: '#ffffff',
      strokeWidth: 2,
      fill: 'none',
      strokeLinejoin: 'round',
      strokeLinecap: 'round',
      filter: f
    })
    const $path = $('path')
    const $btn = $('#btn')
    // 经过我的测试，发现除了谷歌和欧鹏之外的浏览器好像都不支持除path元素使用getTotalLength，为了兼容，只好用path了
    const len = p1.getTotalLength()
    $path.css('strokeDasharray', len)
    $path.css('strokeDashoffset', len)
    $btn.on('click', function () {
      $path.stop()
      $path.css('strokeDashoffset', len)
      $path.animate({strokeDashoffset: 0}, 6000)
    })

    const range = document.querySelector('#range')
    const circle = document.querySelectorAll('circle')[1]
    if (range && circle) {
      range.addEventListener('change', function () {
        let percent = this.value / 100
        let perimeter = Math.PI * 2 * 170
        circle.setAttribute('stroke-dasharray', perimeter * percent + ' ' + perimeter * (1 - percent))
      })
    }
  },
  methods: {
    getG (e) {
      debugger
    }
  },
  components: {
    svgCompent
  }
}
</script>

<style lang="scss" scoped>
  .svg-page {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .svg-content {
      .alibaba {
        stroke-width: 1px;
        stroke: #ccc;
        animation: lineMove 3s ease-out infinite;
      }

      @keyframes lineMove {
        0% {
          stroke-dasharray: 0, 1269.3662109375;
        }
        50% {
          stroke-dasharray: 1269.3662109375, 1269.3662109375;
          fill: rgba(0, 0, 0, 0);
          opacity: 1;
        }
        100% {
          stroke-dasharray: 1269.3662109375, 1269.3662109375;
          fill: rgba(239, 114, 32, .9);
          opacity: 0;
        }
      }
    }
  }

</style>
