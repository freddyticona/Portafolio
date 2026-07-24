/**
 * generate-cv-pdf.js
 *
 * Genera 2 PDFs del Curriculum Vitae de Freddy Ticona Guzmán
 * (versión Español e Inglés) con:
 *  - Header con datos de contacto + título profesional
 *  - Experiencia Laboral (7 puestos, 2010 - Jul 2026)
 *  - Educación y Certificaciones (18 credenciales, 5 primarias + 13 secundarias)
 *  - Memorandos / reconocimientos institucionales
 *
 * El script parsea src/translations.ts con el mismo extractor compartido que los
 * scripts de build, para no duplicar datos y mantener una única fuente de verdad.
 *
 * Uso:
 *   node scripts/generate-cv-pdf.js
 *
 * Salida:
 *   dist/CV-Freddy-Ticona-ES.pdf
 *   dist/CV-Freddy-Ticona-EN.pdf
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { jsPDF } from 'jspdf';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === Datos personales (información de contacto pública) ===
const PERSONAL = {
  name: 'Freddy Ticona Guzmán',
  titleEs: 'Camarógrafo, Realizador Audiovisual y Desarrollador FullStack',
  titleEn: 'Cameraman, Audiovisual Producer and FullStack Developer',
  phone: '+591 73020202',
  email: 'freddyticona62@gmail.com', // Dirección incluida en el CV para postulación laboral
  website: 'https://freddydev.net',
  location: 'La Paz, Bolivia',
};

// =====================================================================
// Parser ligero de translations.ts (similar a extract-articles.js pero
// enfocado en timelineEvents, certificates y testimonials)
// =====================================================================

function readTranslations() {
  const src = fs.readFileSync(path.join(__dirname, '..', 'src', 'translations.ts'), 'utf-8');
  return src;
}

function parseStringField(line, key) {
  const re = new RegExp(`^\\s*${key}:\\s*(['"\`])([\\s\\S]*?)\\1`);
  const m = line.match(re);
  if (!m) return null;
  let val = m[2];
  return val.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\');
}

function parseStringFieldByName(src, key) {
  // Para keys que usan otros nombres como titleEs, issuer, year, etc.
  return parseStringField(src, key);
}

// Extrae el array timelineEvents (experiencia laboral)
function extractTimelineEvents(lang) {
  const src = readTranslations();
  const m = src.match(/export const timelineEvents: TimelineEvent\[\]\s*=\s*\[([\s\S]*?)\n\];/);
  if (!m) throw new Error('No se encontró timelineEvents');
  const block = m[1];
  const lines = block.split('\n');
  const events = [];
  let pending = {};
  let inArray = false;
  let arrayKey = null;
  let arrayBuffer = [];

  function flushArray() {
    if (inArray) {
      const raw = arrayBuffer.join('\n');
      const items = [];
      const re = /'([^']+)'/g;
      let mi;
      while ((mi = re.exec(raw)) !== null) items.push(mi[1]);
      if (arrayKey) pending[arrayKey] = items;
      inArray = false;
      arrayKey = null;
      arrayBuffer = [];
    }
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '},' || trimmed === '}') {
      flushArray();
      if (pending.company) {
        const achEs = pending.achievementsEs || [];
        const achEn = pending.achievementsEn || achEs;
        events.push({
          id: pending.id,
          period: pending.period || '',
          company: pending.company,
          role: lang === 'es' ? (pending.roleEs || pending.roleEn || '') : (pending.roleEn || pending.roleEs || ''),
          description: lang === 'es' ? (pending.descriptionEs || pending.descriptionEn || '') : (pending.descriptionEn || pending.descriptionEs || ''),
          achievements: lang === 'es' ? achEs : achEn,
        });
      }
      pending = {};
      continue;
    }
    const id = parseStringField(line, 'id'); if (id !== null) pending.id = id;
    const period = parseStringField(line, 'period'); if (period !== null) pending.period = period;
    const company = parseStringField(line, 'company'); if (company !== null) pending.company = company;
    const roleEs = parseStringField(line, 'roleEs'); if (roleEs !== null) pending.roleEs = roleEs;
    const roleEn = parseStringField(line, 'roleEn'); if (roleEn !== null) pending.roleEn = roleEn;
    const descEs = parseStringField(line, 'descriptionEs'); if (descEs !== null) pending.descriptionEs = descEs;
    const descEn = parseStringField(line, 'descriptionEn'); if (descEn !== null) pending.descriptionEn = descEn;

    // Detectar apertura de array achievementsEs o achievementsEn (ambos para tenerlos disponibles)
    const arrMatch = line.match(/^\s*(achievements(?:Es|En)):\s*\[/);
    if (arrMatch) {
      inArray = true;
      arrayKey = arrMatch[1];
      arrayBuffer = [];
      const inline = line.match(/'([^']+)'/);
      if (inline) arrayBuffer.push("'inline:'" + inline[1]);
      continue;
    }
    if (inArray && (trimmed === '],' || trimmed === ']')) {
      flushArray();
      continue;
    }
    if (inArray) {
      arrayBuffer.push(line);
    }
  }
  return events;
}

// Extrae el array certificates
function extractCertificates() {
  const src = readTranslations();
  const m = src.match(/export const certificates: Certificate\[\]\s*=\s*\[([\s\S]*?)\n\];/);
  if (!m) throw new Error('No se encontró certificates');
  const block = m[1];
  const lines = block.split('\n');
  const certs = [];
  let pending = {};
  for (const line of lines) {
    if (line.trim().startsWith('}')) {
      if (pending.titleEs) {
        certs.push({
          id: pending.id,
          titleEs: pending.titleEs,
          titleEn: pending.titleEn || pending.titleEs,
          issuer: pending.issuer || '',
          year: pending.year || '',
          isPrimary: pending.isPrimary === true,
          credentialUrl: pending.credentialUrl || '',
        });
      }
      pending = {};
      continue;
    }
    const id = parseStringField(line, 'id'); if (id !== null) pending.id = id;
    const titleEs = parseStringField(line, 'titleEs'); if (titleEs !== null) pending.titleEs = titleEs;
    const titleEn = parseStringField(line, 'titleEn'); if (titleEn !== null) pending.titleEn = titleEn;
    const issuer = parseStringField(line, 'issuer'); if (issuer !== null) pending.issuer = issuer;
    const year = parseStringField(line, 'year'); if (year !== null) pending.year = year;
    const credentialUrl = parseStringField(line, 'credentialUrl'); if (credentialUrl !== null) pending.credentialUrl = credentialUrl;
    if (line.includes('isPrimary:')) pending.isPrimary = line.includes('true');
  }
  return certs;
}

// =====================================================================
// Generador de PDF
// =====================================================================

function buildPDF(lang) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth(); // 210
  const pageH = doc.internal.pageSize.getHeight(); // 297
  const margin = 15;
  const contentW = pageW - margin * 2;
  let y = margin;

  const isEs = lang === 'es';
  const TITLE_FONT = 'helvetica';
  const TEXT_FONT = 'helvetica';

  // ---------- Helpers ----------
  const resetY = () => { y = margin; };
  const ensureSpace = (h) => {
    if (y + h > pageH - margin) {
      doc.addPage();
      resetY();
    }
  };

  // Convierte font size (pt) a mm. En jsPDF, 1pt ≈ 0.3528 mm.
  // La altura de línea típica es ~1.15-1.4 × fontSize (en pt convertimos a mm).
  const ptToMm = (pt) => pt * 0.3528;
  const lineHFor = (fontSizePt) => ptToMm(fontSizePt) * 1.25;

  // Dibuja una sola línea en la posición top `y` y retorna el nuevo `y` (bottom).
  // Usa el `textBaseline = 'top'`-like behaviour sin dependencia de lib.
  function drawLine(text, opts = {}) {
    const {
      font = TEXT_FONT,
      bold = false,
      italic = false,
      size = 10,
      color = [20, 20, 20],
      x = margin,
      indent = 0,
      bullet = false,
      wrapWidth = contentW - indent,
    } = opts;
    doc.setFont(font, bold ? 'bold' : (italic ? 'italic' : 'normal'));
    doc.setFontSize(size);
    doc.setTextColor(...color);

    const prefix = bullet ? '\u2022  ' : '';
    const fullText = prefix + text;
    const lines = doc.splitTextToSize(fullText, wrapWidth);

    const lineH = lineHFor(size);
    for (const ln of lines) {
      ensureSpace(lineH);
      // En jsPDF el `y` es baseline; para usarlo como top, sumamos ~0.85 * lineH.
      const baselineY = y + lineH * 0.85;
      doc.text(ln, x + (bullet ? 2 : 0), baselineY);
      y += lineH;
    }
    return y;
  }

  // Encabezado
  function header() {
    // Nombre
    doc.setFont(TITLE_FONT, 'bold');
    doc.setFontSize(22);
    doc.setTextColor(20, 20, 20);
    const nameLineH = lineHFor(22);
    doc.text(PERSONAL.name, margin, y + nameLineH * 0.85);
    y += nameLineH + 1;

    // Título profesional
    doc.setFont(TEXT_FONT, 'normal');
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    const titleLineH = lineHFor(11);
    doc.text(isEs ? PERSONAL.titleEs : PERSONAL.titleEn, margin, y + titleLineH * 0.85);
    y += titleLineH + 2;

    // Línea decorativa
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.6);
    doc.line(margin, y, pageW - margin, y);
    y += 4;

    // Contacto (2 líneas)
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    const line1 = `${PERSONAL.email}   ·   ${PERSONAL.website}`;
    const line2 = `${isEs ? 'Teléfono' : 'Phone'}: ${PERSONAL.phone}   ·   ${PERSONAL.location}`;
    const cLineH = lineHFor(9);
    doc.text(line1, margin, y + cLineH * 0.85);
    y += cLineH + 1;
    doc.text(line2, margin, y + cLineH * 0.85);
    y += cLineH + 4;
  }

  // Sección con título grande + línea decorativa
  function sectionTitle(text) {
    const titleH = lineHFor(13);
    ensureSpace(titleH + 8);
    y += 4;
    doc.setFont(TITLE_FONT, 'bold');
    doc.setFontSize(13);
    doc.setTextColor(20, 20, 20);
    doc.text(text.toUpperCase(), margin, y + titleH * 0.85);
    y += titleH + 1.5;
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageW - margin, y);
    y += 6;
  }

  // Subsección (subtítulo mediano - usado en Certificaciones primarias/adicionales)
  function sectionSubtitle(text) {
    const subH = lineHFor(10);
    ensureSpace(subH + 8);
    y += 3;
    doc.setFont(TITLE_FONT, 'bold');
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    doc.text(text, margin, y + subH * 0.85);
    y += subH + 1;
    doc.setDrawColor(225, 225, 225);
    doc.setLineWidth(0.15);
    doc.line(margin, y, pageW - margin, y);
    y += 4;
  }

  // Etiqueta amarilla de "LOGROS DESTACADOS" en cada experiencia
  function labelYellow(text) {
    const labH = lineHFor(8.5);
    ensureSpace(labH + 2);
    doc.setFont(TITLE_FONT, 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(150, 120, 40);
    doc.text(text, margin, y + labH * 0.85);
    y += labH + 2;
  }

  // Párrafo con wrap automático (usa drawLine que respeta el line-height real)
  function paragraph(text, opts = {}) {
    const { fontSize = 10, color = [60, 60, 60], bullet = false, indent = 0, bold = false, italic = false } = opts;
    drawLine(text, {
      size: fontSize,
      color,
      bullet,
      indent,
      bold,
      italic,
      wrapWidth: contentW - indent,
    });
  }

  // Renderiza un item de certificación
  function renderCert(c, lang) {
    const titleH = lineHFor(10);
    const subH = lineHFor(9);
    const urlH = lineHFor(8);
    const minNeeded = titleH + subH + 4;
    ensureSpace(minNeeded);

    doc.setFont(TITLE_FONT, 'bold');
    doc.setFontSize(10);
    doc.setTextColor(20, 20, 20);
    const title = lang === 'es' ? c.titleEs : (c.titleEn || c.titleEs);
    doc.text(title, margin, y + titleH * 0.85);
    y += titleH + 1;

    doc.setFont(TEXT_FONT, 'normal');
    doc.setFontSize(9);
    doc.setTextColor(90, 90, 90);
    doc.text(`${c.issuer}   ·   ${c.year}`, margin, y + subH * 0.85);
    y += subH + 2;

    if (c.credentialUrl) {
      ensureSpace(urlH + 2);
      doc.setFontSize(8);
      doc.setTextColor(0, 100, 200);
      const url = c.credentialUrl.length > 70 ? c.credentialUrl.slice(0, 67) + '...' : c.credentialUrl;
      const fullText = `${isEs ? 'Ver credencial' : 'View credential'}: ${url}`;
      const lines = doc.splitTextToSize(fullText, contentW);
      for (const ln of lines) {
        ensureSpace(urlH);
        doc.text(ln, margin, y + urlH * 0.85);
        y += urlH;
      }
      y += 1;
    }
    y += 3;
  }

  // ---------- Contenido ----------
  header();

  // === Experiencia Laboral ===
  sectionTitle(isEs ? 'Experiencia Laboral' : 'Work Experience');
  const events = extractTimelineEvents(lang);
  for (const ev of events) {
    ensureSpace(25);

    // Cargo (línea destacada)
    drawLine(ev.role, { size: 11, bold: true, color: [20, 20, 20] });
    y += 1;

    // Empresa + período (italic, gris claro)
    drawLine(`${ev.company}   ·   ${ev.period}`, { size: 9.5, italic: true, color: [130, 130, 130] });
    y += 1;

    if (ev.description) {
      paragraph(ev.description, { fontSize: 9.5, color: [70, 70, 70] });
      y += 1.5;
    }
    if (ev.achievements && ev.achievements.length) {
      labelYellow(isEs ? 'LOGROS DESTACADOS' : 'KEY ACHIEVEMENTS');
      for (const a of ev.achievements) {
        paragraph(a, { fontSize: 9.5, color: [60, 60, 60], bullet: true, indent: 4 });
      }
    }
    y += 4;
    // separador suave
    doc.setDrawColor(230, 230, 230);
    doc.setLineWidth(0.15);
    doc.line(margin, y, pageW - margin, y);
    y += 5;
  }

  // === Educación y Certificaciones ===
  doc.addPage();
  resetY();

  // Pequeño encabezado de continuación
  const contH = lineHFor(10);
  doc.setFont(TITLE_FONT, 'bold');
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text(PERSONAL.name, margin, y + contH * 0.85);
  doc.setFont(TEXT_FONT, 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(140, 140, 140);
  doc.text(isEs ? 'Educación y Certificaciones' : 'Education & Certifications', pageW - margin - 50, y + contH * 0.85, { align: 'right' });
  y += contH + 2;
  doc.setDrawColor(212, 175, 55);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageW - margin, y);
  y += 10;

  sectionTitle(isEs ? 'Educación y Certificaciones' : 'Education & Certifications');
  const certs = extractCertificates();

  // Primarias primero
  sectionSubtitle(isEs ? 'Certificaciones principales' : 'Primary credentials');
  for (const c of certs.filter(x => x.isPrimary)) renderCert(c, lang);

  sectionSubtitle(isEs ? 'Certificaciones adicionales' : 'Additional credentials');
  for (const c of certs.filter(x => !x.isPrimary)) renderCert(c, lang);

  // === Memorandos / Reconocimientos institucionales ===
  sectionTitle(isEs ? 'Reconocimientos Institucionales' : 'Institutional Recognitions');

  const memos = [
    {
      titleEs: 'Memorando de Felicitación - Bolivia TV (2022)',
      titleEn: 'Institutional Commendation - Bolivia TV (2022)',
      descEs: 'Reconocimiento oficial emitido por la Gerencia General de Bolivia TV por el destacado desempeño y entrega técnica en trabajos de postproducción y edición durante los 36 días del paro cívico en Santa Cruz (octubre - noviembre 2022).',
      descEn: 'Official citation issued by Bolivia TV General Management for outstanding performance and technical dedication in post-production and video editing work during the 36-day civic strike in Santa Cruz (October - November 2022).',
    },
    {
      titleEs: 'Memorando de Felicitación - Bolivia TV (2024)',
      titleEn: 'Institutional Commendation - Bolivia TV (2024)',
      descEs: 'Reconocimiento oficial por la elaboración del reportaje especial de postproducción y edición sobre la cronología completa del intento de golpe de Estado del 26 de junio de 2024, perpetrado por el entonces comandante del Ejército Juan José Zúñiga contra el gobierno constitucional del presidente Luis Arce.',
      descEn: 'Official citation for producing the special post-production and editing report on the complete chronology of the June 26, 2024 coup attempt perpetrated by former Army Commander Juan José Zúñiga against the constitutional government of President Luis Arce.',
    },
    {
      titleEs: 'Memorando de Felicitación - Abya Yala Televisión (2019)',
      titleEn: 'Commendation Memorandum - Abya Yala Television (2019)',
      descEs: 'Otorgado por obtener el prestigioso Premio Plurinacional Eduardo Abaroa 2017 en la categoría de Periodismo Cultural.',
      descEn: 'Awarded for obtaining the prestigious 2017 Eduardo Abaroa National Award in the Cultural Journalism category.',
    },
    {
      titleEs: 'Memorando de Felicitación - Abya Yala Televisión (2019)',
      titleEn: 'Commendation Memorandum - Abya Yala Television (2019)',
      descEs: 'Otorgado por ser premiado en el XI Concurso de reportajes periodísticos, organizado por la Fundación Viva y Católicas por el derecho a decidir.',
      descEn: 'Awarded in recognition of being prized in the XI Journalism Reporting Contest, organized by the Viva Foundation and Católicas por el derecho a decidir.',
    },
    {
      titleEs: 'Memorando de Felicitación - Abya Yala Televisión / Prensa Latina (2019)',
      titleEn: 'Commendation Memorandum - Abya Yala Television / Prensa Latina (2019)',
      descEs: 'Por el sobresaliente trabajo y participación en el documental "Médicos en el Tipnis", desarrollado en colaboración con la Agencia Informativa Latinoamericana Prensa Latina.',
      descEn: 'For the outstanding work and participation in the documentary "Médicos en el Tipnis", developed in collaboration with the Latin American News Agency Prensa Latina.',
    },
    {
      titleEs: 'Memorando de Felicitación - Canal 4 RTP (2015)',
      titleEn: 'Commendation Memorandum - Canal 4 RTP (2015)',
      descEs: 'Otorgado por el impecable trabajo desempeñado durante la cobertura del Referéndum de 2015, cobertura realizada en Riberalta.',
      descEn: 'Awarded for the impeccable work performed during the coverage of the 2015 Referendum, with field reporting done in Riberalta.',
    },
    {
      titleEs: 'Memorando de Felicitación - Canal 4 RTP (2014)',
      titleEn: 'Commendation Memorandum - Canal 4 RTP (2014)',
      descEs: 'Otorgado por el excelente trabajo desempeñado en la cobertura y realización técnica de la Fastuosa Entrada del Señor Jesús del Gran Poder.',
      descEn: 'Awarded for the excellent work performed in the coverage and technical production of the Grand Entrance of Señor Jesús del Gran Poder.',
    },
  ];

  for (const m of memos) {
    ensureSpace(15);
    const title = lang === 'es' ? m.titleEs : m.titleEn;
    drawLine(title, { size: 9.5, bold: true, color: [20, 20, 20] });
    y += 1;
    paragraph(lang === 'es' ? m.descEs : m.descEn, { fontSize: 9, color: [70, 70, 70], indent: 2 });
    y += 3;
    doc.setDrawColor(235, 235, 235);
    doc.setLineWidth(0.12);
    doc.line(margin, y, pageW - margin, y);
    y += 3.5;
  }

  // ============== Footer en cada página ==============
  const pages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i);
    doc.setFont(TEXT_FONT, 'normal');
    doc.setFontSize(8);
    doc.setTextColor(160, 160, 160);
    doc.text(`${PERSONAL.name} — ${PERSONAL.website}`, margin, pageH - 7);
    doc.text(`${i} / ${pages}`, pageW - margin - 5, pageH - 7, { align: 'right' });
  }

  return doc;
}

// =====================================================================
// Generar y guardar los 2 PDFs
// =====================================================================

const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const targets = [
  { lang: 'es', file: 'CV-Freddy-Ticona-ES.pdf' },
  { lang: 'en', file: 'CV-Freddy-Ticona-EN.pdf' },
];

for (const { lang, file } of targets) {
  try {
    const doc = buildPDF(lang);
    const outPath = path.join(distDir, file);
    doc.save(outPath);
    const stat = fs.statSync(outPath);
    console.log(`✅ ${file} generado (${(stat.size / 1024).toFixed(1)} KB) -> ${outPath}`);
  } catch (err) {
    console.error(`❌ Error generando ${file}:`, err.message);
    console.error(err.stack);
    process.exit(1);
  }
}

console.log(`\n📄 CV generado para postulación laboral.`);
