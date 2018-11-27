import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import SocialLinks from './SocialLinks'

storiesOf('SocialLinks', module)
    .addDecorator(centered)
    .add('with no params', () => (
        <SocialLinks></SocialLinks>
    ))
