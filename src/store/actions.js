import defaultState from './state'

// General
const initStateWithGraphqlData = (_s, _a, data) => ({ ...data })

// Nav
const setCurrentNavItemId = (_s, _a, currentNavItemId) => ({ currentNavItemId })
const setNavMenuOpen = (_s, _a, navMenuOpen) => ({ navMenuOpen })

// Modal
const showModal = (_s, _a, { contentId, type }) => {
    return {
        modal: {
            ..._s.modal,
            isOpen: true,
            contentId,
            type
        }
    }
}

const hideModal = (_s, _a) => ({
    modal: {
        ..._s.modal,
        isOpen: false
    }
})

export default {
    initStateWithGraphqlData,
    setCurrentNavItemId,
    setNavMenuOpen,
    showModal,
    hideModal
}
