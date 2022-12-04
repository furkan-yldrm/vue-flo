<template>
  <div>
  <UstKisim />
  <Tutorial />
  </div>
</template>

<script>
import UstKisim from '../components/UstKisim.vue'
import Tutorial from '../components/Tutorial.vue'

export default {
  name: 'IndexPage',
  components: {
    Tutorial,
    UstKisim,

  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: 'Gotham';
  src: local('Gotham'),
    url(../assets/Gotham-Font/GothamMedium.ttf) format('truetype');
}

@font-face {
  font-family: 'Gotham Bold';
  src: local('Gotham Bold'),
    url(../assets/Gotham-Font/GothamBold.ttf) format('truetype');
}

html {
  font-size: 62.5%;
  font-family: Gotham;
}

body {
  box-sizing: border-box;
}
</style>
