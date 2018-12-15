import defaultState from './state'

// General
const initStateWithGraphqlData = (_s, _a, data) => ({ ...data })

// Nav
const setCurrentNavItemId = (_s, _a, currentNavItemId) => ({ currentNavItemId })
const setNavMenuOpen = (_s, _a, navMenuOpen) => ({ navMenuOpen })

// Modal
const showModal = (_s, _a, { contentId, type, size }) => {
    return {
        modal: {
            ..._s.modal,
            isOpen: true,
            contentId,
            size,
            type
        }
    }
}

const hideModal = (_s, _a) => ({ modal: defaultState.modal })

export default {
    initStateWithGraphqlData,
    setCurrentNavItemId,
    setNavMenuOpen,
    showModal,
    hideModal
}
