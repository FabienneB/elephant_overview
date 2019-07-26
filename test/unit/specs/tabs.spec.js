import Vue from 'vue';
import Tabs from '@/components/tabs';

describe('tabs.vue', () => {
  it('Data from component must be correct', () => {
    const Constructor = Vue.extend(Tabs);
    const vm = new Constructor().$mount();
    expect(vm.showAlert).to.equal(false);
    expect(vm.values.first).to.equal('tab1');
    expect(vm.values.second).to.equal('tab2');
    expect(vm.values.third).to.equal('tab3');
    expect(vm.titles.first).to.equal('Tab 1');
    expect(vm.titles.second).to.equal('Tab 2');
    expect(vm.titles.third).to.equal('Tab 3');
  });

  it('displayAlert function must set showAlert to true and change alertMessage', () => {
    const Constructor = Vue.extend(Tabs);
    const vm = new Constructor().$mount();
    const error = '404 error'
    vm.displayAlert(error);
    expect(vm.showAlert).to.equal(true);
    expect(vm.alertMessage).to.equal("There is an error 404 error");
  });
});
