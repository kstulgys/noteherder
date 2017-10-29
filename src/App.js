import React, { Component } from 'react';
import Main from './Main'

import './App.css'

class App extends Component {
  state = {
     notes: {
      'note-4': {
        id: 'note-4',
        title: 'My fancy note from app.js',
        body: 'Fancy body jadajada jada',
      },
      'note-5': {
        id: 'note-5',
        title: 'Another fancy note',
        body: 'Fancy body jadajada jada',
      }
    }
  }
  
  

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Main  notes={this.state.notes}/>

      </div>
    );
  }
}

export default App;
