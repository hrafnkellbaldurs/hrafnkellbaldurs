import React from 'react'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { host } from 'storybook-host'
import { action } from '@storybook/addon-actions'
import ShowcaseGrid from './ShowcaseGrid'
import * as R from 'ramda'

const stories = storiesOf('Components|ShowcaseGrid', module)

const with20Items = () => {
    const numberOfShowcases = number('Number of skills', 20)

    const showcases = R.times(i => {
        return {
            id: 'showcase-cat',
            title: `Showcase ${ i }`,
            subtitle: 'subtitle',
            image: {
                src: 'https://loremflickr.com/200/200',
                label: 'imagelabel'
            },
            tags: 'tag1;tag2;tag3',
            onClick: action('showcase-onClick')
        }
    }, numberOfShowcases)

    return (
        <ShowcaseGrid showcases={ showcases }></ShowcaseGrid>
    )
}

stories.add('With no parameters', () => (<ShowcaseGrid />))
stories.add('With 20 items', with20Items)

stories
    .addDecorator(
        host({
            title: 'ShowcaseGrid contained within a debug container',
            hr: true,
            width: '100%',
            align: '',
            background: 'rgba(0,0,255, 0.2)',
            cropMarks: true,
            border: '1px solid red'
        })
    )
    .add('With 20 items : host container', with20Items)
