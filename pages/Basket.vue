<template>
<div>


    <Uyari />
    <UstKisim />
    <h1>SEPETINIZDE ÜRÜN BULUNMAMAKTADIR</h1>
    <button @click="ToHomePage">Anasayfaya Dön</button>

</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods: {
        ToHomePage () {
            this.$router.push({path:'/GirisYap'})
        }
    },
})
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

h1 {
    justify-content: center;
    margin-top: 100px;
    text-align: center;
    font-family: 'Gotham';
    src: local('Gotham'),
    url(../assets/Gotham-Font/GothamMedium.ttf) format('truetype');
}

button {

  justify-content: center;
  box-sizing: border-box;
  font-size: 15px;
  outline: none;
  border: 2px solid #000;
margin-left: 500px;
  margin-bottom: -15px;
  background: #055037cb;
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-weight: 600;
  height: 80px;
  width: 350px;
  margin-top: 90px;
}

</style>