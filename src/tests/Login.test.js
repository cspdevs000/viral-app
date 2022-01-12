import { render, screen } from '@testing-library/react';
import Login from '../components/Login';

  test('renders Viral heading', () => {
    render(<Login />);
    const headingElement = screen.getByText(/Viral/i);
    expect(headingElement).toBeInTheDocument();
  })
  
  test('renders h1 login', () => {
    render(<Login />);
    const loginElement = screen.getByText(/Log In/i);
    expect(loginElement).toBeInTheDocument();
  })
  
  test('renders email form', () => {
    render(<Login />);
    const emailElement = screen.getByPlaceholderText(/email/i);
    expect(emailElement).toBeInTheDocument();
  })
  