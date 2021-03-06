<template lang="pug">
img(alt='Vue logo', src='./assets/logo.png')
RouterLink(to='/') HOME
RouterLink(to='/about') ABOUT
RouterView
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #132333;
  margin-top: 60px;
}
</style>