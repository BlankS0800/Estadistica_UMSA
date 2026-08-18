import React from 'react'
import { HeroNewsSection, HomeTopNewsSection } from '../components/organisms/home/HeroNewsSection'
import { QuickAccess } from '../components/organisms/home/QuickAccess'
import { StatsSection } from '../components/organisms/shared/StatsSection'
import { SplitPanel } from '../components/organisms/shared/SplitPanel'
import { GraduateProfile } from '../components/organisms/institutional/GraduateProfile'
import { IETASection } from '../components/organisms/institutional/IETASection'
import { PartnersCarousel } from '../components/organisms/institutional/PartnersCarousel'
import { PortalServicesGrid } from '../components/organisms/home/PortalServicesGrid'
import {
  inicioSlides,
  inicioQuickLinks,
  inicioStats,
  inicioNews,
  inicioEvents,
  inicioGraduateProfile,
  inicioGraduateRoles,
  inicioIETAContent,
  inicioPartners,
  inicioPortalServices,
} from '../services/inicioData'

function LandingPage() {
  // Función para formatear fechas YYYY-MM-DD a "DD Mes YYYY" en español
  const formatSpanishDate = (dateStr) => {
    if (!dateStr) return ''
    if (!dateStr.includes('-')) return dateStr
    const parts = dateStr.split('-')
    if (parts.length !== 3) return dateStr
    const year = parts[0]
    const monthIdx = parseInt(parts[1], 10) - 1
    const day = parseInt(parts[2], 10)
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    return `${day} ${months[monthIdx] || ''} ${year}`
  }

  // 1. Filtrar y ordenar noticias por fecha descendente (las más recientes primero)
  // Obtenemos la fecha actual del sistema local en formato YYYY-MM-DD
  const todayStr = new Date().toLocaleDateString('sv-SE') // Formato estándar: YYYY-MM-DD
  const publishedNews = [...inicioNews]
    .filter((n) => {
      // Filtrar si el estado no es publicado
      if (n.status !== 'published') return false
      // Filtrar si caducó (fecha de caducidad en el pasado)
      if (n.expiryDate && n.expiryDate < todayStr) return false
      return true
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((n) => ({
      ...n,
      date: formatSpanishDate(n.date),
    }))

  // Las últimas 3 noticias para la sección Hero/Superior
  const heroNews = publishedNews.slice(0, 3)

  // 2. Filtrar y ordenar eventos por fecha ascendente (próximos eventos primero)
  const monthsSpanish = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
  const processedEvents = [...inicioEvents]
    .filter((e) => e.status === 'published')
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((e) => {
      const dateObj = new Date(e.date + 'T00:00:00')
      return {
        ...e,
        day: isNaN(dateObj.getDate()) ? '01' : String(dateObj.getDate()).padStart(2, '0'),
        month: isNaN(dateObj.getMonth()) ? 'ENE' : monthsSpanish[dateObj.getMonth()],
      }
    })

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <HeroNewsSection slides={inicioSlides} news={heroNews} />
      <div className="relative -mt-[50px] sm:-mt-14 md:-mt-16 lg:-mt-[68px] z-40">
        <QuickAccess links={inicioQuickLinks} />
      </div>
      <div className="h-6 md:h-7 lg:h-8 bg-transparent" />
      <HomeTopNewsSection news={heroNews} />
      <StatsSection stats={inicioStats} />
      
      {/* Sección del perfil de egreso e IETA */}
      <GraduateProfile profile={inicioGraduateProfile} roles={inicioGraduateRoles} />
      <IETASection content={inicioIETAContent} />

      {/* Servicios del Portal - Reemplaza los testimonios falsos */}
      <PortalServicesGrid items={inicioPortalServices} />

      {/* Agenda y Noticias de manera bien ordenada */}
      <div id="news-section-full">
        <SplitPanel news={publishedNews} events={processedEvents} />
      </div>
      
      <PartnersCarousel partners={inicioPartners} />
    </div>
  )
}

export default LandingPage
