import Vue from 'vue'
import Router from 'vue-router'
import Basic from '../components/VueResume/ResumeFillInWiter/BasicInformation'
import Menu from '../components/VueResume/Menu/Menu.vue'
import Work from '../components/VueResume/ResumeFillInWiter/WorkExperience.vue'
import Skills from '../components/VueResume/ResumeFillInWiter/SkillsCertificate.vue'
import Self from '../components/VueResume/ResumeFillInWiter/SelfAssessment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Resume',
      name: 'Menu',
      component: Menu   // 菜单列表
    },
    {
      path: '/Resume/Basic',   // 基本信息
      name: 'Basic',
      component: Basic
    },
    {
      path: '/Resume/Work',   // 工作经历
      name: 'Work',
      component: Work
    },
    {
      path: '/Resume/Skills',  // 技能证书
      name: 'Skills',
      component: Skills
    },
    {
      path: '/Resume/Self',   // 自我评价
      name: 'Self',
      component: Self
    }
  ],
  mode: "history"   // 删除浏览器里面的 /#
})
