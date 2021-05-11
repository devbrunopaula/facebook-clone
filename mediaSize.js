import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function SimpleMediaQuery(width) {
  const matches = useMediaQuery(`(min-width:${width}px)`)
  console.log(matches)
  return matches
}
