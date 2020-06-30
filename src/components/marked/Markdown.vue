<template>
  <div class="row justify-content-center">
    <div class="col-10 text-left mt-4">
      <div v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import { computed, reactive } from "vue";

export default {
  data() {
    return {
      markdown: `# teste \n ## Mais um teste`,
    };
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.markdown);
    },
  },
  name: "Markdown",
};
</script>
