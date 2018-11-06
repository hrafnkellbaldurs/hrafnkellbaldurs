import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import OldHeader from '../OldHeader'

class OldLayout extends React.PureComponent {
  render() {
    return (
      <StaticQuery
        query={ graphql`
                query SiteTitleQueryOld {
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
            <Helmet
              title={ data.site.siteMetadata.title }
              meta={ [
                { name: 'description', content: data.site.siteMetadata.description },
                { name: 'author', content: data.site.siteMetadata.author },
                { name: 'keywords', content: 'sample, something' },
              ] }
            >
              <html lang="en" />
            </Helmet>
            <OldHeader siteTitle={ data.site.siteMetadata.title } />
            {/* <div
              style={ {
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              } }
            >
              { this.props.children }
            </div> */}
          </>
        ) }
      />
    )
  }
};

OldLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default OldLayout
