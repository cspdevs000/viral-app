import { render, screen } from '@testing-library/react';
import Home from '../components/Home';


test('renders first top ten tables', () => {
    render(<Home />);
    const table1Element = screen.getByTitle(/table-1/i);
    expect(table1Element).toBeInTheDocument();
  })
  
  test('renders second top ten tables', () => {
    render(<Home />);
    const table2Element = screen.getByTitle(/table-2/i);
    expect(table2Element).toBeInTheDocument();
  })
  
  test('renders third top ten tables', () => {
    render(<Home />);
    const table3Element = screen.getByTitle(/table-3/i);
    expect(table3Element).toBeInTheDocument();
  })
  
  test('renders map data', () => {
    render(<Home />);
    const mapElement = screen.getByTitle(/map/i);
    expect(mapElement).toBeInTheDocument();
  })
