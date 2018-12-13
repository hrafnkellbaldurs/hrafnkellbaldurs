import defaultState from './state'

// General
const setState = (_s, _a, newState) => ({
    ..._s,
    ...newState
})

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

export default {
    setState,
    setCurrentNavItemId,
    setNavMenuOpen,
    showModal,
    hideModal
}
