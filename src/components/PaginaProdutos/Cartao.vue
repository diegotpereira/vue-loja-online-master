<template>
    <div>
        <transition-group name="fade" class="row" tag="div">
            <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3" v-for="item in CartaoArray" :key="item.id">
                <div class="card">
                    <img :src="item.img" alt="" class="card-img-top">
                    <div class="overlay">
                        <button type="button" class="btn.btn-outline-secondary.btn-lg">Adicionar</button>
                        <router-link to="/"><button class="btn btn-outline-secondary btn-lg">Info</button></router-link>
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
    props: ['CartaoArray']
}
</script>
<style>

</style>