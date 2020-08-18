import React, { useState } from 'react'
import Container from '@material-ui/core/Container'

import NoteCard from './components/NoteCard/NoteCard'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'

import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '98vh'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(4),
  }
}))



function App() {
  const classes = useStyles()

  const [notes, setNotes] = useState([
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
  const addNote = () => {
    setNotes([...notes, {
      title: 'new title',
      creationDate: '20 jan',
      content: 'My second content',
      backgroundColor: '#1FD0BF'
    }])
  }

  const onChangeTitle = (index, newTitle) => {
    const newNotes = [...notes]
    newNotes[index].title = newTitle
    setNotes(newNotes)
  }

  const onChangeContent = (index, newContent) => {
    const newNotes = [...notes]
    newNotes[index].content = newContent
    setNotes(newNotes)
  }

  return (
    <Container maxWidth='xs' className={classes.root}>
      <Grid container direction='column' justify='space-between' style={{ height: '100%' }}>
        <Grid item>
          <Grid container spacing={1} direction='column'>
            {
              notes.map((card, index) => (
                <Grid item key={index}>
                  <NoteCard title={card.title}
                            creationDate={card.creationDate}
                            content={card.content}
                            backgroundColor={card.backgroundColor}
                            onChangeTitle={newTitle => onChangeTitle(index, newTitle)}
                            onChangeContent={newContent => onChangeContent(index, newContent)}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Grid>

        <Grid item>
          <Fab color="primary" aria-label="add" className={classes.fab} onClick={addNote}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
