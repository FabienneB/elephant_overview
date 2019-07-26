import Vue from 'vue';
import DropDown from '@/components/drop-down';

describe('drop-down.vue', () => {
  it('Data from component must be correct', () => {
    const Constructor = Vue.extend(DropDown);
    const vm = new Constructor().$mount();
    expect(vm.selectedTab).to.equal('tab1');
  });
});