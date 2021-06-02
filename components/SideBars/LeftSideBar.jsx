import React from 'react'
import SideAvatars from './Avatars'

const data = [
  {
    url: 'https://brunopaula.com/images/brunopaula.jpg',
    username: 'Bruno Paula',
    notification: '',
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png',
    username: 'Friends',
    notification: '',
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png',
    username: 'Groups',
    notification: '',
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png',
    username: 'Pages',
    notification: '9+ new',
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png',
    username: 'Markplace',
    notification: '',
  },
  {
    url: 'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png',
    username: 'Watch',
    notification: '7 new videos',
  },
]
function LeftSideBar() {
  return (
    <div>
      {data &&
        data.map((item) => (
          <SideAvatars
            url={item.url}
            username={item.username}
            notification={item.notification}
          />
        ))}
      <p>more</p>
    </div>
  )
}

export default LeftSideBar
