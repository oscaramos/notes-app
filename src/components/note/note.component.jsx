import React from 'react';
import { Card, Icon } from "semantic-ui-react";

import 'semantic-ui-css/semantic.min.css'
import './note.styles.scss'

const Note = ({ note, removeNote }) => (
    <div className='note'>
      <Card className='card'>
        <Card.Content>
          <Card.Header>
            <div className='card-header'>
              <span>{note.title}</span>
              <Icon name='remove' className='clickable' onClick={() => removeNote(note)}/>
            </div>
          </Card.Header>
          <Card.Description>
            <span>
              {note.text}
            </span>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )


export default Note;