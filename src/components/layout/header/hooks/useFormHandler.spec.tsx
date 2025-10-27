import { act, renderHook } from '@testing-library/react'
import { useFormHandler } from './useFormHandler'

const mockNavigate = vi.fn()
vi.mock('react-router-dom', () => ({ useNavigate: () => mockNavigate }))

describe('useFormHandler', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should be redirected with the form onSubmit action', () => {
    const { result } = renderHook(() => useFormHandler())

    expect(result.current.form.getValues('searchMovieTitle')).toBe('')

    act(() => {
      result.current.onSubmit({ searchMovieTitle: 'Movie title' })
    })

    expect(mockNavigate).toHaveBeenCalledWith('/search?q=Movie%20title')
  })
})
