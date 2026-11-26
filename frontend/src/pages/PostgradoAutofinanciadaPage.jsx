import { useEffect, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AutofinancedAdmissionSection from '../components/organisms/postgrado/AutofinancedAdmissionSection'
import AutofinancedCTASection from '../components/organisms/postgrado/AutofinancedCTASection'
import AutofinancedCurriculumSection from '../components/organisms/postgrado/AutofinancedCurriculumSection'
import AutofinancedFieldSection from '../components/organisms/postgrado/AutofinancedFieldSection'
import AutofinancedHeroSection from '../components/organisms/postgrado/AutofinancedHeroSection'
import AutofinancedProfileSection from '../components/organisms/postgrado/AutofinancedProfileSection'
import {
  autofinancedAdmissionRequirements as defaultAdmission,
  autofinancedCTA as defaultCTA,
  autofinancedCurriculumMeta as defaultCurriculumMeta,
  autofinancedHero as defaultHero,
  autofinancedModules as defaultModules,
  autofinancedOpportunities as defaultOpportunities,
  autofinancedProfile as defaultProfile,
  loadPostgradoAutofinanciadaData,
} from '../services/postgradoAutofinanciadaData'

function PostgradoAutofinanciadaPage() {
  const [activeMod, setActiveMod] = useState('mod1')
  const [pageData, setPageData] = useState({
    hero: defaultHero,
    profile: defaultProfile,
    curriculumMeta: defaultCurriculumMeta,
    curriculumModules: defaultModules,
    admissionRequirements: defaultAdmission,
    opportunities: defaultOpportunities,
    cta: defaultCTA,
  })

  useEffect(() => {
    let isMounted = true
    loadPostgradoAutofinanciadaData().then((data) => {
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
        <AutofinancedHeroSection hero={pageData.hero} />
        <AutofinancedProfileSection section={pageData.profile} />
        <AutofinancedCurriculumSection
          meta={pageData.curriculumMeta}
          modules={pageData.curriculumModules}
          activeMod={activeMod}
          onSelectMod={setActiveMod}
        />
        <AutofinancedAdmissionSection section={pageData.admissionRequirements} />
        <AutofinancedFieldSection section={pageData.opportunities} />
        <AutofinancedCTASection cta={pageData.cta} />
      </div>
    </div>
  )
}

export default PostgradoAutofinanciadaPage
