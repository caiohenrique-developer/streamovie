import { renderHook } from '@testing-library/react'
import { useFooter } from './useFooter'

describe('useFooter', () => {
  it('should return a hyperlink list', () => {
    const { result } = renderHook(() => useFooter())

    expect(result.current).toHaveProperty('hyperlinkList')
    expect(Array.isArray(result.current.hyperlinkList)).toBe(true)

    result.current.hyperlinkList.forEach(link => {
      expect(link).toHaveProperty('label')
      expect(link).toHaveProperty('href')
      expect(typeof link.label).toBe('string')
      expect(typeof link.href).toBe('string')
    })

    expect(result.current.hyperlinkList.length).toBeGreaterThan(1)

    const labels = result.current.hyperlinkList.map(link => link.label)
    expect(labels).toContain('FAQ')
  })
})
