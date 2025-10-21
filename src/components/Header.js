import React from 'react';

function Header() {
  return (
    <header style={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center' }}>
      <h1>Capybara Electronics</h1>
      <nav>
        <a href="#home" style={{ color: 'white', margin: '0 1rem' }}>Home</a>
        <a href="#products" style={{ color: 'white', margin: '0 1rem' }}>Products</a>
        <a href="#contact" style={{ color: 'white', margin: '0 1rem' }}>Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;