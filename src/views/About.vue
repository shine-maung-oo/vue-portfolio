<template>
  <article class="about active">
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>

    <section class="about-text">
      <p>
        I am a full-stack web developer from Yangon, Myanmar, specializing in creating websites, web software, and web applications. I enjoy transforming complex problems into simple, elegant, and user-friendly designs.
      </p>

      <p>
        My role is to develop functional and visually appealing websites that are easy to use. By combining advanced design with intuitive usability, I showcase my skills effectively.
      </p>
      <p>
        With over 1 year and 5 months of experience, I have a strong passion for front-end development. I am dedicated to creating accessible and user-friendly websites, consistently striving for excellence in every project. My contributions help build stable and easy-to-use web applications.
      </p>
    </section>

    <!--
          - service
        -->

    <section class="service">
      <h3 class="h3 service-title">What i'm doing</h3>

      <ul class="service-list">
        <li class="service-item">
          <div class="service-icon-box">
            <img
              src="/public/images/icon-design.svg
                "
              alt="design icon"
              width="40"
            />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Web design</h4>

            <p class="service-item-text">
              The most modern and high-quality design made at a average level.
            </p>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img
              src="/public/images/icon-dev.svg"
              alt="Web development icon"
              width="40"
            />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Web development</h4>

            <p class="service-item-text">
              High-quality development of sites at the average level.
            </p>
          </div>
        </li>
      </ul>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">Skills</h3>
      <div class="slideshow" style="margin-bottom: 0">
        <div class="move">
          <img src="/public/images/html5.svg" alt="icon" />
          <img src="/public/images/css3-alt.svg" alt="icon" />
          <img src="/public/images/js.svg" alt="icon" />
          <img src="/public/images/bootstrap.svg" alt="icon" />
          <img src="/public/images/tailwind.svg" alt="icon" />
          <img src="/public/images/php.svg" alt="icon" />
          <img src="/public/images/laravel.svg" alt="icon" />
          <img
            src="/public/images/filament.svg"
            alt="icon"
            style="border-radius: 5px"
          />
          <img src="/public/images/wordpress.svg" alt="icon" />
          <img src="/public/images/vuejs.svg" alt="icon" />
          <img src="/public/images/react.svg" alt="icon" />
          <img src="/public/images/github.svg" alt="icon" />
          <img src="/public/images/figma.svg" alt="icon" />
        </div>
        <div class="move">
          <img src="/public/images/html5.svg" alt="icon" />
          <img src="/public/images/css3-alt.svg" alt="icon" />
          <img src="/public/images/js.svg" alt="icon" />
          <img src="/public/images/bootstrap.svg" alt="icon" />
          <img src="/public/images/tailwind.svg" alt="icon" />
          <img src="/public/images/php.svg" alt="icon" />
          <img src="/public/images/laravel.svg" alt="icon" />
          <img
            src="/public/images/filament.svg"
            alt="icon"
            style="border-radius: 5px"
          />
          <img src="/public/images/wordpress.svg" alt="icon" />
          <img src="/public/images/vuejs.svg" alt="icon" />
          <img src="/public/images/react.svg" alt="icon" />
          <img src="/public/images/github.svg" alt="icon" />
          <img src="/public/images/figma.svg" alt="icon" />
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style>
</style>