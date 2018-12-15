import React from 'react'
import { connect, actions } from '../../store'
import Modal from './Modal'
import { MODAL_TYPES, MODAL_SIZES } from '../../constants'
import SkillModal from './SkillModal'
import ShowcaseModal from './ShowcaseModal'
import { findBy } from '../../scripts/utils'
import * as R from 'ramda'

const modalContentCollectionKeyMap = {
    SKILLS: 'skills',
    SHOWCASES: 'showcases'
}
const modalContentCollectionKeys = R.values(modalContentCollectionKeyMap)

// Configs for all modal variations
const modalConfigs = {
    [MODAL_TYPES.DEFAULT]: {
        size: MODAL_SIZES.SMALL,
        contentComponent: () => <span />,
        contentCollectionKey: null,
        contentLabel: 'Modal'
    },
    [MODAL_TYPES.SKILL]: {
        size: MODAL_SIZES.SMALL,
        contentComponent: SkillModal,
        contentCollectionKey: modalContentCollectionKeyMap.SKILLS,
        contentLabel: 'Skill Modal'
    },
    [MODAL_TYPES.SHOWCASE]: {
        size: MODAL_SIZES.MEDIUM,
        contentComponent: ShowcaseModal,
        contentCollectionKey: modalContentCollectionKeyMap.SHOWCASES,
        contentLabel: 'Showcase modal'
    }
}

const findContentItemById = R.pipe(
    findBy('id'),
    R.defaultTo({})
)

const compareProps = (props, nextProps) => path => R.path(path, props) !== R.path(path, nextProps)

class ModalRoot extends React.Component {
    shouldComponentUpdate(nextProps) {
        const hasChanged = compareProps(this.props, nextProps)
        return R.any(hasChanged)([
            ['modal', 'isOpen'],
            ['modal', 'type'],
            ['modal', 'type'],
            ['modal', 'contentId'],
            ...modalContentCollectionKeys.map(collectionKey =>
                ['contentCollections', collectionKey]
            )
        ])
    }

    render() {
        const { modal, contentCollections } = this.props

        const modalType = R.propOr(MODAL_TYPES.DEFAULT, 'type', modal)
        const modalConfig = modalConfigs[modalType]
        const modalSize = R.defaultTo(modalConfig.size, modal.size)
        const titleId = 'modal-title'
        const descriptionId = 'modal-description'

        // Props going into Modal
        const modalProps = {
            type: modalType,
            size: modalSize,
            isOpen: modal.isOpen,
            contentId: modal.contentId,
            contentLabel: modalConfig.contentLabel,
            aria: {
                labelledby: titleId,
                describedby: descriptionId
            },
            onClose: actions.hideModal,
        }

        // Find the content/data we want going into the content modal
        // by looking for the id that matches the contentId in the correct contentCollection
        const contentCollection = R.propOr([], modalConfig.contentCollectionKey, contentCollections)
        const content = findContentItemById(modal.contentId, contentCollection)

        // Set up the children of the modal
        const ContentComponent = modalConfig.contentComponent
        const contentComponentProps = {
            content,
            titleId: titleId,
            descriptionId: descriptionId
        }

        return (
            <Modal { ...modalProps }>
                <ContentComponent { ...contentComponentProps } />
            </Modal>
        )
    }
}

export default connect(state => ({
    modal: state.modal,
    // Get all content collections that modals care about
    contentCollections: R.pickAll(modalContentCollectionKeys, state)

}))(ModalRoot)
