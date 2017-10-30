import React from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import { Route, Switch } from 'react-router-dom'


const Main = (props) => {
  const formProps = {
    notes: props.notes,
    removeCurrentNote: props.removeCurrentNote,
    currentNoteId: props.currentNoteId,
    saveNote: props.saveNote,
  }
  return (
      <div className="Main">
        <Sidebar 
          resetCurrentNote={props.resetCurrentNote}
          signOut={props.signOut}
        />
        <NoteList 
        notes={props.notes}
        />
        <Switch>
          <Route
            path="/notes/:id"
            render={(navProps) => (
              <NoteForm 
                {...formProps}
                {...navProps}
              />
            )}
          />
          <Route
            render={(navProps) => (
              <NoteForm 
                {...formProps}
                {...navProps}
               />
            )}

          />
        </Switch>

      </div>
  )
}

export default Main