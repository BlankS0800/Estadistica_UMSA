import { useEffect, useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import DiplomadosCatalogSection from '../components/organisms/postgrado/DiplomadosCatalogSection'
import DiplomadosHeroSection from '../components/organisms/postgrado/DiplomadosHeroSection'
import DiplomadosProgramModal from '../components/organisms/postgrado/DiplomadosProgramModal'
import DiplomadosRequirementsSection from '../components/organisms/postgrado/DiplomadosRequirementsSection'
import {
  diplomadosFilters as defaultFilters,
  diplomadosHero as defaultHero,
  diplomadosPrograms as defaultPrograms,
  diplomadosRequirements as defaultRequirements,
  diplomadosUi as defaultUi,
  loadPostgradoDiplomadosData,
} from '../services/postgradoDiplomadosData'

function PostgradoDiplomadosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [selectedProgram, setSelectedProgram] = useState(null)
  const [pageData, setPageData] = useState({
    hero: defaultHero,
    programs: defaultPrograms,
    requirements: defaultRequirements,
    filters: defaultFilters,
    ui: defaultUi,
  })

  useEffect(() => {
    let isMounted = true
    loadPostgradoDiplomadosData().then((data) => {
      if (isMounted && data) {
        setPageData(data)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  const filteredPrograms = useMemo(() => {
    return (pageData.programs || []).filter((program) => {
      return activeFilter === 'Todos' ? true : program.area === activeFilter
    })
  }, [pageData.programs, activeFilter])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-800 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-24">
        <DiplomadosHeroSection hero={pageData.hero} sectionIcon={pageData.ui.sectionIcon} />

        <DiplomadosCatalogSection
          programs={filteredPrograms}
          filters={pageData.filters}
          activeFilter={activeFilter}
          onChangeFilter={setActiveFilter}
          onSelectProgram={setSelectedProgram}
          sectionIcon={pageData.ui.sectionIcon}
          filterIcon={pageData.ui.filterIcon}
          durationIcon={pageData.ui.durationIcon}
          modalityIcon={pageData.ui.modalityIcon}
          emptyIcon={pageData.ui.emptyIcon}
        />

        <DiplomadosRequirementsSection
          section={pageData.requirements}
          requirementsIcon={pageData.ui.icon || pageData.ui.sectionIcon}
          opportunitiesIcon={pageData.ui.opportunitiesIcon}
        />
      </div>

      <DiplomadosProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        durationIcon={pageData.ui.durationIcon}
        modalityIcon={pageData.ui.modalityIcon}
        moduleIcon={pageData.ui.moduleIcon}
        investmentIcon={pageData.ui.investmentIcon}
      />
    </div>
  )
}

export default PostgradoDiplomadosPage
