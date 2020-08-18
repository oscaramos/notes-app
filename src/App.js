import React, { useState } from 'react'
import Container from '@material-ui/core/Container'

import NoteCard from './components/NoteCard/NoteCard'
import Grid from '@material-ui/core/Grid'

function App() {
  const [cards, setCards] = useState([
    {
      title: 'My title',
      creationDate: '17 jan',
      content: 'my content',
      backgroundColor: '#FFB507'
    },
    {
      title: 'My title 2',
      creationDate: '20 jan',
      content: 'My second content',
      backgroundColor: '#1FD0BF'
    },
  ])

  return (
    <Container maxWidth='xs'>
      <Grid container spacing={1} direction='column'>
        {
          cards.map(card => (
            <Grid item>
              <NoteCard title={card.title}
                        creationDate={card.creationDate}
                        content={card.content}
                        backgroundColor={card.backgroundColor}
              />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default App
