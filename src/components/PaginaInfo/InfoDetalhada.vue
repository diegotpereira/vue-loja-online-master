<template>
    <div>
        <nav class="row justify-content-start" v-for="it in informacao" :key="it.id" aria-label="informacaodetalhada">
            <ol class="infodetalhada">
                <li class="infodetalhada-item">
                    <router-link to="/">Principal</router-link>
                </li>
                <li class="infodetalhada-item"><router-link to="/produtos">Produtos</router-link></li>
                <li class="infodetalhada-item">{{ it.tipo }}</li>
                <li class="infodetalhada-item active">{{ it.titulo }}</li>
            </ol>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'InfoDetalhadaPagina',
    props: ['informacao']
}
</script>

<style>
.infodetalhada {
    background: inherit;
}

.infodetalhada > li > a {
    text-decoration: none;
    color: #2c3539;
    font-size: 18px;
}
.infodetalhada > li > a:hover{
    text-decoration: underline;
}

.infodetalhada-item.active {
    text-decoration: none !important;
    color: #f2be00 !important;
}
</style>