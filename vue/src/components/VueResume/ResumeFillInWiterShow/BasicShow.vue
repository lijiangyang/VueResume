<template>
  <div id="basicShow">
    <el-avatar shape="square" :size="100" :src="url"></el-avatar>
    <div id="name">
      <p>{{basic[0].value}}</p>
      <p>{{basic[1].value}}</p>
    </div>
    <div>
      <h3 class="el-icon-user">
        个人介绍
      </h3>
      <div class="textBox">{{basic[2].value}}</div>
      <div class="textBox">{{basic[3].value}}</div>
      <div class="textBox">{{basic[4].value}}</div>
      <h3 class="el-icon-s-fold">
        联系方式
      </h3>
      <div class="email">
          <div class="el-icon-phone-outline">{{basic[5].value}}</div><br />
          <div class="el-icon-info">{{basic[6].value}}</div>
      </div> 
      <h3 class="el-icon-s-release">
        个人技能
      </h3>
      <div class="textBox">{{basic[7].value}}</div>
      <h3 class="el-icon-s-comment">
        其他联系
      </h3>
      <div class="email">
        {{basic[8].value}}<br />
        {{basic[9].value}}<br />
        {{basic[10].value}}<br />
        {{basic[11].value}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicShow',
  data() {
    return {
      basic: this.$store.state.basic.basicList,
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
  #basicShow {
    position: absolute;
    left: 300px;
    background-color: blueviolet;
    width: 300px;
    height: 1200px;
    padding-left: 30px;
    padding-top: 30px;
  }

  h3 {
    color: white;
    opacity: 0.8;
    margin: 50px 0;
  }

  /* 姓名,职位 */
  #name {
    position: absolute;
    left: 160px;
    top: 40px;
    margin: 2px;
  }

  .textBox {
    position: relative;
    top: -40px;
    width: 260px;
    /*设置最小高度*/
    min-height: 20px;
    /*设置最大高度超过300px时出现滚动条*/
    max-height: 100px;
    outline: 0;
    font-size: 18px;
    line-height: 20px;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
    color: white;
    opacity: 0.6;
    text-indent: 1em;
  }

  .email {
    position: relative;
    top: -40px;
    width: 260px;
    /*设置最小高度*/
    min-height: 20px;
    /*设置最大高度超过300px时出现滚动条*/
    max-height: 100px;
    outline: 0;
    font-size: 18px;
    line-height: 20px;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: auto;
    color: white;
    opacity: 0.6;
  }
</style>
