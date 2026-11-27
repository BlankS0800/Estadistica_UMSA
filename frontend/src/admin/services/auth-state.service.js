import { storageService } from './storage.service'

export const authStateService = {
  signOut() {
    storageService.remove('session')
  },

  getSession() {
    let currentSession = null

    const maybeSession = storageService.get('session')

    if (maybeSession !== null) {
      if (_isValidSession(maybeSession)) {
        currentSession = maybeSession
      } else {
        authStateService.signOut()
      }
    }

    return currentSession
  },
}

function _isValidSession(maybeSession) {
  if (
    typeof maybeSession !== 'object' ||
    maybeSession === null ||
    typeof maybeSession.access_token !== 'string'
  ) {
    return false
  }

  return _isUnexpiredJwt(maybeSession.access_token)
}

function _isUnexpiredJwt(token) {
  const parts = token.split('.')
  if (parts.length !== 3) return false

  try {
    const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/')
    const payload = JSON.parse(atob(base64))
    if (typeof payload.exp === 'number') {
      const nowSeconds = Math.floor(Date.now() / 1000)
      return payload.exp > nowSeconds
    }
    return true
  } catch {
    return false
  }
}
