<template>
  <div class="body">
    <div class="about">
      <h2>Giriş Yap</h2>
      <form>
        <div class="pc">
          <input type="text" required="" name="" placeholder="E-Posta" />
        </div>
        <div class="pc">
          <input type="password" required="" name="" placeholder="Parola" />
        </div>
        <div> <a
          href="#"
          style="
            font-size: 13px;
            margin-left: -210px;
            margin-right: 0px;
            color: #00aeff;
            margin-bottom: 30px;
            margin-top:-50px;
          "
          >Parolanizi mi Unuttunuz?</a></div>
       
          <img alt="Vue logo" src="../assets/denemedeneme.png" style="margin-bottom:-85px ; margin-left:-150px ; margin-right:-80px; margin-top:-10px">     
        <div class="pc">
          <input type="submit" value="GİRİŞ YAP" />
        </div>
      </form>
       
      <p class="asd">
        Hesabiniz yok mu? <a style="color: ^00aeff" href="#">Kayit Ol</a>
      </p>
    </div>
    
  </div>
</template>

<script>
export default {};
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
.about .pc input {
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
.about .pc input:focus ~ span,
.about .pc input:valid ~ span {
  top: -12px;
  left: 12px;
  font-size: 12px;
  padding: 2px 4px;
  border: 1px solid #000;
  background: #fff00f;
}
.about .pc input[type="submit"] {
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
.about .pc input[type="submit"]:hover {
  background: #0550379f;
}
.asd {
  font-size: 15px;
  margin-top: 40px;
  margin-left: -40px;
}

</style>


