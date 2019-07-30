<template>
  <div id="skillsShow">
    <h3>技能证书</h3>
    <ul>
      <li v-for="(skills, index) in skillsAdd" :key="index">
        {{skills.skills}}
        <!-- 评分组件 -->
        <el-rate
          v-model="skills.familiarity"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
        <!-- 技能证书详情多选 -->
        <div>
          {{skills.describe1}}<br />
          {{skills.describe2}}<br />
          {{skills.describe3}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SkillsShow',  // 技能证书
  data() {
    return {
      skillsAdd: this.$store.state.skills.skillsAdd,
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
  #skillsShow {
    position: absolute;
    left: 650px;
    top: 260px;
  }

  /* 证书标题 */
  .skillsTitle {
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

  /* 证书详情 */
  .skillsContent {
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
