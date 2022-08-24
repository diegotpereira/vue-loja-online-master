import Vue from "vue"
import Router from 'vue-router'

const Home = () => import('@/views/Home.vue')

Vue.use(Router)

export default new Router({

    routes: [

        {
            path: '/',
            name: 'HomePagina',
            component: Home
        }
    ],
    mode: 'history'
})