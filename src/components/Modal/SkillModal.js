import React from 'react'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import styles from './SkillModal.scss'

const SkillModal = props => {
    const {
        content,
        titleId,
        descriptionId
    } = props

    const containerProps = {
        className: classnames(
            createGlobalLocalClassnames(styles, 'SkillModal')
        )
    }

    return (
        <div { ...containerProps }>
            <h1 id={ titleId }>Hello from SkillModal</h1>
            <h2>Content</h2>
            {/* <pre id={ descriptionId }>{ JSON.stringify(content, null, 2) }</pre> */}
        </div>
    )
}

export default SkillModal
