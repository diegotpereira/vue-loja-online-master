<template>
    <footer class="footer_area">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                    <div class="footer-widget">
                        <div class="footer-title">Navegar</div>
                        <ul class="list-unstyled">
                            <router-link to="/"><li>Home</li></router-link>
                            <router-link to="/produtos"><li>Produtos</li></router-link>
                            <router-link to="/produtos"><li>Contatos</li></router-link>
                        </ul>
                    </div>
                </div>
                <div class="col-6 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                    <div class="footer-widget">
                        <div class="footer-title">Categorias</div>
                        <ul class="list-unstyled">
                            <router-link to="/produtos"><li>Tabelas</li></router-link>
                            <router-link to="/produtos"><li>Lampadas</li></router-link>
                            <router-link to="/produtos"><li>Cadeiras</li></router-link>
                            <router-link to="/produtos"><li>Sofas</li></router-link>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-xl-6 col-lg-3 col-md-3 col-sm-12 text-left text-md-right pb-5">
                    <div class="footer-widget">
                        <h4>Porto Alegre,</h4>
                        <h4>Rio Grande do Sul, Brasil</h4>
                        <a href="">teste@gmail.com</a>
                        <h6>51 33265633</h6>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-xl-7 col-lg-6 col-md-6 col-sm-6 col-6">
                    <div class="tiny-footer">
                        <p>Todos direitos @ reservados 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterPagina'
}
</script>
<style>
.footer_area {
    position: relative;
    z-index: 1;
    color: #2c3539;
    background-color: #fefefe;
}

.footer-widget {
    padding-top: 60px;;
}
.footer-title {
    padding-bottom: 20px;
    font-weight: bold;
}
.list-unstyled a {
    text-decoration: none;
}

.list-unstyled a li {
    color: #2c3e50;
    margin-bottom: 10px;;
}


</style>