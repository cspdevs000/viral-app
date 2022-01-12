import { render, screen } from '@testing-library/react';
import NavigationBar from '../components/NavigationBar';


test('renders home', () => {
  render(<NavigationBar/>);
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders county data', () => {
  render(<NavigationBar/>);
  const countyDataElement = screen.getByText(/County Data/i);
  expect(countyDataElement).toBeInTheDocument();
});

test('renders sites', () => {
  render(<NavigationBar />);
  const sitesElement = screen.getByText(/Sites/i);
  expect(sitesElement).toBeInTheDocument();
})

