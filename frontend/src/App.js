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
import ArticlesHome from './components/publisher/ArticlesHome';

//React-Redux objects and setup 
import { Provider } from 'react-redux';
import store from './dataStore';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <header className="App-header">
                <Header />
          </header>
          <div className="App">
            <Route exact path="/" component={Home} />

            <Route path="/register" component={Register} />
            <Route path="/login" component={LogIn} />
            <Route exact path="/manager" component={ManagerHome} />
            <Route path="/manager/new-editor" component={newEditor} />
            <Route path="/manager/new-writer" component={newWriter} />
            <Route path="/editors/:editorLink" component={Editor} />
            <Route path="/writers/:writerLink" component={Writer} />
            <Route exact path="/articles" component={ArticlesHome} />
            <Route path="/articles/new-article" component={newArticle} />
            <Route path="/articles/:articleLink" component={Article} />

          <Footer  />
          </div>
        </Router>
    </Provider>
  );
}

export default App;