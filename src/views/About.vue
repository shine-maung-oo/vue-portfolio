<template>
  <article class="about active">
    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>

    <section class="about-text">
      <p>
        Hi, I'm Shine Maung Oo, a web developer from Yangon, Myanmar, with a
        passion for front-end development. I specialize in creating dynamic,
        responsive web applications, focusing on technologies like JavaScript
        and frameworks such as React and Vue.js.
      </p>
      <p>
        While I have experience with backend development using PHP and Laravel,
        my true passion lies in crafting intuitive and engaging user interfaces.
        I believe that a well-designed interface significantly enhances user
        experience and satisfaction.
      </p>
      <p>
        I'm always eager to learn new technologies and improve my skills.
        Connect with me on <a href="https://www.linkedin.com/in/shinemaungoo" class="about-link">LinkedIn</a> or <a href="mailto:shinemaungoo.smo@gmail.com" class="about-link">shinemaungoo.smo@gmail.com</a> .
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
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            HTML & CSS
          </h4>
          <span> Strong foundation in web design and responsive layouts.</span>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Javascript
          </h4>
          <span> Advanced knowledge, with experience in frameworks like React and Vue.js.</span>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            TypeScript
          </h4>
          <span> Experience in building scalable web applications.</span>
        </li>
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            PHP
          </h4>
          <span> Proficient in backend development using Laravel.</span>
        </li>
        
      </ol>
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