import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import HTMLReactParser from 'html-react-parser'
import { createGlobalLocalClassnames, stringToArray } from '../../scripts/utils'
import styles from './ShowcaseModal.scss'
import Tag from '../Tag'
import Link from '../Link'
import * as R from 'ramda'

const createLinkIcon = (href = '', linkType) => {
    let Icon = () => <span />

    if (linkType === 'link') {
        if (R.either(R.isNil, R.isEmpty)(href)) {
            Icon = require('../../assets/icons/broken-link.svg').ReactComponent
        } else {
            Icon = require('../../assets/icons/link.svg').ReactComponent
        }
    } else if (linkType === 'sourceCodeLink') {
        if (R.test(/codepen/, href)) {
            // Make button icon codepen
            Icon = require('../../assets/icons/codepen.svg').ReactComponent
        } else if (R.test(/github\.io/, href)) {
            // Make button icon github pages
            Icon = require('../../assets/icons/github-pages.svg').ReactComponent
        } else if (R.test(/github\.com/, href)) {
            // Make button icon github
            Icon = require('../../assets/icons/github.svg').ReactComponent
        } else if (R.test(/bitbucket/, href)) {
            // Make button icon github
            Icon = require('../../assets/icons/bitbucket.svg').ReactComponent
        } else if (R.test(/codesandbox/, href)) {
            // Make button icon codesandbox
            Icon = require('../../assets/icons/codesandbox.svg').ReactComponent
        } else if (R.test(/netlify/, href)) {
            // Make button netlify
            Icon = require('../../assets/icons/netlify.svg').ReactComponent
        }
    }

    return Icon
}

const ShowcaseLink = props => {
    const { to = '', linkType, text, className } = props

    if (R.test(/play\.google/, to)) {
        return (
            <Link to={ to } className="google-play-badge">
                <img
                    alt='Get it on Google Play'
                    src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
            </Link>
        )
    }

    let tooltip
    let disabled = false

    if (R.either(R.isNil, R.isEmpty)(to)) {
        // Make button disabled, (with tooltip 'coming soon' ?)
        tooltip = 'coming soon'
        disabled = true
    }

    const Icon = createLinkIcon(to, linkType)

    const linkProps = {
        to,
        disabled,
        title: tooltip,
        className: classnames(
            'button icon-right',
            className
        )
    }

    return (
        <Link { ...linkProps }>
            <span>{ text }</span>
            <Icon />
        </Link>
    )
}

const renderTag = (tag, i) => (
    <Tag key={ i }>{ tag }</Tag>
)

const renderAuthor = (author, i) => (
    <span key={ i } className="author">{ author }</span>
)

const ShowcaseModal = props => {
    const {
        content,
        additionalContent,
        titleId,
        descriptionId,
        className
    } = props

    const {
        image,
        title,
        type,
        subtitle,
        description,
        link,
        sourceCodeLink
    } = content

    const { author } = additionalContent

    const tagsArray = stringToArray(content.tags)
    const authorsArray = R.pipe(
        stringToArray,
        R.prepend(author)
    )(content.coAuthors)

    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'ShowcaseModal'),
            className
        )
    }

    const nullOrEmpty = R.either(R.isNil, R.isEmpty)
    const imageContainer = (
        <div
            className="image-container"
            style={ {
                backgroundImage: nullOrEmpty(image.src) ? 'none' : `url(${ image.src })`
            } }></div>
    )

    return (
        <div { ...containerProps }>
            { imageContainer }
            <div className="content-container">

                <h1 id={ titleId } className="title">{ title }</h1>
                <h2 className="subtitle">{ subtitle }</h2>
                <div className="authors-container">
                    <label>Authors: </label>
                    <div className="authors">
                        { authorsArray.map(renderAuthor)}
                    </div>
                </div>

                <p id={ descriptionId } className="description">
                    { HTMLReactParser(description) }
                </p>
                <div className="tags">
                    { tagsArray.map(renderTag) }
                </div>
            </div>
            <div className="links-container">
                {
                    // Only render source code link if sourceCodeLink exists
                    !nullOrEmpty(sourceCodeLink) ? (
                        <ShowcaseLink className="link-source button button-secondary" to={ sourceCodeLink } linkType="sourceCodeLink" text="open source" />
                    ) : null
                }
                <ShowcaseLink className="link-project button" to={ link } linkType="link" text="open" />
            </div>
        </div>
    )
}

const showcaseContentShape = PropTypes.shape({
    image: PropTypes.shape({
        label: PropTypes.string,
        src: PropTypes.string
    }).isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    coAuthors: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),
    link: PropTypes.string,
    sourceCodeLink: PropTypes.string
})

ShowcaseModal.propTypes = {
    content: showcaseContentShape,
    isOpen: PropTypes.bool,
    titleId: PropTypes.string.isRequired,
    descriptionId: PropTypes.string.isRequired
}

export default ShowcaseModal
