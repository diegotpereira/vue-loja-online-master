<template>
    <div>
        <h1 class="pt-3 text-center">Novos Lançamentos</h1>
        <nav class="row justify-content-center" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Principal / </router-link>
                </li>
                <li class="breadCrumb-item active" aria-current="page">Produtos</li>
            </ol>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'ItemPagina'
}
</script>
<style scoped>
.breadcrumb {
    background: inherit !important;
    color: #2c3539;
    font-size: 20px;
}

.breadcrumb > li > a {
    text-decoration: none !important;
    color: #2c3539 !important;
}

.breadcrumb > li {
    text-decoration: none !important;
    color: #f2be00 !important;
}

.breadCrumb-item {
    float: left;
    padding-left: 5px;
}
</style>