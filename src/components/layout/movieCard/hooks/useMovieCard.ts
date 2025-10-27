import { findAll } from 'highlight-words-core'
import { useSearchParams } from 'react-router-dom'

export function useMovieCard(title: string) {
  const [searchParams] = useSearchParams()

  const searchQuery = searchParams.get('q')?.trim() || ''
  const chunks = findAll({ textToHighlight: title, searchWords: [searchQuery] })

  return { chunks }
}
