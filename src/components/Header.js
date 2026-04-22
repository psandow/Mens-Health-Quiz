import React from 'react';
import './Header.css';

/* currentView tells which button should look highlighted. setCurrentView function allows the button to change the page in App.js */
const Header = ({ currentView, setCurrentView }) => {

  /* The getActiveClass function compares 'view' with the currentView in state. If they match then the nav-item-active highlighting className is returned */
  const getActiveClass = (view) => {
    return currentView === view ? 'nav-item-active' : 'nav-item';
  };

/*Button's className for formating call their name eg 'home' on getActiveClass to get className (nav-item-active or nav-item) as in comment above; buttons also have onClick event calls setCurrentView to change App.js */
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
