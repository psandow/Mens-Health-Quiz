import React from 'react';
import './Hero.css';

const Hero = ({ currentView }) => {
  const titles = {
    home: "Men's Health Quiz",
    quizzes: "Men's Health Quizzes",
    resources: "Men's Health Resources",
    search_results: "Search Results",
    in_Quiz: "Men's Health: NAME OF QUIZ HERE",
    summary: "NAME OF QUIZ HERE Summary"
  };

  return (
    <header className="hero-banner">
      <h1>{titles[currentView] || "Men's Health Quiz"}</h1>
    </header>
  );
};

export default Hero;