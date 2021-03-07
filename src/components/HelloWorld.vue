<template lang="pug">
h1 {{ msg }}
section
  label This is a section
  h2 User: {{ user.username }}
  button(@click='increment') Increment Count
  div count {{ count }}
</template>

<script lang="ts">
import { ref, defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    const user = reactive({ username: 'Marc' });

    function increment() {
      count.value++;
    }

    return {
      count,
      user,
      increment,
    };
  },
});
</script>

<style lang="scss" scoped>
$color-code: #b421c2;

a {
  color: #7031d4;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
  color: $color-code;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: $color-code;
}
</style>
