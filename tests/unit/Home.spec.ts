import { mount } from '@vue/test-utils';
import Home from '../../src/pages/Home.vue';

describe('Home', () => {
  it('shows the HelloWorld component', () => {
    const w = mount(Home, { shallow: true });
    expect(w.findComponent({ name: 'HelloWorld' }).exists()).toBe(true);
  });
});
