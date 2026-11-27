import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from '../components/organisms/layout/Header'
import { Footer } from '../components/organisms/layout/Footer'
import { mockNavItems } from '../services/mockData'
import { resolvePageByPath } from './pageRegistry'
import { PrivateRoute, PublicRoute } from '../admin/routes/auth.guard'
import LogInPage from '../admin/pages/LogInPage'
import TextEditorPage from '../admin/pages/TextEditorPage'

function PublicPortalShell() {
  const { pathname } = useLocation()
  const ActivePage = resolvePageByPath(pathname)

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans pt-[64px] sm:pt-[70px]">
      <Header navItems={mockNavItems} />

      <main>
        <ActivePage />
      </main>

      <Footer />
    </div>
  )
}

/**
 * Router central unificado:
 * - Rutas bajo /admin/* renderizan el panel de autenticación y edición sin Header/Footer público.
 * - El resto de rutas renderizan el portal público a través de pageRegistry.
 */
function AppRouter() {
  return (
    <Routes>
      {/* Panel de administración */}
      <Route path="/admin" element={<Navigate to="/admin/editor" replace />} />
      <Route element={<PublicRoute />}>
        <Route path="/admin/login" element={<LogInPage />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/admin/editor" element={<TextEditorPage />} />
      </Route>

      {/* Redirecciones de compatibilidad desde rutas anteriores */}
      <Route path="/editor-texto" element={<Navigate to="/admin/editor" replace />} />
      <Route path="/auth" element={<Navigate to="/admin/login" replace />} />
      <Route path="/auth/log-in" element={<Navigate to="/admin/login" replace />} />
      <Route path="/auth/sign-up" element={<Navigate to="/admin/login" replace />} />
      <Route path="/admin/sign-up" element={<Navigate to="/admin/login" replace />} />

      {/* Portal público */}
      <Route path="*" element={<PublicPortalShell />} />
    </Routes>
  )
}

export default AppRouter
