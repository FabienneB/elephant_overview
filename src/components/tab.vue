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
        // This API enables cross-origin requests to anywhere
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        axios.get(proxyUrl + 'https://elephant-api.herokuapp.com/elephants/random').then(response => {
          const elephantData = response.data[0];
          console.log(elephantData);
          this.name = elephantData.name;
          this.affiliation = elephantData.affiliation;
          this.imageLink = elephantData.image;
          this.wikiLink = elephantData.wikilink;
        }).catch((error) => {
          console.log(error);
        });
      }

    },
  };

</script>