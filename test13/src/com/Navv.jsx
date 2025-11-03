import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navv = () => {
    let navigator = useNavigate();
  return (
    <div>
        <button onClick={() => navigator('/home')}>홈으로</button>
        <button onClick={() => navigator('/about')}>회사소개</button>
        <button onClick={() => navigator('/map')}>오시는길</button>
        <button onClick={() => navigator('/event')}>이벤트</button>
        <button onClick={() => navigator('/another')}>다른웹사이트</button>
    </div>
  )
}

export default Navv