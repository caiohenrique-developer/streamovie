import z from 'zod'

const envSchema = z.object({
  VITE_TMDB_API_URL: z.url(),
  VITE_TMDB_API_ACCESS_TOKEN: z.string().min(1),
})

const { data, success, error } = envSchema.safeParse(import.meta.env)

if (!success) {
  console.error('❌ Invalid environment variables:', error.format)
  throw new Error('Invalid environment variables')
}

export const processEnv = data as z.infer<typeof envSchema>
