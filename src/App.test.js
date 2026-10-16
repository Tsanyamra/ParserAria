// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ParserAria title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ParserAria/i);
    expect(titleElement).toBeInTheDocument();
});
