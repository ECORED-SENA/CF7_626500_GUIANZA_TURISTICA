<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-interno
  height: 114px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #EB6F2D !important
.titulo-principal__numero span
  color: #fff !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #EB6F2D !important
.banner-principal-decorativo-1
  top: 72% !important
  right: 18% !important
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.banner-principal__img img
  max-width: 320px
  display: inline
.banner-principal__img
  text-align: center !important
.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
  padding: 0 !important
  padding-top: 3rem !important
  margin-bottom: -7px
.banner-principal-decorativo-2
  top: 70% !important
  right: 78% !important
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
.banner-principal-decorativo-3
  top: 20% !important
  right: 2% !important
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
</style>
