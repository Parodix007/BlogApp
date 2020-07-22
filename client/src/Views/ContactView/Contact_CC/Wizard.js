import React, {useState, useEffect, useContext} from 'react'

const Context = React.createContext({
    index:1
})

export const ContactPart = ( { children } ) => {
    const WizardContext = useContext(Context)
    return (
        <>
            {children}
            <p>{WizardContext.index}</p>
            <hr />
        </>
    )
}

export const Buttons = props => {
    return (
        <div className='form-group' {...props}>
            <button className='btn btn-danger' type='button'>Back</button>
            <button className='btn btn-primary' type='button'>Next</button>
            <button className='btn btn-success' type='submit'>Send</button>
        </div>
    )
}

export const Wizard = ( {children} ) => (
    <form method='POST' action='/contact'>
        <Context.Provider value={Context}>
            {children}
        </Context.Provider>
    </form>
)