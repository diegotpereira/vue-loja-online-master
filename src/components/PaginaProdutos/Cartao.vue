<template>
    <div>
        <transition-group name="fade" class="row" tag="div">
            <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3" v-for="item in CartaoArray" :key="item.id">
                <div class="card">
                    <img :src="item.img" alt="" class="card-img-top">
                    <div class="overlay">
                        <button type="button" class="btn btn-outline-secondary btn-lg" @click="addNoCarrinho(item)">Adicionar</button>
                        <router-link to="/info"><button class="btn btn-outline-secondary btn-lg" @click="enviarInfo(item)">Informação</button></router-link>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.titulo }}</h5>
                        <p class="card-text">{{ item.preco }}</p>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>
<script>
export default {
    name: 'CartapPagina',
    props: ['CartaoArray'],

    methods: {
        enviarInfo(it) {
            this.$store.commit('addNaInfo', it)
        },
        addNoCarrinho(it) {

            this.$store.commit('noCarrinho', it)
        }
    }
}
</script>
<style>
.fade-move {
    transition: transform 1s;
}

.card {
    transition: 500ms;
    position: relative;
    overflow: hidden;
}

.card img {
    z-index: 1;
}

.card button {
    width: 140px;
    margin-bottom: 10px;
}

.card:hover img {
    filter: blur(4px);
}

.card:hover .overlay {
    opacity: 0.8;
}

.card .overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
    background-color: #232b34;
    opacity: 0;
    z-index: 100;
    transition: all 0.3s ease-in;
}

.card:hover, .card:active {
  transform: scaleY(1.1) scaleX(1.06);
  box-shadow: 0 14px 98px rgba(0, 0, 0, 0.25), 0 0px 60px rgba(0, 0, 0, 0.22);
}
</style>