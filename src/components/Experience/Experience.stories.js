import React from 'react'
import { storiesOf } from '@storybook/react'
import Experience from './Experience'

storiesOf('Components|Experience', module)
    .addParameters({ jest: ['Experience'] })
    .add('Basic', () => (
        <Experience
            icon={<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>}
            title="Keeper of peace"
            subtitle="The World"
            startDate="Nov 2010"
            endDate="Jan 2015"
            description="Kept peace in the world"
        />
    ))
