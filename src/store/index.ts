import { InjectionKey } from '@vue/runtime-core';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import userModule from './user.module';

export interface RootState {
  count: number;
}

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    userModule,
  },
  state: { count: 0 },
  mutations: {
    increment(state: RootState) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
});

// store.registerModule('user_module', userModule);

// define own `useStore` composition function with integrated key
export function useStore() {
  return baseUseStore(key);
}
