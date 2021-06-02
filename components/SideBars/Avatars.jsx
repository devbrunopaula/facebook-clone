import {Avatar, Grid} from '@material-ui/core/'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  main: {
    paddingBottom: '10px',
  },
  userName: {
    paddingLeft: '10px',

    fontSize: '1rem',
    fontWeight: '300',
  },
  alert: {
    fontSize: '.8rem',
    color: 'dodgerblue',
  },
}))
function SideAvatars({url, username, notification}) {
  const classes = useStyles()
  return (
    <div>
      <Grid container alignItems='center' className={classes.main}>
        <Grid item>
          <Avatar src={url} />
        </Grid>
        <Grid item className={classes.userName}>
          <p>{username}</p>
          <span className={classes.alert}>
            {notification ? '* ' + notification : ''}
          </span>
        </Grid>
      </Grid>
    </div>
  )
}

export default SideAvatars
