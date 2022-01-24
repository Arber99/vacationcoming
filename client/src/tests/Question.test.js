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

test("Fill input in question form, then submit", async () => {
  render(<App />);
  const input1 = screen.getByTestId('input1')
  input1.setSelectionRange(0, 1)
  userEvent.type(input1, '{backspace}75')
  expect(input1).toHaveValue('75')

  const input2 = screen.getByTestId('input2')
  input2.setSelectionRange(0, 1)
  userEvent.type(input2, '{backspace}65')
  expect(input2).toHaveValue('65')

  const linkElement = screen.getByRole('button', {name: /Submit Parameters/i});
  userEvent.click(linkElement);
  const result = screen.getByTestId('recommendations');
  expect(result).toBeInTheDocument();
});