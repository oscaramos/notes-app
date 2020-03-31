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
          title: 'Title',
          text: 'This is a note 11'
        },
        {
          id: 2,
          title: 'Title',
          text: 'This is a note 22'
        },
        {
          id: 3,
          title: 'Title',
          text: 'This is a note 33'
        }
      ]
    };
  }

  addNote = () => {
    const lastid = this.state.notes.length ? this.state.notes[this.state.notes.length - 1].id : 1;
    const newNote = {
      id: lastid + 1,
      title: 'Title',
      text: 'Text'
    }

    this.setState({
      notes: [...this.state.notes, newNote]
    });
  }

  removeNote = toRemoveNote => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== toRemoveNote.id)
    });
  }


  render() {
    return (
      <div className='note-page'>
        <Icon name='plus square outline' size='big' onClick={this.addNote} className='clickable'/>
        {
          this.state.notes.map(note => (
            <Note key={note.id} note={note} removeNote={this.removeNote}/>
          ))
        }
      </div>
    );
  }

}

export default App;
