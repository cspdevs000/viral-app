import { render, screen } from '@testing-library/react';
import Signup from '../components/Signup';

test('renders the heading', () => {
    render(<Signup />);
    const headingElement = screen.getByText(/Sign up for Viral/i);
    expect(headingElement).toBeInTheDocument();
});

test('renders the email form', () => {
    render(<Signup />);
    const emailElement = screen.getByTitle(/email-form/i);
    expect(emailElement).toBeInTheDocument();
});

test('renders the name form', () => {
    render(<Signup />);
    const nameElement = screen.getByTitle(/fullname-form/i);
    expect(nameElement).toBeInTheDocument();
});

test('renders the username form', () => {
    render(<Signup />);
    const usernameElement = screen.getByTitle(/username-form/i);
    expect(usernameElement).toBeInTheDocument();
});

test('renders the password form', () => {
    render(<Signup />);
    const passwordElement = screen.getByTitle(/password-form/i);
    expect(passwordElement).toBeInTheDocument();
});

test('renders the confirm form', () => {
    render(<Signup />);
    const confirmElement = screen.getByTitle(/confirm-form/i);
    expect(confirmElement).toBeInTheDocument();
});

test('renders the county list', () => {
    render(<Signup />);
    const countyElement = screen.getByTitle(/county-list/i);
    expect(countyElement).toBeInTheDocument();
});

test('renders the submit button', () => {
    render(<Signup />);
    const submitElement = screen.getByTitle(/submit-button/i);
    expect(submitElement).toBeInTheDocument();
});


