import { createSlice } from '@reduxjs/toolkit';
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
    setLang: (state) => {
      state.lang = state.lang === 'en' ? 'by' : 'en';
    },
  },
});

export const { setTheme, setLang } = settingsSlice.actions;
export default settingsSlice.reducer;