import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SettingsType } from '../../models/settings.model';

const initialState: SettingsType = {
  theme: 'light',
  lang: 'en',
};

export const settingsSlice = createSlice({
  name: 'settingsSlice',

  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setCurrLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setTheme, setCurrLang } = settingsSlice.actions;
export default settingsSlice.reducer;
