import { useEffect, useState } from 'react'
import AboutCtaSection from '../components/organisms/institutional/AboutCtaSection'
import AboutHeroSection from '../components/organisms/institutional/AboutHeroSection'
import AboutHistorySection from '../components/organisms/institutional/AboutHistorySection'
import AboutMissionVisionSection from '../components/organisms/institutional/AboutMissionVisionSection'
import AboutObjectivesSection from '../components/organisms/institutional/AboutObjectivesSection'
import AboutTimelineSection from '../components/organisms/institutional/AboutTimelineSection'
import AboutValuesSection from '../components/organisms/institutional/AboutValuesSection'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import {
  aboutDataFallback,
  getAboutData,
} from '../services/aboutData'

function AboutPage() {
  const [pageData, setPageData] = useState(aboutDataFallback)
  const [apiError, setApiError] = useState('')

  useEffect(() => {
    let isCurrent = true

    getAboutData()
      .then((data) => {
        if (!isCurrent) return
        setPageData(data)
        setApiError('')
      })
      .catch((error) => {
        if (isCurrent) {
          setPageData(aboutDataFallback)
          setApiError(error.message)
        }
      })

    return () => {
      isCurrent = false
    }
  }, [])

  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />
      <div className="relative z-10">
        {apiError && (
          <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-900">
            No se pudo cargar el contenido desde la API. Se muestran datos de respaldo. Verifica `VITE_API_URL` y el endpoint `/seccion-pagina`.
          </div>
        )}
        <div className="render-optimized"><AboutHeroSection hero={pageData.aboutHero} /></div>
        <div className="render-optimized"><AboutHistorySection ieta={pageData.ietaSummary} /></div>
        <div className="render-optimized"><AboutTimelineSection milestones={pageData.milestones} /></div>
        <div className="render-optimized"><AboutMissionVisionSection missionVision={pageData.missionVision} /></div>
        <div className="render-optimized"><AboutValuesSection values={pageData.values} /></div>
        <div className="render-optimized"><AboutObjectivesSection objectives={pageData.objectives} /></div>
        <div className="render-optimized"><AboutCtaSection accreditation={pageData.accreditation} /></div>
      </div>
    </div>
  )
}

export default AboutPage
