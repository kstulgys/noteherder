import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Main from './Main'
import base, {auth} from './base'
import SignIn from './SignIn'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: {},
      currentNoteId: null,
      uid: null,
   }
  }
  componentWillMount = () => {
    this.getUserFromLocalStorage()
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.handleAuth(user)
        } else {
          this.handleUnauth()
        }
      }
    )
  }

getUserFromLocalStorage = () => {
  const uid = localStorage.getItem('uid')
  if (!uid) return
  this.setState({ uid })
}

  syncNotes = () => {
    this.bindingRef = base.syncState(
      `notes/${this.state.uid}`, 
      {
        context: this,
        state: 'notes',
      }
    )
  }

  
  setCurrentNote = (note) => {
    this.setState({currentNoteId: note.id})
  }

  resetCurrentNote = (note) => {
    this.setCurrentNote({id: null})
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
    notes[this.state.currentNoteId] = null
    
    this.setState({ notes })
    this.resetCurrentNote()
  }
  
  signedIn = () => {
    return this.state.uid
  }

  handleAuth = (user) => {
    localStorage.setItem('uid', user.uid)
    this.setState(
      { uid: user.uid }, 
      this.syncNotes
    )
  }

  handleUnauth = () => {
    localStorage.removeItem('uid')
    
    if (this.bindingRef) {
      base.removeBinding(this.bindingRef)      
    }
    
    this.setState({
      uid: null,
      notes: {},
    })

    this.resetCurrentNote()
  }

  signOut = () => {
    auth.signOut()
  }

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
      removeCurrentNote: this.removeCurrentNote,
      signOut: this.signOut,
    }
    const noteData = {
      notes: this.state.notes,
      currentNoteId: this.state.currentNoteId,
    }

    return (
      <div className="App">
        <Switch>
          <Route
           path="/sign-in"
           render={() => (
             this.signedIn()
             ? <Redirect to="/notes" />
             : <SignIn />
           )}
           />
          <Route 
            path="/notes" 
            render={() => (
              this.signedIn() 
              ? <Main 
                {...actions}
                {...noteData}
              />
              : <Redirect to="/sign-in" />
            )} 
          />
          <Route render={() => (
            this.signedIn()
            ? <Redirect to="/notes" />
            : <Redirect to="/sign-in" />
           )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
