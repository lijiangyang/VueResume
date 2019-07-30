<template>
  <div id="work">
    <GlobelMenu></GlobelMenu> 
    <el-dropdown>
      <!-- 下拉框 -->
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    <el-dropdown-menu slot="dropdown">
      <!-- 下拉框列表 -->
      <el-dropdown-item v-for="(work, index) in workSelect" :key="index" @click.native="workMenuSelect(work.content)">
        {{work.content}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
    <div>
      <!-- 输入框 -->
      <el-col :span="2">
        <el-input  
          v-bind:placeholder="workStore.placeholder1" 
          v-model="workStore.workList[workStore.index1].value"
          v-on:input="inputChange($event, workStore.index1)">
        </el-input>
        <el-input 
          v-bind:placeholder="workStore.placeholder2" 
          v-model="workStore.workList[workStore.index2].value"
          v-on:input="inputChange($event, workStore.index2)">
        </el-input>
      </el-col>
    </div>
  </div>
</template>

<script>
import GlobelMenu from './GlobalMenu'
import { Button, Select } from 'element-ui'
export default {
  name: 'WorkExperience',  // 工作经历组件
  data() {
    return {
      input: '',
      workSelect: this.$store.state.work.workSelect,
      workStore: this.$store.state.work
    }
  },
  methods: {
    workMenuSelect (argument) {
      this.$store.commit('workMenuSelect', argument)
    },
    inputChange (event, index) {
      this.$store.commit('inputChange', {event, index})
    }
  },
  components: {
    GlobelMenu 
  }
}
</script>

<style scoped>
  #work el-col {
    position: relative;
    top: 50px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
