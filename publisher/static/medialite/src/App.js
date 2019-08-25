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
            <Route exact path="/publisher" component={Publisher} />
            <Route exact path="/manager" component={Manager} />

            <Route path="/manager/editors" component={EditorList} />
            <Route path="/manager/writers" component={WriterList} />
            
            
        </div>
      </Router>
  
    );
  }
}

export default App;
