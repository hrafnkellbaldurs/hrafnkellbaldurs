import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './Layout'
import { SECTION_IDS } from '../../constants'
import { createHashHref } from '../../scripts/utils'

const navItems = [
    {
        id: SECTION_IDS.HOME,
        href: createHashHref(SECTION_IDS.HOME),
        text: 'Home'
    },
    {
        id: SECTION_IDS.ABOUT,
        href: createHashHref(SECTION_IDS.ABOUT),
        text: 'About'
    },
    {
        id: SECTION_IDS.RESUME,
        href: createHashHref(SECTION_IDS.RESUME),
        text: 'Resume'
    },
    {
        id: SECTION_IDS.PORTFOLIO,
        href: createHashHref(SECTION_IDS.PORTFOLIO),
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
