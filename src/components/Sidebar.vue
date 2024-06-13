<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/public/images/my_photo.png" alt="naoki" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Shine Maung Oo">Shine Maung Oo</h1>

        <p class="title" data-text="Web Developer">
          Web Developer
        </p>
      </div>

      <button class="info_more-btn" @click="toggleMenu">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <a href="mailto:shinemaungoo.smo@gmail.com" class="contact-link"
              >shinemaungoo.smo@gmail.com</a
            >
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Phone</p>

            <a href="tel:+09979092815" class="contact-link">+959 979092815</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-github"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Github</p>
            <a
              href="https://github.com/shine-maung-oo"
              class="contact-link"
              target="_blank"
              >shine-maung-oo</a
            >
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-facebook"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Facebook</p>
            <a
              href="https://www.facebook.com/profile.php?id=100036778868811"
              class="contact-link"
              target="_blank"
              >Shine Maung Oo</a
            >
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="logo-linkedin"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/shinemaungoo/"
              class="contact-link"
              target="_blank"
              >shinemaungooo</a
            >
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleNavigation = () => {
  isOpen.value = false;
};

onMounted(() => {
  router.afterEach(handleNavigation);
});
</script>

<style>
</style>