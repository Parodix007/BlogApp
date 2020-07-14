import React from 'react'
import styles from './RegisterModal.module.scss'

const RegisterModal = (props) => (
    <div className="modal-content">
        <div className="modal-header">
            <div className={styles.title}>
                <p>Sign up</p>
            </div>
            <button type="button" className="close" onClick={props.isModal}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            <form action='/register' method='POST'>
                <div className='form-group'>
                    <label htmlFor='loginUserName'>Username</label>
                    <input required type='text' name='loginUserName' id='userName' className='form-control' placeholder='Enter username' />
                </div>
                <div className='form-group'>
                    <label htmlFor='loginUserPasswor'>Password</label>
                    <input required type='password' name='loginUserPassword' className='form-control' placeholder='Enter password' />
                </div>
                <div className='form-group'>
                    <label htmlFor='loginUserPasswor'>Repeat Password</label>
                    <input required type='password' name='loginUserPassword' className='form-control' placeholder='Enter password' />
                </div>
                <div className='form-group'>
                    <label htmlFor='loginUserPasswor'>Email</label>
                    <input required type='email' name='loginUserPassword' className='form-control' placeholder='Enter password' />
                </div>
            </form>
        </div>
        <div className='modal-footer'>
            <div className={styles.Wrapper}>
                <button type="button" className="btn btn-outline-danger" onClick={props.isModal}>Close</button>
                <button type='submit' className="btn btn-outline-success">Sign up</button>
            </div>
        </div>
    </div>
)

export default RegisterModal