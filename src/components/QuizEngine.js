import React, { useState } from 'react';
import { questions } from './Questions.js';

/* Fisher-Yates Shuffle */
const shuffleArray = (array) => {
  const shuffled = [...array]; /* The spread operator is used so the the array doesn't get permanantly mixed */
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); /* for loop picks a random j */
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; /* random j swapped with i to make the shuffled array*/
  }
  return shuffled; /* shuffled can then be used to get 10 questions for the random quiz*/
};



const QuizEngine = ({ category, setCurrentView }) => {
  /* quisQuestion filters the questions based on the chosen category, or gives 10 random (using the shuffled array). */
  const quizQuestions = category === 'random' 
    ? shuffleArray(questions).slice(0, 10)
    : questions.filter(q => q.category === category);

/* State handlers needed: currentIndex to go through the 10 questions; score to track the score; selectedAnswer to highlight it and enable greyed out submit button; showEducation to toggle seeing the next button and the educaiton info with the submit button;*/


};

export default QuizEngine;