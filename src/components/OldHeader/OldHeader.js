import React from 'react'
import SocialLinks from '../SocialLinks'
import { ReactComponent as DownArrowIcon } from '../../assets/images/arrow_drop_down_circle.svg'

class OldHeader extends React.PureComponent {
    render() {
        return (
            <header id="home" className="home-header">

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">

                        <h1 className="responsive-headline">Hi, I'm Hrafnkell Baldursson.</h1>
                        <h3>
                            I'm a Reykjavik, Iceland based <span>web developer</span>,&nbsp;
                            <span>software developer</span> and <span>graphic designer</span>,&nbsp;
                            and I love making cool stuff. Let's <a className="smoothscroll" href="#about">scroll down</a>&nbsp;
                            and learn more <a className="smoothscroll" href="#about">about me</a>.
                        </h3>
                        <hr />
                        <SocialLinks />
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <DownArrowIcon />
                    </a>
                </p>

            </header>
        )
    }
};

export default OldHeader
