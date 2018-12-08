import React from 'react'
import { storiesOf } from '@storybook/react'
import Section from './Section'

storiesOf('Layout|Section', module)
    .add('With no parameters', () => (
        <Section></Section>
    ))
    .add('With children', () => (
        <Section id="mysection">
            <h1>My section children</h1>
            <p>This is a child of Section</p>
        </Section>
    ))
