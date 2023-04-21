import React from 'react';
import ReactDomClient from 'react-dom/client';
import { createMemoryHistory } from 'history'
import App from './App';
// Mount function to start the app
const mount = (el) => {
    const history = createMemoryHistory();
    ReactDomClient.createRoot(el).render(
        <App history={history}/>
    );
}

// If we are running in development and in isolation -> call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

// Else: we are running through container -> export mount

export { mount };