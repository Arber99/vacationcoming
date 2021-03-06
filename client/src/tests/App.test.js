import { render, screen } from '@testing-library/react';
import App from '../App';

test('Welcome message renders correctly', async () => {
  render(<App />);
  const linkElement = await screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});