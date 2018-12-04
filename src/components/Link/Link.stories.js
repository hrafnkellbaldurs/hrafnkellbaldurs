import React from 'react'
import { storiesOf } from '@storybook/react'
import * as R from 'ramda'
import Link from './Link'

storiesOf('Components|Link', module)
    .add('With smoothscroll', () => (
        <div id="home" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <Link id="top" to="/#bottom" smoothScroll>Link to bottom</Link>
            {
                R.times(i => (
                    <div style={{
                        background: `rgba(200, 200, 200, ${ i % 2 === 0 ? '0.2' : '1' })`,
                        color: 'black',
                        fontWeight: 'bold',
                        height: '100px',
                        textAlign: 'center'
                    }}>CONTENT</div>
                ), 100)
            }
            <div>
                <Link id="bottom" to="/#top" smoothScroll>Link to top</Link>
            </div>
        </div>
    ))
    .add('Link to external page', () => (
        <Link to="http://www.facebook.com">
            Go to facebook.com
        </Link>
    ))
