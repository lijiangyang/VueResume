<template>
  <div>
    <ul>
      <li v-for="(menu) in menuModule" :key="menu.id">
        <router-link v-bind:to="menu.router">{{menu.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuModule: this.$store.state.menuModule.menuList
    }
  },
  methods: {
    menuName: function (name) {
      alert(name);
    }
  },
  components: {
  }
}
</script>

<style>

</style>
