<template>
  <div>
    <GlobelMenu></GlobelMenu>
    <ul>
      <li v-for="(skill, index) in skills" :key="skill.id">
        <span>{{skill.content}}</span>
        <input 
          v-bind:type="[skill.id === 'familiarity' ? 'number' : 'text']"
          v-bind:value="skill.value"
          v-on:input="skillsChange($event, index)" 
          >
          <!-- v-bind:class="[(skill.checked && 'inputNotEmpty') ? 'inputIsEmpty' : 'inputBox']" -->
      </li>
    </ul>
    <el-button type="danger" v-on:click="inputBtnEmpty" plain>清空按钮</el-button>
    <el-button type="success" v-on:click="inputBtnAdd" plain>添加按钮</el-button>
  </div>
</template>

<script>
import GlobelMenu from './GlobalMenu'
export default {
  name: 'SkillsCertificate',  // 工作经历组件
  data() {
    return {
      skills: this.$store.state.skills.skills
    }
  },
  methods: {
    skillsChange (event, index) {
      this.$store.commit('skillsChange', {event: event.target.value, index})
    },
    inputBtnEmpty () {
      this.$store.commit('inputBtnEmpty')
    },
    inputBtnAdd () {
      this.$store.commit('inputBtnAdd')
    }
  },
  components: {
    GlobelMenu 
  }
}
</script>

<style scoped>
  .inputNotEmpty {
    background-color: transparent;
    border: none;
    color: transparent;
    position: relative;
    left: -40px;
    margin: 2px;
  }

  /* 输入框为空提示 */
  /* .inputIsEmpty {
    background-color: transparent;
    border: none;
    color: red;
    position: relative;
    left: -40px;
    margin: 2px;
    text-transform:uppercase;
  } */

  /* 输入框样式 */
  /* .inputBox {
    display: block;
    border: none;
    border-bottom: 1px solid gray; 
    outline: none;
    background-color: transparent;
    margin: 10px 0;
    font-size: 15px;
    position: relative;
    left: -40px;
  } */
</style>
