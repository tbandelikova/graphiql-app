import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../models/user.model';

const initialState: UserType = {
  name: null,
  email: null,
  id: null,
};

export const userSlice = createSlice({
  name: 'userSlice',

  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.name = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
