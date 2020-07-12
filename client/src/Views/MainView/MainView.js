import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MainView = () => {
    
    const [posts, setPosts] = useState([])

    useEffect( () => {
        const getPosts = async () => {
            const data = await axios.get('/posts')
        }
        getPosts()

    })

    return(
        <>
            <main className='container'>
                <section className='row'>
                    <h1>cos tam</h1>
                </section>
            </main>
        </>
    )
}

export default MainView