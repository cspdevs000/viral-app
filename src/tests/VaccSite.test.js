import { render, screen } from '@testing-library/react';
import VaccSites from '../components/VaccSites';

test('renders the site button', () => {
    render(<VaccSites />);
    const buttonElement = screen.getByTitle(/site-button/i);
    expect(buttonElement).toBeInTheDocument();
});

test('renders the search field', () => {
    render(<VaccSites />);
    const searchElement = screen.getByTitle(/search-field/i);
    expect(searchElement).toBeInTheDocument();
});

test('renders the submit button', () => {
    render(<VaccSites />);
    const submitElement = screen.getByTitle(/submit-button/i);
    expect(submitElement).toBeInTheDocument();
});

test('renders the display', () => {
    render(<VaccSites />);
    const displayElement = screen.getByTitle(/display/i);
    expect(displayElement).toBeInTheDocument();
});