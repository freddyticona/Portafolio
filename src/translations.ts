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
    id: 'la-estrella',
    title: 'La Estrella: Luces del Altiplano',
    titleEn: 'La Estrella: Altiplano Lights',
    category: 'documental',
    categoryLabelEs: 'Documental',
    categoryLabelEn: 'Documentary',
    roleEs: 'Director de Fotografía, Camarógrafo y Editor Principal',
    roleEn: 'Director of Photography, Cameraman, and Chief Editor',
    year: '2017',
    clientEs: 'Abya Yala Televisión / Ganador Premio Eduardo Abaroa',
    clientEn: 'Abya Yala Television / Eduardo Abaroa Award Winner',
    descriptionEs: 'Documental de periodismo cultural e investigación sobre una pequeña escuela rural a más de 4,000 metros de altura que subsiste gracias al espíritu comunitario y astronómico de su gente.',
    descriptionEn: 'Cultural journalism and investigative documentary about a small rural school at 4,000 meters above sea level that survives through the community and stellar connection of its residents.',
    imageUrl: '/images/freddy_working.webp',
    videoUrl: 'https://www.youtube.com/embed/6CL4rVpVOYU', // Showreel principal
    isCaseStudy: true,
    caseStudyId: 'la-estrella-case',
    techDetailsEs: ['Cámara Sony FS7', 'Lentes Sigma Cine Prime', 'Corrección de Color en DaVinci Resolve', 'Edición en Adobe Premiere Pro'],
    techDetailsEn: ['Sony FS7 Camera', 'Sigma Cine Prime Lenses', 'Color Grading in DaVinci Resolve', 'Edited on Adobe Premiere Pro']
  },
  {
    id: 'fiesta-urkupina',
    title: 'Urkupiña: Fé, Folclore y Devoción',
    titleEn: 'Urkupiña: Faith, Folklore and Devotion',
    category: 'cultural',
    categoryLabelEs: 'Periodismo Cultural',
    categoryLabelEn: 'Cultural Journalism',
    roleEs: 'Camarógrafo y Productor de Exteriores',
    roleEn: 'Cameraman & Field Producer',
    year: '2022',
    clientEs: 'Bolivia TV',
    clientEn: 'Bolivia TV',
    descriptionEs: 'Cobertura televisiva y documental de 30 minutos capturando los rostros, la vestimenta, los bailes y la mística de la festividad de la Virgen de Urkupiña en Quillacollo, Cochabamba.',
    descriptionEn: 'Television coverage and a 30-minute documentary capturing the faces, outfits, dances, and mysticism of the Urkupiña Virgin festival in Quillacollo, Cochabamba.',
    imageUrl: 'https://picsum.photos/seed/urkupina/800/600',
    videoUrl: 'https://www.youtube.com/embed/UmimDWaK61I', // Video 2
    techDetailsEs: ['Sony FX9', 'Gimbal DJI Ronin 2', 'Micrófonos Inalámbricos Sennheiser', 'Transmisión vía LiveU'],
    techDetailsEn: ['Sony FX9', 'DJI Ronin 2 Gimbal', 'Sennheiser Wireless Mics', 'Broadcast via LiveU']
  },
  {
    id: 'cobertura-elecciones',
    title: 'Elecciones Generales en Bolivia',
    titleEn: 'General Elections in Bolivia',
    category: 'politica',
    categoryLabelEs: 'Política',
    categoryLabelEn: 'Politics',
    roleEs: 'Camarógrafo de Unidad Móvil Principal y Coordinador Técnico',
    roleEn: 'Lead Mobile Unit Cameraman & Technical Coordinator',
    year: '2020',
    clientEs: 'Red Uno de Bolivia',
    clientEn: 'Red Uno de Bolivia',
    descriptionEs: 'Transmisión multipantalla en vivo e ininterrumpida durante más de 18 horas de jornada electoral desde los recintos de votación en la sede de gobierno, La Paz.',
    descriptionEn: 'Multi-screen live and uninterrupted transmission for more than 18 hours of election day from polling stations in La Paz government headquarters.',
    imageUrl: 'https://picsum.photos/seed/elections/800/600',
    videoUrl: 'https://www.youtube.com/embed/INagReojtOM', // Video 3
    techDetailsEs: ['Cámaras de Estudio Panasonic P2 HD', 'Sistema de Mochila de Transmisión LiveU 600', 'Intercom Harris'],
    techDetailsEn: ['Panasonic P2 HD Broadcast Cameras', 'LiveU 600 Transmission Backpacks', 'Harris Intercom System']
  },
  {
    id: 'fronteriza-chile',
    title: 'Fronteras de Integración: Bolivia-Chile',
    titleEn: 'Integration Borders: Bolivia-Chile',
    category: 'cobertura-int',
    categoryLabelEs: 'Cobertura Internacional',
    categoryLabelEn: 'International Coverage',
    roleEs: 'Enviado Especial - Camerógrafo y Co-Realizador',
    roleEn: 'Special Envoy - Cameraman & Co-Producer',
    year: '2019',
    clientEs: 'Abya Yala Televisión / Corresponsalías Unidas',
    clientEn: 'Abya Yala Television / Corresponsalías Unidas',
    descriptionEs: 'Reportaje en terreno desde la frontera de Tambo Quemado y los puertos chilenos de Arica e Iquique, documentando la vida de los transportistas de carga pesada bolivianos y el flujo comercial.',
    descriptionEn: 'On-the-ground report from the Tambo Quemado border and Arica and Iquique Chilean ports, documenting the lives of heavy-cargo Bolivian truck drivers and commercial trade flows.',
    imageUrl: 'https://picsum.photos/seed/border/800/600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techDetailsEs: ['Cámara Canon C100 Mark II', 'Lentes Zoom Canon L-Series', 'Filtros Variable ND', 'Grabador de Audio Zoom H6'],
    techDetailsEn: ['Canon C100 Mark II Camera', 'Canon L-Series Zoom Lenses', 'Variable ND Filters', 'Zoom H6 Audio Recorder']
  },
  {
    id: 'rugir-sajama',
    title: 'El Rugir del Sajama: Vida bajo la Nieve',
    titleEn: 'The Sajama Roar: Life under the Snow',
    category: 'documental',
    categoryLabelEs: 'Documental',
    categoryLabelEn: 'Documentary',
    roleEs: 'Camarógrafo de Montaña y Editor',
    roleEn: 'Mountain Cameraman & Editor',
    year: '2023',
    clientEs: 'Bolivia TV Especiales',
    clientEn: 'Bolivia TV Specials',
    descriptionEs: 'Documental de naturaleza y sociedad que retrata el impacto del cambio climático en los ganaderos de alpacas y comunidades indígenas en las faldas del volcán nevado Sajama (6,542m).',
    descriptionEn: 'Nature and society documentary depicting the climate change impact on alpaca herders and indigenous communities on the slopes of the snow-capped Sajama volcano (6,542m).',
    imageUrl: 'https://picsum.photos/seed/sajama/800/600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    isCaseStudy: true,
    caseStudyId: 'rugir-sajama-case',
    techDetailsEs: ['Cámara Sony FX6', 'Dron DJI Mavic 3 Pro', 'Estabilización de Temperatura de Baterías', 'Lentes Cine Laowa'],
    techDetailsEn: ['Sony FX6 Camera', 'DJI Mavic 3 Pro Drone', 'Battery Temperature Insulation', 'Laowa Cine Lenses']
  },
  {
    id: 'mineros-cerro-rico',
    title: 'Sombra y Plata: Mineros de Potosí',
    titleEn: 'Shadow and Silver: Miners of Potosi',
    category: 'documental',
    categoryLabelEs: 'Documental',
    categoryLabelEn: 'Documentary',
    roleEs: 'Camarógrafo de Socavón y Colorista',
    roleEn: 'Underground Cameraman & Colorist',
    year: '2018',
    clientEs: 'Producción Independiente',
    clientEn: 'Independent Production',
    descriptionEs: 'Inmersión visual a más de 300 metros bajo tierra en los socavones del Cerro Rico de Potosí. Registro en condiciones extremas de humedad, calor y suspensión de polvillo mineral.',
    descriptionEn: 'A visual immersion over 300 meters underground in the mineshafts of Potosi\'s Cerro Rico. Recorded in extreme conditions of humidity, heat, and suspended mineral dust.',
    imageUrl: '/images/freddy_studio.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techDetailsEs: ['Sony A7S II (Gran desempeño en luz baja)', 'Lentes Prime f/1.4', 'Protección Neumática contra Polvo Silíceo', 'Antorchas LED de Alta Fidelidad de Color'],
    techDetailsEn: ['Sony A7S II (Extreme low light performance)', 'Prime f/1.4 Lenses', 'Pneumatic Dust Protection for Silica', 'High CRI Color LED Panels']
  },
  {
    id: 'salar-espejo',
    title: 'Salar de Uyuni: El Reflejo Cósmico',
    titleEn: 'Salar de Uyuni: Cosmic Reflection',
    category: 'cultural',
    categoryLabelEs: 'Periodismo Cultural',
    categoryLabelEn: 'Cultural Journalism',
    roleEs: 'Director, Realizador Audiovisual y Fotógrafo',
    roleEn: 'Director, Audiovisual Producer, and Photographer',
    year: '2021',
    clientEs: 'Reportajes Especiales de Abya Yala TV',
    clientEn: 'Abya Yala TV Special Features',
    descriptionEs: 'Exploración visual y fotográfica que captura la temporada de lluvias en el Salar de Uyuni, mostrando el famoso efecto de reflejo donde el cielo y la tierra se funden en una sola ilusión.',
    descriptionEn: 'A visual and photographic exploration capturing the rainy season in Salar de Uyuni, exhibiting the famous mirror effect where sky and earth merge into a single illusion.',
    imageUrl: 'https://picsum.photos/seed/salar/800/600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techDetailsEs: ['Cámara Panasonic GH5S', 'Filtros Polarizadores Circulares', 'Gimbal Ronin-S', 'Lentes Leica DG Vario-Elmarit'],
    techDetailsEn: ['Panasonic GH5S Camera', 'Circular Polarizing Filters', 'Ronin-S Gimbal', 'Leica DG Vario-Elmarit Lenses']
  },
  {
    id: 'conflictos-lapaz',
    title: 'La Paz: Periodismo en Primera Línea',
    titleEn: 'La Paz: Frontline Journalism',
    category: 'politica',
    categoryLabelEs: 'Política',
    categoryLabelEn: 'Politics',
    roleEs: 'Camarógrafo Corresponsal y Reportero Gráfico',
    roleEn: 'Correspondent Cameraman & Photojournalist',
    year: '2019',
    clientEs: 'RTP / Agencias de Prensa',
    clientEn: 'RTP / Press Agencies',
    descriptionEs: 'Registros crudos y de alta velocidad de los movimientos sociales, bloqueos y protestas en las laderas y centro histórico de La Paz. Reportaje de calle que prioriza la seguridad y la verdad informativa.',
    descriptionEn: 'Raw, high-speed footage of social movements, blockades, and protests in La Paz slopes and historic center. Street-level report prioritizing physical safety and informational truth.',
    imageUrl: 'https://picsum.photos/seed/lapaznews/800/600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    techDetailsEs: ['Cámara Eng Panasonic PX270', 'Lentes Integrados 22x Zoom', 'Casco y Chaleco de Prensa Protegidos', 'Sistemas de Transmisión Inmediata 4G'],
    techDetailsEn: ['Panasonic PX270 Eng Camera', 'Integrated 22x Zoom Lens', 'Protected News Vest & Helmet', '4G Instant Transmission Systems']
  }
];

