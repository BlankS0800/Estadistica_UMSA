import React, { useEffect, useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { tesisData, loadTesisPageData } from '../services/recursosTesisData';
import TesisHeroSection from '../components/organisms/resources/TesisHeroSection';
import TesisTabs from '../components/organisms/resources/TesisTabs';
import TesisFiltersSidebar from '../components/organisms/resources/TesisFiltersSidebar';
import TesisSearchBar from '../components/organisms/resources/TesisSearchBar';
import TesisEntityGrid from '../components/organisms/resources/TesisEntityGrid';
import TesisSelectedEntity from '../components/organisms/resources/TesisSelectedEntity';
import TesisThesisList from '../components/organisms/resources/TesisThesisList';
import TesisDetailModal from '../components/organisms/resources/TesisDetailModal';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function RecursosTesisPage() {
  const [data, setData] = useState(tesisData);
  const [activeTab, setActiveTab] = useState('general');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [selectedTesis, setSelectedTesis] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnios, setSelectedAnios] = useState([]);
  const [selectedModalidades, setSelectedModalidades] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    loadTesisPageData().then((res) => {
      if (isMounted && res) {
        setData(res);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    setSearchQuery('');
    setSelectedAnios([]);
    setSelectedModalidades([]);
    setSelectedLetter(null);
    setSelectedEntity(null);
    setIsYearDropdownOpen(false);
  }, [activeTab]);

  const indices = useMemo(() => {
    const list = data.investigaciones || [];
    const anios = [...new Set(list.map((item) => item.anoDefensa))].sort(
      (a, b) => b - a
    );

    const extractCounts = (key) => {
      const counts = {};
      list.forEach((item) => {
        const value = item[key];
        if (Array.isArray(value)) {
          value.forEach((v) => {
            counts[v] = (counts[v] || 0) + 1;
          });
        } else {
          counts[value] = (counts[value] || 0) + 1;
        }
      });
      return Object.keys(counts)
        .sort()
        .map((name) => ({ name, count: counts[name] }));
    };

    const materias = extractCounts('materia');
    const autores = extractCounts('autor');
    const tutores = extractCounts('tutor');

    const temasCounts = {};
    list.forEach((item) =>
      item.palabrasClave.forEach((keyword) => {
        temasCounts[keyword] = (temasCounts[keyword] || 0) + 1;
      })
    );
    const temas = Object.keys(temasCounts)
      .sort()
      .map((name) => ({ name, count: temasCounts[name] }));

    return { anios, materias, autores, tutores, temas };
  }, [data.investigaciones]);

  const filteredEntities = useMemo(() => {
    let rawList = [];
    if (activeTab === 'materias') rawList = indices.materias;
    if (activeTab === 'temas') rawList = indices.temas;
    if (activeTab === 'autores') rawList = indices.autores;
    if (activeTab === 'tutores') rawList = indices.tutores;

    const list = data.investigaciones || [];

    return rawList.filter((entity) => {
      const matchSearch = !searchQuery || entity.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchLetter = !selectedLetter || entity.name.toUpperCase().startsWith(selectedLetter);
      const matchYear =
        selectedAnios.length === 0 ||
        list.some((item) => {
          const belongs =
            (activeTab === 'materias' && item.materia.includes(entity.name)) ||
            (activeTab === 'autores' && item.autor === entity.name) ||
            (activeTab === 'tutores' && item.tutor === entity.name) ||
            (activeTab === 'temas' && item.palabrasClave.includes(entity.name));
          return belongs && selectedAnios.includes(item.anoDefensa);
        });
      return matchSearch && matchLetter && matchYear;
    });
  }, [activeTab, indices, searchQuery, selectedLetter, selectedAnios, data.investigaciones]);

  const filteredTheses = useMemo(() => {
    const list = data.investigaciones || [];
    return list
      .filter((item) => {
        if (activeTab === 'general') {
          const matchModalidad =
            selectedModalidades.length === 0 || selectedModalidades.includes(item.modalidad);
          const matchAnio = selectedAnios.length === 0 || selectedAnios.includes(item.anoDefensa);
          const searchLower = searchQuery.toLowerCase();
          return (
            matchModalidad &&
            matchAnio &&
            (!searchQuery ||
              item.titulo.toLowerCase().includes(searchLower) ||
              item.autor.toLowerCase().includes(searchLower) ||
              item.palabrasClave.some((kw) => kw.toLowerCase().includes(searchLower)))
          );
        }

        if (selectedEntity) {
          const matchEntity =
            (activeTab === 'materias' && item.materia.includes(selectedEntity)) ||
            (activeTab === 'autores' && item.autor === selectedEntity) ||
            (activeTab === 'tutores' && item.tutor === selectedEntity) ||
            (activeTab === 'temas' && item.palabrasClave.includes(selectedEntity));
          const matchYear = selectedAnios.length === 0 || selectedAnios.includes(item.anoDefensa);
          return matchEntity && matchYear;
        }
        return false;
      })
      .sort((a, b) => b.anoDefensa - a.anoDefensa);
  }, [activeTab, selectedEntity, selectedModalidades, selectedAnios, searchQuery, data.investigaciones]);

  const availableLetters = useMemo(() => {
    const list = data.investigaciones || [];
    return ALPHABET.filter((letter) =>
      list.some((item) => {
        if (activeTab === 'autores') return item.autor.toUpperCase().startsWith(letter);
        if (activeTab === 'tutores') return item.tutor.toUpperCase().startsWith(letter);
        if (activeTab === 'materias') return item.materia.some((mat) => mat.toUpperCase().startsWith(letter));
        if (activeTab === 'temas') return item.palabrasClave.some((kw) => kw.toUpperCase().startsWith(letter));
        return false;
      })
    );
  }, [activeTab, data.investigaciones]);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#ea580c] selection:text-white">
      <TesisHeroSection hero={data.hero} />
      <TesisTabs tabs={data.tabs || tesisData.tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-[1500px] mx-auto px-6 py-12 flex flex-col lg:flex-row items-start gap-8 min-h-screen relative z-20">
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="lg:hidden w-full bg-white border border-slate-200 p-5 rounded-2xl font-black text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-3 shadow-sm text-[#001d3d]"
        >
          <SlidersHorizontal size={20} /> Mostrar Filtros
        </button>

        <TesisFiltersSidebar
          activeTab={activeTab}
          alphabet={ALPHABET}
          indices={indices}
          selectedAnios={selectedAnios}
          selectedModalidades={selectedModalidades}
          selectedLetter={selectedLetter}
          selectedEntity={selectedEntity}
          setSelectedAnios={setSelectedAnios}
          setSelectedModalidades={setSelectedModalidades}
          setSelectedLetter={setSelectedLetter}
          setSelectedEntity={setSelectedEntity}
          isMobileFiltersOpen={isMobileFiltersOpen}
          setIsMobileFiltersOpen={setIsMobileFiltersOpen}
          modalidades={tesisData.modalidades}
          filteredEntities={{ availableLetters, selectedEntity }}
          isYearDropdownOpen={isYearDropdownOpen}
          setIsYearDropdownOpen={setIsYearDropdownOpen}
        />

        <section className="flex-1 min-w-0">
          <TesisSearchBar
            activeTab={activeTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {selectedEntity && (
            <TesisSelectedEntity
              activeTab={activeTab}
              selectedEntity={selectedEntity}
              onClear={() => setSelectedEntity(null)}
            />
          )}

          {!selectedEntity && activeTab !== 'general' ? (
            <TesisEntityGrid activeTab={activeTab} entities={filteredEntities} onSelectEntity={setSelectedEntity} />
          ) : (
            <TesisThesisList theses={filteredTheses} onSelectTesis={setSelectedTesis} />
          )}
        </section>
      </main>

      <TesisDetailModal selectedTesis={selectedTesis} onClose={() => setSelectedTesis(null)} />
    </div>
  );
}
