import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import scrollIntoView from 'smooth-scroll-into-view-if-needed'

const onInternalClick = ({ smoothScroll }, e) => {
    if (smoothScroll) {
        e.preventDefault()
        const target = e.currentTarget.hash.split('#')[1]
        const targetNode = document.getElementById(target)
        if (targetNode) {
            scrollIntoView(targetNode, {
                scrollMode: 'always',
                block: 'start',
                inline: 'start',
                behaviour: 'smooth',
            }).then(() => {
                window.location.hash = target
            })
        }
    }
}

const Link = props => {
    // Since DOM elements <a> cannot receive activeClassName,
    // destructure the prop here and pass it only to GatsbyLink
    const {
        activeClassName,
        children,
        to,
        smoothScroll = false,
        ...other
    } = props

    // Assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to)

    // Tests if path ends with a dot file extension
    const file = /\.[0-9a-z]+$/i.test(to)

    // Use Gatsby Link for internal links, and <a> for others
    if (internal && !file) {
        const onClick = (...args) => onInternalClick({ smoothScroll }, ...args)

        return (
            <GatsbyLink to={ to } activeClassName={ activeClassName } onClick={ onClick } { ...other }>
                { children }
            </GatsbyLink>
        )
    }

    return (
        <a href={ to } { ...other }>
            { children }
        </a>
    )
}

export default Link
