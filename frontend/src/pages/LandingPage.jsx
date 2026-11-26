import React, { useEffect, useState } from 'react'
import { HeroNewsSection } from '../components/organisms/home/HeroNewsSection'
import { NewsSection } from '../components/organisms/home/NewsSection'
import { QuickAccess } from '../components/organisms/home/QuickAccess'
import {
  inicioNews,
  inicioDataFallback,
  getInicioNoticiasEventos,
  getInicioData,
} from '../services/inicioData'
import { inicioNewsUi, getInicioNewsUi } from '../services/inicioNewsUiData'

function LandingPage() {
  const [newsSource, setNewsSource] = useState(inicioNews)
  const [inicioData, setInicioData] = useState(inicioDataFallback)
  const [newsUi, setNewsUi] = useState(inicioNewsUi)

  useEffect(() => {
    let isCurrent = true

    getInicioNoticiasEventos()
      .then(({ news }) => {
        if (isCurrent) setNewsSource(news)
      })
      .catch(() => {})

    getInicioData()
      .then((data) => {
        if (isCurrent) setInicioData(data)
      })
      .catch(() => {})

    getInicioNewsUi()
      .then((ui) => {
        if (isCurrent) setNewsUi(ui)
      })
      .catch(() => {})

    return () => {
      isCurrent = false
    }
  }, [])

  // Noticias publicadas, de la más reciente a la más antigua.
  // Las caducadas se marcan (expired) para ocultarlas del listado y encontrarlas solo con el buscador.
  // Se conserva la fecha ISO (dateIso) para ordenar y mostrar la fecha en español.
  const todayStr = new Date().toLocaleDateString('sv-SE') // YYYY-MM-DD
  const publishedNews = [...newsSource]
    .filter((n) => n.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((n) => ({
      ...n,
      dateIso: n.date,
      expired: Boolean(n.expiryDate && n.expiryDate < todayStr),
    }))

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <HeroNewsSection slides={inicioData.slides} scrollLabel={newsUi.heroButton} />
      <div className="relative mt-14 z-40">
        <QuickAccess links={inicioData.quickLinks} />
      </div>
      <div className="h-6 md:h-7 lg:h-8 bg-transparent" />

      <div id="news-section-full">
        <NewsSection news={publishedNews} ui={newsUi} />
      </div>
    </div>
  )
}

export default LandingPage
