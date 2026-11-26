import { Navigate, Outlet } from 'react-router-dom'
import { authStateService } from '../services/auth-state.service'

export function PrivateRoute() {
  const session = authStateService.getSession()

  if (!session) {
    return <Navigate to="/admin/login" replace />
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
