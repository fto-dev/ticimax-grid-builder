import { createApp } from 'vue'
import App from './App.vue'
import { grid , sortable} from "uikit";

//import './assets/main.css'

createApp(App).use(grid).use(sortable).mount('#app')
