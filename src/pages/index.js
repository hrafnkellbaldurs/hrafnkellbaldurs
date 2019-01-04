import '../styles/pages/index/main.scss'
import React from 'react'
import { graphql } from 'gatsby'
import * as R from 'ramda'
import { LayoutContainer } from '../components/Layout'
import SEO from '../components/SEO'
import FitText from 'react-fittext'
import Link from '../components/Link'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Experience from '../components/Experience'
import { SkillGridContainer } from '../components/SkillGrid'
import { ShowcaseGridContainer } from '../components/ShowcaseGrid'
import HTMLReactParser from 'html-react-parser'
import Waypoint from 'react-waypoint'
import { SECTION_IDS } from '../constants'
import { actions } from '../store'
import { pluckEdgeNodes } from '../scripts/utils'
import { ReactComponent as DownloadIcon } from '../assets/icons/download.svg'

const WAYPOINT_PROPS = {
    topOffset: '40%',
    bottomOffset: '40%'
}

const onWaypointEnter = (waypoint, { id }) => {
    actions.setCurrentNavItemId(id)
}

const RenderHero = props => {
    const {
        sectionId,
        authorFullName,
        text,
        backgroundUrl
    } = props

    const heroProps = {
        backgroundUrl: null,
        className: 'page-hero'
    }

    const waypointProps = {
        ...WAYPOINT_PROPS,
        onEnter: waypoint => onWaypointEnter(waypoint, {
            id: sectionId
        })
    }

    return (
        <Hero { ...heroProps }>
            <Waypoint { ...waypointProps }>
                <div className="banner-text">
                    <FitText minFontSize={ 30 } maxFontSize={ 80 }>
                        {/* <h1>Hi, I'm { authorFullName }.</h1> */}
                        <h1>{ authorFullName }</h1>
                    </FitText>
                    <FitText minFontSize={ 14 } maxFontSize={ 18 } compressor={ 3 }>
                        <h3>{ text }</h3>
                    </FitText>
                </div>
            </Waypoint>
        </Hero>
    )
}

const AboutSection = props => {
    const {
        sectionId,
        title,
        description = '',
        urls = {},
        contactDetails = {},
        downloadResumeLabel,
        contactLabel
    } = props

    const {
        gravatar = '',
        portfolioPdf = {}
    } = urls

    const ContactIcon = require('../assets/icons/paper-plane.svg').ReactComponent

    const waypointProps = {
        ...WAYPOINT_PROPS,
        onEnter: waypoint => onWaypointEnter(waypoint, {
            id: sectionId
        })
    }

    const profilePicSrc = `${ gravatar }?size=250`

    return (
        <>
            <Section id={ sectionId }>
                <Waypoint { ...waypointProps }>
                    <div className="row section-content-container">

                        <div className="profile-pic-container three columns flex flex--center">

                            <img className="profile-pic" src={ profilePicSrc } alt="profile picture" />
                        </div>

                        <div className="nine columns main-col">

                            <h1 className="accent-underline">{ title }</h1>

                            <div>{ HTMLReactParser(description) }</div>

                            <div className="row">

                                <div className="columns contact-details">

                                    <h2>{ contactDetails.label }</h2>
                                    <p className="address">
                                        <span>{ contactDetails.name }</span><br />
                                        <span>{ contactDetails.address }</span><br />
                                        <span>{ contactDetails.zip } { contactDetails.city }, { contactDetails.country }</span><br />
                                        <span>{ contactDetails.phone }</span><br />
                                        <Link style={ { color: 'inherit' } } to={ `mailto:${ contactDetails.email }` } target="_top">
                                            { contactDetails.email }
                                        </Link>
                                    </p>

                                </div>
                            </div>
                            <div className="row">
                                <div className="columns action-links">
                                    <Link to={ `mailto:${ contactDetails.email }` } className="button button-secondary icon-right">
                                        <span className="text">{ contactLabel }</span>
                                        <ContactIcon />
                                    </Link>
                                    <Link to={ portfolioPdf.src } className="button icon-right" target="_blank" download={ portfolioPdf.label }>
                                        <span className="text">{ downloadResumeLabel }</span>
                                        <DownloadIcon />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </Waypoint>
            </Section>
        </>
    )
}

