import { useState, useEffect } from 'react'
import InstitutionalBackdrop from '../components/atoms/layout/InstitutionalBackdrop'
import AcademicCalendarSection from '../components/organisms/pregrado/AcademicCalendarSection'
import {
  curriculumCalendarMeta as defaultCalendarMeta,
  eventTypeStyles,
  examSessionData,
  regularCourseData,
  specialEnrollmentNote,
  loadCalendarPageData,
} from '../services/pregradoCurriculumData'

function PregradoAcademicCalendarPage() {
  const [calendarData, setCalendarData] = useState({
    calendarMeta: defaultCalendarMeta,
    examSessionData: examSessionData,
    regularCourseData: regularCourseData,
    specialEnrollmentNote: specialEnrollmentNote,
  })

  useEffect(() => {
    let isMounted = true
    loadCalendarPageData().then((data) => {
      if (!isMounted) return
      setCalendarData({
        calendarMeta: data.calendarMeta || defaultCalendarMeta,
        examSessionData: data.examSessionData || examSessionData,
        regularCourseData: data.regularCourseData || regularCourseData,
        specialEnrollmentNote: data.specialEnrollmentNote || specialEnrollmentNote,
      })
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="pregrado-page relative min-h-screen overflow-x-hidden bg-[#f1f5f9] text-slate-900 selection:bg-[#00447e] selection:text-white">
      <InstitutionalBackdrop />

      <div className="relative z-10 space-y-16 pb-24 pt-16">
        <AcademicCalendarSection
          calendarMeta={calendarData.calendarMeta}
          examSessionData={calendarData.examSessionData}
          regularCourseData={calendarData.regularCourseData}
          eventTypes={eventTypeStyles}
          specialNote={calendarData.specialEnrollmentNote}
        />
      </div>
    </div>
  )
}

export default PregradoAcademicCalendarPage
