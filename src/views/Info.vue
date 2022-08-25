<template>
    <div class="container py-5" style="padding-top: 70px">
        <InfoDetalhada :informacao="informacao"/>
        <InfoCaixa :informacao="informacao" />
        <InfoTexto />
    </div>
</template>
<script>
import InfoDetalhada from '@/components/PaginaInfo/InfoDetalhada.vue'
import InfoCaixa from '@/components/PaginaInfo/InfoCaixa.vue'
import InfoTexto from '@/components/PaginaInfo/InfoTexto.vue'

export default {
    name: 'InfoPagina',

    data() {
        return {
            informacao: []
        }
    },

    created() {
        this.informacao = this.info
    },
    computed: {
        info() {

            return this.$store.getters.infoComprimento
        }
    },
    components: {
        InfoDetalhada,
        InfoCaixa,
        InfoTexto
    }
}
</script>
<style>
hr {
width: 50px;
border-bottom: 1px solid black;
}
.related-item{
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>