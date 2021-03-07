import { mount } from '@vue/test-utils';
import About from '../../src/pages/About.vue';
import { VueRouterMock } from 'vue-router-mock';

describe('About', () => {
  it("has a button to navigate to the 'home' route", async () => {
    const w = mount(About);
    const button = w.find('button');
    expect(button.text()).toBe('Go to HOME');
    await w.find('button').trigger('click');
    expect(w.router.push).toHaveBeenCalled();
    expect(w.router.push).toHaveBeenCalledWith('/');
  });
});
