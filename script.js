// === SVG ICONS (Lucide-style line icons) ===
const IC = {
  zap: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  hammer: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/></svg>',
  utensils: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
  file: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
  truck: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 9H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  wrench: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  cog: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  monitor: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>',
  leaf: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
};

const SECTORS = [
  { id:'electricidad', name:'Electricidad', icon:'zap' },
  { id:'carpinteria', name:'Carpintería', icon:'hammer' },
  { id:'hosteleria', name:'Hostelería', icon:'utensils' },
  { id:'administracion', name:'Administración', icon:'file' },
  { id:'logistica', name:'Logística', icon:'truck' },
  { id:'fontaneria', name:'Fontanería', icon:'wrench' },
  { id:'mecanica', name:'Mecánica', icon:'cog' },
  { id:'informatica', name:'Informática', icon:'monitor' },
  { id:'jardineria', name:'Jardinería', icon:'leaf' },
];

const TECH = {
  electricidad:['Instalaciones domésticas','Uso de multímetro','Esquemas eléctricos','Cuadros eléctricos','Mantenimiento preventivo','Cableado estructurado','Automatismos','Energías renovables'],
  carpinteria:['Mecanizado de madera','Montaje de muebles','Barnizado y acabados','Lectura de planos','Uso de sierra circular','Lijado y preparación','Instalación de herrajes','Medición y replanteo'],
  hosteleria:['Manipulación de alimentos','Preparación de servicios','Maquinaria de cocina','Técnicas de corte','Mise en place','Atención al cliente','Limpieza APPCC','Emplatado'],
  administracion:['Excel básico','Gestión de archivos','Atención telefónica','Facturación','Mecanografía','Correo electrónico','Word y documentos','Base de datos'],
  logistica:['Gestión de almacén','Picking y packing','Uso de carretilla','Control de stock','Etiquetado','Gestión de envíos','PDA y lectores','Inventario'],
  fontaneria:['Soldadura de tuberías','Instalación sanitarios','Calefacción y ACS','Detección de fugas','Planos hidráulicos','Herramientas de corte','Mantenimiento','Riego'],
  mecanica:['Diagnóstico de averías','Mantenimiento preventivo','Sistemas de frenos','Motor diésel/gasolina','Electricidad del automóvil','Neumática','Herramientas de taller','Cambio de aceite'],
  informatica:['Redes y sistemas','Soporte técnico','Montaje de equipos','Sistemas operativos','Ofimática','Hardware','Ciberseguridad básica','Cloud'],
  jardineria:['Poda y mantenimiento','Riego automatizado','Maquinaria de jardín','Fitosanitarios','Plantación','Diseño básico','Abonado','Césped'],
};

const POWERS = [
  { text:'Puntualidad', desc:'Compromiso constante con los horarios y plazos establecidos.' },
  { text:'Aprendizaje rápido', desc:'Capacidad para asimilar nuevos procedimientos y técnicas con agilidad.' },
  { text:'Trabajo en equipo', desc:'Colaboración efectiva con compañeros para alcanzar objetivos comunes.' },
  { text:'Manejo de herramientas', desc:'Destreza en el uso de herramientas manuales y eléctricas propias del oficio.' },
  { text:'Perseverancia', desc:'Constancia y determinación ante tareas complejas o exigentes.' },
  { text:'Comunicación', desc:'Capacidad para transmitir información de forma clara y escuchar activamente.' },
  { text:'Organización', desc:'Habilidad para planificar y estructurar el trabajo de forma eficiente.' },
  { text:'Orden en el puesto', desc:'Mantenimiento de la zona de trabajo limpia, segura y organizada.' },
  { text:'Atención al detalle', desc:'Minuciosidad en la ejecución de tareas para garantizar resultados de calidad.' },
  { text:'Actitud positiva', desc:'Disposición proactiva y constructiva ante los retos del día a día.' },
  { text:'Adaptabilidad', desc:'Facilidad para ajustarse a nuevas situaciones, métodos o entornos laborales.' },
  { text:'Responsabilidad', desc:'Compromiso con las tareas asignadas y asunción de las propias obligaciones.' },
];

