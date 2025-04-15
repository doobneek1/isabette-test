import React from 'react';
import ReactDOM from 'react-dom/client';  // Use the new React 18 import
import './index.css'; // Optional, for basic styling
import App from './App'; // Correct path to App component

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
