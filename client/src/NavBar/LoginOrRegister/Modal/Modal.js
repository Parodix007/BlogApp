import React from 'react'
import styles from './Modal.module.scss'

const Modal = ( props ) => (
    <div className='modal' tabIndex="-1" role="dialog" style={{display: 'block'}}>
        <div className={`${styles.modalProp} modal-dialog`}>
            {props.render}
        </div>
    </div>
)

export default Modal
