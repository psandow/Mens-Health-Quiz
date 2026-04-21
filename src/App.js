import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import CategoryGrid from './components/CategoryGrid';



const HomeView = ({ setCurrentView }) => 
  <div>
    <SearchBar/> 
    <p className="welcome-box">
      <p>Welcome to our Men’s Health resources and quizzes. These materials could be helpful for anyone with or interested in male-specific health concerns, including cis men, trans men, and non-binary people. </p>
      <p>Test your knowledge with the quick quizzes below or check out our {" "}
        <a
          href="#quizzes"
          onClick={(e) => {
            e.preventDefault();
            setCurrentView('quizzes');
          }}
        >
          how-to guide
          </a>
          .</p>
    </p>
    <CategoryGrid onCategoryClick={() => setCurrentView('in_Quiz')} />
  </div>;

const QuizzesView = ({ setCurrentView }) =>
  <div>
    <p className="welcome-box">
      <p>Welcome to our Men’s Health quizzes. There are five categories to chose from, or you can select the Random Quiz for 10 random questions from all the categories.</p>
      <p>There are a mixture of multiple choice and True/False questions: select your answer and then select the Submit button to move to the next question. You can restart the quiz at anytime by selecting the Restart button.</p>
      <p>You will be told the correct answer after each question and at the end of the quiz, with resources and references to learn more.</p>
    </p>
    <CategoryGrid onCategoryClick={() => setCurrentView('in_Quiz')} />
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


const QuizEngine = () => <div style={{padding: '20px', color: 'white'}}><h2>Quiz in Progress</h2><p>Figma Image 3, 4, 5 logic goes here.</p></div>;
const SummaryView = () => <div style={{padding: '20px', color: 'white'}}><h2>Quiz Results</h2><p>Score summary goes here.</p></div>;





function App() {
  const [currentView, setCurrentView] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app-container">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <Hero currentView={currentView} />
    <main>
      {currentView === 'home' && <HomeView setCurrentView={setCurrentView}/>}
      {currentView === 'quizzes' && <QuizzesView setCurrentView={setCurrentView}/>}
      {currentView === 'resources' && <ResourcesView />}
      {currentView === 'search_results' && <SearchResultsView query={searchQuery} />}
      {currentView === 'in_Quiz' && <QuizEngine />}
      {currentView === 'summary' && <SummaryView />}
    </main>
    </div>
  );
}

export default App;
