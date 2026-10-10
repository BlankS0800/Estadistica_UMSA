import { httpClient } from '../api/httpClient';
import { seccionPaginaApi } from './seccionPaginaService';

export const documentosData = {
  hero: {
    eyebrow: 'GESTIÓN DOCUMENTAL CENTRALIZADA',
    title: ['REPOSITORIO DE', 'RECURSOS DIGITALES'],
    description:
      'Descargue formularios oficiales de auxiliares, partes de asistencia, solicitudes de defensa de panel y declaraciones juradas vigentes.',
  },
  documentos: [
    {
      id: 'doc-001',
      titulo: 'Formulario de Solicitud de Auxiliaturas de Docencia e Investigación',
      categoria: 'Formularios y Trámites',
      formato: 'gdrive',
      peso: 'Carpeta Drive',
      ultimaActualizacion: '2026-02-15',
      urlArchivo: 'https://drive.google.com/drive/folders/1gxt5Gjrn9rKfr9s-G0o10ogmbS7CG9kW?usp=sharing',
    },
    {
      id: 'doc-002',
      titulo: 'Formulario Parte de Asistencia (Auxiliares)',
      categoria: 'Formularios y Trámites',
      formato: 'gdrive',
      peso: 'Carpeta Drive',
      ultimaActualizacion: '2026-02-15',
      urlArchivo: 'https://drive.google.com/drive/folders/1ZUGJ7KuqRSYjpwa2o_jUB5Ht7y9bDBDl?usp=sharing',
    },
    {
      id: 'doc-003',
      titulo: 'Formulario de Solicitud de Defensa de Panel',
      categoria: 'Formularios y Trámites',
      formato: 'pdf',
      peso: '1.2 MB',
      ultimaActualizacion: '2026-02-15',
      urlArchivo: 'https://drive.google.com/uc?export=download&id=1WA_ulsKaEjg5KN2FpMR0RuXR0iMNFkUv',
    },
    {
      id: 'doc-004',
      titulo: 'Formulario de Declaración Jurada',
      categoria: 'Formularios y Trámites',
      formato: 'pdf',
      peso: '450 KB',
      ultimaActualizacion: '2026-02-15',
      urlArchivo: 'https://drive.google.com/uc?export=download&id=1kbBCfn_9rtguukgrwzF8XvTyLcTxq23t',
    },
  ],
  categorias: [
    { id: 'cat1', name: 'Formularios y Trámites', icon: 'ClipboardList', color: 'text-blue-600' },
  ],
  kardex: {
    phone: '2612824 – Int. 104',
    email: 'kardex@estadistica.umsa.bo',
    hours: '09:00 - 12:00 | 15:00 - 18:00',
  },
  sello: {
    title: 'Sello de Validez Institucional',
    description:
      'Todos los formularios y normativas descargados de este portal son las versiones oficiales aprobadas por el Honorable Consejo de Carrera para la gestión 2026. Evite el uso de documentos obsoletos.',
    badges: ['VERIFICACIÓN 2026', 'FIRMA DIGITAL H.C.C.'],
  },
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

export async function loadDocumentosPageData() {
  try {
    const [sections, dbDocumentos] = await Promise.all([
      seccionPaginaApi.list({ paginaSlug: '/recursos/documentos' }).catch(() => []),
      httpClient.get('/documento-digital').catch(() => []),
    ]);

    const secMap = buildSectionMap(sections);

    const hero = {
      eyebrow: secMap.get('rec_docs_hero_eyebrow') || documentosData.hero.eyebrow,
      title: [
        secMap.get('rec_docs_hero_titulo_01') || documentosData.hero.title[0],
        secMap.get('rec_docs_hero_titulo_02') || documentosData.hero.title[1],
      ],
      description: secMap.get('rec_docs_hero_descripcion') || documentosData.hero.description,
    };

    const kardex = {
      phone: secMap.get('rec_docs_kardex_telefono') || documentosData.kardex.phone,
      email: secMap.get('rec_docs_kardex_correo') || documentosData.kardex.email,
      hours: secMap.get('rec_docs_kardex_horario') || documentosData.kardex.hours,
    };

    const sello = {
      title: secMap.get('rec_docs_sello_titulo') || documentosData.sello.title,
      description: secMap.get('rec_docs_sello_descripcion') || documentosData.sello.description,
      badges: [
        secMap.get('rec_docs_sello_badge_01') || documentosData.sello.badges[0],
        secMap.get('rec_docs_sello_badge_02') || documentosData.sello.badges[1],
      ],
    };

    let mappedDocumentos = documentosData.documentos;
    if (Array.isArray(dbDocumentos) && dbDocumentos.length > 0) {
      const dbAdapted = dbDocumentos.map((d) => ({
        id: d.id ? `doc-db-${d.id}` : `doc-${Math.random()}`,
        titulo: d.titulo,
        categoria: d.tipo || 'Formularios y Trámites',
        formato: d.link_descarga?.includes('drive.google.com/drive/folders') ? 'gdrive' : 'pdf',
        peso: d.peso || '1.0 MB',
        ultimaActualizacion: d.fecha_actualizacion ? String(d.fecha_actualizacion).split('T')[0] : '2026-02-15',
        urlArchivo: d.link_descarga || '#',
      }));
      mappedDocumentos = [...dbAdapted, ...documentosData.documentos];
    }

    return {
      hero,
      documentos: mappedDocumentos,
      categorias: documentosData.categorias,
      kardex,
      sello,
    };
  } catch (err) {
    console.error('Error cargando datos dinámicos de Documentos:', err);
    return documentosData;
  }
}

