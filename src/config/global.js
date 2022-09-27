export default {
  global: {
    componenteFormativo: 'El plan interpretativo del servicio guiado',
    descripcionCurso:
      'El servicio guiado cuenta con una herramienta poderosa y centro de atención, llamada:  interpretación.  Siendo ésta una habilidad superior que debe tener el guía, aspectos como observar, planear, escribir, describir y comunicar, se necesitan de técnicas para lograrlo con estudio, práctica, profesionalismo y excelencia.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Interpretación y plan para el servicio guiado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Audiencia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Mapa de empatía',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Propuesta de valor',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planificación interpretativa',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El mensaje interpretativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Principios de la interpretación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Participantes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Estructura',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de interpretación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Oportunidad interpretativa',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Conocimiento de recursos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bazán, H. G. (2014). La Interpretación del Patrimonio como estrategia para la educación y socialización del patrimonio en el medio rural. La Interpretación del Patrimonio como estrategia para la educación y socialización del patrimonio en el medio rural, 9, p. 21 - 40.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5385929',
    },
    {
      referencia:
        'Mendoza O., M. M., Umbral M., M. E., y Arévalo M., M. N. (2011). La interpretación del patrimonio, una herramienta para el profesional del turismo. El Periplo Sustentable, 20, p. 9-30. ',
      link: 'https://www.redalyc.org/pdf/1934/193417856002.pdf',
    },
    {
      referencia:
        'Morales M, (2015, mayo 17). Bibliografía básica sobre interpretación del patrimonio [web log post]. Interpretación del patrimonio.  Blogspot.',
      link: 'http://interpretacionpatrimonio.blogspot.com/2015/05/',
    },
    {
      referencia:
        'Morales M., J. (s.f.). Pasos para establecer la planificación interpretativa.',
      link: 'https://www.unich.edu.mx/wp-content/uploads/2014/01/31Y32P-1.PDF',
    },
    {
      referencia:
        'Morales M., Guerra R., y Serantes P. (2009). Bases para la Definición de Competencias en Interpretación del Patrimonio.',
      link:
        'https://www.miteco.gob.es/en/ceneam/grupos-de-trabajo-y-seminarios/interpretacion-del-patrimonio-natural-y-cultural/bases-definicion-competencias-ip_tcm38-425705.pdf',
    },
    {
      referencia:
        'Moreira-Wachtel, S., y Tréllez S. (2013). La interpretación del patrimonio natural y cultural Una visión intercultural y participativa (Primera Edición). ',
      link:
        'https://www.eco-consult.com/fileadmin/user_upload/pdf/publications/interpretacio%C3%ACn_patrimonio_web.pdf',
    },
    {
      referencia:
        'Oller, E (s.f.). Diseñando una Propuesta de Valor [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=ZCJC1hI6qWQ ',
    },
    {
      referencia: 'Porras, C (2017).  Técnica de interpretación para guías. ',
      link:
        'https://travelplugcolombia.com/tecnica-de-interpretacion-para-guias/',
    },
    {
      referencia:
        'Ham, Sam H. (1983). Cognitive Psychology and Interpretation: Synthesis and Application. Journal of Interpretation 8 (1), p. 11-27.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Equipamientos de interpretación',
      significado:
        'Son las infraestructuras y los soportes materiales, fijos o móviles, de diverso grado de complejidad, para atender al visitante. Por sí solos no entregan interpretación, no obstante, los equipamientos interpretativos deben contar con medios o servicios interpretativos, en cuyo caso sí habrá entrega de un mensaje en ellos (Morales Miranda, 2008).',
    },
    {
      termino: 'Interpretación',
      significado:
        'Es una forma de comunicación estratégica, es decir, una forma planificada y consciente de dirigir mensajes a un determinado público del que se espera una respuesta (TURyDES, 2010).',
    },
    {
      termino: '<em>In situ</em>',
      significado: 'Se desarrolla en el lugar (RAE, 2021).',
    },
    {
      termino: 'Medios interactivos',
      significado:
        'Son aquellos que permiten que el visitante elija y ‘navegue’ entre varias opciones, que varían su presentación de acuerdo a lo que los diseñadores presuponen sobre las preguntas, respuestas y necesidades del visitante. la interactividad, como acción recíproca entre dos partes, debe permitir que exista la posibilidad de que dos sujetos de comunicación intercambien pareceres, de ida y vuelta;  esto sólo lo puede hacer una exhibición con soporte informático, sin embargo, la máxima expresión de la interactividad en interpretación es la relación que se establece entre el visitante y el intérprete( Morales Miranda, 2008).',
    },
    {
      termino: 'Medios interpretativos',
      significado:
        'Son los ‘vehículos’ a través de los cuales se transmite un mensaje interpretativo al visitante. Pueden ser “atendidos por personal”, que contemplan una interacción entre el público y una persona que es guía o intérprete; o bien, “no atendidos”, es decir, aquellos servicios que no utilizan personal directamente, sino objetos, artilugios o aparatos. (a estos últimos también se les denomina medios autónomos o auto guiados) (Morales Miranda, 2008).',
    },
    {
      termino: 'Plan de interpretación',
      significado:
        'Es el documento que servirá de referencia para el desarrollo interpretativo por todos los individuos u organismos implicados en la presentación del patrimonio a los visitantes. Será una guía que oriente el desarrollo específico de los mensajes interpretativos, y la ubicación de los medios e instalaciones; servirá para indicar qué tipo de investigación es necesaria o qué tipo de material habrá que conseguir. El plan debe resolver qué hay que transmitir, a quién, dónde y cómo (Morales Miranda, 2008).',
    },
    {
      termino: 'Planificación interpretativa',
      significado:
        'Es un proceso que analiza la necesidad de programas, servicios, medios y personal para transmitir mensajes (el significado del sitio) a los visitantes de parques u otros lugares con importancia patrimonial. Define objetivos y examina diversas opciones y alternativas, consiste fundamentalmente en estas cuatro tareas: 1) reunir toda la información posible acerca del recurso a interpretar, y luego analizarla; 2) realizar un estudio del usuario y sus características; 3) seleccionar las ideas esenciales que constituirán los mensajes interpretativos; y 4) seleccionar y desarrollar los métodos y los medios que mejor transmitan el mensaje del lugar al público. Todo ello se plasma en un plan de interpretación (Peñate Villasante, 2018).',
    },
    {
      termino: 'Rótulo interpretativo',
      significado:
        'Superficie de tamaño y diseño variables, en la que se integra un mensaje interpretativo con texto y/o ilustraciones. Otras denominaciones que recibe: paneles, carteles, señales, letreros, cédulas, etc. ',
    },
    {
      termino: 'Servicio de interpretación',
      significado:
        'Es una denominación interna para la unidad de gestión que engloba a todas las actuaciones y funciones relativas a la interpretación. El componente fundamental lo constituyen los trabajadores del servicio (Morales Miranda, 2008).',
    },
    {
      termino: 'Servicios interpretativos',
      significado:
        'Dentro de este concepto quedan comprendidos los medios de comunicación, las estructuras, los programas, las tareas y la organización de la administración de un área o lugar, para transmitir el significado del sitio al público de forma interpretativa (Morales Miranda, 2008).',
    },
    {
      termino: 'Técnicas ',
      significado:
        'Conjunto de procedimientos o recursos que se usan en un arte, en una ciencia o en una actividad determinada, en especial cuando se adquieren por medio de su práctica y requieren habilidad (Diccionario <em>Oxford Languages</em>, s.f.)',
    },
  ],
  complementario: [
    {
      tema: 'Interpretación y plan para el servicio guiado ',
      referencia:
        'PUP, Global Heritage Consortium. (2013). Pasos para el desarrollo de una presentación interpretativa. ',
      tipo: 'Cartilla',
      link:
        '/downloads/Anexo_2_Material_tecnicas_y_estructuras_de_interpretacion.pdf',
    },
    {
      tema: 'Mapa de empatía',
      referencia:
        'RD, Station. (s.f.). Mapa de Empatía: qué es y cómo hacerlo en 6 pasos. ',
      tipo: 'Web',
      link: 'https://www.rdstation.com/es/blog/mapa-de-empatia/',
    },
    {
      tema: 'Propuesta de Valor',
      referencia:
        'Oller, E. (2015). Diseñando la Propuesta de Valor/ El Lienzo. [Video]. YouTube. ',
      tipo: 'Video Youtube',
      link: 'https://www.youtube.com/watch?v=ZCJC1hI6qWQ',
    },
    {
      tema: 'Propuesta de valor para cliente.  Representación ',
      referencia:
        'INGROUP – INCIPY. (2016).  Plantilla Lienzo de Propuesta de Valor. ',
      tipo: 'Site',
      link:
        'https://www.incipy.com/descarga-plantilla-lienzo-de-propuesta-de-valor/',
    },
    {
      tema: 'Planificación interpretativa',
      referencia:
        'Ministerio de Comercio Exterior y Turismo. (2010).  Guías técnicas de proyectos de ecoturismo. Guía de Interpretación del Patrimonio Natural y Cultural. ',
      tipo: 'Cartilla',
      link:
        'https://www.mincetur.gob.pe/wp-content/uploads/documentos/turismo/consultorias/directoriosManuales/Guias-Interpretacion-Patrimonio-Cultural.pdf ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Carlos Rubiano Reyes',
        cargo: 'Instructor',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Raúl Javier Hernández Salgado ',
        cargo: 'Instructor',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Hernán Darío García González',
        cargo: 'Instructor ',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Hernández ',
        cargo: 'Instructor ',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Villamizar R',
        cargo: 'Profesional diseño y desarrollo instruccional',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Luisa Fernanda Posada Hincapié',
        cargo: 'Experto temático',
        centro: 'Centro de Comercio, Industria y Turismo - Regional Quindío',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Alix Cecila Chinchilla Rueda',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño  y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios  - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