// === STATE ===
let step = 0, sector = null, powers = new Set(), techs = new Set(), carnet = 'proceso';
const TOTAL = 4;
const $ = id => document.getElementById(id);
const panels = [$('p0'), $('p1'), $('p2'), $('p3')];

// === INIT ===
function init() {
  renderSectors();
  renderPowers();
  setupNav();
  setupCarnet();
  setupLang();
  setupModal();
  updateStepper();
}

function renderSectors() {
  const g = $('sector-grid');
  g.innerHTML = SECTORS.map(s =>
    `<div class="sector-card" data-id="${s.id}"><div class="sector-icon">${IC[s.icon]}</div><div class="sector-name">${s.name}</div></div>`
  ).join('');
  g.onclick = e => {
    const c = e.target.closest('.sector-card');
    if (!c) return;
    g.querySelectorAll('.sector-card').forEach(x => x.classList.remove('selected'));
    c.classList.add('selected');
    sector = c.dataset.id;
    renderTech();
  };
}

function renderPowers() {
  const g = $('powers-grid');
  g.innerHTML = POWERS.map((p, i) =>
    `<button class="power" data-i="${i}" type="button">${p.text}</button>`
  ).join('');
  g.onclick = e => {
    const b = e.target.closest('.power');
    if (!b) return;
    const i = +b.dataset.i;
    b.classList.toggle('on');
    powers.has(i) ? powers.delete(i) : powers.add(i);
    showInfo(i);
  };
  g.onmouseover = e => { const b = e.target.closest('.power'); if (b) showInfo(+b.dataset.i); };
  g.onmouseout = () => resetInfo();
}

function showInfo(i) {
  $('pinfo').textContent = POWERS[i].text + ': ' + POWERS[i].desc;
  $('power-info').classList.add('active');
}
function resetInfo() {
  $('pinfo').textContent = 'Selecciona una competencia para ver su descripción.';
  $('power-info').classList.remove('active');
}

function renderTech() {
  const skills = TECH[sector] || [];
  const name = SECTORS.find(s => s.id === sector)?.name || '';
  $('tech-sub').textContent = `Competencias técnicas — ${name}`;
  techs.clear();
  $('tech-grid').innerHTML = skills.map(s =>
    `<div class="tech" data-sk="${s}"><span class="tech-check"></span><span>${s}</span></div>`
  ).join('');
  $('tech-grid').onclick = e => {
    const t = e.target.closest('.tech');
    if (!t) return;
    t.classList.toggle('on');
    const sk = t.dataset.sk;
    techs.has(sk) ? techs.delete(sk) : techs.add(sk);
  };
}

function setupCarnet() {
  const g = $('tog-carnet');
  g.onclick = e => {
    const b = e.target.closest('.tog');
    if (!b) return;
    g.querySelectorAll('.tog').forEach(x => x.classList.remove('tog--on'));
    b.classList.add('tog--on');
    carnet = b.dataset.v;
  };
}

function setupLang() {
  $('add-lang').onclick = () => {
    const row = document.createElement('div');
    row.className = 'idioma-row';
    row.innerHTML = '<input class="fi" placeholder="Idioma"/><select class="fi"><option value="">Nivel</option><option value="A1">A1</option><option value="A2">A2</option><option value="B1">B1</option><option value="B2">B2</option><option value="C1">C1</option><option value="C2">C2</option></select><button class="x-btn">✕</button>';
    row.querySelector('.x-btn').onclick = () => row.remove();
    $('idiomas-box').appendChild(row);
  };
}

function setupNav() {
  $('btn-prev').onclick = () => { if (step > 0) go(step - 1); };
  $('btn-next').onclick = () => { if (step < TOTAL - 1) go(step + 1); };
  $('btn-gen').onclick = generate;
  document.querySelectorAll('.dot').forEach(d => {
    d.onclick = () => { const s = +d.dataset.s; if (s <= step) go(s); };
  });
}

