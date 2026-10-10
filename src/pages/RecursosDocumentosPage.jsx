import React, { useEffect, useState } from 'react';
import { documentosData, loadDocumentosPageData } from '../services/recursosDocumentosData';
import DocumentosHeroSection from '../components/organisms/resources/DocumentosHeroSection';
import DocumentosArchiveroGrid from '../components/organisms/resources/DocumentosArchiveroGrid';
import DocumentosSidebar from '../components/organisms/resources/DocumentosSidebar';

export default function RecursosDocumentosPage() {
  const [data, setData] = useState(documentosData);

  useEffect(() => {
    let isMounted = true;
    loadDocumentosPageData().then((res) => {
      if (isMounted && res) {
        setData(res);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#ea580c] selection:text-white">
      
      {/* ── HERO ── */}
      <DocumentosHeroSection hero={data.hero} />

      {/* ── INTERFAZ DE EXPLORACIÓN ── */}
      <main className="max-w-[1400px] mx-auto px-6 py-16 min-h-screen grid lg:grid-cols-[1fr_350px] gap-12 relative z-20">
        
        {/* COLUMNA IZQUIERDA: ARCHIVERO */}
        <DocumentosArchiveroGrid 
          documentos={data.documentos}
          categorias={data.categorias}
          sello={data.sello}
        />

        {/* COLUMNA DERECHA: SIDEBAR DE KARDEX */}
        <DocumentosSidebar kardexInfo={data.kardex} />

      </main>

    </div>
  );
}

