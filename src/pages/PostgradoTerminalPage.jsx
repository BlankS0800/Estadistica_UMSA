import { useEffect, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import PostgradoAdmissionSection from '../components/organisms/postgrado/PostgradoAdmissionSection'
import PostgradoCTASection from '../components/organisms/postgrado/PostgradoCTASection'
import PostgradoCurriculumSection from '../components/organisms/postgrado/PostgradoCurriculumSection'
import PostgradoElectiveSection from '../components/organisms/postgrado/PostgradoElectiveSection'
import PostgradoFieldSection from '../components/organisms/postgrado/PostgradoFieldSection'
import PostgradoHeroSection from '../components/organisms/postgrado/PostgradoHeroSection'
import PostgradoProfileSection from '../components/organisms/postgrado/PostgradoProfileSection'
import {
  admissionRequirements as defaultAdmissionRequirements,
  curriculumMeta as defaultCurriculumMeta,
  curriculumModules as defaultCurriculumModules,
  electiveCatalog as defaultElectiveCatalog,
  occupationalFields as defaultOccupationalFields,
  postgradoFooter as defaultPostgradoFooter,
  postgradoHero as defaultPostgradoHero,
  postgradoProfile as defaultPostgradoProfile,
  loadPostgradoTerminalData,
} from '../services/postgradoTerminalData'

function PostgradoTerminalPage() {
  const [activeMod, setActiveMod] = useState('mod1')
  const [pageData, setPageData] = useState({
    hero: defaultPostgradoHero,
    profile: defaultPostgradoProfile,
    curriculumMeta: defaultCurriculumMeta,
    curriculumModules: defaultCurriculumModules,
    admissionRequirements: defaultAdmissionRequirements,
    occupationalFields: defaultOccupationalFields,
    electiveCatalog: defaultElectiveCatalog,
    postgradoFooter: defaultPostgradoFooter,
  })

  useEffect(() => {
    let isMounted = true
    loadPostgradoTerminalData().then((data) => {
      if (isMounted && data) {
        setPageData(data)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-800 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />
      <div className="relative z-10 space-y-24 pb-24">
        <PostgradoHeroSection hero={pageData.hero} />
        <PostgradoProfileSection section={pageData.profile} />
        <PostgradoCurriculumSection
          meta={pageData.curriculumMeta}
          modules={pageData.curriculumModules}
          activeMod={activeMod}
          onSelectMod={setActiveMod}
        />
        <PostgradoAdmissionSection section={pageData.admissionRequirements} />
        <PostgradoFieldSection section={pageData.occupationalFields} />
        <PostgradoElectiveSection section={pageData.electiveCatalog} />
        <PostgradoCTASection footer={pageData.postgradoFooter} />
      </div>
    </div>
  )
}

export default PostgradoTerminalPage
