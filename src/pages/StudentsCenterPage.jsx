import { useEffect, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsCenterHeroSection from '../components/organisms/students/StudentsCenterHeroSection'
import StudentsCenterLeadershipSection from '../components/organisms/students/StudentsCenterLeadershipSection'
import StudentsCenterServicesSection from '../components/organisms/students/StudentsCenterServicesSection'
import StudentsCenterStructureSection from '../components/organisms/students/StudentsCenterStructureSection'
import StudentsCenterSectionHeader from '../components/molecules/students/StudentsCenterSectionHeader'
import {
  delegadosAcademico as defaultDelegadosAcademico,
  delegadosHcf as defaultDelegadosHcf,
  directivaCee as defaultDirectivaCee,
  studentsCenterChannels as defaultStudentsCenterChannels,
  studentsCenterHero as defaultStudentsCenterHero,
  studentsCenterServices as defaultStudentsCenterServices,
  studentsCenterStats as defaultStudentsCenterStats,
  studentsCenterStructure as defaultStudentsCenterStructure,
  loadStudentsCenterData,
} from '../services/studentsCenterData'

function StudentsCenterPage() {
  const [data, setData] = useState({
    hero: defaultStudentsCenterHero,
    stats: defaultStudentsCenterStats,
    channels: defaultStudentsCenterChannels,
    services: defaultStudentsCenterServices,
    structure: defaultStudentsCenterStructure,
    directivaCee: defaultDirectivaCee,
    delegadosHcf: defaultDelegadosHcf,
    delegadosAcademico: defaultDelegadosAcademico,
  })

  useEffect(() => {
    let isMounted = true
    loadStudentsCenterData().then((res) => {
      if (isMounted && res) {
        setData(res)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <StudentsCenterHeroSection
          hero={data.hero}
          stats={data.stats}
          channels={data.channels}
        />
        <StudentsCenterServicesSection
          services={data.services}
          sectionHeaderComponent={StudentsCenterSectionHeader}
        />
        <StudentsCenterStructureSection
          structure={data.structure}
          sectionHeaderComponent={StudentsCenterSectionHeader}
        />
        <StudentsCenterLeadershipSection
          directiva={data.directivaCee}
          delegadosHcf={data.delegadosHcf}
          delegadosAcademico={data.delegadosAcademico}
          sectionHeaderComponent={StudentsCenterSectionHeader}
        />
      </div>
    </div>
  )
}

export default StudentsCenterPage
