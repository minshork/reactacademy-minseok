import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Nav from './com/Nav'
import Subpage from './com/Subpage'

const App = () => {
  return (
    <div>
      <Nav />
      <hr />
      <Routes>
        <Route path='./home' element={<Subpage title="회사" sub="우리 회사 좋은 회사" />} />
        <Route path='./about' element={<Subpage title="회사 소개" sub="우리회사는 의문투성이 무한상사" />} />
        <Route path='./contact' element={<Subpage title="문의하기" sub="무엇이든 물어보세요" />} />
      </Routes>
    </div>
  )
}

export default App