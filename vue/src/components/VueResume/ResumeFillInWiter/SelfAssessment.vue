<template>
  <div id="self">
    <GlobelMenu></GlobelMenu>
    <el-input
        type="textarea"
        placeholder="自我评价"
        v-on:input="selfChange($event)"
        v-bind:value="this.$store.state.self.selfList[0].value"
        maxlength="100"
        show-word-limit
      >
    </el-input>
    <el-button type="danger" plain>点击清空</el-button>
  </div>
</template>

<script>
import GlobelMenu from './GlobalMenu'
export default {
  name: 'SelfAssessment',  // 自我评价组件
  data() {
    return {
      textarea: ''
    }
  },
  methods: {
    selfChange (event) {
      this.$store.commit('selfChange', event)
    }
  },
  components: {
    GlobelMenu
  }
}
</script>

<style scoped>
  #self {
    width: 260px;
  }
</style>
