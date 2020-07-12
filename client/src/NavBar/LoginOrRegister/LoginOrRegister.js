import React, { useState } from 'react'
import LoginModal from './LoginModal/LoginModal'
import Modal from './Modal/Modal'

const LoginOrRegister = () => {
        const [isLoginModal, setLoginModal] = useState(false)
        const [isRegisterModal, setRegisterModal] = useState(false)

        return(
            <>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <a type='button' className='nav-link' onClick={ () => setLoginModal(!isLoginModal) } >
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2  0 0 0-2-2H2z"/>
                                <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <span className='mx-1'>Sing in</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a type='button' className='nav-link'>
                            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1    0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                <path fillRule="evenodd" d="M13 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"/>
                            </svg>
                            <span className='mx-1'>Sign up</span>
                        </a>
                    </li>
                </ul>
                {isLoginModal && <Modal render={<LoginModal isModal = { () => setLoginModal(!isLoginModal) } />} /> }
            </>
        )
}

export default LoginOrRegister