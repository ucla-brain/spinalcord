// Import Vue
import { createApp } from 'vue'; //for vue 3
import BootstrapVue3 from 'bootstrap-vue-3' //
// Import Vue App, routes, store
import App from './App.vue';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App)
app.use(BootstrapVue3)
app.mount('#app')
console.log('test4 -- app mounted successfully')