export const caseStudies: Record<string, CaseStudy> = {
  'la-estrella-case': {
    id: 'la-estrella-case',
    title: 'La Estrella: Luces del Altiplano',
    titleEn: 'La Estrella: Altiplano Lights',
    subtitleEs: 'Ganador del Premio Plurinacional Eduardo Abaroa 2017 en Periodismo Cultural',
    subtitleEn: 'Winner of the 2017 Eduardo Abaroa National Award in Cultural Journalism',
    contextEs: 'El documental "La Estrella" nació de la inquietud de contar cómo la educación sobrevive en las regiones más remotas de Bolivia. Viajamos al Altiplano paceño, a una pequeña escuela multigrado a 4,100 msnm, donde el maestro enseñaba astronomía básica a los niños usando la cosmovisión andina tradicional y un telescopio casero.',
    contextEn: 'The documentary "La Estrella" was born from the desire to tell how education survives in Bolivia\'s most remote areas. We traveled to the La Paz high plains, visiting a tiny multigrade school at 4,100 meters, where the teacher taught basic astronomy to kids using traditional Andean star wisdom and a home-made telescope.',
    challengesEs: 'El principal desafío técnico fue el clima extremo y la altitud. Las temperaturas nocturnas caían por debajo de los -12°C, lo que congelaba las baterías de la cámara en menos de 20 minutos. Además, queríamos capturar la majestuosa bóveda celeste limpia del Altiplano y fundirla con los testimonios íntimos de los niños en condiciones de bajísima iluminación.',
    challengesEn: 'The main technical challenge was extreme weather and altitude. Nighttime temperatures plummeted below -12°C (10°F), which drained camera batteries in under 20 minutes. Moreover, we wanted to capture the majestic, crystal-clear Altiplano night sky and blend it with the intimate interviews of the children under low lighting.',
    solutionsEs: 'Aislamos térmicamente las baterías con calentadores químicos portátiles. Para las secuencias del cielo estrellado, programamos timelapses de larga exposición de 8 horas con un intervalómetro de alta precisión acoplado a una cámara Sony con sensor de gran sensibilidad ISO. Para los interiores, utilizamos iluminación LED cálida rebotada en mantas térmicas de aluminio para simular el brillo del fuego de la leña.',
    solutionsEn: 'We thermally insulated the battery packs using hand warmers and chemical heat pads. For the starry night sequences, we programmed 8-hour long-exposure timelapses with a high-precision intervalometer coupled to a Sony high-ISO sensitivity sensor camera. For interiors, we bounced warm LED fixtures off aluminum emergency blankets to mimic the golden glow of wooden fires.',
    resultEs: 'El reportaje de 20 minutos no solo conmovió a la audiencia por su valor humano, sino que fue galardonado con el Premio Nacional de Periodismo Eduardo Abaroa de Bolivia en 2017. El jurado destacó la impecable composición de encuadre, la poética de su cinematografía nocturna y la alta calidad sonora lograda en condiciones de viento extremo altiplánico.',
    resultEn: 'The 20-minute feature not only touched audiences due to its raw human value, but was crowned with Bolivia\'s prestigious National Eduardo Abaroa Journalism Award in 2017. The jury highlighted the impeccable framing composition, the poetic night cinematography, and the pristine audio clarity captured despite extreme Altiplano winds.',
    roleEs: 'Director de Fotografía, Camarógrafo de exteriores y Editor/Realizador en post-producción.',
    roleEn: 'Director of Photography, Field Cameraman, and Post-Production Lead Editor.',
    teamEs: 'Freddy Ticona (Cámara/Edición), 1 Reportero de Investigación, 1 Asistente de Sonido.',
    teamEn: 'Freddy Ticona (Camera/Editor), 1 Investigative Reporter, 1 Sound Assistant.',
    hardwareEs: ['Sony FS7', 'Cámara Sony A7S II (para timelapses nocturnos)', 'Lentes Sigma Art Cine 18-35mm T2 y 50-100mm T2', 'Soporte Sachtler FSB-8', 'Grabadora Tascam DR-70D'],
    hardwareEn: ['Sony FS7', 'Sony A7S II (for night timelapses)', 'Sigma Art Cine 18-35mm T2 & 50-100mm T2 Lenses', 'Sachtler FSB-8 Tripod System', 'Tascam DR-70D Audio Recorder'],
    softwareEs: ['Adobe Premiere Pro (Edición Offline/Online)', 'DaVinci Resolve Studio (Corrección de color)', 'Adobe Audition (Restauración de audio de viento)'],
    softwareEn: ['Adobe Premiere Pro (Offline/Online Edit)', 'DaVinci Resolve Studio (Color Grading)', 'Adobe Audition (Wind Audio Noise Restoration)'],
    awardEs: 'Premio Nacional Eduardo Abaroa 2017 (Categoría: Periodismo Cultural - Reportaje de Investigación)',
    awardEn: 'Eduardo Abaroa National Award 2017 (Category: Cultural Journalism - Investigative Report)',
    imageUrl: '/images/freddy_working.webp',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    btsImages: [
      {
        url: '/images/freddy_profile.webp',
        captionEs: 'Freddy configurando el trípode Sachtler a más de 4,000 metros de altura para el amanecer.',
        captionEn: 'Freddy setting up the Sachtler tripod system at 4,000+ meters above sea level for sunrise.'
      },
      {
        url: '/images/freddy_studio.webp',
        captionEs: 'Post-producción, corrección de color y mezcla final de audio en estudio.',
        captionEn: 'Post-production, advanced color grading, and audio mixing in the studio.'
      }
    ]
  },
  'rugir-sajama-case': {
    id: 'rugir-sajama-case',
    title: 'El Rugir del Sajama: Vida bajo la Nieve',
    titleEn: 'The Sajama Roar: Life under the Snow',
    subtitleEs: 'Desafíos de la filmación documental de alta montaña y climas árticos andinos',
    subtitleEn: 'High altitude mountain filmmaking and Andean arctic climate challenges',
    contextEs: 'Este proyecto de Bolivia TV Especiales buscaba visibilizar el retroceso glacial en el volcán nevado Sajama y cómo las familias rurales lidian con la escasez de pastizales para sus camélidos. Se requería subir a campamentos de altura superiores a los 5,200 metros para capturar el deshielo de primera mano.',
    contextEn: 'This project for Bolivia TV Specials set out to highlight glacial retreat on the snow-capped Sajama volcano and show how rural families cope with depleting grazing lands. It required ascending to high altitude camps above 5,200 meters to film melting ice sheets firsthand.',
    challengesEs: 'El desafío de supervivencia física y técnica fue masivo. Caminar cargando más de 20kg de equipo técnico con un 50% menos de oxígeno disponible provoca agotamiento inmediato. Los drones de consumo normal tienden a fallar debido a que la densidad del aire en altura reduce la sustentación de las hélices, y los cambios de temperatura condensan humedad dentro de los objetivos ópticos.',
    challengesEn: 'The physical and technical survival challenge was massive. Trekking with 20kg of gear in 50% less oxygen causes instant fatigue. Normal commercial drones often struggle because thin mountain air reduces lift, and quick temperature drops condense moisture inside lens elements.',
    solutionsEs: 'Acondicionamos hélices de alta altitud en el dron DJI Mavic 3 Pro y calibramos las curvas de velocidad de motor. Llevamos bolsas herméticas de sílice de gel para almacenar las lentes de cine FX6 al pasar de exteriores fríos a tiendas templadas, previniendo hongos y empañamiento. Usamos filtros polarizados para contrarrestar la extrema reflectividad de la nieve andina.',
    solutionsEn: 'We mounted specialized high-altitude propellers on the DJI Mavic 3 Pro and tweaked motor speed curves. Film lenses were kept in sealed dry bags with silica gel pouches when moving between frozen outdoors and warm tents, avoiding condensation and fungus. Circular polarizers were used to combat snow glare.',
    resultEs: 'El reportaje especial se emitió a nivel nacional en prime-time, logrando una altísima repercusión social y un llamado de atención de organizaciones ambientales internacionales. El material en dron de las grietas glaciares sirvió además como registro científico para el monitoreo de la pérdida de masa de nieve en Bolivia.',
    resultEn: 'The television special aired nationally during prime-time, triggering deep social resonance and triggering support from international environmental bodies. Drone footage of glacial cracks was also adopted by scientists to monitor ice mass loss in Bolivia.',
    roleEs: 'Camarógrafo de Montaña, Operador de Dron Autorizado y Editor.',
    roleEn: 'High Altitude Cameraman, Certified Drone Operator, and Lead Editor.',
    teamEs: 'Freddy Ticona (Dirección de Fotografía/Dron), 1 Periodista de Investigación.',
    teamEn: 'Freddy Ticona (DP / Drone Operator), 1 investigative journalist.',
    hardwareEs: ['Sony FX6', 'Lentes Sigma Cine Zoom 18-35mm y 50-135mm T2.9', 'Dron DJI Mavic 3 Pro (hélices especiales)', 'Filtros ND Polarpro', 'Baterías V-Mount térmicas'],
    hardwareEn: ['Sony FX6', 'Sigma Cine Zoom 18-35mm & 50-135mm T2.9 Lenses', 'DJI Mavic 3 Pro (high-altitude props)', 'Polarpro ND Filters', 'Insulated V-Mount Battery Packs'],
    softwareEs: ['Adobe Premiere Pro', 'DaVinci Resolve', 'DJI Assistant SDK'],
    softwareEn: ['Adobe Premiere Pro', 'DaVinci Resolve', 'DJI Assistant SDK'],
    imageUrl: 'https://picsum.photos/seed/sajama/800/600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    btsImages: [
      {
        url: 'https://picsum.photos/seed/bts-sajama/800/600',
        captionEs: 'La expedición avanzando por el glaciar con el equipo a cuestas.',
        captionEn: 'The expedition ascending the glacier with all technical camera equipment packed on sleds.'
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
    contentEs: '### Premio Eduardo Abaroa 2026: Récord en Premiaciones\n\nEl Ministerio de Culturas, Descolonización y Despatriarcalización entregó más de 1,3 millones de bolivianos a 79 ganadores del Premio Plurinacional Eduardo Abaroa 2026, en una ceremonia realizada en el Teatro Municipal de La Paz.\n\n#### Categorías Destacadas\n\nEn la categoría de Periodismo Cultural, el primer lugar fue otorgado al reportaje "Voces del Tipnis" de la realizadora Carmen Rojas, transmitido por Bolivia TV. El jurado destacó la calidad narrativa y la profundidad investigativa del trabajo audiovisual.\n\nEn la categoría de Cine y Producción Audiovisual, el documental "Qhipa Pacha: Tiempo Después" del colectivo Ukamau obtuvo el máximo galardón.\n\n#### Crecimiento del Fondo\n\nEl presupuesto destinado a los premios creció un 40% respecto a la gestión 2025, lo que permitió ampliar el número de categorías de 15 a 22, incluyendo nuevas áreas como producción de videojuegos y arte digital.\n\n#### La Ceremonia\n\nLa gala contó con la presencia del Ministro de Culturas y más de 500 invitados del ámbito artístico y cultural del país. La transmisión en vivo estuvo a cargo de Bolivia TV. Fuente: La Razón / ABI.',
    contentEn: '### Eduardo Abaroa Award 2026: Record Awards\n\nThe Ministry of Cultures awarded over 1.3 million bolivianos to 79 winners of the 2026 Eduardo Abaroa National Award in a ceremony held at La Paz Municipal Theater.\n\n#### Featured Categories\n\nIn Cultural Journalism, first place went to the report "Voces del Tipnis" by filmmaker Carmen Rojas, broadcast on Bolivia TV. The jury highlighted its narrative quality and investigative depth.\n\nIn Cinema and Audiovisual Production, the documentary "Qhipa Pacha: Time After" by the Ukamau collective won the top prize.\n\n#### Fund Growth\n\nThe prize budget grew 40% compared to 2025, expanding categories from 15 to 22, including new areas such as video game production and digital art.\n\n#### The Ceremony\n\nThe gala was attended by the Minister of Cultures and over 500 guests from the arts and culture sector. Live broadcast was handled by Bolivia TV. Source: La Razón / ABI.',
    date: '2026-07-11',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://picsum.photos/seed/premio-abaroa/1200/630',
    imageCaption: 'Imagen referencial — Ceremonia de premiación cultural',
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
    contentEs: '### XX Larga Noche de Museos: Una Fiesta Cultural\n\nLa vigésima edición de la Larga Noche de Museos convocó a miles de personas en La Paz y El Alto, con más de 100 espacios culturales abiertos de forma gratuita desde las 15:00 hasta la medianoche.\n\n#### Recorridos y Novedades\n\nPor primera vez, el evento incluyó estaciones de realidad virtual en el Museo Nacional de Arte y proyecciones mapping en la fachada de la Alcaldía de La Paz. El Museo San Francisco registró colas de hasta dos cuadras.\n\n#### Participación Ciudadana\n\n"Es impresionante ver a las familias apropiándose de los espacios culturales", declaró la directora de Culturas del GAMLP. Se estima que más de 80,000 personas participaron en esta versión.\n\n#### Cobertura Audiovisual\n\nLa transmisión especial requirió el despliegue de 4 equipos de cámara en distintos puntos de la ciudad, conectados a la unidad móvil central mediante transmisión IP 4G. Los desafíos incluyeron la iluminación nocturna en exteriores y la captura de audio ambiental de alta calidad en espacios con alta reverberación.\n\nFuente: La Razón.',
    contentEn: '### XX Long Night of Museums: A Cultural Celebration\n\nThe twentieth edition of the Long Night of Museums brought together thousands of people in La Paz and El Alto, with over 100 cultural spaces open for free from 3:00 PM to midnight.\n\n#### Tours and Novelties\n\nFor the first time, the event included virtual reality stations at the National Museum of Art and projection mapping on the facade of La Paz City Hall. The San Francisco Museum had lines stretching two blocks.\n\n#### Citizen Participation\n\n"It is impressive to see families taking ownership of cultural spaces," said the director of Cultures of GAMLP. An estimated 80,000 people participated in this edition.\n\n#### Audiovisual Coverage\n\nThe special broadcast required deploying 4 camera teams at different points of the city, connected to the central mobile unit via 4G IP transmission. Challenges included nighttime outdoor lighting and capturing high-quality ambient audio in spaces with high reverberation.\n\nSource: La Razón.',
    date: '2026-07-11',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://picsum.photos/seed/noche-museos/1200/630',
    imageCaption: 'Imagen referencial — Larga Noche de Museos, La Paz',
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
    contentEs: '### FENAVID 2026: Una Década de Cine Boliviano\n\nSanta Cruz de la Sierra se vistió de gala para recibir la décima edición del Festival Nacional de Video (FENAVID), el encuentro más importante del audiovisual boliviano.\n\n#### Participación Récord\n\nCon 48 producciones nacionales en competencia y una delegación internacional de 12 países invitados, esta edición marcó un hito en la historia del festival. Las categorías incluyeron documental, ficción, videoclip y producción universitaria.\n\n#### Lo Más Destacado\n\nEl documental "Tierra de Sueños" del realizador cochabambino Carlos Quiroga se llevó el premio mayor. La cinta, que retrata la vida de mineros cooperativistas en Potosí, fue aclamada por la crítica por su fotografía y narrativa.\n\n#### El Rol del Periodismo Cultural\n\nComo parte de la cobertura, pudimos registrar entrevistas exclusivas con los realizadores y captar la esencia de un sector creativo que crece día a día en Bolivia. La televisión cultural tiene el deber de visibilizar estas expresiones.',
    contentEn: '### FENAVID 2026: A Decade of Bolivian Cinema\n\nSanta Cruz de la Sierra dressed up to host the tenth edition of the National Video Festival (FENAVID), the most important gathering for Bolivian audiovisual production.\n\n#### Record Participation\n\nWith 48 national productions in competition and an international delegation from 12 invited countries, this edition marked a milestone. Categories included documentary, fiction, music video, and university production.\n\n#### Highlights\n\nThe documentary "Tierra de Sueños" by Cochabamba filmmaker Carlos Quiroga took the top prize. The film, portraying cooperative miners in Potosí, was acclaimed by critics for its photography and narrative.\n\n#### The Role of Cultural Journalism\n\nAs part of the coverage, we secured exclusive interviews with filmmakers and captured the essence of a creative sector growing day by day in Bolivia. Cultural television has a duty to make these expressions visible.',
    date: '2026-07-10',
    readTimeEs: '5 min de lectura',
    readTimeEn: '5 min read',
    imageUrl: 'https://picsum.photos/seed/fenavid-cine/1200/630',
    imageCaption: 'Imagen referencial — Festival de Cine, Santa Cruz',
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
    contentEs: '### Bolivia en el Ranking de Libertad de Prensa 2026\n\nReporteros Sin Fronteras (RSF) publicó su ranking anual de libertad de prensa, ubicando a Bolivia en el puesto 91 de 180 países, dentro de la categoría de "alto riesgo" para el ejercicio del periodismo.\n\n#### Factores del Descenso\n\nEl informe señala que Bolivia descendió posiciones debido a "la hostilidad del gobierno hacia la prensa independiente, el aumento de procesos penales contra periodistas y la concentración de medios afines al oficialismo". La puntuación del país cayó de 58,4 a 54,2 sobre 100.\n\n#### Situación Regional\n\nEn Sudamérica, Bolivia se ubica por detrás de Uruguay (puesto 28), Chile (38), Argentina (45) y Brasil (82). Solo Venezuela (158) y Paraguay (112) presentan peores indicadores en la región.\n\n#### Reacciones\n\nEl Colegio de Periodistas de Bolivia emitió un comunicado expresando su preocupación y exigiendo al Estado garantías para el trabajo periodístico independiente. "La libertad de prensa no es negociable en una democracia", señaló su presidenta.\n\nFuente: Los Tiempos.',
    contentEn: '### Bolivia in the 2026 Press Freedom Ranking\n\nReporters Without Borders (RSF) published its annual press freedom ranking, placing Bolivia 91st out of 180 countries, within the "high risk" category for journalism.\n\n#### Factors Behind the Decline\n\nThe report notes that Bolivia dropped positions due to "government hostility toward independent press, increased criminal proceedings against journalists, and concentration of pro-government media outlets." The country\'s score fell from 58.4 to 54.2 out of 100.\n\n#### Regional Situation\n\nIn South America, Bolivia trails Uruguay (28th), Chile (38th), Argentina (45th), and Brazil (82nd). Only Venezuela (158th) and Paraguay (112th) show worse indicators in the region.\n\n#### Reactions\n\nThe Bolivian College of Journalists issued a statement expressing concern and demanding state guarantees for independent journalistic work. "Press freedom is non-negotiable in a democracy," said its president.\n\nSource: Los Tiempos.',
    date: '2026-05-18',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://picsum.photos/seed/libertad-prensa/1200/630',
    imageCaption: 'Imagen referencial — Libertad de prensa y periodismo',
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
    contentEs: '### Cine Nacional Gratuito por los 217 Años de La Paz\n\nLa Cinemateca Boliviana anunció un ciclo especial de cine nacional gratuito para conmemorar los 217 años de la fundación de Nuestra Señora de La Paz, con funciones del 15 al 22 de julio.\n\n#### La Programación\n\nEl ciclo incluye la restauración digital de "La Nación Clandestina" (1989) de Jorge Sanjinés, el estreno del documental "Ciudad de las Laderas" de la realizadora paceña Valeria Quisbert, y una retrospectiva de cortometrajes en aymara producidos por el colectivo Ukamau.\n\n#### Espacios Alternativos\n\nAdemás de las funciones en la sala principal de la Cinemateca, se habilitaron proyecciones al aire libre en la Plaza San Pedro, el Mirador Killi Killi y la Estación Central de El Alto, buscando descentralizar el acceso al cine.\n\n#### Importancia de la Preservación\n\nLa restauración digital de materiales fílmicos históricos es una labor fundamental para la memoria audiovisual del país. La Cinemateca, con apoyo de la cooperación internacional, ha logrado digitalizar más de 200 títulos del archivo nacional en los últimos dos años.\n\nFuente: Opinión.',
    contentEn: '### Free National Cinema for 217 Years of La Paz\n\nThe Bolivian Cinematheque announced a special cycle of free national cinema to commemorate 217 years since the founding of Nuestra Señora de La Paz, with screenings from July 15 to 22.\n\n#### The Program\n\nThe cycle includes the digital restoration of "La Nación Clandestina" (1989) by Jorge Sanjinés, the premiere of the documentary "Ciudad de las Laderas" by La Paz filmmaker Valeria Quisbert, and a retrospective of short films in Aymara produced by the Ukamau collective.\n\n#### Alternative Venues\n\nIn addition to screenings at the Cinematheque main hall, outdoor projections were set up at Plaza San Pedro, Killi Killi Viewpoint, and El Alto Central Station, seeking to decentralize access to cinema.\n\n#### Importance of Preservation\n\nDigital restoration of historical film materials is fundamental work for the country\'s audiovisual memory. The Cinematheque, with international cooperation support, has digitized over 200 titles from the national archive in the last two years.\n\nSource: Opinión.',
    date: '2026-07-15',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://picsum.photos/seed/cinemateca-boliviana/1200/630',
    imageCaption: 'Imagen referencial — Cinemateca Boliviana, La Paz',
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
    contentEs: '### Adiós a una Voz Inolvidable\n\nEl periodismo boliviano está de luto. Tito de la Viña, la voz emblemática del deporte nacional durante más de seis décadas, falleció a los 87 años, dejando un legado que trasciende generaciones.\n\n#### Trayectoria\n\nDe la Viña inició su carrera en la radio en la década de 1960, para luego pasar a la televisión donde se convirtió en el rostro y la voz del periodismo deportivo boliviano. Cubrió 12 Copas del Mundo de la FIFA y 8 Juegos Olímpicos.\n\n#### Reconocimientos\n\nA lo largo de su carrera recibió innumerables distinciones, incluyendo el Premio Nacional de Periodismo Deportivo en tres ocasiones y un reconocimiento vitalicio de la Asociación de Periodistas Deportivos de Bolivia.\n\n#### Reacciones\n\nEl presidente del Estado, clubes de fútbol, colegios de periodistas y figuras del deporte nacional expresaron sus condolencias a través de redes sociales. Bolivia TV prepara un documental homenaje con material de archivo de sus transmisiones más emblemáticas. Fuente: Los Tiempos.',
    contentEn: '### Farewell to an Unforgettable Voice\n\nBolivian journalism is in mourning. Tito de la Viña, the emblematic voice of national sports for over six decades, passed away at 87, leaving a legacy that transcends generations.\n\n#### Career\n\nDe la Viña began his career on radio in the 1960s, later moving to television where he became the face and voice of Bolivian sports journalism. He covered 12 FIFA World Cups and 8 Olympic Games.\n\n#### Recognitions\n\nThroughout his career he received countless distinctions, including the National Sports Journalism Award on three occasions and a lifetime recognition from the Bolivian Association of Sports Journalists.\n\n#### Reactions\n\nThe President of the State, football clubs, journalist associations, and national sports figures expressed their condolences on social media. Bolivia TV is preparing a tribute documentary with archival footage of his most emblematic broadcasts. Source: Los Tiempos.',
    date: '2026-07-18',
    readTimeEs: '4 min de lectura',
    readTimeEn: '4 min read',
    imageUrl: 'https://picsum.photos/seed/periodismo-deportivo/1200/630',
    imageCaption: 'Imagen referencial — Periodismo deportivo',
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
    contentEs: '### Nolan y su Nueva Epopeya Mitológica\n\nEl director Christopher Nolan, conocido por obras como "Oppenheimer", "Inception" y "Interstellar", confirmó el reparto de su próxima película: una adaptación de "La Odisea" de Homero.\n\n#### El Reparto de Lujo\n\nMatt Damon interpretará a Odiseo, acompañado de Tom Holland, Zendaya, Anne Hathaway, Robert Pattinson, Charlize Theron y Lupita Nyong\'o. El anuncio generó enorme expectativa en la industria cinematográfica global.\n\n#### Producción y Fechas\n\nEl rodaje comenzará a finales de 2026 en locaciones de Grecia, Italia, Malta y el Reino Unido. La película será filmada en formato IMAX y utilizará tecnología de cámara de gran formato, característica distintiva del director.\n\n#### Expectativa en Bolivia\n\nCineastas y cinéfilos bolivianos siguen con atención los detalles de la producción. La Cinemateca Boliviana ya confirmó que proyectará el filme en su estreno mundial, previsto para julio de 2027. Fuente: Los Tiempos.',
    contentEn: '### Nolan\'s New Mythological Epic\n\nDirector Christopher Nolan, known for works such as "Oppenheimer", "Inception", and "Interstellar", confirmed the cast of his next film: an adaptation of Homer\'s "The Odyssey".\n\n#### The Star-Studded Cast\n\nMatt Damon will play Odysseus, accompanied by Tom Holland, Zendaya, Anne Hathaway, Robert Pattinson, Charlize Theron, and Lupita Nyong\'o. The announcement generated enormous expectations in the global film industry.\n\n#### Production and Dates\n\nFilming will begin in late 2026 in locations across Greece, Italy, Malta, and the United Kingdom. The film will be shot in IMAX format using large-format camera technology, a signature of the director.\n\n#### Buzz in Bolivia\n\nBolivian filmmakers and cinephiles are closely following production details. The Bolivian Cinematheque has already confirmed it will screen the film at its worldwide premiere, scheduled for July 2027. Source: Los Tiempos.',
    date: '2026-07-14',
    readTimeEs: '3 min de lectura',
    readTimeEn: '3 min read',
    imageUrl: 'https://picsum.photos/seed/cine-nolan-odisea/1200/630',
    imageCaption: 'Imagen referencial — Christopher Nolan y el cine épico',
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
    imageCaption: 'Imagen referencial — Bolivia y el mundo',
    categoryEs: 'Reflexiones',
    categoryEn: 'Reflections',
    enableComments: true,
    featured: true,
    views: 1
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
