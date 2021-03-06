import { RootState } from './index';
import { Module } from 'vuex';

interface UserState {
  username: string;
}

const userModule: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    username: 'Marc',
  },
  getters: {
    getUsername(state) {
      return state.username;
    },
  },
  mutations: {
    setUsername(state, newUsername: string) {
      console.log({ newUsername });

      state.username = newUsername;
    },
  },
  actions: {
    setUsername({ commit }, newUsername: string) {
      commit('setUsername', newUsername);
    },
  },
};

export default userModule;
