import React from 'react'
import classname from 'classnames'
import styles from './LoginModal.module.scss'

const input = classname('form-control')
const modal = classname({
    'modal': true,
})
const LoginModal = (props) => (
    <div className={modal, styles.modalShadow} tabindex="-1" role="dialog" style={{display: 'block'}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <div className={styles.title}>
                        <p>Sign in</p>
                    </div>
                    <button type="button" className="close" onClick={props.modal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form action='/login' method='POST'>
                        <div className='form-group'>
                            <label htmlFor='loginUserName'>Username</label>
                            <input type='text' name='loginUserName' id='userName' className={input} placeholder='Enter username' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='loginUserPasswor'>Password</label>
                            <input type='password' name='loginUserPassword' className={input} placeholder='Enter password' />
                        </div>
                    </form>
                </div>
                <div className='modal-footer'>
                    <div className={styles.Wrapper}>
                        <button type="button" className="btn btn-danger" onClick={props.modal}>Close</button>
                        <button type="button" className="btn btn-success">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default LoginModal