import React from 'react'
import styles from './ShowcaseGrid.module.scss'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import classnames from 'classnames'
import * as R from 'ramda'

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

class ShowcaseGrid extends React.PureComponent {
    render() {
        const {
            items
        } = this.props

        const containerProps = {
            className: classnames(
                globalLocalClassnames('ShowcaseGrid')
            )
        }

        return (
            <div { ...containerProps }>
                ShowcaseGrid
            </div>
        )
    }
}

export default ShowcaseGrid
