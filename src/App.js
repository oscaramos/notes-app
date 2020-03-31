import React from 'react'
import { Icon } from 'semantic-ui-react';

import Note from "./components/note/note.component";

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: 'Title',
          text: 'This is a note 11'
        },
        {
          title: 'Title',
          text: 'This is a note 22'
        },
        {
          title: 'Title',
          text: 'This is a note 33'
        }
      ]
    };
  }

  addIcon = () => {
    const newNote = {
      title: 'New title',
      text: 'New text'
    }

    this.setState({
      notes: [...this.state.notes, newNote]
    });
  }


  render() {
    return (
      <div className='note-page'>
        <Icon name='plus square outline' size='big' onClick={this.addIcon} />
        {
          this.state.notes.map(({ title, text }) => (
            <Note title={title} text={text}/>
          ))
        }
      </div>
    );
  }

}

export default App;
