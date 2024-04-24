import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from "firebase/app";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ProgressSpinner from 'primevue/progressspinner';
import Card from 'primevue/card';

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyDzsQ3bWmJEhc8oELgWaMBjnJTAyLwEKqw",
  authDomain: "interviews-b2c7b.firebaseapp.com",
  projectId: "interviews-b2c7b",
  storageBucket: "interviews-b2c7b.appspot.com",
  messagingSenderId: "666880540191",
  appId: "1:666880540191:web:5247438eafd472d5d9df2a"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)

app.mount('#app')
