import React from 'react';
import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import './note.styles.scss'

const Note = props => (
  <div className='note'>
    <Card>
      <Card.Content>
        <Card.Header>Note</Card.Header>
        <Card.Description>
          {props.text}
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default Note;