<template>
    <section class="carousel">
        <div id="heroControls" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#heroControls" class="active" data-slide-to="0"></li>
                <li data-target="#heroControls" data-slide-to="1"></li>
                <li data-target="#heroControls" data-slide-to="2"></li>
            </ol>
            <div class="corousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/jum1.jpg" alt="primeiro slide" class="img-fluid">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/jum2.jpg" alt="segundo slide" class="img-fluid">
                </div>
                <div class="carousel-item">
                    <img src="@/assets/jum2.jpg" alt="terceiro slide" class="img-fluid">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'CarrosselPagina'
}
</script>

<style scoped>
.img-fluid {
  min-width: 800px !important;
}
ol.carousel-indicators li {
  background-color: white;
  height: 20px;
  width: 20px;
  border-radius: 30px;
  border: 0.6px solid black;
}
ol.carousel-indicators li.active {
  background: #dbf0fa;
}
</style>