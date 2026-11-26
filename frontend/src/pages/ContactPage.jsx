import { useEffect, useState } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import ContactFormDirectorySection from '../components/organisms/contact/ContactFormDirectorySection'
import ContactGallerySection from '../components/organisms/contact/ContactGallerySection'
import ContactHeroSection from '../components/organisms/contact/ContactHeroSection'
import ContactLocationsSection from '../components/organisms/contact/ContactLocationsSection'
import { contactoDataFallback, getContactoData } from '../services/contactData'

function ContactPage() {
  const [contactoData, setContactoData] = useState(contactoDataFallback)

  useEffect(() => {
    let isCurrent = true

    getContactoData()
      .then((data) => {
        if (isCurrent) setContactoData(data)
      })
      .catch(() => {})

    return () => {
      isCurrent = false
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10">
        <ContactHeroSection hero={contactoData.hero} />
        <ContactFormDirectorySection
          formConfig={contactoData.formConfig}
          phones={contactoData.directoryPhones}
          emails={contactoData.directoryEmails}
          directoryUi={contactoData.directoryUi}
        />
        <ContactLocationsSection
          sectionData={contactoData.locationsSection}
          locations={contactoData.locations}
        />
        <ContactGallerySection gallery={contactoData.gallery} />
      </div>
    </div>
  )
}

export default ContactPage