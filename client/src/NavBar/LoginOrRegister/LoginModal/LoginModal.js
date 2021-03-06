import React from 'react'
import classname from 'classnames'
import styles from './LoginModal.module.scss'

const input = classname('form-control')

const LoginModal = (props) => (
    <div className="modal-content">
        <div className="modal-header">
            <div className={styles.title}>
                <p>Sign in</p>
            </div>
            <button type="button" className="close" onClick={props.isModal}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            <form action='/login' method='POST'>
                <div className='form-group'>
                    <label htmlFor='loginUserName'>Username</label>
                    <input required={true} type='text' name='loginUserName' id='userName' className={input} placeholder='Enter username' />
                </div>
                <div className='form-group'>
                    <label htmlFor='loginUserPasswor'>Password</label>
                    <input required={true} type='password' name='loginUserPassword' className={input} placeholder='Enter password' />
                </div>
            </form>
        </div>
        <div className='modal-footer'>
            <div className={styles.Wrapper}>
                <button type="button" className="btn btn-outline-danger" onClick={props.isModal}>Close</button>
                <button type="submit" className="btn btn-outline-success">Sign in</button>
            </div>
        </div>
    </div>
)

export default LoginModal