import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import styles from './NavBar.module.scss'

import LoginOrRegister from './LoginOrRegister/LoginOrRegister'

const navBar = classnames(
    'navbar',
    'navbar-expand-lg',
    'navbar-dark',
    'bg-dark',
    'fixed-top'
)

const navMenu = classnames(
    'collapse',
    'navbar-collapse',
    'menu'
)

const NavBar = () => (
    <nav className={navBar}>
        <Link to='/' className="navbar-brand">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg>
        </Link>

        <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='.menu'>
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className={navMenu}>
            <div className={styles.userMenu}>
                <div>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/about-me' className='nav-link'>About me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <LoginOrRegister />
                </div>
            </div>
        </div>
    </nav>
)

export default NavBar