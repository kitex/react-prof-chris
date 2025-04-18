import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Product from './Product';

describe('Product Component', () => {
    const addToCart = vi.fn();
    const removeFromCart = vi.fn();

    const book = {
        id: '1',
        title: 'Title',
        price: '10',
        author: 'Author',
        published: 'Published Date',
        country: 'Country',
        lang: 'Language',
        pages: '200',
        image: 'image.jpg',
        url: 'Link URL',
        inCart: false,
        avgRating: '5',
        addToCart: addToCart,
        removeFromCart: removeFromCart,
    };
    it('Renders', () => {
        render(<Product {...book} />);
        let element = screen.getByText(/title/i);
        expect(element).toBeInTheDocument();
    });

    it('renders as expected', () => {
        const { container } = render(<Product {...book} />);
        expect(container).toMatchSnapshot();
    });

    it('Calls AddtoCart when Clicked', () => {
        render(<Product {...book} />);
        let button = screen.getByText(/Add To Cart/i);
        fireEvent.click(button);

        expect(addToCart).toHaveBeenCalled();
    });
    it('Calls removeFromCart when clicked while in the cart', () => {
        render(<Product {...book} inCart={true} />);
        let button = screen.getByText(/Remove from Cart/i);
        fireEvent.click(button);
        expect(addToCart).toHaveBeenCalled();
    });

    it('Displays the default image when no image is provided', () => {
        render(<Product {...book} image={''} />);
        let thumbnailSrc = screen.getByTestId(/thumb/i).getAttribute('src');
        expect(thumbnailSrc).toBe('images/default.jpg');

        expect(addToCart).toHaveBeenCalled();
    });
   

});
