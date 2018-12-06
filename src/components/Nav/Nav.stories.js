import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, object, number } from '@storybook/addon-knobs'
import Nav from './Nav'
import * as R from 'ramda'

storiesOf('Layout|Nav', module)
    .add('With no parameters', () => (
        <Nav />
    ))
    .add('With items passed in', () => {
        const itemsGroupId = 'items'
        const item = object('Each item', {
            text: 'Item',
            href: '#'
        }, itemsGroupId)
        const numberOfItems = number('Number of items', 5, {}, itemsGroupId)
        const items = R.times(i => {
            return R.mergeRight(item, {
                text: `${ item.text } ${ i + 1 }`
            })
        }, numberOfItems)

        const menuOptionsGroupId = 'menu options'
        const direction = select('direction', ['right', 'left'], 'right', menuOptionsGroupId)
        const menuOptions = {
            width: text('width', '60%', menuOptionsGroupId),
            [direction]: true
        }

        return (
            <Nav
                items={ items }
                menuOptions={ menuOptions }
            />
        )
    })
