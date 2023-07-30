import {render, screen} from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders Github Finder', () => {
    render(<App />);
    const linkElement = screen.getByText(/Github Finder/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('renders toBeInTheDocument', () => {
    render(<App />);
    expect(screen.getByTestId('toggle-btn')).toBeInTheDocument();
    expect(screen.getByText(/Go/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toBeDisabled();
  });
  test('renders without placeholder', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
  });
});
