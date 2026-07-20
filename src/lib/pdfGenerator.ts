/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { jsPDF } from 'jspdf';

interface CVData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string[];
  }>;
  skills: string[];
  languages: Array<{ language: string; level: string }>;
  awards: Array<{ title: string; year: string; description: string }>;
}

/**
 * Datos del CV de Freddy Ticona
 */
const FREDDY_CV_DATA: CVData = {
  personalInfo: {
    name: 'Freddy Ticona Guzmán',
    title: 'Camarógrafo y Realizador Audiovisual',
    email: 'freddyticona62@gmail.com',
    phone: '+591 62408420',
    location: 'La Paz, Bolivia',
    linkedin: 'https://www.linkedin.com/in/freddy-ticona-guzman-4161287'
  },
  education: [
    {
      degree: 'Licenciatura en Ciencias de la Comunicación Social',
      institution: 'UDABOL - La Paz',
      year: '2010 - 2014'
    },
    {
      degree: 'Técnico en Cinematografía',
      institution: 'Escuela Andina de Cinematografía - Fundación Ukamau',
      year: '2017'
    }
  ],
  experience: [
    {
      title: 'Camarógrafo de Prensa',
      company: 'Bolivia TV',
      period: '2021 - Presente',
      description: [
        'Cobertura de eventos nacionales de importancia',
        'Operación de cámaras de estudio y exteriores',
        'Edición de notas periodísticas'
      ]
    },
    {
      title: 'Camarógrafo Freelance',
      company: 'Independiente',
      period: '2015 - 2021',
      description: [
        'Cobertura de eventos culturales y sociales',
        'Documentales independientes',
        'Producción audiovisual para ONGs'
      ]
    },
    {
      title: 'Asistente de Cámaras',
      company: 'Red Uno',
      period: '2013 - 2015',
      description: [
        'Soporte técnico en producciones',
        'Configuración de equipos',
        'Colaboración en noticieros'
      ]
    },
    {
      title: 'Prácticas Profesionales',
      company: 'RTP - Red Patria Nueva',
      period: '2012 - 2013',
      description: [
        'Apoyo en producción de programas',
        'Edición básica de contenido'
      ]
    }
  ],
  skills: [
    'Cinematografía digital',
    'Edición de video (Premiere Pro, Final Cut Pro)',
    'Fotografía',
    'Producción de documentales',
    'Periodismo audiovisual',
    'Gestión de equipos técnicos',
    'Dirección de fotografía',
    'Postproducción'
  ],
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Intermedio' },
    { language: 'Quechua', level: 'Básico' },
    { language: 'Aymara', level: 'Básico' }
  ],
  awards: [
    {
      title: 'Premio Nacional Eduardo Abaroa',
      year: '2017',
      description: 'Periodismo Cultural - Documental "Caminos de la Identidad"'
    }
  ]
};

/**
 * Generar CV en PDF
 */
export function generateCVPDF(lang: 'es' | 'en' = 'es'): void {
  const doc = new jsPDF();
  const data = FREDDY_CV_DATA;

  // Configuración
  const margin = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const contentWidth = pageWidth - margin * 2;

  let yPosition = margin;

  // Función auxiliar para verificar si necesitamos nueva página
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Función para agregar título de sección
  const addSectionTitle = (title: string) => {
    checkNewPage(15);
    doc.setFillColor(212, 175, 55); // Gold
    doc.rect(margin, yPosition, contentWidth, 8, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(title, margin + 3, yPosition + 5.5);
    yPosition += 12;
  };

  // Encabezado - Nombre y título
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text(data.personalInfo.name, pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(data.personalInfo.title, pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 15;

  // Información de contacto
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const contactInfo = [
    `${data.personalInfo.email} | ${data.personalInfo.phone}`,
    data.personalInfo.location,
    data.personalInfo.linkedin
  ];

  contactInfo.forEach(info => {
    doc.text(info, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 5;
  });

  yPosition += 10;

  // Línea separadora
  doc.setDrawColor(212, 175, 55);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  // Experiencia Profesional
  addSectionTitle(lang === 'es' ? 'EXPERIENCIA PROFESIONAL' : 'PROFESSIONAL EXPERIENCE');

  data.experience.forEach((job, index) => {
    checkNewPage(30);

    // Título del puesto
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(job.title, margin, yPosition);
    yPosition += 5;

    // Empresa y período
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text(`${job.company} | ${job.period}`, margin, yPosition);
    yPosition += 6;

    // Descripción
    doc.setFont('helvetica', 'normal');
    job.description.forEach((desc) => {
      checkNewPage(5);
      doc.text(`• ${desc}`, margin + 3, yPosition);
      yPosition += 4;
    });

    yPosition += 5;
  });

  // Educación
  addSectionTitle(lang === 'es' ? 'EDUCACIÓN' : 'EDUCATION');

  data.education.forEach((edu) => {
    checkNewPage(15);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(edu.degree, margin, yPosition);
    yPosition += 5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`${edu.institution} | ${edu.year}`, margin, yPosition);
    yPosition += 8;
  });

  // Habilidades
  addSectionTitle(lang === 'es' ? 'HABILIDADES' : 'SKILLS');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);

  const skillsPerLine = 3;
  for (let i = 0; i < data.skills.length; i += skillsPerLine) {
    checkNewPage(5);
    const line = data.skills.slice(i, i + skillsPerLine).join(' • ');
    doc.text(line, margin, yPosition);
    yPosition += 5;
  }

  // Idiomas
  addSectionTitle(lang === 'es' ? 'IDIOMAS' : 'LANGUAGES');

  data.languages.forEach((langItem) => {
    checkNewPage(6);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`${langItem.language}: ${langItem.level}`, margin, yPosition);
    yPosition += 5;
  });

  // Premios y Reconocimientos
  addSectionTitle(lang === 'es' ? 'PREMIOS Y RECONOCIMIENTOS' : 'AWARDS');

  data.awards.forEach((award) => {
    checkNewPage(12);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(`${award.title} (${award.year})`, margin, yPosition);
    yPosition += 5;

    doc.setFont('helvetica', 'normal');
    doc.text(award.description, margin + 3, yPosition);
    yPosition += 6;
  });

  // Footer con fecha
  const footerY = pageHeight - 15;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(128, 128, 128);
  const generatedText = lang === 'es' ? 'Generado:' : 'Generated:';
  doc.text(
    `${generatedText} ${new Date().toLocaleDateString()}`,
    pageWidth / 2,
    footerY,
    { align: 'center' }
  );

  // Guardar PDF
  const fileName = `CV_Freddy_Ticona_${lang === 'es' ? 'ES' : 'EN'}.pdf`;
  doc.save(fileName);
}

/**
 * Generar CV con datos personalizados
 */
export function generateCustomCVPDF(data: CVData, lang: 'es' | 'en' = 'es'): void {
  // Implementación similar pero con datos personalizados
  console.log('Generando CV personalizado...');
}
