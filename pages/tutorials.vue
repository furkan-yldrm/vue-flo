<!-- Please remove this file from your project -->
<template>
  <div class="kahvelist">
    <div
      class="kahvelist-item"
      v-for="kahve in kahveler"
      :key="kahve._id"
      @click="$router.push(`/kahve/${kahve._id}`)"
    >
      <img v-bind:src="kahve.thumbnail" alt="Kahve Fotoğrafı" />
      <p>{{ kahve.name }}</p>
      <p>{{ kahve.price }}TL</p>
      <button class="ana">Sepete Ekle</button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'NuxtTutorial',

  data() {
    return {
      kahveler: null,
    }
  },

  computed: {
    async getData() {
      const response = await fetch('http://localhost:8000/kahve')
      const finalResponse = await response.json()
      this.kahveler = finalResponse
    },
  },
  mounted() {
    this.getData
  },
}
</script>

<style scoped>
.kahvelist {
  display: flex;
  gap: 35px;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
}

.kahvelist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  row-gap: 5px;
}

.kahvelist-item > * {
  font-size: 15px;
}

.ana {
  margin-top: 5px;
  border: 2px solid #005e5c;
  height: 50px;
  width: 150px;
  color: #005e5c;
  font-weight: bolder;
  opacity: 0;
  transition: hover 0.5s;
  background: #fff;
}

.kahvelist-item:hover .ana {
  opacity: 1;
  cursor: pointer;
}

/* .ana {
  background-color: white;
  margin: auto;
  padding: 8rem;
}

h1 {
  text-align: center;
  text-decoration: underline;
} */
/* 
.ana .buton1 {

  position: relative;
  border: none;
}

.ana .buton2 {
  height: 350px;
  width: 250px;
  margin-right: 40px;
  background-image: url('./assets/filtrekahhve.PNG');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  text-align: center;
  position: relative;
  border: none;
}

.ana .buton3 {
  height: 350px;
  width: 250px;
  margin-right: 40px;
  background-image: url('./assets/nokafe.PNG');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
  text-align: center;
  position: relative;
}

.ana .buton4 {
  height: 350px;
  width: 250px;
  border: none;
  margin-right: 40px;
  background-image: url('./assets/cokkav.PNG');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  text-align: center;
  position: relative;
}

.ana .buton5 {
  height: 350px;
  width: 250px;
  margin-right: 40px;
  background-image: url('./assets/salep.PNG');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  text-align: center;
  position: relative;
  border: none;
  margin-top: 100px;
}

.ana .buton6 {
  height: 350px;
  width: 250px;
  margin-right: 40px;
  background-image: url('./assets/tambol.PNG');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  text-align: center;
  position: relative;
  border: none;
}

.ana .buton7 {
  height: 350px;
  width: 250px;
  margin-right: 40px;
  background-image: url('./assets/kasik.PNG');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  text-align: center;
  position: relative;
  border: none;
}

.ana .buton8 {
  height: 350px;
  width: 250px;
  margin-right: 40px;
  background-image: url('./assets/elyap.PNG');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  text-align: center;
  position: relative;
  border: none;
}

.ana .buton2 .buton2buton {
  border: 2px solid #005e5c;
  height: 50px;
  width: 150px;
  background-color: white;
  color: #005e5c;
  font-weight: bolder;
  visibility: hidden;
  margin-top: 230px;
}

.ana .buton2:hover .buton2buton {
  visibility: visible;
  cursor: pointer;
}

.ana .buton3 .buton3buton {
  border: 2px solid #005e5c;
  margin-top: 230px;
  height: 50px;
  width: 150px;
  background-color: white;
  color: #005e5c;
  font-weight: bolder;
  visibility: hidden;
}

.ana .buton3:hover .buton3buton {
  visibility: visible;
  cursor: pointer;
}

.ana .buton4 .buton4buton {
  border: 2px solid #005e5c;
  height: 50px;
  width: 150px;
  margin-top: 230px;
  background-color: white;
  color: #005e5c;
  font-weight: bolder;
  visibility: hidden;
}

.ana .buton4:hover .buton4buton {
  visibility: visible;
  cursor: pointer;
}

.ana .buton5 .buton5buton {
  border: 2px solid #005e5c;
  height: 50px;
  width: 150px;
  background-color: white;
  color: #005e5c;
  font-weight: bolder;
  visibility: hidden;
  margin-top: 230px;
}

.ana .buton5:hover .buton5buton {
  visibility: visible;
  cursor: pointer;
}

.ana .buton6 .buton6buton {
  border: 2px solid #005e5c;
  height: 50px;
  width: 150px;
  background-color: white;
  color: #005e5c;
  font-weight: bolder;
  visibility: hidden;
  margin-top: 230px;
}

.ana .buton6:hover .buton6buton {
  visibility: visible;
  cursor: pointer;
}

.ana .buton7 .buton7buton {
  border: 2px solid #005e5c;
  height: 50px;
  width: 150px;
  background-color: white;
  color: #005e5c;
  font-weight: bolder;
  visibility: hidden;
  margin-top: 230px;
}

.ana .buton7:hover .buton7buton {
  visibility: visible;
  cursor: pointer;
}

.ana .buton8 .buton8buton {
  border: 2px solid #005e5c;
  height: 50px;
  width: 150px;
  background-color: white;
  color: #005e5c;
  font-weight: bolder;
  visibility: hidden;
  margin-top: 230px;
}

.ana .buton8:hover .buton8buton {
  visibility: visible;
  cursor: pointer;
}

.ana .buton1 .buton1buton:hover {
  background-color: #005e5c;
  color: white;
}

.ana .buton2 .buton2buton:hover {
  background-color: #005e5c;
  color: white;
}

.ana .buton3 .buton3buton:hover {
  background-color: #005e5c;
  color: white;
}

.ana .buton4 .buton4buton:hover {
  background-color: #005e5c;
  color: white;
}

.ana .buton5 .buton5buton:hover {
  background-color: #005e5c;
  color: white;
}

.ana .buton6 .buton6buton:hover {
  background-color: #005e5c;
  color: white;
}

.ana .buton7 .buton7buton:hover {
  background-color: #005e5c;
  color: white;
}

.ana .buton8 .buton8buton:hover {
  background-color: #005e5c;
  color: white;
} */
</style>