function go(s) {
  panels[step].classList.remove('panel--active');
  step = s;
  panels[step].classList.add('panel--active');
  updateStepper();
  updateNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepper() {
  $('sbar').style.width = ((step + 1) / TOTAL * 100) + '%';
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.remove('dot--active', 'dot--done');
    if (i === step) d.classList.add('dot--active');
    else if (i < step) d.classList.add('dot--done');
  });
}

function updateNav() {
  $('btn-prev').disabled = step === 0;
  const last = step === TOTAL - 1;
  $('btn-next').style.display = last ? 'none' : 'flex';
  $('btn-gen').style.display = last ? 'flex' : 'none';
}

function setupModal() {
  $('m-close').onclick = closeModal;
  $('overlay').onclick = e => { if (e.target === $('overlay')) closeModal(); };
  document.onkeydown = e => { if (e.key === 'Escape') closeModal(); };
  $('btn-copy').onclick = async () => {
    try {
      await navigator.clipboard.writeText($('prompt-out').textContent);
      $('btn-copy').textContent = '✓ Copiado';
      $('btn-copy').classList.add('ok');
      setTimeout(() => { $('btn-copy').textContent = 'Copiar al portapapeles'; $('btn-copy').classList.remove('ok'); }, 2000);
    } catch { alert('Selecciona el texto manualmente.'); }
  };
}

function openModal() { $('overlay').classList.add('show'); document.body.style.overflow = 'hidden'; }
function closeModal() { $('overlay').classList.remove('show'); document.body.style.overflow = ''; }

function generate() {
  $('loader').style.display = 'flex';
  $('m-content').style.display = 'none';
  $('m-foot').style.display = 'none';
  openModal();
  setTimeout(() => {
    const nombre = $('inp-name').value.trim() || '[Nombre]';
    const sectorName = SECTORS.find(s => s.id === sector)?.name || '[Sector]';
    const pwrs = [...powers].map(i => POWERS[i].text);
    const pwrText = pwrs.length ? pwrs.join(', ') : 'No indicadas';
    const techText = techs.size ? [...techs].join(', ') : 'No indicadas';
    const hobby = ($('q-libre')?.value || '').trim() || 'No indicado';
    const langs = [];
    document.querySelectorAll('.idioma-row').forEach(r => {
      const l = r.querySelector('input').value.trim();
      const n = r.querySelector('select').value;
      if (l && n) langs.push(l + ' (' + n + ')');
    });
    const langText = langs.length ? langs.join(', ') : 'Español';
    const carnetMap = { si: 'Sí, dispongo de permiso de conducir', no: 'No dispongo de permiso', proceso: 'Permiso de conducir en proceso de obtención' };

    $('prompt-out').textContent = `Hola Gemini, necesito que redactes mi perfil profesional para un CV.

DATOS PERSONALES:
- Nombre: ${nombre}
- Formación: ${sectorName} — Programa de formación técnica práctica (6 meses) en centro de formación profesional. Formación intensiva en entorno real de taller con herramientas y equipos profesionales.
- Idiomas: ${langText}
- ${carnetMap[carnet] || carnetMap.proceso}

COMPETENCIAS PERSONALES:
${pwrText}

COMPETENCIAS TÉCNICAS (adquiridas en formación práctica):
${techText}

INTERESES PERSONALES:
${hobby}

INSTRUCCIONES DE REDACCIÓN:
1. Redacta un perfil profesional de 3 párrafos para incluir en un CV.
2. Presenta la formación práctica como EXPERIENCIA REAL en entorno profesional, no como formación teórica. Esto es una ventaja competitiva.
3. Destaca la capacidad de aprendizaje, la actitud proactiva y la formación en un entorno exigente con estándares profesionales.
4. Integra las competencias técnicas y personales de forma natural en la redacción.
5. Tono: profesional, directo y orientado a resultados. Transmite madurez y compromiso.
6. NO menciones falta de experiencia. Presenta al candidato como un profesional en formación con base práctica sólida.`;

    $('loader').style.display = 'none';
    $('m-content').style.display = 'block';
    $('m-foot').style.display = 'flex';
  }, 1500);
}

init();
