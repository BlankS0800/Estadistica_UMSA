import {
  Award,
  CheckCircle2,
  Eye,
  FlaskConical,
  Globe,
  GraduationCap,
  History,
  Landmark,
  Microscope,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'
import { seccionPaginaApi } from './seccionPaginaService'

export const milestones = [
  {
    year: '1960',
    title: 'Mención en Economía',
    desc: 'Inicia la especialidad de estadística bajo la Facultad de Economía para atender la necesidad de cuantificar el desarrollo nacional.',
  },
  {
    year: '1972',
    title: 'Creación de la FCPN',
    desc: 'Reapertura universitaria tras la intervención de 1970. Se crea la Facultad de Ciencias Puras y Naturales integrando Estadística como mención.',
  },
  {
    year: '1979',
    title: 'Primer Titulado',
    desc: 'Hito académico con la emisión del primer título profesional, marcando el inicio de la demanda creciente de estadísticos en el país.',
  },
  {
    year: '1984',
    title: 'Autonomía de Carrera',
    desc: 'Por resolución del 7mo congreso de universidades, la especialidad se separa definitivamente de Matemática como carrera autónoma.',
  },
  {
    year: '1985',
    title: 'Creación del IETA',
    desc: 'Fundación del Instituto de Estadística Teórica y Aplicada para desarrollar investigación científica y consultoría estratégica.',
  },
]

export const values = [
  {
    icon: Target,
    title: 'Excelencia Académica',
    description: 'Compromiso con la formación de profesionales altamente calificados con pensamiento crítico y capacidad analítica.',
    color: '#00447e',
    stat: '',
  },
  {
    icon: Users,
    title: 'Inclusión e Igualdad',
    description: 'Educación de calidad accesible para todos los sectores de la sociedad boliviana sin discriminación.',
    color: '#c2410c',
    stat: '',
  },
  {
    icon: FlaskConical,
    title: 'Investigación Científica',
    description: 'Generación de conocimiento aplicado mediante IETA para resolver problemas nacionales estratégicos.',
    color: '#00447e',
    stat: '',
  },
  {
    icon: Globe,
    title: 'Responsabilidad Social',
    description: 'Contribución activa al desarrollo sostenible mediante análisis estadístico ético y socialmente responsable.',
    color: '#c2410c',
    stat: '',
  },
]


export const objectives = [
  {
    t: 'Pensamiento Crítico',
    d: 'Generar conocimiento científico con capacidad de análisis reflexivo crítico de apoyo a las decisiones de estado.',
    id: '01',
  },
  {
    t: 'Cultura Estadística',
    d: 'Desarrollar y difundir la ciencia, tecnología y cultura estadística dentro y fuera de la institución universitaria.',
    id: '02',
  },
  {
    t: 'Integración Praxis',
    d: 'Desarrollar el proceso académico integrando teoría y práctica y fomentando la enseñanza aprendizaje ligada a la investigación.',
    id: '03',
  },
]

export const aboutHero = {
  eyebrow: 'Acerca de Nosotros',
  title: ['Referente', 'de la', 'Evidencia.'],
  description:
    'Identidad institucional, misión, visión y valores que guían nuestra formación de estadísticos y científicos de datos para Bolivia.',
  imageUrl: '/images/institucional/acerca_hero.jpeg',
}

export const ietaSummary = {
  title: 'Instituto IETA',
  text: 'El Instituto de Estadística Teórica y Aplicada tiene la finalidad de desarrollar investigación científica y contribuir al avance en diferentes campos donde la estadística es transversal.',
  founded: 'Octubre, 1985',
}

export const accreditation = {
  icon: ShieldCheck,
  title: 'Acreditación Institucional',
  description:
    'Reconocidos por el CEUB como carrera de excelencia académica con certificación de calidad en formación estadística.',
  links: [
    { href: '/institucional/acreditacion', label: 'Ver Acreditación', icon: CheckCircle2 },
    { href: '/institucional/autoridades', label: 'Conoce Autoridades', icon: Landmark },
  ],
}

export const missionVision = {
  mission: {
    icon: Target,
    title: 'Misión',
    text: 'Formar profesionales idóneos y competentes en estadística, capaces de generar soluciones creativas e innovadoras comprometidos con el desarrollo nacional.',
  },
  vision: {
    icon: Eye,
    title: 'Visión',
    text: 'Ser líder en la formación de profesionales en ciencia estadística, buscando excelencia académica mediante docencia, investigación y extensión.',
  },
}

export const sideBadges = {
  awardIcon: Award,
}

export const aboutDataFallback = {
  aboutHero,
  ietaSummary,
  milestones,
  missionVision,
  values,
  objectives,
  accreditation,
}

const ABOUT_PAGE_SLUG = '/institucional/acerca'

const getRecordValue = (records, key, fallback) => {
  const record = records.find(
    (item) => (item.claveCampo ?? item.clave_campo) === key,
  )

  return record?.valor ?? fallback
}

const getAboutDataFromRecords = (records) => {
  const value = (key, fallback) => getRecordValue(records, key, fallback)

  return {
    aboutHero: {
      ...aboutHero,
      eyebrow: value('nosotros_inicio_etiqueta', aboutHero.eyebrow),
      title: [
        value('nosotros_inicio_titulo_01', aboutHero.title[0]),
        value('nosotros_inicio_titulo_02', aboutHero.title[1]),
        value('nosotros_inicio_titulo_03', aboutHero.title[2]),
      ],
      description: value('nosotros_inicio_descripcion', aboutHero.description),
      imageUrl: value('nosotros_inicio_imagen', aboutHero.imageUrl),
    },
    ietaSummary: {
      ...ietaSummary,
      title: value('nosotros_ieta_titulo', ietaSummary.title),
      text: value('nosotros_ieta_texto', ietaSummary.text),
      founded: value('nosotros_ieta_fundacion', ietaSummary.founded),
    },
    milestones: milestones.map((milestone, index) => {
      const number = String(index + 1).padStart(2, '0')
      return {
        ...milestone,
        year: value(`nosotros_hito_${number}_anio`, milestone.year),
        title: value(`nosotros_hito_${number}_titulo`, milestone.title),
        desc: value(`nosotros_hito_${number}_descripcion`, milestone.desc),
      }
    }),
    missionVision: {
      mission: {
        ...missionVision.mission,
        title: value('nosotros_mision_titulo', missionVision.mission.title),
        text: value('nosotros_mision_texto', missionVision.mission.text),
      },
      vision: {
        ...missionVision.vision,
        title: value('nosotros_vision_titulo', missionVision.vision.title),
        text: value('nosotros_vision_texto', missionVision.vision.text),
      },
    },
    values: values.map((item, index) => {
      const number = String(index + 1).padStart(2, '0')
      return {
        ...item,
        title: value(`nosotros_valor_${number}_titulo`, item.title),
        description: value(`nosotros_valor_${number}_descripcion`, item.description),
        stat: value(`nosotros_valor_${number}_estadistica`, item.stat),
      }
    }),
    objectives: objectives.map((item, index) => {
      const number = String(index + 1).padStart(2, '0')
      return {
        ...item,
        id: value(`nosotros_objetivo_${number}_numero`, item.id),
        t: value(`nosotros_objetivo_${number}_titulo`, item.t),
        d: value(`nosotros_objetivo_${number}_descripcion`, item.d),
      }
    }),
    accreditation: {
      ...accreditation,
      title: value('nosotros_acreditacion_titulo', accreditation.title),
      description: value(
        'nosotros_acreditacion_descripcion',
        accreditation.description,
      ),
      links: accreditation.links.map((link, index) => {
        const number = String(index + 1).padStart(2, '0')
        return {
          ...link,
          href: value(`nosotros_acreditacion_enlace_${number}_url`, link.href),
          label: value(`nosotros_acreditacion_enlace_${number}_texto`, link.label),
        }
      }),
    },
  }
}

export async function getAboutData() {
  const records = await seccionPaginaApi.list(ABOUT_PAGE_SLUG)
  return records.length > 0 ? getAboutDataFromRecords(records) : aboutDataFallback
}

export async function saveAboutSection(section) {
  return seccionPaginaApi.save({
    ...section,
    paginaSlug: ABOUT_PAGE_SLUG,
  })
}
