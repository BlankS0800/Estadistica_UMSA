import {
  BrainCircuit,
  Briefcase,
  CalendarCheck,
  ClipboardEdit,
  Factory,
  FileText,
  Folder,
  Globe,
  GraduationCap,
  Accessibility,
  Medal,
  Trophy,
  Layers,
  ListOrdered,
  Map as MapIcon,
  PieChart,
  Sigma,
  Target,
  TrendingUp,
} from 'lucide-react'

import { httpClient } from '../api/httpClient'
import { seccionPaginaApi } from './seccionPaginaService'

function buildSectionMap(sections) {
  const map = {}
  if (Array.isArray(sections)) {
    for (const s of sections) {
      const key = s.claveCampo || s.clave_campo
      if (key) map[key] = s.valor
    }
  }
  return {
    get: (key) => map[key],
  }
}

export const admissionsHero = {
  badge: 'Convocatoria abierta 2026',
  title: ['Ingreso a la', 'ciencia de', 'Datos.'],
  description:
    'Tu futuro como arquitecto de la evidencia científica comienza aquí. Conoce las vías oficiales de admisión a la Carrera de Estadística de la UMSA.',
  stats: {
    icon: Sigma,
    label: 'Cupos por gestión',
    value: '150+',
    channels: ['PSA', 'PRE-U'],
  },
}

export const regularAdmissions = {
  tag: 'Vías de acceso',
  title: 'Modalidades Regulares',
  sub: 'Las dos rutas principales administradas por la Facultad de Ciencias Puras y Naturales para bachilleres.',
  cards: [
    {
      id: 'psa',
      icon: ClipboardEdit,
      badge: 'Evaluación directa',
      title: 'Prueba de Suficiencia Académica (PSA)',
      description:
        'Examen de dispensación administrado por la FCPN. Evalúa aptitudes lógico-matemáticas y conocimientos exactos en una sola prueba de alto rigor.',
      topics: [
        'Matemática (Cálculo y Álgebra)',
        'Física',
        'Química',
        'Informática básica',
      ],
      cta: {
        label: 'Convocatoria PSA FCPN',
        href: 'https://daf.fcpn.edu.bo/psa/',
      },
      style: 'blue',
    },
    {
      id: 'preu',
      icon: BrainCircuit,
      badge: 'Formación continua',
      title: 'Curso Preparatorio Preuniversitario (Pre-U)',
      description:
        'Programa académico de nivelación dictado por la FCPN. Combina clases teóricas y evaluaciones parciales para preparar al estudiante al rigor universitario.',
      highlights: ['Duración: 10-12 semanas', 'Evaluaciones parciales'],
      cta: {
        label: 'Portal Curso Pre-U',
        href: 'https://daf.fcpn.edu.bo/cursopreparatorio/',
      },
      style: 'orange',
    },
  ],
}

export const specialAdmissions = {
  tag: 'Ingreso por mérito y equidad',
  title: 'Modalidades Especiales',
  sub: 'Vías de admisión directa o con requisitos propios, reguladas por el Reglamento de Admisión Estudiantil de la UMSA y la Facultad de Ciencias Puras y Naturales.',
}

export const generalRequirements = {
  title: ['Documentación', 'General'],
  description:
    'Documentos obligatorios que todo postulante regular debe presentar en ventanillas de Kárdex una vez aprobada la modalidad de ingreso (PSA o Pre-U).',
  items: [
    'Fotocopia legalizada del Título de Bachiller (o libreta de 6° si está en trámite).',
    'Fotocopia simple de Cédula de Identidad vigente.',
    'Certificado de Nacimiento original computarizado.',
    'Comprobante de depósito bancario original (Canje de Valores).',
    'Dos fotografías tamaño 3x4 con fondo celeste o plomo.',
    'Formulario de matriculación web impreso y firmado.',
  ],
}

