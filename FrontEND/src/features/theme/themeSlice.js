import { createSlice } from '@reduxjs/toolkit';

// Get theme from localStorage or default to light mode
const initialTheme = localStorage.getItem('theme') || 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialTheme,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      console.log("🔄 Changing theme to:", newTheme); // Debugging
      localStorage.setItem('theme', newTheme);
      document.body.setAttribute('data-theme', newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
