import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Header from './Header.jsx';
import { ThemeProvider } from '../context/ThemeContext.jsx';

describe('Header Component', () => {
  it('Renders', () => {
    render(<ThemeProvider><Header /></ThemeProvider>);
    let element = screen.getByText(/bookstore/i);
    expect(element).toBeInTheDocument();
  });
});
