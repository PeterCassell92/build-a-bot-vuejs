import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

// global Filters are possible like so in vue3
// app.config.globalProperties.$filters = {
//   currency: currencyFilter
// }
// methods would be accessed using e.g. $filters.currency

app.use(router)
  .use(store) // also possible to use directive() at this point in the chain
  .mount('#app');
