import React from 'react';
import { Form, TextArea } from 'semantic-ui-react'


const EditNote = ({ note, handleChange }) => {
  return (
    <div>
      <Form>
        <TextArea value={note.text} onChange={handleChange(note)}/>
      </Form>
    </div>
  );
};

export default EditNote;