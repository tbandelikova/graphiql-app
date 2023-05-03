import { createSlice } from '@reduxjs/toolkit';
import { CounterType } from '../../models/counter.model';

const initialState: CounterType = { counter: 0 };

export const counterSlice = createSlice({
  name: 'counterSlice',

  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
