<template>
  <div class="body">
    <div class="about">
      <h2>Kayıt Ol</h2>
      <form>
        <div class="pc">
          <input type="text" required="" placeholder="E-Posta" v-model="userData.email"/>
        </div>
        <div class="pc">
          <input type="password" required="" placeholder="Parola" v-model="userData.password"/>
        </div>
       
        <div class="pc">
          <router-link to="GirisYap"><button @click="registerToPage(userData)" type="button">KAYIT OL</button></router-link>
        </div>
      </form>
    </div>
    
  </div>
</template>

<script>
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/index";
export default {
    data() {
        return {
            userData: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        async registerToPage(userData) {
            const data = {
                ...userData
            }
            const newCityRef = doc(collection(db, "users"));
            // later...
            await setDoc(newCityRef, data);
            this.$store.commit('setUserData', data)
            
            setTimeout(() => {
                this.$router.push({path:'/GirisYap'})
            }, 1500);
        }
    }
};

</script>

<style >

.body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  background-image: url("https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static/img/other/loginBg-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  font-family: FontAwesome,Gotham-Book,Gotham-Medium,Gotham-Bold,Gotham-Black,Gotham,Helvetica Neue,Helvetica,Arial,"sans-serif";
}
.about {
  text-align: center;
  width: 472px;
  height: 600px;
  box-sizing: border-box;
  padding: 160px;
  background: #ffffff;
}
.about h2 {
  margin: -120px -200px 40px;
  margin-right: 38px;
  padding: 0;
  font-size: 30px;
}
.about .pc {
  position: relative;
  width: 100%;
  margin-bottom: 25px;
}
.about .pc button  {
  height: 80px;
  width: 230%;
  padding: 0 15px;
  box-sizing: border-box;
  font-size: 15px;
  outline: none;
  border: 1px solid #000;
  margin-left: -100px;
  margin-bottom: -15px;
}
.about .pc span {
  position: absolute;
  top: 12px;
  left: 20px;
  padding: 0;
  transition: 0.5%;
  pointer-events: none;
  background: #ffffff;
  text-transform: uppercase;
}
.about .pc button:focus ~ span,
.about .pc button:valid ~ span {
  top: -12px;
  left: 12px;
  font-size: 12px;
  padding: 2px 4px;
  border: 1px solid #000;
  background: #fff00f;
}
.about .pc button {
  background: #055037cb;
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-weight: 600;
  height: 80px;
  width: 350px;
  margin-left: -100px;
  margin-top: 90px;
}
.about .pc button:hover {
  background: #0550379f;
}
.asd {
  font-size: 15px;
  margin-top: 40px;
  margin-left: -40px;
}

</style>


