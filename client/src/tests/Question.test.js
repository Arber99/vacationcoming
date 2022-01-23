import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test("Submit question form", async () => {
  render(<App />);
  const linkElement = screen.getByRole('button', {name: /Submit Parameters/i});
  userEvent.click(linkElement);
  const result = screen.getByTestId('recommendations');
  expect(result).toBeInTheDocument();
});