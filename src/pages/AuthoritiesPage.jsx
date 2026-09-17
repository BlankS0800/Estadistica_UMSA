import { useEffect, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AuthoritiesDirectionSection from '../components/organisms/institutional/AuthoritiesDirectionSection'
import AuthoritiesHccSection from '../components/organisms/institutional/AuthoritiesHccSection'
import AuthoritiesHeroSection from '../components/organisms/institutional/AuthoritiesHeroSection'
import AuthoritiesStructureSection from '../components/organisms/institutional/AuthoritiesStructureSection'
import {
  authoritiesDataFallback,
  getAuthoritiesData,
} from '../services/authoritiesData'

function AuthoritiesPage() {
  const [authorityData, setAuthorityData] = useState(null)
  const [apiError, setApiError] = useState(false)

  useEffect(() => {
    let isCurrent = true

    getAuthoritiesData()
      .then((data) => {
        if (!isCurrent) return
        setAuthorityData(data)
        setApiError(data.hasApiError)
      })
      .catch(() => {
        if (!isCurrent) return
        setAuthorityData(authoritiesDataFallback)
        setApiError(true)
      })

    return () => {
      isCurrent = false
    }
  }, [])

  if (!authorityData) {
    return (
      <div className="institutional-page flex min-h-screen items-center justify-center bg-[#f1f5f9] text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
        Cargando autoridades...
      </div>
    )
  }

  return (
    <div className="institutional-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />
      <div className="relative z-10">
        {apiError && (
          <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-900">
            No se pudieron cargar completamente los datos de autoridades desde la API. Se muestran datos de respaldo.
          </div>
        )}
        <div className="render-optimized">
          <AuthoritiesHeroSection hero={authorityData.authoritiesHero} />
        </div>
        <div className="render-optimized">
          <AuthoritiesDirectionSection directionData={authorityData.directionData} />
        </div>
        <div className="render-optimized">
          <AuthoritiesHccSection
            meta={authorityData.hccMeta}
            teachers={authorityData.hccTeachers}
            students={authorityData.hccStudents}
          />
        </div>
        <div className="render-optimized">
          <AuthoritiesStructureSection structure={authorityData.orgStructure} />
        </div>
      </div>
    </div>
  )
}

export default AuthoritiesPage
