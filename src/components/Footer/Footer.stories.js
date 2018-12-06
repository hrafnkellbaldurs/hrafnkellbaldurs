import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from './Footer'

storiesOf('Layout|Footer', module)
    .add('Basic', () => (
        <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
            <Footer/>
        </div>
    ))
