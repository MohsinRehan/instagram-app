import React from 'react'
import { Route , Routes } from 'react-router-dom'
import { URL } from '../component/Config'
import  Home  from '../pages/Home'


const Mainroute = () => {
  return (
   <Routes>
    <Route path={URL.HOME.BASE} element={<Home/>}></Route>
   </Routes>
  )
}

export default Mainroute;