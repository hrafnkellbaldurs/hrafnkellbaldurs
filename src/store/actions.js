import React from 'react'
import defaultState from './state'
import * as R from 'ramda'

// General
const initStateWithGraphqlData = (_s, _a, data) => ({ ...data })

// Nav
const setCurrentNavItemId = (_s, _a, currentNavItemId) => ({ currentNavItemId })
const setNavMenuOpen = (_s, _a, navMenuOpen) => ({ navMenuOpen })

// Modal
const showModal = (_s, _a, { type, size, renderContent }) => ({
    modal: {
        isOpen: true,
        size,
        type,
        renderContent
    }
})
const hideModal = (_s, _a) => ({ modal: defaultState.modal })

// SkillBadge
const onSkillClick = (_s, _a, { id }) => {
    const skill = _s.skills.find(R.propEq('id', id))

    const modal = showModal(_s, _a, {
        type: 'DEFAULT',
        size: 'SMALL',
        renderContent: () => {
            return <pre>{ JSON.stringify(skill, null, 2) }</pre>
        }
    }).modal

    return { modal }
}

const onShowcaseClick = (_s, _a, { id }) => {
    const showcase = _s.showcases.find(R.propEq('id', id))

    const modal = showModal(_s, _a, {
        type: 'DEFAULT',
        size: 'LARGE',
        renderContent: () => {
            return <pre>{ JSON.stringify(showcase, null, 2) }</pre>
        }
    }).modal

    return { modal }
}

export default {
    initStateWithGraphqlData,
    setCurrentNavItemId,
    setNavMenuOpen,
    showModal,
    hideModal,
    onSkillClick,
    onShowcaseClick
}
