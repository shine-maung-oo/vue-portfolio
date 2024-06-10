<template>
  <article class="portfolio active">
    <header>
      <h2 class="h2 article-title">Projects</h2>
    </header>

    <section class="projects">
      
      <ul class="project-list">
        <li
          class="project-item active"
          v-for="(project,index) in projects"
          :key="index"
        >
      
          <a :href="project.url" target="_blank">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img :src="project.image" :alt="project.title" loading="lazy" />
            </figure>

            <h3 class="project-title">{{ project.title }}</h3>
            <span>{{ project.languages }}</span>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { onMounted } from "vue";
import projects from "../api/project.js";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style>
</style>