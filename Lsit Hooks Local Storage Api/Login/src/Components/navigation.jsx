import React from 'react';

const Navigation = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <nav>
      <div className="nav-left">
        <span className='navigation'>Navigation</span>
      </div>
      <div className="nav-right">
        {isLoggedIn ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <button onClick={onLogin}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
