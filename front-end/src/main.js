import { createApp } from 'vue'
import App from './App.vue'

import store from '../store/index.js';

//global components
import Loader from './components/loader.vue';
import Checkbox from "./components/toggleCheckbox.vue";


const app = createApp(App);
app.use(store);

app.component("loader", Loader);
app.component("checkbox", Checkbox);

app.mount('#app');
