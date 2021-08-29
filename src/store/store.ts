import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { layoutReducer } from '@/features/layout-feature';
import { modalReducer } from '@/features/modal-feature';

const rootReducer = combineReducers({
  layout: layoutReducer,
  modal: modalReducer,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
