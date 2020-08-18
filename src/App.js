import React, { useState } from 'react'
import Container from '@material-ui/core/Container'

import NoteCard from './components/NoteCard/NoteCard'
import Grid from '@material-ui/core/Grid'

function App() {
  const [title, setTitle] = useState('My title')
  const [creationDate, setCreationDate] = useState('17th JAN')
  const [content, setContent] = useState('ajaja')

  return (
    <Container maxWidth='xs'>
      <Grid container spacing={1} direction='column'>
        <Grid item>
          <NoteCard title={title}
                    creationDate={creationDate}
                    content={content}
                    backgroundColor="#FFB507"
          />
        </Grid>
        <Grid item>
          <NoteCard title={title}
                    creationDate={creationDate}
                    content={content}
                    backgroundColor='blue'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
