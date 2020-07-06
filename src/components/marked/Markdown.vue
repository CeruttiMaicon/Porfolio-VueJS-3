<template>
  <div class="row justify-content-center">
    <div class="col-10 text-left mt-4">
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import axios from "axios";
export default {
  mounted() {
    axios.get("/markdown/teste.md").then(({ data }) => {
      this.markdown = data;
    });
  },
  name: "Markdown",
  data() {
    return {
      markdown: "# teste \n ## Mais um teste \n ```php lalala mana``` ",
    };
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.markdown);
    },
  },
};
</script>

<style>
code {
  position: relative;
  background-color: #282c34;
  border-radius: 6px;
  position: relative;
  z-index: 1;
  padding: 3px;
  color: white !important;
}
p {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
