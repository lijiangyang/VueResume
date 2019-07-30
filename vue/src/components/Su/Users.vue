<template>
  <div id="users">
    <!-- 子组件向父组件传递数据 -->
    <h3 v-on:click="changeTitle">{{title}}</h3>
    <ul>
      <li v-for="(user) in users" :key="user.id" v-on:click="user.checked=!user.checked">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.checked">{{user.age}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Users',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      title: 'Hello Users',
      app: '我是子组件的数据'
    }
  },
  methods: {
    changeTitle: function () {
      this.$emit("titleChanged", this.app)
    }
  },
  components: {

  }
}
</script>

<style socped>
  #users {
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }

  li {
    padding: 20px;
    border: 1px solid black;
    flex-grow: 1;
    flex-basis: 200px;
    margin: 10px;
    text-align: center;
  }
</style>
