import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered'
import SocialLinks from './SocialLinks'

storiesOf('Components|SocialLinks', module)
    .addDecorator(centered)
    .add('With no parameters', () => (
        <SocialLinks></SocialLinks>
    ))
