<template>
<nav class="main-nav">
    <ul class="menu">
        <li class="nav-list-item">
            <a href="#"><span class="main-span">HEDİYE GÖNDER</span></a>
        </li>
        <li class="nav-list-item">
             <a href="#"><span class="main-span">DONDURMA</span></a>
        </li>
        <li class="nav-list-item">
            <a href="#"><span class="main-span">KAHVE</span></a>
            <ul>
                <li><a href="#"><img src="" alt=""><span>Türk Kahvesi</span></a>
                </li>
                <li><a href="#"><img src="" alt=""><span>Türk Kahvesi</span></a>
                </li>
                <li><a href="#"><img src="" alt=""><span>Türk Kahvesi</span></a>
                </li>
            </ul>
        </li>
        <li class="nav-list-item">
            <a href="#"><span class="main-span">ÇİKOLATA</span></a>
        </li>
        <li class="nav-list-item">
            <a href="#"><span class="main-span">AKSESUAR</span></a>
        </li>
        <li class="nav-list-item">
            <a href="#"><span class="main-span">PASTACILIK</span></a>
        </li>
        <li class="nav-list-item">
            <a href="#"><span class="main-span">KAMPANYALAR</span></a>
        </li>
        <li class="nav-list-item">
            <a href="#"><span class="main-span">HAKKIMIZDA</span></a>
        </li>
    </ul>
</nav>
<!--ul.menu >li:hover ul {  dropdown menu açma işlemi
    display: block;
} -->
</template>

<style scoped>
.main-nav {
  margin-top: 5rem;
  font-size: 1.4rem;
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  text-decoration: none;
  padding: 0 6rem;
  flex-wrap: wrap;
  margin-left: 4px;
}

.main-span {
  transition: all 0.2s;
}

.nav-list-item a {
  color: #000000;
  text-decoration: none;
}
.nav-list-item a:hover span {
  color: #6c0c33;
  border-bottom: 0.4rem solid #6c0c33;
}

ul.menu ul {
    background-color: #6c0c33;
    width: 200px;
    visibility: hidden;
}

ul.menu ul li a {
    display: block;
    padding: 7px 12px;
}

</style>