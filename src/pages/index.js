import React from 'react'
import Layout from '../components/OldLayout'

class IndexPage extends React.PureComponent {
    render() {
        const { renderAboutSection: AboutSection } = this

        return (
            <Layout>
                <AboutSection></AboutSection>
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
}

export default IndexPage
