import React, {useState, useContext} from 'react'

const WizardContext = React.createContext({
    page: 1,
    changePage: () => {},
})

export const ContactPart = ( { children, index } ) => {
    const { page } = useContext(WizardContext)
    return (
        <>
            {
                index === page && children
            }
        </>
    )
}

export const Buttons = props => {
    const { page, changePage } = useContext(WizardContext)
    return (
        <div className='form-group' {...props}>
            <button className='btn btn-danger' type='button' onClick={() => changePage(page - 1)} disabled={page === 1}>Back</button>
            <button className='btn btn-primary' type='button' onClick={() => changePage(page + 1)} disabled={ page === 2}>Next</button>
            <button className='btn btn-success' type='submit' disabled={page < 2}>Send</button>
        </div>
    )
}

export const Wizard = ( {children} ) => {
    const [page, setPage] = useState(1)

    const changePage = index => {
        setPage(index)
    }

    return (
        <form method='POST' action='/contact'>
            <WizardContext.Provider value={{
                page,
                changePage
            }}>
                {children}
            </WizardContext.Provider>
        </form>
    )
}