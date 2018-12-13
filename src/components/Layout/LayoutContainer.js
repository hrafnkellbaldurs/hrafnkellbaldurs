import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './Layout'
import { ModalRoot } from '../Modal'

class LayoutContainer extends React.PureComponent {
    render() {
        const { children } = this.props
        return (
            <StaticQuery
                query={ graphql`
                    query SiteMetaQuery {
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
                    <>
                        <Layout siteMetadata={ data.site.siteMetadata }>
                            { children }
                        </Layout>
                        <ModalRoot />
                    </>
                ) }
            />
        )
    }
}

LayoutContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutContainer
