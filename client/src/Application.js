import React from 'react'

import ListView from './ListView'

export default function Application () {
  return (
    <div className='Application'>
      <img src='/logo.png' className='Logo' />
      <ListView />
    </div>
  )
}
