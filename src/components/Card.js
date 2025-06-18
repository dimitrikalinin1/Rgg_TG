import React from 'react';

const Card = ({ children, style, className = '' }) => {
  const defaultStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    padding: '24px',
    marginBottom: '20px',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    ...style
  };

  return (
    <div className={className} style={defaultStyle}>
      {children}
    </div>
  );
};

export default Card;