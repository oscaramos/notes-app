import React from 'react'
import { Icon } from 'semantic-ui-react';

import Note from "./components/note/note.component";

import 'semantic-ui-css/semantic.min.css'
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          text: 'This is a note 11',
          editable: false
        },
        {
          id: 2,
          text: 'This is a note 22',
          editable: false
        },
        {
          id: 3,
          text: 'This is a note 33',
          editable: true
        }
      ]
    };
  }

  addNote = () => {
    const lastid = this.state.notes.length ? this.state.notes[this.state.notes.length - 1].id : 1;
    const newNote = {
      id: lastid + 1,
      text: 'Text'
    }

    this.setState({
      notes: [...this.state.notes, newNote]
    });
  }

  removeNote = toRemoveNote => {
    this.setState(state => ({
      notes: state.notes.filter(note => note.id !== toRemoveNote.id)
    }));
  }

  editNote = (toEditNote) => (event) => {
    const newtext = event.target.value;
    this.setState(state => ({
      notes: state.notes.map(note =>
        (note.id === toEditNote.id
          ? { ...note, text: newtext }
          : note)
      )
    }));
  }

  toggleEditable = (toToggleNote) => {
    console.log("toggleEditable");
    this.setState(state => ({
      notes: state.notes.map(note =>
        (note.id === toToggleNote.id
          ? { ...note, editable: !note.editable }
          : note)
      )
    }));
  }

  render() {
    return (
      <div className='note-page'>
        <Icon name='plus square outline' size='big' onClick={this.addNote} className='clickable' />
        {
          this.state.notes.map(note => (
            <Note key={note.id} note={note} editNote={this.editNote} removeNote={this.removeNote} toggleEditable={this.toggleEditable}/>
          ))
        }
      </div>
    );
  }

}

export default App;
