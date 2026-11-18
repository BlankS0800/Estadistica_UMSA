import { useEffect, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsScientificBenefitsSection from '../components/organisms/students/StudentsScientificBenefitsSection'
import StudentsScientificHeroSection from '../components/organisms/students/StudentsScientificHeroSection'
import StudentsScientificResearchSection from '../components/organisms/students/StudentsScientificResearchSection'
import {
  admissionSteps as defaultAdmissionSteps,
  benefits as defaultBenefits,
  researchLines as defaultResearchLines,
  studentsScientificHero as defaultStudentsScientificHero,
  studyNodes as defaultStudyNodes,
  loadStudentsScientificSocietyData,
} from '../services/studentsScientificSocietyData'

function StudentsScientificSocietyPage() {
  const [data, setData] = useState({
    hero: defaultStudentsScientificHero,
    researchLines: defaultResearchLines,
    studyNodes: defaultStudyNodes,
    benefits: defaultBenefits,
    admissionSteps: defaultAdmissionSteps,
  })

  useEffect(() => {
    let isMounted = true
    loadStudentsScientificSocietyData().then((res) => {
      if (isMounted && res) {
        setData(res)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <StudentsScientificHeroSection hero={data.hero} />
        <StudentsScientificResearchSection researchLines={data.researchLines} studyNodes={data.studyNodes} />
        <StudentsScientificBenefitsSection benefits={data.benefits} admissionSteps={data.admissionSteps} />
      </div>
    </div>
  )
}

export default StudentsScientificSocietyPage
