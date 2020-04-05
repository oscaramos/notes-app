import React from 'react';

const ViewNote = ({ note }) => {
  return (
    <div>
      {note.text}
    </div>
  );
};

export default ViewNote;