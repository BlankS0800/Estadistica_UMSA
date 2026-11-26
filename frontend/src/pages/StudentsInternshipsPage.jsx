import { useEffect, useMemo, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import StudentsInternshipsConveniosSection from '../components/organisms/students/StudentsInternshipsConveniosSection'
import StudentsInternshipsHeroSection from '../components/organisms/students/StudentsInternshipsHeroSection'
import StudentsInternshipsModalitiesSection from '../components/organisms/students/StudentsInternshipsModalitiesSection'
import StudentsInternshipsOffersSection from '../components/organisms/students/StudentsInternshipsOffersSection'
import {
  studentsInternshipConvenios as defaultStudentsInternshipConvenios,
  studentsInternshipModalities as defaultStudentsInternshipModalities,
  studentsInternshipOffers as defaultStudentsInternshipOffers,
  studentsInternshipsHero as defaultStudentsInternshipsHero,
  studentsInternshipUi as defaultStudentsInternshipUi,
  loadStudentsInternshipsData,
} from '../services/studentsInternshipsData'

function StudentsInternshipsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState({
    hero: defaultStudentsInternshipsHero,
    convenios: defaultStudentsInternshipConvenios,
    modalities: defaultStudentsInternshipModalities,
    offers: defaultStudentsInternshipOffers,
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
        <StudentsInternshipsOffersSection
          offers={filteredOffers}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          searchIcon={data.ui.searchIcon}
          postulateIcon={data.ui.postulateIcon}
        />
        <StudentsInternshipsConveniosSection section={data.convenios ?? defaultStudentsInternshipConvenios} />
      </div>
    </div>
  )
}

export default StudentsInternshipsPage
