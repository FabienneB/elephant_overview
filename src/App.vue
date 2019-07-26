<template>
  <div class='container'>
    <b-row>
      <b-col md='8' offset-md='2' sd='12' cols='12' class='tabs-container'>
        <tabs></tabs>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Tabs from './components/tabs'; 
import Vue from 'vue';

export default {
  name: 'App',
  components: {
    Tabs, 
  }
}
</script>