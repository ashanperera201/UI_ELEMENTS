import React, { Component } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import MatButton from './components/mat-button/mat-button.component';

const Cat = () => (
  <div>
    <h1>Hello world</h1>
  </div>
);

const Dog = () => (
  <div>
    <h1>Hello world</h1>
  </div>
);

const Test1 = () => (
  <div>
    <h1>
      Hello world 2
    </h1>
  </div>
);

class App extends Component {
  constructor() {
    super();
  }

  handleClick = (event) => {
    console.log('You have clicked this button');
  }

  render() {
    return (
      <div>
        <MatButton title={'Hello world'} handleClick={this.handleClick} />
        <Switch>
          <Route path='/' component={Cat} />
          <Route path='/dog' component={Dog} />
        </Switch>
      </div >
    );
  }
}

export default App;
