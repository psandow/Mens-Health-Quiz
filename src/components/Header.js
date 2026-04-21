import React from 'react';
import './Header.css';

const Header = ({ currentView, setCurrentView }) => {

  const getActiveClass = (view) => {
    return currentView === view ? 'nav-item-active' : 'nav-item';
  };

  return (
    <div className="header-frame">
      <nav className="header-nav">
        <button className={getActiveClass('home')}
        onClick={() => setCurrentView('home')}>
            <span className="nav-icon">home</span>          
            Home</button>
        <button className={getActiveClass('quizzes')}
        onClick={() => setCurrentView('quizzes')}>
            Quizzes</button>
        <button className={getActiveClass('resources')}
        onClick={() => setCurrentView('resources')}>
            Resources</button>
      </nav>
    </div>
  );
};

export default Header;
