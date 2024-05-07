<template>
  <article class="resume active">
    <header>
      <h2 class="h2 article-title">Resume</h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            University of Computer Studies, Yangon(UCSY)
          </h4>

          <span>2017 — current</span>

          <p class="timeline-text">
            Major - Computer Science <br />
            Grade - Third Year
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">High School Ohn Chaw</h4>

          <span>2006 — 2016</span>

          <p class="timeline-text">Basic Education High School</p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Experience</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">Full-Stack Web developer at Host Myanmar</h4>

          <span>01/2023 — Present</span>

          <ul class="timeline-text">
            <li>
              Developed and coded more than 40 websites and web applications for
              the Marketing Department, meeting project deadlines and ensuring a
              visually appealing and user-friendly online presence for clients.
            </li>
            <li>
              Managed and maintained data for university websites, all powered
              by WordPress CMS, ensuring accurate and up-to-date information for
              educational institutions.
            </li>
            <li>
              Collaborated closely with the UI/UX department to enhance existing
              web pages and develop new ones, resulting in improved user
              experiences and increased user engagement.
            </li>
            <li>
              Successfully implemented Laravel projects, including an e-commerce
              project, pos system, cms and a Laravel Filament project,
              demonstrating versatility in web development technologies.
            </li>
            <li>
              Collaborated with cross-functional teams to create responsive and
              user-friendly websites and web applications.
            </li>
            <li>
              Utilized WordPress for content management and ensured consistency
              and quality in website content.
            </li>
          </ul>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Volunteer at Huawei Public Cloud Project
          </h4>

          <span>05/2018</span>

          <p class="timeline-text">
            Participated as volunteer in Huawei Public Cloud Project for one
            mouth duration.
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Languages</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <span> English (Intermediate) </span>
        </li>

        <li class="timeline-item">
          <span> Japanese (Intermediate) </span>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">Skills</h3>
      <div class="slideshow">
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
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Web design</h5>
            <data value="75">75%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 75%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Web development</h5>
            <data value="70">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Front-end</h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">WordPress</h5>
            <data value="80">80%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%"></div>
          </div>
        </li>
      </ul>
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