import React, { Children } from 'react'
import Navbar from '../component/leftbar navbar'

export const Pagelayout = (props) => {
  return (
    <div className='flex'>
    <Navbar />
      {props.children}
  </div>
  )
}
