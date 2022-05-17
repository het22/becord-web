import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: ''
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});

export const { setTitle } = gameSlice.actions;
export default gameSlice.reducer;
