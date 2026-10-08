import { useState, useEffect } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AdmissionsHeroSection from '../components/organisms/pregrado/AdmissionsHeroSection'
import AdmissionsTimelineSection from '../components/organisms/pregrado/AdmissionsTimelineSection'
import GeneralRequirementsSection from '../components/organisms/pregrado/GeneralRequirementsSection'
import RegularAdmissionsSection from '../components/organisms/pregrado/RegularAdmissionsSection'
import SpecialAdmissionsSection from '../components/organisms/pregrado/SpecialAdmissionsSection'
import {
  admissionsHero as defaultHero,
  admissionsTimeline as defaultTimeline,
  admissionsVisuals,
  generalRequirements as defaultRequirements,
  regularAdmissions as defaultRegular,
  specialMeta,
  specialModalities,
  loadAdmissionsPageData,
} from '../services/pregradoAdmissionsData'

function PregradoAdmissionsPage() {
  const [hero, setHero] = useState(defaultHero)
  const [regular, setRegular] = useState(defaultRegular)
  const [requirements, setRequirements] = useState(defaultRequirements)
  const [timeline, setTimeline] = useState(defaultTimeline)

  useEffect(() => {
    let isMounted = true
    loadAdmissionsPageData().then((data) => {
      if (!isMounted) return
      if (data.hero) setHero(data.hero)
      if (data.regular) setRegular(data.regular)
      if (data.requirements) setRequirements(data.requirements)
      if (data.timeline) setTimeline(data.timeline)
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-32 pb-20">
        <div className="render-optimized"><AdmissionsHeroSection hero={hero} /></div>
        <div className="render-optimized"><RegularAdmissionsSection section={regular} visuals={admissionsVisuals.decorativeIcons} /></div>
        <div className="render-optimized"><GeneralRequirementsSection section={requirements} visuals={admissionsVisuals.decorativeIcons} /></div>
        <div className="render-optimized"><AdmissionsTimelineSection section={timeline} visuals={admissionsVisuals.decorativeIcons} /></div>
        <div className="render-optimized"><SpecialAdmissionsSection modalities={specialModalities} meta={specialMeta} /></div>
      </div>
    </div>
  )
}

export default PregradoAdmissionsPage
