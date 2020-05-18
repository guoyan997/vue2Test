<template>
  <div class="download-content">
    <button @click="downLoad">
      下载
    </button>
    <img :src=imgUrl class="img-content"/>
  </div>
</template>

<script>
import axios from 'axios'
import apiConfig from '../util/apiConfig'
import qs from 'qs'
export default {
  name: '',
  data () {
    return {
      imgUrl: ''
    }
  },
  methods: {
    async downLoad () {
      const {code, data} = await this.getDataForWeb()
      const base64Str = `data:${JSON.parse(data).type};${JSON.parse(data).encode},${JSON.parse(data).fileString}`
      this.imgUrl = base64Str
      console.log(code + data)
    },
    getDataForWeb (params, options) {
      let url = 'https://mocstest.dfmc.com.cn/fileBatch/getFile?fileId=16ae41f82fd214d073fd7064d5a9de20'
      const configs = {apiConfig, url, data: qs.stringify(params), ...options}
      return new Promise((resolve, reject) => {
        axios(configs)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    funDownload (domImg, filename) {
      // 创建隐藏的可下载链接
      let eleLink = document.createElement('a')
      eleLink.download = filename
      eleLink.style.display = 'none'
      // 图片base64地址
      let canvas = document.createElement('canvas')
      let context = canvas.getContext('2d')
      // let width = domImg.natureWidth
      // let height = domImg.natureHeight
      context.drawImage(domImg, 0, 0)
      // 如果是PNG图片，则context.toDataURL('image/png');
      eleLink.href = context.toDataURL('image/jpeg')
      // 触发点击
      document.body.appendChild(eleLink)
      eleLink.click()
      // 移除
      document.body.removeChild(eleLink)
    },
    getBase64Image (img) {
      let canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      let ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, img.width, img.height)
      let ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
      let dataURL = canvas.toDataURL('image/' + ext)
      return dataURL
    }
  }
}
</script>

<style lang="scss" scoped>
  .download-content {
    width: 100%;
    height: 100%;
    .img-content {
      // width: 200px;
    }
  }

</style>
