import { render, screen } from '@testing-library/react';
import AddVaccSite from '../components/AddVaccSite';

test('renders the title of page', () => {
    render(<AddVaccSite />);
    const titleElement = screen.getByText(/Add a Vaccination Site/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders the location form', () => {
    render(<AddVaccSite />);
    const locationElement = screen.getByTitle(/location-form/i);
    expect(locationElement).toBeInTheDocument();
});

test('renders the address form', () => {
    render(<AddVaccSite />);
    const addressElement = screen.getByTitle(/address-form/i);
    expect(addressElement).toBeInTheDocument();
});

test('renders the city form', () => {
    render(<AddVaccSite />);
    const cityElement = screen.getByTitle(/city-form/i);
    expect(cityElement).toBeInTheDocument();
});

test('renders the phone form', () => {
    render(<AddVaccSite />);
    const phoneElement = screen.getByTitle(/phone-form/i);
    expect(phoneElement).toBeInTheDocument();
});

test('renders the state form', () => {
    render(<AddVaccSite />);
    const stateElement = screen.getByTitle(/state-form/i);
    expect(stateElement).toBeInTheDocument();
});

test('renders the zip form', () => {
    render(<AddVaccSite />);
    const zipElement = screen.getByTitle(/zip-form/i);
    expect(zipElement).toBeInTheDocument();
});

test('renders the wait form', () => {
    render(<AddVaccSite />);
    const waitElement = screen.getByTitle(/wait-form/i);
    expect(waitElement).toBeInTheDocument();
});

test('renders the submit button', () => {
    render(<AddVaccSite />);
    const submitElement = screen.getByTitle(/submit-button/i);
    expect(submitElement).toBeInTheDocument();
});