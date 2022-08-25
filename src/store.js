import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {

        itens: [
            {
                id: 0,
                img: require('@/assets/1.jpg'),
                titulo: 'sofa 243',
                preco: 156,
                cor: 'amarelo',
                tipo: 'sofa'
            },
            {
                id: 1,
                img: require('@/assets/2.jpg'),
                titulo: 'lamp 54',
                preco: 756,
                cor: 'amarelo',
                tipo: 'lamp'
            },
            {
                id:2,
                img: require('@/assets/3.jpg'),
                titulo: 'fotal 34',
                preco: 362,
                cor: 'amarelo',
                tipo: 'cadeira'
            },
            {
                id:3,
                img: require('@/assets/4.jpg'),
                titulo: 'fotal324',
                preco: 505,
                cor: 'vermelho',
                tipo: 'cadeira'
            },
            {
                id:4,
                img: require('@/assets/5.jpg'),
                titulo: 'sofa-1',
                preco: 243,
                cor: 'branco',
                tipo: 'sofa'
            },
            {
                id:5,
                img: require('@/assets/6.jpg'),
                titulo: 'Fotal-2',
                preco: 44,
                cor: 'branco',
                tipo: 'cadeira'
            },
            {
                id:6,
                img: require('@/assets/7.jpg'),
                titulo: 'Fotal-34',
                preco: 505,
                cor: 'azul',
                tipo: 'cadeira'
            }
        ]
    }
})