<template>
  <div class="hello">   
    <button class="bir" >
           <span class="bir1"></span>
    </button>
    <button class="iki" >
           <span class="iki1"> </span>
    </button>
    <button class="üç" >
           <span class="üç1"></span>
    </button>
    <button class="dört" >
           <span class="dört1"></span>
    </button>
    <button class="beş" >
           <span class="beş1"></span>
    </button>   
  </div> 
</template>

<script>

export default {
  name:'Liste',
  

}
</script>

<style scoped>

.hello {
  padding: 20px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  }

  .hello .bir {
  cursor: pointer;
  height: 380px;
  width: 260px;
  margin-top: 15px;
  background-image: url("../assets/liste2.png") ;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-size: 20px;
  border: 4px solid #f9f9f9;
  font-family: Gotham-Black;
  justify-content: center;
  align-items: center;
}

.hello .bir:hover {
    border: 10px solid #f9f9f9;
}

.hello .iki:hover {
    border: 10px solid #f9f9f9;
}

.hello .üç:hover {
    border: 10px solid #f9f9f9;
}

.hello .dört:hover {
    border: 10px solid #f9f9f9;
}

.hello .beş:hover {
    border: 10px solid #f9f9f9;
}
.hello .iki {
  cursor: pointer;
  height: 380px;
  width: 260px;
  margin-top: 15px;
  background-image: url("../assets/liste3.png") ;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-size: 20px;
  border: 4px solid #f9f9f9;
  font-family: Gotham-Black;
}

.hello .üç {
  cursor: pointer;
  height: 380px;
  width: 260px;
  margin-top: 15px;
  background-image: url("../assets/akses.png") ;
  background-position: center;
  background-size: cover;
   background-repeat: no-repeat;
  color: white;
  font-size: 20px;
  font-family: Gotham-Black;
  border: 4px solid #f9f9f9;
}

.hello .dört {
  cursor: pointer;
  font-family: Gotham-Black;
  height: 380px;
  width: 260px;
  margin-top: 15px;
  background-image: url("../assets/liste4.png") ;
  background-position: center;
  background-size: cover;
   background-repeat: no-repeat;
  color: white;
  font-size: 20px;
  border: 4px solid #f9f9f9;
}

.hello .beş {
  cursor: pointer;
  height: 380px;
  font-family: Gotham-Black;
  width: 260px;
  margin-top: 15px;
  background-image: url("../assets/liste2.png") ;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-size: 20px;
  border: 4px solid #f9f9f9;
}

</style>