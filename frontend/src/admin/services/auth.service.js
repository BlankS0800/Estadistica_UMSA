import { httpClient } from './http-client'
import { storageService } from './storage.service'

export const authService = {
  async logIn(email, password) {
    const response = await httpClient('/auth/log-in', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    storageService.set('session', JSON.stringify(data))

    return data
  },

  async verifySession() {
    const response = await httpClient('/auth/me', {
      method: 'GET',
    })
    return response.json()
  },
}
