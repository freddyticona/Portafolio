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
    id: '10',
    contentType: 'analysis',
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
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=630&fit=crop',
    imageCaption: 'Reflexión sobre el desarrollo audiovisual en Bolivia y el mundo',
    categoryEs: 'Reflexiones',
    categoryEn: 'Reflections',
    enableComments: true,
    featured: true,
    views: 1
  },
{
    id: '25',
    contentType: 'news',
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
    id: '11',
    contentType: 'news',
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
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=630&fit=crop',
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
    id: '13',
    contentType: 'news',
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
    imageUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&h=630&fit=crop',
    imageCaption: 'NOVA Filarmónica durante su concierto inaugural en Cochabamba. Foto: NOVA Filarmónica / Los Tiempos',
    categoryEs: 'Música',
    categoryEn: 'Music',
    enableComments: true,
    featured: true,
    views: 1087,
    source: 'Los Tiempos',
    sourceUrl: 'https://www.lostiempos.com/doble-click/musica/20260719/nova-vuelve-sinfonia-historias-inolvidades'
  },
{
    id: '14',
    contentType: 'news',
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
    id: '8',
    contentType: 'news',
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
    id: '12',
    contentType: 'news',
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
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&h=630&fit=crop',
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
    id: '7',
    contentType: 'news',
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
    id: '9',
    contentType: 'news',
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
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=630&fit=crop',
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
    id: '16',
    contentType: 'news',
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
    id: '3',
    contentType: 'news',
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
    contentType: 'news',
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
    contentType: 'news',
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
    imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&h=630&fit=crop',
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
    id: '18',
    contentType: 'news',
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
    id: '22',
    contentType: 'news',
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
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop',
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
    id: '15',
    contentType: 'news',
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
    id: '2',
    contentType: 'behind-scenes',
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
    id: '17',
    contentType: 'news',
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
    id: '23',
    contentType: 'news',
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
    contentType: 'news',
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
    id: '26',
    contentType: 'news',
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
    contentType: 'news',
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
    id: '6',
    contentType: 'news',
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
    id: '1',
    contentType: 'behind-scenes',
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
    id: '19',
    contentType: 'news',
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
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&h=630&fit=crop',
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
    contentType: 'news',
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
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=630&fit=crop',
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
    contentType: 'news',
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
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=630&fit=crop',
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
    id: '28',
    contentType: 'news',
    slug: 'nvidia-gb300-moe-world-record',
    titleEs: 'NVIDIA establece récord mundial en pre-entrenamiento MoE con GB300 NVL72',
    titleEn: 'NVIDIA Sets World Record for MoE Pre-Training on GB300 NVL72',
    excerptEs: 'NVIDIA logra 1,648 TFLOPs por GPU en pre-entrenamiento de DeepSeek-V3 671B con el sistema rack-scale GB300 NVL72, triplicando el rendimiento de la generación anterior.',
    excerptEn: 'NVIDIA achieves 1,648 TFLOPs per GPU pre-training DeepSeek-V3 671B on the GB300 NVL72 rack-scale system, delivering 3x the performance of the previous generation.',
    contentEs: `### NVIDIA establece récord mundial en pre-entrenamiento MoE

El pre-entrenamiento de modelos frontera ha convergido en arquitecturas Mixture of Experts (MoE), cambiando fundamentalmente los límites del entrenamiento de IA a gran escala. A medida que el cómputo por token disminuye, la comunicación determina cada vez más la eficiencia con la que los modelos escalan a través de miles de GPUs.

![NVIDIA GB300 NVL72 - Récord Mundial](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/World-Record-1024x576.jpg)

NVIDIA GB300 NVL72 estableció un récord mundial para pre-entrenamiento de DeepSeek-V3 671B alcanzando **1,648 TFLOPs por GPU**, demostrando cómo los avances en toda la plataforma de IA —desde silicio hasta redes y software— continúan impulsando el rendimiento del entrenamiento.

### La arquitectura GB300 NVL72

A diferencia de los modelos densos, donde cada token activa todos los parámetros, los modelos MoE activan un subconjunto de parámetros por token. DeepSeek-V3 tiene 671B parámetros pero activa solo ~37B por token. El tradeoff es la comunicación: los expertos viven en otras GPUs, por lo que cada capa MoE debe enviar cada token a sus expertos y recoger los resultados mediante comunicación all-to-all.

![Diagrama del paso de entrenamiento MoE](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-59.webp)

El GB300 NVL72 aborda este desafío con NVLink de quinta generación, dando a cada GPU 1.8 TB/s de ancho de banda y 130 TB/s de ancho de banda all-to-all no bloqueante a través del rack. NVLink es semántico de memoria: una GPU lee y escribe la HBM de otra directamente como operaciones nativas de carga y almacenamiento.

![Comparación de NVLink vs fibra tradicional](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-55.webp)

### Rendimiento excepcional

En el modelo DeepSeek-V3 671B, usando 256 GPUs, Megatron Core alcanza 1,648 TFLOPs por GPU en GB300 NVL72, comparado con 606 TFLOPs en GB200 NVL72 — aproximadamente **3x más rendimiento** en una sola generación.

![Gráfico de rendimiento 3x](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-61.webp)

El rendimiento aumentó 1.5x en seis meses solo con mejoras de software en el mismo hardware GB300 NVL72, demostrando que el rendimiento sigue mejorando mucho después de que el silicio se envía.

![Gráfico de mejora por software](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-53.webp)

### Frameworks de entrenamiento acelerados

Las optimizaciones de NVIDIA en TorchTitan ofrecen aproximadamente **6x más rendimiento** en la misma infraestructura, mientras que las optimizaciones en JAX han logrado mejoras de casi **10x** en seis meses.

![Rendimiento TorchTitan](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-63.webp)

![Rendimiento JAX](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-73.webp)

Escalando de 256 a 1,024 GPUs, Megatron Core mantiene el 98.5% de su rendimiento por GPU, mientras TorchTitan y JAX mantienen el 97%, lo que significa que casi toda la infraestructura adicional se convierte en mayor rendimiento del sistema.

![Eficiencia de escalado](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-57.webp)

Este récord no es el techo — proviene de una plataforma cuyo hardware, interconexión y software están diseñados juntos y optimizados continuamente.`,
    contentEn: `### Setting a World Record for MoE Pre-Training

Frontier model pre-training has converged on mixture of experts (MoE), fundamentally changing what limits large-scale AI training. As compute per token falls, communication increasingly determines how efficiently models scale across thousands of GPUs.

![NVIDIA GB300 NVL72 World Record](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/World-Record-1024x576.jpg)

NVIDIA GB300 NVL72 set a world record for pre-training DeepSeek-V3 671B at 1,648 TFLOPs per GPU, showing how advances across the entire AI platform continue to push training performance forward.

### GB300 NVL72 Architecture

Unlike dense models where every token activates every parameter, MoE models activate a subset. DeepSeek-V3 holds 671B parameters but activates only ~37B per token. The tradeoff is communication — experts live on other GPUs.

![MoE training step diagram](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-59.webp)

GB300 NVL72 addresses this with fifth-generation NVLink, giving each GPU 1.8 TB/s bandwidth and 130 TB/s non-blocking all-to-all bandwidth across the rack.

![NVLink vs traditional fabric](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-55.webp)

### Exceptional Performance

On DeepSeek-V3 671B using 256 GPUs, Megatron Core reaches 1,648 TFLOPs per GPU on GB300 NVL72, ~3x higher throughput per GPU in a single generation.`,
    date: '2026-07-23',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/World-Record-1024x576.jpg',
    imageCaption: 'NVIDIA GB300 NVL72 establece récord mundial en pre-entrenamiento MoE. Imagen: NVIDIA',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: true,
    views: 89,
    source: 'NVIDIA Technical Blog',
    sourceUrl: 'https://developer.nvidia.com/blog/setting-a-world-record-for-moe-pre-training-on-nvidia-gb300-nvl72/'
  },
  {
    id: '29',
    contentType: 'news',
    slug: 'nvidia-rubin-gpu-architecture',
    titleEs: 'Arquitectura NVIDIA Rubin GPU: impulsando la era de la IA agéntica',
    titleEn: 'Inside NVIDIA Rubin GPU Architecture: Powering the Era of Agentic AI',
    excerptEs: 'La GPU NVIDIA Rubin, con 336 mil millones de transistores y memoria HBM4, ofrece hasta 10x más rendimiento agéntico por unidad de energía que Blackwell.',
    excerptEn: 'The NVIDIA Rubin GPU, with 336 billion transistors and HBM4 memory, delivers up to 10x more agentic throughput per unit of energy than Blackwell.',
    contentEs: `### Arquitectura NVIDIA Rubin GPU

Lo que comenzó como entrenamiento de modelos de IA discretos y chats con humanos ha evolucionado hacia fábricas de IA siempre activas, dedicadas a producir inteligencia a escala. Estas fábricas ahora impulsan flujos de trabajo agénticos que razonan, planifican, usan herramientas y ejecutan tareas complejas de múltiples pasos.

![GPU NVIDIA Rubin](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvidia-rubin-gpu-1024x576.png)

En el corazón de la plataforma NVIDIA Vera Rubin está la GPU Rubin, diseñada para ofrecer hasta **10x más rendimiento agéntico por unidad de energía** que Blackwell.

### Innovaciones arquitectónicas

La GPU Rubin está construida con 336 mil millones de transistores, 224 SMs y 896 Tensor Cores. Incorpora un Transformer Engine de tercera generación que ofrece hasta 50 petaflops de rendimiento NVFP4.

![Gráfico comparativo de rendimiento](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/hopper-blackwell-rubin-throughput-interactivity-comparison.webp)

La arquitectura organiza los recursos en Clústeres de Procesadores Gráficos (GPCs) con una gran caché L2 centralizada. Rubin integra hasta 288 GB de memoria **HBM4** con hasta 22 TB/s de ancho de banda.

![Diagrama de chip Rubin](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvidia-rubin-gpu-chip-architecture-1.webp)

### Aceleración de rutas críticas de inferencia

Rubin mejora el Tensor Memory Accelerator (TMA) con soporte de actualización de descriptores en línea, permitiendo compartir un descriptor entre todos los expertos en modelos MoE.

![Comparación descriptores MoE](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/rubin-gpu-moe-descriptor-sharing-1.webp)

Rubin duplica el rendimiento de Tensor Core por clock al procesar el doble de datos en la dimensión K, reduciendo iteraciones y mejorando la utilización.

![Dimensión K duplicada](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/rubin-k-dimension-instruction-throughput-1.webp)

### Procesamiento de contexto largo

Rubin acelera la atención combinando **activación sparse** con compresión adaptativa y mayor rendimiento de softmax. La expomarcial FP32 tiene 2x más rendimiento y BF16/FP16 tiene 4x versus Blackwell.

![Compresión adaptativa](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvidia-rubin-adaptive-compression-sparsity-1.webp)

### Eficiencia de kernel

Rubin permite una coordinación más fina entre kernels dependientes, reduciendo burbujas en la línea de tiempo de la GPU. Los kernels consumidores pueden comenzar antes a medida que los datos de entrada están disponibles.

![Timeline productor-consumidor](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/blackwell-rubin-timelines-producer-consumer-thread-blocks-1.webp)

### Comunicación NVLink acelerada

Rubin introduce **counted writes** para comunicación NVLink iniciada por dispositivo, simplificando la sincronización para transferencias GPU a GPU.

![Comunicación NVLink](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/rubin-nvlink-communication-acceleration.webp)

El ancho de banda de memoria aumenta de 8 TB/s en Blackwell a **22 TB/s en Rubin** con HBM4.

![Ancho de banda memoria](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/memory-bandwidth-nvidia-rubin-gpu.webp)

### Eficiencia energética

El NVIDIA Vera Rubin NVL72 integra refrigeración líquida, DSX MaxLPS para suavizado de energía y gestión dinámica de potencia, permitiendo hasta **40% más GPUs** dentro del mismo presupuesto energético.

![Suavizado de potencia](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/gpu-power-chart.webp)

![Comparación presupuesto energía](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/power-budget-comparison-dsx-maxlps-1.webp)

La GPU Rubin está diseñada para los patrones de ejecución de la IA agéntica, maximizando el rendimiento por vatio y produciendo más tokens útiles dentro de un presupuesto energético fijo.`,
    contentEn: `### Inside NVIDIA Rubin GPU Architecture

What began as discrete AI model training has evolved into always-on AI factories powering agentic workflows. At the heart of the NVIDIA Vera Rubin platform is the Rubin GPU, delivering up to 10x more agentic throughput per unit of energy than Blackwell.

![NVIDIA Rubin GPU](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvidia-rubin-gpu-1024x576.png)

Built with 336 billion transistors, 224 SMs, and 896 Tensor Cores, Rubin features a third-generation Transformer Engine delivering up to 50 petaflops of NVFP4 performance.`,
    date: '2026-07-23',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvidia-rubin-gpu-1024x576.png',
    imageCaption: 'Diagrama de la GPU NVIDIA Rubin. Imagen: NVIDIA',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: true,
    views: 143,
    source: 'NVIDIA Technical Blog',
    sourceUrl: 'https://developer.nvidia.com/blog/inside-nvidia-rubin-gpu-architecture-powering-the-era-of-agentic-ai/'
  },
  {
    id: '30',
    contentType: 'news',
    slug: 'nvidia-vera-cpu-olympus',
    titleEs: 'NVIDIA Vera CPU: núcleos Olympus para máximo rendimiento en IA agéntica',
    titleEn: 'NVIDIA Vera CPU: Olympus Cores for Maximum Single-Thread Performance in Agentic AI',
    excerptEs: 'La CPU NVIDIA Vera, con núcleos Olympus diseñados desde cero, ofrece hasta 1.8x más rendimiento que CPUs x86 en cargas de trabajo de IA agéntica.',
    excerptEn: 'The NVIDIA Vera CPU, with ground-up Olympus cores, delivers up to 1.8x higher performance on agentic workloads compared to x86 CPUs.',
    contentEs: `### NVIDIA Vera CPU: diseñada para IA agéntica

La IA agéntica desplaza más del camino crítico de ejecución hacia la CPU. Los agentes operan en entornos aislados para ejecutar código, invocar herramientas, recuperar contexto y analizar resultados. A medida que estos bucles se ejecutan concurrentemente, el rendimiento de la CPU determina tanto la capacidad de respuesta por agente como el rendimiento total de la fábrica.

![CPU NVIDIA Vera](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/Vera-CPU-e1783372749296-1024x576.webp)

### Arquitectura del núcleo Olympus

Olympus se desarrolló mediante co-diseño extremo en toda la plataforma Vera Rubin. Está optimizado para maximizar instrucciones por ciclo (IPC) en cargas de trabajo de infraestructura de IA altamente concurrentes.

![Arquitectura Olympus](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-64.webp)

El **front-end** incluye un predictor de ramas neuronales para alta precisión en patrones de rama difíciles. El **mid-core** tiene un amplio motor de renombramiento y asignación con una gran ventana de reorden para ejecución fuera de orden profunda.

### Multithreading espacial

La Vera CPU utiliza **NVIDIA Spatial Multithreading (SMT)** que particiona recursos más efectivamente entre dos hilos de hardware. Con 88 núcleos Olympus y 176 hilos SMT, la Vera CPU soporta grandes cantidades de tareas de agente concurrentes.

![Spatial Multithreading](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-47.webp)

### Subsistema de memoria y fibra coherente

El NVIDIA Scalable Coherency Fabric (SCF) proporciona hasta **3.4 TB/s** de ancho de banda bisectivo e integra una caché L3 unificada de 164 MB.

![Fabric y subsistema de memoria](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-45.webp)

La memoria **SOCAMM2 LPDDR5X** ofrece hasta 1.2 TB/s de ancho de banda agregado, o 14 GB/s por núcleo.

### Conectividad dual-socket

Vera CPU escala de una a dos sockets usando NVLink-C2C de segunda generación. Cada socket se presenta como un dominio NUMA único.

![Configuración dual-socket](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-50.webp)

![NUMA único](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-46.webp)

### Rendimiento líder

La Vera CPU ofrece hasta **1.8x más rendimiento** en cargas de trabajo agénticas en comparación con CPUs x86.

![Rendimiento comparativo](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image-52.webp)

Esta CPU representa un nuevo estándar para cargas de trabajo de IA en fábricas de inteligencia, donde el rendimiento sostenido por hilo es crítico para la capacidad de respuesta y eficiencia del sistema.`,
    contentEn: `### NVIDIA Vera CPU: Built for Agentic AI

Agentic AI shifts more of the critical execution path onto the CPU. The Vera CPU, with ground-up Olympus cores, delivers up to 1.8x higher performance on agentic workloads compared to x86 CPUs.

![NVIDIA Vera CPU](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/Vera-CPU-e1783372749296-1024x576.webp)

With 88 Olympus cores and 176 SMT threads, the Vera CPU supports large numbers of concurrent agent tasks while reducing thread-to-thread interference.`,
    date: '2026-07-23',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/Vera-CPU-e1783372749296-1024x576.webp',
    imageCaption: 'CPU NVIDIA Vera con núcleos Olympus. Imagen: NVIDIA',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 67,
    source: 'NVIDIA Technical Blog',
    sourceUrl: 'https://developer.nvidia.com/blog/inside-nvidia-vera-cpu-olympus-cores-built-for-maximum-single-threaded-performance-in-agentic-ai/'
  },
  {
    id: '31',
    contentType: 'news',
    slug: 'nvidia-nvlink-scale-up-network',
    titleEs: 'NVIDIA NVLink: la red de escalado vertical para fábricas de IA',
    titleEn: 'NVIDIA NVLink: The Scale-Up Network for AI Factories',
    excerptEs: 'NVLink 6 proporciona 3.6 TB/s por GPU y 260 TB/s de ancho de banda a nivel de rack, con 3x menor latencia que Ethernet tradicional.',
    excerptEn: 'Sixth-gen NVLink provides 3.6 TB/s per GPU and 260 TB/s rack-level bandwidth, with 3x lower latency than traditional Ethernet.',
    contentEs: `### NVIDIA NVLink: la red de escalado para IA

La demanda de IA continúa acelerándose. Las fábricas de IA —sistemas a escala de centro de datos que convierten datos y energía en inteligencia— requieren redes de escalado vertical (scale-up) que permitan a los aceleradores trabajar como una sola unidad de cómputo.

![NVLink](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvlinkimage1_16x9-1024x576.jpeg)

### El desafío de la comunicación MoE

En la inferencia con modelos MoE, los tokens deben enviarse a los expertos seleccionados, procesarse, recolectarse y reordenarse. Toda esta comunicación GPU a GPU debe ocurrir en paralelo. Si los expertos están detrás de una fibra de baja latencia o alto ancho de banda, las ganancias del paralelismo de expertos se pierden.

NVLink ofrece hasta **2.3x más rendimiento de decodificación** en comparación con Ethernet tradicional para modelos como DeepSeek-R1 y Qwen 235B.

![Rendimiento comparativo NVLink vs Ethernet](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image2-10.webp)

### Sexta generación NVLink

Con Vera Rubin NVL72, NVLink de sexta generación proporciona **3.6 TB/s por GPU** de ancho de banda bidireccional y 260 TB/s de ancho de banda a nivel de rack en un dominio de 72 GPUs. La latencia extremo a extremo es **3x menor** que soluciones basadas en Ethernet.

![Rack NVLink](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image3-9-625x543.png)

### Rendimiento y eficiencia

En la transición de Hopper a Blackwell, NVIDIA logró una mejora de **50x en rendimiento de inferencia MoE por vatio**. La plataforma Vera Rubin duplica tanto el ancho de banda NVLink como el cómputo en red.

![Gráfico 50x mejora](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image5-8.webp)

### NVLink-C2C y NVLink Fusion

NVLink-C2C proporciona 1.8 TB/s de ancho de banda coherente entre CPUs y GPUs, simplificando los modelos de programación. NVLink Fusion permite que silicio personalizado se integre al ecosistema NVLink probado, reduciendo la complejidad de despliegue.

NVLink representa la diferencia entre simplemente agregar aceleradores y escalar a rendimiento útil entregado en fábricas de IA de producción.`,
    contentEn: `### NVIDIA NVLink: Scale-Up Network for AI

AI factories need scale-up networking that enables accelerators to work as a single compute unit. Sixth-generation NVLink provides 3.6 TB/s per GPU and 260 TB/s rack-level bandwidth, with 3x lower latency than traditional Ethernet.

![NVLink](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvlinkimage1_16x9-1024x576.jpeg)

NVLink delivers up to 2.3x higher decode throughput compared to off-the-shelf Ethernet for MoE models like DeepSeek-R1 and Qwen 235B.`,
    date: '2026-07-23',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvlinkimage1_16x9-1024x576.jpeg',
    imageCaption: 'Diagrama de interconexión NVLink 6. Imagen: NVIDIA',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 54,
    source: 'NVIDIA Technical Blog',
    sourceUrl: 'https://developer.nvidia.com/blog/nvidia-nvlink-the-scale-up-network-for-ai-factories/'
  },
  {
    id: '32',
    contentType: 'news',
    slug: 'nvidia-deepstream-9-1-tracking',
    titleEs: 'DeepStream 9.1: seguimiento 3D multicámara con skills de IA agéntica',
    titleEn: 'NVIDIA DeepStream 9.1: Multi-Camera 3D Tracking with Agentic AI Skills',
    excerptEs: 'DeepStream 9.1 introduce AutoMagicCalib y seguimiento 3D multivista, permitiendo rastrear objetos consistentemente a través de múltiples cámaras.',
    excerptEn: 'DeepStream 9.1 introduces AutoMagicCalib and Multi-View 3D Tracking, enabling consistent object tracking across multiple camera views.',
    contentEs: `### DeepStream 9.1: seguimiento 3D multicámara

Los desarrolladores que construyen aplicaciones de análisis de video en espacios grandes necesitan rastrear el mismo objeto a medida que se mueve entre vistas de cámara. El seguimiento 2D monocámara carece de información de profundidad confiable y típicamente pierde el objeto cuando sale del cuadro.

![DeepStream 9.1 - Seguimiento 3D](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/deepstream-featured.gif)

### AutoMagicCalib y MV3DT

NVIDIA DeepStream 9.1 aborda este desafío con **AutoMagicCalib (AMC)** y **Multi-View 3D Tracking (MV3DT)**. MV3DT proyecta detecciones de múltiples cámaras calibradas en un sistema de coordenadas 3D compartido y mantiene un ID de objeto consistente a través de las vistas.

![Arquitectura MV3DT](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image5-7.webp)

### Cómo funciona

Cada cámara utiliza una matriz de proyección 3×4 para retroproyectar detecciones 2D a coordenadas 3D. El tracker usa MQTT para compartir tracklets entre cámaras. Cuando dos cámaras observan la misma persona, el algoritmo de asociación multivista empareja sus tracklets usando proximidad en espacio 3D.

### AutoMagicCalib

AMC automatiza la calibración de redes de cámaras analizando objetos rastreados en videos existentes. Estima parámetros intrínsecos y extrínsecos de cada cámara automáticamente, eliminando la necesidad de patrones de calibración manuales.

![Interfaz de AutoMagicCalib](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image4-7.webp)

### Skills de DeepStream 9.1

DeepStream 9.1 introduce 13 skills diseñados para agentes de codificación como Claude Code y Codex. Puedes describir lo que necesitas en lenguaje natural y el agente maneja la configuración, calibración y ejecución.

![DeepStream MV3DT en acción](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image2-9.webp)

### Calibración paso a paso

El proceso comienza clonando el repositorio, instalando los skills y lanzando el agente de codificación. El agente guía al usuario a través de la calibración automática y el despliegue del pipeline de seguimiento.

![Calibración manual](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image1-6.webp)

Esta tecnología es particularmente relevante para seguridad en almacenes, análisis minorista y monitoreo de edificios inteligentes, donde el seguimiento consistente a través de múltiples cámaras es esencial.`,
    contentEn: `### DeepStream 9.1: Multi-Camera 3D Tracking

DeepStream 9.1 addresses multi-camera tracking with AutoMagicCalib and Multi-View 3D Tracking (MV3DT), projecting detections from multiple calibrated cameras into a shared 3D coordinate system.

![DeepStream 9.1](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/deepstream-featured.gif)

The system uses MQTT to share tracklets across cameras, maintaining consistent object IDs across all views.`,
    date: '2026-07-24',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/deepstream-featured.gif',
    imageCaption: 'DeepStream 9.1 seguimiento 3D multicámara. Imagen: NVIDIA',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 78,
    source: 'NVIDIA Technical Blog',
    sourceUrl: 'https://developer.nvidia.com/blog/build-a-multi-camera-3d-tracking-application-with-nvidia-deepstream-9-1-skills/'
  },
  {
    id: '33',
    contentType: 'news',
    slug: 'nvidia-ising-decoding-quantum',
    titleEs: 'NVIDIA Ising Decoding reduce 300x la tasa de error lógico en códigos de color cuánticos',
    titleEn: 'NVIDIA Ising Decoding Cuts Color Code Logical Error Rates by Over 300x',
    excerptEs: 'El decoder Ising ColorCode 1 Fast de NVIDIA logra 347.7x mejor tasa de error lógico y 7.3x más velocidad que Chromobius en corrección de errores cuánticos.',
    excerptEn: 'NVIDIA Ising Decoder ColorCode 1 Fast achieves 347.7x better logical error rate and 7.3x faster runtime than Chromobius for quantum error correction.',
    contentEs: `### NVIDIA Ising Decoding: avance en corrección de errores cuánticos

Las computadoras cuánticas útiles requerirán operaciones lógicas tolerantes a fallos. Los códigos de color (color codes) son particularmente eficientes para operaciones lógicas —pueden realizar todas las compuertas Clifford transversalmente— pero históricamente han sido difíciles de decodificar rápidamente.

![NVIDIA Ising Decoding](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image1-5-1024x576.jpg)

### El desafío de los códigos de color

Aunque los códigos de color requieren más qubits físicos que los códigos de superficie para lograr la misma tasa de fallo lógico, pueden ejecutar compuertas lógicas más eficientemente. Sin embargo, decodificarlos era mucho más difícil que decodificar códigos de superficie, por lo que habían sido archivados por falta de decodificadores rápidos y precisos.

### NVIDIA Ising Decoder ColorCode 1 Fast

El decoder NVIDIA Ising ColorCode 1 Fast está diseñado para acelerar y mejorar la tasa de error lógico (LER) de los decodificadores de código de color, logrando:

- **347.7x mejor LER** que Chromobius (el decoder estado del arte anterior)
- **7.3x tiempo de ejecución más rápido** para d=31 con tasa de error físico de 0.3%

### Cómo funciona

Usando el pipeline de entrenamiento Ising Decoding, los operadores de QPU pueden entrenar pequeños decodificadores pre-entrenados basados en CNN 3D diseñados para códigos de color triangulares. Estos pre-decodificadores aceleran y mejoran la precisión del decoder manejando una gran cantidad de síndromes de error localizados.

![Gráfico de rendimiento](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image2-6.webp)

### Recursos abiertos

La familia de modelos NVIDIA Ising es completamente abierta. Los pesos, arquitecturas de entrenamiento, datos y recetas están disponibles en Hugging Face y GitHub bajo licencia Apache 2.0. Los desarrolladores pueden modificar, desplegar y afinar sus propios modelos para QPUs específicos.

Este avance trae los códigos de color de vuelta al foco para construir y operar computadoras cuánticas verdaderamente útiles, demostrando que la IA puede revolucionar incluso la corrección de errores cuánticos.`,
    contentEn: `### NVIDIA Ising Decoding: Quantum Error Correction Breakthrough

The NVIDIA Ising Decoder ColorCode 1 Fast achieves 347.7x better logical error rate and 7.3x faster runtime than the state-of-the-art Chromobius decoder, bringing color codes back into focus for fault-tolerant quantum computation.

![NVIDIA Ising Decoding](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image1-5-1024x576.jpg)

The Ising model family is fully open, with weights, training architectures, and recipes available on Hugging Face and GitHub under Apache 2.0 license.`,
    date: '2026-07-24',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/image1-5-1024x576.jpg',
    imageCaption: 'Visualización de corrección de errores cuánticos con Ising Decoding. Imagen: NVIDIA',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 43,
    source: 'NVIDIA Technical Blog',
    sourceUrl: 'https://developer.nvidia.com/blog/nvidia-ising-decoding-cuts-color-code-logical-error-rates-by-over-300x/'
  },
  {
    id: '34',
    contentType: 'news',
    slug: 'nvidia-omniverse-rtx-sensor',
    titleEs: 'Integra simulación de sensores RTX de Omniverse en tus aplicaciones existentes',
    titleEn: 'Integrate NVIDIA Omniverse RTX Sensor Simulation Into Existing Apps',
    excerptEs: 'La librería ovrtx de NVIDIA permite agregar simulación de sensores RTX (cámara, lidar, radar) a aplicaciones existentes usando OpenUSD.',
    excerptEn: 'NVIDIA ovrtx library enables adding RTX sensor simulation (camera, lidar, radar) to existing applications using OpenUSD scenes.',
    contentEs: `### Simulación de sensores RTX en aplicaciones existentes

Los desarrolladores que construyen aplicaciones 3D, simulación, robótica y gemelos digitales industriales necesitan formas de incorporar capacidades de IA física en las herramientas que ya usan. La librería **ovrtx** de NVIDIA proporciona un SDK ligero en C y Python para generar outputs de sensores (cámara, lidar, radar) desde escenas OpenUSD.

![Omniverse RTX Sensor](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvidia-omniverse-rtx-sensor-ximulation.webp)

### Cómo funciona ovrtx

El principio central es simple: como desarrollador, puedes traer la simulación de sensores RTX de NVIDIA Omniverse a tus propias aplicaciones mientras mantienes el control de la arquitectura, UI, modelo de datos y flujo de trabajo.

### Integración en 5 pasos

1. Crear y configurar un renderizador ovrtx
2. Cargar contenido OpenUSD desde el pipeline existente
3. Definir RenderProducts y RenderVars para cámara, lidar, radar
4. Ejecutar renderizado desde el bucle de la aplicación
5. Mapear resultados a memoria CPU o GPU

![Flujo de trabajo ovrtx](https://developer-blogs.nvidia.com/wp-content/uploads/2026/06/app-workflow-openusd-scene-data-nvidia-ovrtx.webp)

### Componentes principales

El **Omniverse RTX Renderer** es la tecnología central expuesta por ovrtx. Aprovecha NVIDIA RTX combinando RT Cores con aceleración AI de Tensor Cores para renderizado fotorrealista en tiempo real.

**ovstage** proporciona un runtime compartido para datos de escena OpenUSD, permitiendo que ovphysx (física) y ovrtx (sensores) intercambien estado de simulación.

### Casos de uso

**PTC Onshape Render Studio** está explorando cómo ovrtx puede integrarse en flujos de trabajo CAD nativos de la nube, validando que la renderización RTX puede ser parte del flujo de trabajo existente sin requerir un entorno separado.

![PTC Onshape + ovrtx](https://developer-blogs.nvidia.com/wp-content/uploads/2026/06/ptc-typescript-rtx-workbench-render-onshape-nvidia-omniverse-rtx-ovrtx.webp)

### Aplicaciones prácticas

ovrtx es ideal para generación de datos sintéticos (SDG), pruebas de percepción, robótica, gemelos digitales y revisión de diseño. Se puede usar solo o con otras librerías Omniverse como ovphysx (física), ovstream (streaming) y ovstorage (gestión de datos).

Las librerías Omniverse ahora son parte de **NVIDIA Agent Toolkit**, permitiendo que agentes de IA inspeccionen escenas, generen outputs de sensores y devuelvan evidencia verificable a los desarrolladores.`,
    contentEn: `### RTX Sensor Simulation in Existing Apps

The ovrtx library enables adding NVIDIA Omniverse RTX sensor simulation (camera, lidar, radar) to existing applications while keeping control of the app architecture. It provides a lightweight C and Python SDK for generating sensor outputs from OpenUSD scenes.

![Omniverse RTX Sensor](https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvidia-omniverse-rtx-sensor-ximulation.webp)

ovrtx is ideal for synthetic data generation, perception testing, robotics, digital twins, and design review workflows.`,
    date: '2026-07-24',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://developer-blogs.nvidia.com/wp-content/uploads/2026/07/nvidia-omniverse-rtx-sensor-ximulation.webp',
    imageCaption: 'Simulación de sensores RTX con NVIDIA Omniverse. Imagen: NVIDIA',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 62,
    source: 'NVIDIA Technical Blog',
    sourceUrl: 'https://developer.nvidia.com/blog/integrate-nvidia-omniverse-rtx-sensor-simulation-into-existing-apps/'
  },
  {
    id: '35',
    contentType: 'news',
    slug: 'comision-europea-multa-google-890-millones',
    titleEs: 'Bruselas multa a Google con 890 millones de euros por incumplir la Ley de Mercados Digitales',
    titleEn: 'Brussels fines Google 890 million euros for breaching the Digital Markets Act',
    excerptEs: 'La Comisión Europea ha impuesto a Google una multa histórica de 890 millones de euros por incumplir la Ley de Servicios Digitales (DSA) en la gestión de sus sistemas de recomendación algorítmica.',
    excerptEn: 'The European Commission has imposed a record fine of 890 million euros on Google for breaching the Digital Services Act (DSA) in its algorithmic recommendation systems.',
    contentEs: `### Bruselas multa a Google con 890 millones por incumplir la DSA

La Comisión Europea ha impuesto a Google una multa histórica de 890 millones de euros por incumplir la Ley de Servicios Digitales (DSA) de la Unión Europea. Esta sanción, una de las más elevadas bajo el nuevo marco regulatorio digital europeo, marca un punto de inflexión en la relación entre los gigantes tecnológicos y los reguladores.

![Sede de Google en Bruselas](https://images.ecestaticos.com/r-GHPKabwfOObGZJyHLnTeKWIGY=/0x0:2272x1704/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc6d%2Fcae%2Fd65%2Fc6dcaed6547923bb7d33148beebe106f.jpg)

### Los detalles de la sanción

Según informa Nacho Alarcón desde Bruselas, la Comisión determinó que Google violó la DSA al no proporcionar suficiente transparencia en sus sistemas de recomendación algorítmica. La investigación europea descubrió que la empresa no cumplía con los requisitos de evaluación de riesgos sistémicos exigidos por la normativa.

### Implicaciones para el sector

La multa envía una señal clara al ecosistema tecnológico: la UE está dispuesta a utilizar todo el peso de su marco regulatorio para hacer cumplir las nuevas normas digitales. Google, por su parte, ha anunciado que recurrirá la sanción ante los tribunales europeos.

### Reacciones

La vicepresidenta ejecutiva de la Comisión Europea, Margrethe Vestager, declaró que "la transparencia algorítmica no es opcional, es una obligación legal". Organizaciones de defensa de derechos digitales han aplaudido la decisión, mientras que analistas del sector advierten que esta multa podría sentar precedente para futuras sanciones contra otras grandes tecnológicas.`,
    contentEn: `### Brussels fines Google 890M for breaching DMA

The European Commission has imposed a record fine of 890 million euros on Google for violating the Digital Services Act (DSA). This is one of the highest penalties under the new European digital regulatory framework.`,
    date: '2026-07-23',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.ecestaticos.com/r-GHPKabwfOObGZJyHLnTeKWIGY=/0x0:2272x1704/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc6d%2Fcae%2Fd65%2Fc6dcaed6547923bb7d33148beebe106f.jpg',
    imageCaption: 'Sede de Google en Bruselas. Foto: El Confidencial',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'El Confidencial',
    sourceUrl: 'https://www.elconfidencial.com/tecnologia/2026-07-23/comision-europea-multa-google-dsa-1hms_4394763/'
  },
  {
    id: '36',
    contentType: 'news',
    slug: 'via-lactea-proyectiles-gas-32-millones-kmh',
    titleEs: 'Una extraña estructura en la Vía Láctea dispara proyectiles de gas a 32 millones de km/h',
    titleEn: 'A strange structure in the Milky Way shoots gas projectiles at 32 million km/h',
    excerptEs: 'La NASA trata de averiguar qué es V445 Puppis, la única nova de helio confirmada en la Vía Láctea, que lleva 20 años expulsando misteriosas balas de gas a velocidades extremas.',
    excerptEn: 'NASA is trying to figure out V445 Puppis, the only confirmed helium nova in the Milky Way, which has been ejecting mysterious gas bullets at extreme speeds for 20 years.',
    contentEs: `### La única nova de helio de la Vía Láctea

Una estructura asociada a V445 Puppis, la única nova de helio confirmada en la Vía Láctea, está expulsando misteriosos proyectiles de gas a velocidades extremas. La investigación, presentada en la Reunión Nacional de Astronomía de la Royal Astronomical Society, revela un fenómeno nunca observado en otras novas.

![Proyectil de gas de V445 Puppis](https://images.ecestaticos.com/OwXXJXvPdO8etUrgV_Vh6COLTus=/36x0:980x708/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3f2%2Fcef%2F596%2F3f2cef5963a031235bea3f96b6329846.jpg)

### Balas de gas a velocidad extrema

Los astrónomos han identificado varios grumos, posiblemente ricos en oxígeno, que se desplazan a una velocidad máxima de 32 millones de km/h. Estas balas o proyectiles aparecen incrustados en el gigantesco flujo bipolar liberado por la explosión estelar, aunque su mecanismo de formación continúa desconcertando a los especialistas.

### Una explosión estelar excepcional

Las novas se producen cuando una enana blanca captura materia de una estrella compañera. La acumulación de gas eleva la presión y la temperatura hasta provocar una reacción termonuclear descontrolada. Sin embargo, casi todas las novas conocidas utilizan material rico en hidrógeno, mientras que V445 Puppis carece completamente de este elemento.

### El misterio sin resolver

"El origen de estas balas es un misterio. Sospechamos que se originaron después de la explosión, pero nunca se han observado proyectiles de este tipo en ninguna otra nova", señaló John Mills, investigador de la Universidad de Warwick. El sistema ha comenzado de nuevo a transferir materia, un proceso que podría desembocar en futuras erupciones.`,
    contentEn: `### The only helium nova in the Milky Way

A structure associated with V445 Puppis, the only confirmed helium nova in the Milky Way, is ejecting mysterious gas projectiles at extreme speeds of 32 million km/h.`,
    date: '2026-07-22',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.ecestaticos.com/OwXXJXvPdO8etUrgV_Vh6COLTus=/36x0:980x708/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3f2%2Fcef%2F596%2F3f2cef5963a031235bea3f96b6329846.jpg',
    imageCaption: 'Proyectil de gas detectado en V445 Puppis. Imagen: Universidad de Warwick/John Mills',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'El Confidencial',
    sourceUrl: 'https://www.elconfidencial.com/tecnologia/ciencia/2026-07-22/estructura-via-lactea-dispara-balas-gas-32-1qrt_4394171/'
  },
  {
    id: '37',
    contentType: 'news',
    slug: 'agencias-representantes-influencers-250-millones',
    titleEs: 'Ellos mueven los hilos de los influencers (y manejan un mercado de 250 millones de euros)',
    titleEn: 'They pull the strings of influencers (and manage a 250 million euro market)',
    excerptEs: 'El negocio de los creadores de contenido vive su mejor momento. Las marcas gastan cada día más en ellos y sus representantes se están forrando. Entrevistamos a las agencias que mueven a El Rubius, Xuso Jones y Cristinini.',
    excerptEn: 'The content creator business is booming. Brands spend more every day and their agents are getting rich. We interview the agencies behind El Rubius, Xuso Jones, and Cristinini.',
    contentEs: `### El negocio detrás de los creadores de contenido

En la oficina de Webedia, en pleno centro de Madrid, Irene Cívico lleva 11 años dirigiendo la carrera de algunos de los influencers más importantes de España. "No me gusta mucho aparecer porque los protagonistas son ellos. Los representantes debemos conseguir que los creadores luzcan y evitarles que tropiecen", explica.

![Irene Cívico, directora de Vizz Agency](https://images.ecestaticos.com/10SUAWG1Sn3NTJqxztg88sj0Tls=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F498%2F50d%2Fb99%2F49850db99396a12f0c36a161c1a4f235.jpg)

### Un mercado de 250 millones

Según los estudios de IAB Spain y Primetag, el marketing de influencers en España mueve 245 millones de euros en inversión publicitaria anual. Una cifra que multiplica por tres lo generado en 2023. Solo de 2024 a 2025 la inversión en este sector subió un 50%.

### La profesionalización del sector

"Hemos pasado de que esto fuese la jungla a tener que profesionalizar a toda prisa. De ser cuatro gatos, a tener equipos de varias decenas de personas", cuenta Cívico. Su agencia Vizz representa a 35 grandes creadores, incluyendo a El Rubius, Illojuan, Nil Ojeda y Cristinini, sumando más de 200 millones de seguidores en YouTube.

Sergio Barreda, CEO de Keepers, coincide: "A día de hoy no hay un techo marcado, no vemos la opción de que haya techo". Su agencia gestiona 70 talentos como Xuso Jones y Henar Álvarez.`,
    contentEn: `### The business behind content creators

The influencer marketing industry in Spain moves 245 million euros in annual advertising investment, with agencies like Vizz and Keepers managing top creators.`,
    date: '2026-07-23',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: 'https://images.ecestaticos.com/10SUAWG1Sn3NTJqxztg88sj0Tls=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F498%2F50d%2Fb99%2F49850db99396a12f0c36a161c1a4f235.jpg',
    imageCaption: 'Irene Cívico, directora de creadores de Vizz Agency. Foto: Guillermo Gutiérrez Carrascal',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'El Confidencial',
    sourceUrl: 'https://www.elconfidencial.com/tecnologia/2026-07-23/agencias-representantes-influencers-espana-creadores-cbtrntrv_4392823/'
  },
  {
    id: '38',
    contentType: 'news',
    slug: 'rapamicina-autismo-nueva-via-tratamiento',
    titleEs: 'Un vídeo inesperado en el móvil y un fármaco contra el envejecimiento abren una nueva vía para tratar el autismo',
    titleEn: 'An unexpected mobile video and an anti-aging drug open a new path to treat autism',
    excerptEs: 'Una única dosis de rapamicina revirtió en dos horas alteraciones asociadas al TEA en ratones adultos, según un estudio de UCLA publicado en Nature Communications.',
    excerptEn: 'A single dose of rapamycin reversed autism-associated alterations in adult mice within two hours, according to a UCLA study published in Nature Communications.',
    contentEs: `### Un descubrimiento accidental

Harley Kornblum no esperaba ver ningún cambio tan pronto. El equipo de la UCLA había diseñado un tratamiento de varios días, pero los primeros vídeos de los ratones, grabados con un móvil apenas unas horas después de recibir el fármaco, alteraron el rumbo de la investigación.

![Harley Kornblum, investigador de UCLA](https://images.ecestaticos.com/DxQoTpQ7O8PVXfoRmJQOkxaXMCc=/27x0:907x660/1200x900/filters:fill(white):format(png)/f.elconfidencial.com%2Foriginal%2F4b5%2Fc3e%2F1dd%2F4b5c3e1dd2abeae6b21caadf3cebb611.png)

### Resultados en dos horas

En solo dos horas, una única dosis de rapamicina redujo la hiperexcitabilidad neuronal, la susceptibilidad a sufrir convulsiones, la hipersensibilidad sensorial y las conductas repetitivas de ratones adultos. También modificó la organización funcional de sus redes cerebrales.

### La rapamicina y el envejecimiento

La rapamicina es un potente inmunosupresor utilizado para prevenir el rechazo en trasplantes y en tratamientos contra el cáncer. También se ha convertido en uno de los compuestos más conocidos en la investigación sobre longevidad, al frenar la actividad de la vía mTOR.

"Lo que más me sorprendió fue la rapidez y la contundencia de la respuesta. Cuando la doctora Le Belle me enseñó los primeros vídeos de los ratones grabados con un iPhone, me quedé impactado", explica Kornblum.`,
    contentEn: `### An unexpected discovery

A single dose of rapamycin reversed autism-like behavioral alterations in adult mice within just two hours, according to a UCLA study published in Nature Communications.`,
    date: '2026-07-23',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.ecestaticos.com/DxQoTpQ7O8PVXfoRmJQOkxaXMCc=/27x0:907x660/1200x900/filters:fill(white):format(png)/f.elconfidencial.com%2Foriginal%2F4b5%2Fc3e%2F1dd%2F4b5c3e1dd2abeae6b21caadf3cebb611.png',
    imageCaption: 'Harley Kornblum, investigador de UCLA. Foto: El Confidencial',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'El Confidencial',
    sourceUrl: 'https://www.elconfidencial.com/salud/2026-07-23/una-nueva-via-para-tratar-sintomas-del-autismo_4394636/'
  },
  {
    id: '39',
    contentType: 'news',
    slug: 'c212-aviocar-transporte-militar-espanol',
    titleEs: 'Lecciones del C212 Aviocar: el exitoso "600" español del transporte militar',
    titleEn: 'Lessons from the C212 Aviocar: the successful Spanish "600" of military transport',
    excerptEs: 'El CASA C212 Aviocar, fabricado por EADS CASA, es uno de los mayores éxitos de la industria aeronáutica española con más de 480 unidades vendidas a 40 países.',
    excerptEn: 'The CASA C212 Aviocar, manufactured by EADS CASA, is one of the greatest successes of the Spanish aeronautical industry with over 480 units sold to 40 countries.',
    contentEs: `### El "Seiscientos" del aire

El CASA C212 Aviocar es uno de los mayores éxitos de la industria aeronáutica española. Con más de 480 unidades vendidas a 40 países, este avión de transporte táctico ligero se ha ganado la reputación de ser el "Seiscientos" del aire: robusto, fiable y capaz de operar en las condiciones más adversas.

![CASA C212 Aviocar en vuelo](https://images.ecestaticos.com/AthMWZoT3Rk8AHTF9Tbtgvp-Qow=/71x0:2192x1415/1200x800/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3a2%2F245%2Fe4c%2F3a2245e4cf93cac0ddc96d6e17589292.jpg)

### Diseñado para todo terreno

Diseñado originalmente en los años 70 para cubrir las necesidades del Ejército del Aire español, el C212 destacó por su capacidad para despegar y aterrizar en pistas cortas y sin pavimentar. Su diseño de ala alta y motores turbohélice le permiten operar donde otros aviones no pueden.

### Un éxito de exportación

El Aviocar no solo sirvió en las Fuerzas Armadas españolas, sino que se exportó a países como Indonesia, que incluso fabricó bajo licencia más de 100 unidades. También opera en misiones de Naciones Unidas y en fuerzas aéreas de toda América Latina.`,
    contentEn: `### The "Fiat 600" of the air

The CASA C212 Aviocar is one of the greatest successes of the Spanish aeronautical industry, with over 480 units sold to 40 countries.`,
    date: '2026-07-23',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.ecestaticos.com/AthMWZoT3Rk8AHTF9Tbtgvp-Qow=/71x0:2192x1415/1200x800/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3a2%2F245%2Fe4c%2F3a2245e4cf93cac0ddc96d6e17589292.jpg',
    imageCaption: 'CASA C212 Aviocar. Foto: El Confidencial',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'El Confidencial',
    sourceUrl: 'https://www.elconfidencial.com/tecnologia/2026-07-23/lecciones-c212-aviocar-transporte-militar_4394539/'
  },
  {
    id: '40',
    contentType: 'news',
    slug: 'japon-rompe-leyes-fisica-calor-programable',
    titleEs: 'Japón rompe las reglas de la física: sortea una ley de hace 160 años y consigue crear calor programable',
    titleEn: 'Japan breaks the rules of physics: bypasses a 160-year-old law and creates programmable heat',
    excerptEs: 'Investigadores japoneses han logrado un avance que desafía las leyes de la termodinámica: crear calor programable que puede dirigirse con precisión milimétrica.',
    excerptEn: 'Japanese researchers have achieved a breakthrough that challenges the laws of thermodynamics: creating programmable heat that can be directed with millimeter precision.',
    contentEs: `### Desafiando las leyes de la termodinámica

Investigadores japoneses han logrado un avance que desafía las leyes de la termodinámica establecidas hace más de 160 años. Han conseguido crear "calor programable", una tecnología que permite dirigir el flujo de energía térmica con una precisión milimétrica, algo que se consideraba imposible según los principios clásicos de la física.

![Recreación 3D del experimento japonés](https://images.ecestaticos.com/0ugPtbgIRNiR-QhagZGTIRyP_vM=/97x1:1170x806/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffcf%2Fc50%2Fefb%2Ffcfc50efba77f2a3599e64226645c6f0.jpg)

### La ley de Kirchhoff

La ley de Kirchhoff de la radiación térmica establece que un material capaz de absorber energía en un determinado ángulo y longitud de onda debe emitirla en condiciones equivalentes. Esta correspondencia ha limitado durante décadas el desarrollo de dispositivos que gestionen el calor de forma selectiva.

### Metamateriales y memoria térmica

El dispositivo ideado por los investigadores de la Universidad Metropolitana de Osaka recibe el nombre de metagrating. Su diseño incorpora un material magnetoóptico y una aleación de germanio, antimonio y telurio (Ge2Sb2Te5) que funciona como memoria, permitiendo que el sistema recuerde su estado incluso después de apagar la alimentación.

### Aplicaciones potenciales

"El siguiente paso será fabricar un prototipo", afirmó Shunsuke Murai. La capacidad de activar, desactivar y memorizar el comportamiento térmico abre la puerta a emisores infrarrojos más eficientes, sensores avanzados, sistemas energéticos y memorias fotónicas.`,
    contentEn: `### Defying the laws of thermodynamics

Japanese researchers from Osaka Metropolitan University have achieved a breakthrough that challenges 160-year-old laws of thermodynamics, creating programmable heat that can be directed with millimeter precision using metamaterials.`,
    date: '2026-07-23',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.ecestaticos.com/0ugPtbgIRNiR-QhagZGTIRyP_vM=/97x1:1170x806/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Ffcf%2Fc50%2Fefb%2Ffcfc50efba77f2a3599e64226645c6f0.jpg',
    imageCaption: 'Recreación 3D del experimento japonés (Osaka Metropolitan University). Foto: El Confidencial',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'El Confidencial',
    sourceUrl: 'https://www.elconfidencial.com/tecnologia/ciencia/2026-07-23/japon-rompe-leyes-fisica-calor-programable-1qrt_4393584/'
  },
  {
    id: '41',
    contentType: 'news',
    slug: 'tormentas-solares-subestimadas-estudio-nature',
    titleEs: 'Estamos subestimando el poder destructivo de las tormentas solares, dice un estudio de Nature',
    titleEn: 'We are underestimating the destructive power of solar storms, says a Nature study',
    excerptEs: 'Un nuevo estudio publicado en Nature revela que hemos subestimado sistemáticamente el poder de la actividad solar extrema. El límite superior de la respuesta de la Tierra es una ilusión estadística.',
    excerptEn: 'A new study published in Nature reveals we have been systematically underestimating the power of extreme solar activity. The upper limit of Earth\'s response is a statistical illusion.',
    contentEs: `### Subestimando el poder del Sol

Ya sabíamos que una tormenta solar monstruosa podía borrar del mapa la red eléctrica mundial, pero resulta que nuestros peores modelos se quedaban cortos. Un nuevo estudio publicado en la revista Nature revela que hemos estado subestimando sistemáticamente el poder de la actividad solar extrema por un simple error matemático.

![Visualización del efecto de un evento solar extremo](https://images.ecestaticos.com/agcXG5TFoCF40eNPAGDSoQJdvNk=/0x0:1655x1251/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fae5%2F394%2F8de%2Fae53948debcb1b8daebb92a64f2def6e.jpg)

### La mentira de la saturación geomagnética

Durante décadas, los físicos pensaron que la Tierra tenía un tope natural que amortiguaba los impactos de los peores temporales espaciales. Investigadores de la NASA y la Universidad de Lancaster han demostrado que esa saturación era una simple ilusión estadística conocida como regresión a la media.

### De Carrington a Miyake

Un evento nivel Carrington, como el de 1859, destruiría la red eléctrica global. Pero los Eventos Miyake superan esa escala hasta 10 veces. Según el estudio, la capacidad destructiva de un evento de este calibre carece de límites geomagnéticos y su impacto podría ser el doble de grande de lo que se pensaba.

### Un desastre sin techo

El equipo analizó más de un millón de puntos de datos de satélites en órbita terrestre baja. La relación entre las fuerzas del Sol y las corrientes inducidas en la Tierra resultó ser una línea ascendente sin saturación. "Normalmente asumimos que la verdad puede estar alrededor de su medición. Pero la teoría de la probabilidad dice que se inclina hacia un lado", señaló Nithin Sivadas, investigador de la NASA y autor principal del estudio.`,
    contentEn: `### Underestimating the power of the Sun

A new study published in Nature reveals we have been systematically underestimating extreme solar activity. The apparent saturation of Earth's geomagnetic response is a statistical illusion, meaning a Carrington or Miyake event could be far more destructive than previously thought.`,
    date: '2026-07-22',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: 'https://images.ecestaticos.com/agcXG5TFoCF40eNPAGDSoQJdvNk=/0x0:1655x1251/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fae5%2F394%2F8de%2Fae53948debcb1b8daebb92a64f2def6e.jpg',
    imageCaption: 'Visualización del efecto de un evento solar extremo (NASA). Foto: El Confidencial',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'El Confidencial',
    sourceUrl: 'https://www.elconfidencial.com/tecnologia/novaceno/2026-07-22/efecto-carrington-efecto-miyake-destruccion_4393751/'
  },
  {
    id: '42',
    contentType: 'news',
    slug: 'amd-advancing-ai-2026-helios-epyc-instinct',
    titleEs: 'AMD presenta Helios, EPYC Venice e Instinct MI400 en su evento Advancing AI 2026',
    titleEn: 'AMD unveils Helios, EPYC Venice and Instinct MI400 at Advancing AI 2026',
    excerptEs: 'AMD lanzó su cartera de próxima generación para IA agéntica, incluyendo Helios (su primera solución rack-scale), los procesadores EPYC 9006 "Venice" de 6ª gen y las GPUs Instinct MI400. OpenAI, Anthropic y Meta ya adoptan la plataforma.',
    excerptEn: 'AMD launched its next-generation portfolio for agentic AI, including Helios (its first rack-scale solution), 6th Gen EPYC 9006 "Venice" processors and Instinct MI400 GPUs. OpenAI, Anthropic and Meta are already adopting the platform.',
    contentEs: `### AMD redefine la infraestructura de IA con su cartera más ambiciosa

El 23 de julio de 2026, AMD celebró su evento Advancing AI 2026 en San Francisco, California, donde la CEO Lisa Su presentó la hoja de ruta más completa en la historia de la compañía. Con un mercado direccionable estimado en 2 billones de dólares para 2030, AMD apuesta por una plataforma abierta de IA que abarca desde el centro de datos hasta el borde.

Según el comunicado oficial de AMD, la nueva generación de productos incluye:

### AMD Helios: la solución rack-scale más potente del mundo

Helios integra 72 GPUs Instinct MI455X y 18 CPUs EPYC "Venice" de 6ª generación por rack, conectados mediante redes Pensando de front-end, scale-up y scale-out. AMD afirma que Helios ofrece hasta un 30% más de tokens por dólar en inferencia que la competencia.

OpenAI, Anthropic, Meta, Microsoft y Oracle ya confirmaron que desplegarán Helios en sus centros de datos. Anthropic planea una implementación de hasta 2 gigavatios con GPUs MI455X.

### EPYC Venice: la CPU para la era de la IA agéntica

Los procesadores EPYC 9006 de 6ª generación, con arquitectura Zen 6, ofrecen el portafolio más amplio de CPUs para servidores de IA. Están diseñados para mantener las GPUs completamente alimentadas en nodos host de IA, además de ejecutar aplicaciones críticas de negocio.

### Instinct MI400: rendimiento 34x superior

La GPU MI455X ofrece un rendimiento 34 veces mayor en throughput de tokens comparado con la generación MI355X. Para cargas de trabajo de alta precisión, la MI430X alcanza hasta 288 TFLOPS FP64.

### ¿Qué significa esto para Bolivia?

Mientras gigantes como OpenAI y Meta despliegan infraestructura de IA a escala de gigavatios, Bolivia aún carece de centros de datos especializados en IA. El costo de una GPU Instinct MI455X supera los 30.000 dólares, una cifra inalcanzable para la mayoría de instituciones bolivianas. Sin embargo, la llegada de soluciones como Helios podría abaratar la inferencia de IA a largo plazo, beneficiando a sectores como la salud y la educación en el país.

### Precios de referencia en Bolivia (Julio 2026)

| Producto | Precio Bs. | Uso sugerido |
|----------|:----------:|--------------|
| AMD Ryzen 5 5600 | 1.750 | PC oficina/edición básica |
| AMD Ryzen 5 7600 | ~2.100 | Workstation edición de video |
| AMD Ryzen 7 7800X3D | 5.300 | Gaming y render 3D |
| AMD Radeon RX 7600 | 4.158 - 4.680 | Tarjeta gráfica para edición |

Fuentes: bgamer.pro, Cyrex Store, CompuCenter Bolivia.`,
    contentEn: `### AMD redefines AI infrastructure with its most ambitious portfolio

On July 23, 2026, AMD held its Advancing AI 2026 event in San Francisco, where CEO Lisa Su unveiled the company's most comprehensive roadmap yet. With a total addressable market estimated at $2 trillion by 2030, AMD is betting on an open AI platform spanning from data center to edge.

Key launches include the AMD Helios rackscale solution (72 Instinct MI455X GPUs + 18 EPYC Venice CPUs per rack), 6th Gen EPYC 9006 "Venice" processors based on Zen 6 architecture, and the Instinct MI400 series GPUs delivering 34x higher token throughput.

OpenAI, Anthropic, Meta, Microsoft and Oracle have all confirmed they will deploy Helios infrastructure.`,
    date: '2026-07-23',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop',
    imageCaption: 'Centro de datos moderno con servidores de alto rendimiento. Foto: Unsplash',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'AMD Newsroom',
    sourceUrl: 'https://newsroom.amd.com/news/aai-2026-full-stack-compute-agentic-ai/'
  },
  {
    id: '43',
    contentType: 'news',
    slug: 'amd-rackspace-30mw-ia-empresarial',
    titleEs: 'AMD y Rackspace firman acuerdo para desplegar 30 MW de computación IA para empresas reguladas',
    titleEn: 'AMD and Rackspace sign agreement to deploy 30 MW of AI compute for regulated enterprises',
    excerptEs: 'El acuerdo definitivo establece un despliegue escalonado de GPUs AMD Instinct y CPUs EPYC en centros de datos globales de Rackspace, creando una nueva categoría de infraestructura IA gobernada para industrias reguladas como salud y finanzas.',
    excerptEn: 'The definitive agreement establishes a phased deployment of AMD Instinct GPUs and EPYC CPUs across Rackspace global data centers, creating a new category of governed AI infrastructure for regulated industries like healthcare and finance.',
    contentEs: `### Una alianza estratégica para la IA empresarial gobernada

El 16 de junio de 2026, AMD y Rackspace Technology firmaron un acuerdo definitivo para desplegar 30 megavatios de capacidad de computación basada en AMD en centros de datos de Rackspace a nivel global, con inicio previsto para finales de 2026 y completado hacia 2028.

Según el comunicado oficial de AMD, el acuerdo operacionaliza el memorando de entendimiento anunciado el 7 de mayo de 2026 y establece a AMD como socio tecnológico estratégico en la capa de silicio de la pila de IA gobernada de Rackspace.

### ¿Qué incluye el despliegue?

- GPUs AMD Instinct (MI355X, MI350P y sucesoras futuras)
- CPUs AMD EPYC para cargas de trabajo generales
- Cuatro capacidades integradas: Enterprise AI Cloud, Enterprise Inference Engine, Inference as a Service y Bare Metal AMD Instinct

### Un mercado sin precedentes en Bolivia

Mientras Rackspace y AMD construyen infraestructura IA para empresas reguladas en Estados Unidos y Europa, en Bolivia el ecosistema de IA empresarial es aún incipiente. No existen centros de datos especializados en IA con certificaciones para salud o finanzas.

Sin embargo, el mercado boliviano de tecnología crece. Una laptop con Ryzen 5 5600G (Bs. 1.536 en sumerlabs.com) sigue siendo la herramienta más accesible para jóvenes desarrolladores bolivianos que quieran incursionar en IA. La brecha es enorme, pero también lo es la oportunidad.

### Precios de referencia AMD en Bolivia

| Producto | Precio (Bs.) | Tienda |
|----------|:-----------:|--------|
| AMD Ryzen 5 5600G | 1.536 | sumerlabs.com |
| AMD Ryzen 5 5600 | 1.750 | bgamer.pro |
| AMD Ryzen 5 7600X | 2.300 | Cyrex Store |
| AMD Ryzen 7 7800X3D | 5.300 | Cyrex Store |
| AMD Radeon RX 7600 | 4.158 - 4.680 | bgamer.pro / CompuCenter |

Con información de: AMD Newsroom y Rackspace Technology.`,
    contentEn: `### A strategic alliance for governed enterprise AI

On June 16, 2026, AMD and Rackspace Technology signed a definitive agreement to deploy 30 MW of AMD-based AI compute across Rackspace's global data centers beginning in late 2026 through 2028. The deployment combines AMD Instinct GPUs and EPYC CPUs within Rackspace's Enterprise AI Cloud, targeting regulated enterprise workloads. Healthcare providers have already expressed early interest in accelerated compute for clinical AI and inference at scale.`,
    date: '2026-06-16',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=630&fit=crop',
    imageCaption: 'Asociación estratégica empresarial para infraestructura cloud. Foto: Unsplash',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'AMD Newsroom',
    sourceUrl: 'https://newsroom.amd.com/news/amd-and-rackspace-technology-sign-definitive/'
  },
  {
    id: '44',
    contentType: 'news',
    slug: 'amd-computacion-cuantica-hibrida',
    titleEs: 'AMD impulsa el futuro híbrido de la computación cuántica con CPUs, GPUs y FPGAs',
    titleEn: 'AMD advances the hybrid future of quantum computing with CPUs, GPUs and FPGAs',
    excerptEs: 'AMD detalla su estrategia para la computación cuántica: no reemplazará a la computación clásica, sino que la acelerará mediante arquitecturas híbridas. Colabora con IBM, JPMorganChase y Oak Ridge National Laboratory.',
    excerptEn: 'AMD details its quantum computing strategy: it will not replace classical computing but accelerate it through hybrid architectures. Collaborations include IBM, JPMorganChase and Oak Ridge National Laboratory.',
    contentEs: `### El futuro cuántico no será solo cuántico

El 19 de junio de 2026, AMD publicó un análisis estratégico sobre el futuro de la computación cuántica, dejando claro que los procesadores cuánticos no reemplazarán a los clásicos, sino que trabajarán juntos en arquitecturas híbridas.

Según el blog oficial de AMD firmado por Sanjay Chaurasia, Yasuko Eckert y Mario Morales, el gobierno de Estados Unidos anunció en mayo una inversión de más de 2.000 millones de dólares en iniciativas de computación cuántica, reflejando la confianza en que la tecnología cuántica se acerca a un impacto práctico.

### ¿Por qué es importante la infraestructura clásica?

Los ordenadores cuánticos actuales dependen en gran medida de la computación clásica para funciones como:

- Control y calibración de qubits
- Orquestación de flujos de trabajo
- Simulación y preparación de datos
- Corrección de errores en tiempo real
- Post-procesamiento de resultados

### El portafolio de AMD para la era cuántica

AMD aporta toda su cartera a la infraestructura cuántica:

- **EPYC**: orquestación y cargas de trabajo HPC
- **Instinct**: simulación e investigación asistida por IA
- **FPGAs y SoCs adaptables**: control de baja latencia y corrección de errores en tiempo real
- **Redes Pensando**: conectividad escalable

### ¿Y Bolivia?

Mientras AMD, IBM y JPMorganChase exploran la integración cuántico-clásica, Bolivia no cuenta con programas de investigación en computación cuántica. Las universidades bolivianas carecen de laboratorios especializados y acceso a hardware cuántico, aunque iniciativas como el Laboratorio de Innovación Tecnológica de la UMSA podrían ser un punto de partida.

Mientras tanto, un AMD Ryzen 5 5600 a Bs. 1.750 sigue siendo la herramienta más potente al alcance del estudiante boliviano de ciencias de la computación.

Con información de: AMD Blogs.`,
    contentEn: `### The quantum future will not be quantum alone

On June 19, 2026, AMD published a strategic analysis on the future of quantum computing. Quantum computers will not replace classical ones but work together in hybrid architectures. AMD's CPUs, GPUs, FPGAs, adaptive SoCs and networking provide critical classical infrastructure for quantum systems. The U.S. Department of Commerce announced over $2 billion in quantum investment. AMD collaborates with IBM, JPMorganChase and Oak Ridge National Laboratory.`,
    date: '2026-06-19',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=630&fit=crop',
    imageCaption: 'Representación artística de computación cuántica. Foto: Unsplash',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'AMD Blogs',
    sourceUrl: 'https://www.amd.com/en/blogs/2026/amd-advances-the-hybrid-future-of-quantum-computing.html'
  },
  {
    id: '45',
    contentType: 'news',
    slug: 'amd-gartner-lider-cpus-ia-empresarial',
    titleEs: 'Gartner nombra a AMD como la empresa a vencer en CPUs para servidores de IA empresarial',
    titleEn: 'Gartner names AMD the company to beat for enterprise AI server CPUs',
    excerptEs: 'El informe "AI Vendor Race" de Gartner posiciona a AMD como el líder actual en CPUs para servidores de IA empresarial, destacando el rendimiento y eficiencia de los procesadores EPYC frente a la competencia.',
    excerptEn: 'Gartner\'s "AI Vendor Race" report positions AMD as the current leader in enterprise AI server CPUs, highlighting EPYC processor performance and efficiency against the competition.',
    contentEs: `### AMD es la empresa a vencer en CPUs para IA empresarial

Según un informe publicado en julio de 2026, Gartner posicionó a AMD como el líder actual en CPUs para servidores de IA empresarial en su reporte "AI Vendor Race: AMD Is the Company to Beat for Enterprise AI Server CPUs".

El análisis de Gartner evaluó a los principales fabricantes de CPUs para cargas de trabajo de inteligencia artificial en entornos empresariales, destacando el rendimiento, la eficiencia energética y el costo total de propiedad (TCO) de los procesadores AMD EPYC.

### ¿Qué significa esta clasificación?

La designación de Gartner implica que AMD ofrece la combinación más equilibrada de:

- Rendimiento por núcleo para cargas de IA
- Densidad de hilos por servidor
- Eficiencia energética por carga de trabajo
- Ecosistema de software abierto (ROCm)
- Facilidad de integración en centros de datos existentes

### Impacto en el mercado boliviano

Aunque los servidores EPYC no son accesibles para el mercado local —un servidor con EPYC cuesta entre 5.000 y 20.000 dólares—, la adopción de AMD en centros de datos globales presiona los precios a la baja. Esto beneficia indirectamente a empresas bolivianas que tercerizan servicios en la nube.

Para el consumidor boliviano, los procesadores AMD Ryzen para PC ofrecen la mejor relación calidad-precio del mercado:

- Ryzen 5 5600 (6 núcleos): Bs. 1.750 en bgamer.pro
- Ryzen 5 7600X (6 núcleos, AM5): Bs. 2.300 en Cyrex Store
- Ryzen 7 7800X3D (8 núcleos, 3D V-Cache): Bs. 5.300 en Cyrex Store

Con información de: AMD Newsroom y Gartner.`,
    contentEn: `### AMD is the company to beat in enterprise AI CPUs

In July 2026, Gartner positioned AMD as the current leader in enterprise AI server CPUs in its "AI Vendor Race" report. Gartner evaluated major CPU manufacturers for AI workloads, highlighting AMD EPYC processors' performance, energy efficiency and total cost of ownership. The analysis noted AMD's balanced combination of per-core performance, thread density, energy efficiency, open software ecosystem (ROCm) and data center integration.`,
    date: '2026-07-15',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1555617778-6b2e0a0df5db?w=1200&h=630&fit=crop',
    imageCaption: 'Servidores de alto rendimiento para centros de datos empresariales. Foto: Unsplash',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'AMD Newsroom',
    sourceUrl: 'https://www.amd.com/en/blogs/2026/amd-named-current-company-to-beat-in-gartner-ai-vendor.html'
  },
  {
    id: '46',
    contentType: 'news',
    slug: 'amd-epyc-venice-tsmc-2nm',
    titleEs: 'AMD inicia producción del EPYC Venice en tecnología de 2 nanómetros de TSMC',
    titleEn: 'AMD begins production of EPYC Venice on TSMC 2nm process technology',
    excerptEs: 'El procesador EPYC "Venice" de 6ª generación con arquitectura Zen 6 es el primer producto de computación de alto rendimiento en entrar en producción en el avanzado nodo de 2nm de TSMC, marcando un hito en la industria de semiconductores.',
    excerptEn: 'The 6th Gen EPYC "Venice" processor with Zen 6 architecture is the first high-performance computing product to enter production on TSMC\'s advanced 2nm process node, marking a milestone in the semiconductor industry.',
    contentEs: `### Un hito en la industria de semiconductores

El 21 de mayo de 2026, AMD anunció el inicio de la producción en masa de sus procesadores EPYC de 6ª generación, nombre clave "Venice", fabricados en el nodo de 2 nanómetros (N2) de TSMC. Es el primer producto de computación de alto rendimiento en la industria en alcanzar este hito de fabricación.

Según el comunicado de AMD, la arquitectura Zen 6 representa un salto generacional en rendimiento por vatio, densidad de transistores y eficiencia energética respecto a la generación anterior.

### Especificaciones clave del EPYC Venice

- Arquitectura: Zen 6 (6ª generación)
- Nodo: TSMC N2 (2nm)
- Hasta 192 núcleos por socket
- Soporte para memoria DDR5 y PCIe 6.0
- Compatible con plataforma SP5 existente
- Mayor ancho de banda de memoria para cargas de IA

### ¿Qué significa 2nm?

Para ponerlo en perspectiva: el nodo de 2nm de TSMC ofrece aproximadamente un 15% más de velocidad o un 30% menos de consumo energético comparado con el nodo de 3nm. Esto se traduce en servidores más potentes que consumen menos electricidad y generan menos calor.

### El mercado de procesadores en Bolivia

Mientras AMD produce el EPYC Venice en 2nm, el mercado boliviano sigue demandando procesadores de generaciones anteriores por su accesibilidad. Los procesadores AMD Ryzen disponibles en tiendas bolivianas reflejan esta realidad:

| Procesador | Núcleos | Precio Bs. | Tienda |
|-----------|:------:|:---------:|--------|
| Ryzen 5 5600G | 6/12 | 1.536 | sumerlabs.com |
| Ryzen 5 5600 | 6/12 | 1.750 | bgamer.pro |
| Ryzen 7 7800X3D | 8/16 | 5.300 | Cyrex Store |

La brecha entre la frontera tecnológica (2nm) y la realidad local (procesadores de 7nm) es enorme, pero permite a los bolivianos acceder a tecnología sólida a precios reducidos.

Con información de: AMD Newsroom.`,
    contentEn: `### A milestone in the semiconductor industry

On May 21, 2026, AMD announced mass production of its 6th Gen EPYC "Venice" processors on TSMC's 2nm (N2) process node. It is the first high-performance computing product in the industry to reach this manufacturing milestone. The Zen 6 architecture delivers generational leaps in performance-per-watt, transistor density and energy efficiency. Key specs include up to 192 cores per socket, DDR5 memory support and PCIe 6.0.`,
    date: '2026-05-21',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1563770551465-3874193f88c3?w=1200&h=630&fit=crop',
    imageCaption: 'Microprocesador semiconductor de última generación. Foto: Unsplash',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'AMD Newsroom',
    sourceUrl: 'https://newsroom.amd.com/news/amd-announces-production-ramp-of-next-generation-a/'
  },
  {
    id: '47',
    contentType: 'news',
    slug: 'amd-instinct-mi400-gpus-ia',
    titleEs: 'AMD lanza las GPUs Instinct MI400 con rendimiento 34x superior para IA generativa',
    titleEn: 'AMD launches Instinct MI400 GPUs with 34x higher performance for generative AI',
    excerptEs: 'La nueva generación de GPUs para centros de datos incluye la MI455X con 34x más throughput de tokens, la MI430X con 288 TFLOPS FP64 para supercomputación y la MI350P como opción de entrada con liderazgo en economía de tokens.',
    excerptEn: 'The new data center GPU generation includes the MI455X with 34x higher token throughput, the MI430X with 288 TFLOPS FP64 for supercomputing and the MI350P as an entry option with leadership token economics.',
    contentEs: `### AMD duplica la apuesta por GPUs para centros de datos

Durante el evento Advancing AI 2026, AMD presentó su nueva familia de aceleradores Instinct MI400, diseñados para entrenamiento de modelos frontera, inferencia a gran escala y supercomputación.

Según la información oficial de AMD, la familia MI400 se compone de tres modelos:

### Instinct MI455X: la GPU para inferencia masiva

- 34x más throughput de tokens que la MI355X
- Optimizada para inferencia de modelos de lenguaje y agentes de IA
- Integrada en la solución rack-scale Helios (72 GPUs por rack)
- OpenAI espera tener Helios en producción desde Q4 2026

### Instinct MI430X: supercomputación y soberanía IA

- Hasta 288 TFLOPS de precisión FP64 en hardware
- Diseñada para cargas de trabajo HPC y simulación científica
- Potencia la próxima generación de supercomputadores exaescala en EE.UU. y Europa

### Instinct MI350P: IA accesible para centros de datos existentes

- Hasta 4.2x más tokens por segundo por dólar que la competencia
- Se integra en infraestructura existente sin modificaciones
- Ideal para empresas que inician su adopción de IA

### ¿Qué significa esto para Bolivia?

Las GPUs Instinct MI400 no están al alcance del mercado boliviano —su precio oscila entre 15.000 y 50.000 dólares—. Sin embargo, la computación en la nube basada en estas GPUs está disponible a través de proveedores como Microsoft Azure y Oracle Cloud, permitiendo a desarrolladores y empresas bolivianas acceder a capacidad de IA sin invertir en hardware.

Para el usuario boliviano, la GPU más potente disponible en tiendas locales es la Radeon RX 7600, con precios entre Bs. 4.158 y Bs. 4.680, suficiente para edición de video, diseño 3D y gaming.

Con información de: AMD Newsroom.`,
    contentEn: `### AMD doubles down on data center GPUs

At Advancing AI 2026, AMD unveiled its new Instinct MI400 family of accelerators for frontier model training, large-scale inference and supercomputing. The MI455X delivers 34x higher token throughput than the MI355X. The MI430X reaches 288 TFLOPS FP64 for scientific computing. The MI350P offers 4.2x more tokens per second per dollar than competition, integrating into existing infrastructure.`,
    date: '2026-07-23',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1591453089816-0fbb971b4545?w=1200&h=630&fit=crop',
    imageCaption: 'Acelerador gráfico para inteligencia artificial y HPC. Foto: Unsplash',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'AMD Newsroom',
    sourceUrl: 'https://newsroom.amd.com/news/aai-2026-full-stack-compute-agentic-ai/'
  },
  {
    id: '48',
    contentType: 'news',
    slug: 'amd-kria-ryzen-ai-embedded-robotica',
    titleEs: 'AMD lanza plataforma robótica abierta Kria AI con procesadores Ryzen AI Embedded',
    titleEn: 'AMD launches open Kria AI robotics platform with Ryzen AI Embedded processors',
    excerptEs: 'AMD presentó los procesadores Ryzen AI Embedded X100 y la plataforma de robótica Kria AI, combinando CPU, GPU, NPU y FPGA en un solo ecosistema abierto para robótica autónoma e IA física.',
    excerptEn: 'AMD unveiled the Ryzen AI Embedded X100 processors and the Kria AI robotics platform, combining CPU, GPU, NPU and FPGA in a single open ecosystem for autonomous robotics and physical AI.',
    contentEs: `### AMD lleva la IA al mundo físico con su plataforma robótica más ambiciosa

El 23 de julio de 2026, AMD presentó su nueva familia de soluciones Kria AI para robótica e IA física, incluyendo los procesadores Ryzen AI Embedded X100, los módulos Kria AI SOM y la plataforma de desarrollo robótico Kria AI.

Según el comunicado oficial de AMD, la compañía busca eliminar el vendor lock-in en robótica, ofreciendo una plataforma abierta que combina CPU, GPU, NPU y FPGA en un solo ecosistema.

### Ryzen AI Embedded X100: el cerebro de la robótica

Los nuevos procesadores Ryzen AI Embedded X100 integran:

- CPU Zen 5 para control y orquestación
- GPU RDNA 3.5 para percepción visual
- NPU XDNA 2 para inferencia de IA en tiempo real
- Arquitectura preparada para entornos industriales

Estos procesadores están diseñados para aplicaciones de robótica, automatización industrial y sistemas embebidos inteligentes.

### Kria AI Robotics Developer Platform

La primera plataforma integrada turnkey para robótica autónoma que combina:

- Módulo SOM Kria AI con Ryzen AI Embedded
- Software ROCm abierto
- Ecosistema de socios robóticos
- Soporte para ROS 2 y marcos de IA estándar

### Automatización en Bolivia: una oportunidad latente

Mientras AMD impulsa la robótica industrial con plataformas que cuestan entre 500 y 2.000 dólares, Bolivia recién comienza su camino hacia la automatización. La industria manufacturera boliviana, concentrada en textiles, alimentos y bebidas, utiliza mayoritariamente procesos manuales o semiautomatizados.

Sin embargo, el creciente ecosistema de startups tecnológicas en La Paz y Santa Cruz está adoptando herramientas de IA y robótica a pequeña escala. Para estos emprendedores, un Ryzen 5 5600G con gráficos integrados Radeon (Bs. 1.536 en sumerlabs.com) puede ser el punto de partida para desarrollar soluciones de automatización accesibles.

Con información de: AMD Newsroom.`,
    contentEn: `### AMD brings AI to the physical world

On July 23, 2026, AMD launched its Kria AI family for robotics and physical AI, including Ryzen AI Embedded X100 processors, Kria AI SOMs and the Kria AI Robotics Developer Platform. The platform combines CPU (Zen 5), GPU (RDNA 3.5) and NPU (XDNA 2) in a single open ecosystem. It targets autonomous robotics, industrial automation and intelligent embedded systems.`,
    date: '2026-07-23',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=630&fit=crop',
    imageCaption: 'Robot autónomo con inteligencia artificial integrada. Foto: Unsplash',
    categoryEs: 'Tecnología',
    categoryEn: 'Technology',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'AMD Newsroom',
    sourceUrl: 'https://newsroom.amd.com/news/aai-2026-ryzen-ai-embedded-x100/'
  },
  {
    id: '49',
    contentType: 'news',
    slug: 'mlb-trade-deadline-2026',
    titleEs: 'MLB Trade Deadline 2026: los movimientos más impactantes antes del cierre',
    titleEn: 'MLB Trade Deadline 2026: The most impactful moves before the closure',
    excerptEs: 'La fecha límite de cambios de la MLB 2026 dejó intercambios sorprendentes, incluyendo el traspaso de estrellas a contendientes y la reorganización de franquicias enteras.',
    excerptEn: 'The 2026 MLB trade deadline delivered surprising deals, including star players moving to contenders and entire franchise rebuilds.',
    contentEs: `### Una fecha límite histórica para las Grandes Ligas

La temporada 2026 de la MLB culminó su fecha límite de cambios con movimientos que reconfiguran la lucha por la postemporada. Equipos contendientes reforzaron sus nóminas mientras que franquicias en reconstrucción apostaron por prospectos de cara al futuro.

### Los cambios más relevantes

Entre las transacciones más destacadas estuvieron el envío de lanzadores abridores de élite a equipos con urgencia inmediata y el movimiento de bateadores franquicia que cambiarán el equilibrio de poder en sus respectivas divisiones.

Según reportes de ESPN, varios equipos de mercados grandes asumieron salarios significativos a cambio de talento probado en postemporada, mientras que los equipos pequeños maximizaron el valor de sus activos antes de la agencia libre.

### Impacto en la recta final

Estos movimientos no solo afectan la clasificación inmediata sino que también definen las estrategias de oficina para los próximos años. La MLB 2026 promete una recta final emocionante con equipos renovados buscando su lugar en octubre.

Con información de: ESPN.`,
    contentEn: `The 2026 MLB trade deadline reshaped the playoff landscape with major deals. Contenders added pitching depth and power bats, while rebuilding teams stockpiled prospects. The deadline moves will have long-term implications for roster construction and competitive balance across the league.`,
    date: '2026-07-23',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1200&h=630&fit=crop',
    imageCaption: 'Estadio de béisbol durante un partido de MLB. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://www.espn.com/mlb/story/_/id/49411047/mlb-trade-deadline-2026-early-intel-rumors-updates-buster-olney-jeff-passan-mets-red-sox-dodgers-yankees-tigers'
  },
  {
    id: '50',
    contentType: 'news',
    slug: 'nfl-training-camps-2026',
    titleEs: 'NFL Training Camps 2026: las historias que dominan la pretemporada',
    titleEn: 'NFL Training Camps 2026: The stories dominating preseason',
    excerptEs: 'Los campos de entrenamiento de la NFL 2026 están en pleno apogeo con batallas de quarterbacks, rookies que sorprenden y veteranos que buscan un último contrato.',
    excerptEn: 'NFL training camps 2026 are in full swing with quarterback battles, surprising rookies, and veterans fighting for roster spots.',
    contentEs: `### Arranca la pretemporada de la NFL

Los 32 equipos de la NFL abrieron sus campos de entrenamiento con historias que definirán la temporada 2026. Desde la competencia por el puesto de quarterback titular hasta rookies que ya muestran destellos de grandeza, la pretemporada promete emociones.

### Quarterbacks en el centro de atención

Varias franquicias llegan con dudas en la posición más importante del deporte. Equipos con quarterbacks novatos compitiendo por el puesto titular y veteranos que buscan demostrar que aún tienen gasolina en el tanque son el foco principal de los campos.

De acuerdo con análisis de ESPN, al menos cinco equipos no tienen definido su quarterback titular para la semana 1, lo que convierte a esta pretemporada en una de las más inciertas de los últimos años.

### Novatos que ya brillan

Varias selecciones de primera ronda del Draft 2026 están justificando su elección con actuaciones destacadas en los entrenamientos. Desde wide receivers explosivos hasta linieros defensivos dominantes, la nueva generación promete impacto inmediato.

### Veteranos en la cuerda floja

Para jugadores veteranos, los training camps representan la última oportunidad de asegurar un puesto o incluso de extender sus carreras. Varios nombres conocidos están en situaciones de "prueba" que definirán su futuro en la liga.

Con información de: ESPN.`,
    contentEn: `NFL training camps are underway with major storylines: quarterback competitions in multiple cities, first-round rookies making immediate impressions, and veterans fighting to keep their careers alive. The preseason will be crucial for several franchises to establish their identity before Week 1.`,
    date: '2026-07-22',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1200&h=630&fit=crop',
    imageCaption: 'Campo de entrenamiento de la NFL. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://www.espn.com/nfl/story/_/id/49109711/nfl-training-camp-2026-schedules-dates-locations-every-team'
  },
  {
    id: '51',
    contentType: 'news',
    slug: 'nba-offseason-grades-2026',
    titleEs: 'NBA Offseason Grades 2026: evaluamos cada movimiento de la agencia libre',
    titleEn: 'NBA Offseason Grades 2026: grading every free agency move',
    excerptEs: 'La agencia libre de la NBA 2026 movió miles de millones en contratos y reacomodó el equilibrio de poder en ambas conferencias. Analizamos equipo por equipo.',
    excerptEn: 'The 2026 NBA free agency moved billions in contracts and reshaped the power balance across both conferences. Team-by-team analysis.',
    contentEs: `### Una agencia libre que redefinió la NBA

La temporada muerta de la NBA 2026 será recordada como una de las más activas en años. Contratos máximos, traspasos sorpresa y movimientos estratégicos cambiaron el panorama de la liga de cara a la próxima temporada.

### Las ganadoras de la agencia libre

Varios equipos salieron fortalecidos de la agencia libre. Franquicias que aseguraron a sus estrellas con extensiones máximas y otras que atrajeron a agentes libres de primer nivel dieron golpes sobre la mesa.

Según el análisis de ESPN, al menos tres equipos mejoraron significativamente su techo competitivo, mientras que otros quedaron en una posición incómoda tras perder a sus figuras sin recibir compensación adecuada.

### Las grandes incógnitas

No todos los movimientos fueron bien recibidos. Algunos contratos generaron dudas por su duración o monto, especialmente considerando las nuevas reglas del convenio colectivo que penalizan el gasto excesivo.

### Calificaciones equipo por equipo

Nuestro análisis detallado asigna calificaciones de la A a la F basadas en: retención de talento propio, adquisiciones en agencia libre, movimientos en el draft y flexibilidad salarial futura.

Con información de: ESPN.`,
    contentEn: `The 2026 NBA offseason featured massive contracts, surprising trades, and strategic moves that reshaped the league. Our team-by-team grades evaluate free agency signings, draft picks, trades, and cap management for all 30 franchises.`,
    date: '2026-07-21',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=630&fit=crop',
    imageCaption: 'Cancha de baloncesto de la NBA. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://www.espn.com/nba/story/_/id/49410979/nba-2026-offseason-grades-30-teams-free-agency-trades'
  },
  {
    id: '52',
    contentType: 'news',
    slug: 'fifa-world-cup-2026-changes',
    titleEs: 'Mundial 2026: los cambios de formato que transformarán el fútbol global',
    titleEn: 'World Cup 2026: the format changes transforming global football',
    excerptEs: 'La FIFA confirma cambios radicales para el Mundial 2026 con un formato expandido a 48 equipos y un nuevo sistema de clasificación que promete revolucionar el torneo.',
    excerptEn: 'FIFA confirms radical changes for the 2026 World Cup with a 48-team expanded format and new qualification system promising to revolutionize the tournament.',
    contentEs: `### El Mundial más grande de la historia

La Copa del Mundo 2026, que se disputará en Estados Unidos, México y Canadá, será la primera edición con 48 selecciones. Este cambio de formato, aprobado por la FIFA, promete un torneo más inclusivo pero también plantea interrogantes sobre la calidad competitiva.

### El nuevo sistema de clasificación

Según informó ESPN, el formato de 48 equipos dividirá a las selecciones en 12 grupos de 4. Los dos primeros de cada grupo avanzarán a octavos de final, junto con los ocho mejores terceros lugares, totalizando 32 equipos en la fase eliminatoria.

Este sistema reemplaza el anterior de 32 equipos en 8 grupos, utilizado desde 1998 hasta 2022.

### Impacto en Sudamérica y Bolivia

La Conmebol tendrá más cupos que nunca: 6 plazas directas más un posible repechaje. Para Bolivia, esto representa una oportunidad histórica de clasificar por primera vez desde 1994, aunque el nivel competitivo de la verde sigue siendo un desafío.

### Críticas y controversias

No todos aplauden la expansión. Críticos señalan que el formato diluye la calidad del torneo y aumenta la fatiga de los jugadores en un calendario ya saturado. Sin embargo, la FIFA defiende que el nuevo formato democratiza el acceso al máximo evento futbolístico.

Con información de: ESPN.`,
    contentEn: `The 2026 World Cup across USA, Mexico and Canada introduces a 48-team format with 12 groups of 4. The top two from each group plus the eight best third-placed teams advance to a 32-team knockout stage. While more inclusive, critics question the competitive balance and player fatigue concerns.`,
    date: '2026-07-20',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1200&h=630&fit=crop',
    imageCaption: 'Estadio de fútbol con público. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://www.espn.com/soccer/story/_/id/47108758/2026-fifa-world-cup-format-tiebreakers-fixtures-schedule'
  },
  {
    id: '53',
    contentType: 'news',
    slug: 'spain-dominance-football-2026',
    titleEs: 'España domina el fútbol mundial: el legado de una generación dorada',
    titleEn: 'Spain dominates world football: the legacy of a golden generation',
    excerptEs: 'La selección española continúa su reinado en el fútbol internacional con títulos consecutivos y un estilo de juego que marca tendencia en todo el planeta.',
    excerptEn: 'Spain continues its reign in international football with consecutive titles and a playing style that sets trends worldwide.',
    contentEs: `### Una era de dominio absoluto

España se ha consolidado como la potencia dominante del fútbol mundial. Con títulos consecutivos en Eurocopas y Mundial, la Roja ha establecido un estándar de excelencia que otras selecciones intentan emular sin éxito.

### Las claves del éxito

Según análisis de ESPN, el éxito español se basa en tres pilares fundamentales: una cantera inagotable que produce talento técnico de élite, un estilo de juego basado en la posesión y presión alta, y una estructura federativa que prioriza la formación sobre los resultados inmediatos.

### La nueva generación

El relevo generacional ha sido exitoso. Nuevas figuras emergen de las academias de La Masía y otras canteras españolas, manteniendo el ADN futbolístico que caracteriza a la selección. Jugadores jóvenes ya son titulares indiscutibles en los mejores clubes de Europa.

### ¿Hasta cuándo durará el dominio?

La pregunta que todos se hacen es si este ciclo dorado continuará o si otras selecciones como Francia, Brasil o Argentina lograrán destronar a España. Por ahora, la Roja sigue siendo el equipo a vencer en cada torneo internacional.

Con información de: ESPN.`,
    contentEn: `Spain's golden generation continues to dominate world football with a philosophy built on technical excellence, possession-based play, and an unmatched youth development system. The national team has set new standards for consistency and success in international competitions.`,
    date: '2026-07-19',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=630&fit=crop',
    imageCaption: 'Selección española de fútbol celebrando. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://africa.espn.com/football/story/_/id/49416781/why-spain-top-world-mens-womens-soccer-world-cup'
  },
  {
    id: '54',
    contentType: 'news',
    slug: 'mlb-labor-battle-2026',
    titleEs: 'MLB 2026: la batalla laboral que amenaza con paralizar el béisbol',
    titleEn: 'MLB 2026: the labor battle threatening to shut down baseball',
    excerptEs: 'Las negociaciones entre la MLB y el sindicato de jugadores entran en terreno peligroso con desacuerdos sobre el tope salarial y la repartición de ingresos.',
    excerptEn: 'Negotiations between MLB and the players union enter dangerous territory with disagreements over salary caps and revenue sharing.',
    contentEs: `### El fantasma de un nuevo paro

La Major League Baseball enfrenta una nueva crisis laboral. Las negociaciones entre los propietarios y el sindicato de jugadores (MLBPA) se han estancado en puntos críticos, reavivando el temor a una huelga o lockout que podría afectar la temporada 2027.

### Los puntos de conflicto

Según reportes de ESPN, los principales desacuerdos incluyen:

- Tope salarial: Los dueños insisten en implementar un salary cap al estilo NBA/NFL, mientras que los jugadores lo rechazan rotundamente
- Repartición de ingresos: Disputas sobre cómo distribuir los ingresos por streaming y derechos televisivos
- Edad de agencia libre: La MLBPA busca reducir los años de servicio necesarios para llegar a la agencia libre
- Calendario: Propuestas para expandir la temporada regular a 154 juegos

### Impacto en los aficionados

Un posible paro sería devastador para el deporte, que apenas se recupera de los conflictos laborales de 2021-2022. Los aficionados bolivianos que siguen la MLB ven con preocupación cómo estas disputas afectan la continuidad del campeonato.

### ¿Qué sigue?

Las partes tienen hasta febrero de 2027 para llegar a un acuerdo antes de que expire el convenio colectivo actual. La presión aumenta con cada semana sin avances significativos.

Con información de: ESPN.`,
    contentEn: `MLB faces a critical labor dispute with the players union over salary caps, revenue sharing, free agency age, and schedule changes. The current CBA expires in February 2027, and both sides remain far apart on key issues that could lead to another work stoppage.`,
    date: '2026-07-18',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=630&fit=crop',
    imageCaption: 'Estadio de béisbol vacío. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://www.espn.co.uk/mlb/story/_/id/49425027/mlb-labor-cba-owners-players-union-salary-cap-draft-proposals-mlbpa-negotiations-latest-updates'
  },
  {
    id: '55',
    contentType: 'news',
    slug: 'barcelona-adeyemi-fichaje-2026',
    titleEs: 'Barcelona ficha a Karim Adeyemi: el delantero que promete goles en el Camp Nou',
    titleEn: 'Barcelona signs Karim Adeyemi: the forward promising goals at Camp Nou',
    excerptEs: 'El FC Barcelona cierra el fichaje del delantero alemán Karim Adeyemi en una operación que ronda los 60 millones de euros, reforzando su ataque de cara a la temporada 2026-27.',
    excerptEn: 'FC Barcelona completes the signing of German forward Karim Adeyemi in a deal worth around €60 million, bolstering their attack for the 2026-27 season.',
    contentEs: `### Un refuerzo de lujo para el ataque culé

El FC Barcelona ha anunciado el fichaje del delantero alemán Karim Adeyemi procedente del Borussia Dortmund, en una operación que ronda los 60 millones de euros más variables. El jugador de 24 años firma un contrato por cinco temporadas con una cláusula de rescisión de 400 millones de euros.

### Las claves del fichaje

Según reportes de ESPN, la directiva blaugrana llevaba meses negociando con el Dortmund, que finalmente accedió a vender al delantero ante la inminente expiración de su contrato en 2027.

Adeyemi llega para ocupar la posición de extremo izquierdo, donde su velocidad, regate y capacidad goleadora aportarán un nuevo dimension al ataque dirigido por Hansi Flick.

### Impacto en el equipo

Con la llegada de Adeyemi, el Barcelona refuerza una delantera que ya cuenta con Robert Lewandowski y Lamine Yamal. La competencia por los puestos ofensivos se intensifica, lo que promete elevar el nivel del equipo.

### ¿Qué significa para LaLiga?

El fichaje confirma la recuperación financiera del Barcelona, que después de años de restricciones salariales vuelve a competir en el mercado de fichajes por jugadores de primer nivel. LaLiga 2026-27 promete ser una de las más competitivas de los últimos años.

Con información de: ESPN.`,
    contentEn: `FC Barcelona signs Karim Adeyemi from Borussia Dortmund for approximately €60 million. The German international joins on a five-year deal, adding pace, dribbling and goalscoring ability to Barcelona's attack. The signing signals Barcelona's return to competing for top talent in the transfer market.`,
    date: '2026-07-17',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&h=630&fit=crop',
    imageCaption: 'Estadio Camp Nou de Barcelona. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://www.espn.com/soccer/story/_/id/49348762/barcelona-sign-karim-adeyemi-borussia-dortmund'
  },
  {
    id: '56',
    contentType: 'news',
    slug: 'inter-miami-autogol-hilarante',
    titleEs: 'Inter Miami protagoniza el autogol más insólito de la temporada en la MLS',
    titleEn: 'Inter Miami scores the most bizarre own goal of the MLS season',
    excerptEs: 'Un error garrafal en defensa del Inter Miami terminó en autogol que ya es viral en redes sociales, en un partido que complica su clasificación a playoffs.',
    excerptEn: 'A defensive blunder by Inter Miami resulted in a viral own goal that complicates their playoff qualification hopes.',
    contentEs: `### El error que dio la vuelta al mundo

El Inter Miami de Lionel Messi vivió uno de los momentos más vergonzosos de la temporada al anotar un autogol que quedará en la historia de la MLS por lo insólito de la jugada.

### ¿Qué pasó?

Según la cobertura de ESPN, durante un partido clave por la clasificación a playoffs, un defensa del Inter Miami intentó despejar un centro lateral pero, ante la presión del delantero rival, conectó el balón de forma desafortunada enviándolo directamente a su propio arco, superando al portero que estaba fuera de posición.

### Reacciones

Las redes sociales explotaron con memes y comentarios sobre la jugada. Incluso compañeros de equipo no pudieron evitar mostrar incredulidad ante lo ocurrido. El entrenador del Inter Miami calificó la jugada como "un error de concentración que no puede repetirse en este nivel".

### Impacto en la clasificación

El resultado dejó al Inter Miami en una posición complicada en la tabla de la Conferencia Este, a falta de pocas fechas para el cierre de la temporada regular. Cada punto es vital en la lucha por los puestos de playoffs.

Con información de: ESPN.`,
    contentEn: `Inter Miami suffered a humiliating own goal that went viral on social media during a crucial MLS match. The defensive error complicated their playoff qualification hopes as the team struggles to find consistency in the closing stretch of the regular season.`,
    date: '2026-07-16',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200&h=630&fit=crop',
    imageCaption: 'Estadio de fútbol con aficionados. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://www.espn.com/soccer/report/_/gameId/761667'
  },
  {
    id: '57',
    contentType: 'news',
    slug: 'wnba-midseason-2026-caitlin-clark',
    titleEs: 'WNBA 2026: revisión de mitad de temporada con Caitlin Clark como protagonista',
    titleEn: 'WNBA 2026: midseason review with Caitlin Clark as the star',
    excerptEs: 'La temporada 2026 de la WNBA llega a su ecuador con Caitlin Clark rompiendo récords de audiencia y asistencias, mientras la liga vive su momento de mayor popularidad.',
    excerptEn: 'The 2026 WNBA season reaches its midpoint with Caitlin Clark breaking viewership and assist records as the league enjoys unprecedented popularity.',
    contentEs: `### La temporada del despegue

La WNBA está viviendo su temporada más exitosa en términos de audiencia, asistencia a los estadios e impacto mediático, impulsada principalmente por la llegada de Caitlin Clark, la sensación del baloncesto universitario que ha llevado su talento a la liga profesional.

### Caitlin Clark: el fenómeno

Según reportes de ESPN, Clark está promediando cifras históricas en asistencias y puntos, estableciéndose como la favorita al premio de Novata del Año y candidata al MVP. Su capacidad para llenar estadios dondequiera que juega ha elevado el perfil de toda la liga.

### Las contendientes al título

Varios equipos se perfilan como serias candidatas al campeonato. La profundidad de plantillas, la experiencia en playoffs y la química de equipo serán factores determinantes en la segunda mitad de la temporada.

### El crecimiento de la liga

La WNBA 2026 marca un antes y después. Los ratings televisivos han aumentado más del 40% respecto a la temporada anterior, y las franquicias reportan récords de abonos vendidos. El baloncesto femenino profesional nunca había estado tan visible.

Con información de: ESPN.`,
    contentEn: `The 2026 WNBA season is a watershed moment for women's basketball. Caitlin Clark's rookie campaign has shattered viewership records and attendance numbers. Multiple teams emerge as championship contenders as the league enters its most popular era.`,
    date: '2026-07-15',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=630&fit=crop',
    imageCaption: 'Partido de baloncesto femenino. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://www.espn.com/wnba/story/_/id/49414433/wnba-2026-midseason-grades-mvps-15-teams-all-star-break'
  },
  {
    id: '58',
    contentType: 'news',
    slug: 'lebron-james-free-agency-2026',
    titleEs: 'LeBron James: el futuro de la estrella que mantiene en vilo a la NBA',
    titleEn: 'LeBron James: the future of the star keeping the NBA on edge',
    excerptEs: 'LeBron James enfrenta la decisión más importante de su carrera al entrar en la agencia libre, con equipos de todo Estados Unidos preparando ofertas históricas.',
    excerptEn: 'LeBron James faces the biggest decision of his career as he enters free agency, with teams across the US preparing historic offers.',
    contentEs: `### La decisión que define una era

LeBron James, la superestrella de la NBA que redefinió el baloncesto moderno, enfrenta una decisión crucial en su carrera al llegar a la agencia libre en 2026. A sus 41 años, LeBron sigue siendo uno de los jugadores más influyentes dentro y fuera de la cancha.

### Las opciones sobre la mesa

Según reportes de ESPN, varias franquicias se preparan para hacer ofertas históricas:

- **Los Angeles Lakers**: Ofrecen una extensión máxima de tres años que convertiría a LeBron en el primer jugador en ganar más de 100 millones de dólares en una sola temporada
- **Cleveland Cavaliers**: El regreso a casa para cerrar su carrera donde empezó
- **New York Knicks**: El mercado más grande del mundo con un proyecto joven y prometedor
- **Miami Heat**: Una reunión con Pat Riley y la cultura de excelencia que lo llevó a sus primeros campeonatos

### El legado

Más allá del dinero, la decisión de LeBron definirá cómo se recuerda su carrera. ¿Buscará un quinto anillo en un nuevo equipo? ¿Regresará a Cleveland para un cierre emotivo? ¿O se retirará como Laker?

### Impacto mediático

Sea cual sea su decisión, el movimiento de LeBron será el evento deportivo más cubierto del año. Su capacidad para mover mercados, generar audiencia y atraer talento lo convierte en el agente libre más valioso en la historia del deporte profesional.

Con información de: ESPN.`,
    contentEn: `LeBron James enters free agency at 41 years old, facing a career-defining choice. The Lakers, Cavaliers, Knicks and Heat are all preparing historic offers. Beyond the money, this decision will shape how one of basketball's greatest legacies is remembered.`,
    date: '2026-07-14',
    readTimeEs: '7 min de lectura',
    readTimeEn: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1200&h=630&fit=crop',
    imageCaption: 'Cancha de baloncesto profesional. Foto: Unsplash',
    categoryEs: 'Deportes',
    categoryEn: 'Sports',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ESPN',
    sourceUrl: 'https://www.espn.co.uk/nba/story/_/id/49239600/lebron-james-free-agency-pros-cons-potential-destinations-cavaliers-warriors-heat'
  },
  {
    id: '59',
    contentType: 'news',
    slug: 'ops-voluntarias-onu-gestion-informacion-salud',
    titleEs: 'Voluntarias de la ONU y OPS fortalecen la gestión de información de salud en Bolivia',
    titleEn: 'UN Volunteers and PAHO strengthen health information management in Bolivia',
    excerptEs: 'La OPS y el Programa de Voluntarios de Naciones Unidas desplegaron un equipo profesional para mitigar el impacto de la crisis sanitaria por bloqueos y conflictos sociales en Bolivia.',
    excerptEn: 'PAHO and the UN Volunteers Program deployed a professional team to mitigate the health crisis impact from road blockades and social conflicts in Bolivia.',
    contentEs: `### Alianza estratégica por la salud

La Organización Panamericana de la Salud (OPS), en alianza estratégica con el Programa de Voluntarios de las Naciones Unidas (UNV), desplegó un equipo profesional de voluntarias para fortalecer la gestión de información de salud en Bolivia.

### Mitigación de la crisis sanitaria

La iniciativa busca mitigar el impacto de la crisis sanitaria desencadenada por los conflictos sociales y bloqueos de carreteras que afectaron el suministro de medicamentos y oxígeno en varios departamentos del país durante los meses pasados.

Las voluntarias, especializadas en gestión de datos sanitarios y sistemas de información, trabajan junto al Ministerio de Salud y Deportes para mejorar la recopilación, análisis y reporte oportuno de indicadores críticos de salud pública.

### Fortalecimiento del sistema

Según informó la OPS, el equipo desplegado apoya la modernización de los sistemas de vigilancia epidemiológica y la consolidación de la Historia Clínica Electrónica Única, uno de los pilares del Plan Nacional de Salud 2026-2030.

"La información oportuna y de calidad salva vidas. Este despliegue refuerza la capacidad del país para responder a emergencias sanitarias y garantizar la continuidad de los servicios esenciales", señaló la representante de la OPS en Bolivia, Elena Vuolo.

### Impacto esperado

Se espera que esta cooperación técnica permita reducir los tiempos de respuesta ante brotes epidémicos y mejorar la toma de decisiones basada en evidencia en los tres niveles del sistema de salud.

Con información de: OPS/OMS.`,
    contentEn: `PAHO and the UN Volunteers Program have deployed a professional team in Bolivia to strengthen health information management. The initiative aims to mitigate the impact of the health crisis caused by road blockades and social conflicts. Volunteers work with the Ministry of Health to improve data collection, analysis, and timely reporting of critical public health indicators.`,
    date: '2026-07-23',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop',
    imageCaption: 'OPS/OMS Bolivia',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'OPS/OMS',
    sourceUrl: 'https://www.paho.org/es/noticias/23-7-2026-voluntarias-naciones-unidas-ops-fortalecen-gestion-informacion-salud-bolivia'
  },
  {
    id: '60',
    contentType: 'news',
    slug: 'paro-72-horas-suspende-consultas-hospitales-santa-cruz',
    titleEs: 'Paro de 72 horas suspende consultas externas en hospitales cruceños',
    titleEn: '72-hour strike suspends outpatient consultations in Santa Cruz hospitals',
    excerptEs: 'Los trabajadores de salud de Santa Cruz iniciaron un paro de 72 horas que mantiene suspendida la atención en consulta externa de los hospitales públicos del departamento.',
    excerptEn: 'Health workers in Santa Cruz began a 72-hour strike that keeps outpatient care suspended in public hospitals across the department.',
    contentEs: `### Medida de presión

Los trabajadores de salud de Santa Cruz iniciaron un paro de 72 horas que mantiene suspendida la atención en consulta externa de los hospitales públicos del departamento. La medida afecta a miles de pacientes que dependen de los servicios ambulatorios.

### Motivos de la protesta

Los gremios de salud exigen el pago puntual de salarios adeudados y la provisión de insumos médicos básicos. Según denunciaron, varios hospitales cruceños carecen de medicamentos esenciales, material de curación y equipos de protección personal.

"Llevamos meses esperando que se regularicen los pagos y se garantice el abastecimiento. No podemos seguir atendiendo sin condiciones mínimas", declaró el dirigente de la Federación de Sindicatos de Ramas Médicas de Salud Pública (Fesirmes) de Santa Cruz.

### Servicios de emergencia garantizados

Las autoridades del Servicio Departamental de Salud (SEDES) Santa Cruz informaron que los servicios de emergencia, cuidados intensivos y quirófanos continúan operando con normalidad para garantizar la atención de casos críticos.

### Negociaciones en curso

El Ministerio de Salud convocó a una mesa de diálogo con los representantes de los trabajadores para resolver el conflicto. Se espera que las negociaciones avancen en las próximas horas para restablecer la atención normal.

Con información de: El Diario.`,
    contentEn: `Health workers in Santa Cruz began a 72-hour strike suspending outpatient care in public hospitals. They demand timely salary payments and basic medical supplies. Emergency services remain operational. The Ministry of Health has called for dialogue to resolve the conflict.`,
    date: '2026-07-22',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=630&fit=crop',
    imageCaption: 'Hospital público en Santa Cruz. Foto: El Diario',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'El Diario',
    sourceUrl: 'https://www.eldiario.net/portal/2026/07/22/paro-de-72-horas-suspende-consultas-externas-en-hospitales-crucenos-2/'
  },
  {
    id: '61',
    contentType: 'analysis',
    slug: 'plan-nacional-cancer-fondo-financiamiento-sostenible',
    titleEs: 'Plan nacional propone crear un fondo para fortalecer la lucha contra el cáncer',
    titleEn: 'National plan proposes creating a fund to strengthen the fight against cancer',
    excerptEs: 'El Plan Nacional de Respuesta contra el Cáncer 2026-2030 busca asegurar un financiamiento sostenible para diversificar los recursos y garantizar tratamientos oportunos.',
    excerptEn: 'The National Cancer Response Plan 2026-2030 seeks to ensure sustainable financing to diversify resources and guarantee timely treatments.',
    contentEs: `### Una deuda histórica

El Ministerio de Salud y Deportes presentó la propuesta del Plan Nacional de Respuesta contra el Cáncer 2026-2030, que incluye la creación de un fondo específico para diversificar el financiamiento y fortalecer la lucha contra esta enfermedad.

### Cifras alarmantes

En Bolivia se diagnostican cada año entre 1.500 y 1.700 nuevos casos de cáncer de mama, mientras que alrededor de 400 mujeres fallecen anualmente por esta enfermedad, considerada la segunda causa de muerte femenina en el país. A nivel general, el cáncer representa una de las principales causas de mortalidad.

### El fondo propuesto

La iniciativa contempla la creación de un fondo solidario con aportes del Tesoro General de la Nación, las gobernaciones y la cooperación internacional. Los recursos estarían destinados a:

- Garantizar la disponibilidad de medicamentos oncológicos en hospitales públicos
- Ampliar la cobertura de mamografías y tamizajes preventivos
- Capacitar al personal médico en diagnóstico temprano
- Implementar unidades de cuidados paliativos en los nueve departamentos

### Prevención como eje central

Los especialistas destacaron que el tabaco, el alcohol y la contaminación ambiental son factores predisponentes para diversos tipos de cáncer. El plan propone campañas masivas de prevención y detección precoz, especialmente en poblaciones vulnerables.

Con información de: ANF.`,
    contentEn: `Bolivia's Ministry of Health presented the National Cancer Response Plan 2026-2030, which includes creating a specific fund to diversify financing. Bolivia diagnoses 1,500-1,700 new breast cancer cases annually. The plan focuses on prevention, early detection, and guaranteed access to oncology medications.`,
    date: '2026-07-22',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&h=630&fit=crop',
    imageCaption: 'Unidad oncológica en servicio público. Foto: HC',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ANF',
    sourceUrl: 'https://www.noticiasfides.com/salud'
  },
  {
    id: '62',
    contentType: 'news',
    slug: 'automedicacion-resistencia-antibioticos-bolivia',
    titleEs: 'Especialistas advierten que la automedicación acelera la resistencia a los antibióticos en Bolivia',
    titleEn: 'Specialists warn that self-medication accelerates antibiotic resistance in Bolivia',
    excerptEs: 'Muchos bolivianos prefieren seguir recomendaciones de familiares antes que acudir al médico, agravando el problema de la resistencia bacteriana en el país.',
    excerptEn: 'Many Bolivians prefer following family recommendations rather than seeing a doctor, worsening the bacterial resistance problem in the country.',
    contentEs: `### Un problema creciente

Especialistas en salud advirtieron que la automedicación está acelerando peligrosamente la resistencia a los antibióticos en Bolivia, un fenómeno que la OMS considera una de las mayores amenazas para la salud global.

### Factores culturales y económicos

Según explicaron los expertos, muchas personas prefieren seguir las recomendaciones de familiares, amigos o vecinos antes que acudir a una consulta médica, en ocasiones por razones económicas o de accesibilidad a los servicios de salud.

"La gente compra antibióticos sin receta en farmacias, los usa en dosis incorrectas o los suspende antes de tiempo. Esto selecciona bacterias resistentes que luego son mucho más difíciles de tratar", señaló un infectólogo del Hospital de Clínicas de La Paz.

### Datos preocupantes

Un estudio reciente del Ministerio de Salud indica que más del 60% de los antibióticos en Bolivia se consumen sin prescripción médica. Las tasas de resistencia a antibióticos de primera línea han aumentado hasta un 40% en infecciones urinarias y respiratorias comunes.

### Llamado a la acción

Las autoridades sanitarias instaron a la población a no automedicarse y a completar los tratamientos prescritos. También anunciaron controles más estrictos a las farmacias que expenden medicamentos sin receta.

Con información de: ANF.`,
    contentEn: `Health specialists warn that self-medication is dangerously accelerating antibiotic resistance in Bolivia. Over 60% of antibiotics in Bolivia are consumed without medical prescription. Resistance rates to first-line antibiotics have increased up to 40% in common infections.`,
    date: '2026-07-21',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=630&fit=crop',
    imageCaption: 'Medicamentos. Foto ilustrativa: OMS',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ANF',
    sourceUrl: 'https://www.noticiasfides.com/salud'
  },
  {
    id: '63',
    contentType: 'analysis',
    slug: 'salud-masculina-relegada-bolivia-prevencion',
    titleEs: 'Salud masculina sigue relegada en Bolivia por falta de prevención y programas específicos',
    titleEn: "Men's health remains neglected in Bolivia due to lack of prevention and specific programs",
    excerptEs: 'Especialistas advierten que los hombres bolivianos enfrentan barreras culturales y estructurales para acceder a servicios de salud mental y física.',
    excerptEn: 'Specialists warn that Bolivian men face cultural and structural barriers to accessing mental and physical health services.',
    contentEs: `### Una deuda pendiente

La salud masculina sigue siendo un área relegada en el sistema de salud boliviano, según advirtieron especialistas reunidos en un foro sobre equidad en salud organizado por el Ministerio de Salud y la OPS.

### Barreras culturales

Los expertos señalaron que los hombres bolivianos acuden al médico con menor frecuencia que las mujeres, por factores culturales asociados a la masculinidad tradicional que desalienta la búsqueda de ayuda.

"Los hombres llegan al consultorio cuando la enfermedad ya está avanzada. Hay una resistencia cultural a la prevención y al autocuidado", explicó un urólogo del Hospital de Clínicas.

### Salud mental, la asignatura más crítica

Según el especialista, las consultas más frecuentes en hombres están relacionadas con depresión, ansiedad, conflictos de pareja, consumo problemático de alcohol y otras sustancias, además de ideación suicida.

El Plan Plurinacional de Salud Mental 2026-2030 reconoce esta brecha pero, según los críticos, carece de programas específicos con enfoque de género masculino.

### Enfermedades prevalentes

Las principales causas de morbilidad en hombres bolivianos incluyen:

- Enfermedades cardiovasculares (primera causa de muerte)
- Cáncer de próstata (más de 1.000 nuevos casos al año)
- Diabetes tipo 2
- Enfermedades hepáticas por consumo de alcohol

### Propuestas

Los especialistas propusieron crear campañas de prevención dirigidas a varones, horarios de atención extendidos y consultorios amigables que reduzcan las barreras de acceso.

Con información de: ANF.`,
    contentEn: "Men's health remains a neglected area in Bolivia's health system. Men visit doctors less frequently due to cultural barriers associated with traditional masculinity. The main causes include cardiovascular diseases, prostate cancer, diabetes, and liver diseases. Specialists propose creating prevention campaigns targeted at men.",
    date: '2026-07-21',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=1200&h=630&fit=crop',
    imageCaption: 'Ilustración: GQ',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ANF',
    sourceUrl: 'https://www.noticiasfides.com/salud'
  },
  {
    id: '64',
    contentType: 'news',
    slug: 'atencion-materno-neonatal-equipamiento-santa-cruz',
    titleEs: 'Ministerio de Salud fortalece atención materno-neonatal con equipamiento en tres municipios cruceños',
    titleEn: 'Ministry of Health strengthens maternal-neonatal care with equipment in three Santa Cruz municipalities',
    excerptEs: 'El Ministerio de Salud entregó equipamiento médico especializado para reducir la mortalidad materna y perinatal en Santa Cruz, con una inversión de Bs 750.000.',
    excerptEn: 'The Ministry of Health delivered specialized medical equipment to reduce maternal and perinatal mortality in Santa Cruz, with an investment of Bs 750,000.',
    contentEs: `### Inversión en vida

El Ministerio de Salud y Deportes concretó una importante entrega de equipamiento médico especializado para Cuidados Obstétricos Neonatales Esenciales (CONE) en tres municipios del departamento de Santa Cruz.

### Municipios beneficiados

Los centros de salud de los municipios de Montero, Yapacaní y Warnes recibieron equipos de última generación que permitirán:

- Monitoreo fetal continuo durante el trabajo de parto
- Atención inmediata del recién nacido con equipos de reanimación neonatal
- Diagnóstico temprano de complicaciones obstétricas
- Reducción del riesgo de hemorragias postparto

### Inversión y financiamiento

La iniciativa, impulsada bajo la cobertura del Programa BID 4612, representó una inversión global de Bs 750.000. Los fondos provienen de un convenio entre el Gobierno boliviano y el Banco Interamericano de Desarrollo.

### Meta: reducir la mortalidad materna

Bolivia mantiene una de las tasas más altas de mortalidad materna en América del Sur, con aproximadamente 155 muertes por cada 100.000 nacidos vivos. El plan nacional busca reducir esta cifra a 100 para 2030.

"Este equipamiento significa que más madres y bebés tendrán la oportunidad de recibir atención oportuna y de calidad", declaró la ministra de Salud, Marcela Flores Zambrana.

Con información de: Ministerio de Salud y Deportes.`,
    contentEn: `Bolivia's Ministry of Health delivered specialized medical equipment for Essential Obstetric and Neonatal Care in three Santa Cruz municipalities: Montero, Yapacaní, and Warnes. The Bs 750,000 investment, funded through the BID 4612 Program, aims to reduce maternal and perinatal mortality.`,
    date: '2026-07-21',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=630&fit=crop',
    imageCaption: 'Equipamiento médico. Foto: Ministerio de Salud',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Ministerio de Salud y Deportes',
    sourceUrl: 'https://www.minsalud.gob.bo/'
  },
  {
    id: '65',
    contentType: 'news',
    slug: 'recomendaciones-salud-incendios-forestales',
    titleEs: 'Ministerio de Salud emite recomendaciones ante incendios forestales y despliega brigadas',
    titleEn: 'Ministry of Health issues recommendations for forest fires and deploys brigades',
    excerptEs: 'Ante los incendios forestales activos en Tarija y otros departamentos, el Ministerio de Salud desplegó brigadas de atención y emitió recomendaciones para la población.',
    excerptEn: 'Facing active forest fires in Tarija and other departments, the Ministry of Health deployed medical brigades and issued recommendations for the population.',
    contentEs: `### Emergencia ambiental

Ante la contingencia generada por los incendios forestales activos en Tarija y otros departamentos del país, el Ministerio de Salud y Deportes emitió recomendaciones esenciales orientadas a resguardar la salud de las familias expuestas.

### Despliegue de brigadas

El Ministerio informó que el despliegue de brigadas de salud se mantiene activo para garantizar asistencia médica oportuna a los comunarios afectados por el humo y las altas temperaturas.

### Recomendaciones para la población

Las autoridades sanitarias recomendaron:

- Usar mascarillas KN95 o N95 en zonas afectadas por el humo
- Evitar actividades al aire libre durante los picos de contaminación
- Mantener puertas y ventanas cerradas en horas de mayor concentración de humo
- Hidratarse constantemente para evitar golpes de calor
- Acudir al centro de salud más cercano ante síntomas respiratorios agudos

### Grupos vulnerables

Los niños menores de 5 años, adultos mayores y personas con enfermedades respiratorias crónicas (asma, EPOC) deben extremar las precauciones. El Ministerio habilitó una línea gratuita de atención para emergencias por intoxicación por humo.

### Situación actual

Según reportes oficiales, Bolivia registra 1.705 focos de calor, con Santa Cruz concentrando la mayor cantidad de incendios y quemas activas. Las brigadas de salud continuarán desplegadas mientras persista la emergencia.

Con información de: Ministerio de Salud y Deportes.`,
    contentEn: `Due to active forest fires in Tarija and other Bolivian departments, the Ministry of Health deployed medical brigades and issued recommendations. Key advice includes using KN95 masks, avoiding outdoor activities, staying hydrated, and seeking medical attention for acute respiratory symptoms.`,
    date: '2026-07-21',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1585583483627-1b0dd3aec8de?w=1200&h=630&fit=crop',
    imageCaption: 'Incendio forestal. Foto: Ministerio de Salud',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Ministerio de Salud y Deportes',
    sourceUrl: 'https://www.minsalud.gob.bo/'
  },
  {
    id: '66',
    contentType: 'analysis',
    slug: 'cancer-jovenes-habitos-vida-contaminacion',
    titleEs: 'Especialistas atribuyen el aumento del cáncer en jóvenes a hábitos de vida y contaminación',
    titleEn: 'Specialists attribute rising cancer rates in young people to lifestyle habits and pollution',
    excerptEs: 'Los casos de cáncer en menores de 40 años han aumentado significativamente en Bolivia, según alertan especialistas del Instituto Oncológico Nacional.',
    excerptEn: 'Cancer cases in people under 40 have increased significantly in Bolivia, according to specialists at the National Oncology Institute.',
    contentEs: `### Una tendencia global

Especialistas del Instituto Oncológico Nacional y de la Unidad Oncológica del Hospital de Clínicas advirtieron sobre el aumento preocupante de casos de cáncer en personas menores de 40 años en Bolivia, una tendencia que se observa también a nivel mundial.

### Factores identificados

Los médicos señalaron que la influencia del tabaco y el alcohol continúan siendo factores predisponentes para diversos tipos de cáncer, incluidos los de pulmón, vejiga, cabeza y cuello. A esto se suma la contaminación ambiental como un factor emergente.

"Nunca antes habíamos visto tantos pacientes jóvenes con cáncer colorrectal, pancreático y de pulmón. El estilo de vida moderno y la exposición a contaminantes están pasando factura", explicó una oncóloga del Instituto Oncológico Nacional.

### Cambio climático y salud

Los especialistas también alertaron que el incremento sostenido de las temperaturas favorece cuadros de hipertermia o golpe de calor, una condición que puede resultar fatal, particularmente en personas de edad avanzada.

### Prevención

Los oncólogos recomendaron:

- Realizar chequeos médicos anuales a partir de los 25 años
- Evitar el consumo de tabaco y alcohol
- Mantener una dieta rica en frutas y verduras
- Hacer ejercicio físico regular
- Reducir la exposición a contaminantes ambientales

El Ministerio de Salud incluyó estas medidas entre las prioridades de su Plan Nacional para la Prevención y Control de las Enfermedades No Transmisibles 2026-2030.

Con información de: ANF.`,
    contentEn: `Cancer cases in people under 40 have increased significantly in Bolivia. Specialists attribute this to tobacco, alcohol, environmental pollution, and lifestyle factors. They recommend annual check-ups from age 25, avoiding tobacco and alcohol, healthy diet, regular exercise, and reducing exposure to environmental pollutants.`,
    date: '2026-07-20',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&h=630&fit=crop',
    imageCaption: 'Unidad oncológica. Foto: HC',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'ANF',
    sourceUrl: 'https://www.noticiasfides.com/salud'
  },
  {
    id: '67',
    contentType: 'news',
    slug: 'ministerio-salud-fortalece-sistema-cochabamba',
    titleEs: 'Ministra de Salud verifica atención sanitaria y consolida alianzas en Cochabamba',
    titleEn: 'Health Minister verifies healthcare and consolidates alliances in Cochabamba',
    excerptEs: 'La ministra Marcela Flores cumple agenda en Cochabamba para verificar la calidad de atención y fortalecer el sistema sanitario en el marco del plan nacional de salud.',
    excerptEn: 'Minister Marcela Flores holds an agenda in Cochabamba to verify care quality and strengthen the health system within the national health plan framework.',
    contentEs: `### Agenda de trabajo

La ministra de Salud y Deportes, Marcela Flores Zambrana, cumplió una intensa agenda de trabajo en el departamento de Cochabamba, con el propósito de verificar la calidad de atención en establecimientos y consolidar alianzas con todo el sector salud.

### Reuniones clave

Durante su visita, la ministra se reunió con:

- El Servicio Departamental de Salud (SEDES) Cochabamba
- Alcaldes de municipios de la región metropolitana
- La Brigada Parlamentaria del departamento
- Representantes del Colegio Médico y gremios de salud

"Hemos convocado a esta reunión junto al SEDES, los alcaldes y la Brigada Parlamentaria para que den testimonio de transparencia de todo lo que hacemos como Ministerio de Salud", declaró la autoridad.

### Plan de fortalecimiento

La visita forma parte del plan de fortalecimiento y evaluación del sistema sanitario nacional. Entre los temas abordados destacan:

- La implementación del Plan Nacional de Salud 2026-2030 en el departamento
- La creación de 2.300 nuevos ítems a nivel nacional para personal de salud
- El avance de la Historia Clínica Electrónica Única
- La provisión de medicamentos e insumos a hospitales públicos

### Compromisos

La ministra se comprometió a agilizar el desembolso de recursos para los municipios cochabambinos y a dar seguimiento a los compromisos asumidos en reuniones anteriores con el sector salud.

Con información de: Ministerio de Salud y Deportes.`,
    contentEn: `Bolivia's Health Minister Marcela Flores completed a working agenda in Cochabamba, meeting with SEDES, mayors, the parliamentary brigade, and health unions. Key topics included the 2026-2030 National Health Plan implementation, creation of 2,300 new health positions, and the Electronic Medical Record system.`,
    date: '2026-07-21',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1576765608866-5b51046452be?w=1200&h=630&fit=crop',
    imageCaption: 'Ministerio de Salud. Foto: MSD',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Ministerio de Salud y Deportes',
    sourceUrl: 'https://www.minsalud.gob.bo/'
  },
  {
    id: '68',
    contentType: 'news',
    slug: 'plan-nacional-enfermedades-no-transmisibles-atencion-primaria',
    titleEs: 'Plan Nacional prioriza la atención primaria para enfrentar diabetes, cáncer y enfermedades cardiovasculares',
    titleEn: 'National Plan prioritizes primary care to tackle diabetes, cancer and cardiovascular diseases',
    excerptEs: 'Las enfermedades no transmisibles representan el 73% de las muertes en Bolivia. El nuevo Plan de Salud 2026-2030 pone énfasis en la prevención y el primer nivel de atención.',
    excerptEn: 'Non-communicable diseases represent 73% of deaths in Bolivia. The new Health Plan 2026-2030 emphasizes prevention and primary care level.',
    contentEs: `### Emergencia silenciosa

Las enfermedades no transmisibles (ENT) representan una de las principales causas de muerte y discapacidad en Bolivia, responsables del 73% de las muertes en el territorio nacional, según datos del Ministerio de Salud.

### Las más letales

La diabetes, la hipertensión arterial, el cáncer y las enfermedades cardiovasculares encabezan la lista de ENT que más vidas cobran en el país. Su incidencia ha aumentado en los últimos años debido al envejecimiento poblacional y los cambios en los estilos de vida.

### Estrategia de atención primaria

El Plan Nacional de Salud 2026-2030 prioriza el fortalecimiento del primer nivel de atención para enfrentar estas enfermedades. La estrategia incluye:

- Capacitación de médicos de cabecera en diagnóstico temprano de ENT
- Equipamiento de centros de salud con tecnología básica de detección
- Programas de promoción de estilos de vida saludables en comunidades
- Sistema de referencia y contrarreferencia eficiente entre niveles

### Déficit de especialistas

El Ministerio identificó brechas críticas: Bolivia cuenta con solo 14 médicos por cada 10.000 habitantes, lejos de los 25 recomendados por la OMS. Los hospitales de segundo nivel tienen apenas un 46% de ocupación por falta de resolutividad.

### Gasto de bolsillo

Otro problema señalado es que el "gasto de bolsillo" de los ciudadanos en salud alcanza hasta un 30%, una cifra que el Gobierno busca reducir drásticamente con la implementación del Seguro Universal de Salud.

Con información de: Ministerio de Salud y Deportes.`,
    contentEn: `Non-communicable diseases cause 73% of deaths in Bolivia. The 2026-2030 National Health Plan prioritizes primary care to tackle diabetes, hypertension, cancer and cardiovascular diseases. Bolivia has only 14 doctors per 10,000 inhabitants, far from the WHO-recommended 25.`,
    date: '2026-07-14',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=630&fit=crop',
    imageCaption: 'Atención primaria. Foto: Ministerio de Salud',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Ministerio de Salud y Deportes',
    sourceUrl: 'https://www.minsalud.gob.bo/'
  },
  {
    id: '69',
    contentType: 'news',
    slug: 'linea-roja-hijo-linfangitis-peligro',
    titleEs: 'Si ves esta línea roja en tu hijo, llévalo al médico el mismo día',
    titleEn: 'If you see this red line on your child, take them to the doctor the same day',
    excerptEs: 'Una línea roja que avanza desde una herida hacia el tronco del cuerpo puede ser linfangitis, una infección que requiere antibiótico urgente. Cada hora cuenta.',
    excerptEn: 'A red line advancing from a wound toward the torso may be lymphangitis, an infection requiring urgent antibiotics. Every hour counts.',
    contentEs: `### ¿Qué es la linfangitis y por qué es una emergencia?

Una línea roja, delgada y caliente que aparece en la piel de un niño y avanza desde una herida hacia el tronco del cuerpo no es un rasguño ni una irritación cualquiera. Se llama linfangitis y es la inflamación de los vasos linfáticos causada por una bacteria que ingresó por una herida: un piquete de insecto, un raspón, una cortada o incluso una ampolla infectada.

Según especialistas en pediatría consultados por Badabun, esta condición requiere tratamiento antibiótico lo antes posible porque la bacteria está viajando por el sistema linfático hacia los ganglios más cercanos. Si la infección no se frena a tiempo, puede pasar al torrente sanguíneo y provocar una septicemia potencialmente mortal.

### Cómo reconocerla

Los padres deben estar atentos a estas señales:

- Una línea roja que sube desde la herida hacia la axila (si está en el brazo) o hacia la ingle (si está en la pierna)
- La línea crece o avanza en cuestión de horas
- Fiebre o escalofríos
- Ganglios inflamados y dolorosos
- Dolor, calor o hinchazón en la zona de la herida
- El niño se ve decaído o irritable

### Qué hacer y qué evitar

Los médicos recomiendan no esperar "a ver si se quita solo" ni aplicar solo remedios caseros o pomadas. Un truco útil: marcar con una pluma hasta dónde llega la línea roja y anotar la hora antes de ir al médico, para que el doctor pueda evaluar qué tan rápido está avanzando.

**Lo que NO debe hacerse:**
- Esperar al día siguiente sin consultar
- Aplicar únicamente remedios caseros
- Ignorar la fiebre o el decaimiento del niño

La buena noticia es que, tratada a tiempo, la linfangitis responde rápida y bien a los antibióticos. La regla es simple: línea roja que avanza desde una herida hacia el cuerpo = consulta médica el mismo día.

Con información de: Badabun.`,
    contentEn: `A red line advancing from a wound toward the body's core may be lymphangitis, a bacterial infection requiring urgent antibiotics. If the infection reaches the bloodstream it can cause sepsis. Doctors recommend marking the line with a pen before going to the hospital so doctors can track how fast it's spreading.`,
    date: '2026-07-23',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: '/images/blog/badabun-69.jpg',
    imageCaption: 'Ilustración médica. Fuente: Badabun',
    categoryEs: 'Salud',
    categoryEn: 'Health',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/cultura/si-ves-esta-linea-roja-en-tu-hijo-ve-al-medico-el-mismo-dia/'
  },
  {
    id: '70',
    contentType: 'news',
    slug: 'curso-verano-seguridad-ninos-padres',
    titleEs: 'Tragedia en curso de verano: las 7 reglas que todo padre debe conocer antes de inscribir a sus hijos',
    titleEn: 'Summer camp tragedy: 7 rules every parent must know before enrolling their children',
    excerptEs: 'Una niña falleció durante un curso de verano en México. Expertos en seguridad infantil comparten 7 puntos clave que los padres deben verificar antes de inscribir a sus hijos.',
    excerptEn: 'A girl died during a summer course in Mexico. Child safety experts share 7 key points parents must check before enrolling their children.',
    contentEs: `### Una tragedia que pudo evitarse

Esta semana México está de luto por el fallecimiento de una niña durante un curso de verano. El caso ha puesto en alerta a miles de padres que cada año buscan opciones de esparcimiento para sus hijos durante las vacaciones.

Según reportó Badabun, la menor falleció en circunstancias que aún investigan las autoridades, pero el caso ha despertado un debate sobre los protocolos de seguridad en los cursos recreativos.

### Las 7 reglas de oro para elegir un curso seguro

Expertos en seguridad infantil consultados por el medio viral recomiendan seguir estos pasos antes de inscribir a un menor:

**1. Verificar la trayectoria del curso.** Preguntar cuántos años lleva operando, quién lo organiza y si cuenta con permisos o registro oficial. Un curso serio responde sin problema; uno improvisado evade las preguntas.

**2. Exigir comunicación directa con el menor.** Si el reglamento prohíbe llamadas o solo el personal da "reportes", es una señal de alerta. Los padres tienen derecho a hablar con sus hijos cuando lo necesiten.

**3. Chequeo médico previo.** Antes de un curso con actividad física intensa, asegurarse de que el menor esté saludable. Informar por escrito sobre alergias, condiciones preexistentes y medicamentos.

**4. Protocolo de emergencias.** Preguntar si hay personal capacitado en primeros auxilios, a qué hospital llevarían al menor y si avisan de inmediato ante cualquier incidente.

**5. Métodos de disciplina.** Si mencionan castigos físicos, ejercicios forzados o métodos de "mano dura", buscar otra opción.

**6. Visita sorpresa.** Llegar sin avisar durante el curso para verificar las condiciones reales. Si no dejan entrar, algo esconden.

**7. Creer al menor.** Si el niño dice que algo no le gusta, que le da miedo o se nota diferente en llamadas, no minimizarlo. Los niños casi siempre avisan.

Con información de: Badabun.`,
    contentEn: `A girl died during a summer course in Mexico, sparking debate about safety protocols. Child safety experts recommend 7 key rules: verify the organizer's track record, demand direct communication with the child, get a medical check-up, ask about emergency protocols, check discipline methods, make surprise visits, and always believe the child if they say something is wrong.`,
    date: '2026-07-23',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: '/images/blog/badabun-70.jpg',
    imageCaption: 'Niños en actividades recreativas. Foto: Badabun',
    categoryEs: 'Cultura',
    categoryEn: 'Culture',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/salud/es-urgente-que-todas-las-mamas-sepan-esto/'
  },
  {
    id: '71',
    contentType: 'culture',
    slug: 'pecado-tomar-alcohol-biblia-respuesta',
    titleEs: '¿Es pecado tomar alcohol? Esto es lo que realmente dice la Biblia',
    titleEn: 'Is drinking alcohol a sin? This is what the Bible actually says',
    excerptEs: 'Un análisis de los pasajes bíblicos sobre el alcohol revela que la Escritura no condena la copa, sino el exceso. La diferencia es clave.',
    excerptEn: 'An analysis of biblical passages about alcohol reveals that Scripture does not condemn the drink, but excess. The difference is key.',
    contentEs: `### La pregunta que divide a los creyentes

La relación entre el cristianismo y el alcohol es un tema que ha generado debate durante siglos. Para responder a esta pregunta, diversos teólogos y estudiosos de la Biblia han analizado los pasajes clave de las Escrituras.

Según un artículo publicado por Badabun, la respuesta puede sorprender a más de uno: la Biblia no condena tomar una copa. El mismo Jesús convirtió el agua en vino en las bodas de Caná (Juan 2:1-11), y el apóstol Pablo le recomendó a Timoteo que tomara "un poco de vino para su estómago y sus frecuentes enfermedades" (1 Timoteo 5:23).

### Lo que realmente condena la Escritura

Lo que la Biblia sí condena es la embriaguez. Efesios 5:18 dice claramente: "No se emborrachen con vino, que lleva al desenfreno; al contrario, sean llenos del Espíritu".

El problema, según los expertos, no es la copa en sí misma, sino la pérdida del dominio propio que produce el exceso de alcohol. "Cuando te emborrachas, pierdes el control de tus decisiones", señala el análisis.

### El costo social del alcoholismo

Detrás de la pregunta teológica hay una realidad social ineludible: familias destruidas, accidentes de tránsito, violencia doméstica y palabras que nunca debieron decirse comienzan muchas veces con "solo una más".

Los especialistas consultados coinciden en que el enfoque debe estar en la responsabilidad personal y el cuidado del prójimo, más que en la prohibición del consumo moderado.

Con información de: Badabun.`,
    contentEn: `The Bible does not condemn drinking alcohol, but rather drunkenness. Jesus turned water into wine, and Paul recommended wine to Timothy. Ephesians 5:18 warns against drunkenness, not moderate consumption. The key is self-control and responsibility rather than prohibition.`,
    date: '2026-07-23',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: '/images/blog/badabun-71.jpg',
    imageCaption: 'Copa de vino y Biblia. Foto ilustrativa.',
    categoryEs: 'Cultura',
    categoryEn: 'Culture',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/cultura/es-pecado-tomar-alcohol-esto-dice-la-biblia/'
  },
  {
    id: '72',
    contentType: 'news',
    slug: 'charro-gonzalez-mundial-embajador-mexico',
    titleEs: 'El mexicano que conquistó el Mundial vestido de charro sin patear un balón',
    titleEn: 'The Mexican who conquered the World Cup dressed as a charro without kicking a ball',
    excerptEs: 'Llegó al Mundial 2026 vestido de charro con su guitarra y se convirtió en el embajador más querido de México, acaparando reflectores junto a las grandes estrellas del fútbol.',
    excerptEn: 'He arrived at the 2026 World Cup dressed as a charro with his guitar and became Mexico\'s most beloved ambassador, sharing the spotlight with soccer\'s biggest stars.',
    contentEs: `### El fenómeno viral del Mundial 2026

Mientras millones de ojos estaban puestos en Mbappé, Messi y Lamine Yamal, un mexicano vestido de charro con una guitarra en mano se robó el corazón de los aficionados en el Mundial 2026.

Conocido como "Charro González", este mexicano llegó a la sede mundialista sin más equipaje que su traje típico, su música y su orgullo nacional. Lo que ocurrió después nadie lo imaginó: turistas de todas las nacionalidades hacían fila para tomarse fotos con él, bailaban y cantaban canciones mexicanas.

### Embajador sin título oficial

Según reportó Badabun, el Charro González logró lo que pocos diplomáticos consiguen: hacer que personas de todo el mundo se llevaran un pedazo de México en el corazón. Sin polémicas, sin escándalos y sin buscar fama, su carisma natural trascendió las barreras del idioma y la cultura.

Las imágenes virales lo muestran rodeado de aficionados de distintas selecciones, todos sonriendo y coreando canciones populares mexicanas.

### El poder de la cultura popular

El caso del Charro González demuestra que el mejor embajador de un país no siempre es quien levanta un trofeo, sino quien hace que millones de personas se enamoren de su gente, sus tradiciones y su cultura. En un mundo cada vez más polarizado, la música y la alegría de un charro mexicano lograron lo que pocos discursos políticos consiguen: unidad.

Con información de: Badabun.`,
    contentEn: `Known as "Charro González," a Mexican man dressed in traditional charro attire became the unexpected star of the 2026 World Cup. Tourists from all nations lined up for photos with him, dancing and singing Mexican songs. His story shows how culture and joy can unite people across borders.`,
    date: '2026-07-23',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: '/images/blog/badabun-72.jpg',
    imageCaption: 'Ambientación del Mundial. Foto: Badabun',
    categoryEs: 'Entretenimiento',
    categoryEn: 'Entertainment',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/entretenimiento/el-mexicano-que-hizo-que-el-mundo-entero-se-enamorara-de-nuestra-cultura/'
  },
  {
    id: '73',
    contentType: 'news',
    slug: 'afganistan-mujeres-golpes-legal-taliban',
    titleEs: 'Afganistán: golpear a mujeres ahora es legal siempre que "no se rompan huesos"',
    titleEn: 'Afghanistan: beating women is now legal as long as "bones are not broken"',
    excerptEs: 'El régimen talibán aprobó un código penal que permite a los maridos castigar físicamente a sus esposas. Organizaciones de derechos humanos lo califican como un retroceso histórico.',
    excerptEn: 'The Taliban regime approved a penal code allowing husbands to physically punish their wives. Human rights organizations call it a historic setback.',
    contentEs: `### Un retroceso histórico para los derechos humanos

El régimen talibán en Afganistán firmó un nuevo código penal que legaliza el castigo físico de las mujeres por parte de sus maridos, siempre que no haya "fracturas o heridas abiertas", según reportó Badabun.

La norma ha sido calificada por organizaciones internacionales de derechos humanos como uno de los retrocesos más graves en materia de género del siglo XXI.

### Las cifras que indignan

Para dimensionar la crueldad de la medida, basta comparar las penas: organizar una pelea de gallos se castiga con cinco meses de prisión, mientras que golpear a la esposa tiene una pena máxima de 15 días de cárcel si un juez determina que el hombre "se excedió".

Aún más grave es el procedimiento para denunciar: una mujer debe mostrar sus heridas ante un juez hombre, completamente velada, y acompañada de un tutor varón que en la mayoría de los casos es el mismo esposo que la golpeó. Si intenta escapar a casa de sus padres sin permiso del marido, la que va a prisión es ella.

### No siempre fue así

En las décadas de 1960 y 1970, las mujeres afganas estudiaban en la universidad, trabajaban como doctoras, abogadas y caminaban libres por las calles de Kabul. Hoy han perdido casi todos sus derechos.

Alemania, Canadá, Australia y los Países Bajos ya presentaron demandas contra el régimen talibán ante la Corte Internacional de Justicia. Los talibanes prohibieron incluso hablar de esta ley, lo que hace que difundirla sea un acto de resistencia.

Con información de: Badabun.`,
    contentEn: `The Taliban regime in Afghanistan approved a new penal code legalizing physical punishment of women by their husbands as long as there are no fractures or open wounds. Organizing a cockfight is punished with 5 months in prison, while beating a wife carries a maximum of 15 days. International pressure continues through lawsuits at the International Court of Justice.`,
    date: '2026-07-21',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: '/images/blog/badabun-73.jpg',
    imageCaption: 'Mujer afgana velada. Foto ilustrativa.',
    categoryEs: 'Internacional',
    categoryEn: 'International',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/internacional/golpear-a-mujeres-en-afganistan-ahora-es-legal-siempre-que-no-se-rompan/'
  },
  {
    id: '74',
    contentType: 'news',
    slug: 'cuatro-preguntas-hijo-manejar-seguridad',
    titleEs: 'Antes de que tu hijo maneje solo, hazle estas 4 preguntas que pueden salvarle la vida',
    titleEn: 'Before your child drives alone, ask them these 4 life-saving questions',
    excerptEs: 'Saber manejar no es suficiente. Cuatro preguntas clave que todo padre debe hacer a su hijo antes de darle las llaves del auto por primera vez.',
    excerptEn: 'Knowing how to drive is not enough. Four key questions every parent must ask their child before handing them the car keys for the first time.',
    contentEs: `### Más allá de saber manejar

Entregar las llaves del auto a un hijo es uno de los momentos más significativos para cualquier padre. Pero según expertos en seguridad vial consultados por Badabun, saber manejar no es suficiente: hay cuatro preguntas que pueden marcar la diferencia entre un incidente manejable y una tragedia.

### Las 4 preguntas clave

**Pregunta 1: ¿Qué haces si alguien te choca y te pide que no llames a nadie?**
Esta situación es más común de lo que parece. La respuesta debe ser clara: siempre llamar a las autoridades, siempre tomar fotos del accidente y nunca hacer excepciones, por muy amable que se vea la otra persona.

**Pregunta 2: ¿Qué dices si alguien te pregunta de quién fue la culpa?**
La respuesta correcta: nada. Ni "perdón" ni "es que no te vi". Los jóvenes son educados por naturaleza, pero esa educación puede ser usada en su contra en un parte de accidentes.

**Pregunta 3: ¿Sabes dónde están la tarjeta del seguro y la tarjeta de circulación ahora mismo?**
No basta con que diga "por ahí en la guantera". El padre debe pedirle que las saque, las abra y toque cada documento. Solo así se asegura de que el hijo sabe exactamente dónde están.

**Pregunta 4: ¿A quién le llamas primero y a quién segundo?**
Primero al 911 si alguien puede estar lastimado. Segundo, a los padres. Los amigos, el group chat y las redes sociales no deberían estar en esa lista.

Los especialistas recomiendan imprimir estas cuatro preguntas y dejarlas en la guantera del auto como recordatorio permanente.

Con información de: Badabun.`,
    contentEn: `Four essential questions every parent should ask their teen before handing over the car keys: What if the other driver asks you not to call anyone? What do you say about fault? Where are the insurance and registration cards right now? Who do you call first and second? Experts recommend printing these questions and keeping them in the glove compartment.`,
    date: '2026-07-23',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: '/images/blog/badabun-74.jpg',
    imageCaption: 'Joven conductor. Foto: Badabun',
    categoryEs: 'Cultura',
    categoryEn: 'Culture',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/cultura/antes-de-que-tu-hijo-maneje-solo-hazle-estas-4-preguntas/'
  },
  {
    id: '75',
    contentType: 'news',
    slug: 'nino-ciego-mundial-padre-manos',
    titleEs: 'Un niño ciego "vio" el Mundial a través de las manos de su padre',
    titleEn: 'A blind boy "saw" the World Cup through his father\'s hands',
    excerptEs: 'Alireza Babajani, de 9 años, nació ciego. Su padre le narró cada jugada del Mundial 2026 sobre la palma de sus manos con una maqueta táctil.',
    excerptEn: 'Alireza Babajani, 9, was born blind. His father narrated every World Cup 2026 play on the palm of his hands using a tactile model.',
    contentEs: `### El amor de un padre como ventana al mundo

Alireza Babajani tiene 9 años, nació con amaurosis congénita de Leber, una enfermedad genética que le impide ver desde su nacimiento. Jamás ha visto rodar un balón, pero cuando Argentina venció a Inglaterra en el Mundial 2026, él celebró cada gol como cualquier aficionado.

Su secreto, según reportó Badabun, fue una maqueta táctil de la cancha y las manos de su padre. Mientras la televisión transmitía el partido, su papá observaba cada acción y la reproducía sobre un tablero en miniatura, marcando las posiciones de los jugadores y el recorrido de la pelota sobre la palma de las manos de su hijo.

### La imagen que conmovió al mundo

El video del niño celebrando los goles argentinos mientras su padre movía las piezas sobre la maqueta se volvió viral en redes sociales, acumulando millones de reproducciones en pocas horas.

"Entre el tacto y el relato, Alireza imagina el juego y lo vive con la misma pasión que cualquier hincha", describió el medio.

### Una lección de inclusión

La historia de Alireza y su padre ha sido destacada por organizaciones de inclusión como un ejemplo de cómo la creatividad y el amor pueden derribar cualquier barrera. El fútbol, una vez más, demostró ser un lenguaje universal que trasciende incluso la falta de la vista.

Con información de: Badabun.`,
    contentEn: `Alireza Babajani, 9, was born blind with Leber congenital amaurosis. His father built a tactile soccer field model and narrated every World Cup play on the palm of his son's hands. The video of the boy celebrating Argentina's goals went viral, touching millions worldwide and becoming a symbol of inclusive love.`,
    date: '2026-07-21',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: '/images/blog/badabun-75.jpg',
    imageCaption: 'Padre e hijo en el estadio. Foto: Badabun',
    categoryEs: 'Internacional',
    categoryEn: 'International',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/internacional/un-nino-ciego-vio-el-mundial-a-traves-de-las-manos-de-su-padre/'
  },
  {
    id: '76',
    contentType: 'news',
    slug: 'colombia-protege-animales-petroleo-renuncia',
    titleEs: 'Colombia prefiere proteger la vida de millones de animales antes que ganar más dinero con petróleo',
    titleEn: 'Colombia chooses to protect millions of animals rather than make more money from oil',
    excerptEs: 'En lugar de expandir la explotación petrolera en una zona de biodiversidad única, Colombia decidió proteger los humedales y la vida silvestre que depende de ellos.',
    excerptEn: 'Instead of expanding oil extraction in a unique biodiversity area, Colombia chose to protect wetlands and the wildlife that depends on them.',
    contentEs: `### Una decisión que marca precedente

En un mundo donde el interés económico suele imponerse sobre la conservación ambiental, Colombia tomó una decisión que está dando la vuelta al mundo: en lugar de expandir la explotación petrolera en una región de biodiversidad única, el gobierno colombiano optó por proteger los humedales y la vida silvestre.

Según reportó Badabun, la medida beneficia a millones de aves migratorias, jaguares, delfines de río y tortugas que habitan estos ecosistemas.

### El turismo como alternativa rentable

El dato más revelador de esta historia es económico: los guías turísticos de la zona ahora generan más ingresos mostrando jaguares a turistas internacionales de lo que ganarían trabajando en pozos petroleros. El ecoturismo demostró ser financieramente más sostenible que la extracción de hidrocarburos.

### Reacciones internacionales

Organizaciones ambientales como WWF y Greenpeace celebraron la decisión como un modelo a seguir para otros países en desarrollo que enfrentan dilemas similares entre desarrollo económico y conservación.

"Colombia demuestra que es posible elegir un futuro verde sin sacrificar el bienestar económico", señalaron los activistas.

### El impacto en la región

La decisión colombiana podría influir en las políticas ambientales de otros países latinoamericanos que enfrentan presiones similares de la industria extractiva. El mensaje es claro: la biodiversidad no solo tiene valor ecológico, sino también económico cuando se gestiona de manera sostenible.

Con información de: Badabun.`,
    contentEn: `Colombia chose to protect wetlands and wildlife instead of expanding oil extraction in a unique biodiversity area. Ecotourism guides now earn more showing jaguars to tourists than they would working in oil wells. Environmental organizations celebrate the decision as a model for other developing countries facing similar dilemmas between economic development and conservation.`,
    date: '2026-07-22',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: '/images/blog/badabun-76.jpg',
    imageCaption: 'Humedal en Colombia. Foto: Badabun',
    categoryEs: 'Internacional',
    categoryEn: 'International',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/internacional/colombia-prefirio-proteger-la-vida-de-millones-de-animales-antes-que/'
  },
  {
    id: '77',
    contentType: 'news',
    slug: 'estudiantes-reparan-autos-madres-solteras',
    titleEs: 'Estudiantes reparan autos usados y los regalan a madres solteras: la historia que inspira a Latinoamérica',
    titleEn: 'Students repair used cars and give them to single mothers: the story inspiring Latin America',
    excerptEs: 'Un grupo de estudiantes de mecánica comenzó un proyecto: tomar autos donados, repararlos y regalarlos a madres que necesitan transporte para trabajar y llevar a sus hijos a la escuela.',
    excerptEn: 'A group of mechanics students started a project: take donated cars, repair them, and give them to mothers who need transportation to work and take their children to school.',
    contentEs: `### Una idea que empezó en un taller escolar

Un grupo de estudiantes de mecánica automotriz en Latinoamérica comenzó un proyecto que hoy inspira a toda la región: tomar autos donados, repararlos completamente y regalarlos a madres solteras que necesitan transporte para trabajar y llevar a sus hijos a la escuela.

Según reportó Badabun, el proyecto nació cuando los estudiantes identificaron que una de las principales barreras para las madres solteras en situación de vulnerabilidad era la falta de transporte confiable.

### Sin fines de lucro

Los jóvenes no piden nada a cambio. "Una madre soltera con un auto propio no solo llega al trabajo. También puede recoger a sus hijos del colegio, ir al supermercado y, si es necesario, escapar de una emergencia", explicó uno de los fundadores del proyecto.

### Crecimiento viral

El proyecto, que comenzó en un solo taller escolar, se ha replicado en 12 ciudades de la región. Las redes sociales jugaron un papel clave, permitiendo que más talleres se sumaran a la iniciativa y que donantes de autos usados contactaran a los organizadores.

### Impacto medible

Hasta la fecha, decenas de madres solteras han recibido autos completamente reparados, con cambio de aceite, llantas nuevas y revisión mecánica completa. Para muchas de ellas, el vehículo representa no solo un medio de transporte, sino una herramienta de independencia y dignidad.

Con información de: Badabun.`,
    contentEn: `A group of mechanics students in Latin America started repairing donated cars and giving them to single mothers who need transportation for work and school runs. The project has grown to 12 cities across the region, with dozens of mothers receiving fully repaired vehicles as tools of independence and dignity.`,
    date: '2026-07-22',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: '/images/blog/badabun-77.jpg',
    imageCaption: 'Estudiantes de mecánica. Foto: Badabun',
    categoryEs: 'Internacional',
    categoryEn: 'International',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/internacional/estudiantes-reparan-autos-usados-y-los-regalan-a-madres-solteras/'
  },
  {
    id: '78',
    contentType: 'culture',
    slug: 'mujer-arregla-sale-sin-pareja-explicacion',
    titleEs: '¿Por qué tu mujer se arregla guapísima cuando sale sin ti? La ciencia responde',
    titleEn: 'Why does your woman dress up when going out without you? Science answers',
    excerptEs: 'Muchos hombres interpretan que su pareja se arregla para otros cuando sale sola. La psicología evolutiva revela una explicación muy distinta.',
    excerptEn: 'Many men interpret their partner dressing up alone as seeking attention from others. Evolutionary psychology reveals a very different explanation.',
    contentEs: `### Un malentendido común

Es una escena que genera conflicto en muchas relaciones: ella se arregla, se maquilla y elige su mejor outfit para salir sin él. La mente masculina, entrenada para interpretar señales de competencia, suele saltar a la conclusión equivocada.

Según un análisis publicado por Badabun basado en estudios de psicología evolutiva, la explicación es muy distinta a lo que la mayoría de los hombres cree.

### Lo que dice la ciencia

Los hombres y las mujeres tienen motivaciones diferentes al arreglarse:

**Los hombres** se arreglan principalmente para proyectar estatus frente a otros hombres. Es una señal de competencia y jerarquía.

**Las mujeres**, en cambio, se arreglan principalmente por:

1. **Autoafirmación**: se arreglan para sentirse bien consigo mismas, no para los demás.
2. **Competencia social femenina**: la mayoría de las mujeres se arreglan teniendo más en cuenta la mirada de otras mujeres que la de los hombres.
3. **Rutina de autocuidado**: el proceso de arreglarse es una práctica de bienestar personal que no depende de si hay o no una pareja presente.

### El error de interpretación

Los especialistas señalan que el cerebro masculino comete un error biológico al proyectar sus propias motivaciones en la conducta femenina. "Los hombres piensan que ellas se arreglan como ellos: para llamar la atención del sexo opuesto. Pero el cableado de la mujer es diferente", explica el estudio.

La próxima vez que surja la duda, la respuesta más probable es que se arregla para ella misma.

Con información de: Badabun.`,
    contentEn: `Evolutionary psychology explains why women dress up when going out without their partners: it's about self-affirmation and female social competition, not seeking male attention. Men make the biological error of projecting their own motivations onto female behavior. Most women dress up primarily for themselves and other women.`,
    date: '2026-07-22',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: '/images/blog/badabun-78.jpg',
    imageCaption: 'Mujer arreglándose. Foto ilustrativa.',
    categoryEs: 'Cultura',
    categoryEn: 'Culture',
    enableComments: true,
    featured: false,
    views: 1,
    source: 'Badabun',
    sourceUrl: 'https://badabun.com/entretenimiento/por-que-tu-mujer-se-arregla-asi-cuando-sale-sin-ti/'
  },
{
    id: '79',
    contentType: 'analysis',
    slug: 'guia-cedula-identidad-segip-bolivia-2026',
    titleEs: 'Cómo sacar la Cédula de Identidad en Bolivia 2026 — Requisitos, costos y pasos en SEGIP',
    titleEn: 'How to get the Bolivian Identity Card in 2026 — Requirements, costs and steps at SEGIP',
    excerptEs: 'Guía completa y actualizada para obtener o renovar tu cédula de identidad boliviana en 2026. Requisitos, costos oficiales, paso a paso del trámite presencial, horarios, oficinas SEGIP y cómo activar la cédula digital desde tu celular.',
    excerptEn: 'Complete and updated guide to get or renew your Bolivian identity card in 2026. Official requirements, costs, step-by-step in-person process, SEGIP office locations, and how to activate your digital ID on your phone.',
    contentEs: `### Guía Completa: Cédula de Identidad Bolivia 2026

La **Cédula de Identidad** es el documento de identificación oficial más importante para los ciudadanos bolivianos. Emitida por el **Servicio General de Identificación Personal (SEGIP)**, este documento es obligatorio para realizar trámites bancarios, votar, viajar al interior y exterior del país, y cualquier gestión oficial.

En esta guía encontrarás todo lo que necesitas saber para obtener o renovar tu cédula en 2026: requisitos actualizados, costos vigentes, horarios, ubicaciones y la nueva cédula digital.

---

#### ¿Qué tipos de trámite existen?

SEGIP ofrece cinco modalidades para la Cédula de Identidad:

| Trámite | Descripción |
|---------|-------------|
| **Primera vez** | Para ciudadanos que nunca han tenido cédula (mayores de 18 años) |
| **Renovación** | Cuando la cédula actual está por vencer o ya venció |
| **Duplicado** | Por robo, extravío o deterioro del documento |
| **Cambio de datos** | Rectificación de nombre, apellido, fecha de nacimiento, etc. |
| **Cédula de Extranjero** | Para residentes extranjeros en Bolivia |

---

#### Requisitos por tipo de trámite

**Primera vez (mayores de 18 años):**
- Partida de nacimiento original y copia (emitida por el SEGIP o Registro Civil)
- Certificado de domicilio (original, con no más de 90 días de antigüedad)
- Dos fotografías 4x4 cm, fondo blanco, sin retoques
- Pago en el Banco Unión (Bs 17 para primera emisión)
- Presentarse con la vestimenta adecuada (sin lentes, sin gorra, sin accesorios que cubran el rostro)

**Renovación:**
- Cédula de Identidad anterior **original**
- Certificado de domicilio (original, con no más de 90 días de antigüedad)
- Dos fotografías 4x4 cm, fondo blanco
- Pago en el Banco Unión (Bs 17 para renovación)
- En caso de deterioro, presentar la cédula dañada

**Duplicado (por robo, extravío o deterioro):**
- Denuncia policial **original** (emitida en la FELCV o en cualquier unidad policial)
- Certificado de domicilio (original, con no más de 90 días de antigüedad)
- Dos fotografías 4x4 cm, fondo blanco
- Pago en el Banco Unión (Bs 17 para duplicado)
- Si tienes la cédula deteriorada, preséntala también

**Cambio de datos:**
- Cédula de Identidad original
- Documento legal que respalde el cambio (sentencia judicial, resolución administrativa, etc.)
- Certificado de domicilio
- Dos fotografías 4x4 cm
- Pago en el Banco Unión (el costo varía según el tipo de modificación)

---

#### Costos oficiales actualizados (2026)

| Trámite | Costo en Bs | Moneda |
|---------|-------------|--------|
| Primera emisión | 17 Bs | Bolivianos |
| Renovación | 17 Bs | Bolivianos |
| Duplicado | 17 Bs | Bolivianos |
| Cambio de datos | 17 Bs (monto base, consultar) | Bolivianos |
| Cédula de Extranjero | 100 Bs (aproximado, consultar) | Bolivianos |

**Importante:** Todos los pagos se realizan exclusivamente en el **Banco Unión**. No se recibe efectivo en las oficinas del SEGIP.

---

#### Paso a paso del trámite presencial

1. **Reúne tus documentos** — Asegúrate de tener todos los requisitos según tu tipo de trámite (fotos, certificado de domicilio, cédula anterior, etc.)

2. **Paga en el Banco Unión** — Acércate a cualquier sucursal del Banco Unión con tu número de cédula (o nombres completos para primera vez). Solicita el "pago por concepto de Cédula de Identidad" (código: 17010). El costo es de **Bs 17**.

3. **Acude directamente a la oficina SEGIP** — No existe un sistema de turnos en línea. La atención es por orden de llegada. Se recomienda llegar **antes de las 7:00 am** para evitar filas largas, especialmente en las oficinas centrales. Los primeros sábados de cada mes hay atención extraordinaria en todo el país.

4. **Realiza el trámite en la oficina SEGIP** — Preséntate con:
   - Original y copia de todos tus documentos
   - Boleta de pago del Banco Unión
   - Tu fotografía (aunque muchas oficinas ya toman la foto en el momento)

5. **Toma de datos biométricos** — Te tomarán:
   - Fotografía digital
   - Huellas dactilares (10 dedos)
   - Firma digital

6. **Espera la entrega** — El tiempo de entrega varía:
   - **Entrega normal:** 15 a 30 días hábiles
   - **Entrega rápida:** No disponible en todas las oficinas (consultar en tu SEGIP más cercano)
   - **Cédula al instante:** Algunas oficinas cuentan con impresión inmediata, especialmente en La Paz y Santa Cruz

7. **Retira tu cédula** — Regresa a la misma oficina con tu comprobante de trámite para retirar el documento.

---

#### Cédula Digital — Actívala desde tu celular

Desde 2026, el SEGIP habilitó la **Cédula de Identidad Digital** a través de la app **"Mi Identidad"**, un documento con la misma validez legal que la cédula física para la mayoría de los trámites.

**Cómo obtenerla:**

1. Descarga la app **"Mi Identidad"** desde Google Play o App Store
2. Acude a una oficina SEGIP y solicita la "Cédula Digital" al operador (el costo es el mismo que la cédula física: Bs 17)
3. El operador vinculará tu teléfono móvil con la base de datos biométrica
4. Una vez registrado, abre la app, ingresa tu número de cédula y fecha de nacimiento
5. Escanea el código QR de tu cédula física
6. Tómate una selfie para verificar tu identidad
7. ¡Listo! Tu cédula digital quedará activada

**¿Dónde es válida?** La cédula digital es aceptada en bancos, aeropuertos (vuelos nacionales), trámites notariales y controles policiales. Sin embargo, para votar y viajar al exterior se recomienda llevar la cédula física.

---

#### Horarios de atención

| Día | Horario |
|-----|---------|
| Lunes a Viernes | 08:00 — 16:00 (horario continuo) |
| Sábados | 08:00 — 12:00 (oficinas seleccionadas) |
| Domingos y feriados | Cerrado |

**Oficinas con horario extendido:** Algunas oficinas en La Paz (Zona Central), El Alto y Santa Cruz atienden hasta las 18:00 los días hábiles.

---

#### Principales oficinas SEGIP

| Ciudad | Dirección | Teléfono |
|--------|-----------|----------|
| **La Paz** (San Pedro — Segelic) | Av. 20 de Octubre N°1628, Edif. Mollinedo *(a una cuadra de la FELCC)* | (2) 2127201 |
| **La Paz** (Centro — Teleférico Celeste) | Pasaje Núñez del Prado, instalaciones del Teleférico Celeste | (2) 2127201 |
| **La Paz** (Zona Sur — Megacenter) | Av. Rafael Pabón N°656, Megacenter, Planta Baja | (2) 2127201 |
| **La Paz** (Sopocachi — Adm. Nacional) | Calle Pedro Salazar N°607, Sopocachi | (2) 2117405 |
| **La Paz** (El Alto — Segelic) | Av. Juan Pablo II N°200 | (2) 2127201 |
| **Santa Cruz** | Av. Irala esq. Av. Santos Dumont | 2680800 |
| **Cochabamba** | Av. Ayacucho esq. 25 de Mayo | 2680800 |
| **Sucre** | Calle Ravelo s/n | 2680800 |
| **Oruro** | Av. 6 de Octubre esq. Cochabamba | 2680800 |
| **Potosí** | Calle Bustillos esq. Sucre | 2680800 |
| **Tarija** | Calle La Madrid esq. Suipacha | 2680800 |
| **Beni** (Trinidad) | Av. 6 de Agosto esq. Avaroa | 2680800 |
| **Pando** (Cobija) | Av. 9 de Febrero | 2680800 |

> Para ubicar la oficina más cercana, visita [https://www.segip.gob.bo/oficina/](https://www.segip.gob.bo/oficina/) y selecciona tu departamento.

<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-68.140%2C-16.508%2C-68.125%2C-16.497&amp;layer=mapnik&amp;marker=-16.5041%2C-68.1342" style="border: 1px solid #ccc; border-radius: 8px; width: 100%; height: 350px;" loading="lazy"></iframe>

📍 **Oficina Segelic La Paz (la más céntrica, junto a la FELCC)** — Av. 20 de Octubre N°1628, Edif. Mollinedo, Zona San Pedro. Esta oficina atiende cédulas de identidad, licencias de conducir y cédulas de extranjero. [Abrir en Google Maps](https://www.google.com/maps?q=-16.5041051,-68.1341678)

📍 **Oficina La Paz Centro** — Pasaje Núñez del Prado (Teleférico Celeste). [Abrir en Google Maps](https://www.google.com/maps?q=-16.5004318,-68.1327011)

📍 **Oficina Zona Sur (Megacenter)** — Av. Rafael Pabón N°656. [Abrir en Google Maps](https://www.google.com/maps?q=-16.5320166,-68.0871546)

---

#### Preguntas Frecuentes

**¿Puedo sacar mi cédula en cualquier departamento?**
Sí, el SEGIP tiene cobertura nacional. Puedes realizar el trámite en cualquier oficina del país, independientemente de tu lugar de nacimiento o domicilio.

**¿La nueva cédula tiene validez para viajar?**
Sí. La Cédula de Identidad boliviana es aceptada como documento de viaje en todos los países de la **Comunidad Andina** (Perú, Colombia, Ecuador) y del **Mercosur** (Argentina, Brasil, Paraguay, Uruguay, Chile). Para otros destinos se requiere pasaporte.

**¿Qué hago si perdí mi cédula?**
Debes:
1. Presentar una **denuncia policial** en la FELCV o unidad policial más cercana
2. Pagar el duplicado en el Banco Unión (Bs 17)
3. Acudir al SEGIP con la denuncia original y los demás requisitos

**¿La cédula digital reemplaza a la física?**
No del todo. La cédula digital es complementaria y tiene validez legal, pero para ciertos trámites (votación, viajes internacionales) se exige la versión física.

**¿Puedo renovar si mi cédula está vencida?**
Sí. Puedes renovar incluso si tu cédula está vencida hace años. Solo necesitas los requisitos de renovación estándar.

**¿Hay descuentos para adultos mayores o personas con discapacidad?**
Sí. Los adultos mayores (60+ años) y personas con discapacidad tienen **exención del pago** en la primera emisión y renovación. Deben presentar el carnet correspondiente.

**¿Cuánto tiempo dura la cédula?**
La vigencia depende de la edad:
- **18 a 60 años:** 10 años
- **60+ años:** Vigencia indefinida

---

#### Consejos útiles

- **Llega muy temprano:** Las oficinas abren a las 7:00 am pero las filas empiezan desde las 5:00 am. Llega antes de las 6:30 am para evitar esperas de más de 2 horas.
- **Viste adecuadamente:** Sin lentes oscuros, gorras, piercings faciales grandes o accesorios que cubran tu rostro.
- **Fotografías profesionales:** Aunque muchas oficinas toman la foto digital, es recomendable llevar tus propias fotos 4x4 con fondo blanco por si acaso.
- **Certificado de domicilio actualizado:** Debe tener no más de 90 días desde su emisión. Lo emiten la OTB, junta vecinal o cualquier autoridad local.
- **Para extranjeros:** El trámite de Cédula de Extranjero requiere visa de residente vigente, pasaporte original y certificado de domicilio. El costo aproximado es de Bs 100.

---

#### Enlaces oficiales

- SEGIP — Página oficial: [https://www.segip.gob.bo](https://www.segip.gob.bo)
- Directorio de oficinas SEGIP: [https://www.segip.gob.bo/oficina/](https://www.segip.gob.bo/oficina/)
- Línea gratuita de consulta: **800 101 102**
- App **Mi Identidad** (Cédula Digital): [Google Play](https://play.google.com/store/apps/details?id=bo.gob.segip.miidentidad) | [App Store](https://apps.apple.com/bo/app/mi-identidad/id6446085894)

#### Redes sociales oficiales del SEGIP

Sigue al SEGIP en sus redes para estar al tanto de horarios extraordinarios, cambios de dirección y nuevas disposiciones:

- **Facebook:** [https://facebook.com/segipoficial](https://facebook.com/segipoficial) — Noticias y comunicados oficiales
- **X (Twitter):** [https://x.com/OficialSegip](https://x.com/OficialSegip) — Información en tiempo real
- **Instagram:** [https://instagram.com/segip_oficial](https://instagram.com/segip_oficial) — Contenido visual y tutorials
- **YouTube:** [https://youtube.com/@segipcomunicacion](https://youtube.com/@segipcomunicacion) — Videos informativos
- **TikTok:** [https://tiktok.com/@segip_oficial](https://tiktok.com/@segip_oficial) — Tips rápidos

> Esta guía fue actualizada en julio de 2026. Los costos y requisitos pueden variar. Verifica siempre en la página oficial del SEGIP antes de realizar tu trámite.`,
    contentEn: `### Complete Guide: Bolivian Identity Card 2026

The **Cédula de Identidad** is the official identification document for Bolivian citizens, issued by **SEGIP** (Servicio General de Identificación Personal). This guide covers everything you need to know to obtain or renew your ID in 2026.

**Requirements by type:**
- **First time:** Birth certificate, proof of residence (less than 90 days old), two 4x4cm white-background photos, Banco Unión payment (Bs 17)
- **Renewal:** Previous ID card, proof of residence, two photos, Bs 17 payment
- **Duplicate (lost/stolen):** Police report, proof of residence, two photos, Bs 17 payment

**Step-by-step:**
1. Pay Bs 17 at any Banco Unión branch
2. Go directly to your nearest SEGIP office (no online booking; arrive before 7:00 AM)
3. Submit your documents at the counter
4. Get your biometric data taken (photo, fingerprints, signature)
5. Wait 15-30 business days for delivery

**Digital ID:** Download "Mi Identidad" app from Google Play/App Store, request activation at any SEGIP office (same cost: Bs 17), then scan your physical ID's QR code and take a selfie.

**Costs:** Bs 17 for most procedures (first time, renewal, duplicate). Seniors 60+ and people with disabilities are exempt from payment.

For more details visit: https://www.segip.gob.bo`,
    date: '2026-07-24',
    readTimeEs: '10 min de lectura',
    readTimeEn: '10 min read',
    imageUrl: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=1200&h=630&fit=crop',
    imageCaption: 'La Paz, Bolivia. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: true,
    views: 1
  },
{
    id: '80',
    contentType: 'analysis',
    slug: 'guia-soat-bolivia-2026',
    titleEs: 'SOAT 2026 en Bolivia — Precios, cómo comprarlo, requisitos y multas',
    titleEn: 'SOAT 2026 in Bolivia — Prices, how to buy it, requirements and fines',
    excerptEs: 'Guía completa del Seguro Obligatorio de Accidentes de Tránsito (SOAT) en Bolivia para 2026. Precios actualizados por tipo de vehículo, dónde comprarlo, documentos necesarios, multas por no tenerlo y cómo verificar tu póliza en línea.',
    excerptEn: 'Complete guide to the Mandatory Transit Accident Insurance (SOAT) in Bolivia for 2026. Updated prices by vehicle type, where to buy it, required documents, fines, and how to verify your policy online.',
    contentEs: `### Guía Completa: SOAT Bolivia 2026

El **SOAT (Seguro Obligatorio de Accidentes de Tránsito)** es un seguro que todo propietario de vehículo en Bolivia debe contratar anualmente. Cubre gastos médicos y muerte por accidentes de tránsito para ocupantes del vehículo, peatones y terceros afectados.

Circular sin SOAT es una infracción grave que puede resultar en multas económicas, retención del vehículo y suspensión de la licencia de conducir.

---

#### Precios SOAT 2026 por tipo de vehículo

| Tipo de vehículo | Costo aproximado (Bs) |
|------------------|----------------------|
| Automóvil particular | 750 — 900 |
| Taxi / Servicio público | 1,000 — 1,300 |
| Microbús / Minibús | 1,200 — 1,600 |
| Bus / Flota | 2,000 — 3,000 |
| Motocicleta (hasta 200cc) | 250 — 400 |
| Motocicleta (más de 200cc) | 400 — 600 |
| Vagoneta / Camioneta | 800 — 1,100 |
| Camión (carga liviana) | 1,200 — 1,800 |
| Camión (carga pesada) | 2,500 — 4,000 |

> Los precios varían según la aseguradora y el modelo del vehículo. Los montos mostrados son referenciales para 2026.

---

#### Cobertura del SOAT

El SOAT cubre:

- **Gastos médicos:** Hasta Bs 20,000 por persona
- **Muerte accidental:** Hasta Bs 20,000 por persona
- **Incapacidad permanente:** Hasta Bs 20,000 por persona
- **Gastos funerarios:** Hasta Bs 4,000 por persona

La cobertura aplica para ocupantes del vehículo asegurado, peatones y terceros involucrados en el accidente, sin importar quién tuvo la culpa.

---

#### Requisitos para comprar el SOAT

1. **RUAT** (Registro Único de Automotores) del vehículo
2. **SOAT anterior** (si es renovación)
3. **Cédula de Identidad** del propietario
4. **Inspección técnica** del vehículo (en algunas aseguradoras)
5. **Número de placa** del vehículo

---

#### Dónde comprar el SOAT

El SOAT se puede adquirir en cualquiera de las aseguradoras autorizadas por la **APS (Autoridad de Fiscalización y Control de Pensiones y Seguros)**:

| Aseguradora | Modalidades |
|-------------|-------------|
| **Unión** | Presencial, online |
| **Alianza** | Presencial, online |
| **BISA** | Presencial, online |
| **La Boliviana Ciacruz** | Presencial, online |
| **Fortaleza** | Presencial, online |
| **Consorcio** | Presencial, online |
| **CREDISEGUROS** | Presencial, online |

También puedes comprarlo en línea desde las páginas web de cada aseguradora o mediante la plataforma **Mi SOAT** del gobierno.

---

#### Paso a paso para comprar el SOAT online

1. Ingresa al sitio web de la aseguradora de tu preferencia
2. Selecciona "SOAT" y el tipo de vehículo
3. Ingresa la placa y el número de RUAT
4. Verifica los datos del vehículo
5. Realiza el pago con tarjeta de débito/crédito o transferencia
6. Descarga tu certificado SOAT en PDF
7. Imprime el certificado y llévalo siempre en tu vehículo

---

#### Multas por no tener SOAT

- **Multa económica:** 200 UFV (aproximadamente Bs 450 — 500)
- **Retención del vehículo:** Hasta que presentes el SOAT vigente
- **Suspensión de licencia:** Hasta 30 días en caso de reincidencia
- **Inmovilización:** El vehículo será derivado al depósito municipal

Además, si sufres un accidente sin SOAT, deberás cubrir todos los gastos médicos y daños de tu propio bolsillo.

---

#### Cómo verificar tu SOAT en línea

1. Ingresa a [https://www.aps.gob.bo](https://www.aps.gob.bo)
2. Selecciona "Consulta SOAT"
3. Ingresa el número de placa del vehículo
4. El sistema mostrará la vigencia de tu póliza

También puedes verificar desde la página web de la aseguradora donde compraste el SOAT.

---

#### Preguntas Frecuentes

**¿El SOAT cubre daños al vehículo?**
No. El SOAT solo cubre gastos médicos y muerte de personas. Los daños materiales al vehículo requieren un seguro contra todo riesgo (cobertura amplia).

**¿Puedo comprar el SOAT en cuotas?**
Algunas aseguradoras ofrecen financiamiento. Consulta directamente con la aseguradora de tu preferencia.

**¿Qué hago si pierdo mi certificado SOAT?**
Puedes descargar una copia desde el portal web de la aseguradora donde lo compraste o solicitar un duplicado.

**¿El SOAT es el mismo para todo el año?**
Sí, el SOAT tiene vigencia de un año desde la fecha de emisión. Debes renovarlo antes del vencimiento.

**¿Puedo comprar SOAT si mi vehículo no tiene RUAT?**
No. El RUAT es obligatorio para adquirir el SOAT. Si no tienes RUAT, debes tramitarlo primero en SEGIP.

---

> Esta guía fue actualizada en julio de 2026. Los precios y montos pueden variar. Verifica siempre en el sitio oficial de la APS o tu aseguradora.`,
    contentEn: `### Complete Guide: SOAT Bolivia 2026

The **SOAT (Mandatory Transit Accident Insurance)** is an annual insurance that every vehicle owner in Bolivia must purchase. It covers medical expenses and death from traffic accidents.

**2026 Prices (approximate):**
- Private car: Bs 750-900
- Motorcycle: Bs 250-600
- Taxi/public service: Bs 1,000-1,300
- Truck (heavy): Bs 2,500-4,000

**Requirements:** RUAT, previous SOAT (for renewal), vehicle owner's ID, license plate number

**Where to buy:** Authorized insurers (Unión, Alianza, BISA, La Boliviana Ciacruz, Fortaleza, Consorcio, CREDISEGUROS) — in person or online.

**Fines for driving without SOAT:** 200 UFV (~Bs 450-500), vehicle retention, license suspension.

**Coverage:** Up to Bs 20,000 per person for medical expenses, accidental death, and permanent disability.

For more info: https://www.aps.gob.bo`,
    date: '2026-07-24',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=630&fit=crop',
    imageCaption: 'Automóvil en carretera. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: false,
    views: 1
  },
{
    id: '81',
    contentType: 'analysis',
    slug: 'guia-licencia-conducir-bolivia-2026',
    titleEs: 'Cómo sacar la Licencia de Conducir en Bolivia 2026 — Requisitos, costos y categorías',
    titleEn: 'How to get a Driver\'s License in Bolivia 2026 — Requirements, costs and categories',
    excerptEs: 'Guía completa para obtener o renovar tu licencia de conducir en Bolivia. Categorías (A, B, C, D, E, F), requisitos actualizados, costos por categoría, paso a paso de los exámenes médicos, psicológicos, escrito y práctico, y todo sobre el nuevo sistema SEGIP.',
    excerptEn: 'Complete guide to get or renew your driver\'s license in Bolivia. Categories (A, B, C, D, E, F), updated requirements, costs by category, step-by-step of medical, psychological, written and driving tests, and the new SEGIP system.',
    contentEs: `### Guía Completa: Licencia de Conducir Bolivia 2026

La **Licencia de Conducir** es el documento oficial que autoriza a una persona a conducir vehículos motorizados en territorio boliviano. Es emitida por el **SEGIP (Servicio General de Identificación Personal)** desde la transferencia de competencias de las antiguas alcaldías.

---

#### Categorías de licencia

| Categoría | Vehículos autorizados | Edad mínima |
|-----------|----------------------|-------------|
| **Categoría A** | Motocicletas hasta 200cc | 16 años |
| **Categoría B** | Automóviles, vagonetas, camionetas (hasta 4.5 ton) | 18 años |
| **Categoría C** | Transporte de pasajeros (microbuses, buses) | 21 años |
| **Categoría D** | Vehículos de emergencia y escolta | 23 años |
| **Categoría E** | Maquinaria pesada y agrícola | 21 años |
| **Categoría F** | Vehículos del Estado y Fuerzas Armadas | 18 años |

---

#### Requisitos por categoría

**Categoría A (motos hasta 200cc):**
- Cédula de Identidad original y copia
- Certificado de domicilio (original con no más de 90 días)
- Certificado médico (visión, audición, reflejos)
- Certificado psicológico
- Aprobar examen escrito de normas de tránsito
- Aprobar examen práctico de conducción
- Dos fotografías 4x4 fondo blanco

**Categoría B (automóviles):**
- Cédula de Identidad original y copia
- Certificado de domicilio (con no más de 90 días)
- Certificado médico integral
- Certificado psicológico
- Aprobar examen escrito de normas de tránsito y señalización
- Aprobar examen práctico de conducción en circuito cerrado
- Dos fotografías 4x4 fondo blanco
- Pago en el Banco Unión

**Categorías C, D, E (transporte pesado y pasajeros):**
- Todos los requisitos de la categoría B
- Edad mínima según categoría
- Experiencia previa de 2 años con categoría B (mínimo)
- Curso de capacitación especializada (transporte de pasajeros o carga)
- Examen psicológico más riguroso

---

#### Costos actualizados (2026)

| Categoría | Primera emisión | Renovación |
|-----------|----------------|------------|
| A (motos) | Bs 150 — 200 | Bs 100 — 150 |
| B (automóviles) | Bs 300 — 400 | Bs 150 — 250 |
| C (transporte pasajeros) | Bs 450 — 550 | Bs 250 — 350 |
| D (emergencia) | Bs 500 — 600 | Bs 300 — 400 |
| E (maquinaria pesada) | Bs 400 — 500 | Bs 250 — 350 |

> Los costos incluyen derechos de examen, certificados médico y psicológico, y emisión del documento. Montos referenciales.

---

#### Paso a paso del trámite

1. **Reúne los documentos** según la categoría que deseas tramitar
2. **Paga en el Banco Unión** el monto correspondiente a tu categoría
3. **Saca tu turno** en [turnos.segip.gob.bo](https://turnos.segip.gob.bo) seleccionando "Licencia de Conducir"
4. **Acude a la oficina SEGIP** el día del turno con todos tus documentos
5. **Examen médico:** Te realizarán pruebas de visión, audición y reflejos
6. **Examen psicológico:** Evaluación de aptitudes psicomotrices
7. **Examen escrito:** Normas de tránsito y señalización (preguntas de opción múltiple)
8. **Examen práctico:** Conducción en circuito cerrado (categorías A y B)
9. **Toma de fotografía y firma** para la licencia
10. **Entrega:** 10 a 30 días hábiles en la misma oficina SEGIP

---

#### Licencia por primera vez vs. renovación

**Primera vez:**
- Todos los exámenes (médico, psicológico, escrito, práctico)
- Vigencia: 5 años

**Renovación:**
- Solo exámenes médico y psicológico (sin escrito ni práctico)
- Vigencia: 5 años adicionales
- Puedes renovar hasta 90 días antes del vencimiento

---

#### Preguntas Frecuentes

**¿Puedo sacar mi licencia en cualquier departamento?**
Sí, el SEGIP tiene cobertura nacional. Puedes tramitar tu licencia en cualquier oficina del país.

**¿Qué pasa si repruebo el examen escrito?**
Puedes volver a tomarlo después de 7 días hábiles. Algunas oficinas permiten reprogramar el examen sin costo adicional.

**¿La licencia boliviana es válida en el extranjero?**
Depende del país. En países de la Comunidad Andina y Mercosur se acepta la licencia boliviana. Para otros destinos se recomienda obtener un Permiso Internacional de Conducir.

**¿Qué hago si pierdo mi licencia?**
Debes solicitar un duplicado en SEGIP presentando denuncia policial, certificado de domicilio y pago en Banco Unión.

**¿Los adultos mayores necesitan renovar?**
Sí. No hay exención para adultos mayores en licencias de conducir. Deben renovar cada 5 años con exámenes médicos.

**¿Puedo manejar con licencia vencida?**
No. Conducir con licencia vencida es una infracción que puede resultar en multa y retención del vehículo.

---

> Esta guía fue actualizada en julio de 2026. Los costos y requisitos pueden variar. Verifica siempre en el sitio oficial del SEGIP.`,
    contentEn: `### Complete Guide: Driver's License Bolivia 2026

The **Driver's License** is issued by **SEGIP** since the transfer of competencies from municipalities.

**Categories:**
- **A:** Motorcycles up to 200cc (min. age 16)
- **B:** Cars, SUVs, pickup trucks up to 4.5 tons (min. age 18)
- **C:** Passenger transport (buses, minibuses, min. age 21)
- **D:** Emergency vehicles (min. age 23)
- **E:** Heavy machinery (min. age 21)

**Requirements:** ID card, proof of residence, medical certificate, psychological evaluation, written exam (traffic rules), practical driving exam.

**Costs (approximate):**
- Category A: Bs 150-200 (first time), Bs 100-150 (renewal)
- Category B: Bs 300-400 (first time), Bs 150-250 (renewal)
- Category C: Bs 450-550 (first time)

**Validity:** 5 years. For more info: https://www.segip.gob.bo`,
    date: '2026-07-24',
    readTimeEs: '9 min de lectura',
    readTimeEn: '9 min read',
    imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop',
    imageCaption: 'Conduciendo en carretera. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: false,
    views: 1
  },
{
    id: '82',
    contentType: 'analysis',
    slug: 'guia-pasaporte-boliviano-2026',
    titleEs: 'Cómo sacar el Pasaporte Boliviano 2026 — Requisitos, costos y tiempos de entrega',
    titleEn: 'How to get the Bolivian Passport 2026 — Requirements, costs and delivery times',
    excerptEs: 'Guía completa para obtener o renovar tu pasaporte boliviano. Tipos de pasaporte (ordinario, emergencia), requisitos actualizados, costos oficiales, paso a paso del trámite en SEGIP, tiempos de entrega y cómo consultar el estado de tu solicitud.',
    excerptEn: 'Complete guide to get or renew your Bolivian passport. Types (ordinary, emergency), updated requirements, official costs, step-by-step SEGIP process, delivery times, and how to check your application status.',
    contentEs: `### Guía Completa: Pasaporte Boliviano 2026

El **Pasaporte Boliviano** es el documento de viaje que permite a los ciudadanos bolivianos salir del país y viajar al extranjero. Es emitido por el **SEGIP** y tiene una vigencia de **10 años** para mayores de edad.

---

#### Tipos de pasaporte

| Tipo | Uso | Vigencia | Costo |
|------|-----|----------|-------|
| **Ordinario** | Viajes personales, turismo, trabajo | 10 años | Bs 450 — 600 |
| **Emergencia** | Viajes urgentes por salud, fallecimiento | 1 año | Bs 750 — 900 |
| **Menores de edad** | Viajes de niños y adolescentes | 5 años | Bs 300 — 450 |
| **Oficial/Diplomático** | Funcionarios del Estado | Según cargo | Gratuito |

---

#### Requisitos para pasaporte ordinario

- **Cédula de Identidad** original y vigente
- **Certificado de domicilio** (original con no más de 90 días de antigüedad)
- **Dos fotografías** 4x4 cm, fondo blanco, sin retoques
- **Pago en el Banco Unión** (Bs 450 — 600 según la oficina)
- **Partida de nacimiento** (solo para primera vez, original)
- **Pasaporte anterior** (solo para renovación, original)

**Para menores de edad:**
- Partida de nacimiento original
- Cédula de Identidad del menor (si tiene)
- Cédula de Identidad de ambos padres (originales)
- Autorización de ambos padres (presencial)
- Si uno de los padres no asiste: autorización notariada

---

#### Costos actualizados (2026)

| Tipo | Costo (Bs) |
|------|-----------|
| Pasaporte ordinario (mayores) | 450 — 600 |
| Pasaporte ordinario (menores) | 300 — 450 |
| Pasaporte de emergencia | 750 — 900 |
| Duplicado (robo/extravío) | 450 — 600 |
| Renovación | 450 — 600 |

> Los pagos se realizan exclusivamente en el **Banco Unión**. No se acepta efectivo en las oficinas SEGIP.

---

#### Paso a paso

1. **Reúne los documentos** según tu tipo de trámite
2. **Paga en el Banco Unión** el monto correspondiente a pasaporte
3. **Saca tu turno** en [turnos.segip.gob.bo](https://turnos.segip.gob.bo) — selecciona "Pasaporte"
4. **Acude a la oficina SEGIP** el día del turno con todos los documentos originales
5. **Toma de datos biométricos:** fotografía digital, huellas dactilares (10 dedos), firma digital
6. **Verificación de documentos** por el oficial SEGIP
7. **Espera la entrega:**

| Tipo | Tiempo de entrega |
|------|-------------------|
| Ordinario | 10 — 20 días hábiles |
| Emergencia | 48 — 72 horas |
| Menores | 15 — 25 días hábiles |

8. **Retira tu pasaporte** en la misma oficina SEGIP presentando el comprobante

---

#### Cómo consultar el estado de tu pasaporte

1. Ingresa a [https://www.segip.gob.bo](https://www.segip.gob.bo)
2. Selecciona "Consulta de Pasaporte"
3. Ingresa tu número de cédula de identidad
4. El sistema mostrará el estado actual de tu trámite

---

#### Países sin visa para bolivianos (2026)

Bolivia tiene acuerdos de exención de visa con:

- **Comunidad Andina:** Perú, Colombia, Ecuador (solo con CI)
- **Mercosur:** Argentina, Brasil, Paraguay, Uruguay (solo con CI)
- **Chile** (solo con CI)
- **México** (90 días)
- **Rusia** (90 días)
- **China** (30 días)
- **Emiratos Árabes Unidos** (90 días)
- **Sudáfrica** (30 días)
- **Turquía** (90 días)
- **Japón** (90 días, pasaporte electrónico)
- **Corea del Sur** (90 días)
- **Reino Unido** (6 meses)
- **Espacio Schengen** (90 días en 180 días)

> La lista puede variar. Verifica siempre los requisitos de visa antes de viajar.

---

#### Preguntas Frecuentes

**¿Puedo renovar el pasaporte antes de que venza?**
Sí. Puedes renovarlo incluso si está vigente. El tiempo restante se perderá.

**¿Qué hago si pierdo mi pasaporte en el extranjero?**
Debes acudir al Consulado o Embajada de Bolivia más cercana para solicitar un pasaporte de emergencia o salvoconducto.

**¿El pasaporte boliviano es biométrico?**
Sí. Desde 2019, Bolivia emite pasaportes electrónicos biométricos con chip.

**¿Puedo viajar solo con la Cédula de Identidad?**
Sí, a países de la Comunidad Andina y Mercosur. Para el resto del mundo necesitas pasaporte.

**¿Los niños necesitan pasaporte?**
Sí. Todo ciudadano boliviano, sin importar la edad, necesita pasaporte para viajar fuera de los países del Mercosur y Comunidad Andina.

---

> Esta guía fue actualizada en julio de 2026. Los costos y requisitos pueden variar. Verifica siempre en el sitio oficial del SEGIP antes de realizar tu trámite.`,
    contentEn: `### Complete Guide: Bolivian Passport 2026

The **Bolivian Passport** is issued by **SEGIP** and is valid for **10 years** for adults, **5 years** for minors.

**Types and costs:**
- Ordinary: Bs 450-600 (10 years)
- Emergency: Bs 750-900 (1 year)
- Minors: Bs 300-450 (5 years)

**Requirements:** ID card, proof of residence, two 4x4cm photos, Banco Unión payment, birth certificate (first time only), previous passport (renewal only).

**Process:**
1. Pay at Banco Unión
2. Book an appointment at turnos.segip.gob.bo
3. Visit SEGIP office with documents
4. Biometric data capture (photo, fingerprints, signature)
5. Delivery: 10-20 business days (ordinary), 48-72 hours (emergency)

**Visa-free travel:** Comunidad Andina, Mercosur, Chile (with ID card only), Mexico, Russia, China, UAE, South Africa, Turkey, Japan, South Korea, UK, Schengen Area.

For more info: https://www.segip.gob.bo`,
    date: '2026-07-24',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=630&fit=crop',
    imageCaption: 'Pasaporte y billetes de avión. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: false,
    views: 1
  },
{
    id: '83',
    contentType: 'analysis',
    slug: 'guia-nit-sin-bolivia-2026',
    titleEs: 'Cómo sacar el NIT en Bolivia 2026 — Requisitos, costos y pasos en Impuestos Nacionales',
    titleEn: 'How to get the NIT in Bolivia 2026 — Requirements, costs and steps at SIN',
    excerptEs: 'Guía completa para obtener tu Número de Identificación Tributaria (NIT) en Bolivia. Requisitos para personas naturales y jurídicas, costo gratuito, paso a paso del trámite en el SIN, cómo obtener tu certificado electrónico y cómo inscribirte en el régimen simplificado.',
    excerptEn: 'Complete guide to get your Tax Identification Number (NIT) in Bolivia. Requirements for individuals and legal entities, free cost, step-by-step process at SIN, how to get your electronic certificate, and how to register for the simplified regime.',
    contentEs: `### Guía Completa: NIT Bolivia 2026

El **NIT (Número de Identificación Tributaria)** es el registro que toda persona natural o jurídica debe tener para realizar actividades económicas en Bolivia. Es emitido por el **Servicio de Impuestos Nacionales (SIN)** y es obligatorio para emitir facturas, declarar impuestos y operar legalmente.

---

#### Tipos de contribuyentes

| Tipo | Descripción |
|------|-------------|
| **Persona Natural** | Independiente, profesional, comerciante individual |
| **Persona Jurídica** | Empresas, sociedades, ONGs, fundaciones |
| **Régimen Simplificado** | Pequeños contribuyentes con ingresos anuales menores a Bs 215,000 |
| **Régimen General** | Contribuyentes que superan el límite del simplificado |

---

#### Requisitos

**Persona Natural (Régimen General):**
- Cédula de Identidad original y copia
- Certificado de domicilio (original, con no más de 90 días)
- Factura de luz, agua o teléfono (para verificar domicilio fiscal)
- Croquis de ubicación del domicilio fiscal
- Correo electrónico y número de celular

**Persona Natural (Régimen Simplificado):**
- Cédula de Identidad original y copia
- Certificado de domicilio
- Croquis de ubicación
- Correo electrónico

**Persona Jurídica (Empresa):**
- Testimonio de constitución (original)
- Poder del representante legal
- Cédula de Identidad del representante legal
- Certificado de domicilio de la empresa
- Factura de servicios básicos de la empresa
- Croquis de ubicación
- Registro en FUNDEMPRESA (Matrícula de Comercio)
- Correo electrónico y número de celular

---

#### Costo

| Trámite | Costo |
|---------|-------|
| Inscripción al NIT | **Gratuito** |
| Certificado electrónico (firma digital) | Bs 100 — 150 |
| Actualización de datos | **Gratuito** |
| Cancelación de NIT | **Gratuito** |

> La inscripción al NIT no tiene costo. El único gasto asociado es la **firma digital** (certificado electrónico) si la necesitas para declaraciones virtuales.

---

#### Paso a paso

1. **Reúne los documentos** según tu tipo de contribuyente
2. **Agenda una cita** en la página del SIN: [https://citas.impuestos.gob.bo](https://citas.impuestos.gob.bo)
3. **Acude a la oficina del SIN** más cercana el día de tu cita
4. **Presenta tus documentos** en la ventanilla de "Registro de Contribuyentes"
5. **El funcionario SIN** verificará tus datos y registrará tu NIT
6. **Recibe tu NIT** de forma inmediata (papel sellado y firmado)
7. **Solicita tu Certificado Electrónico** (firma digital) en la misma oficina si planeas declarar en línea

---

#### Obligaciones después de obtener el NIT

| Obligación | Frecuencia |
|------------|-----------|
| Presentar declaraciones juradas | Mensual / Anual según el régimen |
| Emitir facturas autorizadas | Por cada venta o servicio |
| Pagar impuestos (IVA, IUE, IT) | Según calendario tributario |
| Actualizar datos en el SIN | Cuando cambies de domicilio o actividad |
| Presentar DDJJ de información | Anual |

---

#### Multas por incumplimiento

| Infracción | Multa (UFV) |
|------------|-------------|
| No presentar declaración jurada | 50 — 500 UFV |
| No emitir factura | 500 — 2,000 UFV |
| No tener NIT (ejerciendo comercio) | 1,000 — 3,000 UFV |
| No actualizar datos | 100 — 300 UFV |

---

#### Preguntas Frecuentes

**¿Necesito NIT si soy independiente?**
Sí. Si realizas alguna actividad económica por cuenta propia (profesional, comerciante, artista, etc.) debes registrarte en el SIN y obtener tu NIT.

**¿Puedo tener NIT sin facturar?**
No. El NIT te obliga a emitir factura por cada transacción. Si facturas poco, puedes acogerte al Régimen Simplificado.

**¿El NIT vence?**
El NIT no tiene fecha de vencimiento. Solo se cancela cuando cesas definitivamente tu actividad económica.

**¿Puedo hacer el trámite en línea?**
Actualmente, la inscripción inicial requiere presencia física. Las actualizaciones y declaraciones pueden hacerse en línea.

**¿Qué es el certificado electrónico?**
Es la firma digital que te permite presentar declaraciones juradas y realizar trámites virtuales en el SIN. Se adquiere en las oficinas del SIN o en entidades autorizadas (Agencia de Gobierno Electrónico).

---

> Esta guía fue actualizada en julio de 2026. Los costos y requisitos pueden variar. Verifica siempre en la página oficial del SIN.`,
    contentEn: `### Complete Guide: NIT Bolivia 2026

The **NIT (Tax Identification Number)** is required for anyone conducting economic activities in Bolivia, issued by the **National Tax Service (SIN)**.

**Requirements:**
- **Individuals:** ID card, proof of residence, utility bill, location sketch, email
- **Companies:** Incorporation deed, legal representative's ID and power of attorney, business registration (FUNDEMPRESA), utility bills, location sketch

**Cost:** Free for registration. Electronic certificate (digital signature): Bs 100-150.

**Process:** Book appointment at citas.impuestos.gob.bo → Visit SIN office with documents → Receive NIT immediately.

**Obligations:** File monthly/annual tax returns, issue authorized invoices, pay taxes (VAT, income tax).

For more info: https://www.impuestos.gob.bo`,
    date: '2026-07-24',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=630&fit=crop',
    imageCaption: 'Documentos de oficina. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: false,
    views: 1
  },
{
    id: '84',
    contentType: 'analysis',
    slug: 'guia-ruat-transferencia-vehicular-bolivia-2026',
    titleEs: 'Cómo hacer la Transferencia Vehicular y sacar el RUAT en Bolivia 2026',
    titleEn: 'How to do Vehicle Transfer and get RUAT in Bolivia 2026',
    excerptEs: 'Guía completa del Registro Único de Automotores (RUAT) en Bolivia. Cómo transferir un vehículo, requisitos para compra-venta, costos actualizados, paso a paso en SEGIP, cómo obtener el RUAT por primera vez y cómo consultar la deuda vehicular.',
    excerptEn: 'Complete guide to the Single Vehicle Registry (RUAT) in Bolivia. How to transfer a vehicle, requirements for sale-purchase, updated costs, step-by-step at SEGIP, how to get RUAT for the first time, and how to check vehicle debt.',
    contentEs: `### Guía Completa: RUAT y Transferencia Vehicular Bolivia 2026

El **RUAT (Registro Único de Automotores)** es el documento que acredita la propiedad de un vehículo en Bolivia. Es emitido por el **SEGIP** y es obligatorio para circular, transferir el vehículo, contratar el SOAT y realizar cualquier trámite vehicular.

---

#### Tipos de trámite RUAT

| Trámite | Descripción |
|---------|-------------|
| **Primera inscripción** | Vehículos nuevos (0 km) o importados |
| **Transferencia** | Cambio de propietario por compra-venta |
| **Duplicado** | Por robo, extravío o deterioro |
| **Cancelación** | Por desguace, destrucción o robo sin recuperación |
| **Modificación de datos** | Cambio de motor, chasis, color, etc. |

---

#### Requisitos para transferencia vehicular

**Vendedor necesita:**
- Cédula de Identidad original y copia
- RUAT original del vehículo
- SOAT vigente (para verificar que no haya deudas)
- Pago de deudas vehiculares (si las hay)

**Comprador necesita:**
- Cédula de Identidad original y copia
- Certificado de domicilio (original con no más de 90 días)

**Documentos del vehículo:**
- RUAT original firmado por el vendedor (reverso)
- Factura de compra-venta original (con firmas del vendedor y comprador)
- Certificado de inspección técnica vehicular (en algunos casos)
- Pago en el Banco Unión

---

#### Costos actualizados (2026)

| Trámite | Costo (Bs) |
|---------|-----------|
| Primera inscripción (nacional) | 200 — 400 |
| Primera inscripción (importado) | 400 — 800 |
| Transferencia vehicular | 150 — 300 |
| Duplicado | 50 — 100 |
| Modificación de datos | 50 — 100 |

> Los costos varían según el tipo de vehículo y departamento. Montos referenciales.

---

#### Paso a paso para transferencia vehicular

1. **Acuerda la compra-venta** con el vendedor y firma la factura o minuta de transferencia
2. **Verifica que el vehículo no tenga deudas** (multas, SOAT, impuestos) en [https://www.segip.gob.bo](https://www.segip.gob.bo)
3. **Paga en el Banco Unión** el monto correspondiente a transferencia
4. **Saca tu turno** en [turnos.segip.gob.bo](https://turnos.segip.gob.bo) seleccionando "RUAT — Transferencia"
5. **Acude a la oficina SEGIP** ambos (vendedor y comprador) con todos los documentos
6. **Verificación de documentos** por el oficial SEGIP
7. **Firma del vendedor y comprador** en el nuevo RUAT
8. **Entrega del nuevo RUAT** a nombre del comprador

**Plazo de entrega:** 15 a 30 días hábiles (algunas oficinas lo entregan al instante)

---

#### Cómo consultar la deuda vehicular

Antes de comprar un vehículo, verifica que no tenga deudas:

1. Ingresa a [https://www.segip.gob.bo](https://www.segip.gob.bo)
2. Selecciona "Consulta de Deuda Vehicular"
3. Ingresa el número de placa o RUAT
4. El sistema mostrará:
   - Multas de tránsito impagas
   - SOAT vencido
   - Impuestos municipales pendientes
   - Alertas de robo

---

#### Preguntas Frecuentes

**¿Puedo transferir un vehículo sin RUAT original?**
No. El RUAT original es obligatorio. Si está perdido, el vendedor debe sacar un duplicado antes de la transferencia.

**¿Ambos (vendedor y comprador) deben ir al SEGIP?**
Sí. Ambos deben presentarse con sus cédulas de identidad para firmar la transferencia.

**¿Qué hago si compré un vehículo y no lo transfiero?**
El vehículo seguirá registrado a nombre del vendedor. Esto puede generar problemas legales si el vehículo comete infracciones o sufre un accidente.

**¿La transferencia se puede hacer en cualquier departamento?**
Sí, el RUAT tiene cobertura nacional. Puedes realizar la transferencia en cualquier oficina SEGIP del país.

**¿Qué es la minuta de transferencia?**
Es un documento legal firmado por ambas partes ante notario de fe pública. No siempre es obligatoria: la factura de compra-venta puede ser suficiente para vehículos usados.

---

> Esta guía fue actualizada en julio de 2026. Los costos y requisitos pueden variar. Verifica siempre en el sitio oficial del SEGIP.`,
    contentEn: `### Complete Guide: RUAT Vehicle Transfer Bolivia 2026

The **RUAT (Single Vehicle Registry)** is the document proving vehicle ownership in Bolivia, issued by SEGIP.

**Transfer requirements:**
- **Seller:** ID card, original RUAT, current SOAT, debt clearance
- **Buyer:** ID card, proof of residence
- **Vehicle:** Original RUAT (signed by seller on back), purchase invoice, Banco Unión payment

**Costs:** Bs 150-300 for transfer, Bs 50-100 for duplicate.

**Process:**
1. Agree on sale and sign the invoice
2. Check vehicle debt at segip.gob.bo
3. Pay at Banco Unión
4. Book appointment at turnos.segip.gob.bo
5. Both parties visit SEGIP with documents
6. Sign the new RUAT
7. Delivery: 15-30 business days

**Check before buying:** Always verify there's no outstanding debt, expired SOAT, traffic fines, or theft alerts at segip.gob.bo.

For more info: https://www.segip.gob.bo`,
    date: '2026-07-24',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&h=630&fit=crop',
    imageCaption: 'Vehículo en carretera. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: false,
    views: 1
  },
{
    id: '85',
    contentType: 'analysis',
    slug: 'guia-certificado-nacimiento-online-bolivia-2026',
    titleEs: 'Cómo sacar el Certificado de Nacimiento en línea Bolivia 2026 — SEGIP Digital',
    titleEn: 'How to get the Birth Certificate online in Bolivia 2026 — SEGIP Digital',
    excerptEs: 'Guía completa para obtener tu certificado de nacimiento en línea desde la página del SEGIP. Costo, requisitos, paso a paso para descargar el PDF, cómo pagar con Tigo Money o Banco Unión, y qué hacer si tu registro no aparece en el sistema.',
    excerptEn: 'Complete guide to get your birth certificate online from the SEGIP website. Cost, requirements, step-by-step to download the PDF, how to pay with Tigo Money or Banco Unión, and what to do if your record does not appear in the system.',
    contentEs: `### Guía Completa: Certificado de Nacimiento en Línea Bolivia 2026

El **Certificado de Nacimiento** es un documento indispensable para realizar prácticamente cualquier trámite en Bolivia: inscripción escolar, matrimonio, obtención de cédula de identidad, pasaporte, etc.

Desde 2020, el **SEGIP** habilitó el sistema en línea para obtener tu certificado de nacimiento sin necesidad de acudir a una oficina.

---

#### Costo

| Tipo | Costo (Bs) |
|------|-----------|
| Certificado de nacimiento en línea | **Bs 17** |
| Certificado de nacimiento presencial | **Bs 17** |
| Certificado de matrimonio en línea | **Bs 17** |
| Certificado de defunción en línea | **Bs 17** |

---

#### Requisitos

- Conexión a internet
- Número de cédula de identidad de la persona (si es mayor de edad)
- Nombres completos de la persona y de los padres
- Correo electrónico
- Tarjeta de débito/crédito, Tigo Money o cuenta en Banco Unión para el pago

---

#### Paso a paso para obtenerlo en línea

1. **Ingresa al portal SEGIP:** [https://www.segip.gob.bo](https://www.segip.gob.bo)
2. **Selecciona "Certificados en Línea"** en el menú principal
3. **Elige el tipo de certificado:** Nacimiento, Matrimonio o Defunción
4. **Ingresa los datos requeridos:**
   - Número de CI (o nombres completos si no tienes CI)
   - Nombres y apellidos
   - Nombres del padre y la madre
5. **Verifica los datos** que aparecen en pantalla
6. **Realiza el pago de Bs 17** mediante:
   - **Tarjeta de crédito/débito** (Visa, Mastercard)
   - **Tigo Money**
   - **Banco Unión** (pago con código de referencia)
7. **Descarga el PDF** del certificado de nacimiento
8. **Imprime** el certificado (es válido con el código QR y firma digital)

---

#### Cómo verificar la validez del certificado

Todo certificado emitido por el portal SEGIP incluye un **código QR** y un **código de verificación**. Para confirmar su autenticidad:

1. Escanea el código QR con tu celular
2. O ingresa a [https://www.segip.gob.bo](https://www.segip.gob.bo)
3. Selecciona "Verificar Certificado"
4. Ingresa el código de verificación que aparece en el documento

El certificado descargado tiene la **misma validez legal** que uno emitido presencialmente.

---

#### Problemas comunes y soluciones

| Problema | Solución |
|----------|----------|
| **"No se encontraron registros"** | Verifica que los nombres estén escritos exactamente como en el Registro Civil. Prueba con variaciones ortográficas. |
| **El pago no se procesa** | Intenta con otro método de pago o espera 15 minutos y reintenta. |
| **El PDF no descarga** | Desactiva bloqueadores de ventanas emergentes o intenta con otro navegador. |
| **Datos incorrectos** | Acude al Registro Civil más cercano para solicitar la rectificación. |

Si el sistema no encuentra tu registro, es posible que tus datos no hayan sido digitalizados. En ese caso, debes acudir al **Registro Civil** de tu localidad para solicitar la inscripción o actualización.

---

#### Oficinas del Registro Civil

| Ciudad | Dirección |
|--------|-----------|
| **La Paz** | Calle Bolívar esq. Yanacocha |
| **El Alto** | Av. Juan Pablo II N° 100 |
| **Santa Cruz** | Calle Sucre esq. 21 de Mayo |
| **Cochabamba** | Calle 25 de Mayo esq. Heroínas |
| **Sucre** | Calle San Alberto N° 15 |

---

#### Preguntas Frecuentes

**¿Puedo sacar el certificado de nacimiento de otra persona?**
Sí, siempre que tengas los datos correctos: nombres completos y nombres de los padres.

**¿El certificado en línea es válido para tramitar mi cédula?**
Sí. El certificado de nacimiento emitido en línea tiene la misma validez que el presencial para todo trámite.

**¿Cuántas veces puedo descargar el certificado?**
Las veces que quieras. Una vez pagado, el PDF queda disponible en tu cuenta por tiempo indefinido.

**¿Qué hago si mi certificado tiene errores ortográficos?**
Debes acudir al Registro Civil para solicitar la rectificación del error. No se puede corregir en línea.

**¿El certificado en línea sirve para trámites en el exterior?**
Depende de la institución. Algunos trámites en el exterior pueden requerir el certificado apostillado, que debe tramitarse presencialmente.

---

> Esta guía fue actualizada en julio de 2026. Los costos pueden variar. Verifica siempre en el sitio oficial del SEGIP.`,
    contentEn: `### Complete Guide: Birth Certificate Online Bolivia 2026

The **Birth Certificate** can be obtained online through the **SEGIP** portal without visiting an office. Cost: **Bs 17**.

**Requirements:** Internet connection, ID number or full names, parents' names, email, payment method.

**Step-by-step:**
1. Go to segip.gob.bo → "Certificados en Línea"
2. Select "Nacimiento" (Birth)
3. Enter your details (CI number or full names)
4. Verify the information on screen
5. Pay Bs 17 (credit/debit card, Tigo Money, Banco Unión)
6. Download the PDF certificate

**Validity:** The certificate includes a QR code and verification code. It has the same legal validity as an in-person certificate.

**Troubleshooting:** If the system doesn't find your records, visit the nearest Civil Registry office.

For more info: https://www.segip.gob.bo`,
    date: '2026-07-24',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=1200&h=630&fit=crop',
    imageCaption: 'Bebé recién nacido. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: false,
    views: 1
  },
{
    id: '86',
    contentType: 'analysis',
    slug: 'guia-antecedentes-policiales-reap-bolivia-2026',
    titleEs: 'Cómo sacar el Certificado de Antecedentes Policiales (REAP) en Bolivia 2026',
    titleEn: 'How to get the Police Background Certificate (REAP) in Bolivia 2026',
    excerptEs: 'Guía completa para obtener el Registro de Antecedentes Policiales (REAP) en Bolivia. Requisitos, costo aproximado, paso a paso presencial y en línea, vigencia del certificado y para qué trámites se requiere.',
    excerptEn: 'Complete guide to get the Police Background Record (REAP) in Bolivia. Requirements, approximate cost, in-person and online step-by-step, certificate validity, and which procedures require it.',
    contentEs: `### Guía Completa: Antecedentes Policiales (REAP) Bolivia 2026

El **Registro de Antecedentes Policiales (REAP)**, también conocido como **Certificado de Antecedentes Policiales**, es un documento que certifica si una persona tiene o no registros de infracciones o delitos en la base de datos de la Policía Boliviana.

Este certificado es requerido para:
- Postular a un empleo (especialmente en el sector público)
- Ingresar a instituciones educativas militares o policiales
- Trámites migratorios en algunos países
- Adopción y tenencia de menores
- Obtención de licencias especiales

---

#### Costo y vigencia

| Concepto | Detalle |
|----------|---------|
| **Costo** | Bs 30 — 50 (según la unidad policial) |
| **Vigencia** | 6 meses desde la fecha de emisión |
| **Validez** | Nacional |

---

#### Requisitos

- Cédula de Identidad original y copia
- Certificado de domicilio (opcional, según la unidad)
- Dos fotografías 4x4 fondo blanco (en algunas unidades)
- Pago en efectivo (directamente en la unidad policial)

---

#### Paso a paso presencial

1. **Acude a la FELCC (Fuerza Especial de Lucha Contra el Crimen)** de tu departamento o a cualquier unidad policial habilitada
2. **Solicita el "Certificado de Antecedentes Policiales"**
3. **Presenta tu Cédula de Identidad** original y copia
4. **Paga el arancel** (Bs 30 — 50 según la unidad)
5. **Toma de huellas dactilares** (en algunos casos)
6. **Espera la verificación** en la base de datos
7. **Recibe tu certificado** de forma inmediata

**Tiempo de entrega:** El certificado se entrega **el mismo día**, generalmente en 15 a 30 minutos.

---

#### ¿Se puede solicitar en línea?

Actualmente, el REAP **no tiene un sistema en línea** completamente implementado a nivel nacional. Debes acudir personalmente a la unidad policial.

Sin embargo, la **Policía Boliviana** está trabajando en un sistema digital para consultas en línea. Verifica el estado actual en la página oficial de la Policía Boliviana.

---

#### Principales unidades donde tramitarlo

| Ciudad | Unidad |
|--------|--------|
| **La Paz** | FELCC — Av. Arce esq. Goitia |
| **El Alto** | FELCC — Av. Juan Pablo II |
| **Santa Cruz** | FELCC — Av. Santos Dumont |
| **Cochabamba** | FELCC — Av. Heroínas |
| **Sucre** | FELCC — Calle Bolívar |
| **Oruro** | FELCC — Av. 6 de Octubre |
| **Potosí** | FELCC — Calle Bustillos |

---

#### Preguntas Frecuentes

**¿El REAP es lo mismo que los antecedentes penales?**
No. El REAP registra faltas e infracciones policiales, mientras que los antecedentes penales registran sentencias judiciales firmes.

**¿Si tengo antecedentes policiales, puedo trabajar?**
Depende del empleador. Algunas empresas solicitan el certificado solo para verificar tu historial, pero no todas descartan automáticamente a personas con antecedentes.

**¿Por cuánto tiempo es válido?**
El certificado tiene una vigencia de **6 meses**. Después de ese período, debes solicitar uno nuevo.

**¿Puede solicitarlo un extranjero?**
Sí. Los extranjeros residentes en Bolivia también pueden solicitar su certificado de antecedentes policiales presentando su Cédula de Identidad de Extranjero.

**¿El certificado tiene algún costo adicional?**
El arancel es el único costo. No hay cargos ocultos.

---

> Esta guía fue actualizada en julio de 2026. Los costos pueden variar según la unidad policial. Verifica siempre en la unidad más cercana.`,
    contentEn: `### Complete Guide: Police Background Certificate (REAP) Bolivia 2026

The **REAP (Police Background Record)** certifies whether a person has police records in Bolivia. Required for job applications, educational institutions, and migration procedures.

**Cost:** Bs 30-50
**Validity:** 6 months

**Requirements:** ID card (original and copy), two 4x4 photos (in some units).

**Process (in-person only):**
1. Visit the nearest FELCC office
2. Request the certificate
3. Present your ID and pay the fee
4. Wait 15-30 minutes
5. Receive the certificate same day

**Note:** The REAP is different from criminal background records (antecedentes penales). Police record = minor offenses; criminal record = court sentences.

For more info: Visit your nearest FELCC office.`,
    date: '2026-07-24',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop',
    imageCaption: 'Policía Boliviana. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: false,
    views: 1
  },
{
    id: '87',
    contentType: 'analysis',
    slug: 'guia-antecedentes-penales-bolivia-2026',
    titleEs: 'Cómo sacar el Certificado de Antecedentes Penales en Bolivia 2026',
    titleEn: 'How to get the Criminal Background Certificate in Bolivia 2026',
    excerptEs: 'Guía completa para obtener el Certificado de Antecedentes Penales en Bolivia. Emitido por el Tribunal Departamental de Justicia, requisitos, costo, paso a paso presencial, vigencia del documento y para qué trámites se requiere.',
    excerptEn: 'Complete guide to get the Criminal Background Certificate in Bolivia. Issued by the Departmental Court of Justice, requirements, cost, in-person step-by-step, validity, and which procedures require it.',
    contentEs: `### Guía Completa: Antecedentes Penales Bolivia 2026

El **Certificado de Antecedentes Penales** es un documento oficial emitido por el **Tribunal Departamental de Justicia** que certifica si una persona tiene o no sentencias condenatorias ejecutoriadas registradas en su contra.

Este certificado NO incluye:
- Infracciones de tránsito
- Faltas policiales
- Denuncias sin sentencia
- Procesos en curso

---

#### Costo y vigencia

| Concepto | Detalle |
|----------|---------|
| **Costo** | Bs 30 — 50 (según el departamento) |
| **Vigencia** | 6 meses desde la fecha de emisión |
| **Validez** | Nacional |
| **Tiempo de entrega** | Inmediato (mismo día) |

---

#### Requisitos

- Cédula de Identidad original y copia
- Formulario de solicitud (se llena en la ventanilla)
- Pago en efectivo (Bs 30 — 50)

---

#### Paso a paso

1. **Acude al Tribunal Departamental de Justicia** de tu ciudad
2. **Dirígete a la ventanilla de "Antecedentes Penales"** o "Certificados"
3. **Solicita el formulario** de solicitud de antecedentes penales
4. **Llena el formulario** con tus datos personales
5. **Presenta tu Cédula de Identidad** (original para verificación, copia para el archivo)
6. **Paga el arancel** en la caja del tribunal o en el Banco Unión (según el departamento)
7. **Espera la verificación** en el sistema
8. **Recibe tu certificado** impreso y firmado

---

#### Dónde tramitarlo por departamento

| Ciudad | Dirección del Tribunal de Justicia |
|--------|-----------------------------------|
| **La Paz** | Calle Colón esq. Indaburo |
| **El Alto** | Av. Juan Pablo II N° 200 |
| **Santa Cruz** | Av. Irala esq. Av. Santos Dumont |
| **Cochabamba** | Calle 25 de Mayo esq. Heroínas |
| **Sucre** | Calle Ravelo N° 1 |
| **Oruro** | Calle Bolívar esq. Adolfo Mier |
| **Potosí** | Calle Bustillos esq. Sucre |
| **Tarija** | Calle La Madrid esq. Suipacha |
| **Trinidad** | Av. 6 de Agosto esq. Avaroa |
| **Cobija** | Av. 9 de Febrero |

---

#### ¿Hay sistema en línea?

Actualmente, la mayoría de los Tribunales Departamentales de Justicia **no ofrecen este trámite completamente en línea**. Debes acudir presencialmente.

Sin embargo, algunos tribunales están implementando sistemas de consulta en línea. Verifica en la página web del Tribunal Departamental de Justicia de tu departamento.

---

#### Diferencias clave: Antecedentes Penales vs. Policiales

| Característica | Antecedentes Penales | Antecedentes Policiales (REAP) |
|----------------|---------------------|-------------------------------|
| **Emitido por** | Tribunal de Justicia | Policía Boliviana (FELCC) |
| **Registra** | Sentencias judiciales firmes | Faltas e infracciones policiales |
| **Costo** | Bs 30 — 50 | Bs 30 — 50 |
| **Vigencia** | 6 meses | 6 meses |
| **Se necesita para** | Trabajo en sector público, adopción | Empleo general, ingreso a instituciones |

En muchos trámites (como postulaciones a cargos públicos o adopciones) te pedirán **ambos** certificados.

---

#### Preguntas Frecuentes

**¿Los antecedentes penales incluyen delitos de tránsito?**
Solo si hubo una sentencia condenatoria firme por un delito de tránsito (homicidio culposo, por ejemplo). Las multas de tránsito no aparecen.

**¿Si tengo una denuncia pero no fui condenado, aparece?**
No. El certificado solo registra sentencias condenatorias ejecutoriadas. Las denuncias sin sentencia no aparecen.

**¿Cuánto tiempo quedan los antecedentes en el registro?**
Depende del delito. Una vez cumplida la condena y extinguida la responsabilidad penal, los antecedentes pueden ser cancelados mediante un trámite judicial específico.

**¿Un extranjero puede solicitar antecedentes penales en Bolivia?**
Sí, presentando su Cédula de Identidad de Extranjero o pasaporte con visa vigente.

**¿Sirve para apostilla?**
Sí. Si necesitas el certificado para trámites en el exterior, puedes apostillarlo en el Ministerio de Relaciones Exteriores.

---

> Esta guía fue actualizada en julio de 2026. Los costos pueden variar según el departamento. Verifica siempre en tu Tribunal Departamental de Justicia.`,
    contentEn: `### Complete Guide: Criminal Background Certificate Bolivia 2026

The **Criminal Background Certificate** is issued by the **Departmental Court of Justice**. It certifies whether a person has final criminal convictions.

**Cost:** Bs 30-50
**Validity:** 6 months

**Requirements:** ID card (original and copy), application form, payment.

**Process:**
1. Visit the Departmental Court of Justice in your city
2. Request the application form at the "Criminal Records" window
3. Fill in your personal information
4. Pay the fee and submit your ID
5. Receive the certificate same day

**Key difference from REAP:** Criminal records = court sentences; Police records (REAP) = police infractions. Many official procedures require BOTH certificates.

For more info: Visit your nearest Departmental Court of Justice.`,
    date: '2026-07-24',
    readTimeEs: '6 min de lectura',
    readTimeEn: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=630&fit=crop',
    imageCaption: 'Tribunal de Justicia. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: false,
    views: 1
  },
{
    id: '88',
    contentType: 'analysis',
    slug: 'guia-visa-bolivia-extranjeros-2026',
    titleEs: 'Visa para Bolivia 2026 — Requisitos, tipos y cómo tramitarla para extranjeros',
    titleEn: 'Visa for Bolivia 2026 — Requirements, types and how to apply for foreigners',
    excerptEs: 'Guía completa de visas para extranjeros que desean viajar o residir en Bolivia. Tipos de visa (turista, negocios, residencia), requisitos por país de origen, costos actualizados, paso a paso del trámite consular, prórroga de estadía y cómo regularizar tu situación migratoria.',
    excerptEn: 'Complete visa guide for foreigners wanting to travel or reside in Bolivia. Visa types (tourist, business, residency), requirements by country of origin, updated costs, step-by-step consular process, stay extension, and how to regularize your immigration status.',
    contentEs: `### Guía Completa: Visa para Bolivia 2026

La **visa para Bolivia** es el documento que autoriza a un extranjero a ingresar y permanecer en el país por un período determinado. Los requisitos varían según el país de origen del solicitante y el tipo de visa.

---

#### ¿Quiénes NO necesitan visa para Bolivia?

Los ciudadanos de los siguientes países pueden ingresar a Bolivia **sin visa** por hasta **90 días** por motivos turísticos:

**América:** Argentina, Brasil, Colombia, Chile, Ecuador, Paraguay, Perú, Uruguay, Costa Rica, Panamá, México
**Europa:** Todos los países del Espacio Schengen, Reino Unido, Irlanda
**Asia:** Japón, Corea del Sur, Israel, Emiratos Árabes Unidos
**Oceanía:** Australia, Nueva Zelanda

---

#### Tipos de visa

| Tipo | Descripción | Vigencia | Costo (USD) |
|------|-------------|----------|-------------|
| **Turista** | Viajes de placer, visitas familiares | Hasta 90 días | Gratuita — $30 |
| **Negocios** | Actividades comerciales, reuniones | Hasta 90 días | $30 — $60 |
| **Estudiante** | Cursos, intercambios académicos | 1 año | $30 — $50 |
| **Trabajo** | Contrato laboral en Bolivia | 1 año (renovable) | $50 — $100 |
| **Residencia Temporal** | Radicación en Bolivia | 2 años | $100 — $200 |
| **Residencia Permanente** | Radicación definitiva | Indefinida | $200 — $400 |
| **Transbordo** | Escala técnica en aeropuerto | 72 horas | Gratuita |

---

#### Ciudadanos que SÍ necesitan visa

Los ciudadanos de los siguientes países **deben solicitar visa** antes de viajar a Bolivia:

- **Asia:** China, India, Indonesia, Filipinas, Vietnam, Tailandia (excepto Japón, Corea del Sur, Israel, EAU)
- **África:** Todos los países africanos
- **América:** Cuba, Haití, República Dominicana (excepto los listados como exentos)
- **Oceanía:** Fiyi, Papúa Nueva Guinea (excepto Australia, Nueva Zelanda)

> Para verificar si tu país requiere visa, consulta la página oficial del **Ministerio de Relaciones Exteriores de Bolivia**.

---

#### Requisitos para visa de turista (países que SÍ requieren visa)

- Pasaporte original con vigencia mínima de 6 meses
- Formulario de solicitud de visa (completado y firmado)
- Dos fotografías 4x4 fondo blanco
- Itinerario de viaje (reservas de vuelo y hotel)
- Certificado de vacunación contra la fiebre amarilla
- Comprobante de solvencia económica (extracto bancario de los últimos 3 meses)
- Carta de invitación (si aplica)
- Pago de la tarifa consular
- Entrevista consular (en algunos casos)

---

#### Paso a paso para solicitar visa

**Opción 1: En el consulado boliviano en tu país**

1. **Agenda una cita** en el Consulado o Embajada de Bolivia más cercana
2. **Reúne todos los documentos** requeridos según tu tipo de visa
3. **Presenta tu solicitud** en la fecha de la cita
4. **Paga la tarifa consular** según el tipo de visa
5. **Espera la resolución** (3 a 15 días hábiles según el tipo)
6. **Retira tu visa** en el consulado o recíbela por correo

**Opción 2: Visa a la llegada (solo para países específicos)**

Algunos ciudadanos (verificar en Migración Bolivia) pueden obtener visa a la llegada en aeropuertos internacionales de Bolivia:

1. **Llega al aeropuerto** (El Alto, Viru Viru, Cochabamba)
2. **Dirígete a la ventanilla de "Visa on Arrival"** antes de pasar migraciones
3. **Presenta los documentos** y paga la tarifa en efectivo (USD)
4. **Recibe tu visa** en el momento

---

#### Costos de visa (USD)

| Tipo de visa | Costo (USD) |
|-------------|------------|
| Turista (países con visa) | $30 |
| Negocios | $60 |
| Estudiante | $50 |
| Trabajo | $100 |
| Residencia Temporal | $200 |
| Residencia Permanente | $400 |
| Prórroga de estadía (por mes) | $20 |

> Los pagos se realizan en efectivo (USD) en el consulado o en el punto de entrada.

---

#### Prórroga de estadía

Si estás en Bolivia con visa de turista y deseas quedarte más tiempo:

1. Acude a la **Dirección General de Migración** antes del vencimiento de tu estadía
2. Solicita la prórroga presentando tu pasaporte
3. Paga $20 por cada mes adicional (máximo 90 días adicionales)
4. Recibe la autorización de estadía extendida

**Importante:** No excedas tu tiempo de estadía. La multa por permanencia ilegal es de aproximadamente $5 por día de exceso.

---

#### Regularización migratoria

Si ingresaste a Bolivia sin los documentos correctos o tu visa venció:

1. Acude a la **Dirección General de Migración** (La Paz, Av. Copacabana)
2. Solicita la **regularización migratoria**
3. Presenta tu pasaporte y documentos de respaldo
4. Paga las multas correspondientes
5. Solicita el tipo de visa que corresponda a tu situación

---

#### Preguntas Frecuentes

**¿Puedo trabajar en Bolivia con visa de turista?**
No. La visa de turista no autoriza a trabajar. Necesitas una visa de trabajo o residencia con permiso laboral.

**¿Cuánto tiempo puedo quedarme sin visa?**
Hasta 90 días si eres ciudadano de un país exento. Al ingresar, el oficial de migración te sellará el pasaporte con el tiempo autorizado.

**¿Puedo extender mi visa de turista?**
Sí, por períodos adicionales de hasta 90 días, pagando $20 por mes en Migración.

**¿Necesito visa para hacer turismo si soy de Argentina?**
No. Los ciudadanos argentinos pueden ingresar solo con su Documento Nacional de Identidad (DNI).

**¿Qué pasa si mi visa es rechazada?**
Puedes apelar la decisión o volver a aplicar con documentos adicionales que respalden tu solicitud.

**¿Los niños necesitan visa?**
Sí. Todo extranjero, sin importar la edad, debe cumplir con los requisitos migratorios. Los niños deben presentar su propio pasaporte.

---

> Esta guía fue actualizada en julio de 2026. Los requisitos y costos pueden variar. Verifica siempre en la página oficial del Ministerio de Relaciones Exteriores de Bolivia o en el consulado boliviano más cercano.`,
    contentEn: `### Complete Guide: Visa for Bolivia 2026

**Visa-exempt countries (up to 90 days):** Argentina, Brazil, Colombia, Chile, Ecuador, Paraguay, Peru, Uruguay, Costa Rica, Panama, Mexico, Schengen countries, UK, Ireland, Japan, South Korea, Israel, UAE, Australia, New Zealand.

**Visa types and costs (USD):**
- Tourist: Free — $30
- Business: $60
- Student: $50
- Work: $100
- Temporary residency: $200
- Permanent residency: $400

**Requirements (for countries that need a visa):** Valid passport (6+ months), application form, two 4x4 photos, travel itinerary, yellow fever vaccine certificate, bank statements, consular fee.

**Process:** Apply at the nearest Bolivian consulate. Approval takes 3-15 business days. Some nationalities can get a visa on arrival at Bolivian airports.

**Stay extension:** $20 per additional month (up to 90 extra days) at the Immigration Office.

For more info: https://www.migracion.gob.bo`,
    date: '2026-07-24',
    readTimeEs: '8 min de lectura',
    readTimeEn: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1454923634634-bd1614829e1b?w=1200&h=630&fit=crop',
    imageCaption: 'Sellos de pasaporte. Foto: Unsplash',
    categoryEs: 'Guías y Trámites',
    categoryEn: 'Guides & Procedures',
    enableComments: true,
    featured: false,
    views: 1
  }
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
