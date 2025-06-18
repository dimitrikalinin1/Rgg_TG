import React from 'react';

const Header = ({ title, avatarUrl, onEditProfile }) => {
  const headerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    padding: '16px 20px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '24px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
  };

  const avatarStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    marginRight: '16px',
    objectFit: 'cover',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
  };

  const editButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#007AFF',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    transition: 'background-color 0.2s ease',
  };

  return (
    <div style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={avatarUrl} alt="Avatar" style={avatarStyle} />
        <h2 style={titleStyle}>{title}</h2>
      </div>
      <button
        onClick={onEditProfile}
        style={editButtonStyle}
        onMouseOver={e => (e.target.style.backgroundColor = 'rgba(0, 122, 255, 0.1)')}
        onMouseOut={e => (e.target.style.backgroundColor = 'transparent')}
      >
        ✏️
      </button>
    </div>
  );
};

export default Header;