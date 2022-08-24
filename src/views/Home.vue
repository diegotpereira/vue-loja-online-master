<template>
    <div>
        <Carroussel />
        <Sobrenos />
    </div>
</template>
<script>

import Carroussel from '@/components/PaginaHome/Carrossel.vue'
import Sobrenos from '@/components/PaginaHome/Sobrenos.vue'

export default {
    name: 'HomePagina',
    components: {
        Carroussel,
        Sobrenos
    }
}
</script>

