/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, CaseStudy, TimelineEvent, Testimonial, Certificate } from './types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    period: '2021 - Jul 2026',
    company: 'Bolivia TV (Canal Estatal)',
    roleEs: 'Camarógrafo editor archivo / Responsable de los archivos del área de prensa',
    roleEn: 'Cameraman Video Editor Archive / Head of Press Area Archives',
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
    roleEs: 'Camarógrafo Editor',
    roleEn: 'Cameraman Editor',
    descriptionEs: 'Camarógrafo editor en el programa "Que no me Pierda" (función principal) y también en el noticiero central "Notivisión". Cobertura de exteriores y edición de notas periodísticas.',
    descriptionEn: 'Cameraman editor for the show "Que no me Pierda" (main role) and also for the central news program "Notivisión". Field coverage and news editing.',
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
    company: 'RTP - Radio Difusoras Populares S.A. (Canal 4)',
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
    name: 'Abya Yala TV (16/09/2019)',
    roleEs: 'Memorándum de Felicitación',
    roleEn: 'Commendation Memorandum',
    companyEs: 'Claudia Espinoza I. (Gerente General)',
    companyEn: 'Claudia Espinoza I. (General Manager)',
    textEs: 'Felicitación por el reportaje "LA LEY DEL CUERPO", ganador del XI Concurso de reportajes periodísticos (Fundación Viva y Católicas por el Derecho a Decidir). Cargo: Camarógrafo - Editor.',
    textEn: 'Congratulations for the report "LA LEY DEL CUERPO", winner of the XI Journalism Report Contest (Viva Foundation and Católicas por el Derecho a Decidir). Position: Cameraman - Editor.'
  },
  {
    id: '2',
    name: 'Abya Yala TV (01/02/2019)',
    roleEs: 'Memorándum de Felicitación',
    roleEn: 'Commendation Memorandum',
    companyEs: 'Claudia Espinoza I. (Gerente General)',
    companyEn: 'Claudia Espinoza I. (General Manager)',
    textEs: 'Felicitación por el "Premio Plurinacional Eduardo Abaroa 2017" al mejor Reportaje Televisivo por "La Estrella" y reconocimiento a la participación en la serie documental "Médicos en el Tipnis" con Prensa Latina. Cargo: Camarógrafo - Editor.',
    textEn: 'Congratulations for the "2017 Eduardo Abaroa National Award" for Best Television Report for "La Estrella" and recognition for participation in the documentary series "Médicos en el Tipnis" with Prensa Latina. Position: Cameraman - Editor.'
  },
  {
    id: '3',
    name: 'RTP (29/09/2015)',
    roleEs: 'Memorándum de Agradecimiento y Felicitación',
    roleEn: 'Thanks and Commendation Memorandum',
    companyEs: 'Jorge Luis Palenque M. (Gerente General a.i.) y Claudia Benítez A. (Gerente Adm. Financiera)',
    companyEn: 'Jorge Luis Palenque M. (Acting General Manager) and Claudia Benítez A. (Financial Admin Manager)',
    textEs: 'Agradecimiento por el valioso aporte en la transmisión del REFERÉNDUM 2015. REF: JRR.HH.FEL 007/2015. Cargo: Camarógrafo Editor.',
    textEn: 'Gratitude for the valuable contribution in the broadcast of the 2015 REFERENDUM. REF: JRR.HH.FEL 007/2015. Position: Cameraman Editor.'
  },
  {
    id: '4',
    name: 'RTP (23/06/2015)',
    roleEs: 'Memorándum de Agradecimiento y Felicitación',
    roleEn: 'Thanks and Commendation Memorandum',
    companyEs: 'Fernando Pérez F. de Córdova (Gerente General)',
    companyEn: 'Fernando Pérez F. de Córdova (General Manager)',
    textEs: 'Felicitación por el compromiso en la producción y transmisión del Año Nuevo Andino Amazónico / Cobertura de prensa del 21 de junio. REF: JRR.HH.FEL 004/2015. Cargo: Camarógrafo Editor.',
    textEn: 'Congratulations for the commitment in the production and broadcast of the Andean Amazon New Year / Press coverage of June 21. REF: JRR.HH.FEL 004/2015. Position: Cameraman Editor.'
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
  },
  {
    id: '11',
    titleEs: 'Replit Level 1 - Beginner Builder',
    titleEn: 'Replit Level 1 - Beginner Builder',
    issuer: 'Replit',
    year: '2026',
    isPrimary: false,
    credentialUrl: 'https://replit-certifications.replit.app/FreddyTicona'
  },
  {
    id: '12',
    titleEs: 'Formación Python, Data Science en OCI y Oracle Analytics',
    titleEn: 'Python, Data Science on OCI & Oracle Analytics',
    issuer: 'Alura Latam - Oracle Next Education (ONE)',
    year: '2023',
    isPrimary: false,
    credentialUrl: 'https://app.aluracursos.com/degree/certificate/746123df-9db1-4c81-80c7-8a3d661103ae'
  },
  {
    id: '13',
    titleEs: 'Introduction to Cybersecurity',
    titleEn: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    year: '2021',
    isPrimary: false
  },
  {
    id: '14',
    titleEs: 'IT Essentials',
    titleEn: 'IT Essentials',
    issuer: 'Cisco',
    year: '2021',
    isPrimary: false
  },
  {
    id: '15',
    titleEs: 'Introducción al Desarrollo Web I',
    titleEn: 'Introduction to Web Development I',
    issuer: 'Google Actívate',
    year: '2020',
    isPrimary: false,
    credentialUrl: 'https://learndigital.withgoogle.com/activate/validate-certificate-code'
  },
  {
    id: '16',
    titleEs: 'Desarrollo de Apps Móviles',
    titleEn: 'Mobile App Development',
    issuer: 'Google',
    year: '2020',
    isPrimary: false
  },
  {
    id: '17',
    titleEs: 'Programming Foundations with JavaScript, HTML and CSS',
    titleEn: 'Programming Foundations with JavaScript, HTML and CSS',
    issuer: 'Coursera (Duke University)',
    year: '2020',
    isPrimary: false,
    credentialUrl: 'https://coursera.org/verify'
  },
  {
    id: '18',
    titleEs: 'Diseñando páginas web con Bootstrap 4',
    titleEn: 'Web Design with Bootstrap 4',
    issuer: 'Coursera',
    year: '2020',
    isPrimary: false
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'world-atomic-week-2025',
    title: 'World Atomic Week 2025 — Foro Internacional de la Industria Nuclear (Moscú)',
    titleEn: 'World Atomic Week 2025 — International Nuclear Industry Forum (Moscow)',
    category: 'cobertura-int',
    categoryLabelEs: 'Cobertura Internacional',
    categoryLabelEn: 'International Coverage',
    roleEs: 'Camarógrafo, Editor Post Productor, Corresponsal',
    roleEn: 'Cameraman, Editor Post Producer, Correspondent',
    year: '2025',
    clientEs: 'Empresa Estatal de Televisión Bolivia TV — Cobertura Internacional Moscú, Rusia',
    clientEn: 'Empresa Estatal de Televisión Bolivia TV — International Coverage Moscow, Russia',
    descriptionEs: 'Cobertura del foro internacional World Atomic Week 2025, el mayor evento dedicado a la industria nuclear y afines, celebrado en Moscú en el VDNKh. El foro conmemoró el 80.º aniversario de la industria nuclear rusa y contó con la presencia de representantes de los líderes de los países que desarrollan programas nucleares, destacados expertos mundiales y directivos de grandes empresas. Del 25 al 28 de septiembre de 2025.',
    descriptionEn: 'Coverage of the World Atomic Week 2025 international forum, the largest event dedicated to the nuclear industry and related fields, held in Moscow at VDNKh. The forum commemorated the 80th anniversary of the Russian nuclear industry and featured representatives from leading countries developing nuclear programs, top global experts, and senior executives from major corporations. September 25-28, 2025.',
    imageUrl: 'https://img.youtube.com/vi/6CL4rVpVOYU/hqdefault.jpg',
    images: [
      'https://img.youtube.com/vi/6CL4rVpVOYU/hqdefault.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/6CL4rVpVOYU',
    techDetailsEs: ['Cámara Sony FX9', 'Lentes Prime', 'Micrófonos de Ambiente y Lavalier', 'Producción de Campo Internacional'],
    techDetailsEn: ['Sony FX9 Camera', 'Prime Lenses', 'Ambient and Lavalier Microphones', 'International Field Production']
  },
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

export const caseStudies: Record<string, CaseStudy> = {};


export const translations = {
  es: {
    navHome: 'Inicio',
    navAbout: 'Sobre Mí',
    navPortfolio: 'Portafolio',
    navCv: 'CV / Trayectoria',
    navBlog: 'Blog',
    navNews: 'Noticias',
    navGuides: 'Guías',
    navContact: 'Contacto',

    heroTitle: 'Freddy Ticona Guzmán',
    heroSubtitle: 'Camarógrafo, Editor y Realizador Audiovisual',
    heroSlogan: 'Contando historias a través del lente, con la precisión del periodismo y la estética del cine.',
    heroExperience: '15+ Años de Experiencia',
    heroAwardBadge: 'Premio Nacional Eduardo Abaroa 2017',
    heroCtaPortfolio: 'Ver Portafolio',
    heroCtaCv: 'Ver CV Completo',
    heroShowreelTitle: 'Audiovisual Showreel',

    showreelPageTitle: 'Showreel | Camarógrafo Freddy Ticona | Filmación en Bolivia',
    showreelPageEyebrow: 'Showreel 2026',
    showreelPageHeading: 'Showreel Audiovisual Profesional',
    showreelPageLead: 'Selección de lo mejor de más de 15 años de carrera: documentales, cobertura periodística en primera línea, producciones televisivas y proyectos internacionales.',
    showreelPageCtaPortfolio: 'Ver Portafolio Completo',
    showreelPageMetaTitle: 'Showreel Audiovisual | Freddy Ticona Camarógrafo Bolivia',
    showreelPageMetaDesc: 'Showreel profesional de Freddy Ticona Guzmán: documentales, cobertura periodística y producciones televisivas en Bolivia. Más de 15 años de experiencia en filmación 4K.',

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
    specCamDesc: 'Operación avanzada de cámaras profesionales Full HD (Nikon D5100 y cámara secundaria Nikon), con experiencia en cámaras de cine digital y transmisión de televisión (Sony FX9/FS7, Panasonic PX270, RED). Composición precisa e iluminación cinematográfica en exteriores e interiores.',
    specEditTitle: 'Montaje y Post-Producción',
    specEditDesc: 'Edición ágil de reportajes de investigación y documentales de largo aliento. Dominio experto de Adobe Premiere Pro, Avid Media Composer y DaVinci Resolve para un flujo de color y sonido óptimo.',
    specTechTitle: 'Flujos IP y Ciberseguridad',
    specTechDesc: 'Configuración y monitoreo de sistemas de transmisión en vivo (LiveU, satélite), optimización de flujos de trabajo de ingesta digital, redes audiovisuales IP y protocolos de seguridad de la información en medios.',

    timelineTitle: 'Línea de Tiempo Profesional',
    timelineSubtitle: 'Más de una década documentando la historia de Bolivia en las principales redes televisivas del país.',

    testimonialsTitle: 'Memorándums de Felicitación',
    testimonialsSubtitle: 'Reconocimientos oficiales emitidos por los directorios y gerencias de los canales nacionales de televisión de Bolivia.',

    portfolioTitle: 'Coberturas y Documentales',
    portfolioSubtitle: 'Fotografías de los trabajos periodísticos, documentales y coberturas realizados a lo largo de más de 15 años de trayectoria televisiva.',
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

    cvPrint: 'Imprimir Currículum',
    cvAcademicTitle: 'Formación Académica',
    cvCertificationsTitle: 'Certificaciones Especializadas',
    cvCertificationsSubtitle: 'Haga clic en las categorías para desplegar certificaciones y cursos adicionales.',
    cvShowMoreCerts: 'Ver más certificaciones y cursos especializados',
    cvShowLessCerts: 'Colapsar certificaciones adicionales',
    cvAwardsTitle: 'Premios, Distinciones y Memorandos',
    cvAwardAbaroaTitle: 'Premio Plurinacional Eduardo Abaroa 2017',
    cvAwardAbaroaDesc: 'Mejor reportaje para televisión con la obra "La Estrella" (Televisión - Periodismo Cultural). Otorgado por el Ministerio de Culturas y Turismo del Estado Plurinacional de Bolivia. Galardonados: Odalys Sarai Amoros Ramos y Freddy Ticona Guzman. Fecha: 23/03/2018. La Paz, Bolivia.',
    cvMemoBtv2024Title: 'Memorándum de Felicitación – Bolivia TV (05/07/2024)',
    cvMemoBtv2024Desc: 'CITE: GCIA. GRAL. FL. N° 260/2024. Emisor: Lic. Julio Fernando Valdivia Rodríguez (Gerente General). Motivo: Felicitación por el excelente desempeño en la cobertura del golpe de Estado fallido del 26 de junio de 2024, en defensa de la democracia.',
    cvMemoBtv2022Title: 'Memorándum de Felicitación – Bolivia TV (06/12/2022)',
    cvMemoBtv2022Desc: 'CITE: GCIA. GRAL. FL. N° 108/2022. Emisor: Lic. Julio Fernando Valdivia Rodríguez (Gerente General a.i.). Motivo: Felicitación por el compromiso y capacidad profesional en la cobertura especial de los hechos de octubre-noviembre 2022 en Santa Cruz.',
    cvMemoBtv2021Title: 'Memorándum de Felicitación – Bolivia TV (20/08/2021)',
    cvMemoBtv2021Desc: 'CITE: GCIA. GRAL. FL. N° 027/2021. Emisor: Lic. Rocio Alejandra Molina Travesi (Gerente General). Motivo: Felicitación por la labor en la cobertura del Aniversario de la Independencia de Bolivia (196 Años), 5-6/08/2021 en La Paz.',

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
    navGuides: 'Guides',
    navContact: 'Contact',

    heroTitle: 'Freddy Ticona Guzmán',
    heroSubtitle: 'Cameraman, Video Editor & Audiovisual Producer',
    heroSlogan: 'Telling profound stories through the lens, with journalistic accuracy and cinematic beauty.',
    heroExperience: '15+ Years of Experience',
    heroAwardBadge: '2017 Eduardo Abaroa National Award',
    heroCtaPortfolio: 'View Portfolio',
    heroCtaCv: 'View Full CV',
    heroShowreelTitle: 'Audiovisual Showreel',

    showreelPageTitle: 'Showreel | Cameraman Freddy Ticona | Filming in Bolivia',
    showreelPageEyebrow: '2026 Showreel',
    showreelPageHeading: 'Professional Audiovisual Showreel',
    showreelPageLead: 'A selection of the best from over 15 years of career: documentaries, frontline journalistic coverage, TV productions and international projects.',
    showreelPageCtaPortfolio: 'View Full Portfolio',
    showreelPageMetaTitle: 'Audiovisual Showreel | Freddy Ticona Cameraman Bolivia',
    showreelPageMetaDesc: 'Professional showreel by Freddy Ticona Guzmán: documentaries, journalistic coverage and TV productions in Bolivia. More than 15 years of 4K filming experience.',

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
    specCamDesc: 'Expert command of professional Full HD cameras (Nikon D5100 and secondary Nikon body), with experience on digital cinema cameras and live broadcast gear (Sony FX9/FS7, Panasonic PX270, RED). Precise framing and outdoor/indoor cinematic lighting.',
    specEditTitle: 'Editing & Post-Production',
    specEditDesc: 'Fast-paced editing for investigative reporting and long-form cultural documentaries. High proficiency in Adobe Premiere Pro, Avid Media Composer, and DaVinci Resolve for pristine color and sound.',
    specTechTitle: 'IP Workflows & Cybersecurity',
    specTechDesc: 'Installation and monitoring of live broadcast streaming encoders (LiveU, satellite uplink), digital video asset management, IP media networks, and data information security standards.',

    timelineTitle: 'Professional Timeline',
    timelineSubtitle: 'Over a decade of documenting Bolivia\'s history across the country\'s premier TV networks.',

    testimonialsTitle: 'Commendation Memorandums',
    testimonialsSubtitle: 'Official recognitions issued by news directors and station managers of Bolivia\'s national television networks.',

    portfolioTitle: 'Coverage & Documentaries',
    portfolioSubtitle: 'Photographs of journalistic works, documentaries and coverage produced throughout more than 15 years of television experience.',
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

    cvPrint: 'Print Resume',
    cvAcademicTitle: 'Academic Education',
    cvCertificationsTitle: 'Specialized Certifications',
    cvCertificationsSubtitle: 'Click on categories to expand additional courses and certifications.',
    cvShowMoreCerts: 'View more specialized certifications and courses',
    cvShowLessCerts: 'Collapse additional certifications',
    cvAwardsTitle: 'Awards, Honours & Commendations',
    cvAwardAbaroaTitle: 'Eduardo Abaroa National Award 2017',
    cvAwardAbaroaDesc: 'Best television report for "La Estrella" (Television - Cultural Journalism). Granted by the Ministry of Cultures and Tourism of the Plurinational State of Bolivia. Awardees: Odalys Sarai Amoros Ramos and Freddy Ticona Guzman. Date: 23/03/2018. La Paz, Bolivia.',
    cvMemoBtv2024Title: 'Commendation Memorandum – Bolivia TV (05/07/2024)',
    cvMemoBtv2024Desc: 'CITE: GCIA. GRAL. FL. N° 260/2024. Issuer: Lic. Julio Fernando Valdivia Rodríguez (General Manager). Reason: Congratulations for excellent performance in covering the failed coup d\'état of June 26, 2024, in defense of democracy.',
    cvMemoBtv2022Title: 'Commendation Memorandum – Bolivia TV (06/12/2022)',
    cvMemoBtv2022Desc: 'CITE: GCIA. GRAL. FL. N° 108/2022. Issuer: Lic. Julio Fernando Valdivia Rodríguez (Acting General Manager). Reason: Congratulations for commitment and professional capacity in the special coverage of the October-November 2022 events in Santa Cruz.',
    cvMemoBtv2021Title: 'Commendation Memorandum – Bolivia TV (20/08/2021)',
    cvMemoBtv2021Desc: 'CITE: GCIA. GRAL. FL. N° 027/2021. Issuer: Lic. Rocio Alejandra Molina Travesi (General Manager). Reason: Congratulations for the work in covering the 196th Anniversary of Bolivia\'s Independence, 5-6/08/2021 in La Paz.',

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