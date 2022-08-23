import { createApp } from 'vue'
import App from './App.vue'
import UIkit, { grid , sortable } from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

//import './assets/main.css'

createApp(App).use(grid).use(sortable).mount('#app');
