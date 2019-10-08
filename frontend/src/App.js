import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//Import all 'layout' components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';

//Import auth-related components
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';

//Import 'manager'-section components
import Editor from './components/manager/Editor';
import Writer from './components/manager/Writer';
import ManagerHome from './components/manager/ManagerHome';
import newEditor from './components/manager/newEditor';
import newWriter from './components/manager/newWriter';

//Import 'publisher'-section components 
import Article from './components/publisher/Article';
import newArticle from './components/publisher/newArticle';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Header />
      </header>

          <Route exact path="/" component={Home} />

          <Route path="/register" component={Register} />
          <Route path="/login" component={LogIn} />


  
    <Footer  />
    </div>
    </Router>
  );
}

export default App;
