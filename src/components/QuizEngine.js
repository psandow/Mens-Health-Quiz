import React, { useState, useEffect } from 'react';
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


const QuizEngine = ({ category, setCurrentView, score, setScore, userAnswers, setUserAnswers }) => {
  /* quisQuestion filters the questions based on the chosen category, or gives 10 random (using the shuffled array). */

  /* State handlers needed: currentIndex to go through the 10 questions starting at question index 0; score to track the score (moved this to app.js as summary viewed needed it too), starting at 0; selectedAnswer to highlight it and enable greyed out submit button; showEducation to toggle seeing the next button and the educaiton info with the submit button;*/
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); /* can set submit button to be disabled if selected answer is null. Next question function will need to clear selected answer back to null by calling setSelectedAnswer(null). Submit function will compared selectedAnswer to the correctAnswer from questions.js file */
  const [showEducation, setShowEducation] = useState(false); /* call setShowEducation(true) when submit button is clicked*/
  const [answerResult, setAnswerResult] = useState(null); /* state to store the result text (Correct or Incorrect) to add accessibility (red/green on yellow background not suitable by itself) */



 /* const pool = category === 'random'
    ? questions
    : questions.filter(q => q.category === category);
  const quizQuestions = shuffleArray(pool).slice(0, 10); */

  useEffect(() => {
  const quizQuestionsPool = category === 'random' 
    ? shuffleArray(questions).slice(0, 10)
    : questions.filter(q => q.category === category);
    setQuizQuestions(quizQuestionsPool);
  }, [category]);

 /* Loading...*/
   if (quizQuestions.length === 0) {
    return <div style={{color: 'white', padding: '20px'}}>Loading your quiz...</div>;
  }


/*console.log("Active Category:", category) */

  const currentQuestion = quizQuestions[currentQuestionIndex];

/* Handlers for user clicking an answer, clicking submit and clicking next question */
  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  const submitAnswer = () => {
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  
  if (isCorrect) {
    setScore(score + 1);
    setAnswerResult("Correct!");
  } else {
    setAnswerResult("Incorrect.");
  }

/* Saving user answers to state userAnswers show on summary page */
  const result = {
    questionId: currentQuestion.id,
    userSelection: selectedAnswer,
    isCorrect: isCorrect
  };
   
  const resultHistory = [...userAnswers, result];
  setUserAnswers(resultHistory);

  setShowEducation(true);
};

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowEducation(false);
      setSelectedAnswer(null);
      setAnswerResult(null);
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
        {currentQuestion.answers.map((answer, index) => {
   
        let borderColor = "";

        if (showEducation) {
          if (index === currentQuestion.correctAnswer) {
            borderColor = "correct-result";
          } else if (selectedAnswer === index) {
            borderColor = "wrong-result";
          }
        } 
        else if (selectedAnswer === index) {
        borderColor = "selected";
        }

    return (
      <button 
        key={index}
        onClick={() => handleAnswerClick(index)}
        className={borderColor}
      >
        {answer}
      </button>
    );
  })}
  
</div>
    {showEducation && (
    <p>{answerResult}</p>
  )}
    </div>

    <div>
      {!showEducation ? (
        <button className="submit-button" onClick={submitAnswer} disabled={selectedAnswer === null}>
          Submit
          <span className="nav-icon">arrow_forward</span>
        </button>
      ) : (
        <div>
        <div className="education-box">
          <p>{currentQuestion.educationText}</p>
          
        </div>
          <button className="submit-button" onClick={nextQuestion}>
          {currentQuestionIndex + 1 === quizQuestions.length ? "Finish" : "Next Question"}
          <span className="nav-icon">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
    </div>
  );




};

export default QuizEngine;