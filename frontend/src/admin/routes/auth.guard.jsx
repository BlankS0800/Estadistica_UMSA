import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { authStateService } from '../services/auth-state.service'
import { authService } from '../services/auth.service'

export function PrivateRoute() {
  const session = authStateService.getSession()
  const [status, setStatus] = useState(session ? 'checking' : 'unauthorized')

  useEffect(() => {
    if (!session) {
      setStatus('unauthorized')
      return undefined
    }

    let isMounted = true
    authService
      .verifySession()
      .then(() => {
        if (isMounted) setStatus('authorized')
      })
      .catch(() => {
        authStateService.signOut()
        if (isMounted) setStatus('unauthorized')
      })

    return () => {
      isMounted = false
    }
  }, [session?.access_token])

  if (status === 'unauthorized') {
    return <Navigate to="/admin/login" replace />
  }

  if (status === 'checking') {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-100 text-sm font-medium text-slate-500">
        Verificando sesión...
      </main>
    )
  }

  return <Outlet />
}

/** Equivalente a `publicGuard`. */
export function PublicRoute() {
  const session = authStateService.getSession()

  if (session) {
    return <Navigate to="/admin/editor" replace />
  }

  return <Outlet />
}
