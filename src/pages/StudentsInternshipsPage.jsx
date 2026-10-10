import { useEffect, useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsInternshipsHeroSection from '../components/organisms/students/StudentsInternshipsHeroSection'
import StudentsInternshipsImpactSection from '../components/organisms/students/StudentsInternshipsImpactSection'
import StudentsInternshipsModalitiesSection from '../components/organisms/students/StudentsInternshipsModalitiesSection'
import StudentsInternshipsOffersSection from '../components/organisms/students/StudentsInternshipsOffersSection'
import StudentsInternshipsProcessSection from '../components/organisms/students/StudentsInternshipsProcessSection'
import StudentsInternshipsResourcesSection from '../components/organisms/students/StudentsInternshipsResourcesSection'
import {
  studentsInternshipDocuments as defaultStudentsInternshipDocuments,
  studentsInternshipMapNodes as defaultStudentsInternshipMapNodes,
  studentsInternshipModalities as defaultStudentsInternshipModalities,
  studentsInternshipOffers as defaultStudentsInternshipOffers,
  studentsInternshipProcess as defaultStudentsInternshipProcess,
  studentsInternshipRequirements as defaultStudentsInternshipRequirements,
  studentsInternshipTestimonials as defaultStudentsInternshipTestimonials,
  studentsInternshipsHero as defaultStudentsInternshipsHero,
  studentsInternshipUi as defaultStudentsInternshipUi,
  loadStudentsInternshipsData,
} from '../services/studentsInternshipsData'

function StudentsInternshipsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState({
    hero: defaultStudentsInternshipsHero,
    modalities: defaultStudentsInternshipModalities,
    process: defaultStudentsInternshipProcess,
    offers: defaultStudentsInternshipOffers,
    requirements: defaultStudentsInternshipRequirements,
    documents: defaultStudentsInternshipDocuments,
    testimonials: defaultStudentsInternshipTestimonials,
    mapNodes: defaultStudentsInternshipMapNodes,
    ui: defaultStudentsInternshipUi,
  })

  useEffect(() => {
    let isMounted = true
    loadStudentsInternshipsData().then((res) => {
      if (isMounted && res) {
        setData(res)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  const filteredOffers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()
    if (!query) return data.offers

    return data.offers.filter((offer) => {
      return (
        (offer.company && offer.company.toLowerCase().includes(query)) ||
        (offer.role && offer.role.toLowerCase().includes(query)) ||
        (offer.area && offer.area.toLowerCase().includes(query))
      )
    })
  }, [searchTerm, data.offers])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <StudentsInternshipsHeroSection hero={data.hero} />
        <StudentsInternshipsModalitiesSection modalities={data.modalities} />
        <StudentsInternshipsProcessSection steps={data.process} />
        <StudentsInternshipsOffersSection
          offers={filteredOffers}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          searchIcon={data.ui.searchIcon}
          postulateIcon={data.ui.postulateIcon}
        />
        <StudentsInternshipsResourcesSection
          requirements={data.requirements}
          documents={data.documents}
          reqCheckIcon={data.ui.reqCheckIcon}
          downloadIcon={data.ui.downloadIcon}
        />
        <StudentsInternshipsImpactSection
          nodes={data.mapNodes}
        />
      </div>
    </div>
  )
}

export default StudentsInternshipsPage
