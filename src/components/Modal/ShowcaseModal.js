import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import HTMLReactParser from 'html-react-parser'
import { createGlobalLocalClassnames, stringToArray } from '../../scripts/utils'
import styles from './ShowcaseModal.scss'
import Tag from '../Tag'

const renderTag = (tag, i) => (
    <Tag key={i}>{ tag }</Tag>
)

const ShowcaseModal = props => {
    const {
        content,
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

    const tagsArray = stringToArray(content.tags)
    const coAuthorsArray = stringToArray(content.coAuthors)

    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'ShowcaseModal'),
            className
        )
    }

    const imageContainer = (
        <div
            className="image-container"
            style={ {
                backgroundImage: `url(${ image.src })`
            } }></div>
    )

    return (
        <div { ...containerProps }>
            { imageContainer }
            <div className="content-container">
                <h1 id={ titleId } className="title">{ title }</h1>
                <h2 className="subtitle">{ subtitle }</h2>
                <p id={ descriptionId } className="description">
                    { HTMLReactParser(description) }
                </p>
                <div className="tags">
                    { tagsArray.map(renderTag) }
                </div>
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
    titleId: PropTypes.string.isRequired,
    descriptionId: PropTypes.string.isRequired
}

export default ShowcaseModal
