import React, { Children } from 'react'
import Navbar from '../component/leftbar navbar'

export const Pagelayout = (props) => {
  return (
    <div className='flex flex-row'>
    <Navbar />
    <div className='p-4'>
      {props.children}
    </div>
  </div>
  )
}
