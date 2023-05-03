import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodosType } from '../../models/todos.model';

const initialState: { todos: TodosType[] } = { todos: [] };

export const counterSlice = createSlice({
  name: 'counterSlice',

  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodosType[]>) => {
      console.log(action.payload);
      state.todos = [...action.payload];
    },
  },
});

export const { addTodo } = counterSlice.actions;
export default counterSlice.reducer;
