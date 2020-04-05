import React from 'react'
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Note from "../note/note.component";

import 'semantic-ui-css/semantic.min.css'
import './MainPage.styles.scss'

import { addNote, editNote, removeNote, toggleEditable } from '../../redux/note/note.actions';


const App = ({ addNote, editNote , note, removeNote, toggleEditable }) => (
  <div className='note-page'>
    <Icon name='plus square outline' size='big' onClick={addNote} className='clickable' />

    {
      note.notes.map(note => (
        <Note key={note.id} note={note} editNote={editNote} removeNote={removeNote}
              toggleEditable={toggleEditable} />
      ))
    }
  </div>
);

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(addNote),
  removeNote: (note) => dispatch(removeNote(note)),
  editNote: (note) => (event) => dispatch(editNote(note, event.target.value)),
  toggleEditable: (note) => dispatch(toggleEditable(note))
})

const mapStateToProps = state => ({
  note: state.note
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
