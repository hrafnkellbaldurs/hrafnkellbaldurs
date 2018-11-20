import React from 'react'
import PropTypes from 'prop-types'

class Section extends React.PureComponent {
    render() {
        const {
            id,
            children
        } = this.props

        return (
            <section id={ id }>
                { children }
            </section>
        )
    }
}

Section.propTypes = {
    id: PropTypes.string.isRequired
}

export default Section
