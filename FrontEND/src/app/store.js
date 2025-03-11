import { configureStore } from '@reduxjs/toolkit' //importerar configureStore från redux Toolkit
import themeReducer from '../features/theme/themeSlice'; // importerar themeReducer från themeSlice
//Create and export redux store
export const store = configureStore({
  reducer: {
    //add to themeReducer under the key 'theme'
    theme: themeReducer,
  },
});
