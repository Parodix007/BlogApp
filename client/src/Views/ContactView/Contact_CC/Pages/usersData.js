import React from 'react'

const UsersData = () => (
    <>
        <div className='form-group'>
            <label htmlFor='userName'>Username</label>
            <input type='text' className='form-control' placeholder='Enter Username...' required={true} />
        </div>
        <div className='form-group'>
            <label htmlFor='userEmail'>Email</label>
            <input type='email' className='form-control' placeholder='Enter email adress' required={true} />
        </div>
    </>
)

export default UsersData