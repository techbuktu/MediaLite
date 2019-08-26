import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header  from './components/Header';
import Home  from './components/Home';
import Publisher from './components/publisher/Publisher';
import Manager from './components/manager/Manager';
import EditorList from './components/manager/EditorList';
import WriterList from './components/manager/WriterList';
import Editor from './components/manager/Editor';
import Writer from './components/manager/Writer';

//Import Publisher section's components 
import Article from './components/publisher/Article';
import ArticleList from './components/publisher/ArticleList';


class App extends Component {
  state = {
    user: {}
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Home user={this.state.user} />
              </React.Fragment>
            )}/>

            <Route exact path="/manager" component={Manager} />
            <Route exact path="/publisher" component={Publisher} />

            <Route path="/manager/editors" component={EditorList} />
            <Route path="/manager/writers" component={WriterList} />
            <Route path="/publisher/articles/" component={ArticleList} />
            <Route path="/publisher/:articleLink" component={Article} />
            <Route path="/manager/editors/:editorLink" component={Editor} />
            <Route path="/manager/writers/:writerLink" component={Writer} />
            
            
        </div>
      </Router>
  
    );
  }
}

export default App;