export const admissionsTimeline = {
  tag: 'Planificación cronológica',
  title: 'Gestiones de Admisión',
  sub: 'La UMSA habilita dos periodos de ingreso al año. Conoce las etapas operativas para las gestiones regulares.',
  periods: [
    {
      id: 's1',
      badge: 'Primera convocatoria',
      title: 'Semestre I / 2026',
      summary: 'Ingreso programado para el inicio de clases en febrero/marzo.',
      badgeStyle: 'orange',
      rows: [
        ['Inscripción Pre-U', 'Agosto - Sept. (año previo)'],
        ['Inscripción PSA', 'Noviembre - Diciembre'],
        ['Entrega de documentos', 'Enero 2026'],
        ['Matriculación Kárdex', 'Febrero 2026'],
      ],
    },
    {
      id: 's2',
      badge: 'Segunda convocatoria',
      title: 'Semestre II / 2026',
      summary: 'Ingreso programado para el inicio de clases en agosto.',
      badgeStyle: 'blue',
      rows: [
        ['Inscripción Pre-U', 'Marzo - Abril'],
        ['Inscripción PSA', 'Junio - Julio'],
        ['Entrega de documentos', 'Julio (última semana)'],
        ['Matriculación Kárdex', 'Agosto 2026'],
      ],
    },
  ],
}

