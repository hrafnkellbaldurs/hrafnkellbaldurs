import React from 'react'
import { storiesOf } from '@storybook/react'
import Layout from './Layout'

storiesOf('Layout|Layout', module)
    .add('Basic', () => (
        <Layout siteMetaData={{
            title: 'SiteTitle',
            description: 'description',
            author: 'John The Great'
        }}>
            <h1>Child of layout</h1>
        </Layout>
    ))
