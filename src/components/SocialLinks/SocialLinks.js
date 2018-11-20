import React from 'react'
import styles from './SocialLinks.module.scss'
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/images/twitter.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/images/linkedin.svg'
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg'
import { ReactComponent as GitHubIcon } from '../../assets/images/github.svg'
import { ReactComponent as BitBucketIcon } from '../../assets/images/bitbucket.svg'
import { ReactComponent as CodePenIcon } from '../../assets/images/codepen.svg'

const links = [
    {
        icon: FacebookIcon,
        href: 'https://www.facebook.com/hrabbi'
    },
    {
        icon: TwitterIcon,
        href: 'https://twitter.com/hrafnkellb'
    },
    {
        icon: LinkedInIcon,
        href: 'https://www.linkedin.com/in/hrafnkellbaldurs'
    },
    {
        icon: InstagramIcon,
        href: 'https://www.instagram.com/hrafnkellbaldurs/'
    },
    {
        icon: GitHubIcon,
        href: 'https://www.github.com/hrafnkellbaldurs'
    },
    {
        icon: BitBucketIcon,
        href: 'https://www.bitbucket.com/kotkarl'
    },
    {
        icon: CodePenIcon,
        href: 'https://codepen.io/kotkarl/'
    }
]

const SocialLinks = props => (
    <ul className={ `${ styles.socialLinks }` }>
        {
            links.map(({ href, icon: Icon }, i) => (
                <li key={ i }>
                    <a href={ href } target="_blank">
                        <Icon />
                    </a>
                </li>
            ))
        }
    </ul>
)

export default SocialLinks
