import { Briefcase, Gavel, GraduationCap, Scale, UserCheck, Users, Zap } from 'lucide-react'

export const authoritiesHero = {
  eyebrow: 'Gobierno y Liderazgo',
  title: ['Autoridades', 'y', 'Gobierno.'],
  description:
    'Liderazgo comprometido con la excelencia académica y la transparencia institucional en la Carrera de Estadística, fundamentado en cogobierno paritario.',
  imageUrl: '/images/institucional/autoridades_hero.jpeg',
  chips: [
    { symbol: 'partial', label: 'Gestión', subtitle: 'Eficiente' },
    { symbol: 'beta', label: 'Beta = 0.8', subtitle: 'Potencia Académica' },
  ],
}

export const directionData = [
  {
    name: 'Ph.D. Juan Carlos Flores Lopez',
    role: 'Director Carrera de Estadística',
    email: 'jcflores@fcpn.edu.bo',
    stats: { s: 'alpha', v: '0.05' },
    img: '/images/institucional/director_flores.jpeg',
    color: '#c2410c',
  },
  {
    name: 'M.Sc. Lucy Gabriela Cuarita Ajno',
    role: 'Directora Académica - Estadística',
    email: 'lcuarita@fcpn.edu.bo',
    stats: { s: 'lambda', v: '0.82' },
    img: '/images/institucional/directora_cuarita.jpeg',
    color: '#00447e',
  },
  {
    name: 'M.Sc. Fernando Oday Rivero Suguiura',
    role: 'Director a.i. del IETA',
    email: 'friverosuguiura2004@gmail.com',
    stats: { s: 'mu', v: '0.95' },
    img: '/images/institucional/director_rivero.jpeg',
    color: '#ea580c',
  },
]

export const hccTeachers = [
  {
    name: 'Ph.D. Juan Carlos Flores Lopez',
    role: 'Docente Titular',
    email: 'jcflores@fcpn.edu.bo',
    img: '/images/institucional/director_flores.jpeg',
  },
  {
    name: 'M.Sc. Fernando Oday Rivero Suguiura',
    role: 'Docente Titular',
    email: 'friverosuguiura2004@gmail.com',
    img: '/images/institucional/director_rivero.jpeg',
  },
  {
    name: 'Lic. Nilda Gloria Flores de Uribe',
    role: 'Docente Titular',
    email: 'nildafloress@hotmail.com',
    img: '/images/institucional/docente_flores_uribe.jpeg',
  },
]

export const hccStudents = [
  {
    name: 'Univ. Jhoseline Gloria Chambi Velasco',
    role: 'Delegada Estudiantil',
    email: 'jchambiv@fcpn.edu.bo',
    img: '/images/institucional/estudiante_chambi.jpeg',
  },
  {
    name: 'Univ. Alejandra Edith Salas Birrueta',
    role: 'Delegada Estudiantil',
    email: 'aesalas@fcpn.edu.bo',
    img: '/images/institucional/estudiante_salas.jpeg',
  },
  {
    name: 'Univ. Alejandra Adela Velarde Machicado',
    role: 'Delegada Estudiantil',
    email: 'avelardem@fcpn.edu.bo',
    img: '/images/institucional/estudiante_velarde.jpeg',
  },
]

export const hccMeta = {
  title: 'Honorable Consejo de Carrera (HCC)',
  subtitle: 'Órgano de Cogobierno',
  description:
    'Estructura paritaria encargada de decisiones normativas, académicas y administrativas para el desarrollo integral de la carrera.',
  teacherTitle: 'Estamento Docente',
  studentTitle: 'Estamento Estudiantil',
  teacherIcon: Gavel,
  studentIcon: Users,
}

export const orgStructure = {
  title: 'Arquitectura de Gestión',
  subtitle: 'Organigrama Funcional',
  top: { title: 'Dirección de Carrera', level: 'Nivel Ejecutivo' },
  middle: [
    { title: 'Honorable Consejo (HCC)', subtitle: 'Cogobierno Docente - Estudiantil', tag: 'Normativo', icon: Scale },
    { title: 'Gestión de Calidad', subtitle: 'Coordinación Curricular', tag: 'Académico', icon: Briefcase },
  ],
  bottom: [
    { title: 'Kardex Académico', icon: UserCheck },
    { title: 'Secretaría de Dirección', icon: GraduationCap },
    { title: 'Soporte Técnico', icon: Zap },
  ],
}
