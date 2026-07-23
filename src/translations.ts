/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, CaseStudy, TimelineEvent, BlogPost, Testimonial, Certificate } from './types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    period: '2021 - Present',
    company: 'Bolivia TV (Canal Estatal)',
    roleEs: 'Responsable de los archivos del área de prensa',
    roleEn: 'Head of Press Area Archives',
    descriptionEs: 'Responsable de la organización, preservación y gestión integral de los archivos del área de prensa para la red nacional estatal.',
    descriptionEn: 'Responsible for the organization, preservation, and comprehensive management of the press area archives for the national state television network.',
    achievementsEs: [
      'Gestión y organización del área de archivos digitales, asegurando la preservación y accesibilidad del material audiovisual institucional.',
      'Edición y post-producción ágil de reportajes de investigación bajo alta presión horaria.',
      'Modernización de los flujos de trabajo digitales de captura, catalogación y archivo de video.'
    ],
    achievementsEn: [
      'Management and organization of the digital file area, ensuring preservation and accessibility of institutional audiovisual material.',
      'Fast-paced editing and post-production of investigative reports under tight deadlines.',
      'Modernization of digital workflows for video capture, cataloging and archiving.'
    ],
    logoPlaceholder: 'BTV'
  },
  {
    id: '2',
    period: '2020',
    company: 'Red Uno de Bolivia (Canal 11)',
    roleEs: 'Camarógrafo de Prensa y Unidades Móviles',
    roleEn: 'News and Mobile Unit Cameraman',
    descriptionEs: 'Operación de cámaras de exteriores para el noticiero central "Notivisión" y cobertura inmediata de eventos políticos y de orden social en vivo.',
    descriptionEn: 'Camera operator for outdoor environments for "Notivisión" main news program, covering real-time political and breaking social events.',
    achievementsEs: [
      'Despliegue y operación exitosa en unidades móviles de transmisión satelital (SNG).',
      'Registro de acontecimientos de alto impacto social con encuadres y narrativa estables bajo condiciones extremas.'
    ],
    achievementsEn: [
      'Successful deployment and operation of satellite news gathering (SNG) mobile units.',
      'Recording of high-impact social events with steady framing and strong narrative pacing under extreme conditions.'
    ],
    logoPlaceholder: 'Uno'
  },
  {
    id: '3',
    period: '2016 - 2020',
    company: 'Abya Yala Televisión (Canal 41)',
    roleEs: 'Post Productor y Camarógrafo Editor',
    roleEn: 'Post Producer and Camera Editor',
    descriptionEs: 'Liderazgo en la producción de reportajes de largo aliento con un fuerte enfoque cultural y de derechos humanos. Ganador del Premio Nacional de Periodismo Eduardo Abaroa 2017 durante esta etapa.',
    descriptionEn: 'Led the production of long-form reports with a deep focus on cultural heritage and human rights. Won the national Eduardo Abaroa Journalism Award 2017 during this tenure.',
    achievementsEs: [
      'Director y editor del reportaje de investigación "La Estrella", galardonado con el Premio Nacional Eduardo Abaroa 2017.',
      'Producción de más de 30 piezas documentales de televisión enfocadas en el rescate de la historia y tradiciones bolivianas.',
      'Control de calidad y corrección de color de la programación del canal.'
    ],
    achievementsEn: [
      'Director and editor of the investigative piece "La Estrella", winning the 2017 National Eduardo Abaroa Award.',
      'Produced more than 30 TV documentaries centered on rescuing Bolivian history and folklore.',
      'Handled quality control and color grading for the entire channel program lineup.'
    ],
    logoPlaceholder: 'AY'
  },
  {
    id: '4',
    period: '2014 - 2016',
    company: 'RTP - Red de la Tres Patrias (Canal 4)',
    roleEs: 'Camarógrafo y Editor de Prensa',
    roleEn: 'News Cameraman and Video Editor',
    descriptionEs: 'Cobertura de calle diaria y edición de notas periodísticas en la emblemática red RTP, reconocida por su estrecho contacto con las clases populares de Bolivia.',
    descriptionEn: 'Daily street-level coverage and news editing for the iconic RTP network, widely recognized for its deep social bond with Bolivian communities.',
    achievementsEs: [
      'Desarrollo de un estilo visual empático y respetuoso para el tratamiento de noticias sociales comunitarias.',
      'Edición veloz y sincronizada con el equipo de reporteros en salas de redacción.'
    ],
    achievementsEn: [
      'Developed an empathetic and respectful visual style for community and social news coverage.',
      'Achieved rapid, synchronized editing workflows alongside field reporters in the newsroom.'
    ],
    logoPlaceholder: 'RTP'
  },
  {
    id: '5',
    period: '2011 - 2013',
    company: 'Gigavisión (Canal 21)',
    roleEs: 'Camarógrafo de Exteriores y Unidad Móvil',
    roleEn: 'Field and Mobile Unit Cameraman',
    descriptionEs: 'Periodismo de investigación y cobertura en vivo de carácter político y judicial. Registro continuo en campo.',
    descriptionEn: 'Investigative journalism and live coverage of political and judicial trials. Continuous field recording.',
    achievementsEs: [
      'Participación activa en el seguimiento de hitos históricos de la política boliviana.',
      'Operación de cámaras portátiles de hombro en ambientes congestionados con alta aglomeración de personas.'
    ],
    achievementsEn: [
      'Active participation in tracking historic turning points in Bolivian politics.',
      'Expert handling of shoulder-mounted field cameras in dense crowds and high-pressure zones.'
    ],
    logoPlaceholder: 'Giga'
  },
  {
    id: '6',
    period: '2011',
    company: 'Agencia de Comunicación Nexo',
    roleEs: 'Productor Audiovisual y Editor Creativo',
    roleEn: 'Audiovisual Producer and Creative Editor',
    descriptionEs: 'Creación de spots publicitarios, videos institucionales de capacitación y campañas de concientización social para organismos no gubernamentales.',
    descriptionEn: 'Creation of commercial spots, institutional training videos, and social awareness campaigns for non-governmental organizations.',
    achievementsEs: [
      'Diseño y post-producción de comerciales dinámicos con efectos visuales básicos y gráficos en movimiento.',
      'Conceptualización de guiones técnicos y de encuadre en pre-producción.'
    ],
    achievementsEn: [
      'Designed and edited dynamic commercials featuring fundamental visual effects and motion graphics.',
      'Drafted technical and framing scripts during the pre-production phases.'
    ],
    logoPlaceholder: 'Nexo'
  },
  {
    id: '7',
    period: '2010 - 2011',
    company: 'Paceñísima TV (Canal 33)',
    roleEs: 'Camarógrafo de Estudio y Asistente Técnico',
    roleEn: 'Studio Cameraman and Technical Assistant',
    descriptionEs: 'Inicios profesionales en televisión abierta. Operación de cámaras fijas de estudio, iluminación básica, microfoneo y asistencia técnica general.',
    descriptionEn: 'Beginning of professional career in broadcast television. Operated fixed studio cameras, basic lighting setups, mic-ing, and overall technical assistance.',
    achievementsEs: [
      'Dominio inicial del lenguaje televisivo tradicional bajo dirección en vivo por intercomunicador.',
      'Asistencia en la configuración del switcher de video y sistemas de playout.'
    ],
    achievementsEn: [
      'Mastery of traditional TV visual language under live intercom direction from the control room.',
      'Assisted in configuring video switcher configurations and playout broadcast systems.'
    ],
    logoPlaceholder: 'Ptv'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Abya Yala Televisión (2019)',
    roleEs: 'Memorándum de Felicitación',
    roleEn: 'Official Commendation Memorandum',
    companyEs: 'Canal 41 - Gerencia de Informaciones',
    companyEn: 'Channel 41 - News Management',
    textEs: 'Otorgado por ser premiado en el XI Concurso de reportajes periodísticos, organizado por la Fundación Viva y Católicas por el derecho a decidir.',
    textEn: 'Awarded in recognition of being prized in the XI Journalism Reporting Contest, organized by the Viva Foundation and Católicas por el derecho a decidir.'
  },
  {
    id: '2',
    name: 'Abya Yala Televisión (2019)',
    roleEs: 'Memorándum de Felicitación',
    roleEn: 'Official Commendation Memorandum',
    companyEs: 'Canal 41 - Dirección General',
    companyEn: 'Channel 41 - General Management',
    textEs: 'Otorgado por obtener el prestigioso Premio Plurinacional Eduardo Abaroa 2017 en la categoría de Periodismo Cultural.',
    textEn: 'Awarded for obtaining the prestigious 2017 Eduardo Abaroa National Award in the Cultural Journalism category.'
  },
  {
    id: '3',
    name: 'Abya Yala Televisión (2019)',
    roleEs: 'Memorándum de Felicitación',
    roleEn: 'Official Commendation Memorandum',
    companyEs: 'Canal 41 - En colaboración con Prensa Latina',
    companyEn: 'Channel 41 - In collaboration with Prensa Latina',
    textEs: 'Resaltando el sobresaliente trabajo y participación en el documental "Médicos en el Tipnis", desarrollado en colaboración con la Agencia Informativa Latinoamericana Prensa Latina.',
    textEn: 'Highlighting the outstanding work and participation in the documentary "Médicos en el Tipnis", developed in collaboration with the Latin American News Agency Prensa Latina.'
  },
  {
    id: '4',
    name: 'Canal 4 RTP (2015)',
    roleEs: 'Memorándum de Felicitación',
    roleEn: 'Official Commendation Memorandum',
    companyEs: 'Radiodifusoras Populares - Jefatura de Prensa',
    companyEn: 'Radiodifusoras Populares - News Department',
    textEs: 'Otorgado por el impecable trabajo desempeñado durante la cobertura del Referéndum de 2015, cobertura realizada en Riberalta.',
    textEn: 'Awarded for the impeccable work performed during the coverage of the 2015 Referendum, with field reporting done in Riberalta.'
  },
  {
    id: '5',
    name: 'Canal 4 RTP (2014)',
    roleEs: 'Memorándum de Felicitación',
    roleEn: 'Official Commendation Memorandum',
    companyEs: 'Radiodifusoras Populares - Dirección de Prensa',
    companyEn: 'Radiodifusoras Populares - News Direction',
    textEs: 'Otorgado por el excelente trabajo desempeñado en la cobertura y realización técnica de la Fastuosa Entrada del Señor Jesús del Gran Poder.',
    textEn: 'Awarded for the excellent work performed in the coverage and technical production of the Grand Entrance of Señor Jesús del Gran Poder.'
  }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    titleEs: 'Licenciatura en Comunicación (Título en Provisión Nacional)',
    titleEn: 'Bachelor Degree in Communication (National Degree)',
    issuer: 'Universidad de Aquino Bolivia (UDABOL)',
    year: '2018 - 2022',
    isPrimary: true
  },
  {
    id: '2',
    titleEs: 'Certificado de Competencias como Camarógrafo – Realizador',
    titleEn: 'Cameraman & Producer Professional Competence Certificate',
    issuer: 'Ministerio de Educación del Estado Plurinacional de Bolivia',
    year: '2019',
    isPrimary: true
  },
  {
    id: '3',
    titleEs: 'Técnico en Cinematografía (Realización Cinematográfica)',
    titleEn: 'Cinematography Degree (Regular Filmmaking Course)',
    issuer: 'Escuela Andina de Cinematografía – Fundación "Ukamau"',
    year: '2017',
    isPrimary: true
  },
  {
    id: '4',
    titleEs: 'Experto en Desarrollo Web "FullStack" (Avalado por la UAGRM)',
    titleEn: 'Expert in "FullStack" Web Development (Endorsed by UAGRM)',
    issuer: 'Centro Superior de Estudios "Crece" / Universidad Gabriel René Moreno',
    year: '2021',
    isPrimary: true
  },
  {
    id: '5',
    titleEs: 'Experto en Ciberseguridad (Avalado por la UAGRM)',
    titleEn: 'Expert in Cybersecurity (Endorsed by UAGRM)',
    issuer: 'Centro Superior de Estudios "Crece" / Universidad Gabriel René Moreno',
    year: '2021',
    isPrimary: true
  },
  {
    id: '6',
    titleEs: 'Especialización en Programación Back End (331 Horas)',
    titleEn: 'Back End Programming Specialization (331 Hours)',
    issuer: 'Alura Latam - One Oracle Next Education',
    year: '2023',
    isPrimary: false
  },
  {
    id: '7',
    titleEs: 'Experto en Fibra Óptica, GPON y Telecomunicaciones',
    titleEn: 'Expert in Fiber Optics, GPON & Telecoms',
    issuer: 'Redestel (Avalado por UPCET, UAGRM, CISI - SIB)',
    year: '2020',
    isPrimary: false
  },
  {
    id: '8',
    titleEs: 'Taller de Capacitación en Periodismo Móvil (MOJO)',
    titleEn: 'Mobile Journalism Training Workshop (MOJO)',
    issuer: 'Abya Yala Televisión / Redes Digitales',
    year: '2019',
    isPrimary: false
  },
  {
    id: '9',
    titleEs: 'Manejo de Redes Sociales y Radio Online en Periodismo',
    titleEn: 'Social Media Management & Online Radio for Journalism',
    issuer: 'Escuela de Gestión Pública Plurinacional (EGPP)',
    year: '2023',
    isPrimary: false
  },
  {
    id: '10',
    titleEs: 'Google News Initiative Training Center Certifications',
    titleEn: 'Google News Initiative Training Center Certifications',
    issuer: 'Google News Initiative (Data & Investigative Journalism)',
    year: '2020',
    isPrimary: false
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'documental-tipnis',
    title: 'Documental en el TIPNIS: Médico "Mi Salud"',
    titleEn: 'TIPNIS Documentary: "Mi Salud" Doctor',
    category: 'documental',
    categoryLabelEs: 'Documental',
    categoryLabelEn: 'Documentary',
    roleEs: 'Camarógrafo, Editor, Post Productor y Documentalista',
    roleEn: 'Cameraman, Editor, Post Producer and Documentarian',
    year: '2016',
    clientEs: 'Abya Yala Televisión',
    clientEn: 'Abya Yala Television',
    descriptionEs: 'Documental de una semana en el Territorio Indígena y Parque Nacional Isiboro Sécure (TIPNIS), siguiendo el trabajo sacrificado de un médico del programa "Mi Salud". Caminatas de 5 a 7 horas diarias con equipo cinematográfico para trasladarme de poblado en poblado, registrando la fauna, la selva y la atención médica en comunidades indígenas.',
    descriptionEn: 'One-week documentary in the Isiboro Sécure Indigenous Territory and National Park (TIPNIS), following the sacrificial work of a "Mi Salud" doctor. Daily 5 to 7-hour hikes with full cinema equipment moving from village to village, recording wildlife, jungle, and healthcare in indigenous communities.',
    imageUrl: '/images/portfolio/documental-tipnis/71892910_102277004515964_7113338652544991232_n.jpg',
    images: [
      '/images/portfolio/documental-tipnis/71892910_102277004515964_7113338652544991232_n.jpg',
      '/images/portfolio/documental-tipnis/71280215_102276897849308_17463186701680640_n.jpg',
      '/images/portfolio/documental-tipnis/71261838_102276721182659_2827440935904739328_n.jpg',
      '/images/portfolio/documental-tipnis/55908432_1192210604293708_6030766474568663040_n.jpg',
      '/images/portfolio/documental-tipnis/55849477_1192210704293698_1624014004626128896_n.jpg',
      '/images/portfolio/documental-tipnis/55717476_1192210687627033_8583848958349017088_n.jpg',
      '/images/portfolio/documental-tipnis/54524311_1192211967626905_5480115383337746432_n.jpg'
    ],
    isCaseStudy: false,
    techDetailsEs: ['Cámara Sony FS7', 'Lentes Sigma Cine Prime', 'Equipo de campamento y protección para equipo en selva', 'Grabadora de Audio y Micrófonos de Ambiente'],
    techDetailsEn: ['Sony FS7 Camera', 'Sigma Cine Prime Lenses', 'Camping gear and jungle equipment protection', 'Audio Recorder and Ambient Microphones']
  },
  {
    id: 'brasil-la-poderosa',
    title: 'La Poderosa: Derechos Humanos en Brasil',
    titleEn: 'La Poderosa: Human Rights in Brazil',
    category: 'cobertura-int',
    categoryLabelEs: 'Cobertura Internacional',
    categoryLabelEn: 'International Coverage',
    roleEs: 'Camarógrafo y Productor de Campo',
    roleEn: 'Field Cameraman and Producer',
    year: '2018',
    clientEs: 'Abya Yala Televisión',
    clientEn: 'Abya Yala Television',
    descriptionEs: 'Cobertura de un evento de derechos humanos y diversidad organizado por "La Poderosa" en Brasil. Reportaje sobre la lucha por los derechos sociales y la diversidad en comunidades vulnerables.',
    descriptionEn: 'Coverage of a human rights and diversity event organized by "La Poderosa" in Brazil. Report on the fight for social rights and diversity in vulnerable communities.',
    imageUrl: '/images/portfolio/brasil-la-poderosa/IMG_20100101_121356.webp',
    images: [
      '/images/portfolio/brasil-la-poderosa/IMG_20100101_113340.webp',
      '/images/portfolio/brasil-la-poderosa/IMG_20100101_121356.webp',
      '/images/portfolio/brasil-la-poderosa/IMG_20100101_132922.webp',
      '/images/portfolio/brasil-la-poderosa/IMG_20100101_132943.webp',
      '/images/portfolio/brasil-la-poderosa/IMG_20100101_133444.webp',
      '/images/portfolio/brasil-la-poderosa/IMG_20100101_141020.webp'
    ],
    techDetailsEs: ['Sony FS7', 'Lentes Zoom', 'Micrófonos Inalámbricos', 'Equipo de iluminación portátil'],
    techDetailsEn: ['Sony FS7', 'Zoom Lenses', 'Wireless Microphones', 'Portable Lighting Kit']
  },
  {
    id: 'la-estrella',
    title: 'La Estrella: Premio Eduardo Abaroa 2017',
    titleEn: 'La Estrella: Eduardo Abaroa Award 2017',
    category: 'cultural',
    categoryLabelEs: 'Periodismo Cultural',
    categoryLabelEn: 'Cultural Journalism',
    roleEs: 'Camarógrafo, Editor y Realizador',
    roleEn: 'Cameraman, Editor and Producer',
    year: '2017',
    clientEs: 'Abya Yala Televisión / Ganador Premio Eduardo Abaroa',
    clientEn: 'Abya Yala Television / Eduardo Abaroa Award Winner',
    descriptionEs: 'Reportaje ganador del Premio Nacional Eduardo Abaroa 2017. Un perfil íntimo sobre un destacado escultor y pintor alteño, documentando su proceso creativo, su taller y el impacto de su obra en la comunidad de El Alto.',
    descriptionEn: 'Award-winning report, National Eduardo Abaroa Prize 2017. An intimate profile of a renowned sculptor and painter from El Alto, documenting his creative process, workshop, and the impact of his work on the El Alto community.',
    imageUrl: '/images/portfolio/la-estrella/DSC_2990.webp',
    images: [
      '/images/portfolio/la-estrella/DSC_2990.webp',
      '/images/portfolio/la-estrella/DSC_2994.webp',
      '/images/portfolio/la-estrella/20170422_101455.webp',
      '/images/portfolio/la-estrella/20170422_101505.webp'
    ],
    isCaseStudy: true,
    caseStudyId: 'la-estrella-case',
    techDetailsEs: ['Cámara Sony FS7', 'Lentes Sigma Cine Prime', 'Iluminación de arte y taller', 'Edición en Adobe Premiere Pro'],
    techDetailsEn: ['Sony FS7 Camera', 'Sigma Cine Prime Lenses', 'Art and workshop lighting', 'Edited on Adobe Premiere Pro']
  },
  {
    id: 'gran-poder',
    title: 'Gran Poder: La Fiesta Mayor de La Paz',
    titleEn: 'Gran Poder: La Paz Grand Festival',
    category: 'cultural',
    categoryLabelEs: 'Cobertura Cultural',
    categoryLabelEn: 'Cultural Coverage',
    roleEs: 'Camarógrafo de Transmisión en Vivo',
    roleEn: 'Live Broadcast Cameraman',
    year: '2015-2019',
    clientEs: 'RTP',
    clientEn: 'RTP',
    descriptionEs: 'Cobertura especial de las entradas de la Festividad del Señor Jesús del Gran Poder en la ciudad de La Paz. Participé en la transmisión en vivo como camarógrafo, capturando la danza, los trajes y la devoción de una de las festividades más importantes de Bolivia.',
    descriptionEn: 'Special coverage of the entrances of the Lord Jesus of Gran Poder festival in La Paz city. I participated in live broadcast as a cameraman, capturing the dance, costumes, and devotion of one of Bolivia\'s most important festivities.',
    imageUrl: '/images/portfolio/gran-poder/DSC_1848.webp',
    images: [
      '/images/portfolio/gran-poder/DSC_1848.webp',
      '/images/portfolio/gran-poder/DSC_1852.webp',
      '/images/portfolio/gran-poder/DSC_1855.webp',
      '/images/portfolio/gran-poder/DSC_1866.webp',
      '/images/portfolio/gran-poder/DSC_1886.webp',
      '/images/portfolio/gran-poder/DSC_1890.webp',
      '/images/portfolio/gran-poder/DSC_1892.webp',
      '/images/portfolio/gran-poder/DSC_1898.webp',
      '/images/portfolio/gran-poder/DSC_1899.webp',
      '/images/portfolio/gran-poder/DSC_1904.webp'
    ],
    techDetailsEs: ['Cámara ENG Panasonic PX270', 'Sistema de Transmisión en Vivo', 'Micrófonos Inalámbricos', 'Equipo de Iluminación para exteriores'],
    techDetailsEn: ['Panasonic PX270 ENG Camera', 'Live Broadcast System', 'Wireless Microphones', 'Outdoor Lighting Equipment']
  },
  {
    id: 'world-atomic-week',
    title: 'World Atomic Week: Moscú, Rusia',
    titleEn: 'World Atomic Week: Moscow, Russia',
    category: 'cobertura-int',
    categoryLabelEs: 'Cobertura Internacional',
    categoryLabelEn: 'International Coverage',
    roleEs: 'Enviado Especial - Camarógrafo y Reportero',
    roleEn: 'Special Envoy - Cameraman and Reporter',
    year: '2024',
    clientEs: 'Bolivia TV',
    clientEn: 'Bolivia TV',
    descriptionEs: 'Fui enviado especial de Bolivia TV para cubrir el World Atomic Week en Moscú, Rusia. Durante la cobertura visitamos la primera planta de energía nuclear del mundo, universidades de prestigio y asistimos a este reconocido evento internacional sobre energía nuclear.',
    descriptionEn: 'I was sent as a special envoy for Bolivia TV to cover World Atomic Week in Moscow, Russia. During the coverage we visited the world\'s first nuclear power plant, prestigious universities, and attended this internationally recognized nuclear energy event.',
    imageUrl: '/images/portfolio/world-atomic-week/_DSC0014.webp',
    images: [
      '/images/portfolio/world-atomic-week/_DSC0014.webp',
      '/images/portfolio/world-atomic-week/_DSC0266.webp',
      '/images/portfolio/world-atomic-week/_DSC0294.webp',
      '/images/portfolio/world-atomic-week/_DSC0312.webp',
      '/images/portfolio/world-atomic-week/_DSC0364.webp',
      '/images/portfolio/world-atomic-week/_DSC0381.webp',
      '/images/portfolio/world-atomic-week/_DSC0427.webp'
    ],
    techDetailsEs: ['Cámara ENG', 'Micrófonos Inalámbricos', 'Equipo de Iluminación Portátil', 'Sistema de Transmisión'],
    techDetailsEn: ['ENG Camera', 'Wireless Microphones', 'Portable Lighting Kit', 'Transmission System']
  },
  {
    id: 'aniversario-potosi',
    title: 'Documental: Aniversario de Potosí',
    titleEn: 'Documentary: Potosí Anniversary',
    category: 'documental',
    categoryLabelEs: 'Documental',
    categoryLabelEn: 'Documentary',
    roleEs: 'Camarógrafo y Editor',
    roleEn: 'Cameraman and Editor',
    year: '2017',
    clientEs: 'Abya Yala Televisión',
    clientEn: 'Abya Yala Television',
    descriptionEs: 'Documental realizado por el aniversario de Potosí, registrando la historia, la cultura y la vida en una de las ciudades más emblemáticas de Bolivia.',
    descriptionEn: 'Documentary made for the Potosí anniversary, recording the history, culture and life in one of Bolivia\'s most emblematic cities.',
    imageUrl: '/images/portfolio/aniversario-potosi/Canon PowerShot SX40 HS1598.webp',
    images: [
      '/images/portfolio/aniversario-potosi/Canon PowerShot SX40 HS1598.webp',
      '/images/portfolio/aniversario-potosi/Canon PowerShot SX40 HS1602.webp',
      '/images/portfolio/aniversario-potosi/Canon PowerShot SX40 HS1605.webp',
      '/images/portfolio/aniversario-potosi/Canon PowerShot SX40 HS1609.webp',
      '/images/portfolio/aniversario-potosi/Canon PowerShot SX40 HS2906.webp',
      '/images/portfolio/aniversario-potosi/Canon PowerShot SX40 HS3323.webp',
      '/images/portfolio/aniversario-potosi/Canon PowerShot SX40 HS3324.webp',
      '/images/portfolio/aniversario-potosi/Canon PowerShot SX40 HS7085.webp'
    ],
    techDetailsEs: ['Cámara Canon PowerShot SX40 HS', 'Micrófonos de Ambiente', 'Iluminación Portátil', 'Equipo de Grabación'],
    techDetailsEn: ['Canon PowerShot SX40 HS Camera', 'Ambient Microphones', 'Portable Lighting', 'Recording Equipment']
  },
  {
    id: 'che-la-higuera',
    title: '50 Años del Che en La Higuera',
    titleEn: '50 Years of Che in La Higuera',
    category: 'cultural',
    categoryLabelEs: 'Reportaje Histórico',
    categoryLabelEn: 'Historical Report',
    roleEs: 'Camarógrafo y Reportero',
    roleEn: 'Cameraman and Reporter',
    year: '2017',
    clientEs: 'Abya Yala Televisión',
    clientEn: 'Abya Yala Television',
    descriptionEs: 'Reportaje sobre el 50 aniversario de la muerte del Che Guevara en La Higuera, Bolivia. Cobertura de los actos conmemorativos, entrevistas y registro del lugar histórico.',
    descriptionEn: 'Report on the 50th anniversary of Che Guevara\'s death in La Higuera, Bolivia. Coverage of the commemorative events, interviews and documentation of the historical site.',
    imageUrl: '/images/portfolio/che-la-higuera/20171007_112016.webp',
    images: [
      '/images/portfolio/che-la-higuera/20171007_112016.webp',
      '/images/portfolio/che-la-higuera/20171007_114748.webp',
      '/images/portfolio/che-la-higuera/20171007_210749.webp',
      '/images/portfolio/che-la-higuera/20171008_201317.webp',
      '/images/portfolio/che-la-higuera/20171009_154307.webp',
      '/images/portfolio/che-la-higuera/20171011_081825.webp'
    ],
    techDetailsEs: ['Cámara Sony', 'Micrófonos Inalámbricos', 'Equipo de Iluminación', 'Grabadora de Audio'],
    techDetailsEn: ['Sony Camera', 'Wireless Microphones', 'Lighting Equipment', 'Audio Recorder']
  },
  {
    id: 'trinidad-bolivia',
    title: 'Reportaje en Trinidad: Aniversario de Bolivia',
    titleEn: 'Report in Trinidad: Bolivia Anniversary',
    category: 'cultural',
    categoryLabelEs: 'Reportaje Cultural',
    categoryLabelEn: 'Cultural Report',
    roleEs: 'Camarógrafo y Reportero',
    roleEn: 'Cameraman and Reporter',
    year: '2018',
    clientEs: 'Abya Yala Televisión',
    clientEn: 'Abya Yala Television',
    descriptionEs: 'Reportaje realizado en Trinidad, Beni, por el aniversario de Bolivia. Cobertura de las festividades, la cultura beniana y las tradiciones de la región.',
    descriptionEn: 'Report made in Trinidad, Beni, for Bolivia\'s anniversary. Coverage of festivities, Beni culture and traditions of the region.',
    imageUrl: '/images/portfolio/trinidad-bolivia/IMG-20190805-WA0024.webp',
    images: [
      '/images/portfolio/trinidad-bolivia/IMG-20190805-WA0024.webp',
      '/images/portfolio/trinidad-bolivia/IMG-20190805-WA0025.webp',
      '/images/portfolio/trinidad-bolivia/IMG-20190805-WA0026.webp',
      '/images/portfolio/trinidad-bolivia/PSX_20190805_102454 1.webp',
      '/images/portfolio/trinidad-bolivia/PSX_20190807_085847 1.webp',
      '/images/portfolio/trinidad-bolivia/PSX_20190807_090011 1.webp'
    ],
    techDetailsEs: ['Cámara Sony', 'Micrófonos', 'Equipo de Grabación Portátil', 'Sistema de Transmisión'],
    techDetailsEn: ['Sony Camera', 'Microphones', 'Portable Recording Equipment', 'Transmission System']
  },
  {
    id: 'plantas-energia',
    title: 'Inauguraciones de Plantas de Energía y Gas',
    titleEn: 'Energy and Gas Plant Inaugurations',
    category: 'politica',
    categoryLabelEs: 'Cobertura Política',
    categoryLabelEn: 'Political Coverage',
    roleEs: 'Camarógrafo y Editor',
    roleEn: 'Cameraman and Editor',
    year: '2014-2019',
    clientEs: 'RTP',
    clientEn: 'RTP',
    descriptionEs: 'Cobertura de la inauguración y entrega de plantas de energía y gas en distintas regiones de Bolivia. Registro de los actos oficiales, entrevistas y documentación de la infraestructura energética del país.',
    descriptionEn: 'Coverage of the inauguration and delivery of energy and gas plants in different regions of Bolivia. Recording of official events, interviews and documentation of the country\'s energy infrastructure.',
    imageUrl: '/images/portfolio/plantas-energia/GT-I91902764.webp',
    images: [
      '/images/portfolio/plantas-energia/GT-I91902764.webp',
      '/images/portfolio/plantas-energia/HXR-NX70N4585.webp',
      '/images/portfolio/plantas-energia/HXR-NX70N4742.webp',
      '/images/portfolio/plantas-energia/HXR-NX70N627.webp',
      '/images/portfolio/plantas-energia/HXR-NX70N633.webp',
      '/images/portfolio/plantas-energia/HXR-NX70N635.webp',
      '/images/portfolio/plantas-energia/LT29i2339.webp'
    ],
    techDetailsEs: ['Cámara Sony NX70', 'Micrófonos Inalámbricos', 'Sistema de Transmisión', 'Equipo de Iluminación'],
    techDetailsEn: ['Sony NX70 Camera', 'Wireless Microphones', 'Transmission System', 'Lighting Equipment']
  }
];

