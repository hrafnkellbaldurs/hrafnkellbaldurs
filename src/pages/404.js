import React from 'react'
import { LayoutContainer } from '../components/Layout'
import Section from '../components/Section'
import Link from '../components/Link'
import '../styles/pages/404/main.scss'
import { ReactComponent as HomeIcon } from '../assets/icons/home-1.svg'
import { ReactComponent as ErrorIcon } from '../assets/icons/error.svg'

class NotFoundPage extends React.Component {
    state = {
        height: 300
    }
    componentDidMount() {
        const headerHeight = document.querySelector('header').clientHeight
        const footerHeight = document.querySelector('footer').clientHeight
        const height = window.innerHeight - headerHeight - footerHeight
        this.setState({ height })
    }

    render() {
        return (
            <LayoutContainer>
                <Section id="content404" style={ { height: `${ this.state.height }px` } }>
                    <div className="row container">
                        <div className="message-container accent-underline">
                            <div className="left-column">
                                <h1>Not found</h1>
                                <span>Sorry, this page does not exist</span>
                            </div>
                            <div className="right-column">
                                <ErrorIcon/>
                            </div>
                        </div>
                        <Link className="button icon-right go-home" to="/#home">
                            Back to home
                            <HomeIcon/>
                        </Link>
                    </div>
                </Section>
            </LayoutContainer>
        )
    }
}

export default NotFoundPage
