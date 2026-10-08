import { useState, useEffect, useMemo } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import CurriculumHeroSection from '../components/organisms/pregrado/CurriculumHeroSection'
import CurriculumCiclosSection from '../components/organisms/pregrado/CurriculumCiclosSection'
import ElectivesSection from '../components/organisms/pregrado/ElectivesSection'
import {
  areaLegend,
  curriculumHero as defaultHero,
  electivesAreas,
  electivesMeta,
  loadCurriculumPageData,
} from '../services/pregradoCurriculumData'

function PregradoCurriculumPage() {
  const [hero, setHero] = useState(defaultHero)
  const [planes, setPlanes] = useState([
    { idPlanEstudio: 1, nombrePlan: 'Plan Antiguo' },
    { idPlanEstudio: 2, nombrePlan: 'Plan Nuevo' },
  ])
  const [materias, setMaterias] = useState([])
  const [selectedPlanId, setSelectedPlanId] = useState(2) // Plan Nuevo por defecto
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    loadCurriculumPageData()
      .then((data) => {
        if (!isMounted) return
        if (data.hero) setHero(data.hero)
        if (data.planes && data.planes.length > 0) {
          setPlanes(data.planes)
          // Si existe el plan con ID 2 (Plan Nuevo), usarlo, sino el último o primero
          const planNuevo = data.planes.find((p) => p.idPlanEstudio === 2 || p.nombrePlan.toLowerCase().includes('nuevo'))
          if (planNuevo) {
            setSelectedPlanId(planNuevo.idPlanEstudio)
          } else {
            setSelectedPlanId(data.planes[0].idPlanEstudio)
          }
        }
        if (data.materias && data.materias.length > 0) {
          setMaterias(data.materias)
        }
      })
      .catch((err) => {
        console.error('Error al cargar datos de la malla curricular:', err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [])

  // Filtrar las materias por el plan de estudios seleccionado
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

        {/* Sección de Ciclos Formativos con selector de Plan */}
        <div className="render-optimized">
          <CurriculumCiclosSection
            materias={materiasFiltradas}
            planes={planes}
            selectedPlanId={selectedPlanId}
            onSelectPlan={setSelectedPlanId}
            areaLegend={areaLegend}
          />
        </div>

        <div className="render-optimized">
          <ElectivesSection areas={electivesAreas} meta={electivesMeta} />
        </div>
      </div>
    </div>
  )
}

export default PregradoCurriculumPage
