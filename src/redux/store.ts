import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import todosReducer from './reducers/todosSlice';
import userReducer from './reducers/userSlice';
import { fetchTodosApi } from '../services/fetchTodosService';

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    todos: todosReducer,
    [fetchTodosApi.reducerPath]: fetchTodosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchTodosApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
