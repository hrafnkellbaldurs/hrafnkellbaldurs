import React from 'react'
import Layout from '../components/OldLayout'

class IndexPage extends React.PureComponent {
    render() {
        const {
            renderAboutSection: AboutSection,
            renderResumeSection: ResumeSection
        } = this

        return (
            <Layout>
                <AboutSection></AboutSection>
                <ResumeSection></ResumeSection>
            </Layout>
        )
    }

    renderAboutSection() {
        const profilePicUrl = require('../assets/images/hrafnkell2.png')
        const portfolioDocUrl = require('../assets/ferilskra-english.pdf')

        return (
            <section id="about">
                <div className="row">

                    <div className="three columns">

                        <img className="profile-pic" src={ profilePicUrl } alt="" />
                    </div>

                    <div className="nine columns main-col">

                        <h2>About Me</h2>

                        <p>
                            I'm a front-end developer with a BSc degree in computer science.
                            <br/><br/>
                            Whether it's creating interactive experiences out of UI designs,
                            accelerating development with transpiling and build tools or discussing the latest front-end framework/library,
                            it's curiosity that wakes me up in the morning (coffee also helps) and gets me excited for work.
                            <br/><br/>
                            After completing my BSc in CS, I started my career as a front-end developer at InfoMentor
                            and I've been working ever since. The combination of graphic design education in high school,
                            the odd graphic design project (using Photoshop and Illustrator) and computer science in university
                            has been very useful in my day to day job. Especially when working with designers.
                            <br/><br/>
                            Even though I mainly work on the front-end,
                            I have a great interest in most things related to software development and computer science. Keeping up to date on the latest technologies is something I love to do in my free time.
                        </p>

                        <div className="row">

                            <div className="columns contact-details">

                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Hrafnkell Baldursson</span><br/>
                                    <span>Bláhamrar<br/>
                                        112 Reykjavik, Iceland
                                    </span><br/>
                                    <span>(354) 861-6532</span><br/>
                                    <span>hrafnkell.baldursson@gmail.com</span>
                                </p>

                            </div>

                            <div className="columns download">
                                <p>
                                    <a href={ portfolioDocUrl } className="button">
                                        {/* TODO: Add download Svg */}
                                        Download Resume
                                    </a>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        )
    }

    renderResumeSection() {
        const renderExperience = (item, i) => {
            return (
                <div className="row item" key={ i }>
                    <div className="one columns">
                        <div style={{
                            fontSize: '40px',
                            width: '1em',
                            height: 'auto'
                        }}>
                            { item.icon }
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

        const educationExperiences = [
            {
                icon: require('../assets/images/ru.svg').ReactComponent(),
                title: 'Reykjavik University',
                subtitle: 'Bachelor\'s Degree in Computer Science',
                startDate: 'August 2013',
                endDate: 'June 2016',
                description: 'Software development with a focus on web development.'
            }
        ]

        const workExperiences = [
            {
                icon: <img src={require('../assets/images/infomentor.png')}/>,
                title: 'InfoMentor',
                subtitle: 'Front-end Developer',
                startDate: 'May 2016',
                endDate: 'Nov 2018',
                description: `Responsible for the development and maintenance of front-end solutions,
                        as well as working closely with managers, stakeholders, designers and other developers through Scrum.
                        I used Knockout.js, React.js, Node.js, SCSS, ASP.NET MVC and other tools to build stable and reliable solutions.`
            },
            {
                icon: require('../assets/images/ru.svg').ReactComponent(),
                title: 'Reykjavik University',
                subtitle: 'Internship',
                startDate: 'November 2015',
                endDate: 'December 2015',
                description: `A class I finished at RU called "RU-Internship" where students contributed
                        to a new version of the university's intranet, called Centris. I contributed Web API
                        and front-end design and implementation of the online exams in Centris`
            }
        ]

        return (
            <section id="resume">

                <div className="row work">

                    <div className="three columns header-col">
                        <h1><span>Experience</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        { workExperiences.map(renderExperience) }
                    </div>

                </div>

                <div className="row education">

                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        { educationExperiences.map(renderExperience) }
                    </div>

                </div>

                <div className="row skill">

                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col">

                        <p>
                            I have experience with a broad field of front-end technologies and frameworks.
                        </p>

                        {/* TODO: Remove bars and css */}
                        {/* <div className="bars">

                            <div className="skills-title">
                                <h3 ><span>Programming Languages</span></h3>
                            </div>

                            <ul className="skills">

                                <li><span className="bar-expand javascript"></span><em>JavaScript</em></li>
                                <li><span className="bar-expand html5"></span><em>HTML5</em></li>
                                <li><span className="bar-expand css"></span><em>CSS</em></li>
                                <li><span className="bar-expand c"></span><em>C</em></li>
                                <li><span className="bar-expand cplusplus"></span><em>C++</em></li>
                                <li><span className="bar-expand csharp"></span><em>C#</em></li>
                                <li><span className="bar-expand sql"></span><em>SQL</em></li>
                                <li><span className="bar-expand python"></span><em>Python</em></li>
                                <li><span className="bar-expand java"></span><em>Java</em></li>
                            </ul>

                        </div>

                        <div className="bars">

                            <h3><span>Frameworks and Software</span></h3>

                            <ul className="skills">
                                <li><span className="bar-expand jquery"></span><em>jQuery</em></li>
                                <li><span className="bar-expand angularjs"></span><em>AngularJS</em></li>
                                <li><span className="bar-expand nodejs"></span><em>Node.js</em></li>
                                <li><span className="bar-expand android"></span><em>Android App Development</em></li>
                                <li><span className="bar-expand visualstudio"></span><em>Visual Studio</em></li>
                                <li><span className="bar-expand git"></span><em>Git</em></li>
                                <li><span className="bar-expand photoshop"></span><em>Photoshop</em></li>
                                <li><span className="bar-expand illustrator"></span><em>Illustrator</em></li>
                                <li><span className="bar-expand mspaint"></span><em>MS Paint</em></li>
                            </ul>

                        </div>

                        <div className="bars">

                            <h3><span>Other</span></h3>

                            <ul className="skills">
                                <li><span className="bar-expand scrum"></span><em>Scrum Methodology</em></li>
                                <li><span className="bar-expand uidesign"></span><em>UI Design</em></li>
                                <li><span className="bar-expand graphicdesign"></span><em>Graphic Design</em></li>
                            </ul>

                        </div> */}

                    </div>

                </div>

            </section>
        )
    }
}

export default IndexPage
