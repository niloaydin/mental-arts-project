import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoForm from './TodoForm'

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
test('the button is disabled at the beginning', () => {
	render(<TodoForm />)
	const button = screen.getByRole('button')
	expect(button).toBeDisabled()
})
