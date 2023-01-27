import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

delete window.matchMedia
window.matchMedia = (query) => ({
	matches: false,
	media: query,
	onchange: null,
	addListener: jest.fn(), // deprecated
	removeListener: jest.fn(), // deprecated
	addEventListener: jest.fn(),
	removeEventListener: jest.fn(),
	dispatchEvent: jest.fn(),
})

test('renders components in App.js', () => {
	render(<App />)
	const appComponents = screen.getByTestId(/app_id/i)
	expect(appComponents).toBeInTheDocument()
})
