import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/scss/Sub.scss'
import Home from './com/Home'
import Nav from './com/Nav'
import Vision from './com/Vision'
import Foot from './com/Foot'
import Msg from './com/Msg'
import Promotion from './com/Promotion'
import Picture from './com/Picture'
import Event from './com/Event'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/foot' element={<Foot />} />
        <Route path='/msg' element={<Msg />} />
        <Route path='/promotion' element={<Promotion />} />
        <Route path='/picture' element={<Picture />} />
        <Route path='/event' element={<Event />} />
      </Routes>
    </div>
  )
}

export default App