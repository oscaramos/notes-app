import React, { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import * as PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
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

export default function NoteCard({ content, creationDate, title, backgroundColor, onChangeTitle, onChangeContent }) {
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
      </CardContent>
    </Card>
  )
}
