<template>
    <div>
        <div class="more info d-flex justify-content-between text-center">
            <div class="col4 flex-fill" v-for="(info, index) in maisInfo" :class="[index === active ? 'col4 active' : '']" :key="info.id">
                <h6>{{ info }}</h6>
            </div>
        </div>
        <div class="container pt-3">
            <div class="row">
                <p>Informações dos produtos oferecidos na loja online</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InfoTextoPagina',
    data() {
        return {
            maisInfo: ['DESCRICAO', 'GARANTIA', 'AVALIAÇÕES'],
            active: 0
        }
    },
}
</script>