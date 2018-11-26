import React from 'react'
import { storiesOf } from '@storybook/react'
import SocialLinks from './SocialLinks'

storiesOf('SocialLinks', module)
    .add('with no params', () => (
        <SocialLinks></SocialLinks>
    ))
