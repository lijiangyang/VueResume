<template>
  <!-- <div id="app">
    <ul>
      <li>   
        <router-link to="/">HelloWorld</router-link>
        <router-link to="/Home">Home</router-link>
      </li>
    </ul>
    <router-view></router-view> 
  </div> -->
  <div id="app">
    <VueResume></VueResume>
    <router-view></router-view> 
  </div>
</template>

<script>
import VueResume from './components/VueResume/VueResume'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    VueResume
  }
}
</script>

<style>

</style>
