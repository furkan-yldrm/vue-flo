<template>
  <div>    
    <Uyari />
    <UstKisim />
    <Navigation />
    <Tutorial />
    <Liste />
    <Carousel />
    <Giris />

  </div>
</template>

<script>
import UstKisim from '../components/UstKisim.vue'
import Tutorial from '../components/Tutorial.vue'
import Navigation from '../components/Navigation.vue'
import Uyari from '../components/Uyari.vue'
import Carousel from '../components/Carousel.vue'
import deneme from '../components/deneme.vue'
import Liste from '../components/Liste.vue'
import Sitealt from '../components/Sitealt.vue'
import Giris from '../components/Giris.vue'


export default {
  name: 'IndexPage',
  components: {
    Uyari,
    Tutorial,
    UstKisim,
    Navigation,
    Carousel,
    deneme,
    Liste,
    Sitealt,
    Giris,
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
