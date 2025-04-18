import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Footer from './Footer.js';
import { ThemeProvider } from '../contexts/ThemeContext.js';

describe('Footer Component', () => {
  it('Renders', () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    let element = screen.getByText(/footer/i);
    expect(element).toBeInTheDocument();
  });
});
