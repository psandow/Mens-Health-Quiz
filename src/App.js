import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';



const HomeView = () => 
  <div>
    <SearchBar/> 
    <p className="welcome-box">
      <p>Welcome to our Men’s Health resources and quizzes. These materials could be helpful for anyone with or interested in male-specific health concerns, including cis men, trans men, and non-binary people. </p>
      <p>Test your knowledge with the quick quizzes below or check out our how-to guide.</p>
    </p>
  </div>;

const QuizzesView = () => <div style={{padding: '20px', color: 'white'}}><h2>Quizzes List</h2><p>Figma Image 2 content goes here.</p></div>;

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
      {currentView === 'home' && <HomeView />}
      {currentView === 'quizzes' && <QuizzesView />}
      {currentView === 'resources' && <ResourcesView />}
      {currentView === 'search_results' && <SearchResultsView query={searchQuery} />}
      {currentView === 'in_Quiz' && <QuizEngine />}
      {currentView === 'summary' && <SummaryView />}
    </main>
    </div>
  );
}

export default App;
