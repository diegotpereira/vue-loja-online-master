import Vue from "vue"
import Router from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Produtos = () => import('@/views/Produtos.vue')

Vue.use(Router)

export default new Router({

    routes: [

        {
            path: '/',
            name: 'HomePagina',
            component: Home
        },
        {
            path: '/produtos',
            name: 'Produtos',
            component: Produtos
        }
    ],
    mode: 'history'
})