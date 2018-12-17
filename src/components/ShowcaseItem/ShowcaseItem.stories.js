import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { host } from 'storybook-host'
import ShowcaseItem from './ShowcaseItem'
import { action } from '@storybook/addon-actions'

const withContent = () => {
    const props = {
        id: 'showcase-cat',
        title: text('Title', 'Sleek Fresh Cat'),
        subtitle: text('Subtitle', 'Incredible'),
        image: {
            src: text('Image src', 'https://loremflickr.com/200/200'),
            label: text('Image label', 'cats')
        },
        tags: text('Tags', 'odio;error;maxime'),
        onClick: action('showcase-onClick')
    }

    return (
        <ShowcaseItem { ...props }></ShowcaseItem>
    )
}

storiesOf('Components|ShowcaseItem', module)
    .add('With no parameters', () => {
        return (<ShowcaseItem />)
    })
    .add('With content', withContent)
    .addDecorator(
        host({
            title: 'ShowcaseItem contained within a debug container',
            hr: true,
            align: '',
            background: 'rgba(0,0,255, 0.2)',
            cropMarks: true,
            border: '1px solid red'
        })
    )
    .add('With content : host container', withContent)
