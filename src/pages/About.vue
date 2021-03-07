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
</style>