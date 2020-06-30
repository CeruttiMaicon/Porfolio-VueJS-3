<template>
  <div class="container">
    <img class="img rounded-circle" alt="Vue logo" src="../assets/ProfilePhoto.png" />
    <h1>Maicon Cerutti</h1>
    <h2 class="mb-5">Minhas competências, anotações e documentações :)</h2>
    <router-link class="btn btn-primary btn-lg" to="/documentation">Documentações</router-link>
    <hr class="my-5" />
    <posts-index></posts-index>
    <custom-footer />
  </div>
</template>

<script>
import PostsIndex from "../components/posts/PostsIndex.vue";
import CustomFooter from "../components/footer/CustomFooter.vue";

export default {
  components: {
    PostsIndex,
    CustomFooter
  }
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
</style>
