<template lang="pug">
h1 {{ msg }}
section
  label This is a section
  h2 User: {{ user.username }}
  // button(@click='$store.dispatch("increment")') Increment count
  //- // div count {{ $store.state.count }}
  //- button(@click='inc') Increment count
  //- div storeCount {{ storeCount }}
</template>

<script lang="ts">
import { ref, defineComponent, reactive, computed } from 'vue';
import { useStore, key } from '../store';

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
    // const inc = () => store.dispatch('increment');
    // const storeCount = computed(() => store.state.count);
    // const userName = computed(() => store.getters['userModule/getUsername']);

    // setTimeout(() => {
    //   store.dispatch("userModule/setUsername", "MEDDLER");
    // }, 3000);

    return {
      count,
      user,
      // inc,
      // storeCount,
      // userName,
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
