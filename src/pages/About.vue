<template lang="pug">
section.about 
  div THIS IS About
  button(@click='goToHome') Go to HOME
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'About',
  setup() {
    const router = useRouter();

    function goToHome() {
      router.push('/');
    }

    return {
      goToHome,
    };
  },
});
</script>

<style lang="scss" scoped>
button {
  padding: 0.5em 1em;
  border: 1px solid whitesmoke;
  transition: background-color 0.2s ease;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(245, 245, 245, 0.12);
  }
}
</style>