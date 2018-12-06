import React from 'react'
import Header from '../components/Header'

const StoryBookPage = () => {
    return (
        <div>
            <Header></Header>
            <iframe
                style={{
                    display: 'block',
                    background: '#000',
                    border: 'none',
                    width: '100vw',
                    height: 'calc(100vh - 48px)'
                }}
                src="https://hrafnkellbaldurs.github.io/hrafnkellbaldurs-netlify/"></iframe>
        </div>
    )
}

export default StoryBookPage
