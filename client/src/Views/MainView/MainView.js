import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MainView = () => {
    
    const [posts, setPostsArray] = useState([])

    useEffect( () => {
        (async () => {
            const fetchData = await axios.get('/posts')
            setPostsArray(fetchData.data)
        })()
    }, [])

    return(
        <>
            <main className='container'>
                {posts.map( ( { title, desc, author } ) => (
                   <>
                        <section className='row'>
                            <div className='col'>
                                <h1> {title} </h1>
                                <p> {desc} </p>
                                <p> {author} </p>
                            </div>
                        </section>
                        <hr />
                   </>
                ))}
            </main>
        </>
    )
}

export default MainView