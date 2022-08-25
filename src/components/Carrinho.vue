<template>
    <div>
        <div :class="cClass">
            <div class="cart-menu">
                <h1 class="text-center">Carrinho</h1>
                <hr>
                <transition name="fade">
                    <div class="text-center font-italic" v-if="this.carrinhoConteudo.length === 0">
                        Seu carrinho está vazio, tente adicionar itens.
                    </div>
                </transition>

                <transition-group name="fade">
                    <div class="row" v-for="coisa in carrinhoConteudo" v-bind:key="coisa.id"> 
                        <div class="col4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <img :src="coisa.img" alt="" style="width: 90px;">
                        </div>
                        <div class="col6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <h4>{{ coisa.titulo }}</h4>
                            <h6>{{ coisa.preco }}</h6>
                        </div>
                        <div class="col2 col-xl-2 col-lg-2 col-md-2 col-sm-2 pt-4">
                            <span class="remove-btn" @click="removerCoisa(coisa.id)">Remover</span>
                        </div>
                    </div>
                </transition-group>

                <hr v-if="this.carrinhoConteudo.length !== 0">
                <div class="row justify-content-between" style="background:#7dcf85;padding:10px 10px 10px 10px" v-if="this.carrinhoPreco != undefined">
                    <div class="flex-column pl-3">
                        <h4>Total</h4>
                    </div>
                    <div class="flex-column pr-3">
                        <h4>R${{ carrinhoPreco }}</h4>
                    </div>
                </div>
            </div>
        </div>

        <div :class="modalClass" @click="carrinhoON"></div>
    </div>
</template>
<script>
export default {
    name: 'CarrinhoPagina',
    data() {
        return {
            cClass: 'cart',
            modalClass: 'modal off'
        }
    },
    computed: {
        carrinhoConteudo() {

            return this.$store.state.carrinhoItens
        },
        carrinhoPreco() {

            return this.$store.getters.precoTotal
        }
    },
    methods: {
        carrinhoON() {

            if (this.cClass === 'cart on') {
                
                this.cClass = 'cart'
                this.modalClass = 'modal off'

            } else {
                this.cClass = 'cart on'
                this.modalClass = 'modal'
            }
        },
        removerCoisa(id) {

            this.$store.commit('saidaCarrinho', id)
        }
    }
}
</script>
<style scoped>
.modal {
    display: block;
    z-index: 1050;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
}
.modal.off {
    display: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.cart {
    position: fixed;
    margin-right: 0px;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background: #303e49;
    overflow-y: auto;
    z-index: 1051;
    -webkit-overflow-scrolling: touch;
    transform: translateX(360px);
    transition-property: transform;
    transition-duration: 0.4s;
}

.cart.on {
    transform: translateX(0);
    -webkit-overflow-scrolling: touch;
    transition-property: transform;
    transition-duration: 0.4s;
}

.cart-menu {
    color: #eee;
    margin-left: 10px;
    margin-right: 15px;
}

hr {
    border-color: white;
}
.row {
    margin-top: 10px;
    margin-bottom: 10px;
}

.remove-btn {
    border-radius: 50%;
    content: url('../assets/multiply.png');
}

.remove-btn:hover {
    background-color: grey;
}
</style>