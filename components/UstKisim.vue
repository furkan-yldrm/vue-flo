<template>
  <div class="header">
    <form class="search" action="#">
      <div class="search-items">
        <span>Arama Yap</span>
        <img src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/icon-search.svg" alt="Search" />
      </div>
    </form>
    <div class="logo">
      <a href="https://www.kahvedunyasi.com">
        <img class="logo-icon" src="../assets/logo.svg" alt="Logo" />
      </a>
    </div>
    <nav class="header-nav">
      <ul class="list">
        <li class="item">
          <a href="#"
            ><img src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/icon-gift-red.svg" alt="" /><span
              >Kurumsal Hediyeler</span
            ></a
          >
        </li>
        <li class="item">
          <a href="GirisYap"
            ><img src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/icon-user.svg" alt="" /><span
              >Giris</span
            ></a>
        </li>
        <li class="item">
          <a href="#"
            ><img src="	https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/icon-basket.svg" alt="" /><span>Sepet</span></a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'UstKisim',
  
}
</script>

<style scoped>
.header {
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  color: #6c0c33;
  padding: 0 6rem;
}

.search {
  flex: 1;
}

.header-nav {
  font-size: 1.4rem;
  flex: 1;
}

.logo {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.logo a img {
  background-color: transparent;
  color: transparent;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  list-style: none;
}


.item a {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.item a img {
  width: 2rem;
  height: 2rem;
}

.item > * {
  color: red;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
}

.item:not(:last-child) {
  margin-right: 3rem;
}

.item a img {
  margin-right: 0.5rem;
}



.search {
  display: flex;
  width: 38rem;
  height: 5rem;
  padding: 0 1.5rem;
  border: 2px solid rgb(213, 210, 205);
  overflow: hidden;
  border-radius: 25px;
  cursor: pointer;
}

.search-items {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
}

.search-items span {
  font-size: 1.6rem;
  display: inline-block;
  flex: 1;
}

.search-items img {
  width: 2.5rem;
  height: 2.5rem;
}
</style>
