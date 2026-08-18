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
