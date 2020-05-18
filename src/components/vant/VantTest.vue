<template>
<div class="vant-test-content">
  <div class="van-ellipsis">这是一段宽度限制 250px 的文字，后面的内容会省略</div>
  <div class="btn-content">
    <van-button type="warning" @click="showNotify">显示通知</van-button>
    <van-button plain hairline type="danger">细边框按钮</van-button>
  </div>
  <van-button round type="danger">圆形按钮</van-button>
  <van-row>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
    <van-col span="8">span: 8</van-col>
  </van-row>
  <van-cell-group>
    <van-field
      v-model="username"
      label="用户名"
      placeholder="请输入用户名"
      error
    />
    <van-field
      v-model="phone"
      label="手机号"
      placeholder="请输入手机号"
      error-message="手机号格式错误"
    />
  </van-cell-group>
  <div class="push-list">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
  <div class="push-list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>
  </div>
  <a-skeleton />
  <div class="date-selected-content" >
    <van-datetime-picker
      v-model="dateStr"
      type="date"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      value: '',
      username: 'gy',
      phone: '123123',
      isLoading: false,
      count: 0,
      loading: false,
      finished: false,
      list: [],
      minDate: new Date(2017, 1, 1),
      maxDate: new Date(2019, 10, 1),
      dateStr: new Date()
    }
  },
  methods: {
    showNotify () {
      // 这个是vant
      this.$notify({
        message: '通知内容',
        duration: 3000,
        background: '#1989fa'
      })
      // 这个是andt-design
      this.$message.info('This is a normal message')
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/rem";
  .vant-test-content {
    .btn-content {
      .van-button {
        width: 200px;
        height: 60px;
        font-size: 30px;
      }
    }
    .van-col {
      background-color: #66ccee;
    }
    .push-list {
      height: 300px;
      background-color: #66ccee;
      overflow-y: auto;
    }
  }
  .date-selected-content {
    width: 100%;
    height: px2rem(400);
    background-color: #fff000;
    /deep/
    .van-picker {
      position: relative;
      -webkit-user-select: none;
      user-select: none;
      -webkit-text-size-adjust: 100%;
      background-color: #fff;
      .van-picker__toolbar {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        height: px2rem(60);
        line-height: px2rem(60);
        button {
          font-size: px2rem(24);
        }
      }
      .van-picker__columns {
        // height: px2rem(320) !important;
        .van-picker-column {
          // height: px2rem(320) !important;
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          flex: 1;
          overflow: hidden;
          font-size: px2rem(24);
          text-align: center;
          .van-picker-column__wrapper {
            line-height: px2rem(44)!important;
            .van-ellipsis{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              height: px2rem(44)!important;
              line-height: px2rem(44)!important;
            }
          }
        }
        .van-hairline-unset--top-bottom {
          height: px2rem(44)!important;
          background-color: #cccccc;
        }
      }
    }
  }

</style>
