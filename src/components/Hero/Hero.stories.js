import React from 'react'
import { storiesOf } from '@storybook/react'
import Hero from './Hero'

storiesOf('Layout|Hero', module)
    .add('Basic', () => (
        <Hero/>
    ))
    .add('With children', () => (
        <Hero>
            <h1>Hero child</h1>
        </Hero>
    ))
    .add('With background and child', () => (
        <Hero backgroundUrl={ require('../../assets/images/hero-background.jpg') }>
            <h1>Hero child</h1>
        </Hero>
    ))
