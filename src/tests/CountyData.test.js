import { render, screen } from '@testing-library/react';
import CountyData from '../components/CountyData';

test('renders h1 title', () => {
    render(<CountyData />);
    const titleElement = screen.getByText(/Select a County/i);
    expect(titleElement).toBeInTheDocument();
});

test('renders county form', () => {
    render(<CountyData />);
    const formElement = screen.getByTitle(/dropdown/i);
    expect(formElement).toBeInTheDocument();
});

test('renders form display', () => {
    render(<CountyData />);
    const formDisplayElement = screen.getByTitle(/list/i);
    expect(formDisplayElement).toBeInTheDocument();
});

test('renders submit button', () => {
    render(<CountyData />);
    const submitElement = screen.getByTitle(/submit-button/i);
    expect(submitElement).toBeInTheDocument();
});

test('renders county name', () => {
    render(<CountyData />);
    const countyNameElement = screen.getByTitle(/county-name/i);
    expect(countyNameElement).toBeInTheDocument();
});

test('renders county data table title', () => {
    render(<CountyData />);
    const countyDataElement = screen.getByTitle(/table-title/i);
    expect(countyDataElement).toBeInTheDocument();
});

test('renders case density', () => {
    render(<CountyData />);
    const caseDensityElement = screen.getByTitle(/case-density-data/i);
    expect(caseDensityElement).toBeInTheDocument();
});

test('renders total cases', () => {
    render(<CountyData />);
    const totalCasesElement = screen.getByTitle(/total-cases-data/i);
    expect(totalCasesElement).toBeInTheDocument();
});

test('renders total deaths', () => {
    render(<CountyData />);
    const totalDeathsElement = screen.getByTitle(/total-deaths-data/i);
    expect(totalDeathsElement).toBeInTheDocument();
});

test('renders new cases', () => {
    render(<CountyData />);
    const newCasesElement = screen.getByTitle(/new-cases-data/i);
    expect(newCasesElement).toBeInTheDocument();
});

test('renders new deaths', () => {
    render(<CountyData />);
    const newDeathsElement = screen.getByTitle(/new-deaths-data/i);
    expect(newDeathsElement).toBeInTheDocument();
});

test('renders population', () => {
    render(<CountyData />);
    const populationElement = screen.getByTitle(/population-data/i);
    expect(populationElement).toBeInTheDocument();
});

test('renders vaccine completed', () => {
    render(<CountyData />);
    const vaccCompleteElement = screen.getByTitle(/vacc-complete-data/i);
    expect(vaccCompleteElement).toBeInTheDocument();
});

test('renders vaccine initiated', () => {
    render(<CountyData />);
    const vaccInitElement = screen.getByTitle(/vacc-init-data/i);
    expect(vaccInitElement).toBeInTheDocument();
});