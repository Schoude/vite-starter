<template lang="pug">
h1 {{ msg }}
section
  label This is a section with my MSG: {{ msg }}
  .wrapper
    h2 Local State
    h3.username-local User: {{ user.username }}
    button.local-increment(@click='incLocalCount') Increment local count
    .count-local count {{ count }}
  .wrapper
    h2 Vuex State
    h3.username-store Store User: {{ userName }}
    button.action-increment(@click='inc') Increment count
    .count-store storeCount {{ storeCount }}
</template>

<script lang="ts">
import { ref, defineComponent, reactive, computed } from 'vue';
import { useStore } from '../store';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const store = useStore();

    const count = ref(0);
    const user = reactive({ username: 'Marc' });
    const incLocalCount = () => count.value++;
    const inc = () => store.dispatch('increment');
    const storeCount = computed(() => store.state.count);
    const userName = computed(() => store.getters['userModule/getUsername']);

    return {
      count,
      user,
      incLocalCount,
      inc,
      storeCount,
      userName,
    };
  },
});
</script>

<style lang="scss" scoped>
$color-code: #b421c2;

.wrapper {
  margin-top: 2em;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
  color: $color-code;
}
</style>
