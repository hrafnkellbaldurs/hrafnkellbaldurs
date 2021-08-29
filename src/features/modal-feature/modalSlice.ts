import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/store';
import { MODAL_TYPE } from './constants';

interface ModalState {
  isOpen: boolean;
  type: MODAL_TYPE | null;
  contentId: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  type: null,
  contentId: null,
};

// Slice
const modalSlice = createSlice({
  name: `modal`,
  initialState,
  reducers: {
    showModal: (
      draftState,
      action: PayloadAction<{
        contentId: ModalState['contentId'];
        type: MODAL_TYPE;
      }>,
    ) => {
      const {
        payload: { type, contentId },
      } = action;

      draftState.type = type;
      draftState.contentId = contentId;
      draftState.isOpen = true;
    },
    hideModal: (draftState) => {
      draftState.contentId = null;
      draftState.type = null;
      draftState.isOpen = false;
    },
  },
});

// Reducers
export const { reducer: modalReducer } = modalSlice;

// Actions
export const { showModal, hideModal } = modalSlice.actions;

// Selectors
export const selectModal = (state: RootState): ModalState => state.modal;
