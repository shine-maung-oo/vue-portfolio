<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import NotFound from "./views/NotFound.vue";

</script>

<template>
  <main v-if="$route.name == 404">
    <NotFound />
  </main>
  <main v-else>
    <Sidebar />

    <div class="main-content">
      <Header />
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
</style>
