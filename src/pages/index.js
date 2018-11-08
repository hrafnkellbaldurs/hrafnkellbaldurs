import React from 'react'
import Layout from '../components/OldLayout'
import { graphql } from 'gatsby'

class IndexPage extends React.PureComponent {
    render() {
        const {
            aboutMe,
            experienceItems
        } = this.props.data

        const aboutProps = {
            ...aboutMe.edges.find(x => x.node.dataId === 'aboutMe').node
        }

        const resumeProps = {
            workExperienceItems: experienceItems.edges
                .filter(x => x.node.type === 'work')
                .map(({ node }) => node),
            educationExperienceItems: experienceItems.edges
                .filter(x => x.node.type === 'education')
                .map(({ node }) => node)
        }

        const {
            renderAboutSection: AboutSection,
            renderResumeSection: ResumeSection
        } = this

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
            <section id="about">
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
            </section>
        )
    }

    renderResumeSection(props) {
        const {
            workExperienceItems,
            educationExperienceItems
        } = props

        const renderExperience = (item, i) => {
            let icon = require('../' + item.iconSrc)

            if (item.iconSrc.includes('.svg')) {
                icon = icon.ReactComponent()
            } else {
                icon = <img src={icon} />
            }

            return (
                <div className="row item" key={ i }>
                    <div className="one columns">
                        <div style={{
                            fontSize: '40px',
                            width: '1em',
                            height: 'auto'
                        }}>
                            { icon }
                        </div>
                    </div>
                    <div className="eleven columns">
                        <h3>{ item.title }</h3>

                        <p className="info">
                            { item.subtitle }
                            <span>&bull;&nbsp;</span>
                            <em className="date">{ item.startDate } - { item.endDate }</em>
                        </p>
                        <p>{ item.description }</p>
                    </div>
                </div>
            )
        }

        return (
            <section id="resume">

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

            </section>
        )
    }
}

export const query = graphql`
    query IndexPage {
        aboutMe: allAboutMeJson {
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
        experienceItems: allExperienceJson {
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
