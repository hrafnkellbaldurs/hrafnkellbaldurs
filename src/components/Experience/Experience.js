import React from 'react'
import PropTypes from 'prop-types'
import styles from './Experience.module.scss'
import classnames from 'classnames'

class Experience extends React.PureComponent {
    render() {
        const {
            icon,
            title,
            subtitle,
            startDate,
            endDate,
            description
        } = this.props

        const titleContainerProps = {
            className: classnames('twelve', 'columns', styles.titleContainer)
        }
        const detailsContainerProps = {
            className: classnames('twelve', 'columns', styles.detailsContainer)
        }

        return (
            <div className="row">
                <div { ...titleContainerProps }>
                    <div className={ styles.iconContainer }>{ icon }</div>
                    <h3 className={ styles.title }>{ title }</h3>
                </div>
                <div { ...detailsContainerProps }>
                    <div className={ styles.info }>
                        <span className={ styles.subtitle }>{ subtitle }</span>
                        <span className={ styles.dateContainer }>
                            <span className={ styles.date }>{ startDate } - { endDate || 'Present' }</span>
                            <span className={ styles.bullet }></span>
                            <span className={ styles.date}>2 yrs 7 mos</span>
                        </span>
                    </div>
                    {
                        description ? <p>{ description }</p> : null
                    }
                </div>
            </div>
        )
    }
}

Experience.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

export default Experience
