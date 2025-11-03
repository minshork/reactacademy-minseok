import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './com/Nav'
import Home from './com/Home'
import About from './com/About'
import Event from './com/Event'
import Another from './com/Another'
import Map from './com/Map'
import Navv from './com/Navv'
// <Route> :: 해당 경로에 컴포넌트를 매칭
// <Routes> :: <Route>를 감싸는 컨테이너
// <BrowserRouter> :: <Routes>를 사용할 수 있게 해주는 컨테이너
// <Route Path = "/about" element = {<Com01 />} />
// <Link to="/about"/>회사소개</Link>


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <h1>여기는 라우터 학습중입니다`</h1>
      <Navv />
      <Routes>
        <Route path = '/home' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/map' element = {<Map />} />
        <Route path = '/event' element = {<Event />} />
        <Route path = '/another' element = {<Another />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App