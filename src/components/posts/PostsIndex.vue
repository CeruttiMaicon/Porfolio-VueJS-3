<template>
  <div class="container">
    <div class="row justify-content-center">
      <div
        class="col-12 col-sm-12 col-md-6 col-xl-4 card-deck"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="card mb-4">
          <div class="card-header">
            {{ post.title }}
          </div>
          <div class="card-body d-flex align-items-center">
            <p class="card-text">
              {{ post.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import posts from "../../posts/postsIndex.js";

export default {
  setup() {
    return { posts };
  },
};
</script>
