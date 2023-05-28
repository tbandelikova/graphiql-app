import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './reducers/settingsSlice';
import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    user: userReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
