import React from 'react';
//import axios from 'axios';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home  from './components/Home';
import Publisher from './components/publisher/Publisher';

function App() {
  return (
    <Router>
      <div className="App">
      <Header /> 
      <Route exact path="/">
          <Home />
      </Route>
      <Route>
        <Publisher />
      </Route>
    </div>
    </Router>
  );
    
}

export default App;
