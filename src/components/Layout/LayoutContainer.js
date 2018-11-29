import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './Layout'

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

LayoutContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutContainer
