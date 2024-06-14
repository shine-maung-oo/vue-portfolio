import "./assets/css/style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mixin({
  mounted() {
    this.disableContextMenu = (event) => {
      event.preventDefault();
    };
    this.disableKeyShortcuts = (event) => {
      // Prevent F12 (Open Dev Tools)
      if (event.keyCode == 123) {
        event.preventDefault();
      }
      // Prevent Ctrl+Shift+I (Open Dev Tools)
      if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        event.preventDefault();
      }
      // Prevent Ctrl+Shift+J (Open Dev Tools)
      if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
        event.preventDefault();
      }
      // Prevent Ctrl+U (View Source)
      if (event.ctrlKey && event.keyCode == 85) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", this.disableContextMenu);
    document.addEventListener("keydown", this.disableKeyShortcuts);
  },
  beforeUnmount() {
    document.removeEventListener("contextmenu", this.disableContextMenu);
    document.removeEventListener("keydown", this.disableKeyShortcuts);
  },
});

app.mount("#app");
