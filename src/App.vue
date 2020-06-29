<template>
  <div id="app">
    <nav-bar-router />
  </div>
</template>

<script>
import NavBarRouter from "./components/nav-bar/NavBarRouter.vue";

export default {
  name: "App",
  components: {
    NavBarRouter
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.img {
  max-width: 100%;
  max-height: 280px;
  display: block;
  margin: 3rem auto 1.5rem;
}
</style>
