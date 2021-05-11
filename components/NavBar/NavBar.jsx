import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Home from '../../public/images/home.svg'
function NavBar() {
  return (
    <div className='navbar__container'>
      <div className='navbar__left'>
        <img className='logo' src='/images/logo.png' />
        <div className='navbar__search-box'>
          <i class='fas fa-search'></i>
          <input
            className='navbar__search'
            type='search'
            name='search'
            id=''
            placeholder='Search Facebook'
          />
        </div>
      </div>
      <div className='navbar__center'>
        <div className='navbar__icons active'>
          <Home height={40} width={40} fill={'#1f77f2'} />
          {/* fill={'#1f77f2'} */}
        </div>
        <div className='navbar__icons '>
          <Home height={40} width={40} fill={'#1f77f2'} />
        </div>
        <div className='navbar__icons '>
          <Home height={40} width={40} fill={'#1f77f2'} />
        </div>
        <div className='navbar__icons '>
          <Home height={40} width={40} fill={'#1f77f2'} />
        </div>
        <div className='navbar__icons '>
          <Home height={40} width={40} fill={'#1f77f2'} />
        </div>
      </div>
      <div className='navbar__right'>center</div>
    </div>
  )
}

export default NavBar
