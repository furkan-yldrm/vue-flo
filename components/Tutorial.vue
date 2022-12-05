<!-- Please remove this file from your project -->
<template>
    
  <div class="ana">
      <button  class="buton1">
          <br><br><br><br><br><br><br><br>
          <button class="buton1buton">
              SEPETE EKLE
          </button>
      </button>
      <button  class="buton2">
          <br><br><br><br><br><br><br><br>
          <button class="buton2buton">
              SEPETE EKLE
          </button>
      </button>
      <button  class="buton3">
          <br><br><br><br><br><br><br><br>
          <button class="buton3buton">
              SEPETE EKLE
          </button>
      </button>
      <button class="buton4">
          <br><br><br><br><br><br><br><br>
          <button class="buton4buton">
              SEPETE EKLE
          </button>
      </button>

  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
}
</script>

<style>
.ana{
    background-color: white;
    margin: auto;
    padding: 8rem;
}

h1 {
  text-align: center;
}

.ana .buton1 {
    height: 350px;
    width: 250px;
    margin-right: 40px;
    background-image: url("./assets/kahhve.PNG");
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    text-align: center;
    position: relative;
    border:none
}

.ana .buton2 {
    height: 350px;
    width: 250px;
    margin-right: 40px;
    background-image: url("./assets/filtrekahhve.PNG");
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
     text-align: center;
     position: relative;
     border:none
}

.ana .buton3 {
    height: 350px;
    width: 250px;
    margin-right: 40px;
    background-image: url("./assets/nokafe.PNG");
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    border:none;
     text-align: center;
     position: relative;
}

.ana .buton4 {
    height: 350px;
    width: 250px;
    border:none;
    margin-right: 40px;
    background-image: url("./assets/cokkav.PNG");
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    text-align: center;
    position: relative;
}

.ana .buton1 .buton1buton {
    border: 2px solid #005e5c;
    height: 50px;
    width: 150px;
    background-color: white;
    color: #005e5c;
    font-weight: bolder;
    visibility: hidden;
    margin-top: 260px;
}

.ana .buton1:hover .buton1buton {
    visibility: visible;
    cursor: pointer;
}

.ana .buton2 .buton2buton {
    border: 2px solid #005e5c;
    height: 50px;
    width: 150px;
    background-color: white;
    color: #005e5c;
    font-weight: bolder;
    visibility: hidden;
    margin-top: 260px;
}

.ana .buton2:hover .buton2buton {
    visibility: visible;
    cursor: pointer;
}

.ana .buton3 .buton3buton {
    border: 2px solid #005e5c;
    margin-top: 260px;
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
    margin-top: 260px;
    background-color: white;
    color: #005e5c;
    font-weight: bolder;
    visibility: hidden;
}

.ana .buton4:hover .buton4buton {
    visibility: visible;
    cursor: pointer;
}

.ana .buton1 .buton1buton:hover {
    background-color: #005e5c;
    margin-top: 260px;
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


</style>
