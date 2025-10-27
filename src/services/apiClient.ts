import axios from 'axios'
import { processEnv } from '../config/env'

export const apiClient = axios.create({
  baseURL: processEnv.VITE_TMDB_API_URL,
  headers: { Authorization: `Bearer ${processEnv.VITE_TMDB_API_ACCESS_TOKEN}` },
})
