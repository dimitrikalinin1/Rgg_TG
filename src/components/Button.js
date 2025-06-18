import React from 'react';

const Button = ({ children, onClick, style, className = '' }) => {
  const defaultStyle = {
    backgroundColor: '#007AFF',
    color: '#FFFFFF',
    fontWeight: '600',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 24px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '16px',
    fontFamily: 'inherit',
    outline: 'none',
    ...style
  };

  return (
    <button
      className={className}
      onClick={onClick}
      style={defaultStyle}
      onMouseOver={e => {
        if (!style?.backgroundColor || style.backgroundColor === '#007AFF') {
          e.target.style.backgroundColor = '#0056b3';
        }
      }}
      onMouseOut={e => {
        if (!style?.backgroundColor || style.backgroundColor === '#007AFF') {
          e.target.style.backgroundColor = '#007AFF';
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;