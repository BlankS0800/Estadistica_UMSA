import { useEffect, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsScientificBenefitsSection from '../components/organisms/students/StudentsScientificBenefitsSection'
import StudentsScientificHeroSection from '../components/organisms/students/StudentsScientificHeroSection'
import StudentsScientificImpactSection from '../components/organisms/students/StudentsScientificImpactSection'
import StudentsScientificResearchSection from '../components/organisms/students/StudentsScientificResearchSection'
import StudentsScientificRepositorySection from '../components/organisms/students/StudentsScientificRepositorySection'
import {
  admissionSteps as defaultAdmissionSteps,
  benefits as defaultBenefits,
  journals as defaultJournals,
  papers as defaultPapers,
  researchLines as defaultResearchLines,
  societyMapNodes as defaultSocietyMapNodes,
  societyTestimonials as defaultSocietyTestimonials,
  societyUi as defaultSocietyUi,
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
    papers: defaultPapers,
    journals: defaultJournals,
    societyTestimonials: defaultSocietyTestimonials,
    societyMapNodes: defaultSocietyMapNodes,
    societyUi: defaultSocietyUi,
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
        <StudentsScientificRepositorySection
          papers={data.papers}
          journals={data.journals}
          sectionIcon={data.societyUi.sectionIcon}
        />
        <StudentsScientificImpactSection nodes={data.societyMapNodes} />
      </div>
    </div>
  )
}

export default StudentsScientificSocietyPage
