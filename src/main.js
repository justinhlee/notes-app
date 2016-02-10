import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import ListView from './components/ListView.vue'

Vue.use(Router)

var router = new Router()

router.map({
  '/': {
    component: ListView
  }
})

router.start(App, '#app')