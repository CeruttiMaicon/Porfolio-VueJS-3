<template>
  <div>
    <SideBar></SideBar>
    <custom-footer />
  </div>
</template>

<script>
import SideBar from "../components/nav-bar/SideBar.vue";
import CustomFooter from "../components/footer/CustomFooter.vue";

export default {
  components: {
    SideBar,
    CustomFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
