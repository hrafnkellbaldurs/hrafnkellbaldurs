import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import styles from './ShowcaseModal.scss'

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
        tags,
        coAuthors,
        link,
        sourceCodeLink
    } = content

    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'ShowcaseModal'),
            className
        )
    }

    return (
        <div { ...containerProps }>

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
