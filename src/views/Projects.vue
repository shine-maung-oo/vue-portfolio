<template>
  <article class="portfolio active">
    <header>
      <h2 class="h2 article-title">Projects</h2>
    </header>

    <section class="projects">
      <ul class="filter-list">
        <li class="filter-item">
          <button
            @click="selectCategory('All')"
            :class="{ active: selectedCategory === 'All' }"
          >
            All
          </button>
        </li>

        <li
          class="filter-item"
          v-for="category in categories"
          :key="category.id"
        >
          <button
            @click="selectCategory(category.id)"
            :class="{ active: selectedCategory === category.id }"
          >
            {{ category.name }}
          </button>
        </li>
      </ul>

      <div class="filter-select-box">
        <button class="filter-select" @click="toggleSelectList">
          <div class="select-value" v-show="selectedCategory == 'All'">
            {{ selectedCategory }}
          </div>
          <div
            class="select-value"
            v-for="category in categories"
            :key="category.id"
            v-show="category.id == selectedCategory"
          >
            {{ category.id == selectedCategory ? category.name : "" }}
          </div>

          <div class="select-icon">
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </button>

        <ul class="select-list" v-show="isSelectListOpen">
          <li class="select-item">
            <button
              @click="selectCategory('All')"
              :class="{ active: selectedCategory === 'All' }"
            >
              All
            </button>
          </li>

          <li
            class="select-item"
            v-for="category in categories"
            :key="category.id"
          >
            <button
              @click="selectCategory(category.id)"
              :class="{ active: selectedCategory === category.id }"
            >
              {{ category.name }}
            </button>
          </li>
        </ul>
      </div>

      <ul class="project-list">
        <li
          class="project-item active"
          v-for="project in filteredProjects"
          :key="project.id"
        >
          <a :href="project.url" target="_blank">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img :src="project.image" :alt="project.title" loading="lazy" />
            </figure>

            <h3 class="project-title">{{ project.title }}</h3>

            <div
              class="project-category"
              v-for="category in categories"
              :key="category.id"
            >
              <p v-if="project.category == category.id">
                {{ category.name }}
              </p>
            </div>

            <span>{{ project.languages }}</span>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { ref, computed } from "vue";
import projects from "../api/project.js";
import categories from "../api/category.js";

const selectedCategory = ref("All");
const isSelectListOpen = ref(false);

const filteredProjects = computed(() => {
  if (selectedCategory.value === "All") {
    return projects;
  } else {
    return projects.filter(
      (project) => project.category === selectedCategory.value
    );
  }
});

// Toggle select list visibility
const toggleSelectList = () => {
  isSelectListOpen.value = !isSelectListOpen.value;
};

// Function to select a category
const selectCategory = (id) => {
  selectedCategory.value = id;
  isSelectListOpen.value = false;
};
</script>

<style>
</style>