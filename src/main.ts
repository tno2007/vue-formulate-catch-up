import Vue from "vue";
import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
import { createPinia, PiniaVuePlugin } from "pinia";

import VueFormulate from "@braid/vue-formulate";
Vue.use(VueFormulate);

import App from "./App.vue";

Vue.use(VueCompositionAPI);

const app = createApp({
  pinia: createPinia(),
  render: () => h(App),
});
app.use(PiniaVuePlugin);

app.mount("#app");
