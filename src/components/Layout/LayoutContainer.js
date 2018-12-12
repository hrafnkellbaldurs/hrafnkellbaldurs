import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './Layout'
import { Provider } from '../../store'
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
                    <Provider>
                        <ModalRoot />
                        <Layout siteMetadata={ data.site.siteMetadata }>
                            { children }
                        </Layout>
                    </Provider>
                )}
            />
        )
    }
}

LayoutContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutContainer
