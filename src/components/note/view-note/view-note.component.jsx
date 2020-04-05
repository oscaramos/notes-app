import React from 'react';
import marked from 'marked';
import ReactHtmlParser from 'react-html-parser';

const ViewNote = ({ note }) => {
  return (
    <div>
      {ReactHtmlParser(marked(note.text))}
    </div>
  );
};

export default ViewNote;