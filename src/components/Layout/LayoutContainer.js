import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './Layout'
import { ModalRoot } from '../Modal'
import InitStateWithGraphql from '../../store/InitStateWithGraphql'

class LayoutContainer extends React.PureComponent {
    render() {
        const { children } = this.props
        return (
            <>
                <InitStateWithGraphql />
                <StaticQuery
                    query={ graphql`
                        query LayoutQuery {
                            site {
                                siteMetadata {
                                    title
                                }
                            }
                        }
                    `}
                    render={ ({ site: { siteMetadata: { title } } }) => (
                        <>
                            <Layout siteTitle={ title }>
                                { children }
                            </Layout>
                            <ModalRoot />
                        </>
                    ) }
                />
            </>
        )
    }
}

LayoutContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutContainer
