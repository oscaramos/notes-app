import React from 'react';
import { Card, Icon } from "semantic-ui-react";

import ViewNote from "./view-note/view-note.component";

import 'semantic-ui-css/semantic.min.css'
import './note.styles.scss'
import EditNote from "./edit-note/edit-note";

const Note = ({ note, editNote, removeNote, toggleEditable }) => (
    <div className='note'>
      <Card className='card'>
        <Card.Content>
          <Card.Header>
            <div className='card-header'>
              <Icon name='remove' className='clickable' onClick={() => removeNote(note)} />
              <Icon name='edit' className='clickable' onClick={() => toggleEditable(note)} />
            </div>
          </Card.Header>
          <Card.Description>
            {
              note.editable ? <EditNote note={note} handleChange={editNote} />
                : <ViewNote note={note} />
            }
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
);

export default Note;