<template>
  <article class="about active">
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>

    <section class="about-text">
      <p>
        I'm full-stack web developer from Yangon, Myanmar, working in web development for
        website, web software and web application. I enjoy turning complex
        problems into simple, beautiful and intuitive designs.
      </p>

      <p>
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way.
      </p>
      <p>
        Full-Stack Web Developer with overly 1 year and 5 months of hands-on experience in designing and
        maintaining responsive websites within the technology and service
        industries but passionate in Front-end. Committed to enhancing the
        accessibility and usability of modern websites. A meticulous attention
        to detail drives my dedication to excellence in every project. I
        contribute to building robust and user-friendly web applications.
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