import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GalaryList from '../components/GalaryList/GalaryList'
import GalaryAnotherPage from '../components/GalaryanotherPage/GalaryAnotherPage'



function CustomRoutes() {
  return (
    <Routes>
              <Route path='/' element={<GalaryList/>}/>
              <Route path='/galaryList/:id' element={<GalaryAnotherPage/>}/>
    </Routes>
  )
}

export default CustomRoutes