export const specialModalities = [
  {
    id: 'paralelas',
    title: 'Carreras Paralelas',
    icon: Layers,
    desc: 'Para estudiantes regulares de la UMSA que deseen cursar Estadística en simultáneo con su carrera de origen.',
    folder: 'Guindo',
    horario: '09:00 a 12:00 (Ventanillas 6 y 8)',
    hasTable: true,
    reqs: [
      'Carta dirigida a la Jefa Div. Gestiones con carrera origen/destino, C.I. y teléfono.',
      'Historial académico original firmado por el Director de Carrera.',
      'Promedio mínimo de materias aprobadas: 65% (o 80% del plan de estudios).',
      'Plan de estudios con firma y sello de la carrera de origen.',
      'Fotocopia simple de la última matrícula universitaria.',
      'Fotocopia simple de Diploma de Bachiller y C.I.',
    ],
    proc: [
      'Recepción en ventanilla 8 (C.I. pares) y ventanilla 6 (C.I. impares).',
      'Presentar documentación en folder color guindo.',
      'Resultados publicados en vitrinas de la División de Gestiones y portal UMSA.',
    ],
    cta: { label: 'Ir a Gestiones UMSA', href: 'https://gestiones.umsa.bo' },
  },
  {
    id: 'profesionales',
    title: 'Admisión de Profesionales',
    icon: Briefcase,
    desc: 'Ingreso directo para profesionales universitarios, militares/policías, maestros normalistas y titulados técnicos por convenio.',
    folder: 'Naranja',
    horario: '09:00 a 10:00 (Ventanilla 8)',
    hasTable: true,
    reqs: [
      'Carta de solicitud dirigida a la Jefa Div. Gestiones.',
      'Fotocopia legalizada de Diploma Académico o Título en Provisión Nacional.',
      'Fotocopia simple del Certificado de Calificación de Grado Académico.',
      'Fotocopia legalizada de Diploma de Bachiller.',
      'Certificado de Nacimiento original y fotocopia simple de C.I.',
      'Un juego adicional de fotocopias simples de toda la documentación.',
    ],
    proc: [
      'Presentar documentos en folder color naranja en ventanilla 8.',
      'Adquirir y llenar Formulario de Admisiones Especiales en Caja Recaudadora.',
      'La documentación se enviará a la carrera para informe y aprobación.',
      'Con informe favorable, recabar Orden de Compra de Matrícula y pagar en entidad autorizada.',
    ],
    cta: { label: 'Ver convocatoria de profesionales', href: 'https://estadistica.umsa.bo/documents/1506595/3325785/CONVOCATORIA+PROFESIONALES.pdf/9a21d4da-1ffc-7b84-51fd-04f8654c33db' },
  },
  {
    id: 'cambio_carrera',
    title: 'Cambio de Carrera (Interno)',
    icon: Target,
    desc: 'Movilidad estudiantil interna para universitarios UMSA que deseen trasladarse definitivamente a Estadística.',
    folder: 'Oficial',
    horario: '09:00 a 10:00',
    hasTable: true,
    reqs: [
      'Matrícula obtenida en una de las tres últimas gestiones.',
      'Historial académico original: mínimo 2 anuales o 4 semestrales aprobadas.',
      'Fotocopia simple de C.I. y Título de Bachiller.',
      'Fotocopia del plan de estudios de la carrera de origen.',
      'Certificación de Biblioteca (origen) de no adeudo de libros.',
    ],
    proc: [
      'Recepción y selección según reglamento y requisitos FCPN.',
      'Comunicación de procedencia al concluir selección.',
      'Estudiantes aceptados compran Formulario 010 de Cambio de Carrera.',
      'Con firmas autorizadas se emite orden de matriculación en Estadística.',
    ],
    cta: { label: 'Ir a Gestiones UMSA', href: 'https://gestiones.umsa.bo' },
  },
  {
    id: 'traspasos_ext',
    title: 'Traspasos (Sistema y Exterior)',
    icon: Globe,
    desc: 'Movilidad para estudiantes de otras universidades del sistema boliviano o del exterior.',
    folder: 'Oficial',
    horario: 'Según cronograma',
    hasTable: false,
    reqs: [
      'Matrícula vigente en la universidad de origen.',
      'Historial académico original (mínimo 4 materias semestrales aprobadas).',
      'Fotocopia de C.I. y Diploma de Bachiller.',
      'Certificados de no adeudo bibliográfico.',
      'Exterior: documentos legalizados por Consulado Boliviano y Cancillería.',
    ],
    proc: [
      'Carta de solicitud a la Jefa Div. Gestiones especificando carrera y universidad de origen/destino.',
      'Adquirir formulario de traspaso tras autorización.',
      'Someterse a proceso de convalidación de materias en la FCPN.',
    ],
    cta: { label: 'Ir a Gestiones UMSA', href: 'https://gestiones.umsa.bo' },
  },
  {
    id: 'olimpiadas',
    title: 'Olimpiadas Científicas',
    icon: Trophy,
    desc:
      'Ingreso para bachilleres con distinciones en olimpiadas científicas reconocidas. Su aplicación depende del reglamento y de los cupos vigentes; confirma la convocatoria en la División de Gestiones.',
    hasTable: false,
    reqs: [
      'Carta de solicitud dirigida a la División de Gestiones indicando la carrera.',
      'Certificado o diploma oficial de la olimpiada.',
      'Fotocopia legalizada del Diploma de Bachiller.',
      'Fotocopia simple de Cédula de Identidad vigente.',
    ],
    proc: [
      'Consultar en Gestiones si la modalidad está habilitada en la convocatoria vigente.',
      'Presentar la documentación en la fecha y ventanilla que indique la convocatoria.',
      'Revisar la publicación de resultados en el portal de Gestiones.',
    ],
    cta: { label: 'Ver información oficial', href: 'https://gestiones.umsa.bo' },
  },
  {
    id: 'notas',
    title: 'Mejores Bachilleres (Por Notas)',
    icon: GraduationCap,
    desc:
      'Admisión para bachilleres con promedio de calificaciones sobresaliente en secundaria, de acuerdo con el reglamento y la convocatoria vigente.',
    hasTable: false,
    reqs: [
      'Carta de solicitud dirigida a la División de Gestiones indicando la carrera.',
      'Certificado de calificaciones con promedio general.',
      'Fotocopia legalizada del Diploma de Bachiller.',
      'Fotocopia simple de Cédula de Identidad vigente.',
    ],
    proc: [
      'Consultar en Gestiones el promedio mínimo y los cupos de la convocatoria vigente.',
      'Presentar la documentación en la fecha y ventanilla que indique la convocatoria.',
      'Revisar la publicación de resultados en el portal de Gestiones.',
    ],
    cta: { label: 'Ver información oficial', href: 'https://gestiones.umsa.bo' },
  },
  {
    id: 'deportistas',
    title: 'Deportistas Destacados',
    icon: Medal,
    desc:
      'Admisión especial para deportistas con trayectoria acreditada, regulada por el reglamento específico de admisión especial de la UMSA.',
    hasTable: false,
    reqs: [
      'Carta de solicitud dirigida a la División de Gestiones indicando la carrera.',
      'Certificación de la federación o ente deportivo oficial.',
      'Fotocopia legalizada del Diploma de Bachiller.',
      'Fotocopia simple de Cédula de Identidad vigente.',
    ],
    proc: [
      'Consultar en Gestiones el cronograma de admisión especial vigente.',
      'Presentar la documentación en la fecha y ventanilla que indique la convocatoria.',
      'Revisar la publicación de resultados en el portal de Gestiones.',
    ],
    cta: { label: 'Ver información oficial', href: 'https://gestiones.umsa.bo' },
  },
  {
    id: 'discapacidad',
    title: 'Personas con Discapacidad',
    icon: Accessibility,
    desc:
      'Admisión especial directa para bachilleres con discapacidad. La evaluación de postulantes está a cargo de la comisión universitaria correspondiente, según el cronograma de admisión especial.',
    hasTable: false,
    reqs: [
      'Carnet o certificación oficial de discapacidad vigente.',
      'Carta de solicitud dirigida a la División de Gestiones indicando la carrera.',
      'Fotocopia legalizada del Diploma de Bachiller.',
      'Fotocopia simple de Cédula de Identidad vigente.',
    ],
    proc: [
      'Presentar la solicitud y los documentos en Gestiones según el cronograma de admisión especial.',
      'Someterse a la evaluación de la comisión de postulantes con discapacidad.',
      'Revisar los resultados publicados por la universidad.',
    ],
    cta: { label: 'Ver información oficial', href: 'https://gestiones.umsa.bo' },
  },
]

