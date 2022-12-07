<template>
  <div class="notification">
    <a href="#"
      ><img src="https://img-kahvedunyasi.mncdn.com/kahvedunyasi/static//img/icons/cargo-car.png" alt="" /><span
        >250 tl ve üzeri alısverislerinizde kargo bedava</span
      ></a
    >
  </div>
</template>

<script>
export default {
  name: 'Uyari',
}
</script>

<style scoped>
.notification {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 4rem;
  top: 0;
  background-color: #f7f8f9;
}

a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: #005e5c;
  font-family: Gotham Bold;
  font-size: 1.3rem;
  text-transform: uppercase;
}

a span {
  margin-left: 2rem;
}

a img {
  width: 2.5rem;
  height: 2.5rem;
}
</style>
