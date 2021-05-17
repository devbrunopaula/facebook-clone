import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Badge from '@material-ui/core/Badge'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'

function Test2() {
  const [username, setUsername] = useState('Bruno')

  const ajustUsernameSize = () => {
    const userNameLenght = username.length
    console.log(userNameLenght)
    const result = userNameLenght < 12 ? '130' : userNameLenght * 12
    console.log('result ' + result)
    return result + 'px'
  }

  ajustUsernameSize()
  return (
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
        <Link href='/'>
          <Tooltip
            title={<h1 style={{fontSize: '12px'}}>Home</h1>}
            aria-label='Home'
          >
            <div className='nav-home-icon active'>
              <i className='fas fa-home' />
            </div>
          </Tooltip>
        </Link>
        <Link href='/test'>
          <Tooltip
            title={<h1 style={{fontSize: '12px', opacity: '1'}}>Watch</h1>}
            aria-label='Watch'
          >
            <div className='nav-home-icon'>
              <Badge color='secondary' badgeContent={'9+'}>
                <i className='fas fa-tv' />
              </Badge>
            </div>
          </Tooltip>
        </Link>
        <Link href='/'>
          <Tooltip
            title={<h1 style={{fontSize: '12px'}}>Marketplace</h1>}
            aria-label='Marketplace'
          >
            <div className='nav-home-icon'>
              <div>
                <Badge color='secondary' badgeContent={'9+'}>
                  <i className='fas fa-store' />
                </Badge>
              </div>
            </div>
          </Tooltip>
        </Link>
        <Link href='/'>
          <Tooltip
            title={<h1 style={{fontSize: '12px'}}>Groups</h1>}
            aria-label='Groups'
          >
            <div className='nav-home-icon'>
              <div className='ring'>
                <Badge
                  className='badge-test'
                  color='secondary'
                  badgeContent={'2+'}
                >
                  <i className='fas fa-users' />
                </Badge>
              </div>
            </div>
          </Tooltip>
        </Link>
        <Link href='/'>
          <Tooltip
            title={<h1 style={{fontSize: '12px'}}>Gaming</h1>}
            aria-label='Gaming'
          >
            <div className='nav-home-icon'>
              <Badge color='secondary' badgeContent={'5+'} invisible={false}>
                <i className='fas fa-gamepad' />
              </Badge>
            </div>
          </Tooltip>
        </Link>
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
              <i class='fas fa-plus'></i>
            </div>
          </Tooltip>
          <Tooltip
            title={<h1 style={{fontSize: '12px'}}>Messenger</h1>}
            aria-label='messenger'
          >
            <div className='nav_icons-wrapper'>
              <i class='fab fa-facebook-messenger'></i>
            </div>
          </Tooltip>
          <Tooltip
            title={<h1 style={{fontSize: '12px'}}>Notifications</h1>}
            aria-label='notifications'
          >
            <div className='nav_icons-wrapper'>
              <i class='fas fa-bell'></i>
            </div>
          </Tooltip>
          <Tooltip
            title={<h1 style={{fontSize: '12px'}}>Account</h1>}
            styles={{fontSize: '18px'}}
            aria-label='account'
          >
            <div className='nav_icons-wrapper'>
              <span className='alertCircle'></span>
              <i class='fas fa-sort-down'></i>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Test2
