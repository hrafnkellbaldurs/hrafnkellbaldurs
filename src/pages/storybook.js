import React from 'react'
import Header from '../components/Header'
import SEO from '../components/SEO'

const StoryBookPage = () => {
    return (
        <div>
            <SEO title="Storybook" />
            <Header />
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
