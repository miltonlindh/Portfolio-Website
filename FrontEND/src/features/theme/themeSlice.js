import { createSlice } from '@reduxjs/toolkit';

// Get theme from localStorage or default to light mode
const initialTheme = localStorage.getItem('theme') || 'light';

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialTheme,
  reducers: {
    toggleTheme: (state) => {
      // Toggle between light and dark theme
      const newTheme = state === 'light' ? 'dark' : 'light';
      console.log("🔄 Changing theme to:", newTheme); 
      // Save the new theme to localStorage
      localStorage.setItem('theme', newTheme);
      // Apply the new theme to the document body
      document.body.setAttribute('data-theme', newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
