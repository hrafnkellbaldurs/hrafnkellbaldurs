import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'
import SkillBadge from './SkillBadge'

const stories = storiesOf('Components/SkillBadge', module)

stories.add('Basic', () => (
    <SkillBadge
        id="0"
        rating={ 0 }
        name={text('Name', 'React')}
        logo={object('Logo', { publicURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' })}
    />
))
