import { useState, useEffect } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import ConvalidationHeroSection from '../components/organisms/pregrado/ConvalidationHeroSection'
import ConvalidationTableSection from '../components/organisms/pregrado/ConvalidationTableSection'
import ConvalidationProcedureSection from '../components/organisms/pregrado/ConvalidationProcedureSection'
import {
  convalidationHero as defaultHero,
  convalidationTable as defaultTable,
  convalidationProcedure as defaultProcedure,
  convalidationVisuals,
  loadConvalidationPageData,
} from '../services/pregradoConvalidationData'

function PregradoConvalidationsPage() {
  const [hero, setHero] = useState(defaultHero)
  const [table, setTable] = useState(defaultTable)
  const [procedure, setProcedure] = useState(defaultProcedure)

  useEffect(() => {
    let isMounted = true
    loadConvalidationPageData().then((data) => {
      if (!isMounted) return
      if (data.hero) setHero(data.hero)
      if (data.table) setTable(data.table)
      if (data.procedure) setProcedure(data.procedure)
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-24 pb-24">
        <div className="render-optimized"><ConvalidationHeroSection hero={hero} visuals={convalidationVisuals} /></div>
        <div className="mx-auto w-full max-w-[1536px] px-4 md:px-12">
          <div className="render-optimized"><ConvalidationTableSection section={table} /></div>
        </div>
        <div className="mx-auto w-full max-w-[1536px] px-4 md:px-12">
          <div className="render-optimized"><ConvalidationProcedureSection section={procedure} visuals={convalidationVisuals} /></div>
        </div>
      </div>
    </div>
  )
}

export default PregradoConvalidationsPage
