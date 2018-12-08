import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './Layout'

const navItems = [
    {
        id: 'home',
        href: '/#home',
        text: 'Home'
    },
    {
        id: 'about',
        href: '/#about',
        text: 'About'
    },
    {
        id: 'resume',
        href: '/#resume',
        text: 'Resume'
    },
    {
        id: 'portfolio',
        href: '/#portfolio',
        text: 'Portfolio'
    }
]
class LayoutContainer extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            currentNavItemId: null
        }
    }

    setCurrentNavItem(navItemId) {
        this.setState({ currentNavItemId: navItemId })
    }

    render() {
        const { children } = this.props
        const { currentNavItemId } = this.state
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
                        navItems={ navItems }
                        currentNavItemId={ currentNavItemId }

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
