import Vue from 'vue';
import DropDown from '@/components/drop-down';

describe('drop-down.vue', () => {
  it('Data from component must be correct', () => {
    const Constructor = Vue.extend(DropDown);
    const vm = new Constructor().$mount();
    expect(vm.selectedTab).to.equal('tab1');
  });

  it('should render correct contents', () => {
    const Constructor = Vue.extend(DropDown);
    const vm = new Constructor({
      propsData: { 
                    values: { first: 'tab1', second: 'tab2', third: 'tab3' }, 
                    titles: { first: 'Tab 1', second: 'Tab 2', third: 'Tab 3'} 
                  }
    }).$mount();
    expect(vm.$el.querySelector('.mobile-dropdown')).not.to.be.visible;
    assert.equal(vm.$el.querySelector('.custom-dropdown').textContent, 'Tab 1 Tab 2 Tab 3');
  });
});