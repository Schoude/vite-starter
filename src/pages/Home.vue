<template lang="pug">
section.home THIS IS HOME
  HelloWorld(msg='Hello Vue 3 + TypeScript + Pug + S(C|A)SS + Vuex 4+ Vite')
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>

<style lang="sass" scoped>
</style>