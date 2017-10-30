import React from 'react'
import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
  return (
      <div className="Main">
        <Sidebar 
          resetCurrentNote={props.resetCurrentNote}
          signOut={props.signOut}
        />
        <NoteList 
        notes={props.notes}
        setCurrentNote={props.setCurrentNote}
        />
        <NoteForm 
          notes={props.notes}
          removeCurrentNote={props.removeCurrentNote}
          currentNoteId={props.currentNoteId}
          saveNote={props.saveNote}
        />
      </div>
  )
}

export default Main