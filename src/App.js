import React, { Component } from 'react';
import Main from './Main'

import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
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
       },
     },
     currentNote: this.blankNote(),
   }
  }


  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }

  }
  
  setCurrentNote = (note) => {
    this.setState({currentNote: note})
  }

  resetCurrentNote = (note) => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = {...this.state.notes}
    if (!note.id) {
      note.id = Date.now()
    }
    notes[note.id] = note
    this.setState({ notes })
    this.setCurrentNote(note)
  }
  

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
    }
    return (
      <div className="App">
        <Main  
        notes={this.state.notes}
        currentNote={this.state.currentNote}
        {...actions}
        />

      </div>
    );
  }
}

export default App;
