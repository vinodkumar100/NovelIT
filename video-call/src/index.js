import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Creating a React root using ReactDOM.createRoot, specifying the root DOM element

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within the React.StrictMode for additional checks in development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
