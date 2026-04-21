import React from 'react';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Hero from './components/Hero';



// Temporary Placeholders
const HomeView = () => <div style={{padding: '20px', color: 'white'}}><h2>Home Screen</h2><p>Figma Image 1 content goes here.</p></div>;
const QuizzesView = () => <div style={{padding: '20px', color: 'white'}}><h2>Quizzes List</h2><p>Figma Image 2 content goes here.</p></div>;
const ResourcesView = () => <div style={{padding: '20px', color: 'white'}}><h2>Resources</h2><p>Information goes here.</p></div>;
const QuizEngine = () => <div style={{padding: '20px', color: 'white'}}><h2>Quiz in Progress</h2><p>Figma Image 3, 4, 5 logic goes here.</p></div>;
const SummaryView = () => <div style={{padding: '20px', color: 'white'}}><h2>Quiz Results</h2><p>Score summary goes here.</p></div>;





function App() {
  const [currentView, setCurrentView] = useState('home');
  return (
    <div className="app-container">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <Hero currentView={currentView} />
    <main>
      {currentView === 'home' && <HomeView />}
      {currentView === 'quizzes' && <QuizzesView />}
      {currentView === 'resources' && <ResourcesView />}
      {currentView === 'in_Quiz' && <QuizEngine />}
      {currentView === 'summary' && <SummaryView />}
    </main>
    </div>
  );
}

export default App;
