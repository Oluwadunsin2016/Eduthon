import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'
import store from './store'
import { TinyEmitter } from 'tiny-emitter'

const app=createApp(App)
export const baseUrl='https://eduthonapi.delwathon.com/api/'
const token=localStorage.getItem('eduthonToken')
export const config={headers:{Authorization:`Bearer ${token}`,"content-type": "multipart/form-data"}};
// export const config={headers:{Authorization:`Bearer ${token}`,"content-type": "application/json"}};

app.use(router)
app.use(store)

window.emitter= new TinyEmitter()
app.use(Quasar, quasarUserOptions).mount('#app')
