import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Test01 from './com/Test01'
import Test02 from './com/Test02'
import Test03 from './com/Test03'

function App() {
  // jsx 기초
  // 첫글자는 반드시 대문자, 단 하나의 최상위 요소, js값은 {}를 사용, 닫는 태그 필수  <img />, <input />
  
  return (
    <>
      <h1>안녕하세요</h1>
      <Test01 />
      <Test02 />
      <Test03 />
    </>
  )
}

export default App