import React from 'react'
import PropTypes from 'prop-types'
import styles from './Experience.module.scss'

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

        return (
            <div className="row">
                <div className="one columns">
                    <div className={ styles.iconContainer }>
                        { icon }
                    </div>
                </div>
                <div className="eleven columns">
                    <h3>{ title }</h3>

                    <p className={ styles.info }>
                        { subtitle }
                        <span>&bull;&nbsp;</span>
                        <em className={ styles.date }>{ startDate } - { endDate || 'Today' }</em>
                    </p>
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
