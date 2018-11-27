import React from 'react'
import { Link } from 'gatsby'

const StoryBookPage = () => {
    return (
        <div>
            <div style={{
                background: 'blue',
                height: '48px',
                width: '100vw'
            }}>
                <Link to="/">Back</Link>
            </div>
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
