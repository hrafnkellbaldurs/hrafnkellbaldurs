import React from 'react'
import { connect, actions } from '../../store'
import Modal from './Modal'

const ModalRoot = props => (
    <Modal { ...props } onClose={ actions.hideModal } />
)

export default connect(state => ({ ...state.modal }))(ModalRoot)
