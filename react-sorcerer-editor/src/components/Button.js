// Button.js
import React from 'react';

const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className='btn btn-light px-3 border border-dark'
      style={{ width: '100%', maxWidth: '200px' }} 
    >
      {label}
    </button>
  );
}

export default Button;
