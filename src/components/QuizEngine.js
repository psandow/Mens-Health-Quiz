import React, { useState } from 'react';
import { questions } from './Questions.js';
import './QuizEngine.css';


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

/* State handlers needed: currentIndex to go through the 10 questions starting at question index 0; score to track the score, starting at 0; selectedAnswer to highlight it and enable greyed out submit button; showEducation to toggle seeing the next button and the educaiton info with the submit button;*/
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); /* can set submit button to be disabled if selected answer is null. Next question function will need to clear selected answer back to null by calling setSelectedAnswer(null). Submit function will compared selectedAnswer to the correctAnswer from questions.js file */
  const [showEducation, setShowEducation] = useState(false); /* call setShowEducation(true) when submit button is clicked*/
 

  const currentQuestion = quizQuestions[currentQuestionIndex];

/* Handlers for user clicking an answer, clicking submit and clicking next question */
  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  const submitAnswer = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setShowEducation(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowEducation(false);
      setSelectedAnswer(null);
    } else {
      setCurrentView('summary');
    }
  };

  return (
    <div>
    <h3 className="question-banner" >Question {currentQuestionIndex + 1} of {quizQuestions.length}</h3>
    <p className="question-box" >{currentQuestion.questionText}</p>
    <div className="quiz-container">
      <div className="answers-boxes">
        {currentQuestion.answers.map((answer, index) => (
          <button 
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={selectedAnswer === index ? 'selected' : ''}
          >
      
            {answer}
          </button>
        ))}
      </div>
    </div>

    <div>
      {!showEducation ? (
        <button className="submit-button" onClick={submitAnswer} disabled={selectedAnswer === null}>
          Submit
        </button>
      ) : (
        <div>
        <div className="education-box">
          <p>{currentQuestion.educationText}</p>
          
        </div>
          <button className="submit-button" onClick={nextQuestion}>Next Question</button>
        </div>
      )}
    </div>
    </div>
  );




};

export default QuizEngine;