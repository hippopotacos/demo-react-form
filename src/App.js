import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar /><hr/>
            <Route exact path='/pages/Home' component={Home}/>
            <Route path='/pages/About' render={ () => <About name={'Tom'}/> }/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;