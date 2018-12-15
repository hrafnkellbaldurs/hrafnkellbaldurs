import React from 'react'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import styles from './ShowcaseModal.scss'

const ShowcaseModal = props => {
    const {
        content,
        titleId,
        descriptionId
    } = props

    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'ShowcaseModal')
        )
    }

    return (
        <div { ...containerProps }>
            <h1 id={ titleId }>Hello from ShowcaseModal</h1>
            <h2>Content</h2>
            {/* <pre id={ descriptionId }>{ JSON.stringify(content, null, 2) }</pre> */}
        </div>
    )
}

export default ShowcaseModal
