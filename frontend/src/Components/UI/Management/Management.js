// Logo.js
import React from 'react';
import './management.css';

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="red"
          width="100"
          height="100"
        >
          <path d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zM32 54C18.745 54 8 43.255 8 30S18.745 6 32 6s24 10.745 24 24-10.745 24-24 24z" />
          <path d="M48 30h-6v-6h-4v6h-8v-8h-4v8H22v-6h-4v6h-6v4h6v8h4v-8h8v8h4v-8h8v6h4v-6h6z" />
        </svg>
      </div>
      <div className="logo-text">
        <span className="logo-name">ELITE_MOTORS</span>
        <span className="logo-year">2023</span>
      </div>
    </div>
  );
};

export default Logo;
