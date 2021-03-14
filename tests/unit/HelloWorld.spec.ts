import { key, RootState } from './../../src/store/index';
import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import HelloWorld from '../../src/components/HelloWorld.vue';
import userModule from '../../src/store/modules/user.module';

const createVuexStore = () => {
  return createStore<RootState>({
    modules: {
      userModule,
    },
    state: { count: 10 },
  });
};

const store = createVuexStore();
store.dispatch = jest.fn();

function factory() {
  return mount(HelloWorld, {
    props: { msg: 'TEST MESSAAGE' },
    global: {
      provide: {
        [key as symbol]: store,
      },
    },
  });
}

describe('HelloWorld', () => {
  it('displays the msg prop', () => {
    const w = factory();
    expect(w.props().msg).toBe('TEST MESSAAGE');
    expect(w.find('label').text()).toBe(
      'This is a section with my MSG: TEST MESSAAGE'
    );
  });

  test('usernames', () => {
    const w = factory();
    expect(w.find('.username-local').text()).toBe('User: Marc');
    expect(w.find('.username-store').text()).toBe('Store User: Marc');
  });

  test('counts', () => {
    const w = factory();
    expect(w.find('.count-local').text()).toBe('count 0');
    expect(w.find('.count-store').text()).toBe('storeCount 10');
  });

  test('actions', async () => {
    const w = factory();
    await w.find('.action-increment').trigger('click');
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith('increment');
  });

  test('local functions', async () => {
    const w = factory();
    await w.find('.local-increment').trigger('click');
    expect(w.vm.count).toBe(1);
  });
});
