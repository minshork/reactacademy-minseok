import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'
import '../assets/scss/Nav_module.scss'


const Nav = () => {
  return (
    <div className='nav_container' style={{display: 'flex'}}>
        <div className='nav_logo'>
          <Link to=""><img src={logo} alt="logo" /></Link>
        </div>
        <ul className='nav_menu' style={{display: 'flex', gap: '30px'}}>
            <li><Link to="/vision">비전</Link></li>
            <li><Link to="/foot">발자취</Link></li>
            <li><Link to="/msg">축하메시지</Link></li>
            <li><Link to="/promotion">홍보관</Link></li>
            <li><Link to="/picture">사진 공모전</Link></li>
            <li><Link to="/event">주요행사안내</Link></li>
        </ul>
    </div>
  )
}

export default Nav