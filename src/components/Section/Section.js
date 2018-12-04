import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Section extends React.PureComponent {
    render() {
        const {
            id,
            className,
            children,
            ...rest
        } = this.props

        const sectionClassnames = classnames(
            'Section',
            className
        )

        return (
            <section id={ id } className={ sectionClassnames } { ...rest }>
                { children }
            </section>
        )
    }
}

Section.propTypes = {
    id: PropTypes.string.isRequired
}

export default Section
