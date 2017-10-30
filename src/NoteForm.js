import React, { Component } from 'react';
import './NoteForm.css'
import RichTextEditor from 'react-rte';

class NoteForm extends Component {
  constructor() {
    super()
    this.state = {
      editorValue: RichTextEditor.createEmptyValue()
    }
  }

  // componentWillReceiveProps = (nextProps) => {
  //   const note = nextProps.currentNote

  //   let editorValue = this.state.editorValue

  //   if (editorValue.toString('html') !== note.body) {
  //     editorValue = RichTextEditor.createValueFromString(note.body, 'html')
  //   }
  //   this.setState({ editorValue })
  // }

  hangleChanges = (ev) => {
    const note = {...this.props.currentNote}
    note[ev.target.name] = ev.target.value
    this.props.saveNote(note)
  }

  handleEditorChanges = (editorValue) => {
    this.setState({ editorValue })

    const note = {...this.props.currentNote}
    note.body = editorValue.toString('html')
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
            
            <RichTextEditor name="body"
              value={this.state.editorValue}
              onChange={this.handleEditorChanges}
            >

            </RichTextEditor>
          </form>
        </div>
    );
  }
}

export default NoteForm;