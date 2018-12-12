import defaultState from './state'

export default {
    setCurrentNavItemId: (_s, _a, currentNavItemId) => ({ currentNavItemId }),
    setNavMenuOpen: (_s, _a, navMenuOpen) => ({ navMenuOpen }),
    showModal: (_s, _a, { type, size, renderContent }) => ({
        modal: {
            isOpen: true,
            size,
            type,
            renderContent
        }
    }),
    hideModal: (_s, _a) => ({ modal: defaultState.modal })

}
