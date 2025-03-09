import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

// Rendera rooten av React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
