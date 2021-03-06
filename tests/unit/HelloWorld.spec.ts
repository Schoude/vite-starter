import { key } from '../../src/store';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import HelloWorld from '../../src/components/HelloWorld.vue';

const createVuexStore = () => {
  return createStore({
    state: { count: 0 },
  });
};

function factory() {
  // const $store = {
  //   state: {
  //     count: 25,
  //   },
  //   commit: jest.fn(),
  // };
  const store = createVuexStore();
  return mount(HelloWorld, {
    props: { msg: 'MYMESAGE' },
    global: {
      plugins: [store],
      // mocks: $store
    },
  });
}

describe('HelloWorld', () => {
  it('exists', () => {
    const w = factory();

    expect(w.props().msg).toBe('MYMESAGE');
  });
  test('username', () => {
    const w = factory();
    expect(w.text()).toContain('Marc');
  });
});
