import React from 'react'
import { connect, actions } from '../../store'
import Modal from './Modal'

const ModalRoot = ({ state }) => {
    const { modal } = state

    return (
        <Modal { ...modal } onClose={ actions.hideModal }>

        </Modal>
    )
}

export default connect(state => ({ state }))(ModalRoot)