export const specialMeta = {
  title: ['Modalidades', 'Especiales'],
  entity: 'División de Gestiones, Admisiones y Registros UMSA',
  requisitesIcon: FileText,
  procedureIcon: ListOrdered,
  folderIcon: Folder,
}

export const admissionsVisuals = {
  decorativeIcons: {
    regularA: ClipboardEdit,
    regularB: BrainCircuit,
    requirements: FileText,
    timeline: CalendarCheck,
  },
  electivesPalette: [
    { label: 'Analítica aplicada', icon: PieChart },
    { label: 'Proyección económica', icon: TrendingUp },
    { label: 'Rutas geográficas', icon: MapIcon },
    { label: 'Entorno industrial', icon: Factory },
  ],
}

export async function loadAdmissionsPageData() {
  try {
    const [sections, convocatorias] = await Promise.all([
      seccionPaginaApi.list('/pregrado/admisiones').catch(() => []),
      httpClient('/convocatoria').catch(() => []),
    ])

    const secMap = buildSectionMap(sections)

    const hero = {
      ...admissionsHero,
      badge: secMap.get('admisiones_hero_badge') || admissionsHero.badge,
      title: [
        secMap.get('admisiones_hero_titulo_01') || admissionsHero.title[0],
        secMap.get('admisiones_hero_titulo_02') || admissionsHero.title[1],
        secMap.get('admisiones_hero_titulo_03') || admissionsHero.title[2],
      ],
      description: secMap.get('admisiones_hero_descripcion') || admissionsHero.description,
      stats: {
        ...admissionsHero.stats,
        value: secMap.get('admisiones_hero_cupos') || admissionsHero.stats.value,
      },
    }

    const regular = {
      ...regularAdmissions,
      tag: secMap.get('admisiones_modalidades_tag') || regularAdmissions.tag,
      title: secMap.get('admisiones_modalidades_titulo') || regularAdmissions.title,
      sub: secMap.get('admisiones_modalidades_subtitulo') || regularAdmissions.sub,
      cards: regularAdmissions.cards.map((c, idx) => {
        if (idx === 0) {
          return {
            ...c,
            badge: secMap.get('admision_psa_badge') || c.badge,
            title: secMap.get('admision_psa_title') || c.title,
            description: secMap.get('admision_psa_desc') || c.description,
            topics: [
              secMap.get('admision_psa_topic1') || c.topics[0],
              secMap.get('admision_psa_topic2') || c.topics[1],
              secMap.get('admision_psa_topic3') || c.topics[2],
              secMap.get('admision_psa_topic4') || c.topics[3],
            ],
            cta: {
              label: secMap.get('admision_psa_cta_label') || c.cta.label,
              href: secMap.get('admision_psa_cta_href') || c.cta.href,
            },
          }
        }
        if (idx === 1) {
          return {
            ...c,
            badge: secMap.get('admision_preu_badge') || c.badge,
            title: secMap.get('admision_preu_title') || c.title,
            description: secMap.get('admision_preu_desc') || c.description,
            highlights: [
              secMap.get('admision_preu_hl1') || c.highlights[0],
              secMap.get('admision_preu_hl2') || c.highlights[1],
            ],
            cta: {
              label: secMap.get('admision_preu_cta_label') || c.cta.label,
              href: secMap.get('admision_preu_cta_href') || c.cta.href,
            },
          }
        }
        return c
      }),
    }

    const special = {
      ...specialAdmissions,
      tag: secMap.get('admisiones_especiales_tag') || specialAdmissions.tag,
      title: secMap.get('admisiones_especiales_titulo') || specialAdmissions.title,
      sub: secMap.get('admisiones_especiales_subtitulo') || specialAdmissions.sub,
    }

    const reqItems = [
      secMap.get('admision_req_item1'),
      secMap.get('admision_req_item2'),
      secMap.get('admision_req_item3'),
      secMap.get('admision_req_item4'),
      secMap.get('admision_req_item5'),
      secMap.get('admision_req_item6'),
    ].filter(Boolean)

    const requirements = {
      ...generalRequirements,
      title: [
        secMap.get('admisiones_requisitos_titulo')?.split(' ')[0] || generalRequirements.title[0],
        secMap.get('admisiones_requisitos_titulo')?.split(' ').slice(1).join(' ') || generalRequirements.title[1],
      ],
      description: secMap.get('admisiones_requisitos_descripcion') || generalRequirements.description,
      items: reqItems.length > 0 ? reqItems : generalRequirements.items,
    }

    const dynSpecialMeta = {
      ...specialMeta,
      title: secMap.get('admision_esp_title')
        ? secMap.get('admision_esp_title').split(' ')
        : specialMeta.title,
      entity: secMap.get('admision_esp_sub') || specialMeta.entity,
    }

    const keyPrefix = {
      paralelas: 'paralelas',
      profesionales: 'profesional',
      cambio_carrera: 'cambio',
      traspasos_ext: 'traspaso',
      olimpiadas: 'olimpiadas',
      notas: 'notas',
      deportistas: 'deportistas',
      discapacidad: 'discapacidad',
    }

    const dynSpecialModalities = specialModalities.map((item) => {
      const k = `admision_esp_${keyPrefix[item.id] ?? item.id}`
      const listFrom = (suffix, defaults, max) =>
        Array.from({ length: Math.max(defaults.length, max) }, (_, i) =>
          secMap.get(`${k}_${suffix}${i + 1}`) || defaults[i],
        ).filter(Boolean)

      return {
        ...item,
        title: secMap.get(`${k}_title`) || item.title,
        desc: secMap.get(`${k}_desc`) || item.desc,
        folder: secMap.get(`${k}_folder`) || item.folder,
        horario: secMap.get(`${k}_horario`) || item.horario,
        reqs: listFrom('req', item.reqs, 6),
        proc: listFrom('proc', item.proc, 5),
        cta: item.cta
          ? {
              label: secMap.get(`${k}_cta_label`) || item.cta.label,
              href: secMap.get(`${k}_cta_href`) || item.cta.href,
            }
          : undefined,
      }
    })

    let timeline = admissionsTimeline
    if (convocatorias && convocatorias.length > 0) {
      timeline = {
        ...admissionsTimeline,
        periods: convocatorias.map((c, idx) => ({
          id: `conv-${c.idConvocatoria}`,
          badge: idx === 0 ? 'Primera convocatoria' : 'Segunda convocatoria',
          title: c.periodoConvocatoria,
          summary: c.descConvocatoria,
          badgeStyle: idx % 2 === 0 ? 'orange' : 'blue',
          rows: [
            ['Inscripción Pre-U', c.insPreu],
            ['Inscripción PSA', c.insPsa],
            [
              'Entrega de documentos',
              c.fechaEntregaDocs
                ? new Date(c.fechaEntregaDocs).toLocaleDateString('es-ES', {
                    timeZone: 'UTC',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })
                : 'Por definir',
            ],
            ['Matriculación Kárdex', c.matriculacionKardex],
          ],
        })),
      }
    }

    return { hero, regular, special, requirements, timeline, specialModalities: dynSpecialModalities, specialMeta: dynSpecialMeta }
  } catch (err) {
    console.error('Error cargando admisiones dinámicas:', err)
    return {
      hero: admissionsHero,
      regular: regularAdmissions,
      special: specialAdmissions,
      requirements: generalRequirements,
      timeline: admissionsTimeline,
      specialModalities,
      specialMeta,
    }
  }
}

