import React from 'react'
import { Link } from 'react-router-dom'
import styles from  '../styles/NavBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <div className='container'>
            <ul className={styles.menu}>
                <li><Link to='/'>홈</Link></li>
                <li><Link to='/about'>회사소개</Link></li>
                <li><Link to='/gallery'>갤러리</Link></li>
                <li><Link to='/contact'>연락처</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar