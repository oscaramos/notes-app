import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import dayjs from 'dayjs'
import ls from 'local-storage'

import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles'

import NoteCard from './components/NoteCard/NoteCard'

import InitialNotes from './InitialNotes'
import NotesColors from './NotesColors'


const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: '100%'
  },
  fabContainer: {
    position: 'absolute',
    bottom: theme.spacing(-4),
    right: theme.spacing(0),
    width: '100%'
  }
}))

function App() {
  const classes = useStyles()

  const [notes, setNotes] = useState(InitialNotes)

  const addNote = () => {
    setNotes([...notes, {
      title: 'new title',
      creationDate: dayjs().format("DD MMM"),
      content: 'My second content',
      backgroundColor: NotesColors[notes.length%3]
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

  const onDeleteNote = (index) => {
    const newNotes = [...notes]
    newNotes.splice(index, 1)
    setNotes(newNotes)
  }

  useEffect(() => {
    const savedNotes = ls.get('Notes')
    if (savedNotes && savedNotes.length > 0) {
      console.log(savedNotes)
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    ls.set('Notes', notes)
  }, [notes])


  return (
    <Container maxWidth='xs'>
      <Grid container direction='column' justify='space-between'
            className={classes.root}>
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
                            onDelete={() => onDeleteNote(index)}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Grid>

        <Grid item className={classes.fabContainer}>
          <Grid container justify='center'>
            <Grid item>
              <Fab color="primary" aria-label="add" onClick={addNote}>
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
