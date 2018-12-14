import React from 'react'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import styles from './ShowcaseModal.scss'

const ShowcaseModal = props => {
    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'ShowcaseModal')
        )
    }

    return (
        <div { ...containerProps }>
            <h1>Hello from ShowcaseModal</h1>
            <pre>{ JSON.stringify(props, null, 2) }</pre>
        </div>
    )
}

export default ShowcaseModal
