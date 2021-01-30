import { render, screen } from '@testing-library/react';
import App from './App';

it('Deve renderizar o componente', () => {
  render(<App />); 
  const linkElement = screen.getByText(/thiago/i);
  expect(linkElement).toBeInTheDocument();
});
