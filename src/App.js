import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CategoryGrid from './components/CategoryGrid';
import QuizEngine from './components/QuizEngine';

/* Top level states are HomeView, QuizzesView, ResourcesView, SearchReultsView, QuizEngine, and SummaryView. The props setCurrentView passed down from the App allows child components to change the top level state */

const HomeView = ({ setCurrentView }) => 
  <div>
    <SearchBar/> 
    <p className="welcome-box">
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
    </p>
    <CategoryGrid onCategoryClick={() => setCurrentView('inQuiz')} />
  </div>;

const QuizzesView = ({ setCurrentView }) =>
  <div>
    <p className="welcome-box">
      <p>Welcome to our Men’s Health quizzes. There are five categories to chose from, or you can select the Random Quiz for 10 random questions from all the categories.</p>
      <p>There are a mixture of multiple choice and True/False questions: select your answer and then select the Submit button to move to the next question. You can restart the quiz at anytime by selecting the Restart button.</p>
      <p>You will be told the correct answer after each question and at the end of the quiz, with resources and references to learn more.</p>
    </p>
    <CategoryGrid onCategoryClick={() => setCurrentView('inQuiz')} />
  </div>;

const ResourcesView = () =>
   <div>
    <SearchBar/> 
    <h2>Resources h2</h2>
    <p>Resources paragraph</p>
  </div>;

const SearchResultsView = () =>
   <div>
    <SearchBar/> 
    <h2>Search Results h2</h2>
    <p>Search results paragraph</p>
  </div>;


const SummaryView = () => <div style={{padding: '20px', color: 'white'}}><h2>Quiz Results</h2><p>Score summary goes here.</p></div>;





function App() {
  const [currentView, setCurrentView] = useState('home');  /* currentView state tracks the page being viewed; setCurrentView updates the state or "view" */
  const [searchQuery, setSearchQuery] = useState('');


  /* below state and the state setter is passed to Header so the formating can change and to enable navigation. */
  /* in Main if current is 'home' HomeView is drawn on the webpage. setCurrentView is passed down to HomeView so that it can change the parent state*/
  return (
    <div className="app-container">     
      <Header currentView={currentView} setCurrentView={setCurrentView} />      
      <Hero currentView={currentView} />
    <main>
      {currentView === 'home' && <HomeView setCurrentView={setCurrentView}/>}
      {currentView === 'quizzes' && <QuizzesView setCurrentView={setCurrentView}/>}
      {currentView === 'resources' && <ResourcesView />}
      {currentView === 'searchResults' && <SearchResultsView query={searchQuery} />}
      {currentView === 'inQuiz' && <QuizEngine />}
      {currentView === 'summary' && <SummaryView />}
    </main>
    </div>
  );
}

export default App;
