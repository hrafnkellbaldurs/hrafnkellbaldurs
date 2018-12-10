import React from 'react'
import PropTypes from 'prop-types'
import styles from './ShowcaseItem.module.scss'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import classnames from 'classnames'
import * as R from 'ramda'
import Link from '../Link'

const globalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

/**
 * Showcase item
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
            title,
            subtitle,
            onClick
        } = this.props

        const image = R.defaultTo({}, this.props.image)
        const tags = R.pipe(
            R.defaultTo(''),
            R.split(','),
            R.map(R.trim)
        )(this.props.tags)

        const containerProps = {
            className: classnames(
                globalLocalClassnames('ShowcaseItem'),
                {
                    [styles.noImage]: R.either(R.isNil, R.isEmpty)(image.src)
                }
            )
        }

        const imageContainer = (
            <div
                className={ styles.imageContainer }
                style={ {
                    backgroundImage: `url(${ image.src })`
                } }></div>
        )

        const renderTag = (tag, i) => (
            <span key={ i } className={ styles.tag }>{ tag }</span>
        )

        return (
            <div { ...containerProps } onClick={ () => onClick(id) }>
                { imageContainer }
                <div className={ styles.infoContainer }>
                    <h5 className={ styles.title }>{ title }</h5>
                    <h6 className={ styles.subtitle }>{ subtitle }</h6>
                    <div className={ styles.tags }>
                        { tags.map(renderTag) }
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowcaseItem
