import { mount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld.vue';

function factory() {
  return mount(HelloWorld, {
    props: { msg: 'MYMESAGE' },
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
