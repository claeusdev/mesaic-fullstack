import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Students from '../components/Students';
import StudentShow from '../components/StudentShow';
import '../styles/App.scss';
import EditStudent from '../components/EditStudent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/student/:id" component={StudentShow} />
            <Route exact path="/student/:id/edit" component={EditStudent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
