<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Interpretación y plan para el servicio guiado

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 #[strong Interpretar es un término lingüístico que está relacionado con el significado que se da a algo; es decir, la atribución dada para su explicación significativa.  La interpretación se relaciona con la capacidad de concebir y expresar la realidad de forma personal, igualmente, se usa al traducir de un idioma a otro, para tocar música con un instrumento o representar un papel en una obra artística o traducir al lenguaje de señas un mensaje.]

    p.mt-5(data-aos="fade-up") Como enfoque de habilidad de pensamiento, la interpretación exige de la persona que lo ejecuta un conjunto de operaciones mentales como lectura, comparación, identificación de ideas principales, observación, ordenación, síntesis, entre otros; aplicada al turismo y específicamente en la función del guía, la interpretación permite que se exprese lo que se ve, utilizando recursos para provocar, motivar e invitar al que escucha a vivir una experiencia.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_1 1.1 Audiencia

    .row.cont_1_1(style="position:relative;")
      .col-md-6.mb-4.mb-md-0(style="position:relative;place-self:center;")
        figure
          img(src="@/assets/curso/tema1/3.png" data-aos="fade-right")
      .col-md-6(style="position:relative;place-self:center;")
        p(data-aos="fade-up") El guionaje turístico requiere de un ejercicio de identificación de las personas a quienes se les va a ofrecer un proceso interpretativo.  Es por esto que Mendoza O., Umbral M., y Arévalo M. (2011), afirman que “es esencial conocer lo mejor posible a la audiencia para diseñar actividades interpretativas que brinden experiencias agradables al visitante”. Si el intérprete desconoce a su público, es posible que no satisfaga sus necesidades y que se le imponga una interpretación cuando éste tal vez solo desee unos cuantos datos o una pequeña información. 
        .cajon.color-primario.p-4.mt-4(style="position:relative;background-color:#FFD667;box-shadow:0px 0px 10px rgba(0,0,0,.2);")
          p.mb-0(data-aos="fade-up") Brindar una experiencia grata al visitante y que éste tenga una conexión importante con el sitio, es necesario conocerlo y entender que tanto conocimiento tienen frente al destino visitado.

    .row.mt-5.col-md-10.m-auto
      .col-md-6.p-0(style="place-self:center;")
        .p-4(style="height:100%;background-color:#F3F9FF;")
          p(data-aos="fade-up") Mendoza O., y otros (2011) mencionan que un buen conocimiento de la audiencia, le permite al guía darse cuenta cuándo dejar que el visitante y el recurso interactúen por su cuenta y cuándo, cómo y dónde es conveniente el uso de la interpretación para ayudarle a descubrir nuevos o renovados significados en el recurso.
          p.mt-4(data-aos="fade-up") Con respecto a la manera en que se puede crear una buena “oportunidad interpretativa”, con las técnicas adecuadas, el tipo de información correcto a transmitir, el estilo y formato de su presentación, se debe conocer a los turistas a través de fuentes variadas como los estudios o estadísticas turísticas que muestran la frecuencia de visita y los usos del sitio. Cuanto más precisa sea esta información y los datos del origen, las necesidades, expectativas e intereses de la audiencia, más preciso y efectivo será el servicio interpretativo. Así mismo, es importante conocer quiénes no suelen visitar el sitio, ya que se convierten en una audiencia potencial que espera ser captada y convertida en visitantes reales.
      .col-md-6.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/4.png" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Una vez conocida la audiencia, se procede a preparar una propuesta de actividades coherentes con las expectativas de la misma, la cual debe incluir varios aspectos entre los que se encuentran:

    PasosA.color-primario.mt-5.col-lg-10.m-auto(tipo="n")
      .row
        .col-lg-7.mb-4.mb-lg-0(style="place-self:center")
          p(data-aos="fade-right") #[strong Selección de recursos turísticos a mostrar:] incluye la definición del proceso comunicativo escogiendo los medios interpretativos.
        .col-lg-5(style="place-self:center")
          figure
            img(src='@/assets/curso/tema1/5.png' data-aos="fade-left")
      .row
        .col-lg-5.order-2.order-lg-0(style="place-self:center")
          figure
            img(src='@/assets/curso/tema1/6.png' data-aos="fade-right")
        .col-lg-7.mb-4.mb-lg-0.order-1.order-lg-0(style="place-self:center")
          p(data-aos="fade-right") #[strong Relacionar los recursos (naturales- culturales):] corresponde con las vivencias de los locales y los intereses, motivaciones y expectativas que son algunas veces por curiosidad o aprendizaje, y que mediante la visita guiada se convierten en emociones y por ende en una experiencia.
      .row
        .col-lg-7.mb-4.mb-lg-0(style="place-self:center")
          p(data-aos="fade-right") #[strong El guionaje, plantea la necesidad de definir el público actual y potencial:] la forma en que se logra vincular a las personas en una relación de largo plazo o fidelizarlo, es lo que se denomina construir audiencias.
        .col-lg-5(style="place-self:center")
          figure
            img(src='@/assets/curso/tema1/7.png' data-aos="fade-left")
      .row
        .col-lg-5.order-2.order-lg-0(style="place-self:center")
          figure
            img(src='@/assets/curso/tema1/24.png' data-aos="fade-right")
        .col-lg-7.mb-4.mb-lg-0.order-1.order-lg-0(style="place-self:center")
          p(data-aos="fade-right") #[strong La estructuración interpretativa:] se complementa con las propuestas de marca emocional que se proponen en los destinos y que el guía tiene en cuenta para la interpretación.
      .row
        .col-lg-7.mb-4.mb-lg-0(style="place-self:center")
          p(data-aos="fade-right") #[strong La adecuación del lenguaje:] de acuerdo con la audiencia es un ejercicio de reflexión permanente y dedicado para obtener los objetivos del servicio guiado.
        .col-lg-5(style="place-self:center")
          figure
            img(src='@/assets/curso/tema1/25.png' data-aos="fade-left")

    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2   Mapa de empatía

    p(data-aos="fade-up") Desde la planeación de la interpretación del patrimonio, se deben dimensionar aspectos puntuales del cliente para que el recorrido guiado sea eficiente. Henao (2021) menciona que una buena estrategia para visualizar al cliente ideal de los servicios, es el conocido mapa de la empatía en el cual se analizan diferentes aspectos partiendo de una serie de preguntas básicas, que buscan conocer un poco más al cliente y tener las bases para crear diferentes estrategias de publicidad procurando la venta de los servicios, tal como se puede apreciar en la siguiente figura:

    .col-md-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5.d-block Figura 1.
        span Aspectos del mapa de empatía

      .row.mt-5
        .col-lg-4.mb-4.mb-lg-0
          .h-100
            .row.p-2.m-0(style="background-color:#B7CEAC;border-top-right-radius:30px;min-height:80px;")
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema1/8.png" data-aos="fade-up")
              .col(style="place-self:center")
                h5.mb-0(data-aos="fade-up") ¿Qué ve?
            .p-4.cont_tarjeta1(style="border:1px #707070 solid;border-bottom-left-radius:30px;min-height:280px;")
              p(data-aos="fade-up") Se refiere a lo que la persona observa en diferentes medios tecnológicos, como internet, redes sociales, televisión.
        .col-lg-4.mb-4.mb-lg-0
          .h-100
            .row.p-2.m-0(style="background-color:#B7CEAC;border-top-right-radius:30px;min-height:80px;")
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema1/9.png" data-aos="fade-up")
              .col(style="place-self:center")
                h5.mb-0(data-aos="fade-up") ¿Qué escucha?
            .p-4.cont_tarjeta1(style="border:1px #707070 solid;border-bottom-left-radius:30px;min-height:280px;")
              p(data-aos="fade-up") Gustos musicales, medios de comunicación que puedan llegar a influenciarlo; influenciadores que siga en las diferentes redes sociales, aquellos dolos que puede llegar a tener; también es bueno identificar aquellas marcas preferidas por este cliente ideal.
        .col-lg-4.mb-4.mb-lg-0
          .h-100
            .row.p-2.m-0(style="background-color:#B7CEAC;border-top-right-radius:30px;min-height:80px;")
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema1/10.png" data-aos="fade-up")
              .col(style="place-self:center")
                h5.mb-0(data-aos="fade-up") ¿Qué piensa y siente?
            .p-4.cont_tarjeta1(style="border:1px #707070 solid;border-bottom-left-radius:30px;min-height:280px;")
              p(data-aos="fade-up") Sus sueños, deseos, las preocupaciones, los miedos; es posible que el servicio que se le ofrece pueda ser beneficioso para la tranquilidad del cliente.

      .row.mt-5.mb-lg-0
        .col-lg-4.mb-4.mb-lg-0
          .h-100
            .row.p-2.m-0(style="background-color:#B7CEAC;border-top-right-radius:30px;min-height:80px;")
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema1/11.png" data-aos="fade-up")
              .col(style="place-self:center")
                h5.mb-0(data-aos="fade-up") ¿Qué habla y hace?
            .p-4.cont_tarjeta1(style="border:1px #707070 solid;border-bottom-left-radius:30px;min-height:280px;")
              p(data-aos="fade-up") Actividades que hace cotidianamente, sobre todo ls , ya que esta información será fundamental para poder orientar los mecanismos de publicidad y crear el servicio ideal para este cliente.
        .col-lg-4.mb-4.mb-lg-0
          .h-100
            .row.p-2.m-0(style="background-color:#B7CEAC;border-top-right-radius:30px;min-height:80px;")
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema1/12.png" data-aos="fade-up")
              .col(style="place-self:center")
                h5.mb-0(data-aos="fade-up") ¿Cuáles son sus dolores?
            .p-4.cont_tarjeta1(style="border:1px #707070 solid;border-bottom-left-radius:30px;min-height:280px;")
              p(data-aos="fade-up") Los miedos, las frustraciones, los obstáculos que ha tenido para alcanzar las diferentes metas.
        .col-lg-4.mb-4.mb-lg-0
          .h-100
            .row.p-2.m-0(style="background-color:#B7CEAC;border-top-right-radius:30px;min-height:80px;")
              .col-auto(style="place-self:center")
                figure
                  img(src="@/assets/curso/tema1/13.png" data-aos="fade-up")
              .col(style="place-self:center")
                h5.mb-0(data-aos="fade-up") ¿Cuáles son sus necesidades?
            .p-4.cont_tarjeta1(style="border:1px #707070 solid;border-bottom-left-radius:30px;min-height:280px;")
              p(data-aos="fade-up") ¿Qué significa para él? ¿Cuáles son sus etas personales o laborales? ¿Qué actividades le ayudarían a superar sus problemas?, entre otras preguntas.

    p.mt-5(data-aos="fade-up") Algunos de los elementos a tener presente cuando se construye un mapa de la empatía, corresponden con características personales o de historia de vida, como se puede apreciar a manera de información en el siguiente ejemplo:

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center")
        figure.col-sm-8.m-auto
          img(src="@/assets/curso/tema1/14.png" data-aos="fade-right")
      .col-lg-7
        p(data-aos="fade-up") Sandra tiene 40 años y vive en Bucaramanga desde hace 20 años. Nació y vivió en Medellín hasta que se trasladó a estudiar ciencias económicas a la capital de Santander, en donde está instalada desde entonces. Pertenece a una familia de 3 hermanas siendo ella la mediana y la única que vive fuera de Medellín. Suele visitar siempre a su familia en navidad.
        p.mt-4(data-aos="fade-up") Frecuentemente realiza viajes por sus actividades laborales, permitiéndole conocer diferentes culturas y comunidades. Sus jornadas de trabajo son largas, e incluso varios fines de semana debe trabajar en casa, con poca diferenciación entre el tiempo de ocio y ocupación, con lo cual maneja altos niveles de estrés. 
        p.mt-4(data-aos="fade-up") La estabilidad laboral, junto con unas pequeñas inversiones, le permite vivir con holgura, y tener un poder adquisitivo alto, que se demuestra en una vida cómoda, uso de ropa de marca, visita permanente a restaurantes gourmet, y sobre todo la compra de productos de belleza de alto costo.
        p.mt-4(data-aos="fade-up") En cuanto a su relación familiar, vive con su esposo desde hace 10 años, y tiene un hijo de 5 años. Considera que tiene una muy buena relación de pareja, en donde se comparten las tareas del hogar, aunque también cuentan con la ayuda de una persona 3 veces por semana. En semana dedican un día para salir con su hijo a jugar o a cenar, y los sábados, lo aprovechan en pareja. Ella, su esposo e incluso su hijo, son vegetarianos; en el hogar son muy conscientes del cambio climático y la importancia de cuidar el planeta, por ello, consumen productos orgánicos de cultivo ecológico.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_3 1.3   Propuesta de valor

    .bloque-texto-a.color-primario.mt-5.bloque1_1(style="background-color:transparent;position:relative;z-index:1;")
      .row.m-0.align-items-center.justify-content-between(style="position:relative")
        .col-lg-8.p-5.order-2.order-lg-0
          .bloque-texto-a__texto.p-4(style="position:relative")
            p.mb-0(data-aos="fade-up") La promesa o propuesta de valor es uno de los aspectos fundamentales para la empresa, de ella depende la fidelización del cliente, la perpetuación del buen nombre y la capacidad de satisfacer la demanda a través de repensar los productos y servicios ofrecidos.  Es por ello que se debe marcar la diferencia con la competencia, conociendo muy bien al cliente y ofreciéndole productos o servicios con un valor diferencial que logre resolver de manera ágil y completa, los requerimientos del visitante. 
        .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-0(style="position:relative")
          figure.text-center(style="position:relative")
            img(src="@/assets/curso/tema1/16.png" data-aos="fade-left" style="max-width:350px;display:inline;position: relative;bottom: -9px;")

    p.mt-5(data-aos="fade-up") Una vez se identifica el perfil del cliente, se puede definir la propuesta de valor tomando los siguientes elementos:
    .row.mt-5.col-lg-10.m-auto
      .col-lg-4.mb-5.mb-lg-0
        h3.text-center(data-aos="fade-up") 1. Productos y Servicios
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/17.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/20.png')})`}" style="background-size:cover;background-repeat:no-repeat;background-color:transparent;")
              h4.text-center ¿Qué ofrecemos?
              ul.lista-ul.mt-3(style="position:relative")
                li(data-aos="fade-up")
                  p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Servicios Físicos o Tangibles.
                li(data-aos="fade-up")
                  p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Servicios Intangibles.
                li(data-aos="fade-up")
                  p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Servicios Digitales.
                li(data-aos="fade-up")
                  p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Servicios Financieros.
      .col-lg-4.mb-5.mb-lg-0.mt-4.mt-lg-0
        h3.text-center(data-aos="fade-up") 2. Aliviadores de Frustraciones
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/18.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/21.png')})`}" style="background-size:cover;background-repeat:no-repeat;background-color:transparent;")
              h4.text-center ¿Cómo se alivian?
              ul.lista-ul.mt-3(style="position:relative")
                li(data-aos="fade-up")
                  p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Centrarse en las frustraciones que le importan a los clientes.
                li(data-aos="fade-up")
                  p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] No hace falta resolver todas las frustraciones del cliente.
      .col-lg-4.mb-5.mb-lg-0.mt-4.mt-lg-0
        h3.text-center(data-aos="fade-up") 3. Creadores de Alegrías
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/19.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(:style="{'background-image': `url(${require('@/assets/curso/tema1/22.png')})`}" style="background-size:cover;background-repeat:no-repeat;background-color:transparent;")
              h4.text-center ¿Cómo crean alegrías?
              ul.lista-ul.mt-3(style="position:relative")
                li(data-aos="fade-up")
                  p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Marcan las diferencias en el mercado.
                li(data-aos="fade-up")
                  p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Generan alegrías en todos los niveles.

    br
    p.mt-5(data-aos="fade-up") A continuación, se presenta un modelo de plantilla para representación simplificada de una situación actual o hipotética para hacer propuesta de valor de acuerdo con necesidades de clientes (ver figura 2):

    .col-md-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5.d-block Figura 2
        span El cliente y sus necesidades

      figure.mt-5
        img(src="@/assets/curso/tema1/23.png" data-aos="zoom-in-up")
        figcaption.mt-4.bg-white.p-0(style="font-weight:500;") Nota. Modelo de Gray, D.  Recuperado de INCIPY (2021).

    



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_1_1:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  top: 0
  background: url(../assets/curso/tema1/2.png)
.cajon.color-primario:before
  background-color: #DAAF40
.bloque1_1.bloque-texto-a.color-primario
  background-color: #FFB338
.bloque1_1.bloque-texto-a.color-primario:before
  background: url(../assets/curso/tema1/15.png)
  background-size: cover
  background-repeat: no-repeat
  height: 90%
  bottom: 0
  top: auto
.bloque1_1.bloque-texto-a.color-primario:after
  width: 100%
  height: 89.8%
  content: ''
  position: absolute
  background-color: #3F6A31
  z-index: -1
  top: auto
  bottom: 0
@media screen and (max-width: 990px)
  .cont_tarjeta1
    min-height: auto !important
  .bloque1_1.bloque-texto-a.color-primario:after
    height: 100% !important
  .bloque1_1.bloque-texto-a.color-primario:before
    height: 100% !important
</style>
