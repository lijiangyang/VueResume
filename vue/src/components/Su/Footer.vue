<template>
  <div>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      title: 'CopyRigth 2019 Vue Demo'
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
  h3 {
    background-color: black;
    padding: 5px;
    color: aquamarine;
    width: 100%;
    text-align: center;
  }
</style>
