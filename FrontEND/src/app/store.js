import { configureStore } from '@reduxjs/toolkit' //importerar configureStore från redux Toolkit
import themeReducer from '../features/theme/themeSlice'; // importerar themeReducer från themeSlice
//skapa och exportera redux store
export const store = configureStore({
  reducer: {
    //lägg till themeReducer under nyckeln 'theme
    theme: themeReducer,
  },
});
