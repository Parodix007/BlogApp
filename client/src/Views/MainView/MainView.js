import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './MainView.module.scss'
import classname from 'classnames'

const MainView = () => {
    
    const [posts, setPostsArray] = useState([])

    useEffect( () => {
        (async () => {
            const fetchData = await axios.get('/posts')
            setPostsArray(fetchData.data)
        })()
    }, [])

    const Wrapper = classname(styles.Wrapper, 'container')
    const postWrapper = classname(styles.postWrapper, 'row')

    return(
        <>
            <main className={Wrapper}>
                <ul>
                    {
                        posts.length ? (
                            posts.map( ( { title, desc, author, _id } ) => (
                                <li key={_id}>
                                    <section className={postWrapper}>
                                        <div className='col'>
                                            <h1> {title} </h1>
                                            <p> {desc} </p>
                                            <p>author: <strong>{author}</strong> </p>
                                        </div>
                                        <div className='col'>
                                            <img src='https://images.unsplash.com/photo-1594389888765-d8488fc5d3f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' className='img-fluid' />
                                        </div>
                                    </section>
                                    <hr />
                                </li>
                            ))
                        ): (
                            <li className='mt-5'>
                                <div className='d-flex justify-content-center'>
                                    <p><strong>Loading posts...</strong></p>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border text-info" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </main>
        </>
    )
}

export default MainView