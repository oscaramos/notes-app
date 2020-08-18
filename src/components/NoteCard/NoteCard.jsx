import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import * as PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton'


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
      backgroundColor: 'transparent'
    }
  }
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

export default function NoteCard({ content, creationDate, title, backgroundColor, onChangeTitle, onChangeContent, onDelete }) {
  const classes = useStyles()
  const titleRef = useRef(title)
  const contentRef = useRef(content)

  const handleChangeTitle = evt => {
    titleRef.current = evt.target.value
  }

  const handleChangeContent = evt => {
    contentRef.current = evt.target.value
  }

  const handleBlurTitle = () => {
    onChangeTitle(titleRef.current)
  }

  const handleBlurContent = () => {
    onChangeContent(titleRef.current)
  }

  return (
    <Card variant='outlined' className={classes.card} style={{ backgroundColor }}>
      <CardContent>
        {/*----- Header ------*/}
        <div className={classes.cardHeader}>
          <Typography className={classes.title} variant='h5' component='h1'>
            <ContentEditable html={titleRef.current} onBlur={handleBlurTitle} onChange={handleChangeTitle} />
          </Typography>
          <Typography className={classes.date} variant='h6' component='h2'>
            {creationDate}
          </Typography>
        </div>

        {/*----- Body ------*/}
        <Typography className={classes.body} variant='body1' component="div">
          <ContentEditable html={contentRef.current} onBlur={handleBlurContent} onChange={handleChangeContent} />
        </Typography>
        <Grid container justify='flex-end'>
          <Grid item>
            <IconButton aria-label='delete' className={classes.deleteButton} onClick={onDelete}>
              <DeleteOutlineIcon color="secondary" fontSize="small"/>
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
