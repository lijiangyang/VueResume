<template>
  <div id="selfShow">
    <h3>自我评价</h3>
    <div>{{this.$store.state.self.selfList[0].value}}</div>
  </div>
</template>

<script>
export default {
    name: 'SelfShow',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
  #selfShow {
      position: absolute;
      left: 650px;
      top: 500px;
  }
</style>
