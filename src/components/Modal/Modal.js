import React from 'react'
import ReactModal from 'react-modal'
import { MODAL_TYPES, MODAL_SIZES } from '../../constants'
import * as R from 'ramda'
import styles from './Modal.scss'
import classnames from 'classnames'
import { createGlobalLocalClassnames } from '../../scripts/utils'

ReactModal.setAppElement('#___gatsby')

const typeProps = {
    [MODAL_TYPES.DEFAULT]: {
        // center: false,
        // animationDuration: 50000,
        // focusTrapped: true
    }
}

const createDecoratorClassname = (key, val) => `${ R.toLower(key) }-${ R.toLower(val) }`
const createTypeClassname = R.partial(createDecoratorClassname, ['type'])
const createSizeClassname = R.partial(createDecoratorClassname, ['size'])

class Modal extends React.PureComponent {
    handleOnClose = _e => {
        this.props.onClose()
    }

    render() {
        const {
            isOpen
        } = this.props

        const renderContent = R.defaultTo(() => <span />, this.props.renderContent)

        const type = R.defaultTo(MODAL_TYPES.DEFAULT, this.props.type)
        const size = R.defaultTo(MODAL_SIZES.SMALL, this.props.size)

        // The highest parent below ReactModalPortal is the overlay
        // We want to have a root to set styles on
        const rootClassnames = classnames(
            createGlobalLocalClassnames(styles, 'ModalPortal'),
            createTypeClassname(type),
            createSizeClassname(size)
        )
        const reactModalProps = {
            ...typeProps[type],
            isOpen,
            onRequestClose: this.handleOnClose,
            contentLabel: 'Example Modal',
            portalClassName: rootClassnames,
            overlayClassName: 'modalOverlay',
            className: 'modalContent'
        }
        return (
            <ReactModal { ...reactModalProps }>
                { renderContent() }
            </ReactModal>
        )
    }
}

export default Modal
