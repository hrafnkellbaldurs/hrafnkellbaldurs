import { SECTION_IDS } from '../constants'
import { createHashHref } from '../scripts/utils'

const navItems = [
    {
        id: SECTION_IDS.HOME,
        href: createHashHref(SECTION_IDS.HOME),
        text: 'Home'
    },
    {
        id: SECTION_IDS.ABOUT,
        href: createHashHref(SECTION_IDS.ABOUT),
        text: 'About'
    },
    {
        id: SECTION_IDS.PORTFOLIO,
        href: createHashHref(SECTION_IDS.PORTFOLIO),
        text: 'Portfolio'
    },
    {
        id: SECTION_IDS.RESUME,
        href: createHashHref(SECTION_IDS.RESUME),
        text: 'Resume'
    }
]

export default {
    navItems,
    currentNavItemId: null,
    navMenuOpen: false,
    modal: {
        isOpen: false,
        type: null,
        contentId: null,
        additionalContent: {}
    },
    skills: [],
    showcases: [],
    aboutMe: {
        urls: {},
        contactDetails: {}
    }
}
