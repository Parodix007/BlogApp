import React from 'react'

const Mess = () => (
    <textarea className='form-control' maxLength={300} rows={10} cols={30} placeholder='Enter your message...' required={true} style={{resize:'none'}} />
)

export default Mess