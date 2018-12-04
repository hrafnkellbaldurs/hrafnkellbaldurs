import React from 'react'
import * as R from 'ramda'
import classnames from 'classnames'
import Link from '../Link'
import styles from './SocialLinks.module.scss'
import { createGlobalLocalClassnames } from '../../scripts/utils'
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/images/twitter.svg'
import { ReactComponent as LinkedInIcon } from '../../assets/images/linkedin.svg'
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg'
import { ReactComponent as GitHubIcon } from '../../assets/images/github.svg'
import { ReactComponent as BitBucketIcon } from '../../assets/images/bitbucket.svg'
import { ReactComponent as CodePenIcon } from '../../assets/images/codepen.svg'

const createSocialLinksGlobalLocalClassnames = R.partial(createGlobalLocalClassnames, [styles])

const defaultLinks = [
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

const renderSocialLink = ({ href, icon: Icon }, key) => {
    const socialLinkClassnames = classnames(
        createSocialLinksGlobalLocalClassnames('socialLink')
    )

    return (
        <li key={ key }>
            <Link className={ socialLinkClassnames } to={ href } target="_blank">
                <Icon />
            </Link>
        </li>
    )
}

const SocialLinks = props => {
    const {
        links = defaultLinks
    } = props

    const socialLinksClassnames = classnames(
        createSocialLinksGlobalLocalClassnames('SocialLinks')
    )

    return (
        <ul className={ socialLinksClassnames }>
            { links.map(renderSocialLink) }
        </ul>
    )
}

export default SocialLinks
