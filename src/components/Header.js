import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-frame">
      <nav className="header-nav">
        <button className="nav-item">
            <span className="nav-icon">home</span>          
            Home</button>
        <button className="nav-item">Quizzes</button>
        <button className="nav-item">Resources</button>
      </nav>
    </div>
  );
};

export default Header;
