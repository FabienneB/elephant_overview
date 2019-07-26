<template>
  <b-tab :title='title' :class='tabClass'>
    <div class='tab-content'>
      <div class='image-cropper'>
        <img class='avatar' :src=imageLink />
      </div>
      <div class='elephant-data'>
        <a :href=this.wikiLink target='_blank' class='styled-link'>
          <h2>{{this.name}}</h2>
        </a>
        <p>{{this.affiliation}}</p>
      </div>
    </div>
  </b-tab>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';

  export default {
    props: ['title', 'tabClass'],
    data() {
      return {
        imageLink: null, 
        wikiLink: null,
        name: null,
        affiliation: null,
      };
    },
    created() {
      this.setElephant();
    },
    methods: {
      setElephant() {
        // To fetch data from an api with issues with its CORS header
        // - missing or contains multiple values - you can use cors-anywhere
        // link : https://github.com/Rob--W/cors-anywhere
        // Its a NodeJS proxy which adds CORS headers to the proxied request
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        axios.get(proxyUrl + 'https://elephant-api.herokuapp.com/elephants/random').then(response => {
          var elephantData = response.data[0];
          this.name = elephantData.name;
          this.affiliation = elephantData.affiliation;
          this.imageLink = elephantData.image;
          this.wikiLink = elephantData.wikilink;
        }).catch((error) => {
          this.$emit('error', error);
          console.log(error);
        });
      }

    },
  };

</script>