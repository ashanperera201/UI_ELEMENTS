import React, { Component } from 'react';
import './App.scss';
import MatButton from './components/mat-button/mat-button.component';

class App extends Component {

  handleClick = (event) => {
    console.log('You have clicked this button');
  }

  render() {
    return (
      <div>
        <MatButton title={'Hello world'} handleClick={this.handleClick} expClass={'btn-success'} />
      </div >
    );
  }
}

export default App;
