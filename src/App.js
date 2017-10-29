import React, { Component } from 'react';
import Main from './Main'

import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: {},
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

  removeCurrentNote = (note) => {
    const notes = {...this.state.notes}
    delete notes[this.state.currentNote.id]
    this.setState({ notes })
    this.resetCurrentNote()
  }
  

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      removeCurrentNote: this.removeCurrentNote,
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
