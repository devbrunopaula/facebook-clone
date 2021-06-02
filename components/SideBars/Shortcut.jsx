import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  main: {
    border: 'solid green',
  },
}))
function Shortcut() {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <h2>Your Shortcut</h2>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
      <p>
        <span>Avatar</span>
        <span>Name</span>
      </p>
    </div>
  )
}

export default Shortcut
