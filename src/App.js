import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './Home';
import PastTime from './pages/PastTime'
import PastTimeData from './data/PastTimeData';
import Questionnaire from './pages/Questionnaire';
import QuestionnaireData from './data/QuestionnaireData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/pages/About' render={ () => <About name={'Tom'}/> }/>
            <Route path='/pages/PastTime'>
              <PastTime
                pastTimeData = {PastTimeData}
              />
            </Route>
            <Route path='/pages/Questionnaire'>
              <Questionnaire
                questionnaireData = {QuestionnaireData}
              />
            </Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;