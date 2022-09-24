<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planificación interpretativa

    .row.cont_2_1(style="position:relative;")
      .col-md-6.mb-4.mb-md-0(style="position:relative;place-self:center;")
        p(data-aos="fade-up") Para presentarle a los visitantes un lugar de importancia patrimonial, bien sea natural o cultural, se requiere de un proceso de planificación que conlleve a mostrar la oferta de manera ordenada y racional, de esta forma llegar al resultado deseado que es la “interpretación del patrimonio visitado”, lo que se traduce en unos visitantes que comprenden el significado del sitio, lo aprecian y lo disfrutan.
        p.mt-4(data-aos="fade-up") Esta planificación le permitirá al guía, tener claras las infraestructuras y medios de comunicación in situ que lograrán comunicar la información del atractivo al visitante, de forma organizada y coherente.
        .cajon.color-primario.p-4.mt-4(style="position:relative;background-color:#FFD667;box-shadow:0px 0px 10px rgba(0,0,0,.2);")
          p.mb-0(data-aos="fade-up") La planificación interpretativa entonces, es un proceso de complejidad que tiene en cuenta las diferentes necesidades y oportunidades para la interpretación y presentación del patrimonio, planteando soluciones racionales y viables. Idealmente, este proceso se debe llevar a cabo en cualquier propuesta de interpretación, bien sea un recorrido auto guiado o en la construcción de un centro de visitantes con exposiciones.
      .col-md-6(style="position:relative;place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="fade-left")

    br
    .cont_2_2.mt-5(style="position:relative")
      p.mt-5(data-aos="fade-up" style="position:relative") Se habla de complejidad asociada al término de planificación interpretativa, ya que los tiempos de creación de la misma son muy relativos y dependen del apoyo institucional, la dinámica y la experiencia del equipo de trabajo; por ejemplo, no es lo mismo planificar la interpretación para un museo que para un parque nacional natural o todo un municipio. En este sentido, el tiempo será mayor o menor dependiendo de la grandeza del proyecto y la velocidad del trabajo del equipo.
      p.mt-4(data-aos="fade-up" style="position:relative") Para llevar a cabo el proceso, se pueden tener en cuenta diferentes enfoques, los cuales se explican a continuación:

      ImagenInfograficaAjustada.color-secundario.col-md-7.m-auto.infografia1.mt-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/3.svg' data-aos="zoom-in-up")
        .tarjeta.color-acento-botones.p-4(x="65%" y="30%" numero="Énfasis en el recurso")
          h4.mb-0.p-2(style="color:#12263F;border-left:4px #12263F solid;") Énfasis en el recurso
          p.mt-3(style="color:#12263F;") En el caso del sitio con un valor superlativo o muy singular (y por ello merecedores de interpretar al visitante).
        .tarjeta.color-acento-botones.p-4(x="15%" y="56%" numero="Énfasis en el desarrollo local")
          h4.mb-0.p-2(style="color:#12263F;border-left:4px #12263F solid;") Énfasis en el desarrollo local
          p.mt-3(style="color:#12263F;") En el caso de localidades con necesidad de potenciar sus recursos patrimoniales u ordenarlos con una nueva perspectiva.
        .tarjeta.color-acento-botones.p-4(x="73%" y="70%" numero="Énfasis en los visitantes")
          h4.mb-0.p-2(style="color:#12263F;border-left:4px #12263F solid;") Énfasis en los visitantes
          p.mt-3(style="color:#12263F;") En el caso de una excesiva demanda o de públicos ávidos de conocimiento (en entornos naturales o monumentales).

    br
    .row.mt-5
      .col-md-6.mb-4.mb-md-0(style="place-self:center;")
        p(data-aos="fade-up") Según autores expertos, para presentar mensajes interpretativos se utilizan los medios del mismo orden que los métodos y procedimientos para tal fin; se incluyen numerosas técnicas participativas o medios interactivos que se eligen de acuerdo con las necesidades y el tipo de público visitante. Entre los medios más usados de acuerdo con expertos, se encuentran:
        ul.lista-ul.mt-4(style="position:relative")
          li(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] El guiado o acompañamiento.
          li(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] La sensibilización a través de los sentidos.
          li(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Las leyendas, las escenificaciones, los juegos, el humor y el misterio.
          li(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] La comunicación visual y la señalética.
          li(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] El uso de tecnologías.
        .cajon.color-primario.p-4.mt-5(style="position:relative;background-color:#FFD667;box-shadow:0px 0px 10px rgba(0,0,0,.2);")
          p.mb-0(data-aos="fade-up") Las técnicas interpretativas, tales como las comparaciones, las analogías, las actividades prácticas o los juegos, además de facilitar la comprensión, están concebidas para inspirar o provocar curiosidad, simpatía, asombro, serenidad o alegría. 
      .col-md-6(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/4.png" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") Dentro de la planificación interpretativa es importante identificar una serie de elementos primordiales para desarrollar un plan eficiente que permita la mejora continua en la experiencia que tiene el turista en un destino determinado. Para lograr esto, es fundamental seguir los siguientes requerimientos para establecer una planificación interpretativa según Morales (s.f.), como se indica en el siguiente recurso educativo:

    SlyderA.slydera1.mt-5.p-5(tipo="b")
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Situación Inicial
          p.mt-5 Se debe analizar el patrimonio que se va a intervenir; identificar las necesidades que tiene el lugar.
          p.mt-4 Reconocimiento inicial de la zona. Investigar en documentos del lugar, indagar con la comunidad; hacer un plan de trabajo, definir los tiempos de realización de la planificación interpretativa.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/6.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Formulación de Objetivos de Planificación
          p.mt-5 Se debe redactar qué se pretende conseguir con la planificación y con la posterior puesta en funcionamiento de unos servicios interpretativos.  A su vez, debe contener a quién va dirigido, para qué, cómo, cuándo, dónde y cómo se va a evaluar.
          p.mt-4 Algunos ejemplos de objetivos son los siguientes:
          ul.lista-ul.mt-4(style="position:relative")
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] #[strong De gestión:] pretende influir de forma positiva en el destino. 
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] #[strong De servicio:] se centran en la infraestructura y en el talento humano que desarrolla la interpretación.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] #[strong De comunicación:] da a conocer el significado del destino.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/7.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Recopilación de Información
          p.mt-5 Es necesario contar con planos y mapas de la zona a intervenir. Se debe seleccionar la información de acuerdo a su relevancia y aplicación dentro del plan interpretativo. Contar con información técnica. 
          ul.lista-ul.mt-4(style="position:relative")
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Identificar aquellos valores relevantes del patrimonio a intervenir.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Definir los usuarios potenciales.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/8.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Análisis
          p.mt-5 Utilizando los datos obtenidos en la etapa anterior se procede a analizar diversos aspectos:
          ul.lista-ul.mt-4(style="position:relative")
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] El recurso (el lugar y sus valores).
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Los destinatarios de la interpretación.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Los posibles objetivos para la interpretación.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Los contenidos (futuros mensajes).
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Los medios para su comunicación / interpretación.
          p.mt-4 Después se realiza un análisis de los siguientes aspectos, con el fin de determinar los recursos generales del destino.
          ul.lista-ul.mt-4(style="position:relative")
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Análisis del recurso.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Análisis de los usuarios.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Formulación de objetivos para la interpretación.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Selección de contenidos.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-paper-plane(style="color:#FF5900;border: 1px red solid;border-radius:50%;padding: .2rem;font-size:10px;")] Posibles medios e instalaciones interpretativas.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/9.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Síntesis
          p.mt-5 Se deben identificar las principales acciones que se harán de acuerdo a los objetivos planteados.
          p.mt-4  De acuerdo al grado de intervención en el patrimonio se deben plantear las diferentes reuniones de acercamiento a las personas implicadas en el plan interpretativo y llegar a acuerdos. #[br] Se hacen los primeros borradores del plan interpretativo.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/10.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 El Plan
          p.mt-5 Este plan es un documento estático que permite modificaciones de acuerdo al proceso de implementación del plan y también permite ajustes cuando sean necesarios.
          p.mt-4 El documento deberá estar sometido a revisiones y actualizaciones. Los parámetros y directrices del plan deben estar organizados y serán flexibles de acuerdo a las necesidades y objetivos planteados.
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/11.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Ejecución
          p.mt-5 En este punto se muestran los diseños específicos de la intervención que se hará en el lugar. Se examinan los diferentes proyectos y el presupuesto específico que se requiere. 
          p.mt-4 Se ponen en marcha los diferentes servicios interpretativos, planteados en el plan interpretativo. 
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/12.png', alt='')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 Evaluación y Seguimiento
          p.mt-5 Luego del desarrollo del plan, se debe evaluar lo ejecutado teniendo en cuenta los objetivos que se habían planteado inicialmente. Evaluar la eficiencia de los medios, la efectividad en la entrega del mensaje, la pertinencia de los contenidos, el impacto ambiental, el estado presupuestario, el impacto sobre la infraestructura.
          p.mt-4 Al final de este punto se debe realizar un seguimiento a la evaluación con el fin de definir los mejores métodos e indicadores de efectividad.
          p.mt-4 Es importante evaluar la captación del mensaje por parte de los visitantes para conocer el impacto del proceso interpretativo
        .col-md-8
          figure
            img(src='@/assets/curso/tema2/13.png', alt='')

    p.mt-5(data-aos="fade-up") Las decisiones tomadas se reflejarán en el Plan de Interpretación, que es el documento donde se define el paso a paso del desarrollo de los servicios de interpretación, la distribución en el destino turístico considerado, y los mensajes importantes que se transmitirán a los visitantes.

    .cont_tema2_3.mt-5(style="position:relative")
      .row.cont_magic1(style="position:relative")
        .col-lg-3.mb-3.mb-lg-0.ps-4.pe-4(style="place-self:center")
          figure.text-center
            img(src="@/assets/curso/tema2/14.svg" data-aos="fade-right" style="display:inline;position:relative;max-width:250px;")
        .col-lg-9.p-5(style="place-self:end")
          p.mt-4(data-aos="fade-up" style="position:relative") #[strong Lo invitamos a conocer un poco más sobre el plan de interpretación, revisando la siguiente cartilla de Guías técnicas de proyectos de ecoturismo; Guía de Interpretación del Patrimonio Natural y Cultural, del Ministerio de Comercio Exterior y Turismo de Perú, y que puede consultar en el siguiente enlace:]
          a.anexo.mt-4.col-md-9.m-auto(href="https://www.mincetur.gob.pe/wp-content/uploads/documentos/turismo/consultorias/directoriosManuales/Guias-Interpretacion-Patrimonio-Cultural.pdf " target="_blank" data-aos="zoom-in-up")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[strong Enlace web.] Cartilla de Guías técnicas de proyectos de ecoturismo




</template>

<script>
import ImagenInfograficaAjustada from '../components/ImagenInfograficaAjustada.vue'
export default {
  name: 'Tema2',
  components: {
    ImagenInfograficaAjustada,
  },
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
.cont_2_1:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  top: 0
  background: url(../assets/curso/tema1/2.png)
.cajon.color-primario:before
  background-color: #DAAF40
.cont_2_2:before
  content: ''
  position: absolute
  width: 115%
  height: 100%
  left: -7%
  top: 0
  background: url(../assets/curso/tema2/2.png)
.infografia1 .img-infografica__item__numero i
  color: #fff
  background-color: #EB6F2D
  padding: 7px
  border-radius: 33px
  border: 4px #F19E72 solid
  font-size: 13px
.infografia1 .tarjeta.color-acento-botones
  background-color: #FFD667
.slydera1
  background: url(../assets/curso/tema2/5.png)
  background-size: cover
  background-repeat: no-repeat
  border-radius: 20px
li.aos-init.aos-animate::marker
  content: ''
.cont_magic1
  background: url(../assets/curso/tema2/15.png)
  background-size: 100% 70%
  background-position: bottom
  background-repeat: no-repeat
  background-position: 0px 90%
</style>
