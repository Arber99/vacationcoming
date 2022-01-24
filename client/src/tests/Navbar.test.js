import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test("Click Home on Navbar, the check if homepage is loaded", async () => {
  render(<App />);
  const home = screen.getByTestId('Home')
  userEvent.click(home)
  const intro = await screen.getByTestId('intro')
  expect(intro).toBeInTheDocument()
});

test("Click FAQ on Navbar, the check if FAQ page is loaded", async () => {
    render(<App />);
    const FAQ = screen.getByTestId('FAQ')
    userEvent.click(FAQ)
    const faq = await screen.getByTestId('faq')
    expect(faq).toBeInTheDocument()
  });