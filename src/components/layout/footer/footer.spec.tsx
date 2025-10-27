import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { vi } from 'vitest'
import { Footer } from './index'

vi.mock('../../ui/button', () => ({
  Button: ({ children }: { children: ReactNode }) => (
    <button type="button" data-testid="mock-button">
      {children}
    </button>
  ),
}))

vi.mock('../../ui/button-group', () => ({
  ButtonGroup: ({ children }: { children: ReactNode }) => (
    <div data-testid="mock-button-group">{children}</div>
  ),
}))

vi.mock('../appContainer', () => ({
  AppContainer: ({ children }: { children: ReactNode }) => (
    <div data-testid="mock-app-container">{children}</div>
  ),
}))

const mockUseFooter = vi.fn()
vi.mock('./hooks/useFooter', () => ({ useFooter: () => mockUseFooter() }))

describe('<Footer />', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return correctly all hyperlink list', () => {
    mockUseFooter.mockReturnValue({
      hyperlinkList: [
        { label: 'FAQ', href: '#' },
        { label: 'Central de ajuda', href: '#' },
        { label: 'Termos de uso', href: '#' },
        { label: 'Entre em contato', href: '#' },
      ],
    })

    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(screen.getByTestId('mock-app-container')).toBeInTheDocument()
    expect(screen.getByTestId('mock-button-group')).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Central de ajuda')).toBeInTheDocument()
    expect(screen.getByText('Termos de uso')).toBeInTheDocument()
    expect(screen.getByText('Entre em contato')).toBeInTheDocument()

    const buttons = screen.getAllByTestId('mock-button')
    expect(buttons).toHaveLength(4)

    expect(screen.getByText(/Copyright © 2025/i)).toBeInTheDocument()
    expect(screen.getByText(/Streamovie/i)).toBeInTheDocument()
  })
  it('should render footer component even the hyperlink list is empty', () => {
    mockUseFooter.mockReturnValue({ hyperlinkList: [] })

    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.queryAllByRole('link')).toHaveLength(0)
    expect(screen.getByText(/Streamovie/i)).toBeInTheDocument()
  })
})
