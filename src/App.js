import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CategoryGrid from './components/CategoryGrid';
import QuizEngine from './components/QuizEngine';
import { questions } from './components/Questions';
import './components/QuizEngine.css';
import Resources from './components/Resources';

/* Top level states are HomeView, QuizzesView, ResourcesView, SearchReultsView, QuizEngine, and SummaryView. The props setCurrentView passed down from the App allows child components to change the top level state */

const HomeView = ({ setCurrentView, setSelectedCategory }) => 
  <div>
    <SearchBar/> 
    <div className="welcome-box">
      <p>Welcome to our Men’s Health resources and quizzes. These materials could be helpful for anyone with or interested in male-specific health concerns, including cis men, trans men, and non-binary people. </p>
      <p>Test your knowledge with the quick quizzes below or check out our {" "}
        <a
          href="#quizzes" /* #quizzes would normally jump to the id quizzes in a normal webpage but see below to stop this. Using href rather than just <a> tag gives styles and allows tabbing through the page for accessibility */
          onClick={(e) => {
            e.preventDefault(); /* The preventDefault command stops the browser refreshing the webpage or adding quizzes to the url so the setCurrentView quizzes works*/
            setCurrentView('quizzes'); /* props changing top level state from home to quizzes */
          }}
        >
          how-to guide
          </a>
          .</p>
    </div>
    <CategoryGrid onCategoryClick={(id) => {
      setSelectedCategory(id); 
      setCurrentView('inQuiz');
      }} />
  </div>;

const QuizzesView = ({ setCurrentView, setSelectedCategory }) =>
  <div>
    <div className="welcome-box">
      <p>Welcome to our Men’s Health quizzes. There are five categories to chose from, or you can select the Random Quiz for 10 random questions from all the categories.</p>
      <p>There are a mixture of multiple choice and True/False questions: select your answer and then select the Submit button to move to the next question.</p>
      <p>You will be told the correct answer after each question and at the end of the quiz, with resources and references to learn more.</p>
    </div>
    <CategoryGrid onCategoryClick={() => setCurrentView('inQuiz')} />
  </div>;

const ResourcesView = () =>
   <div>
    <SearchBar/> 
    <Resources/>
  </div>;

const SearchResultsView = () =>
   <div>
    <SearchBar/> 
    <h2>Search Results h2</h2>
    <p>Search results paragraph</p>
  </div>;

const SummaryView = ({ score, userAnswers, totalQuestions, setCurrentView }) => {
  
  /* .push method is used to add question numbers, question asked, and answers buttons with correct/incorrect highlighting to the empty array*/
  const resultsList = [];

  /* nested loop goes through the questions list and finds the questions that were asked from the questionId held in userAnswers */
  for (let i = 0; i < userAnswers.length; i++) {
    const record = userAnswers[i];
    
    let questionAsked = null;
    for (let j = 0; j < questions.length; j++) {
      if (questions[j].id === record.questionId) {
        questionAsked = questions[j];
        break;
      }
    }

    /* second nested loop makes the answers for the question found, and applies the green/red className */
    const answerButtons = [];
    for (let k = 0; k < questionAsked.answers.length; k++) {
      const answerText = questionAsked.answers[k];
      let statusColor = "";

      if (k === questionAsked.correctAnswer) {
        statusColor = "correct-result";
      } else if (k === record.userSelection && !record.isCorrect) {
        statusColor = "wrong-result";
      }

      answerButtons.push(
        <button key={k} className={statusColor} >
          {answerText}
        </button>
      );
    }

    /* everything combined */
    resultsList.push(
      <div key={record.questionId} className="result-item">
        <h3 className="question-banner">Question {i + 1}</h3>
        <p className="question-box">{questionAsked.questionText}</p>
        
        <div className="quiz-container">
          <div className="answers-boxes">
            {answerButtons}
          </div>
        </div>

        <div className="education-box">
          <p>{questionAsked.educationText}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p className="score-banner">Your Score: {score} / {totalQuestions}</p>
      </div>

      <div className="results-list">
        {resultsList}
      </div>
    </div>
  );
};





function App() {
  const [currentView, setCurrentView] = useState('home');  /* currentView state tracks the page being viewed; setCurrentView updates the state or "view" */
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

/*console.log("Current View is:", currentView); */

  /* below state and the state setter is passed to Header so the formating can change and to enable navigation. */
  /* in Main if current is 'home' HomeView is drawn on the webpage. setCurrentView is passed down to HomeView so that it can change the parent state*/
  return (
    <div className="app-container">     
      <Header currentView={currentView} setCurrentView={setCurrentView} />      
      <Hero currentView={currentView} selectedCategory={selectedCategory} />
    <main>
      {currentView === 'home' && <HomeView setCurrentView={setCurrentView} setSelectedCategory={setSelectedCategory}/>}
      {currentView === 'quizzes' && <QuizzesView setCurrentView={setCurrentView}/>}
      {currentView === 'resources' && <ResourcesView />}
      {currentView === 'searchResults' && <SearchResultsView query={searchQuery} />}
      {currentView === 'inQuiz' && <QuizEngine category={selectedCategory} setCurrentView={setCurrentView} score={score} setScore={setScore} setUserAnswers={setUserAnswers} userAnswers={userAnswers}/>}
      {currentView === 'summary' && <SummaryView score={score} userAnswers={userAnswers} setCurrentView={setCurrentView} totalQuestions={userAnswers.length}/>}
    </main>
    </div>
  );
}

export default App;
