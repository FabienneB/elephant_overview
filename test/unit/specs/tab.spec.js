import Vue from 'vue';
import Tab from '@/components/tab';

describe('tab.vue', () => {
  it('Fetch data from elephant-api', () => {
    const Constructor = Vue.extend(Tab);
    const vm = new Constructor().$mount();
    expect(vm.affiliation).to.equal(null);
    expect(vm.name).to.equal(null);
    expect(vm.imageLink).to.equal(null);
    expect(vm.wikiLink).to.equal(null);
    // Dirty code : issue with promise 
    // To change !  Link to help : https://mochajs.org/
    setTimeout(function() {
      vm.setElephant();
      expect(vm.created).to.be.a('function');
      expect(vm.imageLink).to.be.a('string');
      expect(vm.wikiLink).to.be.a('string');
      expect(vm.name).to.be.a('string');
      expect(vm.affiliation).to.be.a('string');
    }, 1000);
  });

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Tab);
    const vm = new Constructor().$mount();
    assert.notEqual(vm.$el.querySelector('.styled-link h2').textContent, null);
    expect(vm.$el.querySelector('.styled-link h2').textContent)
      .to.be.a('string');
    assert.notEqual(vm.$el.querySelector('.elephant-data p').textContent, null);
    expect(vm.$el.querySelector('.elephant-data p').textContent)
      .to.be.a('string');
  });
});
