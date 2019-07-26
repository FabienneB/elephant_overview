<template>
  <div>
    <drop-down
      v-bind:titles='titles'
      v-bind:values='values'>
    </drop-down>
    <b-tabs>
      <tab
        :title="titles.first"
        :tabClass="values.first">
      </tab>
      <tab 
        :title="titles.second"
        :tabClass="values.second">
      </tab>
      <tab 
        :title="titles.third"
        :tabClass="values.third">
      </tab>
    </b-tabs>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueAxios from 'vue-axios';
  import Tab from './tab';
  import DropDown from './drop-down';
 
  export default {
    data() {
      return {
        showAlert: false,
        alertMessage: null,
        isActive: true,
        values: { first: 'tab1', second: 'tab2', third: 'tab3' },
        titles: { first: 'Tab 1', second: 'Tab 2', third: 'Tab 3' },
      };
    },
    components: {
      Tab, 
      DropDown
    }
  };

</script>