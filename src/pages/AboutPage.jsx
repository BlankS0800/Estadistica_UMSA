import { useEffect, useState } from 'react'
import AboutHeroSection from '../components/organisms/institutional/AboutHeroSection'
import AboutHistorySection from '../components/organisms/institutional/AboutHistorySection'
import AboutMissionVisionSection from '../components/organisms/institutional/AboutMissionVisionSection'
import AboutObjectivesSection from '../components/organisms/institutional/AboutObjectivesSection'
import AboutTimelineSection from '../components/organisms/institutional/AboutTimelineSection'
import AboutValuesSection from '../components/organisms/institutional/AboutValuesSection'
import { GraduateProfile } from '../components/organisms/institutional/GraduateProfile'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import {
  aboutDataFallback,
  getAboutData,
} from '../services/aboutData'
import { inicioDataFallback, getInicioData } from '../services/inicioData'

function AboutPage() {
  const [pageData, setPageData] = useState(aboutDataFallback)
  const [apiError, setApiError] = useState('')
  const [graduateData, setGraduateData] = useState(inicioDataFallback)

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

    // Perfil del egresado: usa los mismos campos del editor (inicio_perfil_*, inicio_rol_*) que antes estaban en Inicio
    getInicioData()
      .then((data) => {
        if (isCurrent) setGraduateData(data)
      })
      .catch(() => {})

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
        <div className="render-optimized"><AboutHistorySection /></div>
        <div className="render-optimized"><AboutTimelineSection milestones={pageData.milestones} /></div>
        <div className="render-optimized"><AboutMissionVisionSection missionVision={pageData.missionVision} /></div>
        <div className="render-optimized"><AboutValuesSection values={pageData.values} /></div>
        <div className="render-optimized"><AboutObjectivesSection objectives={pageData.objectives} /></div>
        <div className="render-optimized"><GraduateProfile profile={graduateData.graduateProfile} roles={graduateData.graduateRoles} /></div>
      </div>
    </div>
  )
}

export default AboutPage
