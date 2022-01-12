import { render, screen } from '@testing-library/react';
import Site from '../components/Site';

test('renders the site display', () => {
    render(<Site />);
    const siteElement = screen.getByTitle(/site-display/i);
    expect(siteElement).toBeInTheDocument();
});