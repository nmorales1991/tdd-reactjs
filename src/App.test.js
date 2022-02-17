import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('testing App', () => {
  beforeEach(() => {
    render(<App />);
  });
  test('get by text', () => {
    const linkElement = screen.getByText(/hola react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('button get by role', () => {
    const linkElement = screen.getByRole('button', { name: /add/i });
    expect(linkElement).toBeInTheDocument();
  });

  test('renders by label text', () => {
    const linkElement = screen.getByLabelText(/nombre/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('find response axios', async () => {
    const linkElement = await screen.findByText('Leanne Graham');
    expect(linkElement).toBeInTheDocument();
  });

  test('onClick', async () => {
    const button = screen.getByRole('button', { name: /add/i });
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    const result = screen.getByText(/Clicked 3 times/i);
    expect(result).toBeInTheDocument();
  });
});
