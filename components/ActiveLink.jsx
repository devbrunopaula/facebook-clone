import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Tooltip from '@material-ui/core/Tooltip'
import Badge from '@material-ui/core/Badge'
import {useRouter} from 'next/router'

const ActiveLink = ({
  href,
  toolTipTitle,
  ToolTipSize,
  badgeContent,
  iconName,
}) => {
  const router = useRouter()
  const [active, setActive] = useState('')

  const activeStatus = () => {
    router.asPath === href ? setActive('selected') : setActive('')
  }

  useEffect(() => {
    activeStatus()
    return () => {
      activeStatus()
    }
  }, [])
  return (
    <Link href={href}>
      <Tooltip
        title={<h1 style={{fontSize: ToolTipSize}}>{toolTipTitle}</h1>}
        aria-label={toolTipTitle}
      >
        <div
          className={`nav-home-icon ${
            router.asPath === href ? 'selected' : ''
          }`}
        >
          <div className='iwrapper'>
            <Badge color='secondary' badgeContent={badgeContent}>
              {router.asPath === href ? (
                <i className={`fas ${iconName}`} style={{color: '#1f77f2'}} />
              ) : (
                <i className={`fas ${iconName}`} color={'green'} />
              )}
            </Badge>
          </div>
        </div>
      </Tooltip>
    </Link>
  )
}

export default ActiveLink
