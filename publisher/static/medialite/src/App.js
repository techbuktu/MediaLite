import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header  from './components/Header';
import Home  from './components/Home';
import Publisher from './components/publisher/Publisher';
import Manager from './components/manager/Manager';


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
            <Route path="/publisher" component={Publisher} />
            <Route path="/manager" component={Manager} />
            
        </div>
      </Router>
  
    );
  }
}

export default App;
