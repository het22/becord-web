import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './Reducers/game';

export default configureStore({
  reducer: {
    game: gameReducer
  }
});
