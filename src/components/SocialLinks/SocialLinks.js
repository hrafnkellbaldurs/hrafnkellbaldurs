import React from 'react'
import styles from './SocialLinks.module.scss'
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/images/twitter.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/images/linkedin.svg'
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg'
import { ReactComponent as GitHubIcon } from '../../assets/images/github.svg'
import { ReactComponent as BitBucketIcon } from '../../assets/images/bitbucket.svg'
import { ReactComponent as CodePenIcon } from '../../assets/images/codepen.svg'

class SocialLinks extends React.PureComponent {
    render() {
        const className = this.props.className || '';
        return (
            <ul className={ `${styles.socialLinks} ${className}` }>
                <li>
                    <a href="https://www.facebook.com/hrabbi" target="_blank">
                        <FacebookIcon />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/hrafnkellb" target="_blank">
                        <TwitterIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/hrafnkellbaldurs" target="_blank">
                        <LinkedInIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/hrafnkellbaldurs/" target="_blank">
                        <InstagramIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/hrafnkellbaldurs" target="_blank">
                        <GitHubIcon />
                    </a>
                </li>
                <li>
                    <a href="https://www.bitbucket.com/kotkarl" target="_blank">
                        <BitBucketIcon />
                    </a>
                </li>
                <li>
                    <a href="https://codepen.io/kotkarl/" target="_blank">
                        <CodePenIcon />
                    </a>
                </li>
            </ul>
        )
    }
}

export default SocialLinks
