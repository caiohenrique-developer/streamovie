import { processEnv } from '../config/env'
import { apiClient } from './apiClient'

describe('apiClient', () => {
  it('should have correct baseURL and headers', () => {
    const { baseURL, headers } = apiClient.defaults

    expect(baseURL).toBe(processEnv.VITE_TMDB_API_URL)
    expect(headers.Authorization).toBe(
      `Bearer ${processEnv.VITE_TMDB_API_ACCESS_TOKEN}`
    )
  })
})
