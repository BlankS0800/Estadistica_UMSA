import { useEffect, useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsHeroSection from '../components/organisms/students/StudentsHeroSection'
import StudentsProceduresSection from '../components/organisms/students/StudentsProceduresSection'
import {
  studentsHero as defaultStudentsHero,
  studentsProcedures as defaultStudentsProcedures,
  studentsUi as defaultStudentsUi,
  loadStudentsProceduresData,
} from '../services/studentsProceduresData'

function StudentsProceduresPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState({
    hero: defaultStudentsHero,
    procedures: defaultStudentsProcedures,
    ui: defaultStudentsUi,
  })

  useEffect(() => {
    let isMounted = true
    loadStudentsProceduresData().then((res) => {
      if (isMounted && res) {
        setData(res)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  const filteredProcedures = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) return data.procedures

    return data.procedures.filter((procedure) => {
      return (
        procedure.title.toLowerCase().includes(query) ||
        procedure.tag.toLowerCase().includes(query)
      )
    })
  }, [searchTerm, data.procedures])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 pb-24">
        <StudentsHeroSection
          hero={data.hero}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <StudentsProceduresSection
          procedures={filteredProcedures}
          modeFlowIcon={data.ui.modeFlowIcon}
          modeRequirementsIcon={data.ui.modeRequirementsIcon}
        />
      </div>
    </div>
  )
}

export default StudentsProceduresPage
