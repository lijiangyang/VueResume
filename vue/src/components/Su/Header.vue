<template>
  <div>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Vue.js Demo'
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
  div {
    width: 100%;
    padding: 10px;
    background-color: green;
    text-align: center;
  }
</style>
