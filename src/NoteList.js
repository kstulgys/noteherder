
import React from 'react';
import Note from './Note'
import './NoteList.css'

const NoteList = () => {
  const notes = [
    {
      id: 'note-4',
      title: 'My fancy note',
      body: 'Fancy body jadajada jada',
    },{
      id: 'note-5',
      title: 'Another fancy note',
      body: 'Fancy body jadajada jada',
    }
  ]

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {notes.map(note => <Note note={note} />)}
        

      </ul>
    </div>
  );
};

export default NoteList;