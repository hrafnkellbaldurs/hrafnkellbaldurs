import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import SkillGrid from './SkillGrid'
import * as R from 'ramda'

storiesOf('SkillGrid', module)
    .add('With 20 items', () => {
        const numberOfSkills = number('Number of skills', 20)

        const skills = R.times(i => {
            return {
                id: i,
                rating: i,
                name: `Skill ${ i }`,
                logo: { publicURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }
            }
        }, numberOfSkills)

        return <SkillGrid skills={ skills }></SkillGrid>
    })
