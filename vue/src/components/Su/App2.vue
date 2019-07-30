<template>
  <div>
    <Header></Header>
    <!-- 子组件向父组件传数据 -->
    <Users v-bind:users="users" v-on:titleChanged="titleChanged($event)"></Users>
    <Footer></Footer>
    <h3>{{title}}</h3>
  </div>
</template>

<script>
import Header from './Header'
import Users from './Users'
import Footer from './Footer'
export default {
  name: 'App2',
  data () {
    return {
      users: [
        {id: 1, name: 'Henry', age: '28', checked: false},
        {id: 2, name: 'Henry', age: '28', checked: false},
        {id: 3, name: 'Henry', age: '28', checked: false},
        {id: 4, name: 'Henry', age: '28', checked: false},
        {id: 5, name: 'Henry', age: '28', checked: false},
        {id: 6, name: 'Henry', age: '28', checked: false},
        {id: 7, name: 'Henry', age: '28', checked: false},
        {id: 8, name: 'Henry', age: '28', checked: false},
        {id: 9, name: 'Henry', age: '28', checked: false}
      ],
      title: ''
    }
  },
  methods: {
    titleChanged(title) {
      this.title = title;
    }
  },
  components: {
    'Header': Header,
    'Users': Users,
    'Footer': Footer
  }
}
</script>

<style>

</style>
