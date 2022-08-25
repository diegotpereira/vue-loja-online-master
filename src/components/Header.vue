<template>
    <div class="container-flex">
        <nav class="navbar navbar-light">
            <div class="dropdown d-xl-none d-lg-none mr-auto">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" alt="" data-toggle="dropdown" data-target="#navd" aria-haspopup="true" aria-expanded="false">
                <div class="dropdown-menu hb">
                    <router-link class="dropdown-item" to="/">Home</router-link>
                    <router-link class="dropdown-item" to="/produtos">Produtos</router-link>
                    <router-link class="dropdown-item" to="/">Contatos</router-link>
                </div>
            </div>

            <!-- logo -->
            <a href="#" class="navbar-brand py-0 pl-5">
                <img src="@/assets/fi-logo.svg" alt="" width="50" height="50">
            </a>

            <!-- Header Navigation -->
            <span class="navbar-item bc d-none d-xl-block d-lg-block py-0">
                <router-link class="pl-5" to="/">Home</router-link>
                <router-link class="pl-5" to="/produtos">Produtos</router-link>
                <router-link class="pl-5" to="/contato">Contatos</router-link>
            </span>

            <p class="navbar-item ml-auto">
                <div class="search d-none d-xl-block d-xl-block pr-6">
                    <input type="search" class="buscar">
                </div>
                <div class="user">
                    <h5 style="cursor: pointer" data-toggle="modal" data-target="#usuarioModal">Registrar</h5>
                </div>
                <div class="user">
                    <h5 style="cursor: pointer">/</h5>
                </div>
                <div class="user">
                    <h5 style="cursor: pointer" data-toggle="modal" data-target="#usuarioModal">Entrar</h5>
                </div>
            <div class="bag">
                <img src="@/assets/cart.svg" alt="" class="pb-1" @click="abrirCarrinho">
                <span class="mb-3" v-if="this.contagemItensSacola > 0">{{ contagemItensSacola }}</span>
            </div>
        </nav>

        <!-- Usuario Modal -->
        <div class="modal fade" id="usuarioModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="fechar" data-dismiss="modal" style="outline-style: none;" aria-label="Close">
                            <span>x</span>
                        </button>
                        <form action="" class="px-3 py-2">
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="email" name="" id="" class="form-control" placeholder="email@exemplo.com">
                            </div>
                             <div class="form-group">
                                <label for="">Senha</label>
                                <input type="email" name="" id="" class="form-control" placeholder="Senha">
                            </div>
                            <div class="form-check">
                                <input type="checkbox" name="" id="" class="form-check-input">
                                <label for="dropdownCheck" class="form-check-label">
                                    Lembre de mim
                                </label>
                            </div>
                            <button type="submit" class="btn-xl btn-success mt-3">Entrar</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <a href="#" class="dropdown-item">Esqueceu a senha?</a>
                        <a href="#" class="dropdown-item text-right">Inscrever-se</a>
                    </div>
                </div>
            </div>
        </div>

        <Carrinho ref="carrinhoMover"/>
    </div>
</template>
<script>
import Carrinho from '@/components/Carrinho.vue'

export default {
    name: 'HeaderPagina',
    computed: {
        contagemItensSacola() {

            return this.$store.getters.itensNumero
        }
    },
    components: {
        Carrinho
    },
    methods: {
        abrirCarrinho() {
            this.$refs.carrinhoMover.carrinhoON()
        }
    }
}
</script>

<style>

nav {
z-index: 100;
}

.navbar {
    border-bottom: 1px solid #DCDCDC;
    background-color: #F8F8F8;
}

.fechar {
    position: relative;
    bottom: 20px;
    left: 10px;
    font-size: 31px;
    color: #000;
}

.navbar-item.bc a {
  font-size: 17px;
  text-decoration: none;
  color: black;
}

.navbar-item.bc a:hover, .navbar-item.bc a:active {
    color: #FFD700;
}

.btn-sm {
    border-radius: 0;
}


.buscar { 
    outline: none;
    border: 1px #F8F8F8;
    background: #ededed url('../assets/search.png') no-repeat 5px center;
    padding: 5px 8px 0px 26px;
    width: 10px;
    -webkit-border-radius: 10em;
    -moz-border-radius: 10em;
    border-radius: 10em;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    transition: all .5s;
    margin-right: 10px;
}

.buscar:focus {
   width: 160px;
   border: solid 1px #ccc;
   background-color: #fff;
   border-color: #98ccfd;
   -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, .5);
   -moz-box-shadow: 0 0 5px rgba(109, 207, 246, .5);
   box-shadow: 0 0 5px rgba(109, 207, 246, .5);
   backface-visibility: hidden;
   perspective: 1000;
}

form .btn-xl.btn-success.mt-3 {
    position: relative;
    -webkit-transition-duration: 100ms;
    transition-duration: 100ms;
    width: 100%;
    height: 50px;
    font-size: 20px;
    outline:none;
    cursor: pointer;
    box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.bag span {
    background-color: #6394F8;
    border-radius: 10px;
    color: white;
    position: absolute;
    font-size: 15px;
    line-height: 1;
    padding: 2px 3px 3px 3px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    margin-left: -9px;
    bottom: 1rem;
}
.bag img {
    cursor: pointer;
    width: 20px;
    height: auto;
}

.user {
    margin-right: 20px;
    padding-top: 10px;
}

.user:hover {
    text-decoration: underline;
}
</style>