import { useState, useEffect, useMemo } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import CurriculumHeroSection from '../components/organisms/pregrado/CurriculumHeroSection'
import CurriculumCiclosSection from '../components/organisms/pregrado/CurriculumCiclosSection'
import {
  curriculumHero as defaultHero,
  electivesAreas,
  electivesMeta,
  loadCurriculumPageData,
} from '../services/pregradoCurriculumData'

function PregradoCurriculumPage() {
  const [hero, setHero] = useState(defaultHero)
  const [materias, setMaterias] = useState([])
  const [selectedPlanId, setSelectedPlanId] = useState(2) // Plan Nuevo por defecto

  useEffect(() => {
    let isMounted = true
    loadCurriculumPageData()
      .then((data) => {
        if (!isMounted) return
        if (data.hero) setHero(data.hero)
        if (data.planes && data.planes.length > 0) {
          // Si existe el plan con ID 2 (Plan Nuevo), usarlo, sino el primero
          const planNuevo = data.planes.find((p) => p.idPlanEstudio === 2 || p.nombrePlan.toLowerCase().includes('nuevo'))
          setSelectedPlanId(planNuevo ? planNuevo.idPlanEstudio : data.planes[0].idPlanEstudio)
        }
        if (data.materias && data.materias.length > 0) {
          setMaterias(data.materias)
        }
      })
      .catch((err) => {
        console.error('Error al cargar datos de la malla curricular:', err)
      })

    return () => {
      isMounted = false
    }
  }, [])

  // Solo se muestran las materias del plan de estudios vigente (Plan Nuevo)
  const materiasFiltradas = useMemo(() => {
    if (!selectedPlanId || materias.length === 0) return materias
    return materias.filter((m) => {
      if (!m.incluye || m.incluye.length === 0) return true
      return m.incluye.some((inc) => Number(inc.idPlanEstudio) === Number(selectedPlanId))
    })
  }, [materias, selectedPlanId])

  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-20 pb-24">
        <div className="render-optimized">
          <CurriculumHeroSection hero={hero} />
        </div>

        <div className="render-optimized">
          <CurriculumCiclosSection
            materias={materiasFiltradas}
            electivesAreas={electivesAreas}
            electivesMeta={electivesMeta}
          />
        </div>
      </div>
    </div>
  )
}

export default PregradoCurriculumPage
