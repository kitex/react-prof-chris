import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from '../pages/App.js';

describe('App Component', () => {
  it.skip('Renders', () => {
    render(<App />);
    let element = screen.getByText(/0/i);
    expect(element).toBeInTheDocument();
  });
});
