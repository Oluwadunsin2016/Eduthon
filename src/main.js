import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'

const app=createApp(App)

app.use(router)
app.use(Quasar, quasarUserOptions).mount('#app')
