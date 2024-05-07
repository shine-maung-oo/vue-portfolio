<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="/public/images/my_photo.png" alt="naoki" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Shine Maung Oo">Shine Maung Oo</h1>

        <p class="title" data-text="Full-Stack Web Developer">Full-Stack Web Developer</p>
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
            <ion-icon name="calendar-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Birthday</p>

            <time datetime="2000-09-27">Sep 27, 2000</time>
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
            <ion-icon name="download-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">CV Form</p>
            <a
              href="/pdf/shinemaungoocvresume.pdf"
              class="contact-link"
              target="_blank"
              >Download</a
            >
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <li class="social-item">
          <a
            href="https://www.facebook.com/profile.php?id=100036778868811"
            class="social-link"
            target="_blank"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a
            href="https://www.linkedin.com/in/shinemaungoo/"
            class="social-link"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
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