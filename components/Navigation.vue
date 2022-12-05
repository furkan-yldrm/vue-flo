<template>
  <nav class="main-nav">
    <ul class="nav-list">
      <li class="nav-list-item">
        <a href="#"><img src="" alt="" /><span class="hediye">Hediye Gönder</span></a>
      </li>
      <li class="nav-list-item">
        <a href="#"><span>Dondurma</span></a>
      </li>
      <li class="nav-list-item">
        <a href="#"><span>Kahve</span></a>
      </li>
      <li class="nav-list-item">
        <a href="#"><span>Çikolata</span></a>
      </li>
      <li class="nav-list-item">
        <a href="#"><span>Aksesuar</span></a>
      </li>
      <li class="nav-list-item">
        <a href="#"><span>Pastacılık</span></a>
      </li>
      <li class="nav-list-item">
        <a href="#"><span>Kampanyalar</span></a>
      </li>
      <li class="nav-list-item">
        <a href="#"><span>Hakkımızda</span></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped>
.main-nav {
  margin-top: 5rem;
  font-size: 1.4rem;
}
.nav-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0 6rem;
  flex-wrap: wrap;
  text-transform: uppercase;
  margin-left: 4px;
}

span {
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

/* span {
  font-size: 1.6rem;
} */
</style>
