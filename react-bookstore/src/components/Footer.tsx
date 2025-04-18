import React from 'react';

import { useTheme } from '../context/ThemeContext';
function Footer() {
    const { theme, toggleTheme } = useTheme();
    const footerStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        padding: '10px',
        position: 'fixed' as 'fixed',
        left: '0',
        bottom: '0',
        margin: '0',
        width: '100%',
    }
    return <p style={footerStyle}>
        This is the footer.
        <button onClick={toggleTheme}>Toggle Theme</button>
    </p>;
}
export default Footer;