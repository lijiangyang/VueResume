<template>
  <div id="basic">
    <GlobelMenu></GlobelMenu>
    <ul>
      <li v-for="(basicList, index) in this.$store.state.basic.basicList" :key="basicList.id">
        <span>{{basicList.name}}</span><br />
        <input v-on:input="inputChange($event, index)" ref="basicInput" type="text" v-bind:value="basicList.value" />
      </li>
    </ul>
  </div>
</template>

<script>
import GlobelMenu from './GlobalMenu'
export default {
  name: 'BasicInformation',   // 基本信息组件
  data() {
    return {
      
    }
  },
  methods: {
    inputChange: function (event, index) {
      this.$store.commit('increment', {event: event.target.value, index: index})
    }
  },
  computed: {
    
  },
  components: {
    GlobelMenu
  }
}
</script>

<style scoped>
  /* 列表 */
  #basic li {
    list-style: none;
  }

  /* span */
  #basic span {
    position: relative;
    left: -40px;
    opacity: 0.6;
  }

  /* 输入框 */
  #basic input {
    display: block;
    width: 260px;
    border: none;
    border-bottom: 1px solid gray; 
    outline: none;
    background-color: transparent;
    margin: 10px 0;
    font-size: 15px;
    position: relative;
    left: -40px;
  }
</style>
