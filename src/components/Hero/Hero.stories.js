import React from 'react'
import { storiesOf } from '@storybook/react'
import Hero from './Hero'
import * as R from 'ramda'
import { number } from '@storybook/addon-knobs'

storiesOf('Layout|Hero', module)
    .addParameters({ jest: ['Hero'] })
    .add('With no parameters', () => (
        <Hero />
    ))
    .add('With children', () => (
        <Hero>
            <h1>Hero child</h1>
        </Hero>
    ))
    .add('With siblings', () => {
        const numberOfSiblings = number('Number of siblings', 1)
        const siblings = R.times(i => {
            return (
                <div
                    style={ {
                        height: '100px',
                        backgroundColor: i % 2 === 0 ? 'blue' : 'cyan',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    } }
                >Sibling { i + 1 }</div>
            )
        }, numberOfSiblings)

        return (
            <div>
                { siblings }
                <Hero>
                    <h1>Hero child</h1>
                </Hero>
            </div>
        )
    })
    .add('With background and child', () => (
        <Hero backgroundUrl={ require('../../assets/images/hero-background.jpg') }>
            <h1>Hero child</h1>
        </Hero>
    ))
