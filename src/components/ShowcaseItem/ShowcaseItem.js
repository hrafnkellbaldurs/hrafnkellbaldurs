import React from 'react'
import PropTypes from 'prop-types'
import styles from './ShowcaseItem.module.scss'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import classnames from 'classnames'
import * as R from 'ramda'
import Link from '../Link'

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

/**
 * Showcase
 */
class ShowcaseItem extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string,
        image: PropTypes.shape({
            label: PropTypes.string,
            src: PropTypes.string
        }),
        title: PropTypes.string,
        subtitle: PropTypes.string,
        tags: PropTypes.string,
        onClick: PropTypes.func
    }

    render() {
        const {
            id,
            image = {},
            title,
            subtitle,
            tags,
            onClick
        } = this.props

        const containerProps = {
            className: classnames(
                globalLocalClassnames('ShowcaseItem')
            )
        }

        const imageContainer = (
            <div
                className={ styles.imageContainer }
                style={ {
                    backgroundImage: `url(${ image.src })`
                } }></div>
        )

        return (
            <div { ...containerProps } onClick={ () => onClick(id) }>
                { imageContainer }
                <div className={ styles.overlay }>
                    <div className={ styles.info }>
                        <h5 className={ styles.title }>{ title }</h5>
                        <h6 className={ styles.subtitle }>{ subtitle}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowcaseItem
