import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {Grid, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {shadows} from '@material-ui/system'
import Size from '../../mediaSize'
import Badge from '@material-ui/core/Badge'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HomeIcon from '@material-ui/icons/Home'
import Icon from '@material-ui/core/Icon'
const useStyles = makeStyles(
  (theme) => (
    console.log(theme),
    {
      root: {
        flexGrow: 1,
        // maxWidth: ,
      },
      left: {
        // border: 'solid red',
      },
      center: {
        // border: 'solid #003cff',
      },
      right: {
        // border: 'solid #235005',
      },
    }
  )
)

function Testbar(props) {
  const {children, value, index, ...other} = props
  const classes = useStyles()
  return (
    <>
      <AppBar color='white' position='static' className={classes.root}>
        <Toolbar>
          <Box className={classes.left} width='28%'>
            1
          </Box>
          <Box className={classes.center} width='56%'>
            <Tabs
              value={0}
              onChange={() => {}}
              variant='fullWidth'
              indicatorColor='primary'
              aria-label='example'
              centered
            >
              <Tab
                icon={<HomeIcon style={{fontSize: '1rem'}} />}
                aria-label='home'
              />

              <Tab icon={<HomeIcon />} aria-label='home' />
              <Tab icon={<HomeIcon />} aria-label='home' />
              <Tab icon={<HomeIcon />} aria-label='home' />
            </Tabs>
          </Box>
          <Box className={classes.right} width='28%'>
            3
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Testbar
