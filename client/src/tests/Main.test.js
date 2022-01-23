import { render, screen } from '@testing-library/react';
import App from '../App';

test("Let's start button is active.", async () => {
  render(<App />);
  const linkElement = screen.getByRole('button', {name: /Let's start/i});
  expect(linkElement).toBeEnabled();
});