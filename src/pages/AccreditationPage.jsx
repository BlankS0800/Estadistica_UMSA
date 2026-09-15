import { useEffect, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AccreditationCredentialsSection from '../components/organisms/institutional/AccreditationCredentialsSection'
import AccreditationHeroSection from '../components/organisms/institutional/AccreditationHeroSection'
import AccreditationImpactSection from '../components/organisms/institutional/AccreditationImpactSection'
import {
  accreditationDataFallback,
  getAccreditationData,
} from '../services/accreditationData'

function AccreditationPage() {
  const [pageData, setPageData] = useState(accreditationDataFallback)
  const [apiError, setApiError] = useState('')

  useEffect(() => {
    let isCurrent = true

    getAccreditationData()
      .then((data) => {
        if (!isCurrent) return
        setPageData(data)
        setApiError('')
      })
      .catch((error) => {
        if (isCurrent) {
          setPageData(accreditationDataFallback)
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
        <div className="render-optimized"><AccreditationHeroSection hero={pageData.accreditationHero} /></div>
        <div className="render-optimized"><AccreditationCredentialsSection credentials={pageData.credentials} /></div>
        <div className="render-optimized">
          <AccreditationImpactSection
            highlight={pageData.impactHighlights}
            impactCards={pageData.impactCards}
            cta={pageData.accreditationCta}
          />
        </div>
      </div>
    </div>
  )
}

export default AccreditationPage
