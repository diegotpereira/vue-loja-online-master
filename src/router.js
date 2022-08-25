import Vue from "vue"
import Router from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Produtos = () => import('@/views/Produtos.vue')
const Contato = () => import('@/views/Contato.vue')
const Info = () => import('@/views/Info.vue')

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
        },
        {
            path: '/contato',
            name: 'Contato',
            component: Contato
        },
        {
            path: '/info',
            name: 'Info',
            component: Info
        }
    ],
    mode: 'history'
})