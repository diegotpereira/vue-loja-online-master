<template>
    <div class="container grid">
        <div class="row justify-content-around">
            <div class="row col-6 col-md-3 col-sm-6 pb-4 pr-1">
                <div class="dropdown">
                    <a href="" class="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="gropdown" aria-haspopup="true" aria-expanded="false">Buscar
                        <span style="color: #f2be00"></span>
                    </a>
                    <div class="dropdown-menu">
                        <a href="" class="dropdown-item">Fechar</a>
                        <a href="" class="dropdown-item">Preço</a>
                        <a href="" class="dropdown-item">Tendência</a>
                    </div>
                </div>
            </div>
            <div class="row col-6 col-md-3 col-sm-6">
                <div class="view-button">
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle d-block d-lg-none d-xl-none" role="button" id="MenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span>Categorias</span>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item">Tabelas</a>
                            <a class="dropdown-item">Lâmpadas</a>
                            <a class="dropdown-item">Cadeiras</a>
                            <a class="dropdown-item">Sofás</a>
                            <div class="dropdown-divider"></div>
                            <div class="pl-3">
                                <span class="circle" style="background-color:yellow" />
                                <span class="circle" style="background-color:blue" />
                                <span class="circle" style="background-color:white" />
                                <span class="circle" style="background-color:red" />
                            </div>
                            <div class="dropdown-divider"></div>
                            <a href="" class="dropdown-item">Redefinir</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block">
                    <div class="card-selector">
                        <div class="card-body p-5">
                            <div class="search-title">
                                <h4>Categorias</h4>
                                <br>
                                <h6>Pranchas</h6>
                                <h6>Lâmpadas</h6>
                                <h6>Cadeiras</h6>
                                <h6>Sofás</h6>
                                <br><br><br>
                                <h4 class="search-title">Filtrar por</h4>
                                <br>
                                <div class="co">
                                    <h5>Cor</h5>
                                    <span class="circle"></span>
                                    <span class="circle"></span>
                                    <span class="circle"></span>
                                    <span class="circle"></span>
                                </div>
                                <br><br>
                                <h5>Faixa de preço</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center">
                    <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4>Desculpe, não encontramos um produto com essas características</h4>
                    </div>

                    <Cartao :CartaoArray="cartoesFatiados"/>
                    
                    <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 py-5">
                        <button type="button" @click="incCardNumber" class="btn btn-outline-secondary btn-lg btn-block">Mas +</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cartao from '@/components/PaginaProdutos/Cartao.vue'

export default {
    name: 'GradePagina',
    components: {
        Cartao
    },
    data() {
        return {
            cartoes: [],
            mostrarCartoes: 6
        }
    },
    created() {
        this.cartoes = this.it
    },
    computed: {
        it() {

            return this.$store.state.itens
        },
        cartoesFatiados() {

            return this.cartoes.slice(0, this.mostrarCartoes)
        }
    }
}
</script>