import React, { useEffect, useMemo, useState } from 'react';
import { revistasData, loadRevistasPageData } from '../services/recursosRevistasData';
import RevistasHeroSection from '../components/organisms/resources/RevistasHeroSection';
import RevistasFilterBar from '../components/organisms/resources/RevistasFilterBar';
import RevistasPublicationsGrid from '../components/organisms/resources/RevistasPublicationsGrid';
import RevistasIetaLinkSection from '../components/organisms/resources/RevistasIetaLinkSection';

export default function RecursosRevistasPage() {
  const [data, setData] = useState(revistasData);
  const [activeFilter, setActiveFilter] = useState('Todas');

  useEffect(() => {
    let isMounted = true;
    loadRevistasPageData().then((res) => {
      if (isMounted && res) {
        setData(res);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredPublications = useMemo(() => {
    const list = data.publicaciones || [];
    if (activeFilter === 'Todas') return list;
    if (activeFilter === 'Internacionales') {
      return list.filter((pub) => pub.alcance === 'Internacional');
    }
    if (activeFilter === 'Nacionales') {
      return list.filter(
        (pub) => pub.alcance === 'Nacional' || pub.alcance === 'Institucional'
      );
    }
    if (activeFilter === 'Boletines') {
      return list.filter((pub) => pub.categoria === 'Boletin Informativo');
    }
    return list;
  }, [activeFilter, data.publicaciones]);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#ea580c] selection:text-white">
      <RevistasHeroSection hero={data.hero} />

      <main className="max-w-[1400px] mx-auto px-6 py-16 min-h-screen">
        <RevistasFilterBar
          filters={data.filters || revistasData.filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <RevistasPublicationsGrid publications={filteredPublications} activeFilter={activeFilter} />
      </main>

      <RevistasIetaLinkSection section={data.ieta ?? revistasData.ieta} />
    </div>
  );
}

