
import React from 'react';
import Note from './Note'
import './NoteList.css'

const NoteList = () => {
  const notes = {
    'note-4': {
      id: 'note-4',
      title: 'My fancy note',
      body: 'Fancy body jadajada jada',
    },'note-5': {
      id: 'note-5',
      title: 'Another fancy note',
      body: 'Fancy body jadajada jada',
    }
  }

  const noteIds = Object.keys(notes)

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {noteIds.map((noteId, i) => <Note key={i} note={notes[noteId]} />)}
        

      </ul>
    </div>
  );
};

export default NoteList;