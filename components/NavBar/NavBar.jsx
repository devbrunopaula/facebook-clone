import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Badge from '@material-ui/core/Badge'
import {useRouter} from 'next/router'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import AppBar from '@material-ui/core/AppBar'
import ActiveLink from '../ActiveLink'
import {route} from 'next/dist/next-server/server/router'

function NavBar() {
  const [username, setUsername] = useState('Bruno')
  const router = useRouter()
  const ajustUsernameSize = () => {
    const userNameLenght = username.length
    const result = userNameLenght < 12 ? '130' : userNameLenght * 12
    return result + 'px'
  }

  ajustUsernameSize()
  return (
    <AppBar position='sticky'>
      <div className='navbar'>
        <div className='leftbox'>
          <div className='inner-left-Box'>
            <img className='logo-img' src='/images/logo.png' alt='logo' />
            <div className='nav-searchBox'>
              <i className='fas fa-search'></i>
              <input
                type='search'
                name='search'
                id=''
                placeholder='Search Facebook'
              />
            </div>
          </div>
        </div>
        <div className='centerbox'>
          <ActiveLink
            href='/'
            toolTipTitle='Home'
            ToolTipSize='12px'
            badgeContent={0}
            iconName='fa-home'
          ></ActiveLink>
          <ActiveLink
            href='/test'
            toolTipTitle='Watching'
            ToolTipSize='12px'
            badgeContent='9+'
            iconName='fa-tv'
          ></ActiveLink>
          <ActiveLink
            href='/marketplace'
            toolTipTitle='Marketplace'
            ToolTipSize='12px'
            badgeContent='9+'
            iconName='fa-store'
          ></ActiveLink>

          <ActiveLink
            href='/groups'
            toolTipTitle='Groups'
            ToolTipSize='12px'
            badgeContent='2+'
            iconName='fa-users'
          ></ActiveLink>
          <ActiveLink
            href='/gaming'
            toolTipTitle='Gaming'
            ToolTipSize='12px'
            badgeContent='5+'
            iconName='fa-gamepad'
          ></ActiveLink>
        </div>
        <div className='rightbox'>
          <div className='avatarWrapper' style={{width: ajustUsernameSize()}}>
            <Avatar
              alt='Remy Sharp'
              src='https://brunopaula.com/images/brunopaula.jpg'
            />
            <p id='nav-username'>{username}</p>
          </div>
          <div className='right-nav-icons'>
            <Tooltip
              title={<h1 style={{fontSize: '12px'}}>Create</h1>}
              aria-label='Create'
            >
              <div className='nav_icons-wrapper'>
                <i className='fas fa-plus'></i>
              </div>
            </Tooltip>
            <Tooltip
              title={<h1 style={{fontSize: '12px'}}>Messenger</h1>}
              aria-label='messenger'
            >
              <div className='nav_icons-wrapper'>
                <i className='fab fa-facebook-messenger'></i>
              </div>
            </Tooltip>
            <Tooltip
              title={<h1 style={{fontSize: '12px'}}>Notifications</h1>}
              aria-label='notifications'
            >
              <div className='nav_icons-wrapper'>
                <i className='fas fa-bell'></i>
              </div>
            </Tooltip>
            <Tooltip
              title={<h1 style={{fontSize: '12px'}}>Account</h1>}
              styles={{fontSize: '18px'}}
              aria-label='account'
            >
              <div className='nav_icons-wrapper'>
                <span className='alertCircle'></span>
                <i className='fas fa-sort-down'></i>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </AppBar>
  )
}

export default NavBar
