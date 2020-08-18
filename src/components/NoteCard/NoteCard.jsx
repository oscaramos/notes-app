import React, { useEffect, useState } from 'react'
import * as PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import ReactMarkdown from 'react-markdown'


const useStyles = makeStyles(() => ({
  card: {
    borderRadius: 18,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    display: 'inline',
    color: 'white',
    fontWeight: 800,
  },
  date: {
    display: 'inline',
    color: 'white',
  },
  body: {
    color: 'white',
  },
  deleteButton: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}))

NoteCard.propTypes = {
  title: PropTypes.string,
  creationDate: PropTypes.string,
  content: PropTypes.string,
  backgroundColor: PropTypes.string,
}

NoteCard.defaultProps = {
  backgroundColor: '#FFB507',
}

export default function NoteCard({ title, content, creationDate, backgroundColor, onChangeTitle, onChangeContent, onDelete }) {
  const classes = useStyles()

  const [titleText, setTitleText] = useState(title);
  const [contentText, setContentText] = useState(content);

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingContent, setIsEditingContent] = useState(false);

  useEffect(() => {
    setTitleText(title)
    setContentText(content)
  }, [title, content])

  return (
    <Card variant='outlined' className={classes.card} style={{ backgroundColor }}>
      <CardContent>
        {/*----- Header ------*/}
        <div className={classes.cardHeader}>
          <Typography className={classes.title} variant='h5' component='h1'>
            {
              isEditingTitle?
                <TextField variant='outlined'
                           value={titleText}
                           onChange={e => setTitleText(e.target.value)}
                           onBlur={() => {
                             onChangeTitle(titleText)
                             setIsEditingTitle(false)
                           }}
                />
              :
                <div onClick={() => setIsEditingTitle(true)} >
                  {titleText}
                </div>
            }
          </Typography>

          <Typography className={classes.date} variant='h6' component='h2'>
            {creationDate}
          </Typography>
        </div>

        {/*----- Body ------*/}
        <Typography className={classes.body} variant='body1' component='div'>
          <div>
            {
              isEditingContent?
                <TextField value={contentText}
                           multiline
                           rows={8}
                           variant='outlined'
                           fullWidth
                           onChange={e => setContentText(e.target.value)}
                           onBlur={() => {
                             onChangeContent(contentText)
                             setIsEditingContent(false)
                           }}
                />
                :
                <div onClick={() => setIsEditingContent(true)}>
                  <ReactMarkdown source={content}/>
                </div>
            }
          </div>
        </Typography>

        {/*----- Toolbar -----*/}
        <Grid container justify='flex-end'>
          <Grid item>
            <IconButton aria-label='delete' className={classes.deleteButton} onClick={onDelete}>
              <DeleteOutlineIcon color='secondary' fontSize='small' />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
