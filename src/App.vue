<template lang="pug">
nav
  RouterLink(to='/') HOME
  RouterLink(to='/about') ABOUT
img(alt='Vue logo', src='./assets/logo.png')
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

  img {
    display: inline;
  }
}

nav {
  background-color: #333;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  * + * {
    margin-left: 1em;
  }
}
</style>