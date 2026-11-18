import { useState, useEffect } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AdmissionsHeroSection from '../components/organisms/pregrado/AdmissionsHeroSection'
import RegularAdmissionsSection from '../components/organisms/pregrado/RegularAdmissionsSection'
import SpecialAdmissionsSection from '../components/organisms/pregrado/SpecialAdmissionsSection'
import {
  admissionsHero as defaultHero,
  admissionsVisuals,
  regularAdmissions as defaultRegular,
  specialAdmissions as defaultSpecial,
  specialMeta,
  specialModalities,
  loadAdmissionsPageData,
} from '../services/pregradoAdmissionsData'

function PregradoAdmissionsPage() {
  const [hero, setHero] = useState(defaultHero)
  const [regular, setRegular] = useState(defaultRegular)
  const [special, setSpecial] = useState(defaultSpecial)
  const [modalities, setModalities] = useState(specialModalities)
  const [meta, setMeta] = useState(specialMeta)

  useEffect(() => {
    let isMounted = true
    loadAdmissionsPageData().then((data) => {
      if (!isMounted) return
      if (data.hero) setHero(data.hero)
      if (data.regular) setRegular(data.regular)
      if (data.special) setSpecial(data.special)
      if (data.specialModalities) setModalities(data.specialModalities)
      if (data.specialMeta) setMeta(data.specialMeta)
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
        <div className="render-optimized"><SpecialAdmissionsSection header={special} modalities={modalities} meta={meta} /></div>
      </div>
    </div>
  )
}

export default PregradoAdmissionsPage
