<template>
    <div class="container grid">
        <div class="row justify-content-around">
            <div class="row col-6 col-md-3 col-sm-6 pb-4 pr-1">
                <div class="dropdown">
                    <a href="" class="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="gropdown" aria-haspopup="true" aria-expanded="false">Buscar
                        <span style="color: #f2be00;">{{ classificarBotao }}</span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a href="" class="dropdown-item">Fechar</a>
                        <a href="" class="dropdown-item" @click="classificarPorPreco">Preço</a>
                        <a href="" class="dropdown-item">Tendência</a>
                    </div>
                </div>
            </div>
            <div class="row col-6 col-md-3 col-sm-6">
                <div class="view-button">
                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle d-block d-lg-none d-xl-none" role="button" id="MenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span style="color:#f2be00;">Categorias</span>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="MenuLink">
                            <a class="dropdown-item" @click="classificarPorI('mesa')">Tabelas</a>
                            <a class="dropdown-item" @click="classificarPorI('lamp')">Lâmpadas</a>
                            <a class="dropdown-item" @click="classificarPorI('cadeiras')">Cadeiras</a>
                            <a class="dropdown-item" @click="classificarPorI('sofa')">Sofás</a>
                            <div class="dropdown-divider"></div>
                            <div class="pl-3">
                                <span class="circle" style="background-color:yellow" @click="classificarPorI('amarelo')"/>
                                <span class="circle" style="background-color:blue" @click="classificarPorI('azul')"/>
                                <span class="circle" style="background-color:white" @click="classificarPorI('branco')"/>
                                <span class="circle" style="background-color:red" @click="classificarPorI('vermelho')"/>
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
                                <h6 @click="classificarPorI('mesa')">Mesa</h6>
                                <h6 @click="classificarPorI('lamp')">Lâmpadas</h6>
                                <h6 @click="classificarPorI('cadeiras')">Cadeiras</h6>
                                <h6 @click="classificarPorI('sofa')">Sofás</h6>
                                <br><br><br>
                                <h4 class="search-title">Filtrar por</h4>
                                <br>
                                <div class="co">
                                    <h5>Cor</h5>
                                    <span class="circle" style="background-color: yellow" @click="classificarPorI('amarelo')"></span>
                                    <span class="circle" style="background-color: blue" @click="classificarPorI('azul')"></span>
                                    <span class="circle" style="background-color: white" @click="classificarPorI('branco')"></span>
                                    <span class="circle" style="background-color: red" @click="classificarPorI('vermelho')"></span>
                                </div>
                                <br><br>
                                <h5>Faixa de preço</h5>
                                <Slider @clicked="valorSlider" />
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
                        <button type="button" @click="incNumeroCartao" class="btn btn-outline-secondary btn-lg btn-block">Mais +</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cartao from '@/components/PaginaProdutos/Cartao.vue'
import Slider from './Slider.vue'

export default {
    name: 'GradePagina',
    components: {
        Cartao, Slider
    },
    data() {
        return {
            cartoes: [],
            mostrarCartoes: 6,
            classificarBotao: 'Por'
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
    },
    methods: {
        incNumeroCartao() {

            return this.mostrarCartoes += 6
        },
        valorSlider(valor) {
            var x = valor[0]
            var y = valor[1]
            this.cartoes = this.it.filter((e) => x < e.preco && e.preco > y)
        },
        classificarPorPreco() {
            this.cartoes.sort((a, b) => a.preco-b.preco)

            return this.classificarBotao = 'Preço'
        },
        classificarPorI(nome) {
            this.cartoes = this.it.filter((e) => e.tipo.match(nome) || e.cor.match(nome))
        }
    }
}
</script>
<style>
.container.grid {
    min-height: 60rem;
}
.container.grid a {
    cursor: pointer !important;
}
.btn-light {
    color: black !important;
    background: white;
    border-radius: 0 !important;
    border: 1px solid grey !important;
}

.dropdown-menu {
    background-color: #eee;
    color: #2c3539;
}

.dropdown-menu > a:hover {
    background-color: #dae0e5;
}

.btn-outline-secondary {
    border-radius: 0 !important;
}

.card-selector {
    color: #DCDCDC;
    height: 40rem;
    background: #2c3539 !important;
    box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title h6 {
    cursor: pointer;
}

.circle {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    border: 0.7px solid #2c3539;
    display: inline-block;
    margin-left: 6px;
    cursor: pointer;
}
</style>