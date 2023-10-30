import { render, screen } from '@testing-library/react'
import App from '../App/App';
import loyaltyMembers from '../_mock_/mockData';
import getLoyaltyPoints from '../App/App.js'

test("should show data successfully", () => {
  render(<App />);

  const element = screen.getByText(/125/i);

  expect(element).toBeInTheDocument();
})
test('expect to return loyalty points', () => {
  render(<App />);
  expect(getLoyaltyPoints(loyaltyMembers[8]).toBe(90))
})