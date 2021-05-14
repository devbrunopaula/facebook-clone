import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {Grid, Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {shadows} from '@material-ui/system'
import Size from '../../mediaSize'
import Badge from '@material-ui/core/Badge'

import Avatar from '@material-ui/core/Avatar'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    flexGrow: 1,
    width: '100%',
    boxShadow: '0 0 8px .5px #dadada',
    background: 'white',
    '@media (max-width: 780px)': {
      //   background: 'red',
    },
  },
  left: {
    // border: 'solid red',
    display: 'flex',
  },
  center: {
    border: 'solid blue',
  },
  right: {
    border: 'solid purple',
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}))

function Testbar(props) {
  const [mediaSize, setMediaSize] = useState('')
  const style = useStyles()
  const {width} = props
  return (
    <Box className={style.root}>
      <Grid container>
        <Grid className={style.left} item xs={3}>
          <img className='logo' src='/images/logo.png' alt='logo' />
          <div className='searchBox'>
            <i className='fas fa-search'></i>
            <input
              type='search'
              name='search'
              id=''
              placeholder='Search Facebook'
            />
          </div>
        </Grid>
        {/* <Hidden only={['xs', 'sm']}> */}
        <Grid item xs={6} className='center'>
          <div className='centerIcons'>
            <Link href='/'>
              <div className='home-icon'>
                <i className='fas fa-home' />
              </div>
            </Link>
            <Link href='/test'>
              <div className='nav-icon-hover'>
                <Badge color='secondary' badgeContent={'9+'}>
                  <i className='fas fa-tv' />
                </Badge>
              </div>
            </Link>
            <Link href='/test'>
              <div className='nav-icon-hover'>
                <Badge color='secondary' badgeContent={'1'}>
                  <i className='fas fa-store' />
                </Badge>
              </div>
            </Link>
            <Link href='/test'>
              <div className='nav-icon-hover'>
                <Badge color='secondary' badgeContent={'9+'}>
                  <i className='fas fa-users' />
                </Badge>
              </div>
            </Link>
            {Size(1080) ? (
              <Link href='/test'>
                <div className='nav-icon-hover'>
                  <Badge color='secondary' badgeContent={'1'}>
                    <i className='fas fa-gamepad' />
                  </Badge>
                </div>
              </Link>
            ) : (
              <Link href='/test'>
                <div className='nav-icon-hover'>
                  <Badge color='secondary' badgeContent={'5'}>
                    <i className='fas fa-bars' />
                  </Badge>
                </div>
              </Link>
            )}
          </div>
        </Grid>
        {/* </Hidden> */}
        <Grid item xs={Size(700) ? 3 : 9} className='right'>
          <div className='avatar__container'>
            <div className='avatar__wraper'>
              <Avatar
                className={style.small}
                alt='Bruno Paula'
                src='https://brunopaula.com/images/brunopaula.jpg'
              />
              <p>Bruno</p>
            </div>

            <div className='right_nav_icons'>
              <div className='nav_icons-wrapper'>
                <i class='fas fa-plus'></i>
              </div>
              <div className='nav_icons-wrapper'>
                <i class='fab fa-facebook-messenger'></i>
              </div>
              <div className='nav_icons-wrapper'>
                <i class='fas fa-bell'></i>
              </div>
              <div className='nav_icons-wrapper'>
                <span className='alertCircle'></span>
                <i class='fas fa-sort-down'></i>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Testbar
