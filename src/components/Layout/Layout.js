import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../Header'
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
                <>
                    { children }
                </>
            </>
        )
    }
}

class LayoutContainer extends React.PureComponent {
    render() {
        const { children } = this.props
        return (
            <StaticQuery
                query={ graphql`
                    query SiteTitleQuery {
                        site {
                            siteMetadata {
                                title
                                description
                                author
                            }
                        }
                    }
                `}
                render={ data => (
                    <Layout
                        siteMetadata={ data.site.siteMetadata }
                        children={ children }
                    />
                )}
            />
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

LayoutContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

// export default Layout

export {
    Layout,
    LayoutContainer as default
}
