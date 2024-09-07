import { createSlice } from '@reduxjs/toolkit';

const accordionSlice = createSlice({
  name: 'accordion',
  initialState: {
    openIndex: null,
  },
  reducers: {
    toggle: (state, action) => {
      state.openIndex = state.openIndex === action.payload ? null : action.payload;
    },
  },
});

export const { toggle } = accordionSlice.actions;
export default accordionSlice.reducer;
