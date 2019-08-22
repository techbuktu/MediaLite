import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />  
    </div>
  );
}

export default App;
