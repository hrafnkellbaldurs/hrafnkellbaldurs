import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tag.scss'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import * as R from 'ramda'

const sizeClassnames = {
    small: 'size-small',
    medium: 'size-medium'
}

const Tag = props => {
    const size = R.defaultTo('medium', props.size)

    const className = classnames(
        createGlobalLocalClassnames(styles, 'Tag'),
        sizeClassnames[size]
    )

    return (
        <span className={ className }>
            { props.children }
        </span>
    )
}

Tag.propTypes = {
    children: PropTypes.string
}

export default Tag
