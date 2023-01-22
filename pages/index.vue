<template>
  <div>
    <Uyari />
    <UstKisim />
    <Navigation />
    <Listele />
    <Tutorial />
    <Uclusira />
    <Giris />
    <Footer /> 
    <FooterEn />
    
  </div>
</template>

<script>
import UstKisim from '../components/UstKisim.vue'
import Tutorial from './tutorials.vue'
import Navigation from '../components/Navigation.vue'
import Uyari from '../components/Uyari.vue'
import deneme from '../components/deneme.vue'
import Giris from '../components/Giris.vue'
import Listele from '../components/Listele.vue'
import Footer from '../components/Footer.vue'
import FooterEn from '../components/FooterEn.vue'
import Uclusira from '../components/Uclusira.vue'

export default {
  name: 'IndexPage',
  components: {
    Uyari,
    Tutorial,
    UstKisim,
    Navigation,
    deneme,
    Giris,
    Listele,
    Footer,
    FooterEn,
    Uclusira,
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
