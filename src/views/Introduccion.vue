<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro(style="position:relative;")
      p(data-aos="fade-up" style="position:relative") Se da la bienvenida al componente formativo #[strong(style="color:#EB6F2D;") “El plan interpretativo del servicio guiado”.] Para comenzar el recorrido por el mismo, se debe observar el video que se muestra a continuación:
      figure.mt-5(style="position:relative")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/xfi1Wakonaw" title="El plan interpretativo del servicio guiado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro:before
  position: absolute
  content: ''
  width: 115%
  height: 100%
  background: url(../assets/curso/intro1.png)
  background-size: contain
  background-position: 0px -15px
  left: -7%
</style>