const PortfolioSection = props => {
    const {
        sectionId
    } = props

    const waypointProps = {
        ...WAYPOINT_PROPS,
        onEnter: waypoint => onWaypointEnter(waypoint, {
            id: sectionId
        })
    }

    return (
        <Section id={ sectionId }>
            <Waypoint { ...waypointProps }>
                <div className="row">
                    <div className="twelve columns section-content-container">
                        <h1 className="accent-underline">Portfolio</h1>
                        <ShowcaseGridContainer />
                    </div>
                </div>
            </Waypoint>
        </Section>
    )
}

const ResumeSection = props => {
    const {
        sectionId,
        workExperience: workExperienceItems,
        educationExperience: educationExperienceItems,
        portfolioPdf
    } = props

    const renderExperience = (item, i) => {
        const {
            id,
            dataId,
            title,
            subtitle,
            startDate,
            endDate,
            description,
            logo
        } = item
        const icon = <img src={ logo.publicURL }></img>

        const props = {
            id,
            dataId,
            icon,
            title,
            subtitle,
            startDate,
            endDate,
            description
        }

        return <Experience key={ id } { ...props } />
    }

    const waypointProps = {
        ...WAYPOINT_PROPS,
        onEnter: waypoint => onWaypointEnter(waypoint, {
            id: sectionId
        })
    }

    return (
        <Section id={ sectionId }>
            <Waypoint { ...waypointProps }>
                <div className="section-content-container">
                    <div className="row section-item">

                        <div className="three columns header-col">
                            <h1 className="accent-underline">
                                Experience
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            { workExperienceItems.map(renderExperience) }
                        </div>

                    </div>

                    <div className="row section-item">

                        <div className="three columns header-col">
                            <h1 className="accent-underline">
                                Education
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            { educationExperienceItems.map(renderExperience) }
                        </div>

                    </div>

                    <div className="row section-item">

                        <div className="three columns header-col">
                            <h1 className="accent-underline">
                                Skills
                            </h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="one columns"></div>
                                <div className="eleven columns">
                                    <p>
                                        I have experience with a broad field of front-end technologies and frameworks.
                                    </p>
                                </div>
                                <SkillGridContainer />
                            </div>
                        </div>
                    </div>

                    <Link to={ portfolioPdf.src } className="button icon-only download-button" download={ portfolioPdf.label }>
                        <DownloadIcon />
                    </Link>
                </div>
            </Waypoint>
        </Section>

    )
}

const mapData = R.mapObjIndexed(pluckEdgeNodes)
class IndexPage extends React.PureComponent {
    render() {
        const {
            aboutMe: aboutMeItems,
            workExperience,
            educationExperience
        } = mapData(this.props.data)

        const aboutMe = R.head(aboutMeItems)

        const heroProps = {
            sectionId: SECTION_IDS.HOME,
            authorFullName: aboutMe.contactDetails.name,
            text: aboutMe.shortDescription,
            backgroundUrl: require('../assets/images/hero-background.jpg')
        }

        const aboutSectionProps = {
            ...aboutMe,
            sectionId: SECTION_IDS.ABOUT
        }

        const resumeSectionProps = {
            sectionId: SECTION_IDS.RESUME,
            workExperience,
            educationExperience,
            portfolioPdf: aboutMe.urls.portfolioPdf
        }

        const portfolioSectionProps = {
            sectionId: SECTION_IDS.PORTFOLIO
        }

        return (
            <LayoutContainer>
                <SEO title="Home" keywords={['gatsby', 'application', 'react', 'portfolio']}/>
                <RenderHero { ...heroProps }/>
                <AboutSection {...aboutSectionProps} />
                <PortfolioSection { ...portfolioSectionProps }/>
                <ResumeSection { ...resumeSectionProps } />
            </LayoutContainer>
        )
    }
}

// Fragment is located in src/fragments/pages/index.js
export const query = graphql`
    query IndexPage {
        ...IndexPageFragment
    }
`

export default IndexPage
