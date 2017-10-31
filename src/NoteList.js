
import React from 'react';
import Note from './Note'
import './NoteList.css'

const NoteList = ({notes}) => {
  const sortNotes = (a, b) => {
    return (notes[b].updatedAt || 0) - (notes[a].updatedAt || 0)
  }
  
  const noteIds = Object.keys(notes).sort(sortNotes)

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {noteIds.map(noteId => (
          <Note 
          note={notes[noteId]} key={noteId}/>
        ))}
        

      </ul>
    </div>
  );
};

export default NoteList;