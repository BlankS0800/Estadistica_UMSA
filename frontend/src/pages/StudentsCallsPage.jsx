import { useEffect, useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsCallsGuideSection from '../components/organisms/students/StudentsCallsGuideSection'
import StudentsCallsHeroSection from '../components/organisms/students/StudentsCallsHeroSection'
import StudentsCallsListSection from '../components/organisms/students/StudentsCallsListSection'
import {
  studentsCalls as defaultStudentsCalls,
  studentsCallsFilters as defaultStudentsCallsFilters,
  studentsCallsHero as defaultStudentsCallsHero,
  studentsCallsSteps as defaultStudentsCallsSteps,
  studentsCallsUi as defaultStudentsCallsUi,
  loadStudentsCallsData,
} from '../services/studentsCallsData'

function StudentsCallsPage() {
  const [activeFilter, setActiveFilter] = useState('Todas')
  const [data, setData] = useState({
    hero: defaultStudentsCallsHero,
    calls: defaultStudentsCalls,
    steps: defaultStudentsCallsSteps,
    ui: defaultStudentsCallsUi,
    filters: defaultStudentsCallsFilters,
  })

  useEffect(() => {
    let isMounted = true
    loadStudentsCallsData().then((res) => {
      if (isMounted && res) {
        setData(res)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  const filteredCalls = useMemo(() => {
    if (activeFilter === 'Todas') return data.calls
    return data.calls.filter((call) => call.status === activeFilter)
  }, [activeFilter, data.calls])

  const activeCount = data.calls.filter((call) => call.status === 'Abierta').length

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <StudentsCallsHeroSection
          hero={data.hero}
          activeCount={activeCount}
          filters={data.filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          filterIcon={data.ui.filterIcon}
        />
        <StudentsCallsListSection
          calls={filteredCalls}
          viewIcon={data.ui.cardViewIcon}
          downloadIcon={data.ui.cardDownloadIcon}
        />
        <StudentsCallsGuideSection steps={data.steps} />
      </div>
    </div>
  )
}

export default StudentsCallsPage
