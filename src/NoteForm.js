import './NoteForm.css'

import React, { Component } from 'react';

class NoteForm extends Component {
  render() {
    return (
      <div className="NoteForm">
          <div className="form-actions">
            <button type="button">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
          <form>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title your note"
              />
            </p>
            
            <textarea name="body"></textarea>
          </form>
        </div>
    );
  }
}

export default NoteForm;