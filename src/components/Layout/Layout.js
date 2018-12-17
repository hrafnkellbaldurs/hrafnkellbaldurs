import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
class Layout extends React.PureComponent {
    render() {
        const { siteTitle } = this.props

        return (
            <>
                <Header siteTitle={ siteTitle }/>
                { this.props.children }
                <Footer />
            </>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    siteTitle: PropTypes.string.isRequired
}

export default Layout
