import React from 'react'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import styles from './SkillModal.scss'

const SkillModal = props => {
    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'SkillModal')
        )
    }

    return (
        <div { ...containerProps }>
            <h1>Hello from SkillModal</h1>
            <pre>{ JSON.stringify(props, null, 2) }</pre>
        </div>
    )
}

export default SkillModal
