import { httpClient } from '../api/httpClient';
import { seccionPaginaApi } from './seccionPaginaService';

export const revistasData = {
  hero: {
    eyebrow: 'RED DE PUBLICACIONES',
    title: ['HEMEROTECA Y REVISTAS', 'CIENTÍFICAS'],
    description:
      'Explora las revistas indexadas de prestigio internacional, junto con los boletines informativos y publicaciones institucionales del Instituto de Estadística.',
    imageUrl:
      '/images/recursos/revistas/revistas_de_estadistica_cientificas_y_academicas_online.jpg',
  },
  filters: ['Todas', 'Internacionales', 'Nacionales', 'Boletines'],
  ieta: {
    title: '¿Te interesa conocer más?',
    text: 'Visita la página oficial del IETA y explora todas sus publicaciones e investigaciones.',
    buttonText: 'Ir a la página del IETA',
    url: '/investigacion/acerca-ieta',
  },
  publicaciones: [
    {
      id: 'pub-001',
      titulo: 'International Journal of Statistics and Applications',
      editor: 'Scientific & Academic Publishing',
      categoria: 'Revista Científica',
      alcance: 'Internacional',
      description:
        'Revista científica internacional que publica artículos originales en todas las áreas teóricas y aplicadas de la estadística.',
      imagenPortada:
        '/images/recursos/revistas/international_journal_of_statistics_and_applications.jpg',
      urlDestino: 'http://www.sapub.org/journal/about.aspx?journalid=1115',
      esExterno: true,
    },
    {
      id: 'pub-002',
      titulo: 'Revista Varianza',
      editor: 'IETA - Carrera de Estadística UMSA',
      categoria: 'Revista Científica',
      alcance: 'Nacional',
      descripcion:
        'Revista oficial de investigación de la Carrera de Estadística y el IETA. Publica trabajos teóricos y aplicados con impacto nacional.',
      imagenPortada:
        '/images/recursos/revistas/revista_varianza.jpg',
      urlDestino: 'https://ojs.umsa.bo/ojs/index.php/varianza',
      esExterno: false,
    },
    {
      id: 'pub-003',
      titulo: 'Revista Colombiana de Estadística',
      editor: 'Universidad Nacional de Colombia',
      categoria: 'Revista Científica',
      alcance: 'Internacional',
      descripcion:
        'Publicación científica de referencia en América Latina orientada a la difusión de trabajos teóricos y aplicados de estadística.',
      imagenPortada:
        '/images/recursos/revistas/revista_colombiana_de_estadistica_l.jpg',
      urlDestino: 'https://revistas.unal.edu.co/index.php/estad',
      esExterno: true,
    },
    {
      id: 'pub-004',
      titulo: 'Boletín DTIC - Universidad Mayor de San Andrés',
      editor: 'Departamento de Tecnologías de Información y Comunicación',
      categoria: 'Boletín Informativo',
      alcance: 'Institucional',
      descripcion:
        'Publicaciones oficiales de la UMSA referidas a infraestructura tecnológica, sistemas académicos y de comunicación universitaria.',
      imagenPortada:
        '/images/recursos/revistas/dtic_-_universidad_mayor_de_san_andres.jpg',
      urlDestino: 'https://dtic.umsa.bo',
      esExterno: true,
    },
    {
      id: 'pub-005',
      titulo: 'Journal of Probability and Statistics',
      editor: 'Hindawi',
      categoria: 'Revista Científica',
      alcance: 'Internacional',
      descripcion:
        'Revista de acceso abierto que publica artículos sobre teoría de probabilidad y métodos estadísticos aplicados a diversos campos científicos.',
      imagenPortada:
        '/images/recursos/revistas/journal_of_probability_and_statistics.jpg',
      urlDestino: 'https://www.hindawi.com/journals/jps/',
      esExterno: true,
    },
    {
      id: 'pub-006',
      titulo: 'Revista Electrónica de Análisis Estadístico Aplicado (EJAS)',
      editor: 'Eurasian Joint Analysis of Statistics',
      categoria: 'Revista Científica',
      alcance: 'Internacional',
      descripcion:
        'Espacio científico interdisciplinario enfocado en la aplicación de métodos estadísticos en las ciencias sociales y aplicadas.',
      imagenPortada:
        '/images/recursos/revistas/la_revista_electronica_de_analisis_estadistico_aplicado_ejas.jpg',
      urlDestino: 'https://www.ejas.org',
      esExterno: true,
    },
  ],
};

function buildSectionMap(sections) {
  const map = {};
  if (Array.isArray(sections)) {
    for (const s of sections) {
      const key = s.claveCampo || s.clave_campo;
      if (key) map[key] = s.valor;
    }
  }
  return {
    get: (key) => map[key],
  };
}

export async function loadRevistasPageData() {
  try {
    const [sections, dbRevistas] = await Promise.all([
      seccionPaginaApi.list('/recursos/revistas').catch(() => []),
      httpClient('/revista').catch(() => []),
    ]);

    const secMap = buildSectionMap(sections);

    const hero = {
      eyebrow: secMap.get('rec_revistas_hero_eyebrow') || revistasData.hero.eyebrow,
      title: [
        secMap.get('rec_revistas_hero_titulo_01') || revistasData.hero.title[0],
        secMap.get('rec_revistas_hero_titulo_02') || revistasData.hero.title[1],
      ],
      description: secMap.get('rec_revistas_hero_descripcion') || revistasData.hero.description,
      imageUrl: secMap.get('rec_revistas_hero_imagen') || revistasData.hero.imageUrl,
    };

    let mappedPublicaciones = revistasData.publicaciones;
    if (Array.isArray(dbRevistas) && dbRevistas.length > 0) {
      const dbAdapted = dbRevistas.map((r) => {
        const alcance = r.tipo?.toLowerCase().includes('nacional')
          ? 'Nacional'
          : r.tipo?.toLowerCase().includes('bolet')
          ? 'Boletin Informativo'
          : 'Internacional';
        return {
          id: r.id ? `pub-db-${r.id}` : `pub-${Math.random()}`,
          titulo: r.titulo,
          editor: r.autor || r.publicacion || 'IETA - UMSA',
          categoria: r.tipo || 'Revista Científica',
          alcance,
          descripcion: r.descripcion || '',
          imagenPortada: '/images/recursos/revistas/revista_varianza.jpg',
          urlDestino: r.link || 'https://ojs.umsa.bo/ojs/index.php/varianza',
          esExterno: r.link ? r.link.startsWith('http') && !r.link.includes('umsa.bo') : false,
        };
      });
      mappedPublicaciones = [...dbAdapted, ...revistasData.publicaciones];
    }

    const ieta = {
      title: secMap.get('rec_revistas_ieta_titulo') || revistasData.ieta.title,
      text: secMap.get('rec_revistas_ieta_texto') || revistasData.ieta.text,
      buttonText: secMap.get('rec_revistas_ieta_boton') || revistasData.ieta.buttonText,
      url: secMap.get('rec_revistas_ieta_url') || revistasData.ieta.url,
    };

    return {
      hero,
      filters: revistasData.filters,
      publicaciones: mappedPublicaciones,
      ieta,
    };
  } catch (err) {
    console.error('Error cargando datos dinámicos de Revistas:', err);
    return revistasData;
  }
}

