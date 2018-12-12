import '../styles/pages/index/main.scss'
import React from 'react'
import { graphql } from 'gatsby'
import * as R from 'ramda'
import { LayoutContainer } from '../components/Layout'
import FitText from 'react-fittext'
import Link from '../components/Link'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Experience from '../components/Experience'
import SkillGrid from '../components/SkillGrid'
import HTMLReactParser from 'html-react-parser'
import Waypoint from 'react-waypoint'
import ShowcaseGrid from '../components/ShowcaseGrid'
import { SECTION_IDS } from '../constants'

const mapData = R.mapObjIndexed(R.pipe(
    R.prop('edges'),
    R.pluck('node')
))

const WAYPOINT_PROPS = {
    topOffset: '40%',
    bottomOffset: '40%'
}

class IndexPage extends React.PureComponent {
    constructor(props) {
        super(props)

        this.layoutContainerRef = React.createRef()
    }

    render() {
        const {
            props,
            renderHero: RenderHero,
            renderAboutSection: RenderAboutSection,
            renderResumeSection: RenderResumeSection,
            renderPortfolioSection: RenderPortfolioSection
        } = this

        const {
            aboutMe: aboutMeData,
            workExperience: workExperienceItems,
            educationExperience: educationExperienceItems,
            skills,
            showcases
        } = mapData(props.data)

        const aboutMe = aboutMeData[0]

        const heroProps = {
            sectionId: SECTION_IDS.HOME,
            authorFullName: aboutMe.contactDetails.name,
            text: aboutMe.shortDescription,
            backgroundUrl: require('../assets/images/hero-background.jpg')
        }

        const aboutProps = {
            ...aboutMe,
            sectionId: SECTION_IDS.ABOUT,
        }

        const resumeProps = {
            sectionId: SECTION_IDS.RESUME,
            workExperienceItems,
            educationExperienceItems,
            skills
        }

        const portfolioProps = {
            sectionId: SECTION_IDS.PORTFOLIO,
            showcases
        }

        return (
            <LayoutContainer ref={ this.layoutContainerRef }>
                <RenderHero { ...heroProps } />
                <RenderAboutSection { ...aboutProps } />
                <RenderResumeSection { ...resumeProps } />
                <RenderPortfolioSection { ...portfolioProps } />
            </LayoutContainer>
        )
    }

    onWaypointEnter = (waypoint, section) => {
        const {
            currentPosition,
            previousPosition,
            event,
            waypointTop,
            viewportTop,
            viewportBottom
        } = waypoint

        const layoutContainerRef = this.layoutContainerRef.current
        if (layoutContainerRef) {
            layoutContainerRef.setCurrentNavItem(section.id)
        }
    }

    renderHero = props => {
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
            onEnter: waypoint => this.onWaypointEnter(waypoint, {
                id: sectionId
            })
        }

        return (
            <Hero { ...heroProps }>
                <Waypoint { ...waypointProps }>
                    <div className="banner-text">
                        <FitText minFontSize={ 30 } maxFontSize={ 80 }>
                            <h1>Hi, I'm { authorFullName }.</h1>
                        </FitText>
                        <FitText minFontSize={ 14 } maxFontSize={ 18 } compressor={ 3 }>
                            <h3>{ text }</h3>
                        </FitText>
                    </div>
                </Waypoint>
            </Hero>
        )
    }

    renderAboutSection = props => {
        const {
            sectionId,
            title,
            description,
            urls,
            contactDetails,
            downloadResumeLabel,
            contactLabel
        } = props

        const waypointProps = {
            ...WAYPOINT_PROPS,
            onEnter: waypoint => this.onWaypointEnter(waypoint, {
                id: sectionId
            })
        }

        const ContactIcon = require('../assets/icons/paper-plane.svg').ReactComponent
        const DownloadIcon = require('../assets/icons/download.svg').ReactComponent

        return (
            <>
                <Section id={ sectionId }>
                    <Waypoint { ...waypointProps }>
                        <div className="row">

                            <div className="three columns">

                                <img className="profile-pic" src={ urls.profilePic.public } alt="profile picture" />
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
                                            <ContactIcon/>
                                        </Link>
                                        <Link to={ urls.portfolioPdf.public } className="button icon-right" target="_blank">
                                            <span className="text">{ downloadResumeLabel }</span>
                                            <DownloadIcon/>
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

    renderResumeSection = props => {
        const {
            sectionId,
            workExperienceItems,
            educationExperienceItems,
            skills
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
            onEnter: waypoint => this.onWaypointEnter(waypoint, {
                id: sectionId
            })
        }

        return (
            <Section id={ sectionId }>
                <Waypoint { ...waypointProps }>
                    <div>
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
                                    <SkillGrid skills={ skills }></SkillGrid>
                                </div>
                            </div>
                        </div>
                    </div>
                </Waypoint>
            </Section>

        )
    }

    renderPortfolioSection = props => {
        const {
            sectionId,
            showcases = []
        } = props

        const waypointProps = {
            ...WAYPOINT_PROPS,
            onEnter: waypoint => this.onWaypointEnter(waypoint, {
                id: sectionId
            })
        }

        const mapShowcase = showcase => {
            return {
                ...showcase,
                image: {
                    src: R.path(['image', 'publicURL'], showcase),
                    label: showcase.title
                },
                onClick: id => console.log('showcase', id)
            }
        }

        return (
            <Section id={ sectionId }>
                <Waypoint { ...waypointProps }>
                    <div className="row">
                        <div className="twelve columns content-container">
                            <h1 className="accent-underline">Portfolio</h1>
                            <ShowcaseGrid showcases={ showcases.map(mapShowcase) } />
                        </div>
                    </div>
                </Waypoint>
            </Section>
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
