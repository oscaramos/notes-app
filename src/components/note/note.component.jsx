import React from 'react';
import { Card } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import './note.styles.scss'

const Note = props => {
  const { title, text } = props;
  return (
    <div className='note'>
      <Card className='card'>
        <Card.Content className='card-content'>
          <Card.Header className='card-header'>{title}</Card.Header>
          <Card.Description className='card-description'>
            {text}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Note;