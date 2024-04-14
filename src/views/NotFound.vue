<template>
  <article class="active">
    <header>
      <h2 class="h2 article-titl">Page Not Found</h2>
    </header>

    <section class="about-text mt-5">
      <h4 class="h3">404</h4>
      <p>
        The Page you are looking for doesn't exist or an other error occured. 😞
      </p>
      <button class="form-btn ms-0" @click="router.back()">Go back</button>
    </section>
  </article>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
