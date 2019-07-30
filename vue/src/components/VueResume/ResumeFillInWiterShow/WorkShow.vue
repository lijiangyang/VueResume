<template>
  <div id="workShow">
    <h3>工作经历/项目经验</h3>
    <div v-for="(work, index) in this.$store.state.work.workList" :key="work.id" :class='[index%2 === 1 ? "workContent" : "workTitle"]'>
        {{work.value}}
    </div>    
  </div>
</template>

<script>
export default {
  name: 'WorkShow',
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
  #workShow {
    position: absolute;
    left: 650px;
  }

  /* 项目名称 */
  .workTitle {
    position: relative;
    left: -30px;
    width: 400px;
    padding: 0 5px;
    border-left: 3px solid orange;
    color: black;
    opacity: 0.6;
    font-size: 20px;
    font-weight: bold; 
  }

  /* 项目经验 */
  .workContent {
    position: relative;
    left: -20px;
    top: 0px;
    text-indent: 2em;
    font-size: 18px;
    font-weight: bold;
    color: gray;
    width: 350px;
    font-family: ' Microsoft Yahei';
    word-wrap: break-word;
  }
</style>