export const caseStudies: Record<string, CaseStudy> = {
  'la-estrella-case': {
    id: 'la-estrella-case',
    title: 'La Estrella: Premio Eduardo Abaroa 2017',
    titleEn: 'La Estrella: Eduardo Abaroa Award 2017',
    subtitleEs: 'Ganador del Premio Plurinacional Eduardo Abaroa 2017 en Periodismo Cultural',
    subtitleEn: 'Winner of the 2017 Eduardo Abaroa National Award in Cultural Journalism',
    contextEs: 'El reportaje "La Estrella" nació de la necesidad de visibilizar el talento oculto de la ciudad de El Alto. Viajé al taller de un destacado escultor y pintor alteño, un artista autodidacta que había ganado reconocimiento internacional pero era casi ignorado por los medios tradicionales. El reportaje documenta su proceso creativo, desde el boceto inicial hasta la obra terminada, y el impacto de su arte en la comunidad.',
    contextEn: 'The report "La Estrella" was born from the need to give visibility to the hidden talent of El Alto city. I traveled to the workshop of a renowned sculptor and painter from El Alto, a self-taught artist who had gained international recognition but was almost ignored by traditional media. The report documents his creative process, from initial sketch to finished work, and the impact of his art on the community.',
    challengesEs: 'El principal desafío fue capturar la esencia del proceso artístico en un espacio de trabajo reducido y con iluminación mixta (luz natural y artificial del taller). Además, el artista era reservado y no se sentía cómodo frente a cámara, por lo que tuve que ganarme su confianza durante varios días antes de poder registrar su trabajo de manera natural y espontánea.',
    challengesEn: 'The main challenge was capturing the essence of the artistic process in a small workspace with mixed lighting (natural and artificial workshop light). Additionally, the artist was reserved and uncomfortable in front of the camera, so I had to earn his trust over several days before being able to record his work naturally and spontaneously.',
    solutionsEs: 'Utilicé iluminación LED compacta con difusores para respetar el ambiente íntimo del taller sin invadir visualmente. Opté por un lente prime 50mm f/1.4 para lograr tomas con poca profundidad de campo que aislaran al artista de su entorno y centraran la atención en sus manos y su obra. Grabé en varias jornadas para que el artista se acostumbrara a la presencia de la cámara y actuara con naturalidad.',
    solutionsEn: 'I used compact LED lighting with diffusers to respect the intimate atmosphere of the workshop without visual intrusion. I chose a 50mm f/1.4 prime lens for shallow depth-of-field shots that isolated the artist from his surroundings and focused attention on his hands and his work. I filmed over several sessions so the artist would get used to the camera\'s presence and act naturally.',
    resultEs: 'El reportaje de 15 minutos fue galardonado con el Premio Nacional de Periodismo Eduardo Abaroa de Bolivia en 2017 en la categoría de Periodismo Cultural. El jurado destacó la sensibilidad en el retrato del artista, la calidad cinematográfica de las tomas del proceso creativo y la narrativa que lograba conectar al espectador con el valor del arte popular. Fue transmitido por Abya Yala Televisión y re-transmitido por otras cadenas culturales del país.',
    resultEn: 'The 15-minute report was awarded the National Eduardo Abaroa Journalism Prize of Bolivia in 2017 in the Cultural Journalism category. The jury highlighted the sensitivity in portraying the artist, the cinematic quality of the creative process shots, and the narrative that connected viewers with the value of popular art. It was broadcast by Abya Yala Television and re-broadcast by other cultural networks in the country.',
    roleEs: 'Camarógrafo, Editor y Realizador',
    roleEn: 'Cameraman, Editor and Producer',
    teamEs: 'Freddy Ticona (Cámara, Edición y Realización)',
    teamEn: 'Freddy Ticona (Camera, Editing and Production)',
    hardwareEs: ['Sony FS7', 'Lente Prime 50mm f/1.4', 'Iluminación LED Compacta con Difusores', 'Micrófono de Cañón', 'Grabadora Tascam'],
    hardwareEn: ['Sony FS7', 'Prime 50mm f/1.4 Lens', 'Compact LED Lighting with Diffusers', 'Shotgun Microphone', 'Tascam Recorder'],
    softwareEs: ['Adobe Premiere Pro (Edición)', 'DaVinci Resolve Studio (Corrección de color)'],
    softwareEn: ['Adobe Premiere Pro (Editing)', 'DaVinci Resolve Studio (Color Grading)'],
    awardEs: 'Premio Nacional Eduardo Abaroa 2017 (Categoría: Periodismo Cultural)',
    awardEn: 'Eduardo Abaroa National Award 2017 (Category: Cultural Journalism)',
    imageUrl: '/images/portfolio/la-estrella/DSC_2989.webp',
    btsImages: [
      {
        url: '/images/portfolio/la-estrella/20170422_101505.webp',
        captionEs: 'Freddy en el taller del artista durante la grabación de "La Estrella".',
        captionEn: 'Freddy at the artist\'s workshop during the filming of "La Estrella".'
      },
      {
        url: '/images/portfolio/la-estrella/DSC_2994.webp',
        captionEs: 'Post-producción y corrección de color en estudio.',
        captionEn: 'Post-production and color grading in the studio.'
      }
    ]
  }
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'detras-de-camaras-la-estrella',
    titleEs: 'Detrás de cámaras de "La Estrella": Cómo grabamos bajo cero en el Altiplano',
    titleEn: 'Behind the scenes of "La Estrella": Filming sub-zero on the Altiplano',
    excerptEs: 'Reflexiones y trucos técnicos sobre cómo proteger el equipamiento cinematográfico del frío extremo, filmar las estrellas a gran altitud y lograr entrevistas emotivas en la Bolivia profunda.',
    excerptEn: 'Reflections and technical tips on how to insulate cinema gear from freezing cold, record starry skies at high altitude, and obtain deep, touching interviews in rural Bolivia.',
    contentEs: `### Detrás del Lente: La Aventura de "La Estrella"

Grabar un documental a más de 4,100 metros sobre el nivel del mar es un desafío que pone a prueba tanto la resistencia física del equipo como la tolerancia del material tecnológico. Cuando el termómetro marca -12°C por la noche en la provincia Pacajes de La Paz, las reglas de la filmación cambian radicalmente.

#### El Desafío del Frío en las Baterías de Litio

Cualquier realizador audiovisual sabe que el litio es enemigo del frío. Una batería que normalmente rinde 2 horas en estudio, a -10°C puede descargarse por completo en escasos 15 o 20 minutos. El voltaje cae súbitamente y la cámara se apaga a mitad de una toma crucial.

**La solución que aplicamos:**
Creamos fundas de neopreno personalizadas con bolsillos internos diseñados para albergar calentadores químicos de manos (los que usan los andinistas). Estos parches calóricos mantuvieron las baterías de la Sony FS7 a una temperatura constante de 15°C, garantizando su rendimiento normal durante las 8 horas de rodaje nocturno.

#### Capturando el Cielo del Altiplano: Astrofotografía Cinematográfica

El Altiplano boliviano posee uno de los cielos más limpios del planeta, libre de contaminación lumínica. Queríamos que las estrellas fueran un personaje activo en el reportaje.

Para lograr los timelapses de la Vía Láctea girando sobre la escuelita rural, utilizamos una Sony A7S II, célebre por su sensor optimizado para luz baja. Configuramos el obturador a 25 segundos, ISO 3200 y una apertura de f/1.8 en un lente prime. El resultado fue espectacular: la cúpula estelar brillando con total definición, sirviendo como metáfora visual del nombre del reportaje y el deseo de superación de los niños.

#### La Sensibilidad detrás de la Entrevista

El periodismo no es solo técnica; es empatía. Encontrarnos con niños del Altiplano, cuya lengua materna suele ser el aymara, requiere paciencia y respeto. En lugar de avasallarlos con un lente gigantesco de frente, colocamos la cámara a una distancia prudente usando un teleobjetivo (lente 85mm f/1.4), lo que les dio espacio para olvidarse de la cámara y conversar con total sinceridad con el reportero.

Esta experiencia nos demostró que la tecnología debe estar al servicio de la narrativa y la emoción humana. Sin esa conexión, el plano más nítido sigue estando vacío.`,
    contentEn: `### Behind the Lens: The Adventure of "La Estrella"

Filming a documentary over 4,100 meters above sea level is a trial that tests both physical stamina and camera hardware endurance. When the mercury falls to -12°C (10°F) in La Paz, the standard rules of videography change instantly.

#### The Battle Against Freezing Lithium Batteries

Every filmmaker knows lithium batteries hate cold. A power pack that normally runs for 2 hours in a cozy studio can drain completely in 15 minutes in mountain environments. The voltage drops, turning off the camera in the middle of an essential interview.

**Our applied solution:**
We built custom neoprene pouches with inner slots to hold chemical hand warmers (the ones mountain climbers use). These heat packs kept the Sony FS7 batteries at a steady 15°C (59°F), sustaining normal runtimes during 8 hours of nocturnal shooting.

#### Capturing the Altiplano Sky: Cinematic Astrophotography

The Bolivian Altiplano holds some of the cleanest night skies on Earth, free of light pollution. We wanted the stars to act as a prominent character in the film.

To secure the Milky Way rotating above the tiny rural schoolhouse, we used a Sony A7S II, famous for its high-ISO, low-light performance. We configured 25-second exposures, ISO 3200, and f/1.8 on a fast prime lens. The outcome was breathtaking: the starry dome shining in full definition, serving as a powerful visual metaphor for the school's title and children's dreams.

#### Empathy in Field Journalism

Journalism is not just raw tech; it is deep empathy. Sitting down with Altiplano children, whose primary language is often Aymara, demands patient listening. Instead of crowding their personal space with giant lenses, we stood back and shot with a medium-telephoto lens (85mm f/1.4). This distance helped them forget the equipment and share their genuine thoughts.

This project proved that technical skill must serve narrative and human emotion. Without that core link, even the sharpest footage remains empty.`,
    date: '2026-05-12',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: '/images/freddy_profile.webp',
    categoryEs: 'Detrás de Cámaras',
    categoryEn: 'Behind The Scenes',
    enableComments: true
  },
  {
    id: '2',
    slug: 'evolucion-televisiva-bolivia-analogo-digital',
    titleEs: '15 Años en la TV Boliviana: Mi viaje del formato análogo al flujo digital e IP',
    titleEn: '15 Years in Bolivian TV: My journey from analog tapes to digital and IP workflows',
    excerptEs: 'Una mirada reflexiva sobre la transformación de las salas de prensa en La Paz. De cargar casetes Betacam a la inmediatez de la transmisión por mochilas 4G/5G y flujos en la nube.',
    excerptEn: 'A reflective perspective on the transformation of newsrooms in La Paz. From carrying heavy Betacam cassettes to the immediacy of 4G/5G backpacks and cloud workflows.',
    contentEs: `### La Evolución de un Oficio: De las Cintas al Bitrate

Cuando pisé por primera vez un estudio de televisión en La Paz allá por el año 2010, el panorama técnico era radicalmente distinto. Estábamos en plena transición entre el mundo analógico de las cintas magnéticas y los primeros sistemas de almacenamiento digital en tarjetas de memoria.

#### La Era del Betacam y los Hombros Fuertes

En Paceñísima TV y mis primeros meses en Gigavisión, aún nos tocaba salir a cubrir prensa cargando cámaras ENG que pesaban cerca de 10 kilogramos sobre el hombro, alimentadas por pesadas baterías de plomo. El almacenamiento se hacía en cintas Betacam SP o DVCAM. El proceso de edición implicaba "capturar" el video en tiempo real en la computadora mediante tarjetas capturadoras, lo que duplicaba el tiempo necesario para preparar una nota informativa.

Si la nota duraba 2 minutos, debíamos esperar 2 minutos para digitalizarla, más otros 10 minutos para renderizar y exportar. ¡La inmediatez era un lujo que requería un esfuerzo físico y de coordinación monumental!

#### La Revolución de las Tarjetas de Memoria y el Códec de Compresión

La llegada de tarjetas de estado sólido (P2 de Panasonic y SxS de Sony) eliminó el tiempo de captura. Podíamos simplemente insertar la tarjeta en la lectora y arrastrar el archivo directamente a la línea de tiempo de Premiere Pro. Esto recortó los tiempos de producción en un 70%.

Sin embargo, trajo nuevos desafíos: la gestión de datos. Ahora un camarógrafo también debía ser un "DIT" (Data Information Technician) responsable de asegurar copias de seguridad redundantes de archivos digitales que podían corromperse con un apagón repentino.

#### Unidades Móviles Satelitales vs. Mochilas de Transmisión IP (LiveU)

Uno de los saltos más asombrosos que he vivido en estos 15 años es la forma en que transmitimos señal en vivo desde exteriores. Antes, requeríamos desplegar camiones gigantescos equipados con antenas parabólicas satelitales que tomaban horas en calibrar y apuntar al satélite, con costos de banda ancha prohibitivos de cientos de dólares por minuto.

Hoy, para canales como Bolivia TV o Red Uno, salimos a la calle portando una mochila de transmisión IP (como LiveU o TVU) del tamaño de una mochila escolar. Estos equipos aglutinan (bond) la señal de hasta 6 módems de telefonía celular 4G/5G simultáneamente para crear un canal de subida ultra-estable capaz de transmitir video Full HD con latencia de menos de un segundo.

#### El Oficio Hoy: Un Camarógrafo Conectado

La tecnología avanza, pero el corazón del trabajo sigue siendo el mismo: encuadrar la realidad para informar con honestidad. No obstante, el realizador audiovisual moderno ya no puede limitarse a pulsar el botón de REC. Hoy debemos entender de redes IP, ciberseguridad para proteger nuestras transmisiones, flujos de edición colaborativa en la nube y optimización de video para múltiples formatos digitales.

Seguimos en camino, siempre aprendiendo, adaptando el ojo y la tecnología para contar las historias de nuestra gente boliviana con el mayor respeto profesional posible.`,
    contentEn: `### The Evolution of a Craft: From Tapes to Bitrate

When I first set foot in a TV studio in La Paz back in 2010, the technical environment was radically different. We were in the middle of transitioning from the analog world of magnetic tapes to early solid-state memory cards.

#### The Betacam Era and Strong Shoulders

At Paceñísima TV and my initial months at Gigavisión, we still had to cover news carrying ENG cameras that weighed nearly 10 kilograms (22 lbs) on our shoulders, powered by heavy lead batteries. Storage relied on Betacam SP or DVCAM tapes. Editing required "capturing" video in real-time into computers, which doubled the time needed to build a news report.

If a clip lasted 2 minutes, we had to wait 2 minutes to digitize it, and another 10 to render and export. Speed was a costly luxury requiring massive physical coordination!

#### The Solid-State Revolution and Codecs

The arrival of solid-state cards (Panasonic P2 and Sony SxS) abolished capture times. We could just slot the cards into a reader and drag files directly into Adobe Premiere. This slashed production times by 70%.

However, it birthed new challenges: data management. Suddenly, a cameraman had to double as a DIT (Data Information Technician) responsible for maintaining redundant backups of digital files that could easily corrupt during power spikes.

#### Satellite Trucks vs. IP Transmission Backpacks (LiveU)

One of the most impressive milestones I have witnessed over these 15 years is how we transmit live video from field locations. Historically, we had to deploy gigantic trucks fitted with massive satellite dishes that took hours to position and point, incurring exorbitant costs of hundreds of dollars per minute.

Today, for networks like Bolivia TV or Red Uno, we head out with an IP transmission backpack (such as LiveU or TVU) the size of a school bag. These devices bond up to six 4G/5G mobile network connections to create a highly stable upstream link, broadcasting Full HD video with sub-second latency.

#### The Craft Today: A Connected Camera Operator

Technology moves forward, but the core remains: framing reality to inform with integrity. Nonetheless, today\'s filmmaker cannot merely push "REC". We must understand IP networking, cybersecurity protocols to protect feeds, collaborative cloud-based editing, and video optimization for multiple digital platforms.

We carry on, forever learning, modifying both our lens and technical skills to share the stories of our Bolivian people with utmost professional respect.`,
    date: '2026-06-24',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: '/images/freddy_studio.webp',
    categoryEs: 'Reflexiones',
    categoryEn: 'Reflections',
    enableComments: true
  },
  {
    id: '3',
    slug: 'premio-eduardo-abaroa-2026',
    titleEs: 'Premio Eduardo Abaroa 2026: entregaron más de Bs 1,3 millones a 79 ganadores',
    titleEn: 'Eduardo Abaroa Award 2026: over Bs 1.3 million awarded to 79 winners',
    excerptEs: 'El Ministerio de Culturas premió a 79 ganadores de la versión 2026 del galardón más importante de las artes y la cultura boliviana. Conozca los detalles de la ceremonia.',
    excerptEn: 'The Ministry of Cultures awarded 79 winners of the 2026 edition of the most important prize for Bolivian arts and culture.',
    contentEs: '### Premio Eduardo Abaroa 2026: Récord en Premiaciones\n\nEl Ministerio de Culturas, Descolonización y Despatriarcalización entregó **más de 1,3 millones de bolivianos** a **79 ganadores** del **Premio Plurinacional Eduardo Abaroa 2026**, en una ceremonia realizada en el **Teatro Municipal de La Paz**.\n\n#### Categorías Destacadas\n\nEn la categoría de **Periodismo Cultural**, el primer lugar fue otorgado al reportaje **"Voces del Tipnis"** de la realizadora **Carmen Rojas**, transmitido por Bolivia TV. El jurado destacó la **calidad narrativa** y la **profundidad investigativa** del trabajo audiovisual.\n\nEn la categoría de **Cine y Producción Audiovisual**, el documental **"Qhipa Pacha: Tiempo Después"** del colectivo Ukamau obtuvo el máximo galardón.\n\n#### Crecimiento del Fondo\n\nEl presupuesto destinado a los premios creció un **40%** respecto a la gestión 2025, lo que permitió ampliar el número de categorías de **15 a 22**, incluyendo nuevas áreas como **producción de videojuegos** y **arte digital**.\n\n#### La Ceremonia\n\nLa gala contó con la presencia del **Ministro de Culturas** y más de **500 invitados** del ámbito artístico y cultural del país. La transmisión en vivo estuvo a cargo de **Bolivia TV**.\n\n[Fuente: La Razón / ABI](https://larazon.bo/la-revista/2026/07/11/premio-eduardo-abaroa-entrego-mas-de-bs-13-millones-a-79-ganadores/)',
    contentEn: '### Eduardo Abaroa Award 2026: Record Awards\n\nThe Ministry of Cultures awarded over 1.3 million bolivianos to 79 winners of the 2026 Eduardo Abaroa National Award in a ceremony held at La Paz Municipal Theater.\n\n#### Featured Categories\n\nIn Cultural Journalism, first place went to the report "Voces del Tipnis" by filmmaker Carmen Rojas, broadcast on Bolivia TV. The jury highlighted its narrative quality and investigative depth.\n\nIn Cinema and Audiovisual Production, the documentary "Qhipa Pacha: Time After" by the Ukamau collective won the top prize.\n\n#### Fund Growth\n\nThe prize budget grew 40% compared to 2025, expanding categories from 15 to 22, including new areas such as video game production and digital art.\n\n#### The Ceremony\n\nThe gala was attended by the Minister of Cultures and over 500 guests from the arts and culture sector. Live broadcast was handled by Bolivia TV. Source: La Razón / ABI.',
    date: '2026-07-11',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://larazon.bo/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-11-at-08.53.26.webp',
    imageCaption: 'El canciller entrega uno de los premios durante la gala. Foto: Min. Culturas / La Razón',
    categoryEs: 'Cultura y Entretenimiento',
    categoryEn: 'Culture & Entertainment',
    enableComments: true,
    breaking: true,
    featured: true,
    views: 1542,
    source: 'La Razón / ABI',
    sourceUrl: 'https://www.la-razon.com'
  },
  {
    id: '4',
    slug: 'larga-noche-museos-2026',
    titleEs: 'XX Larga Noche de Museos: miles de personas colmaron espacios culturales en La Paz y El Alto',
    titleEn: 'XX Long Night of Museums: thousands filled cultural spaces in La Paz and El Alto',
    excerptEs: 'Más de 100 espacios culturales abrieron sus puertas de forma gratuita en la vigésima edición de este evento emblemático de la ciudad de La Paz.',
    excerptEn: 'Over 100 cultural spaces opened their doors for free in the twentieth edition of this emblematic event in the city of La Paz.',
    contentEs: '### XX Larga Noche de Museos: Una Fiesta Cultural\n\nLa **vigésima edición** de la **Larga Noche de Museos** convocó a **miles de personas** en **La Paz y El Alto**, con **más de 100 espacios culturales** abiertos de forma gratuita desde las **15:00 hasta la medianoche**.\n\n#### Recorridos y Novedades\n\nPor primera vez, el evento incluyó estaciones de **realidad virtual** en el **Museo Nacional de Arte** y **proyecciones mapping** en la fachada de la **Alcaldía de La Paz**. El **Museo San Francisco** registró colas de hasta dos cuadras.\n\n#### Participación Ciudadana\n\n"Es impresionante ver a las familias apropiándose de los espacios culturales", declaró la directora de Culturas del GAMLP. Se estima que **más de 80,000 personas** participaron en esta versión.\n\n#### Cobertura Audiovisual\n\nLa transmisión especial requirió el despliegue de **4 equipos de cámara** en distintos puntos de la ciudad, conectados a la unidad móvil central mediante **transmisión IP 4G**. Los desafíos incluyeron la **iluminación nocturna** en exteriores y la captura de **audio ambiental de alta calidad** en espacios con alta reverberación.\n\n[Fuente: La Razón](https://larazon.bo/la-revista/2026/07/11/arranca-la-larga-noche-de-museos-en-la-paz-y-el-alto/)',
    contentEn: '### XX Long Night of Museums: A Cultural Celebration\n\nThe twentieth edition of the Long Night of Museums brought together thousands of people in La Paz and El Alto, with over 100 cultural spaces open for free from 3:00 PM to midnight.\n\n#### Tours and Novelties\n\nFor the first time, the event included virtual reality stations at the National Museum of Art and projection mapping on the facade of La Paz City Hall. The San Francisco Museum had lines stretching two blocks.\n\n#### Citizen Participation\n\n"It is impressive to see families taking ownership of cultural spaces," said the director of Cultures of GAMLP. An estimated 80,000 people participated in this edition.\n\n#### Audiovisual Coverage\n\nThe special broadcast required deploying 4 camera teams at different points of the city, connected to the central mobile unit via 4G IP transmission. Challenges included nighttime outdoor lighting and capturing high-quality ambient audio in spaces with high reverberation.\n\nSource: La Razón.',
    date: '2026-07-11',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://larazon.bo/wp-content/uploads/2026/07/museos-lpz.webp',
    imageCaption: 'Decenas de personas visitan museos en la Larga Noche de Museos. Foto: GAMLP / La Razón',
    categoryEs: 'Cultura y Entretenimiento',
    categoryEn: 'Culture & Entertainment',
    enableComments: true,
    featured: true,
    views: 2341,
    source: 'La Razón',
    sourceUrl: 'https://www.la-razon.com'
  },
  {
    id: '5',
    slug: 'festival-cine-santa-cruz-2026',
    titleEs: 'Festival de Cine de Santa Cruz 2026: lo mejor del audiovisual boliviano en cartelera',
    titleEn: 'Santa Cruz Film Festival 2026: the best of Bolivian audiovisual on screen',
    excerptEs: 'La décima edición del FENAVID trajo 48 producciones nacionales y una delegación internacional récord. Crónica desde la alfombra roja.',
    excerptEn: 'The tenth edition of FENAVID brought 48 national productions and a record international delegation. Coverage from the red carpet.',
    contentEs: '### FENAVID 2026: Una Década de Cine Boliviano\n\n**Santa Cruz de la Sierra** se vistió de gala para recibir la **décima edición** del **Festival Nacional de Video (FENAVID)**, el encuentro más importante del audiovisual boliviano.\n\n#### Participación Récord\n\nCon **48 producciones nacionales** en competencia y una **delegación internacional de 12 países invitados**, esta edición marcó un **hito** en la historia del festival. Las categorías incluyeron **documental, ficción, videoclip y producción universitaria**.\n\n#### Lo Más Destacado\n\nEl documental **"Tierra de Sueños"** del realizador cochabambino **Carlos Quiroga** se llevó el **premio mayor**. La cinta, que retrata la vida de **mineros cooperativistas en Potosí**, fue aclamada por la crítica por su **fotografía** y **narrativa**.\n\n#### El Rol del Periodismo Cultural\n\nComo parte de la cobertura, pudimos registrar **entrevistas exclusivas** con los realizadores y captar la esencia de un sector creativo que crece día a día en Bolivia. La **televisión cultural** tiene el deber de visibilizar estas expresiones.\n\n[Fuente: Abya Yala Televisión / Cobertura Propia](https://www.fenavid.com.bo)',
    contentEn: '### FENAVID 2026: A Decade of Bolivian Cinema\n\nSanta Cruz de la Sierra dressed up to host the tenth edition of the National Video Festival (FENAVID), the most important gathering for Bolivian audiovisual production.\n\n#### Record Participation\n\nWith 48 national productions in competition and an international delegation from 12 invited countries, this edition marked a milestone. Categories included documentary, fiction, music video, and university production.\n\n#### Highlights\n\nThe documentary "Tierra de Sueños" by Cochabamba filmmaker Carlos Quiroga took the top prize. The film, portraying cooperative miners in Potosí, was acclaimed by critics for its photography and narrative.\n\n#### The Role of Cultural Journalism\n\nAs part of the coverage, we secured exclusive interviews with filmmakers and captured the essence of a creative sector growing day by day in Bolivia. Cultural television has a duty to make these expressions visible.',
    date: '2026-07-10',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://picsum.photos/seed/fenavid-cine/1200/630',
    imageCaption: 'Festival Nacional de Video FENAVID — Santa Cruz',
    categoryEs: 'Cultura y Entretenimiento',
    categoryEn: 'Culture & Entertainment',
    enableComments: true,
    featured: true,
    views: 876,
    source: 'Abya Yala Televisión / Cobertura Propia',
    sourceUrl: 'https://www.fenavid.com.bo'
  },
  {
    id: '6',
    slug: 'bolivia-puesto-91-rsf',
    titleEs: 'RSF: Bolivia se ubica en el puesto 91 de alto riesgo para periodistas en el mundo',
    titleEn: 'RSF: Bolivia ranks 91st worldwide in high risk for journalists',
    excerptEs: 'El informe 2026 de Reporteros Sin Fronteras ubica a Bolivia en la categoría de "alto riesgo" para el ejercicio del periodismo, señalando ataques y hostilidad gubernamental.',
    excerptEn: 'The 2026 Reporters Without Borders report places Bolivia in the "high risk" category for journalism, citing attacks and government hostility.',
    contentEs: '### Bolivia en el Ranking de Libertad de Prensa 2026\n\n**Reporteros Sin Fronteras (RSF)** publicó su ranking anual de libertad de prensa, ubicando a **Bolivia** en el **puesto 91 de 180 países**, dentro de la categoría de **"alto riesgo"** para el ejercicio del periodismo.\n\n#### Factores del Descenso\n\nEl informe señala que Bolivia **descendió posiciones** debido a **"la hostilidad del gobierno hacia la prensa independiente, el aumento de procesos penales contra periodistas y la concentración de medios afines al oficialismo"**. La puntuación del país cayó de **58,4 a 54,2** sobre 100.\n\n#### Situación Regional\n\nEn Sudamérica, Bolivia se ubica por detrás de **Uruguay (puesto 28)**, **Chile (38)**, **Argentina (45)** y **Brasil (82)**. Solo **Venezuela (158)** y **Paraguay (112)** presentan peores indicadores en la región.\n\n#### Reacciones\n\nEl **Colegio de Periodistas de Bolivia** emitió un comunicado expresando su preocupación y exigiendo al Estado garantías para el trabajo periodístico independiente. **"La libertad de prensa no es negociable en una democracia"**, señaló su presidenta.\n\n[Fuente: Los Tiempos](https://www.lostiempos.com/actualidad/pais/20260518/informe-rsf-bolivia-puesto-91-alto-riesgo-periodistas)',
    contentEn: '### Bolivia in the 2026 Press Freedom Ranking\n\nReporters Without Borders (RSF) published its annual press freedom ranking, placing Bolivia 91st out of 180 countries, within the "high risk" category for journalism.\n\n#### Factors Behind the Decline\n\nThe report notes that Bolivia dropped positions due to "government hostility toward independent press, increased criminal proceedings against journalists, and concentration of pro-government media outlets." The country\'s score fell from 58.4 to 54.2 out of 100.\n\n#### Regional Situation\n\nIn South America, Bolivia trails Uruguay (28th), Chile (38th), Argentina (45th), and Brazil (82nd). Only Venezuela (158th) and Paraguay (112th) show worse indicators in the region.\n\n#### Reactions\n\nThe Bolivian College of Journalists issued a statement expressing concern and demanding state guarantees for independent journalistic work. "Press freedom is non-negotiable in a democracy," said its president.\n\nSource: Los Tiempos.',
    date: '2026-05-18',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://www.lostiempos.com/sites/default/files/media_imagen/2026/5/18/4_p_1_lopezzzzzzzzzzz.jpg',
    imageCaption: 'Reporteros durante cobertura de conflictos en Bolivia. Foto: Carlos López / Los Tiempos',
    categoryEs: 'Mundo',
    categoryEn: 'World',
    enableComments: true,
    views: 543,
    source: 'Los Tiempos',
    sourceUrl: 'https://www.lostiempos.com'
  },
  {
    id: '7',
    slug: 'cinemateca-217-anos-la-paz',
    titleEs: 'Cinemateca Boliviana celebra 217 años de La Paz con ciclo de cine nacional gratuito',
    titleEn: 'Bolivian Cinematheque celebrates 217 years of La Paz with free national film cycle',
    excerptEs: 'Desde clásicos restaurados hasta estrenos contemporáneos, la Cinemateca programó una semana de funciones gratuitas para homenajear a la sede de gobierno.',
    excerptEn: 'From restored classics to contemporary premieres, the Cinematheque programmed a week of free screenings to honor the seat of government.',
    contentEs: '### Cine Nacional Gratuito por los 217 Años de La Paz\n\nLa **Cinemateca Boliviana** anunció un ciclo especial de **cine nacional gratuito** para conmemorar los **217 años** de la fundación de **Nuestra Señora de La Paz**, con funciones del **15 al 22 de julio**.\n\n#### La Programación\n\nEl ciclo incluye la **restauración digital** de **"La Nación Clandestina" (1989)** de **Jorge Sanjinés**, el estreno del documental **"Ciudad de las Laderas"** de la realizadora paceña **Valeria Quisbert**, y una **retrospectiva de cortometrajes en aymara** producidos por el colectivo Ukamau.\n\n#### Espacios Alternativos\n\nAdemás de las funciones en la sala principal de la Cinemateca, se habilitaron **proyecciones al aire libre** en la **Plaza San Pedro**, el **Mirador Killi Killi** y la **Estación Central de El Alto**, buscando **descentralizar el acceso al cine**.\n\n#### Importancia de la Preservación\n\nLa **restauración digital** de materiales fílmicos históricos es una labor fundamental para la **memoria audiovisual** del país. La Cinemateca, con apoyo de la cooperación internacional, ha logrado **digitalizar más de 200 títulos** del archivo nacional en los últimos dos años.\n\n[Fuente: Opinión](https://www.opinion.com.bo/articulo/cultura/cinemateca-celebra-217-anos-paz-ciclo-especial-cine-nacional/20260715163003993473.html)',
    contentEn: '### Free National Cinema for 217 Years of La Paz\n\nThe Bolivian Cinematheque announced a special cycle of free national cinema to commemorate 217 years since the founding of Nuestra Señora de La Paz, with screenings from July 15 to 22.\n\n#### The Program\n\nThe cycle includes the digital restoration of "La Nación Clandestina" (1989) by Jorge Sanjinés, the premiere of the documentary "Ciudad de las Laderas" by La Paz filmmaker Valeria Quisbert, and a retrospective of short films in Aymara produced by the Ukamau collective.\n\n#### Alternative Venues\n\nIn addition to screenings at the Cinematheque main hall, outdoor projections were set up at Plaza San Pedro, Killi Killi Viewpoint, and El Alto Central Station, seeking to decentralize access to cinema.\n\n#### Importance of Preservation\n\nDigital restoration of historical film materials is fundamental work for the country\'s audiovisual memory. The Cinematheque, with international cooperation support, has digitized over 200 titles from the national archive in the last two years.\n\nSource: Opinión.',
    date: '2026-07-15',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://laoctavabo.com/wp-content/uploads/2026/07/CINEMATECA.jpg',
    imageCaption: 'Cinemateca Boliviana — Programación especial por Fiestas Julias. Foto: ABI',
    categoryEs: 'Cultura y Entretenimiento',
    categoryEn: 'Culture & Entertainment',
    enableComments: true,
    views: 654,
    source: 'Opinión',
    sourceUrl: 'https://www.opinion.com.bo'
  },
  {
    id: '8',
    slug: 'fallece-tito-de-la-vina',
    titleEs: 'Fallece Tito de la Viña, leyenda del periodismo deportivo boliviano, a los 87 años',
    titleEn: 'Tito de la Viña, legend of Bolivian sports journalism, dies at 87',
    excerptEs: 'El reconocido periodista deportivo, con más de seis décadas de trayectoria en radio y televisión, falleció dejando un legado imborrable en el periodismo nacional.',
    excerptEn: 'The renowned sports journalist, with over six decades of career in radio and television, passed away leaving an indelible legacy in national journalism.',
    contentEs: '### Adiós a una Voz Inolvidable\n\nEl periodismo boliviano está de luto. **Tito de la Viña**, la **voz emblemática del deporte nacional** durante **más de seis décadas**, falleció a los **87 años**, dejando un legado que trasciende generaciones.\n\n#### Trayectoria\n\nDe la Viña inició su carrera en la radio en la **década de 1960**, para luego pasar a la televisión donde se convirtió en el **rostro y la voz del periodismo deportivo boliviano**. Cubrió **12 Copas del Mundo de la FIFA** y **8 Juegos Olímpicos**.\n\n#### Reconocimientos\n\nA lo largo de su carrera recibió innumerables distinciones, incluyendo el **Premio Nacional de Periodismo Deportivo** en tres ocasiones y un **reconocimiento vitalicio** de la **Asociación de Periodistas Deportivos de Bolivia**.\n\n#### Reacciones\n\nEl **presidente del Estado**, clubes de fútbol, colegios de periodistas y figuras del deporte nacional expresaron sus condolencias a través de redes sociales. **Bolivia TV** prepara un **documental homenaje** con material de archivo de sus transmisiones más emblemáticas.\n\n[Fuente: Los Tiempos](https://www.lostiempos.com/deportes/multideportivo/20260718/fallece-tito-vina-leyenda-del-periodismo-deportivo-nacional)',
    contentEn: '### Farewell to an Unforgettable Voice\n\nBolivian journalism is in mourning. Tito de la Viña, the emblematic voice of national sports for over six decades, passed away at 87, leaving a legacy that transcends generations.\n\n#### Career\n\nDe la Viña began his career on radio in the 1960s, later moving to television where he became the face and voice of Bolivian sports journalism. He covered 12 FIFA World Cups and 8 Olympic Games.\n\n#### Recognitions\n\nThroughout his career he received countless distinctions, including the National Sports Journalism Award on three occasions and a lifetime recognition from the Bolivian Association of Sports Journalists.\n\n#### Reactions\n\nThe President of the State, football clubs, journalist associations, and national sports figures expressed their condolences on social media. Bolivia TV is preparing a tribute documentary with archival footage of his most emblematic broadcasts. Source: Los Tiempos.',
    date: '2026-07-18',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://www.lostiempos.com/sites/default/files/media_imagen/2026/7/18/tito_ok.jpg',
    imageCaption: 'José Vila de la Viña, "Tito de la Viña". Foto: Urgente.bo / Los Tiempos',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    views: 1234,
    source: 'Los Tiempos',
    sourceUrl: 'https://www.lostiempos.com'
  },
  {
    id: '9',
    slug: 'nolan-odisea-reparto',
    titleEs: 'Christopher Nolan lleva "La Odisea" al cine: el reparto incluye a Matt Damon y Tom Holland',
    titleEn: 'Christopher Nolan brings "The Odyssey" to the screen: cast includes Matt Damon and Tom Holland',
    excerptEs: 'El aclamado director británico confirmó el reparto de su próxima epopeya basada en el clásico de Homero, con un elenco de primer nivel internacional.',
    excerptEn: 'The acclaimed British director confirmed the cast of his next epic based on Homer\'s classic, with a top-tier international ensemble.',
    contentEs: '### Christopher Nolan y su Nueva Epopeya Mitológica\n\nEl director **Christopher Nolan**, conocido por obras como **"Oppenheimer"**, **"Inception"** e **"Interstellar"**, confirmó el reparto de su próxima película: una adaptación de **"La Odisea"** de **Homero**.\n\n#### El Reparto de Lujo\n\n**Matt Damon** interpretará a **Odiseo**, acompañado de **Tom Holland**, **Zendaya**, **Anne Hathaway**, **Robert Pattinson**, **Charlize Theron** y **Lupita Nyong\'o**. El anuncio generó enorme expectativa en la industria cinematográfica global.\n\n#### Producción y Fechas\n\nEl rodaje comenzará a finales de **2026** en locaciones de **Grecia, Italia, Malta y el Reino Unido**. La película será filmada en **formato IMAX** y utilizará tecnología de cámara de gran formato, característica distintiva del director.\n\n#### Expectativa en Bolivia\n\nCineastas y cinéfilos bolivianos siguen con atención los detalles de la producción. La **Cinemateca Boliviana** ya confirmó que proyectará el filme en su **estreno mundial**, previsto para **julio de 2027**.\n\n[Fuente: Los Tiempos](https://www.lostiempos.com)',
    contentEn: '### Nolan\'s New Mythological Epic\n\nDirector Christopher Nolan, known for works such as "Oppenheimer", "Inception", and "Interstellar", confirmed the cast of his next film: an adaptation of Homer\'s "The Odyssey".\n\n#### The Star-Studded Cast\n\nMatt Damon will play Odysseus, accompanied by Tom Holland, Zendaya, Anne Hathaway, Robert Pattinson, Charlize Theron, and Lupita Nyong\'o. The announcement generated enormous expectations in the global film industry.\n\n#### Production and Dates\n\nFilming will begin in late 2026 in locations across Greece, Italy, Malta, and the United Kingdom. The film will be shot in IMAX format using large-format camera technology, a signature of the director.\n\n#### Buzz in Bolivia\n\nBolivian filmmakers and cinephiles are closely following production details. The Bolivian Cinematheque has already confirmed it will screen the film at its worldwide premiere, scheduled for July 2027. Source: Los Tiempos.',
    date: '2026-07-14',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://picsum.photos/seed/cine-nolan-odisea/1200/630',
    imageCaption: 'Christopher Nolan en el set de rodaje. Foto: Universal Pictures',
    categoryEs: 'Cultura y Entretenimiento',
    categoryEn: 'Culture & Entertainment',
    enableComments: true,
    featured: true,
    views: 789,
    source: 'Los Tiempos',
    sourceUrl: 'https://www.lostiempos.com'
  },
  {
    id: '10',
    slug: 'reflexion-comparativa-cultura-audiovisual-bolivia-mundo',
    titleEs: 'Bolivia en el espejo del mundo: reflexión comparativa sobre cultura audiovisual y periodismo',
    titleEn: 'Bolivia in the world\'s mirror: a comparative reflection on audiovisual culture and journalism',
    excerptEs: 'Un análisis que contrasta las noticias bolivianas con sus equivalentes internacionales: ¿cómo nos medimos frente a Berlín, París o Noruega en acceso cultural, libertad de prensa y preservación audiovisual?',
    excerptEn: 'An analysis contrasting Bolivian news with international equivalents: how do we measure up against Berlin, Paris, or Norway in cultural access, press freedom, and audiovisual preservation?',
    contentEs: '### Bolivia en el Espejo del Mundo\n\nComo realizador audiovisual con 15 años de trayectoria en la televisión boliviana, he tenido el privilegio de cubrir eventos culturales, sociales y políticos que me han permitido observar de primera mano dónde estamos parados como país en el ámbito audiovisual. Este artículo no pretende ser un diagnóstico definitivo, sino una reflexión personal basada en datos concretos y comparaciones internacionales.\n\n---\n\n#### 1. Noche de Museos: La Paz vs. Berlín, París y Viena\n\n**En La Paz:** La XX Larga Noche de Museos de 2026 movilizó a más de 80,000 personas en más de 100 espacios culturales, todos gratuitos. Un logro impresionante para una ciudad de 2.2 millones de habitantes.\n\n**En Berlín:** La 44ª Lange Nacht der Museen (29 de agosto 2026) ofrece 75 museos, 750 eventos, con un ticket de €15-23 (aproximadamente Bs 105-160). Atrae a ~50,000 personas. El tema de 2026 es "Crime in Berlin", con programación curada en torno a una narrativa unificada.\n\n**En París:** La Nuit Européenne des Musées (23 de mayo 2026) abre más de 1,300 sitios en toda Francia de forma gratuita, incluyendo el Louvre, Musée d\'Orsay y Rodin. Es parte de un evento continental que abarca 30 países.\n\n**Reflexión técnica como camarógrafo:**\nLo que más me llama la atención no es la escala —obviamente París o Berlín tienen presupuestos incomparables— sino la **narrativa curatorial**. Berlín elige un tema anual (2026: crimen) y construye toda la programación en torno a él, con rutas shuttle, conciertos temáticos y experiencias inmersivas. En La Paz, la fortaleza está en la **cantidad de espacios** y la gratuidad absoluta, pero la experiencia carece de esa curaduría unificada. Como realizador, veo una oportunidad inmensa: ¿qué tal una Larga Noche de Museos con un tema como "El sonido de La Paz" o "La Paz en movimiento", donde cada espacio ofrezca una pieza de una narrativa audiovisual más grande? La tecnología de transmisión IP que usamos para coberturas en vivo podría escalarse para conectar múltiples museos en una transmisión simultánea.\n\n---\n\n#### 2. Preservación Audiovisual: Cinemateca Boliviana vs. Archivos Internacionales\n\n**En Bolivia:** La Cinemateca Boliviana ha digitalizado más de 200 títulos del archivo nacional en los últimos dos años, con apoyo de cooperación internacional. Es un avance significativo para un país con recursos limitados.\n\n**En el mundo:** La Federación Internacional de Archivos Fílmicos (FIAF) tiene programas como la Escuela sobre Ruedas, que ha capacitado archivistas en toda América Latina con apoyo del programa Ibermedia. En 2026, el Museo del Cine Pablo Ducrós Hicken de Buenos Aires se convirtió en miembro pleno de FIAF, fortaleciendo la red latinoamericana.\n\n**A nivel global:** El mercado de restauración digital de filmes mueve $1,450 millones de dólares al año, con un crecimiento proyectado del 11.7% anual. Países como Corea del Sur y China invierten fuertemente en preservación como parte de su estrategia de exportación cultural.\n\n**Reflexión técnica:**\nLa diferencia fundamental está en la **institucionalidad**. Mientras que países como Argentina tienen un museo del cine con presupuesto estatal y membresía FIAF, la Cinemateca Boliviana opera con recursos limitados y depende de cooperación internacional para proyectos de digitalización. La restauración de "La Nación Clandestina" de Jorge Sanjinés es un hito, pero es solo la punta del iceberg. Necesitamos un programa estatal permanente de digitalización, capacitación técnica en estándares FIAF para archivistas bolivianos y alianzas con festivales internacionales para la circulación de materiales restaurados.\n\nEn mi experiencia editando material de archivo en Bolivia TV, he visto cintas Betacam de los años 90 deteriorándose por falta de climatización adecuada. La pérdida de material audiovisual histórico no es solo una pérdida cultural, es la desaparición de la memoria visual de nuestro país.\n\n---\n\n#### 3. Libertad de Prensa: Bolivia (Puesto 91) en el Contexto Global\n\n**Bolivia:** Puesto 91 de 180 países, categoría "alto riesgo". Puntuación: 54.2/100. Descendió respecto a 2025.\n\n**América Latina:** Argentina (98, -11), El Salvador (143, -8), Perú (144). Estados Unidos cayó a 64 (-7) bajo la administración Trump. Venezuela (159), Cuba (160) y Nicaragua (168) encabezan las peores posiciones de la región.\n\n**Mundo:** Noruega (#1 por décimo año consecutivo). Por primera vez en 25 años, más del 52% de los países del mundo están en categoría "difícil" o "muy grave". El indicador legal es el que más se deterioró: uso de leyes de seguridad nacional para silenciar periodistas.\n\n**Reflexión como periodista:**\nHe trabajado en 6 canales de televisión bolivianos y he visto de primera mano cómo la presión política, económica y legal afecta la cobertura informativa. El ranking de RSF confirma lo que muchos periodistas sentimos en el día a día: el ejercicio del periodismo independiente en Bolivia es cada vez más difícil. La concentración de medios, los procesos penales contra comunicadores y la hostilidad gubernamental hacia la prensa crítica son realidades que enfrentamos.\n\nSin embargo, también veo señales de resistencia: el periodismo independiente digital crece, colectivos de fact-checking como Bolivia Verifica ganan tracción, y la demanda de contenido informativo de calidad sigue siendo alta. La tecnología —desde mochilas de transmisión IP hasta plataformas de streaming— ofrece herramientas que antes eran impensables para sortear los bloqueos informativos.\n\n---\n\n#### 4. Premios Eduardo Abaroa vs. Reconocimientos Internacionales\n\nEl Premio Eduardo Abaroa 2026 entregó Bs 1.3 millones a 79 ganadores en 22 categorías. Es el galardón más importante de las artes y la cultura boliviana, y personalmente tengo el honor de haberlo recibido en 2017 por el documental "La Estrella".\n\nA nivel internacional, el Premio Nacional de Periodismo Deportivo que recibió Tito de la Viña en tres ocasiones, o el reconocimiento del festival UNEFF al cine ambiental boliviano, muestran que hay talento y calidad. El desafío no es la capacidad creativa —los realizadores bolivianos demuestran excelencia constantemente— sino las condiciones estructurales: financiamiento, distribución y sostenibilidad.\n\n---\n\n### Conclusión\n\nBolivia tiene una escena audiovisual vibrante y talentosa. La Larga Noche de Museos, la Cinemateca Boliviana, los premios Eduardo Abaroa y el periodismo de investigación que aún se hace contra viento y marea son prueba de ello. Pero la comparación con experiencias internacionales revela brechas que no son culpa de los realizadores, sino de la falta de políticas públicas sostenidas, inversión en infraestructura cultural y protección del ejercicio periodístico.\n\nComo camarógrafo y realizador, mi compromiso es seguir contando estas historias, registrando la realidad boliviana con la mayor calidad técnica posible, y contribuyendo —desde mi oficio— a cerrar esas brechas. Porque al final del día, una imagen bien compuesta, un documental bien editado o una transmisión en vivo bien ejecutada no solo informan: construyen memoria colectiva.',
    contentEn: '### Bolivia in the World\'s Mirror\n\nAs an audiovisual producer with 15 years in Bolivian television, I have had the privilege of covering cultural, social, and political events that have allowed me to observe firsthand where we stand as a country in the audiovisual realm. This article is not intended as a definitive diagnosis, but as a personal reflection based on concrete data and international comparisons.\n\n---\n\n#### 1. Museum Night: La Paz vs. Berlin, Paris, and Vienna\n\n**In La Paz:** The 20th Long Night of Museums 2026 mobilized over 80,000 people across more than 100 cultural spaces, all free. An impressive achievement for a city of 2.2 million.\n\n**In Berlin:** The 44th Lange Nacht der Museen (August 29, 2026) offers 75 museums, 750 events, with a ticket of €15-23 (approximately Bs 105-160). It attracts ~50,000 people. The 2026 theme is "Crime in Berlin," with programming curated around a unified narrative.\n\n**In Paris:** The Nuit Européenne des Musées (May 23, 2026) opens over 1,300 sites across France for free, including the Louvre, Musée d\'Orsay, and Rodin. It is part of a continental event spanning 30 countries.\n\n**Technical reflection as a cameraman:**\nWhat strikes me most is not the scale —Paris and Berlin obviously have incomparable budgets— but the **curatorial narrative**. Berlin chooses an annual theme (2026: crime) and builds the entire program around it, with shuttle routes, thematic concerts, and immersive experiences. In La Paz, the strength lies in the **number of spaces** and absolute free admission, but the experience lacks that unified curation. As a producer, I see an immense opportunity: what about a Long Night of Museums with a theme like "The Sound of La Paz" or "La Paz in Motion," where each space offers a piece of a larger audiovisual narrative? The IP transmission technology we use for live coverage could be scaled to connect multiple museums in a simultaneous broadcast.\n\n---\n\n#### 2. Audiovisual Preservation: Bolivian Cinematheque vs. International Archives\n\n**In Bolivia:** The Bolivian Cinematheque has digitized over 200 titles from the national archive in the last two years, with international cooperation support. This is significant progress for a country with limited resources.\n\n**Worldwide:** The International Federation of Film Archives (FIAF) runs programs like the School on Wheels, which has trained archivists across Latin America with Ibermedia support. In 2026, the Museo del Cine Pablo Ducrós Hicken in Buenos Aires became a full FIAF member, strengthening the Latin American network.\n\n**Globally:** The digital film restoration market moves $1.45 billion annually, with projected 11.7% yearly growth. Countries like South Korea and China invest heavily in preservation as part of their cultural export strategy.\n\n**Technical reflection:**\nThe fundamental difference lies in **institutionality**. While countries like Argentina have a state-funded film museum with FIAF membership, the Bolivian Cinematheque operates with limited resources and depends on international cooperation. The restoration of Jorge Sanjinés\' "La Nación Clandestina" is a milestone, but just the tip of the iceberg. We need a permanent state digitization program, FIAF-standard technical training for Bolivian archivists, and partnerships with international festivals for circulation of restored materials.\n\nIn my experience editing archival footage at Bolivia TV, I have seen Betacam tapes from the 1990s deteriorating due to inadequate climate control. The loss of historical audiovisual material is not just a cultural loss — it is the disappearance of our country\'s visual memory.\n\n---\n\n#### 3. Press Freedom: Bolivia (Rank 91) in Global Context\n\n**Bolivia:** Rank 91 of 180 countries, "high risk" category. Score: 54.2/100. Declined from 2025.\n\n**Latin America:** Argentina (98, -11), El Salvador (143, -8), Peru (144). The United States fell to 64 (-7) under the Trump administration. Venezuela (159), Cuba (160), and Nicaragua (168) lead the worst positions in the region.\n\n**World:** Norway (#1 for tenth consecutive year). For the first time in 25 years, over 52% of the world\'s countries are in the "difficult" or "very serious" category. The legal indicator deteriorated most: use of national security laws to silence journalists.\n\n**Reflection as a journalist:**\nI have worked at 6 Bolivian television networks and have seen firsthand how political, economic, and legal pressure affects news coverage. The RSF ranking confirms what many journalists feel daily: independent journalism in Bolivia is increasingly difficult. Media concentration, criminal proceedings against communicators, and governmental hostility toward critical press are realities we face.\n\nHowever, I also see signs of resistance: independent digital journalism grows, fact-checking collectives like Bolivia Verifica gain traction, and demand for quality news content remains high. Technology — from IP transmission backpacks to streaming platforms — offers tools that were previously unthinkable for bypassing information blockades.\n\n---\n\n#### 4. Eduardo Abaroa Awards vs. International Recognition\n\nThe 2026 Eduardo Abaroa Award distributed Bs 1.3 million to 79 winners in 22 categories. It is the most important prize for Bolivian arts and culture, and I personally had the honor of receiving it in 2017 for the documentary "La Estrella."\n\nInternationally, the National Sports Journalism Award that Tito de la Viña received three times, or the UNEFF festival recognition for Bolivian environmental cinema, show that talent and quality exist. The challenge is not creative capacity —Bolivian filmmakers constantly demonstrate excellence— but structural conditions: funding, distribution, and sustainability.\n\n---\n\n### Conclusion\n\nBolivia has a vibrant and talented audiovisual scene. The Long Night of Museums, the Bolivian Cinematheque, the Eduardo Abaroa awards, and the investigative journalism still done against all odds are proof of this. But comparison with international experiences reveals gaps that are not the fault of producers, but of the lack of sustained public policies, investment in cultural infrastructure, and protection of journalistic practice.\n\nAs a cameraman and producer, my commitment is to keep telling these stories, recording Bolivian reality with the highest possible technical quality, and contributing —from my craft— to closing those gaps. Because at the end of the day, a well-composed image, a well-edited documentary, or a well-executed live broadcast do not just inform: they build collective memory.',
    date: '2026-07-21',
    readTimeEs: '12 min de lectura',
    readTimeEn: '12 min read',
    imageUrl: 'https://picsum.photos/seed/bolivia-mundo-reflexion/1200/630',
    imageCaption: 'Reflexión sobre el desarrollo audiovisual en Bolivia y el mundo',
    categoryEs: 'Reflexiones',
    categoryEn: 'Reflections',
    enableComments: true,
    featured: true,
    views: 1
  },
  {
    id: '11',
    slug: 'cinemateca-50-anos-todo-lo-que-era-posible',
    titleEs: 'Cinemateca Boliviana: 50 Años Preservando la Memoria Audiovisual',
    titleEn: 'Bolivian Cinematheque: 50 Years Preserving Audiovisual Memory',
    excerptEs: 'El expresidente y fundador de la Cinemateca Boliviana, Carlos D. Mesa, escribe un emotivo relato sobre el nacimiento de la institución que ha preservado la memoria audiovisual de Bolivia durante medio siglo.',
    excerptEn: 'Former president and Cinemateca Boliviana founder Carlos D. Mesa writes a moving account of the birth of the institution that has preserved Bolivia\'s audiovisual memory for half a century.',
    contentEs: '### Cinemateca Boliviana: 50 Años Preservando la Memoria Audiovisual\n\nEl **12 de julio de 1976**, un grupo de visionarios encabezados por **Amalia de Gallardo**, **Pedro Susz** y **Carlos D. Mesa** fundó la **Cinemateca Boliviana**. Medio siglo después, la institución es depositaria de **más del 80% del patrimonio audiovisual del país**.\n\n#### El Origen\n\nMesa recuerda el momento fundacional: *"Era media tarde. Veo todavía hoy a Pedro con una lata de película entre las manos donada por el pianista Raúl Barragán, se trataba de **Laredo de Bolivia (1959)** de Jorge Ruiz. Fue el primer filme del entonces inexistente archivo de la bisoña Cinemateca de La Paz"*.\n\nLa Cinemateca nació en un pequeño cubículo del quinto piso de la **Casa de la Cultura Franz Tamayo**, frente a la basílica de San Francisco. El contexto era adverso: la dictadura de Hugo Banzer, material fílmico abandonado en depósitos precarios del Canal 7, y ninguna política estatal de preservación.\n\n#### El Archivo Nacional de Imágenes en Movimiento\n\nHoy, la Cinemateca Boliviana custodia más de **40,000 rollos de película**, incluyendo registros que datan de **1906** hasta la actualidad. Su objetivo principal es *"formar, preservar y difundir el Archivo Nacional de Imágenes en Movimiento de Bolivia"*.\n\n#### Una Reflexión Personal\n\nMesa cierra su texto con una frase que resume cinco décadas de entrega: *"No lo creo todavía, ha pasado medio siglo y está la Cinemateca de pie. Los 22 años del joven que estaba convencido de que todo era posible, son hoy los 72 del viejo que sabe que no todo era posible, pero que hizo todo lo que le era posible"*.\n\n[Fuente: Los Tiempos](https://www.lostiempos.com/doble-click/cine/20260719/cinemateca-50-anos-todo-que-era-posible)',
    contentEn: '### Bolivian Cinematheque: 50 Years Preserving Audiovisual Memory\n\nOn **July 12, 1976**, a group of visionaries led by **Amalia de Gallardo**, **Pedro Susz**, and **Carlos D. Mesa** founded the **Cinemateca Boliviana**. Half a century later, the institution holds **over 80% of the country\'s audiovisual heritage**.\n\n#### The Origin\n\nMesa recalls the founding moment: *"It was mid-afternoon. I can still see Pedro holding a film can donated by pianist Raúl Barragán — it was **Laredo de Bolivia (1959)** by Jorge Ruiz. It was the first film of the then non-existent archive of the fledgling Cinemateca de La Paz"*.\n\nThe Cinematheque was born in a small cubicle on the fifth floor of the **Franz Tamayo Casa de la Cultura**, facing the San Francisco basilica. The context was adverse: the dictatorship of Hugo Banzer, film material abandoned in precarious Canal 7 deposits, and no state preservation policy.\n\n#### The National Archive of Moving Images\n\nToday, the Cinemateca Boliviana safeguards over **40,000 film reels**, including records dating from **1906** to the present. Its main objective is *"to form, preserve, and disseminate the National Archive of Moving Images of Bolivia"*.\n\n#### A Personal Reflection\n\nMesa closes with a sentence that summarizes five decades of dedication: *"I still can\'t believe it, half a century has passed and the Cinematheque is still standing. The 22-year-old who was convinced everything was possible, is today the 72-year-old who knows not everything was possible, but who did everything that was possible for him"*.\n\n[Source: Los Tiempos](https://www.lostiempos.com/doble-click/cine/20260719/cinemateca-50-anos-todo-que-era-posible)',
    date: '2026-07-19',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://picsum.photos/seed/cinemateca-50-years/1200/630',
    imageCaption: 'Fachada de la Cinemateca Boliviana, fundada el 12 de julio de 1976. Foto: Cinemateca Boliviana / Los Tiempos',
    categoryEs: 'Cultura y Entretenimiento',
    categoryEn: 'Culture & Entertainment',
    enableComments: true,
    featured: true,
    views: 2103,
    source: 'Los Tiempos',
    sourceUrl: 'https://www.lostiempos.com/doble-click/cine/20260719/cinemateca-50-anos-todo-que-era-posible'
  },
  {
    id: '12',
    slug: 'pianista-daniel-alvarez-gana-premio-sur-musica-nueva',
    titleEs: 'Pianista Daniel Álvarez gana Premio Sur de Música Nueva Latinoamericana',
    titleEn: 'Pianist Daniel Álvarez wins Sur New Music Latin American Award',
    excerptEs: 'El compositor orureño Daniel Álvarez Veizaga conquistó el máximo galardón en la primera edición del certamen internacional con su sonata para piano "Periférica", obteniendo el reconocimiento unánime del jurado.',
    excerptEn: 'Oruro-born composer Daniel Álvarez Veizaga won the top prize in the first edition of the international competition with his piano sonata "Periférica", earning unanimous recognition from the jury.',
    contentEs: '### Compositor Boliviano Triunfa en México\n\nEl pianista boliviano **Daniel Álvarez Veizaga** conquistó el **máximo galardón** en la **primera versión del Premio Sur de Música Nueva Latinoamericana 2026**, con sede en **Ciudad de México**.\n\n#### La Obra Ganadora\n\nEl artista orureño obtuvo el título con la **sonata para piano «Periférica»**, una obra que explora la **dimensión narrativa de la música** y la **creación de nuevos mundos sonoros andinos** mediante la fusión de la tradición y la vanguardia contemporánea.\n\n#### El Jurado\n\nEl jurado estuvo integrado por la compositora mexicana **Diana Syrse**, el compositor brasileño **Rodrigo Lima** y la compositora argentina **Carolina Carrizo**, quienes otorgaron el premio **de manera unánime** a Álvarez.\n\n#### Sobre el Premio\n\nEl certamen es una iniciativa de la casa editorial **Sur — Editores de Música Contemporánea**, con el objetivo de *"impulsar y fortalecer las búsquedas sonoras de lxs compositorxs jóvenes de los países latinoamericanos, así como contribuir a la creación de circuitos regionales de difusión de la música contemporánea"*. Será otorgado **bianualmente** y presentará en cada edición una **plantilla instrumental diferente**.\n\n#### Reconocimiento y Legado\n\nÁlvarez, nacido en **Oruro en 1990** y actualmente residente en **Alemania**, recibirá una **dotación económica de mil dólares**, además de la **publicación de su partitura** y la difusión de su trabajo a nivel latinoamericano. Su carrera internacional está centrada en la fusión de la tradición musical boliviana con la vanguardia contemporánea.\n\n[Fuente: Los Tiempos](https://www.lostiempos.com/doble-click/musica/20260717/pianista-daniel-alvarez-gana-premio-sur-musica-nueva)',
    contentEn: '### Bolivian Composer Triumphs in Mexico\n\nBolivian pianist **Daniel Álvarez Veizaga** won the **top award** in the **first edition of the 2026 Premio Sur de Música Nueva Latinoamericana**, held in **Mexico City**.\n\n#### The Winning Work\n\nThe Oruro-born artist claimed the title with his **piano sonata «Periférica»**, a work that explores the **narrative dimension of music** and the **creation of new Andean sound worlds** through the fusion of tradition and contemporary avant-garde.\n\n#### The Jury\n\nThe jury consisted of Mexican composer **Diana Syrse**, Brazilian composer **Rodrigo Lima**, and Argentine composer **Carolina Carrizo**, who awarded the prize **unanimously** to Álvarez.\n\n#### About the Award\n\nThe competition is an initiative of the publishing house **Sur — Editores de Música Contemporánea**, aiming to *"promote and strengthen the sonic explorations of young composers from Latin American countries, as well as contribute to the creation of regional circuits for the dissemination of contemporary music"*. It will be awarded **biannually** with a different **instrumental lineup** each edition.\n\n#### Recognition and Legacy\n\nÁlvarez, born in **Oruro in 1990** and currently residing in **Germany**, will receive a **cash prize of one thousand dollars**, in addition to the **publication of his score** and the dissemination of his work throughout Latin America. His international career focuses on fusing Bolivian musical tradition with contemporary avant-garde.\n\n[Source: Los Tiempos](https://www.lostiempos.com/doble-click/musica/20260717/pianista-daniel-alvarez-gana-premio-sur-musica-nueva)',
    date: '2026-07-17',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://picsum.photos/seed/daniel-alvarez-piano/1200/630',
    imageCaption: 'Daniel Álvarez Veizaga, compositor y pianista boliviano. Foto: Cortesía / Los Tiempos',
    categoryEs: 'Música',
    categoryEn: 'Music',
    enableComments: true,
    featured: true,
    views: 1456,
    source: 'Los Tiempos',
    sourceUrl: 'https://www.lostiempos.com/doble-click/musica/20260717/pianista-daniel-alvarez-gana-premio-sur-musica-nueva'
  },
  {
    id: '14',
    slug: 'bolivia-lab-18-edicion-industria-cine',
    titleEs: 'Bolivia Lab 2026: Dos filmes son la previa del encuentro de la industria del cine iberoamericano',
    titleEn: 'Bolivia Lab 2026: Two films preview the Ibero-American film industry gathering',
    excerptEs: 'La décimo octava edición de Bolivia Lab se desarrollará en La Paz, Cochabamba, Santa Cruz y Sucre con actividades de formación, laboratorios y exhibiciones para profesionales del audiovisual.',
    excerptEn: 'The 18th edition of Bolivia Lab will take place in La Paz, Cochabamba, Santa Cruz and Sucre with training activities, labs, and exhibitions for audiovisual professionals.',
    contentEs: `### Dos filmes son la previa del Bolivia Lab 2026

Como antesala a la **décimo octava edición de Bolivia Lab**, el Centro de la Cultura Plurinacional (CCP) en Santa Cruz de la Sierra tendrá dos funciones de cine, el 29 y 30 de julio, con la proyección de producciones iberoamericanas que forman parte de la muestra oficial del evento.

La **productora general de Bolivia Lab, Cecilia Salazar**, adelantó a **EL DEBER** que las películas que serán proyectadas son: **"Hijos de la Tierra"**, una coproducción entre Venezuela y Bolivia dirigida por Jacobo Penzo; y **"Un Nuevo Amanecer"**, un documental colombiano de Priscila Padilla.

La primera aterriza en la Venezuela de los años 20 y narra el éxodo campesino hacia el estado Zulia, cuando se creía que estaba empezando a salir "oro negro" de la tierra. En tanto que el documental, a través de testimonios íntimos, muestra cómo un grupo de mujeres transitaron la guerra en sus propios cuerpos y aborda temas como la maternidad.

#### Bolivia Lab: Actividades en Cuatro Ciudades

Bolivia Lab se desarrollará entre el **17 de agosto y el 9 de septiembre** en las ciudades de **La Paz, Cochabamba, Santa Cruz y Sucre**, con actividades de formación, laboratorios, exhibiciones y encuentros para profesionales del audiovisual en los cuatro departamentos.

"Bolivia Lab es una plataforma de formación que fortalece el encuentro y el desarrollo de la industria del cine de Iberoamérica con espacios que nos brindan ese acompañamiento especializado", indicó Salazar.

Algunos espacios destacados son el **"Laboratorio de Desarrollo"**, el **"Taller Internacional de Guión"** y el **"FinalizaLab"**, destinado a películas en etapa de postproducción, distribución y exhibición. Otro evento importante es el **Festival Internacional de Cortos Bolivia Lab** que se desarrollará en Sucre del 17 al 19 de septiembre.

En Santa Cruz, Bolivia Lab se realizará del 24 al 28 de agosto con una muestra internacional de cine. En la capital cruceña, la proyección de filmes incluirá una función especial en Cine Center, donde se estrenará la película ganadora del incentivo **"10.000 dólares en servicios de Dolby Atmos"**, galardón otorgado en 2024 durante el FinalizaLab.

Todas las proyecciones serán gratuitas en la capital cruceña. "Todos están cordialmente invitados a ver cine independiente, de calidad y de esfuerzo", concluyó Salazar.

[Fuente: El Deber](https://eldeber.com.bo/cultura-y-entretenimiento/dos-filmes-previa-bolivia-lab_1784421642)`,
    contentEn: `### Two Films Preview Bolivia Lab 2026

As a prelude to the **18th edition of Bolivia Lab**, the Centro de la Cultura Plurinacional (CCP) in Santa Cruz will hold two film screenings on July 29 and 30, featuring Ibero-American productions that are part of the event's official selection.

**Bolivia Lab General Producer Cecilia Salazar** told **EL DEBER** that the films to be screened are: **"Hijos de la Tierra"** (Children of the Earth), a Venezuela-Bolivia co-production directed by Jacobo Penzo; and **"Un Nuevo Amanecer"** (A New Dawn), a Colombian documentary by Priscila Padilla.

#### Bolivia Lab: Activities in Four Cities

Bolivia Lab will take place between **August 17 and September 9** in **La Paz, Cochabamba, Santa Cruz, and Sucre**, with training activities, labs, exhibitions, and meetings for audiovisual professionals.

Key spaces include the **Development Laboratory**, the **International Screenwriting Workshop**, and **FinalizaLab**, aimed at films in post-production, distribution, and exhibition stages. Another important event is the **Bolivia Lab International Short Film Festival** in Sucre from September 17 to 19.

All screenings will be free in Santa Cruz. Source: El Deber.`,
    date: '2026-07-19',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://static2.eldeber.com.bo/img/estructura/header/logo.png',
    imageCaption: 'Bolivia Lab 2026 - Encuentro de la industria del cine iberoamericano. Foto: El Deber',
    categoryEs: 'Cultura y Entretenimiento',
    categoryEn: 'Culture & Entertainment',
    enableComments: true,
    featured: true,
    views: 345,
    source: 'El Deber',
    sourceUrl: 'https://eldeber.com.bo/cultura-y-entretenimiento/dos-filmes-previa-bolivia-lab_1784421642'
  },
  {
    id: '15',
    slug: 'cortometraje-yatichana-galardones-internacionales',
    titleEs: 'Cortometraje boliviano "Yatichana" conquista dos galardones internacionales',
    titleEn: 'Bolivian short film "Yatichana" wins two international awards',
    excerptEs: 'El documental del cineasta cochabambino Mauricio Panozo alcanzó el primer lugar en My Hero International Film Festival y fue reconocido en los Telly Awards por su impacto social.',
    excerptEn: 'The documentary by Cochabamba filmmaker Mauricio Panozo reached first place at My Hero International Film Festival and was recognized at the Telly Awards for its social impact.',
    contentEs: `### Cortometraje boliviano "Yatichana" conquista dos galardones internacionales

El cortometraje documental boliviano **"Yatichana"** (enseñar), del director **Mauricio Panozo Montero**, conquistó dos galardones en el contexto internacional, posicionando al cine boliviano en el mapa global.

#### Primer Lugar en My Hero International Film Festival

El filme del cineasta cochabambino alcanzó el **primer lugar en la categoría Mejor Documental** en el **My Hero International Film Festival 2025**, evento que destaca historias globales que inspiran a través del heroísmo cotidiano.

#### Reconocimiento en los Telly Awards

La segunda conquista fue en los **47th Annual Telly Awards**, Categoría Online Series-Social Impact, en el marco del **Solutions Storytelling Project Latinoamérica**. Este galardón reconoce el valor de la narrativa audiovisual para visibilizar soluciones reales frente a desafíos sociales.

#### Detrás del Documental

"Yatichana" refleja la historia de una **mujer de origen indígena que viste con traje típico del altiplano**, es profesora de computación en **Huaricana, La Paz**. Ella lucha por equilibrar su pasión por la enseñanza, sorteando largas distancias desde su casa hasta su trabajo, usando su creatividad para vencer obstáculos como el acceso a la tecnología, además de enfrentar las responsabilidades de ser madre y compensar las dificultades de un divorcio.

Panozo dijo que el cortometraje nace de su experiencia de trabajo con comunidades y de su compromiso por visibilizar historias que suelen permanecer fuera de los relatos dominantes. "A través de una propuesta visual y sonora cercana, la obra acompaña a sus protagonistas desde la dignidad, la resistencia y la esperanza", comentó el director.

"Yatichana" se plantea como una herramienta de encuentro y reflexión, capaz de abrir conversaciones sobre **educación, identidad, inclusión y transformación social** desde la empatía y el reconocimiento de las voces locales.

[Fuente: Los Tiempos](https://www.lostiempos.com/doble-click/cine/20260703/cortometraje-boliviano-yatichana-conquista-dos-galardones)`,
    contentEn: `### Bolivian short film "Yatichana" wins two international awards

The Bolivian documentary short film **"Yatichana"** (to teach), directed by **Mauricio Panozo Montero**, won two international awards, placing Bolivian cinema on the global map.

#### First Place at My Hero International Film Festival

The film by the Cochabamba filmmaker reached **first place in the Best Documentary category** at the **My Hero International Film Festival 2025**, an event highlighting global stories that inspire through everyday heroism.

#### Recognition at the Telly Awards

The second achievement was at the **47th Annual Telly Awards**, Online Series-Social Impact category, within the **Solutions Storytelling Project Latin America**. This award recognizes the value of audiovisual narrative in making real solutions to social challenges visible.

#### Behind the Documentary

"Yatichana" reflects the story of an **indigenous woman dressed in traditional highland attire**, who works as a computer teacher in **Huaricana, La Paz**. She struggles to balance her passion for teaching, traveling long distances from home to work, using her creativity to overcome obstacles like limited technology access, while facing the responsibilities of being a mother.

Panozo said the short film stems from his experience working with communities and his commitment to making visible stories that often remain outside dominant narratives. Source: Los Tiempos.`,
    date: '2026-07-03',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://www.lostiempos.com/sites/default/files/media_imagen/2026/7/3/12_dc_cartelera_1.jpg',
    imageCaption: 'Afiche promocional del cortometraje "Yatichana". Foto: Cortesía / Los Tiempos',
    categoryEs: 'Cine',
    categoryEn: 'Film',
    enableComments: true,
    featured: true,
    views: 234,
    source: 'Los Tiempos',
    sourceUrl: 'https://www.lostiempos.com/doble-click/cine/20260703/cortometraje-boliviano-yatichana-conquista-dos-galardones'
  },
  {
    id: '16',
    slug: 'detras-epica-aventura-nolan-la-odisea',
    titleEs: 'Detrás de la épica aventura de Christopher Nolan para llevar "La Odisea" al cine',
    titleEn: 'Behind Christopher Nolan\'s epic adventure bringing "The Odyssey" to the big screen',
    excerptEs: 'Nolan viajó a seis países, usó barcos reales en mares reales y rodó íntegramente en película IMAX para su adaptación del poema homérico, la más ambiciosa de su carrera.',
    excerptEn: 'Nolan traveled to six countries, used real ships on real seas, and shot entirely in IMAX film for his adaptation of Homer\'s poem, the most ambitious of his career.',
    contentEs: `### Detrás de la épica aventura de Christopher Nolan para llevar "La Odisea" al cine

**Christopher Nolan** nunca ha tenido miedo de soñar en grande. Es casi una vocación. Con cada película, se ha exigido a sí mismo y al medio, explorando la forma, la narrativa, los aspectos visuales y las expectativas del público para crear espectáculos cinematográficos duraderos.

Todas las películas de Nolan son épicas a su manera. Pero para **"La Odisea"**, sabía que debía hacer algo acorde con el poema homérico y su lugar fundamental en la cultura occidental. El objetivo era lograr una película accesible y realista, lo que implicó viajar a **locaciones remotas, usar barcos reales en mares reales** y llevar al público a la cueva del cíclope, al interior del caballo de Troya y a la desolada extensión del Hades.

#### Una Producción Titánica

El viaje requirió una profunda investigación en la mitología griega, estudios de la Edad de Bronce y numerosas traducciones, una expedición de exploración de varios meses y un rodaje de **91 días que se extendió por seis meses y seis países**, durante el cual el elenco y el equipo enfrentaron todo tipo de climas, paisajes y los peligros del mar abierto.

Matt Damon, quien interpreta a Ulises, contó que Nolan se lo advirtió antes de empezar: "Me dijo que iba a ser difícil, y al principio no le di importancia. Pensé: 'Sí, sí, va a ser difícil'. Pero él insistió: 'No, no, esto va a ser realmente difícil'". A diferencia del largo viaje de Ulises de regreso a casa, la producción fue eficiente: terminaron nueve días antes de lo previsto.

#### Primer Largometraje Rodado Íntegramente en IMAX

"La Odisea" es el **primer largometraje de la historia rodado íntegramente en película IMAX**. Su estreno mundial está previsto para el **17 de julio**. "Todos conocemos el título, sabemos lo que significa, sabemos lo que promete y espero que el público que vea la película sienta que hemos cumplido esa promesa, porque esa es la gracia de 'La Odisea'. Es la historia de aventuras por excelencia", dijo Nolan.

[Fuente: Los Tiempos](https://www.lostiempos.com/doble-click/cine/20260714/detras-epica-aventura-christopher-nolan-llevar-odisea-al-cine)`,
    contentEn: `### Behind Christopher Nolan's epic adventure bringing "The Odyssey" to the big screen

**Christopher Nolan** has never been afraid to dream big. It is almost a calling. With each film, he has pushed himself and the medium, exploring form, narrative, visual aspects, and audience expectations to create lasting cinematic spectacles.

All of Nolan's films are epic in their own way. But for **"The Odyssey"**, he knew he had to do something worthy of Homer's poem and its foundational place in Western culture. The goal was to achieve an accessible and realistic film, which meant traveling to **remote locations, using real ships on real seas**, and taking audiences to the Cyclops' cave, inside the Trojan horse, and the desolate expanse of Hades.

#### A Titanic Production

The journey required deep research into Greek mythology, Bronze Age studies, and numerous translations, a months-long reconnaissance expedition, and **91 days of shooting spanning six months and six countries**. Matt Damon, who plays Odysseus, said Nolan warned him before starting: "He told me it was going to be difficult, and at first I didn't think much of it. But he insisted: 'No, this is going to be really difficult.'"

#### First Feature Film Shot Entirely in IMAX

"The Odyssey" is the **first feature film in history shot entirely in IMAX**. Its worldwide release is scheduled for **July 17**. Source: Los Tiempos.`,
    date: '2026-07-14',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://www.lostiempos.com/sites/default/files/media_imagen/2026/7/14/11_dc_1_11zon.jpg',
    imageCaption: 'Christopher Nolan en el set de "La Odisea". Foto: Universal Pictures / Los Tiempos',
    categoryEs: 'Cine',
    categoryEn: 'Film',
    enableComments: true,
    featured: true,
    views: 567,
    source: 'Los Tiempos',
    sourceUrl: 'https://www.lostiempos.com/doble-click/cine/20260714/detras-epica-aventura-christopher-nolan-llevar-odisea-al-cine'
  },
  {
    id: '17',
    slug: 'incentivo-produccion-audiovisual-cultural-2026',
    titleEs: 'Abren convocatoria para incentivar la producción audiovisual y cultural en Bolivia',
    titleEn: 'Call opens to incentivize audiovisual and cultural production in Bolivia',
    excerptEs: 'El Viceministerio de Culturas lanzó seis líneas de incentivo económico para trabajadores de las culturas, incluyendo una específica para creación y producción audiovisual y contenidos digitales.',
    excerptEn: 'The Vice Ministry of Cultures launched six lines of economic incentives for cultural workers, including one specifically for audiovisual creation, production, and digital content.',
    contentEs: `### Abren convocatoria para incentivar la producción audiovisual y cultural en Bolivia

El **Viceministerio de Culturas y Folklore** presentó las **Líneas de Incentivo para Actividades Culturales**, una convocatoria enmarcada en su **Plan de Acción de Emergencia** financiado con recursos del IDH, para mitigar el impacto de la crisis actual en el sector cultural.

El Viceministro de Culturas y Folklore, **Andrés Zaratti**, explicó que el sector cultural enfrenta profundos conflictos sociales que han puesto en evidencia la invisibilización de sus trabajadores, así como deficiencias estructurales en sus condiciones laborales. "Vimos pertinente lanzar un Plan de Acción de Emergencia que busque atenuar la situación crítica coyuntural, pero también generar acciones para reactivar el sector", afirmó.

#### Seis Líneas de Incentivo

El plan contempla **seis áreas de acción estratégica**:

1. **Impulso a Iniciativas Artísticas y Producción Cultural**: Apoyo a la creación y difusión del arte.
2. **Fortalecimiento de Culturas Vivas Comunitarias**: Respaldo a expresiones culturales de base social.
3. **Fortalecimiento de Espacios Culturales Autogestionados**: Sustento para centros independientes y archivos.
4. **Fomento a la Formación, Investigación y Gestión Cultural**: Desarrollo de capacidades.
5. **Incentivo a la Creación y Producción Audiovisual y de Contenidos Digitales**: Estímulo a formatos modernos y multimedia.
6. **Fortalecimiento de Festivales y Encuentros Culturales**: Sostén para eventos de gran alcance.

La **línea 5** es de particular interés para profesionales del audiovisual, ya que está específicamente diseñada para estimular la **creación y producción de contenido audiovisual y digital**, abriendo oportunidades para realizadores, camarógrafos y productores bolivianos.

#### Cómo Postular

Los interesados podrán postular hasta a **dos líneas de incentivo**. La convocatoria está abierta a nivel nacional para creadores, gestores, investigadores, colectivos y comunidades. Los resultados se publicarán el **24 de julio**, con ejecución de proyectos del **3 de agosto al 19 de noviembre**.

[Fuente: Red Uno](https://www.reduno.com.bo/noticias/abren-postulaciones-trabajadores-de-las-culturas-podran-recibir-apoyo-economico-202661919617)`,
    contentEn: `### Call opens to incentivize audiovisual and cultural production in Bolivia

The **Vice Ministry of Cultures and Folklore** presented the **Incentive Lines for Cultural Activities**, a call framed within its **Emergency Action Plan** financed with IDH resources, to mitigate the impact of the current crisis on the cultural sector.

#### Six Incentive Lines

The plan contemplates **six strategic action areas**:

1. **Promotion of Artistic Initiatives and Cultural Production**
2. **Strengthening of Living Community Cultures**
3. **Strengthening of Self-Managed Cultural Spaces**
4. **Promotion of Training, Research, and Cultural Management**
5. **Incentive for Audiovisual Creation, Production, and Digital Content**
6. **Strengthening of National and International Cultural Festivals**

**Line 5** is particularly relevant for audiovisual professionals, as it is specifically designed to stimulate the creation and production of audiovisual and digital content, opening opportunities for Bolivian filmmakers, cameramen, and producers.

Results will be published on **July 24**, with project execution from **August 3 to November 19**. Source: Red Uno.`,
    date: '2026-06-19',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://static.reduno.com.bo/img/estructura/header/logo.png',
    imageCaption: 'Líneas de Incentivo para Actividades Culturales 2026. Foto: Viceministerio de Culturas y Folklore / Red Uno',
    categoryEs: 'Cultura y Entretenimiento',
    categoryEn: 'Culture & Entertainment',
    enableComments: true,
    featured: false,
    views: 189,
    source: 'Red Uno',
    sourceUrl: 'https://www.reduno.com.bo/noticias/abren-postulaciones-trabajadores-de-las-culturas-podran-recibir-apoyo-economico-202661919617'
  },
  {
    id: '18',
    slug: 'festival-cine-salar-uyuni-2026',
    titleEs: 'Festival de Cine de Uyuni: seis filmes y concurso de cortos en pleno salar',
    titleEn: 'Uyuni Film Festival: six films and short film contest on the salt flat',
    excerptEs: 'El Salar de Uyuni será sede del primer Salar International Film Festival (SalarFF), del 30 de julio al 2 de agosto, con seis filmes internacionales, concurso de cortometrajes con premio de $us 5.000 y talleres con cineastas internacionales.',
    excerptEn: 'The Salar de Uyuni will host the first Salar International Film Festival (SalarFF), from July 30 to August 2, featuring six international films, a short film contest with a $5,000 prize, and workshops with international filmmakers.',
    contentEs: `### Salar International Film Festival: Cine a cielo abierto en el salar más grande del mundo

Por primera vez, el **Salar de Uyuni** se convertirá en una sala de cine a cielo abierto con la realización del **Salar International Film Festival (SalarFF)**, un evento impulsado por el cineasta boliviano **Rodrigo Bellott** que se llevará a cabo del **30 de julio al 2 de agosto**.

#### Programación

El festival presentará **seis largometrajes**, de los cuales **cuatro son internacionales** (Paraguay, España, Venezuela e India) y **dos bolivianos**, incluyendo uno filmado íntegramente en el propio Salar de Uyuni. Las películas seleccionadas no están disponibles en salas comerciales ni plataformas streaming, lo que convierte al festival en una oportunidad única para verlas en pantalla grande.

Se instalarán **dos pantallas de cine en pleno salar**, una propuesta que Bellott calificó como un desafío *"quijotesco"*.

#### Concurso de Cortometrajes

El festival incluye un **concurso abierto** para que cualquier persona, con o sin experiencia audiovisual, realice un cortometraje durante el festival utilizando incluso un teléfono celular. Los trabajos deben filmarse en el Salar de Uyuni y los ganadores serán proyectados durante la clausura y posteriormente en **'El Festivalito'** (Festival Internacional de Cine Chico de Canarias, España). Más de **50 personas** ya se han inscrito para competir por premios de **$us 5.000**.

#### Talleres y Formación

La programación contempla espacios de formación con especialistas internacionales, incluyendo un director de fotografía de Estados Unidos, un productor radicado en Los Ángeles, un productor paraguayo premiado, el director de un festival de cine español y un actor y productor ruso.

#### Organización

El festival es una iniciativa de **Una Gran Nación (UGN)**, en alianza con Hidalgo Corporation y Rodrigo Bellott, con el respaldo del Ministerio de Turismo Sostenible, Culturas, Folklore y Gastronomía.

**Información:** www.salarfilmfestival.com

[Fuente: El Deber](https://eldeber.com.bo/cultura-y-entretenimiento/festival-cine-uyuni-ofrece-programa-seis-filmes-concurso-cortos_1783634712)`,
    contentEn: `### Salar International Film Festival: Open-air cinema on the world's largest salt flat

For the first time, the **Salar de Uyuni** will become an open-air cinema with the **Salar International Film Festival (SalarFF)**, driven by Bolivian filmmaker **Rodrigo Bellott**, taking place from **July 30 to August 2**.

The festival will feature **six feature films** — four international (Paraguay, Spain, Venezuela, India) and two Bolivian, including one filmed entirely on the salt flat. Two cinema screens will be installed on the salt flat itself.

An **open short film contest** invites anyone — with or without experience — to make a short film using even a cell phone. Winners will be screened at the closing ceremony and later at Spain's 'El Festivalito'. Over **50 people** have already registered, competing for **$5,000 USD** in prizes.

The program also includes **master classes** with international specialists in cinematography, production, and film festival strategy.

[Source: El Deber](https://eldeber.com.bo/cultura-y-entretenimiento/festival-cine-uyuni-ofrece-programa-seis-filmes-concurso-cortos_1783634712)`,
    date: '2026-07-09',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: '/images/blog/salar-uyuni-festival.jpg',
    imageCaption: 'Vista del Salar de Uyuni. Foto: El Deber',
    categoryEs: 'Festivales',
    categoryEn: 'Festivals',
    enableComments: true,
    featured: true,
    views: 234,
    source: 'El Deber',
    sourceUrl: 'https://eldeber.com.bo/cultura-y-entretenimiento/festival-cine-uyuni-ofrece-programa-seis-filmes-concurso-cortos_1783634712'
  },
  {
    id: '19',
    slug: 'red-uno-xona-streaming',
    titleEs: 'Red Uno lanza Xona Streaming: nuevo canal digital con estudio propio',
    titleEn: 'Red Uno launches Xona Streaming: new digital channel with its own studio',
    excerptEs: 'Red Uno de Bolivia lanzó Xona Streaming, una nueva señal digital con programación original, estudio independiente y control central propio, buscando captar audiencia joven con contenidos exclusivos.',
    excerptEn: 'Red Uno de Bolivia launched Xona Streaming, a new digital channel with original programming, its own independent studio, and control center, targeting young audiences with exclusive content.',
    contentEs: `### Red Uno lanza Xona Streaming con programación original

**Red Uno de Bolivia** lanzó **Xona Streaming**, una nueva señal digital con programación original, estudio propio y una estrategia orientada a captar al público joven que ya no consume televisión abierta de forma tradicional. La iniciativa se suma a la expansión de infraestructura del canal y refuerza su posicionamiento como uno de los grupos con mayor capacidad de producción local en Bolivia.

#### Programación exclusiva

Desde el **11 de mayo** iniciaron las emisiones de los primeros **cuatro programas exclusivos**: **Pulso**, **Minuto a minuto**, **Desprogramados** y **Pura data sin filtro**. Red Uno combinó figuras reconocidas de la televisión con nuevos talentos e influencers con presencia en redes sociales.

Liliana Castillo, jefa de Programación y Emisión de Red Uno, explicó que no se trata de una simple retransmisión de la pantalla abierta, sino de una operación paralela con identidad propia. *"Tiene su propio ADN, su propio lenguaje, su propia programación"*, afirmó.

#### Disponibilidad

La nueva señal está disponible en **YouTube**, **TikTok** y en el sitio web de Red Uno. La oferta incluye una revista matinal diaria como programa ancla, además de espacios de farándula, deportes, contenidos para madres e hijos y formatos juveniles.

#### Infraestructura

Xona Streaming cuenta con **estudio independiente**, control central propio, oficinas exclusivas y equipamiento específico para producción digital. Red Uno también renovó sus unidades móviles para streaming, ampliando servicios comerciales y coberturas especiales.

En Santa Cruz, el canal opera **tres locaciones con estudios**. Su **Estudio 5**, de **mil metros cuadrados**, es presentado como el más grande de Bolivia y alberga diariamente hasta tres shows en vivo con escenografías de gran formato.

[Fuente: PRODU](https://www.produ.com/television/noticias/red-uno-lanza-su-canal-xona-streaming-y-expande-su-capacidad-de-produccion-en-bolivia/)`,
    contentEn: `### Red Uno launches Xona Streaming with original programming

**Red Uno de Bolivia** launched **Xona Streaming**, a new digital channel with original programming, its own studio, and a strategy aimed at capturing young audiences who no longer consume traditional broadcast television.

Since **May 11**, the first **four exclusive programs** began airing: **Pulso**, **Minuto a minuto**, **Desprogramados**, and **Pura data sin filtro**. The channel combines established TV figures with new talents and social media influencers.

Xona Streaming features its own **independent studio**, control center, and dedicated equipment for digital production. Red Uno also upgraded its mobile streaming units. The signal is available on **YouTube**, **TikTok**, and Red Uno's website.

In Santa Cruz, the network operates **three studio locations**. Its **Studio 5**, spanning **1,000 square meters**, is presented as the largest in Bolivia and hosts up to three live shows daily.

[Source: PRODU](https://www.produ.com/television/noticias/red-uno-lanza-su-canal-xona-streaming-y-expande-su-capacidad-de-produccion-en-bolivia/)`,
    date: '2026-05-11',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://picsum.photos/seed/red-uno-xona/1200/630',
    imageCaption: 'Xona Streaming, la nueva señal digital de Red Uno. Foto: PRODU',
    categoryEs: 'Televisión',
    categoryEn: 'Television',
    enableComments: true,
    featured: false,
    views: 198,
    source: 'PRODU',
    sourceUrl: 'https://www.produ.com/television/noticias/red-uno-lanza-su-canal-xona-streaming-y-expande-su-capacidad-de-produccion-en-bolivia/'
  },
  {
    id: '20',
    slug: 'documental-travesia-tierra-cinemateca',
    titleEs: '"A través de la tierra": documental sobre migración boliviana se estrena en la Cinemateca',
    titleEn: '"Through the Earth": documentary about Bolivian migration premieres at Cinemateca',
    excerptEs: 'El documental de Malena Bystrowicz y Loreley Unamuno, filmado durante 6 años, sigue la vida de dos mujeres bolivianas migrantes en Argentina. Se estrenó en la Cinemateca Boliviana cerrando el círculo del viaje que narra.',
    excerptEn: 'The documentary by Malena Bystrowicz and Loreley Unamuno, filmed over 6 years, follows the lives of two Bolivian women migrants in Argentina. It premiered at the Cinemateca Boliviana, closing the circle of the journey it portrays.',
    contentEs: `### "A través de la tierra": migración, memoria y saberes aymaras

El documental **"A través de la tierra"**, de las realizadoras **Malena Bystrowicz** y **Loreley Unamuno**, se estrenó en Bolivia el **26 de febrero de 2026** en la **Cinemateca Boliviana**, cerrando simbólicamente el círculo del viaje que narra.

#### La historia

Filmado durante **seis años** entre Bolivia y Argentina, el documental sigue la vida de **Blanca y Patzi**, dos mujeres bolivianas que migraron a Argentina llevando consigo saberes y tradiciones aymaras. La película aborda temas como el racismo, la discriminación y las redes de cuidado en la diáspora boliviana.

#### Una coproducción binacional

Se trata de una **coproducción Argentina-Bolivia** que retrata con sensibilidad las realidades de la migración contemporánea, mostrando cómo las protagonistas mantienen vivas sus raíces culturales mientras construyen nuevas vidas en un país extranjero.

El documental fue bien recibido por la crítica y el público boliviano, destacando su mirada íntima y respetuosa sobre las experiencias de la comunidad boliviana en el exterior.

[Fuente: EntreCruzar](https://entrecruzar.com/nota-de-prensa-a-traves-de-la-tierra-el-nuevo-documental-de-bystrowicz-y-unamuno-se-estrena-en-bolivia/)`,
    contentEn: `### "Through the Earth": migration, memory, and Aymara knowledge

The documentary **"Through the Earth"** (**A través de la tierra**), by filmmakers **Malena Bystrowicz** and **Loreley Unamuno**, premiered in Bolivia on **February 26, 2026** at the **Cinemateca Boliviana**, symbolically closing the circle of the journey it portrays.

Filmed over **six years** between Bolivia and Argentina, the documentary follows **Blanca and Patzi**, two Bolivian women who migrated to Argentina carrying Aymara knowledge and traditions. The film addresses racism, discrimination, and care networks within the Bolivian diaspora.

This **Argentina-Bolivia co-production** portrays contemporary migration realities with sensitivity, showing how the protagonists keep their cultural roots alive while building new lives abroad.

[Source: EntreCruzar](https://entrecruzar.com/nota-de-prensa-a-traves-de-la-tierra-el-nuevo-documental-de-bystrowicz-y-unamuno-se-estrena-en-bolivia/)`,
    date: '2026-02-26',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://picsum.photos/seed/documental-travesia/1200/630',
    imageCaption: 'Afiche promocional de "A través de la tierra". Foto: EntreCruzar',
    categoryEs: 'Documental',
    categoryEn: 'Documentary',
    enableComments: true,
    featured: false,
    views: 156,
    source: 'EntreCruzar',
    sourceUrl: 'https://entrecruzar.com/nota-de-prensa-a-traves-de-la-tierra-el-nuevo-documental-de-bystrowicz-y-unamuno-se-estrena-en-bolivia/'
  },
  {
    id: '21',
    slug: 'documental-mi-cuerpo-mi-territorio-youtube',
    titleEs: '"Mi cuerpo, mi territorio": documental premiado se libera gratis en YouTube',
    titleEn: '"My Body, My Territory": award-winning documentary released free on YouTube',
    excerptEs: 'El cortometraje documental que retrata la resistencia de seis mujeres chiquitanas frente a los incendios forestales y el extractivismo, ganador del FENAVID 2025, ya está disponible gratuitamente en YouTube.',
    excerptEn: 'The short documentary portraying the resistance of six Chiquitano women against forest fires and extractivism, winner at FENAVID 2025, is now available for free on YouTube.',
    contentEs: `### "Mi cuerpo, mi territorio" se libera en YouTube tras éxito nacional e internacional

El cortometraje documental **"Mi cuerpo, mi territorio"**, de **18 minutos** de duración, ya está disponible gratuitamente en **YouTube** tras su exitoso paso por festivales nacionales e internacionales.

#### La historia

El documental retrata la **resistencia de seis mujeres chiquitanas** frente a los **incendios forestales** y el **extractivismo** en la región de la Chiquitania boliviana. A través de sus testimonios, las protagonistas muestran cómo la destrucción del territorio afecta directamente sus cuerpos, sus medios de vida y su cultura.

#### Reconocimientos

La producción fue galardonada como **Mejor Cortometraje Documental Boliviano** en el **Festival Internacional de Cine de Santa Cruz (FENAVID) 2025**, y fue seleccionada para importantes eventos internacionales como **SUNCINE** (Festival Internacional de Cine del Medio Ambiente, España) y la **COP30** en Brasil.

#### Disponibilidad

Ahora el documental está disponible de forma **libre y gratuita** en YouTube, permitiendo que un público más amplio pueda acceder a esta poderosa historia de resistencia y lucha ambiental.

[Fuente: Revista Nómadas](https://revistanomadas.com/mi-cuerpo-mi-territorio-se-libera-en-youtube-tras-su-exito-nacional-e-internacional/)`,
    contentEn: `### "My Body, My Territory" released on YouTube after national and international success

The short documentary **"My Body, My Territory"** (**Mi cuerpo, mi territorio**), **18 minutes** long, is now available for free on **YouTube** after a successful run at national and international festivals.

The film portrays the **resistance of six Chiquitano women** against **forest fires** and **extractivism** in Bolivia's Chiquitania region. It won **Best Bolivian Short Documentary** at **FENAVID 2025** and was selected for **SUNCINE** (Spain) and **COP30** in Brazil.

The documentary is now freely available on YouTube, allowing wider access to this powerful story of environmental resistance.

[Source: Revista Nómadas](https://revistanomadas.com/mi-cuerpo-mi-territorio-se-libera-en-youtube-tras-su-exito-nacional-e-internacional/)`,
    date: '2026-02-04',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://picsum.photos/seed/mi-cuerpo-territorio/1200/630',
    imageCaption: 'Fotograma del documental "Mi cuerpo, mi territorio". Foto: Revista Nómadas',
    categoryEs: 'Documental',
    categoryEn: 'Documentary',
    enableComments: true,
    featured: false,
    views: 312,
    source: 'Revista Nómadas',
    sourceUrl: 'https://revistanomadas.com/mi-cuerpo-mi-territorio-se-libera-en-youtube-tras-su-exito-nacional-e-internacional/'
  },
  {
    id: '22',
    slug: 'serie-boliviana-inteligencia-artificial',
    titleEs: 'Estrenan "En el nombre de Pío": primera serie boliviana creada íntegramente con IA',
    titleEn: '"In the Name of Pío": first Bolivian series created entirely with AI premieres',
    excerptEs: 'El publicista Fernando Revollo ("El FEO") lanzó la primera serie boliviana desarrollada completamente con Inteligencia Artificial generativa, explorando una estética de misterio y personajes surrealistas.',
    excerptEn: 'Advertising creative Fernando Revollo ("El FEO") launched the first Bolivian series developed entirely with generative Artificial Intelligence, exploring a mystery aesthetic with surrealist characters.',
    contentEs: `### "En el nombre de Pío": un hito en la producción digital boliviana

El publicista boliviano **Fernando Revollo**, conocido como **"El FEO"**, lanzó **"En el nombre de Pío"**, la **primera serie boliviana desarrollada completamente con Inteligencia Artificial generativa**, marcando un hito en la producción de contenido digital en Bolivia.

#### Una apuesta por la innovación

La serie explora una **estética de misterio** con personajes surrealistas, creados enteramente mediante herramientas de **IA generativa** que incluyen desde la generación de imágenes y animación hasta la composición de bandas sonoras. El proyecto demuestra cómo las nuevas tecnologías están democratizando la producción audiovisual, permitiendo a creadores individuales producir contenido de alta calidad sin necesidad de grandes equipos técnicos.

#### Implicaciones para la industria

El lanzamiento de esta serie abre un debate sobre el futuro de la producción audiovisual en Bolivia. Mientras algunos ven en la IA una herramienta para reducir costos y acelerar procesos, otros advierten sobre los desafíos éticos y laborales que plantea para los profesionales del sector.

La serie está disponible en plataformas digitales y representa un experimento pionero que podría marcar el rumbo de futuras producciones en el país.

[Fuente: VivePotosí](https://vivepotosi.com/2026/07/estrenan-serie-boliviana-creada-con-ia-por-el-publicista-el-feo/)`,
    contentEn: `### "In the Name of Pío": a milestone in Bolivian digital production

Bolivian advertising creative **Fernando Revollo** ("El FEO") launched **"En el nombre de Pío"**, the **first Bolivian series developed entirely with generative Artificial Intelligence**, marking a milestone in digital content production in Bolivia.

The series explores a **mystery aesthetic** with surrealist characters, created entirely through **generative AI** tools — from image generation and animation to soundtrack composition. The project demonstrates how new technologies are democratizing audiovisual production, allowing individual creators to produce high-quality content without large technical teams.

The launch opens debate about the future of audiovisual production in Bolivia, with implications for costs, creative possibilities, and professional challenges for the industry.

[Source: VivePotosí](https://vivepotosi.com/2026/07/estrenan-serie-boliviana-creada-con-ia-por-el-publicista-el-feo/)`,
    date: '2026-07-07',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://picsum.photos/seed/serie-ia-bolivia/1200/630',
    imageCaption: 'Escena de "En el nombre de Pío", creada con IA. Foto: VivePotosí',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 445,
    source: 'VivePotosí',
    sourceUrl: 'https://vivepotosi.com/2026/07/estrenan-serie-boliviana-creada-con-ia-por-el-publicista-el-feo/'
  },
  {
    id: '23',
    slug: 'messi-bombon-asesino-himno-argentino',
    titleEs: '¡Messi quedó en shock! Pusieron "Bombón Asesino" en vez del himno argentino',
    titleEn: 'Messi in shock! They played "Bombón Asesino" instead of the Argentine national anthem',
    excerptEs: 'Un insólito error técnico en la antesala de un partido amistoso reemplazó el himno argentino por la popular cumbia santafesina, desatando risas y memes en todo el mundo.',
    excerptEn: 'A bizarre technical error before a friendly match replaced the Argentine anthem with the popular Santa Fe cumbia hit, sparking laughter and memes worldwide.',
    contentEs: `<h1>¡Messi quedó en shock! Pusieron "Bombón Asesino" en vez del himno argentino</h1>
<p><em>Un fallo de audio en Texas descolocó a la selección argentina cuando los parlantes del estadio soltaron cumbia santafesina en lugar del himno nacional. El video se disparó en redes en cuestión de segundos.</em></p>
<h2>Seis segundos de caos protocolar</h2>
<p>Era el momento más solemne del prepartido. Los jugadores de <strong>Argentina y Honduras</strong> estaban formados en el campo del <strong>Kyle Field en Texas</strong>, brazos sobre los hombros, cuando algo salió mal. En vez de las estrofas patrias, desde las bocinas comenzaron a sonar los acordes de <strong>"Bombón Asesino"</strong>, el éxito de Los Palmeras.</p>
<p><strong>Lionel Messi</strong>, en el banco de suplentes, soltó una carcajada inmediata. A su lado, Enzo Fernández y Rodrigo de Paul intercambiaron miradas que los memes convirtieron en oro digital.</p>
<h2>Los Palmeras se enteraron antes de que terminara el partido</h2>
<p><strong>Marcos Camino Jr.</strong>, vocalista de la banda santafesina, contó que los mensajes empezaron a llegarles antes del pitido final. "Teníamos todos los chicos el teléfono explotado", relató. A las semanas, el grupo lanzó <strong>"Bombón argentino"</strong>, una canción que nació directamente del error de sonido.</p>
<blockquote>"La reacción de los jugadores, de Messi, para nosotros es algo increíble". — Marcos Camino Jr., vocalista de Los Palmeras</blockquote>
<ul>
<li><strong>Lugar:</strong> Kyle Field, College Station, Texas</li>
<li><strong>Partido:</strong> Argentina vs. Honduras (amistoso pre-Mundial 2026)</li>
<li><strong>Tema que sonó:</strong> "Bombón Asesino" — Los Palmeras</li>
<li><strong>Impacto:</strong> Millones de vistas en TikTok, X e Instagram en horas</li>
</ul>
<p><small>Fuente: ATB Digital</small></p>`,
    contentEn: `<h1>Messi in shock! They played "Bombón Asesino" instead of the Argentine anthem</h1>
<p><em>A sound system failure in Texas threw Argentina's national team off when stadium speakers blasted cumbia instead of the national anthem. The video exploded across social media in seconds.</em></p>
<h2>Six seconds of protocol chaos</h2>
<p>It was the most solemn moment before kickoff. The players of <strong>Argentina and Honduras</strong> stood lined up at <strong>Kyle Field in Texas</strong>, arms over each other's shoulders, when something went wrong. Instead of the national anthem, the speakers began playing <strong>"Bombón Asesino"</strong>, the hit by Los Palmeras.</p>
<p><strong>Lionel Messi</strong>, watching from the bench, burst into laughter. Next to him, Enzo Fernández and Rodrigo de Paul exchanged glances that memes turned into digital gold.</p>
<h2>Los Palmeras found out before the game ended</h2>
<p><strong>Marcos Camino Jr.</strong>, lead singer of the Santa Fe band, said messages started pouring in before the final whistle. Weeks later, the group released <strong>"Bombón argentino"</strong>, a song born directly from the audio glitch.</p>
<blockquote>"The players' reaction, Messi's — for us, it's incredible." — Marcos Camino Jr., lead singer of Los Palmeras</blockquote>
<ul>
<li><strong>Location:</strong> Kyle Field, College Station, Texas</li>
<li><strong>Match:</strong> Argentina vs. Honduras (pre-World Cup 2026 friendly)</li>
<li><strong>Song played:</strong> "Bombón Asesino" — Los Palmeras</li>
<li><strong>Impact:</strong> Millions of views on TikTok, X, and Instagram within hours</li>
</ul>
<p><small>Source: ATB Digital</small></p>`,
    date: '2026-06-17',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=1200&h=630&fit=crop',
    imageCaption: 'Messi reacciona con sorpresa al escuchar "Bombón Asesino" en lugar del himno argentino. Foto: Captura de video ATB',
    categoryEs: 'Virales',
    categoryEn: 'Viral',
    enableComments: true,
    featured: true,
    views: 3520,
    source: 'ATB Digital',
    sourceUrl: 'https://www.atb.com.bo/2026/06/17/messi-quedo-en-shock-pusieron-bombon-asesino-en-vez-del-himno-argentino/'
  },
  {
    id: '24',
    slug: 'morsa-abdominales-viral',
    titleEs: 'Morsa sorprende al hacer abdominales como toda una atleta',
    titleEn: 'Walrus surprises by doing sit-ups like a true athlete',
    excerptEs: 'Un video de una morsa realizando abdominales con una técnica "mejor que la de varios humanos" se volvió viral, acumulando millones de reproducciones en redes sociales.',
    excerptEn: 'A video of a walrus doing sit-ups with a technique "better than many humans" went viral, amassing millions of views across social media.',
    contentEs: `<h1>Morsa sorprende al hacer abdominales como toda una atleta</h1>
<p><em>Un video grabado en un zoológico marino muestra a una morsa ejecutando una rutina de abdominales con una técnica que muchos usuarios calificaron como "mejor que la de varios humanos".</em></p>
<h2>La rutina que desconcertó a Internet</h2>
<p>Lo que comenzó como una escena curiosa dentro de un zoológico marino terminó convertido en uno de los clips más replicados del mes. Una <strong>morsa</strong> aparece realizando <strong>abdominales</strong> con movimientos firmes, repetitivos y perfectamente coordinados. Los visitantes que grabaron la escena no podían creer lo que veían.</p>
<h2>Dudas sobre su autenticidad</h2>
<p>La primera reacción de muchos usuarios fue asumir que se trataba de un montaje con inteligencia artificial o edición digital. Sin embargo, el video es <strong>100% real</strong>, grabado sin trucos ni efectos. El animal ejecuta cada repetición con una constancia que dejó a los espectadores preguntándose si realmente estaban viendo a una morsa "entrenando".</p>
<ul>
<li><strong>Especie:</strong> Odobenus rosmarus (morsa atlántica)</li>
<li><strong>Ubicación:</strong> Zoológico marino no especificado</li>
<li><strong>Duración del video:</strong> Menos de 60 segundos</li>
<li><strong>Alcance:</strong> Millones de reproducciones en TikTok</li>
</ul>
<blockquote>"¿Alguna vez te imaginaste ver una morsa haciendo abdominales? La naturaleza siempre puede superar cualquier expectativa humana". — Comentario viral en redes</blockquote>
<p><small>Fuente: ATB Digital</small></p>`,
    contentEn: `<h1>Walrus surprises by doing sit-ups like a true athlete</h1>
<p><em>A video shot at a marine zoo shows a walrus performing a sit-up routine with a technique that many users called "better than many humans."</em></p>
<h2>The workout that baffled the Internet</h2>
<p>What started as a curious scene inside a marine zoo turned into one of the most shared clips of the month. A <strong>walrus</strong> appears doing <strong>sit-ups</strong> with firm, repetitive, perfectly coordinated movements. Visitors who recorded the scene could not believe what they were seeing.</p>
<h2>Doubts about authenticity</h2>
<p>Many users' first reaction was to assume it was an AI or digital editing trick. However, the video is <strong>100% real</strong>, recorded without tricks or effects. The animal executes each repetition with a consistency that left viewers wondering if they were really watching a walrus "working out."</p>
<ul>
<li><strong>Species:</strong> Odobenus rosmarus (Atlantic walrus)</li>
<li><strong>Location:</strong> Unspecified marine zoo</li>
<li><strong>Video length:</strong> Under 60 seconds</li>
<li><strong>Reach:</strong> Millions of views on TikTok</li>
</ul>
<blockquote>"Did you ever imagine seeing a walrus doing sit-ups? Nature always exceeds human expectations." — Viral comment on social media</blockquote>
<p><small>Source: ATB Digital</small></p>`,
    date: '2026-06-17',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1583212294608-0e09364a7c4d?w=1200&h=630&fit=crop',
    imageCaption: 'Morsa realizando abdominales en un zoológico marino. Foto: Captura de video ATB',
    categoryEs: 'Virales',
    categoryEn: 'Viral',
    enableComments: true,
    featured: false,
    views: 2840,
    source: 'ATB Digital',
    sourceUrl: 'https://www.atb.com.bo/2026/06/17/morsa-sorprende-al-hacer-abdominales-como-toda-una-atleta/'
  },
  {
    id: '25',
    slug: 'chucky-micro-el-torno',
    titleEs: '¡Chucky rumbo a El Torno! El famoso muñeco sorprendió a pasajeros',
    titleEn: 'Chucky heading to El Torno! The famous doll surprised passengers',
    excerptEs: 'Un pasajero viajaba en un micro con un muñeco de Chucky, moviéndole los brazos como si el personaje de terror fuera un pasajero más. El video se volvió viral.',
    excerptEn: 'A passenger rode a bus with a Chucky doll, moving its arms as if the horror character were just another passenger. The video went viral.',
    contentEs: `<h1>¡Chucky viajó en micro a El Torno! El muñeco diabólico se volvió viral en Santa Cruz</h1>
<p><em>Un pasajero abordó el transporte público con un muñeco de Chucky y le movía los brazos como si fuera un pasajero más. El video incendió las redes en cuestión de minutos.</em></p>
<h2>Escena de terror cómico sobre ruedas</h2>
<p>Los pasajeros de un <strong>micro de la ruta hacia El Torno</strong>, en Santa Cruz, vivieron un momento que no esperaban. En el asiento trasero, un hombre viajaba con un <strong>muñeco de Chucky</strong> —el famoso personaje de la saga "Child's Play"— sentado a su lado. El pasajero le movía los brazos al muñeco mientras este "miraba" por la ventanilla, como si fuera un viajero más.</p>
<p>La escena, registrada por otros pasajeros, muestra al "muñeco diabólico" completamente inmóvil, pero con los brazos en movimiento gracias a su acompañante. El contraste entre el terror del personaje y la cotidianidad del micro generó cientos de miles de reacciones.</p>
<h2>"Vayas donde vayas, Chucky te encontrará"</h2>
<p>La frase acompañó al video en cada republicación. Usuarios de <strong>TikTok, X y Facebook</strong> hicieron montajes, edits y memes. Algunos incluso sugirieron que Chucky "estaba de paseo" por la capital cruceña antes de continuar su "gira" por el municipio de El Torno.</p>
<ul>
<li><strong>Ruta:</strong> Micro hacia El Torno, Santa Cruz</li>
<li><strong>Protagonista:</strong> Muñeco de Chucky (Child's Play)</li>
<li><strong>Reacción de pasajeros:</strong> Asombro y risas, seguido de grabación inmediata</li>
<li><strong>Alcance:</strong> Viral nacional en menos de 2 horas</li>
</ul>
<blockquote>"Vayas donde vayas, Chucky te encontrarás". — Comentario viral en redes sociales</blockquote>
<p><small>Fuente: Unitel</small></p>`,
    contentEn: `<h1>Chucky rode the bus to El Torno! The demonic doll went viral in Santa Cruz</h1>
<p><em>A passenger boarded public transit with a Chucky doll, moving its arms as if it were just another rider. The video set social media on fire within minutes.</em></p>
<h2>A scene of comedic horror on wheels</h2>
<p>Passengers on a <strong>bus heading to El Torno</strong>, in Santa Cruz, experienced an unexpected moment. In the back seat, a man traveled with a <strong>Chucky doll</strong> —the famous character from the "Child's Play" saga— sitting beside him. The passenger moved the doll's arms while it "looked" out the window, as if it were just another traveler.</p>
<p>The scene, recorded by other passengers, shows the "demonic doll" completely still but with its arms moving thanks to its companion. The contrast between the character's horror and the everyday bus ride generated hundreds of thousands of reactions.</p>
<h2>"Wherever you go, Chucky will find you"</h2>
<p>The phrase accompanied the video in every repost. Users on <strong>TikTok, X, and Facebook</strong> created edits, montages, and memes. Some even suggested Chucky was "sightseeing" in Santa Cruz before continuing his "tour" to El Torno.</p>
<ul>
<li><strong>Route:</strong> Bus to El Torno, Santa Cruz</li>
<li><strong>Star:</strong> Chucky doll (Child's Play)</li>
<li><strong>Passenger reaction:</strong> Astonishment and laughter, followed by immediate recording</li>
<li><strong>Reach:</strong> Nationally viral in under 2 hours</li>
</ul>
<blockquote>"Wherever you go, Chucky will find you." — Viral comment on social media</blockquote>
<p><small>Source: Unitel</small></p>`,
    date: '2026-07-21',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=630&fit=crop',
    imageCaption: 'Pasajero viaja con muñeco de Chucky en micro rumbo a El Torno, Santa Cruz. Foto: Captura de video Unitel',
    categoryEs: 'Virales',
    categoryEn: 'Viral',
    enableComments: true,
    featured: false,
    views: 1890,
    source: 'Unitel',
    sourceUrl: 'https://unitel.bo/noticias/virales/chucky-rumbo-a-el-torno-el-famoso-muneco-sorprendio-a-pasajeros-CC22314170'
  },
  {
    id: '26',
    slug: 'abuelita-invento-casero-bicicleta',
    titleEs: 'Abuelita conquista las redes con ingenioso invento casero que combina bicicleta y caminadora',
    titleEn: 'Grandma conquers the internet with ingenious homemade invention combining bike and treadmill',
    excerptEs: 'Un invento casero creado por un "genio inventor" para su esposa permite caminar y pedalear al mismo tiempo, demostrando que las ideas simples pueden transformar la calidad de vida.',
    excerptEn: 'A homemade invention created by a "genius inventor" for his wife allows walking and pedaling at the same time, proving that simple ideas can transform quality of life.',
    contentEs: `<h1>Abuelita rusa conquista TikTok con el invento casero de su esposo: bicicleta y caminadora en una</h1>
<p><em>Un "genio inventor" le construyó a su esposa un vehículo que combina bicicleta y caminadora. Ella lo usa para ir de compras. El video acumula millones de reproducciones.</em></p>
<h2>La máquina que nació del cariño</h2>
<p>Mientras las grandes empresas compiten por lanzar el dispositivo más sofisticado, un <strong>matrimonio ruso</strong> demostró que la mejor innovación nace de las necesidades cotidianas. El esposo, a quien su mujer describe como un <strong>"genio inventor"</strong>, diseñó y construyó un aparato que <strong>fusiona una bicicleta con un caminador</strong>.</p>
<p>En el video se ve a la abuelita pedaleando tranquilamente mientras, al mismo tiempo, sus pies caminan sobre una base móvil. El invento le permite <strong>hacer ejercicio mientras hace compras</strong> o simplemente pasea por su vecindario.</p>
<h2>Ingeniería low-cost con resultados virales</h2>
<p>El clip, difundido por <strong>ATB Media</strong> en TikTok, no requiere edición ni efectos especiales: muestra la realidad de un hogar donde la creatividad resolvió un problema con materiales accesibles. Los comentarios destacan "el amor del esposo" y "la sencillez de la solución" por encima de cualquier tecnología cara.</p>
<ul>
<li><strong>Inventor:</strong> Esposo anónimo, llamado "genio inventor" por su esposa</li>
<li><strong>Dispositivo:</strong> Bicicleta estática adaptada con caminadora incorporada</li>
<li><strong>Uso principal:</strong> Desplazamiento y ejercicio simultáneo</li>
<li><strong>Origen:</strong> Rusia</li>
</ul>
<blockquote>"No necesita gimnasio ni membresía. Con amor y creatividad, cualquier cosa es posible". — Comentario destacado en TikTok</blockquote>
<p><small>Fuente: ATB Digital</small></p>`,
    contentEn: `<h1>Russian grandma conquers TikTok with her husband's homemade invention: bike and treadmill in one</h1>
<p><em>A "genius inventor" built his wife a vehicle that combines a bicycle with a treadmill. She uses it to go grocery shopping. The video has millions of views.</em></p>
<h2>The machine born from love</h2>
<p>While big companies compete to launch the most sophisticated device, a <strong>Russian couple</strong> proved that the best innovation comes from everyday needs. The husband, whom his wife affectionately calls a <strong>"genius inventor"</strong>, designed and built a device that <strong>fuses a bicycle with a walker</strong>.</p>
<p>The video shows the grandmother pedaling calmly while, at the same time, her feet walk on a moving base. The invention lets her <strong>exercise while shopping</strong> or simply strolling through her neighborhood.</p>
<h2>Low-cost engineering with viral results</h2>
<p>The clip, shared by <strong>ATB Media</strong> on TikTok, needs no editing or special effects: it shows a household where creativity solved a problem with accessible materials. Comments highlight "the husband's love" and "the simplicity of the solution" over any expensive technology.</p>
<ul>
<li><strong>Inventor:</strong> Anonymous husband, called "genius inventor" by his wife</li>
<li><strong>Device:</strong> Adapted stationary bike with built-in treadmill</li>
<li><strong>Main use:</strong> Simultaneous transportation and exercise</li>
<li><strong>Origin:</strong> Russia</li>
</ul>
<blockquote>"No gym or membership needed. With love and creativity, anything is possible." — Top comment on TikTok</blockquote>
<p><small>Source: ATB Digital</small></p>`,
    date: '2026-06-17',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=1200&h=630&fit=crop',
    imageCaption: 'Abuelita rusa usando su invento casero que combina bicicleta y caminadora. Foto: Captura de video ATB',
    categoryEs: 'Virales',
    categoryEn: 'Viral',
    enableComments: true,
    featured: false,
    views: 1560,
    source: 'ATB Digital',
    sourceUrl: 'https://www.atb.com.bo/2026/06/17/abuelita-conquista-las-redes-con-ingenioso-invento-casero/'
  },
  {
    id: '27',
    slug: 'gatito-maullidos-michael-jackson',
    titleEs: 'Gatito conquista las redes con maullidos al estilo de Michael Jackson',
    titleEn: 'Kitten conquers social media with Michael Jackson-style meows',
    excerptEs: 'Un pequeño felino emite maullidos que los usuarios compararon con los característicos sonidos vocales del Rey del Pop, convirtiéndose en la nueva sensación viral.',
    excerptEn: 'A tiny feline emits meows that users compared to the King of Pop\'s signature vocal sounds, becoming the latest viral sensation.',
    contentEs: `<h1>Gatito conquista las redes: sus maullidos suenan como Michael Jackson</h1>
<p><em>Un pequeño felino emite una serie de maullidos que los usuarios compararon instantáneamente con los vocalizos del Rey del Pop. El video cruzó fronteras en cuestión de horas.</em></p>
<h2>Un minuto de fama que empezó con un maullido</h2>
<p>Todo comenzó con un video casero. Un <strong>gatito</strong> aparecía frente a la cámara emitiendo maullidos con un ritmo y una entonación que, para sorpresa de todos, recordaban a los característicos sonidos vocales de <strong>Michael Jackson</strong>. Lo que pudo haber pasado desapercibido se convirtió en el clip más compartido del día.</p>
<p>Los usuarios no tardaron en etiquetar a sus amigos, comentar y republicar. Algunos hicieron <strong>remixes con "Billie Jean" y "Thriller"</strong> sincronizando los maullidos con la música. Otros crearon comparaciones frame a frame entre el felino y las presentaciones del artista.</p>
<h2>Ternura que cruza fronteras</h2>
<p>El video, difundido por <strong>ATB Media en TikTok</strong>, no se quedó en Bolivia. Usuarios de <strong>España, México, Argentina y Estados Unidos</strong> compartieron el clip, cada uno agregando su propio toque creativo. La combinación de ternura animal y nostalgia musical resultó una fórmula imbatible.</p>
<ul>
<li><strong>Protagonista:</strong> Gatito doméstico de raza no especificada</li>
<li><strong>Comparación:</strong> Maullidos similares a vocalizos de Michael Jackson</li>
<li><strong>Remixes populares:</strong> Billie Jean, Thriller, Beat It</li>
<li><strong>Alcance:</strong> Viral internacional en menos de 24 horas</li>
</ul>
<blockquote>"No sabía que necesitaba escuchar a un gato cantar Michael Jackson hasta hoy". — Usuario viral en TikTok</blockquote>
<p><small>Fuente: ATB Digital</small></p>`,
    contentEn: `<h1>Kitten conquers the internet: its meows sound like Michael Jackson</h1>
<p><em>A tiny feline emits a series of meows that users instantly compared to the King of Pop's vocalizations. The video crossed borders within hours.</em></p>
<h2>One minute of fame that started with a meow</h2>
<p>It all began with a homemade video. A <strong>kitten</strong> appeared in front of the camera, meowing with a rhythm and tone that, to everyone's surprise, resembled the distinctive vocal sounds of <strong>Michael Jackson</strong>. What could have gone unnoticed became the most shared clip of the day.</p>
<p>Users wasted no time tagging friends, commenting, and reposting. Some created <strong>remixes with "Billie Jean" and "Thriller"</strong>, syncing the meows with the music. Others made frame-by-frame comparisons between the feline and the artist's performances.</p>
<h2>Cuteness that crosses borders</h2>
<p>The video, shared by <strong>ATB Media on TikTok</strong>, did not stay in Bolivia. Users from <strong>Spain, Mexico, Argentina, and the United States</strong> shared the clip, each adding their own creative touch. The combination of animal cuteness and musical nostalgia proved unbeatable.</p>
<ul>
<li><strong>Star:</strong> Domestic kitten, unspecified breed</li>
<li><strong>Comparison:</strong> Meows similar to Michael Jackson's vocalizations</li>
<li><strong>Popular remixes:</strong> Billie Jean, Thriller, Beat It</li>
<li><strong>Reach:</strong> Internationally viral in under 24 hours</li>
</ul>
<blockquote>"I didn't know I needed to hear a cat sing Michael Jackson until today." — Viral TikTok user</blockquote>
<p><small>Source: ATB Digital</small></p>`,
    date: '2026-06-17',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=1200&h=630&fit=crop',
    imageCaption: 'Gatito cuyos maullidos recuerdan a los sonidos de Michael Jackson. Foto: Captura de video ATB',
    categoryEs: 'Virales',
    categoryEn: 'Viral',
    enableComments: true,
    featured: false,
    views: 2210,
    source: 'ATB Digital',
    sourceUrl: 'https://www.atb.com.bo/2026/06/17/gatito-conquista-las-redes-con-maullidos-al-estilo-de-michael-jackson/'
  },
  {
    id: '13',
    slug: 'nova-vuelve-sinfonia-de-historias-inolvidables',
    titleEs: 'NOVA Filarmónica vuelve con la "Sinfonía de historias inolvidables"',
    titleEn: 'NOVA Filarmónica returns with "Symphony of Unforgettable Stories"',
    excerptEs: 'La NOVA Filarmónica presenta el segundo programa de su temporada 2026 con un concierto que fusiona las bandas sonoras más emblemáticas del cine con obras maestras del repertorio sinfónico estadounidense.',
    excerptEn: 'NOVA Filarmónica presents the second program of its 2026 season with a concert blending the most emblematic film scores with masterpieces of the American symphonic repertoire.',
    contentEs: '### NOVA Filarmónica: Segundo Concierto de la Temporada 2026\n\nTras el éxito de su concierto inaugural, **NOVA Filarmónica** presenta el **segundo programa de la temporada 2026** en **Cochabamba** con una producción sinfónica titulada **«Sinfonía de historias inolvidables»**.\n\n#### El Programa\n\nEl concierto plantea un **recorrido por mundos fantásticos, aventuras épicas y magnos clásicos del séptimo arte**, incluyendo bandas sonoras de **Star Wars, Harry Potter, Indiana Jones, Jurassic Park, E.T., The Lord of the Rings y How to Train Your Dragon**. La velada también incluirá **An American in Paris** y la célebre **Rhapsody in Blue** de George Gershwin.\n\n#### Director y Solista Invitado\n\nBajo la dirección del **Dr. Nelio Zamorano** —fundador y director musical de NOVA, doctor en Dirección Orquestal por la **University of Colorado Boulder**— el concierto contará con la participación del pianista cochabambino **Naren Palomino Pardo** como solista invitado en **Rhapsody in Blue**, la obra de Gershwin que fusiona el jazz con la tradición sinfónica.\n\n#### Funciones\n\nLas funciones serán los días **22 y 23 de julio de 2026 a las 19:30 hrs.** en el **Teatro José María de Achá** de Cochabamba. La orquesta promete *"una experiencia artística diseñada para emocionar tanto a los amantes de la música sinfónica como a nuevos públicos"*.\n\n#### Sobre NOVA Filarmónica\n\nNOVA Filarmónica es una **institución cultural** instituida para vigorizar la vida artística de Cochabamba mediante creaciones instrumentales de alto nivel, impulsando el intercambio entre músicos bolivianos e invitados internacionales. Además de sus temporadas de conciertos, promueve **acciones educativas, clases magistrales y proyectos de colaboración**.\n\n[Fuente: Los Tiempos](https://www.lostiempos.com/doble-click/musica/20260719/nova-vuelve-sinfonia-historias-inolvidades)',
    contentEn: '### NOVA Filarmónica: Second Concert of the 2026 Season\n\nFollowing the success of its inaugural concert, **NOVA Filarmónica** presents the **second program of the 2026 season** in **Cochabamba** with a symphonic production titled **«Symphony of Unforgettable Stories»**.\n\n#### The Program\n\nThe concert offers a **journey through fantastic worlds, epic adventures, and great classics of the seventh art**, including film scores from **Star Wars, Harry Potter, Indiana Jones, Jurassic Park, E.T., The Lord of the Rings, and How to Train Your Dragon**. The evening will also feature **An American in Paris** and the celebrated **Rhapsody in Blue** by George Gershwin.\n\n#### Conductor and Guest Soloist\n\nUnder the direction of **Dr. Nelio Zamorano** —founder and music director of NOVA, with a doctorate in Orchestral Conducting from the **University of Colorado Boulder**— the concert will feature Cochabamba-born pianist **Naren Palomino Pardo** as guest soloist in **Rhapsody in Blue**, Gershwin\'s work that fuses jazz with symphonic tradition.\n\n#### Performances\n\nPerformances will be on **July 22 and 23, 2026 at 7:30 PM** at the **Teatro José María de Achá** in Cochabamba. The orchestra promises *"an artistic experience designed to excite both lovers of symphonic music and new audiences"*.\n\n#### About NOVA Filarmónica\n\nNOVA Filarmónica is a **cultural institution** established to invigorate the artistic life of Cochabamba through high-level instrumental creations, promoting exchange between Bolivian musicians and international guests. In addition to its concert seasons, it promotes **educational activities, master classes, and collaborative projects**.\n\n[Source: Los Tiempos](https://www.lostiempos.com/doble-click/musica/20260719/nova-vuelve-sinfonia-historias-inolvidades)',
    date: '2026-07-19',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://picsum.photos/seed/nova-filarmonica-orquesta/1200/630',
    imageCaption: 'NOVA Filarmónica durante su concierto inaugural en Cochabamba. Foto: NOVA Filarmónica / Los Tiempos',
    categoryEs: 'Música',
    categoryEn: 'Music',
    enableComments: true,
    featured: true,
    views: 1087,
    source: 'Los Tiempos',
    sourceUrl: 'https://www.lostiempos.com/doble-click/musica/20260719/nova-vuelve-sinfonia-historias-inolvidades'
  },
];

