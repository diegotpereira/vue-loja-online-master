<template>
    <div>
        <Item />
        <Grade />
    </div>
</template>
<script>

import Grade from '@/components/PaginaProdutos/Grade.vue'
import Item from '@/components/PaginaProdutos/Item.vue'

export default {
    name: 'ProdutosPagina',
    components: {
        Grade,
        Item
    }
}
</script>