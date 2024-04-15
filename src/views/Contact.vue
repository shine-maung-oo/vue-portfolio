<template>
  <article class="contact active">
    <header>
      <h2 class="h2 article-title">Contact</h2>
    </header>

    <section class="contact-form">
      <div v-if="showAlert" id="alertBox">
        <span id="alertMessage">{{ alertMessage }}</span>
        <span class="closeBtn" @click="hideAlert"
          ><ion-icon name="close-circle-outline"></ion-icon
        ></span>
      </div>

      <h3 class="h3 form-title">Contact Me</h3>
      <form @submit.prevent="submitForm" class="form">
        <div class="input-wrapper">
          <input
            v-model="name"
            type="text"
            class="form-input"
            placeholder="Full name"
            required
          />

          <input
            v-model="email"
            type="email"
            class="form-input"
            placeholder="Email address"
            required
          />
        </div>

        <textarea
          v-model="message"
          class="form-input"
          placeholder="Your Message"
          required
        ></textarea>

        <button class="form-btn" :disabled="!formValid">
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const showAlert = ref(false);
const alertMessage = ref("");

const formValid = computed(() => {
  return name.value !== "" && email.value !== "" && message.value !== "";
});

const hideAlert = () => {
  showAlert.value = false;
};

const submitForm = () => {
  const ebody = `<b>Name : </b>${name.value}<br><b>Email : </b>${email.value}<br><b>Message : </b> <p>${message.value}</p>`;

  Email.send({
    SecureToken: "197b6bad-f76b-4f7b-b050-b64a81c5edac",
    To: "shinemaungoo.smo@gmail.com",
    From: "shinemaungoo.smo@gmail.com",
    Subject: "Contact From " + name.value,
    Body: ebody,
  }).then((response) => {
    if (response === "OK") {
      Email.send({
        SecureToken: "197b6bad-f76b-4f7b-b050-b64a81c5edac",
        To: email.value,
        From: "shinemaungoo.smo@gmail.com",
        Subject: "Thank you for contacting me",
        Body: "Thank for contacting me, " + name.value + ".",
      }).then((response) => {
        if (response === "OK") {
          console.log("Email sent successfully!");
        } else {
          console.error("Error sending email: " + response);
        }
      });
      alertMessage.value = "Email sent successfully!";
      name.value = "";
      email.value = "";
      message.value = "";
    } else {
      alertMessage.value = "Error sending email: " + response;
    }
    showAlert.value = true;
    setTimeout(() => {
      showAlert.value = false;
    }, 5000);
  });
};
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style>
</style>