<script setup>
import HeaderNav from "./components/HeaderNav.vue";
import MobileNav from "./components/MobileNav.vue";
import Footer from "./components/Footer.vue";

components: {
  HeaderNav, Footer, MobileNav;
}
</script>

<template>
  <div>
    <HeaderNav class="desktop" />
    <MobileNav class="mobile" />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped>
.card {
  background: #ffffff;
  border: 1px solid #f6fbfd;
  box-shadow: 0px 20px 50px rgba(198, 217, 225, 0.3);
  border-radius: 5px;
}
ul li:before {
  content: "✓";
  font-size: 30px;
}
.text {
  font-family: "Poppins", sans-serif;
}
.desktop {
  display: block;
}
.mobile {
  display: none;
}
@media (max-width: 600px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
