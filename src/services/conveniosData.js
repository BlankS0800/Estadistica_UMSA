import { Briefcase, Globe, HeartPulse, Handshake, Landmark, PieChart, Target, Building2 } from 'lucide-react'

export const conveniosHero = {
  eyebrow: 'Alianzas Estratégicas',
  title: ['Conectando', 'la', 'Academia.'],
  description:
    'Fortalecemos la formación profesional a través de convenios con instituciones gubernamentales y organismos privados, facilitando pasantías y trabajos dirigidos.',
  imageUrl: '/images/institucional/convenios_hero.jpeg',
  chips: [
    { symbol: 'pi', label: 'Impacto', subtitle: 'Profesional' },
    { symbol: 'lambda', label: 'n = 12', subtitle: 'Convenios' },
  ],
}

export const sectors = [
  {
    id: 'publico',
    label: 'Sector Público',
    icon: Building2,
    symbol: 'Omega',
    items: [
      { name: 'Instituto Nacional de Estadística (INE)', desc: 'Principal aliado estratégico para la práctica censal y encuestas nacionales de gran escala.' },
      { name: 'Gobierno Autónomo de La Paz', desc: 'Desarrollo de proyectos de planificación regional y análisis demográfico departamental.' },
      { name: 'Agencia Nacional de Hidrocarburos (ANH)', desc: 'Modelado y análisis de datos energéticos para la regulación soberana.' },
      { name: 'Ministerio de Trabajo y Empleo', desc: 'Generación de estadísticas laborales y monitoreo de la seguridad social boliviana.' },
      { name: 'Defensa Pública (SEPDEP)', desc: 'Procesamiento y análisis de datos críticos del sistema judicial nacional.' },
      { name: 'Policía Nacional (UNIPOL)', desc: 'Investigación conjunta en áreas de estadística criminal y seguridad ciudadana.' },
    ],
  },
  {
    id: 'salud',
    label: 'Salud y Bienestar',
    icon: HeartPulse,
    symbol: 'psi',
    items: [
      { name: 'Seguro Social Universitario (SSU)', desc: 'Gestión avanzada de datos de salud hospitalaria y bioestadística aplicada.' },
      { name: 'Hospital Central de Tipuani', desc: 'Implementación de métodos estadísticos en salud pública para áreas rurales.' },
    ],
  },
  {
    id: 'internacional',
    label: 'Org. Internacionales',
    icon: Globe,
    symbol: 'phi',
    items: [
      { name: 'Visión Mundial Bolivia', desc: 'Análisis de impacto en proyectos de desarrollo infantil y vulnerabilidad social.' },
      { name: 'Plan Internacional INC', desc: 'Gestión y auditoría de datos para programas de igualdad y derechos humanos.' },
    ],
  },
  {
    id: 'consultoria',
    label: 'Consultoría',
    icon: Briefcase,
    symbol: 'theta',
    items: [
      { name: 'CIECI Consultora Integral', desc: 'Investigación privada y analítica avanzada para el sector empresarial.' },
      { name: 'Acreditación & Certificación', desc: 'Apoyo técnico en procesos de calidad y auditoría institucional.' },
    ],
  },
]

export const benefits = [
  {
    title: 'Pasantías Pre-profesionales',
    description: 'Adquiere experiencia real en el manejo de bases de datos masivas antes de graduarte.',
    icon: Briefcase,
    symbol: 'int',
  },
  {
    title: 'Trabajo Dirigido',
    description: 'Titúlate resolviendo un problema real de análisis estadístico en una institución de prestigio.',
    icon: Target,
    symbol: 'sum',
  },
  {
    title: 'Red de Contactos',
    description: 'Establece vínculos con profesionales del área estadística y líderes de opinión del mercado laboral.',
    icon: Handshake,
    symbol: 'inf',
  },
]

export const conveniosCta = {
  title: 'Referente Nacional',
  label: 'Vínculo Profesional Garantizado',
  icon: PieChart,
}
