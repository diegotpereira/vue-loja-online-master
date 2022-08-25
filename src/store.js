import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {

        infoPagina: [],
        carrinhoItens: [],
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
            },
            {
                id:7,
                img: require('@/assets/8.jpg'),
                titulo: 'foto-4364',
                preco: 432,
                cor: 'vermelho',
                tipo: 'mesa'
            },
            {
                id:8,
                img: require('@/assets/9.jpg'),
                titulo: 'foto-44',
                preco: 390,
                cor: 'branco',
                tipo: 'mesa'
            },
            {
                id:9,
                img: require('@/assets/10.jpg'),
                titulo: 'foto-34',
                preco: 756,
                cor: 'amarelo',
                tipo: 'cadeira'
            },
            {
                id:10,
                img: require('@/assets/11.jpg'),
                titulo: 'foto-23',
                preco: 44,
                cor: 'branco',
                tipo: 'cadeira'
            },
            {
                id:11,
                img: require('@/assets/12.jpg'),
                titulo: 'foto-4234',
                preco: 156,
                cor: 'vermelho',
                tipo: 'lamp'
            },
            {
                id:12,
                img: require('@/assets/13.jpg'),
                titulo: 'foto-4234',
                preco: 756,
                cor: 'azul',
                tipo: 'lamp'
            },
            {
                id:13,
                img: require('@/assets/14.jpg'),
                titulo: 'foto-4234',
                preco: 756,
                cor: 'branco',
                tipo: 'cadeira'
            },
            {
                id:14,
                img: require('@/assets/table-1.jpg'),
                titulo: 'table-32',
                preco: 756,
                cor: 'branco',
                tipo: 'mesa'
            }
        ]
    },

    getters: {

        itensNumero(state) {

            return state.carrinhoItens.length
        },
        infoComprimento(state) {

            if (state.infoPagina.length > 0) {
                
                // splice() altera o conteúdo de uma lista, 
                // adicionando novos elementos enquanto remove elementos antigos.
                return state.infoPagina.splice(0, 1)
            }
        }
    },
    mutations: {

        noCarrinho(state, n) {

            return state.carrinhoItens.push(n)
        },
        addNaInfo(state, n) {

            return state.infoPagina.push(n)
        }
    }
})