<template>
  <div class="card-content">
    <div class="crad-title">
      <div class="text">
        {{title}}
      </div>
      <div v-if="buttonGroup.length > 0" class="button-group">
        <div v-for="(button, index) in buttonGroup" :key="index"
             @click="activeButton(index)"
             :class="['button', activeButtonIndex ===  index ? 'active' : '']">
          {{button}}
        </div>
      </div>
    </div>
    <div class="crad-body">
      <slot  name="cardBody">这是拥有命名的slot的默认内容</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: {
      type: String,
      default: ''
    },
    buttonGroup: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeButtonIndex: 0
    }
  },
  methods: {
    activeButton (index) {
      this.activeButtonIndex = index
      this.$emit('btnGroupClick', {index})
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-content {
    position: relative;
    margin-top: 10px;
    border: 1px solid #bfbfbf;
    box-shadow:0px 0px  10px 3px #aaa;
    .crad-title {
      height: 80px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 60px;
      border-bottom: 1px solid #Fcfcfc;
      .text {
        font-weight: bold;
        font-size: 24px;
      }
      .button-group {
        display: flex;
        height: 50px;
        background-color: #14265c;
        border: 1px solid #00B6FF;
        border-radius: 4px;
        font-size: 24px;

        .button {
          display: flex;
          justify-content: center;
          align-content: center;
          height: 100%;
          box-sizing: border-box;
          padding: 10px 28px;
          &.active {
            background-color: #00B6FF;
          }
        }
      }
    }
    .card-content {
      .content {
        position: relative;
        padding: 0 60px;
      }
    }
  }

</style>
