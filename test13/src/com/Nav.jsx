import React from 'react'
import {Link} from 'react-router-dom'
// scss 에서는 Link가 아닌 a태크로 꾸며야함

const Nav = () => {
  return (
    <div>
        <ul>
            <li><Link to='/home'>홈으로</Link></li>
            <li><Link to='/about'>회사소개</Link></li>
            <li><Link to='/map'>오시는길</Link></li>
            <li><Link to='/event'>이벤트</Link></li>
            <li><Link to='/another'>다른웹사이트</Link></li>
        </ul>
    </div>
  )
}

export default Nav