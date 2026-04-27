import React from 'react';
import './Hero.css';

/* Hero banner wording changes depending on the current view */
const Hero = ({ currentView, selectedCategory }) => {

  const titles = {
    home: "Men's Health Quiz",
    quizzes: "Men's Health Quizzes",
    resources: "Men's Health Resources",
    searchResults: "Search Results",
  };

  const quizTitles = {
    random: `Men's Health - Random Quiz`,
    mh: `Men's Health - Mental Health Quiz`,
    cancer: `Men's Health - Cancer Quiz`,
    cardiovascular: `Men's Health - Cardiovascular Quiz`,
    lifestyle: `Men's Health - Lifestyle & Sexual Health Quiz`,
    general: `Men's Health - General Maintenance Quiz`
  };

  let title = titles[currentView];

  if (currentView === 'inQuiz') {
    title = quizTitles[selectedCategory];
  }

  if (currentView === 'summary') {
    const quizTitle = quizTitles[selectedCategory];
    title = `Summary for ${quizTitle}`;

  }

  return (
    <header className="hero-banner">
      <h1>{title || "Men's Health Quiz BROKEN"}</h1>
    </header>
  );
};

export default Hero;