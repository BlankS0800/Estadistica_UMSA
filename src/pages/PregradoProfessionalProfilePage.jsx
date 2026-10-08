import { useState, useEffect } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import ApplicantProfileSection from '../components/organisms/pregrado/ApplicantProfileSection'
import CareerOutcomesSection from '../components/organisms/pregrado/CareerOutcomesSection'
import GraduateCompetenciesSection from '../components/organisms/pregrado/GraduateCompetenciesSection'
import OccupationalFieldSection from '../components/organisms/pregrado/OccupationalFieldSection'
import PregradoHeroSection from '../components/organisms/pregrado/PregradoHeroSection'
import {
  applicantProfile as defaultApplicant,
  careerOutcomes as defaultCareer,
  graduateCompetencies as defaultCompetencies,
  occupationalField as defaultField,
  pregradoHero as defaultHero,
  loadProfilePageData,
} from '../services/pregradoProfileData'

function PregradoProfessionalProfilePage() {
  const [hero, setHero] = useState(defaultHero)
  const [applicant, setApplicant] = useState(defaultApplicant)
  const [competencies, setCompetencies] = useState(defaultCompetencies)
  const [career, setCareer] = useState(defaultCareer)
  const [field, setField] = useState(defaultField)

  useEffect(() => {
    let isMounted = true
    loadProfilePageData().then((data) => {
      if (!isMounted) return
      if (data.hero) setHero(data.hero)
      if (data.applicant) setApplicant(data.applicant)
      if (data.competencies) setCompetencies(data.competencies)
      if (data.career) setCareer(data.career)
      if (data.field) setField(data.field)
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <div className="render-optimized"><PregradoHeroSection hero={hero} /></div>
        <div className="render-optimized"><ApplicantProfileSection section={applicant} /></div>
        <div className="render-optimized"><GraduateCompetenciesSection section={competencies} /></div>
        <div className="render-optimized"><CareerOutcomesSection section={career} /></div>
        <div className="render-optimized"><OccupationalFieldSection section={field} /></div>
      </div>
    </div>
  )
}

export default PregradoProfessionalProfilePage
