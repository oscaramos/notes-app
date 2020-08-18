import React, { useState } from 'react'
import Container from '@material-ui/core/Container'

import NoteCard from './components/NoteCard/NoteCard'

function App() {
  const [title, setTitle] = useState('My title')
  const [creationDate, setCreationDate] = useState('17th JAN')
  const [content, setContent] = useState('ajaja')

  return (
    <Container maxWidth='xs'>
      <NoteCard title={title} creationDate={creationDate} content={content} />
    </Container>
  )
}

export default App
