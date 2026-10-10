import { useState, useEffect } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import GraduationExcellenceBannerSection from '../components/organisms/pregrado/GraduationExcellenceBannerSection'
import GraduationHeroSection from '../components/organisms/pregrado/GraduationHeroSection'
import GraduationModalitiesSection from '../components/organisms/pregrado/GraduationModalitiesSection'
import GraduationWorkshopSection from '../components/organisms/pregrado/GraduationWorkshopSection'
import {
  excellenceBanner as defaultBanner,
  graduationHero as defaultHero,
  graduationModalities,
  graduationModalitiesMeta,
  graduationWorkshop as defaultWorkshop,
  processSteps,
  loadGraduationPageData,
} from '../services/pregradoGraduationData'

function PregradoGraduationPage() {
  const [hero, setHero] = useState(defaultHero)
  const [workshop, setWorkshop] = useState(defaultWorkshop)
  const [steps, setSteps] = useState(processSteps)
  const [modalitiesMeta, setModalitiesMeta] = useState(graduationModalitiesMeta)
  const [modalities, setModalities] = useState(graduationModalities)
  const [banner, setBanner] = useState(defaultBanner)

  useEffect(() => {
    let isMounted = true
    loadGraduationPageData().then((data) => {
      if (!isMounted) return
      if (data.hero) setHero(data.hero)
      if (data.workshop) setWorkshop(data.workshop)
      if (data.processSteps) setSteps(data.processSteps)
      if (data.modalitiesMeta) setModalitiesMeta(data.modalitiesMeta)
      if (data.modalities) setModalities(data.modalities)
      if (data.banner) setBanner(data.banner)
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="pregrado-page bg-gradient-to-br from-white via-[#f8fbff] to-[#eef6ff] text-[#001d3d]">
      <InstitutionalBackdrop variant="light" topOffset="12rem" />
      <main className="relative z-10">
        <GraduationHeroSection hero={hero} />

        <div className="mx-auto flex max-w-[1500px] flex-col gap-28 px-4 py-20 sm:px-6 lg:px-8">
          <GraduationWorkshopSection workshop={workshop} processSteps={steps} />
          <GraduationModalitiesSection meta={modalitiesMeta} modalities={modalities} />
          <GraduationExcellenceBannerSection banner={banner} />
        </div>
      </main>
    </div>
  )
}

export default PregradoGraduationPage