export const translations = {
  es: {
    navHome: 'Inicio',
    navAbout: 'Sobre Mí',
    navPortfolio: 'Portafolio',
    navCv: 'CV / Trayectoria',
    navBlog: 'Blog',
    navNews: 'Noticias',
    navContact: 'Contacto',

    heroTitle: 'Freddy Ticona Guzmán',
    heroSubtitle: 'Camarógrafo, Editor y Realizador Audiovisual',
    heroSlogan: 'Contando historias a través del lente, con la precisión del periodismo y la estética del cine.',
    heroExperience: '15+ Años de Experiencia',
    heroAwardBadge: 'Premio Nacional Eduardo Abaroa 2017',
    heroCtaPortfolio: 'Ver Portafolio',
    heroCtaCv: 'Ver CV Completo',
    heroShowreelTitle: 'Audiovisual Showreel',

    quickStatsTitle: 'Trayectoria Destacada',
    statYears: 'Años de Experiencia',
    statChannels: 'Canales de TV',
    statDocs: 'Documentales Producidos',
    statAwards: 'Premios Nacionales',

    latestBlogTitle: 'Últimas reflexiones desde el set',
    latestBlogSubtitle: 'Detrás de cámaras, crónicas periodísticas y análisis técnico del acontecer audiovisual en Bolivia.',
    readMore: 'Leer Artículo',

    aboutBioTitle: 'Una vida dedicada a retratar la realidad',
    aboutBioStory: `Mi historia en la televisión boliviana comenzó en el año 2010 en Paceñísima TV (Canal 33), operando pesadas cámaras de estudio de tubos analógicos y aprendiendo las rigurosas bases de la composición y la iluminación clásica. Ese primer contacto con la pantalla chica definió una vocación inquebrantable: narrar la realidad de nuestro país con fidelidad técnica e impacto visual.

A lo largo de 15 años, he tenido el honor de formar parte de las salas de redacción más importantes de Bolivia, incluyendo Bolivia TV, Red Uno, RTP, Abya Yala Televisión y Gigavisión. He pasado de transportar cintas Betacam magnéticas a comandar mochilas de transmisión satelital IP de última generación, y de la edición lineal offline al etalonaje digital avanzado en HDR.

Mi evolución profesional me llevó a especializarme en la dirección de fotografía documental y la cobertura periodística en primera línea. No concibo el trabajo técnico de espaldas al contexto; cada toma, cada corte de edición y cada corrección de color tiene el propósito de conectar de manera honesta y respetuosa con los protagonistas de la noticia.`,
    aboutBioExtra: `Además de mi pasión por el lente, cuento con formación técnica en seguridad informática (Ciberseguridad) y desarrollo web front-end. Considero que la televisión del futuro inmediato converge plenamente en redes de datos IP, transmisiones encriptadas y plataformas digitales avanzadas. Esta combinación híbrida de comunicación social, destreza cinematográfica y entendimiento técnico-informático me permite abordar los desafíos más exigentes de la producción audiovisual contemporánea.`,

    specialtiesTitle: 'Mis Áreas de Especialidad',
    specCamTitle: 'Dirección de Fotografía y Cámara',
    specCamDesc: 'Operación avanzada de cámaras de cine digital y transmisión de televisión (Sony FX9/FS7, Panasonic PX270, RED). Composición precisa, iluminación cinematográfica en exteriores e interiores y operación autorizada de drones.',
    specEditTitle: 'Montaje y Post-Producción',
    specEditDesc: 'Edición ágil de reportajes de investigación y documentales de largo aliento. Dominio experto de Adobe Premiere Pro, Avid Media Composer y DaVinci Resolve para un flujo de color y sonido óptimo.',
    specTechTitle: 'Flujos IP y Ciberseguridad',
    specTechDesc: 'Configuración y monitoreo de sistemas de transmisión en vivo (LiveU, satélite), optimización de flujos de trabajo de ingesta digital, redes audiovisuales IP y protocolos de seguridad de la información en medios.',

    timelineTitle: 'Línea de Tiempo Profesional',
    timelineSubtitle: 'Más de una década documentando la historia de Bolivia en las principales redes televisivas del país.',

    testimonialsTitle: 'Memorándums de Felicitación',
    testimonialsSubtitle: 'Reconocimientos oficiales emitidos por los directorios y gerencias de los canales nacionales de televisión de Bolivia.',

    portfolioTitle: 'Galería de Trabajos Curados',
    portfolioSubtitle: 'Una selección de mis mejores piezas como camarógrafo y editor. Filtre por categoría para ver mi versatilidad narrativa.',
    all: 'Todos',
    catCultural: 'Periodismo Cultural',
    catPolitica: 'Política',
    catDocumental: 'Documental',
    catCoberturaInt: 'Cobertura Internacional',
    searchPlaceholder: 'Buscar proyectos por título o tecnología...',
    emptyPortfolio: 'No se encontraron proyectos que coincidan con los criterios de búsqueda.',
    technicalDetails: 'Detalles Técnicos',
    role: 'Rol en el Proyecto',
    year: 'Año',
    client: 'Canal / Medio',
    viewCaseStudy: 'Ver Caso de Estudio Detallado',
    backToPortfolio: 'Volver a la Galería',

    caseStudyTitle: 'Caso de Estudio Detallado',
    caseStudyContext: 'Contexto e Historia Detrás',
    caseStudyChallenges: 'El Desafío Técnico',
    caseStudySolutions: 'Soluciones e Implementación',
    caseStudyResult: 'El Resultado y Logros',
    caseStudyHardware: 'Equipamiento de Grabación (Hardware)',
    caseStudySoftware: 'Herramientas de Post-Producción (Software)',
    caseStudyBts: 'Registro del Rodaje (Detrás de Cámaras)',

    cvTitle: 'Curriculum Vitae / Trayectoria',
    cvSubtitle: 'Formación académica, distinciones nacionales y certificaciones técnicas especializadas.',
    cvDownloadPdf: 'Descargar CV Completo (PDF)',
    cvPrint: 'Imprimir Currículum',
    cvAcademicTitle: 'Formación Académica',
    cvCertificationsTitle: 'Certificaciones Especializadas',
    cvCertificationsSubtitle: 'Haga clic en las categorías para desplegar certificaciones y cursos adicionales.',
    cvShowMoreCerts: 'Ver más certificaciones y cursos especializados',
    cvShowLessCerts: 'Colapsar certificaciones adicionales',
    cvAwardsTitle: 'Premios, Distinciones y Memorandos',
    cvAwardAbaroaTitle: 'Premio Plurinacional Eduardo Abaroa 2017',
    cvAwardAbaroaDesc: 'Otorgado por el Ministerio de Culturas y Turismo del Estado Plurinacional de Bolivia. Primer lugar en la categoría Reportaje de Investigación en Periodismo Cultural por el documental de televisión "La Estrella". El galardón más prestigioso del país para las artes y el periodismo cultural.',
    cvMemoTitle: 'Memorando de Felicitación Institucional - Bolivia TV (2022)',
    cvMemoDesc: 'Reconocimiento oficial emitido por la Gerencia General de Bolivia TV por el destacado desempeño, proactividad y entrega técnica demostrada durante la cobertura ininterrumpida de los desastres por inundaciones en el departamento del Beni.',

    blogTitle: 'Blog Audiovisual',
    blogSubtitle: 'Apuntes de campo, análisis de tendencias de video, tutoriales de montaje y relatos de coberturas periodísticas en Bolivia.',
    blogCategory: 'Categoría',
    blogReadTime: 'Tiempo de lectura',
    blogBackToList: 'Volver al listado de artículos',
    blogWriteToUs: '¿Te interesa debatir sobre estos temas? Escríbeme en la sección de contacto.',

    newsTitle: 'Noticias Audiovisuales',
    newsSubtitle: 'Cobertura periodística, análisis del acontecer nacional e historias del mundo audiovisual en Bolivia.',
    newsLatest: 'Últimas Noticias',
    newsTrending: 'Tendencias',
    newsCategories: 'Categorías',
    newsAll: 'Todas',
    newsBreaking: 'ÚLTIMA HORA',
    newsFeatured: 'Destacado',
    newsHomeTitle: 'Cobertura Periodística',
    newsHomeSubtitle: 'Crónicas, reportajes y análisis del acontecer nacional desde la mirada de un camarógrafo con 15 años en la televisión boliviana.',
    newsReadMore: 'Leer más',
    newsEmpty: 'No hay noticias disponibles en este momento.',
    newsCategoryPais: 'País',
    newsCategorySantaCruz: 'Santa Cruz',
    newsCategoryMundo: 'Mundo',
    newsCategoryEconomia: 'Economía',
    newsCategoryDeportes: 'Deportes',
    newsCategoryCultura: 'Cultura y Entretenimiento',
    newsCategoryTecnologia: 'Tecnología',

    contactTitle: 'Contacto y Colaboraciones',
    contactSubtitle: '¿Tienes un proyecto documental, comercial o requieres cobertura de televisión profesional en Bolivia? Ponte en contacto hoy mismo.',
    contactFormName: 'Nombre Completo',
    contactFormEmail: 'Correo Electrónico',
    contactFormMessage: 'Tu Mensaje',
    contactFormSubmit: 'Enviar Mensaje',
    contactFormSending: 'Enviando...',
    contactFormSuccess: '¡Mensaje enviado con éxito! Me pondré en contacto contigo lo antes posible.',
    contactFormError: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme directamente al correo.',
    contactDataTitle: 'Datos de Contacto Directo',
    contactLocation: 'La Paz, Bolivia',
    contactLocationDesc: 'Disponible para traslados y proyectos en toda Bolivia y cobertura internacional de prensa.',
    contactPhone: 'Teléfono / WhatsApp',
    contactEmail: 'Correo Electrónico Directo',
    contactNetworkTitle: 'Mis Redes Profesionales',
    contactMapMockTitle: 'Ubicación de Operaciones - La Paz',

    footerCopyright: '© 2026 Freddy Ticona Guzmán. Todos los derechos reservados.',
    footerTagline: 'Camerógrafo, Editor y Realizador Audiovisual • La Paz, Bolivia • WhatsApp: +591 62408420'
  },
  en: {
    navHome: 'Home',
    navAbout: 'About Me',
    navPortfolio: 'Portfolio',
    navCv: 'CV / Career',
    navBlog: 'Blog',
    navNews: 'News',
    navContact: 'Contact',

    heroTitle: 'Freddy Ticona Guzmán',
    heroSubtitle: 'Cameraman, Video Editor & Audiovisual Producer',
    heroSlogan: 'Telling profound stories through the lens, with journalistic accuracy and cinematic beauty.',
    heroExperience: '15+ Years of Experience',
    heroAwardBadge: '2017 Eduardo Abaroa National Award',
    heroCtaPortfolio: 'View Portfolio',
    heroCtaCv: 'View Full CV',
    heroShowreelTitle: 'Audiovisual Showreel',

    quickStatsTitle: 'Key Highlights',
    statYears: 'Years of Experience',
    statChannels: 'TV Networks',
    statDocs: 'Documentaries Produced',
    statAwards: 'National Awards',

    latestBlogTitle: 'Latest Reflections From The Set',
    latestBlogSubtitle: 'Behind the scenes, journalistic journals, and technical analysis of the Bolivian audiovisual landscape.',
    readMore: 'Read Article',

    aboutBioTitle: 'A lifetime dedicated to capturing reality',
    aboutBioStory: `My journey in Bolivian television began in 2010 at Paceñísima TV (Channel 33), operating heavy analog tube cameras and absorbing the rigorous fundamentals of classic framing and lighting. That first contact with the broadcast world ignited an unwavering calling: to document our nation's reality with absolute technical fidelity and emotional impact.

Over the last 15 years, I have had the privilege to serve in Bolivia's most influential newsrooms, including Bolivia TV, Red Uno, RTP, Abya Yala Televisión, and Gigavisión. I have advanced from physical Betacam tapes to deploying cutting-edge mobile satellite IP backpacks, and from linear offline assembly to professional HDR digital color grading.

My professional growth led me to specialize in documentary cinematography and frontline news coverage. I believe that technical work cannot exist in a vacuum; every single shot, edit cut, and color adjustment serves the single purpose of establishing an honest and respectful connection with the stories' subjects.`,
    aboutBioExtra: `Beyond my passion for cameras, I hold certified training in computer networking (Cybersecurity) and front-end web development. I believe that tomorrow's television is rapidly converging with IP data networks, encrypted transmissions, and advanced digital web solutions. This hybrid blend of social communication, filmmaking expertise, and technical IT understanding empowers me to meet the most demanding challenges of contemporary media production.`,

    specialtiesTitle: 'Areas of Expertise',
    specCamTitle: 'Cinematography & Camera Direction',
    specCamDesc: 'Expert command of digital cinema cameras and live broadcast gear (Sony FX9/FS7, Panasonic PX270, RED). Precise framing, outdoor/indoor cinematic lighting, and licensed drone flight operations.',
    specEditTitle: 'Editing & Post-Production',
    specEditDesc: 'Fast-paced editing for investigative reporting and long-form cultural documentaries. High proficiency in Adobe Premiere Pro, Avid Media Composer, and DaVinci Resolve for pristine color and sound.',
    specTechTitle: 'IP Workflows & Cybersecurity',
    specTechDesc: 'Installation and monitoring of live broadcast streaming encoders (LiveU, satellite uplink), digital video asset management, IP media networks, and data information security standards.',

    timelineTitle: 'Professional Timeline',
    timelineSubtitle: 'Over a decade of documenting Bolivia\'s history across the country\'s premier TV networks.',

    testimonialsTitle: 'Commendation Memorandums',
    testimonialsSubtitle: 'Official recognitions issued by news directors and station managers of Bolivia\'s national television networks.',

    portfolioTitle: 'Curated Works Gallery',
    portfolioSubtitle: 'A selection of my best projects as a cameraman and editor. Filter by category to explore my narrative versatility.',
    all: 'All',
    catCultural: 'Cultural Journalism',
    catPolitica: 'Politics',
    catDocumental: 'Documentary',
    catCoberturaInt: 'International Coverage',
    searchPlaceholder: 'Search projects by title or hardware/software...',
    emptyPortfolio: 'No projects found matching your search criteria.',
    technicalDetails: 'Technical Details',
    role: 'Role in Project',
    year: 'Year',
    client: 'Network / Medium',
    viewCaseStudy: 'View Detailed Case Study',
    backToPortfolio: 'Back to Gallery',

    caseStudyTitle: 'Detailed Case Study',
    caseStudyContext: 'Context & Story Behind',
    caseStudyChallenges: 'The Technical Challenge',
    caseStudySolutions: 'Solutions & Implementation',
    caseStudyResult: 'Results & Achievements',
    caseStudyHardware: 'Recording Equipment (Hardware)',
    caseStudySoftware: 'Post-Production Utilities (Software)',
    caseStudyBts: 'Behind the Scenes Footage',

    cvTitle: 'Curriculum Vitae / Timeline',
    cvSubtitle: 'Academic background, national decorations, and advanced technical certifications.',
    cvDownloadPdf: 'Download Full CV (PDF)',
    cvPrint: 'Print Resume',
    cvAcademicTitle: 'Academic Education',
    cvCertificationsTitle: 'Specialized Certifications',
    cvCertificationsSubtitle: 'Click on categories to expand additional courses and certifications.',
    cvShowMoreCerts: 'View more specialized certifications and courses',
    cvShowLessCerts: 'Collapse additional certifications',
    cvAwardsTitle: 'Awards, Honours & Commendations',
    cvAwardAbaroaTitle: 'Eduardo Abaroa National Award 2017',
    cvAwardAbaroaDesc: 'Granted by the Ministry of Cultures and Tourism of the Plurinational State of Bolivia. First place in the Cultural Journalism Investigative Reporting category for the television documentary "La Estrella". The nation\'s highest recognition for arts and journalism.',
    cvMemoTitle: 'Institutional Commendation Letter - Bolivia TV (2022)',
    cvMemoDesc: 'Official citation issued by Bolivia TV General Management for exceptional field performance, proactivity, and technical dedication demonstrated during continuous live broadcast of flood disasters in Beni department.',

    blogTitle: 'Audiovisual Blog',
    blogSubtitle: 'Field notes, video trend analysis, editing workflows, and journals of televised reporting in Bolivia.',
    blogCategory: 'Category',
    blogReadTime: 'Read time',
    blogBackToList: 'Back to Article List',
    blogWriteToUs: 'Interested in discussing these topics? Drop me a line in the contact page.',

    newsTitle: 'Audiovisual News',
    newsSubtitle: 'Press coverage, analysis of national events, and stories from Bolivia\'s audiovisual world.',
    newsLatest: 'Latest News',
    newsTrending: 'Trending',
    newsCategories: 'Categories',
    newsAll: 'All',
    newsBreaking: 'BREAKING',
    newsFeatured: 'Featured',
    newsHomeTitle: 'Press Coverage',
    newsHomeSubtitle: 'Chronicles, reports, and analysis of national affairs through the lens of a cameraman with 15 years in Bolivian television.',
    newsReadMore: 'Read more',
    newsEmpty: 'No news available at this moment.',
    newsCategoryPais: 'Nation',
    newsCategorySantaCruz: 'Santa Cruz',
    newsCategoryMundo: 'World',
    newsCategoryEconomia: 'Economy',
    newsCategoryDeportes: 'Sports',
    newsCategoryCultura: 'Culture & Entertainment',
    newsCategoryTecnologia: 'Technology',

    contactTitle: 'Contact & Collaboration',
    contactSubtitle: 'Got a documentary, commercial project, or need expert TV coverage in Bolivia? Get in touch today.',
    contactFormName: 'Full Name',
    contactFormEmail: 'Email Address',
    contactFormMessage: 'Your Message',
    contactFormSubmit: 'Send Message',
    contactFormSending: 'Sending...',
    contactFormSuccess: 'Message sent successfully! I will get back to you as soon as possible.',
    contactFormError: 'There was an error sending the message. Please try again or email me directly.',
    contactDataTitle: 'Direct Contact Info',
    contactLocation: 'La Paz, Bolivia',
    contactLocationDesc: 'Available for travel and production across Bolivia and international press coverage.',
    contactPhone: 'Phone / WhatsApp',
    contactEmail: 'Direct Email Address',
    contactNetworkTitle: 'My Professional Networks',
    contactMapMockTitle: 'La Paz Operating Center Location',

    footerCopyright: '© 2026 Freddy Ticona Guzmán. All rights reserved.',
    footerTagline: 'Cameraman, Video Editor & Audiovisual Producer • La Paz, Bolivia • WhatsApp: +591 62408420'
  }
};
