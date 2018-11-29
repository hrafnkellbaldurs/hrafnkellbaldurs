import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../Header'
import Footer from '../Footer'
class Layout extends React.PureComponent {
    render() {
        const {
            siteMetadata = {},
            children
        } = this.props

        return (
            <>
                <Helmet
                    title={ siteMetadata.title }
                    meta={ [
                        { name: 'description', content: siteMetadata.description },
                        { name: 'author', content: siteMetadata.author },
                        { name: 'keywords', content: 'sample, something' },
                    ] }
                >
                    <html lang="en" />
                </Helmet>
                <Header />
                    { children }
                <Footer />
            </>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    siteMetadata: PropTypes.object.isRequired
}

export default Layout
