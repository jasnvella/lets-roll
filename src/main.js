import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { useStore } from "@/stores/DiceGame";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

export default {
  setup() {
    const moment = require("moment");
    const store = useStore();

    return {
      store,
    };
  },
};

app.mount("#app");
