import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul style={{display: 'flex', gap: '20px'}}>
            <li><Link to='/home'>회사</Link></li>
            <li><Link to='/about'>회사소개</Link></li>
            <li><Link to='/contact'>문의하기</Link></li>
        </ul>
    </div>
  )
}

export default Nav