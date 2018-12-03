import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import scrollIntoView from 'smooth-scroll-into-view-if-needed'

class Link extends React.PureComponent {
    constructor(props) {
        super(props)

        this.internalLinkRef = React.createRef()
    }

    onInternalClick = ({ smoothScroll }, e) => {
        if (smoothScroll) {
            e.preventDefault()
            const target = e.target.hash.split('#')[1]
            const targetNode = document.getElementById(target)
            if (targetNode) {
                scrollIntoView(targetNode, {
                    scrollMode: 'always',
                    block: 'nearest',
                    behaviour: 'smooth',
                }).then(() => {
                    window.location.hash = target
                })
            }
        }
    }

    render() {
        // Since DOM elements <a> cannot receive activeClassName,
        // destructure the prop here and pass it only to GatsbyLink
        const {
            activeClassName,
            children,
            to,
            smoothScroll = false,
            ...other
        } = this.props

        // Assumes that any internal link (intended for Gatsby)
        // will start with exactly one slash, and that anything else is external.
        const internal = /^\/(?!\/)/.test(to)

        // Use Gatsby Link for internal links, and <a> for others
        if (internal) {
            const onClick = (...args) => this.onInternalClick({ smoothScroll }, ...args)

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
}

export default Link
