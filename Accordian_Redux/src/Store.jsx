import { configureStore } from '@reduxjs/toolkit';
import accordionReducer from './Accordion';

export const store = configureStore({
  reducer: {
    accordion: accordionReducer,
  },
});
