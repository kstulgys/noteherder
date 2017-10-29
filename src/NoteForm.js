import './NoteForm.css'

import React, { Component } from 'react';

class NoteForm extends Component {
  hangleChanges = (ev) => {
    const note = {...this.props.currentNote}
    note[ev.target.name] = ev.target.value
    this.props.saveNote(note)
  }

  render() {

    const { currentNote } = this.props
    return (
      <div className="NoteForm">
          <div className="form-actions">
            <button 
              type="button"
              onClick={this.props.removeCurrentNote}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
                value={currentNote.title}
                onChange={this.hangleChanges}
              />
            </p>
            
            <textarea name="body"
              value={currentNote.body}
              onChange={this.hangleChanges}
            >

            </textarea>
          </form>
        </div>
    );
  }
}

export default NoteForm;