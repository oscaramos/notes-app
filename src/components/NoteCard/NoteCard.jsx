import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import * as PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
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
  backgroundColor: PropTypes.string
}

NoteCard.defaultProps = {
  backgroundColor: '#FFB507'
}

export default function NoteCard({ content, creationDate, title, backgroundColor }) {
  const classes = useStyles()

  return (
    <Card variant='outlined' style={{ backgroundColor }}>
      <CardContent>
        {/*----- Header ------*/}
        <div className={classes.cardHeader}>
          <Typography className={classes.title} variant='h5' component='h1'>
            {title}
          </Typography>
          <Typography className={classes.date} variant='h6' component='h2'>
            {creationDate}
          </Typography>
        </div>

        {/*----- Body ------*/}
        <Typography className={classes.body} variant='body1'>
          {content}
        </Typography>
      </CardContent>
    </Card>
  )
}
