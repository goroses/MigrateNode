// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MigrateNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MigrateNode/i);
    expect(titleElement).toBeInTheDocument();
});
