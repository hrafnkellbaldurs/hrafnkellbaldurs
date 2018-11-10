import React from 'react'
import Layout from '../components/OldLayout'
import { graphql, Link } from 'gatsby'
import Section from '../components/Section'
import * as R from 'ramda'

const Experience = props => {
    return (
        <div className="row item">
            <div className="one columns">
                <div style={{
                    fontSize: '40px',
                    width: '1em',
                    height: 'auto'
                }}>
                    { props.icon }
                </div>
            </div>
            <div className="eleven columns">
                <h3>{ props.title }</h3>

                <p className="info">
                    { props.subtitle }
                    <span>&bull;&nbsp;</span>
                    <em className="date">{ props.startDate } - { props.endDate }</em>
                </p>
                <p>{ props.description }</p>
            </div>
        </div>
    )
}

const jsonResultToData = (rootNode, filter) => {
    const edges = filter ? rootNode.edges.filter(filter) : rootNode.edges
    return edges.map(({ node }) => node)
}

const filterJsonResultNodeBy = (key, value) => x => x.node[key] === value

class IndexPage extends React.PureComponent {
    render() {
        const {
            renderAboutSection: AboutSection,
            renderResumeSection: ResumeSection
        } = this

        const {
            allAboutMeJson,
            allExperienceJson
        } = this.props.data

        const aboutProps = {
            ...jsonResultToData(allAboutMeJson, filterJsonResultNodeBy('dataId', 'aboutMe'))[0]
        }

        const resumeProps = {
            workExperienceItems: jsonResultToData(allExperienceJson, filterJsonResultNodeBy('type', 'work')),
            educationExperienceItems: jsonResultToData(allExperienceJson, filterJsonResultNodeBy('type', 'education'))
        }

        R.pipe(
            console.log
        )('hello from ramda')

        return (
            <Layout>
                <AboutSection { ...aboutProps }></AboutSection>
                <ResumeSection { ...resumeProps }></ResumeSection>
            </Layout>
        )
    }

    renderAboutSection(props) {
        const {
            title,
            description,
            urls,
            contactDetails,
            downloadResumeLabel
        } = props

        const profilePicUrl = require('../' + urls.profilePic)
        const portfolioDocUrl = require('../' + urls.portfolioPdf)
        const DownloadIcon = require('../assets/images/download.svg').ReactComponent

        return (
            <Section id="about">
                <div className="row">

                    <div className="three columns">

                        <img className="profile-pic" src={ profilePicUrl } alt="" />
                    </div>

                    <div className="nine columns main-col">

                        <h2>{ title }</h2>

                        <p dangerouslySetInnerHTML={{ __html: description }}></p>

                        <div className="row">

                            <div className="columns contact-details">

                                <h2>{ contactDetails.label }</h2>
                                <p className="address">
                                    <span>{ contactDetails.name }</span><br/>
                                    <span>{ contactDetails.address }</span><br/>
                                    <span>{ contactDetails.zip } { contactDetails.city }, { contactDetails.country }</span><br/>
                                    <span>{ contactDetails.phone }</span><br/>
                                    <a style={{ color: 'inherit' }} href={`mailto:${ contactDetails.email }`} target="_top">
                                        { contactDetails.email }
                                    </a>
                                </p>

                            </div>

                            <div className="columns download">
                                <a href={ portfolioDocUrl } className="button">
                                    <span style={{ display: 'flex', alignItems: 'center', 'justifyContent': 'center' }}>
                                        <DownloadIcon style={{ fontSize: '22px', marginRight: '5px', marginTop: '-5px' }}/>
                                        { downloadResumeLabel }
                                    </span>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </Section>
        )
    }

    renderResumeSection(props) {
        const {
            workExperienceItems,
            educationExperienceItems
        } = props

        const renderExperience = (item, i) => {
            const {
                id,
                dataId,
                title,
                subtitle,
                startDate,
                endDate,
                description
            } = item
            let icon = require('../' + item.iconSrc)

            if (item.iconSrc.includes('.svg')) {
                icon = icon.ReactComponent()
            } else {
                icon = <img src={icon} />
            }

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

            return <Experience key={ id } { ...props }/>
        }

        return (
            <Section id="resume">

                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">

                        <p>
                            I have experience with a broad field of front-end technologies and frameworks.
                        </p>
                    </div>

                </div>

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Experience</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        { workExperienceItems.map(renderExperience) }
                    </div>

                </div>

                <div className="row education">

                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        { educationExperienceItems.map(renderExperience) }
                    </div>

                </div>

            </Section>
        )
    }
}

export const query = graphql`
    query IndexPage {
        allAboutMeJson {
            edges {
                node {
                    id,
                    dataId,
                    title,
                    description,
                    urls {
                        profilePic,
                        portfolioPdf
                    },
                    contactDetails {
                        label,
                        name,
                        address,
                        zip,
                        city,
                        country,
                        phone,
                        email
                    },
                    downloadResumeLabel
                }
            }
        },
        allExperienceJson {
            edges {
                node {
                    id,
                    dataId,
                    type,
                    iconSrc,
                    title,
                    subtitle,
                    startDate,
                    endDate,
                    description
                }
            }
        }
    }
`

export default IndexPage
