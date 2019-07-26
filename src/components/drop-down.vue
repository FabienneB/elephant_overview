<template>
  <div class='mobile-dropdown'>
    <div class='header'></div>
    <i class="fas fa-caret-down"></i>
    <div class='selection-wrapper'>
      <select v-model='selectedTab' class='custom-dropdown' @change='changeTab'>
        <option :value='this.values.first'> <div class='test'>{{this.titles.first}}</div></option>
        <option :value='this.values.second'>{{this.titles.second}}</option>
        <option :value='this.values.third'>{{this.titles.third}}</option>
      </select>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';

  export default {
    props: ['titles', 'values'],
    data() {
      return {
        selectedTab: 'tab1',
      };
    },
    methods: {
      changeTab() {
        var tabs = document.querySelectorAll('.tab-pane');
        tabs.forEach(function(tab) {
          tab.classList.remove('active');
          tab.setAttribute('style', 'display:none;');
        });
        var tab = document.querySelector( `.${this.selectedTab}`);
        tab.classList.add('active');
        tab.setAttribute('style', 'display:block;');
      }

    },
  };

</script>