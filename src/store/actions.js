import defaultState from './state'
import * as R from 'ramda'

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

const mapGraphqlData = R.mapObjIndexed(R.pipe(
    R.prop('edges'),
    R.pluck('node')
))
const initStateWithGraphqlData = (_s, _a, data) => {
    const {
        aboutMe,
        workExperience,
        educationExperience,
        skills,
        showcases
    } = mapGraphqlData(data)

    return {
        aboutMe: aboutMe[0],
        workExperience,
        educationExperience,
        skills,
        showcases
    }
}

export default {
    setCurrentNavItemId,
    setNavMenuOpen,
    showModal,
    hideModal,
    initStateWithGraphqlData
}
