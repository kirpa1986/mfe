import React from 'react';
import ReactDomClient from 'react-dom/client';
import App from './App';

// render() is not supported, need to use createRoot
ReactDomClient.createRoot(document.getElementById('root')).render(
        <App />
    );
