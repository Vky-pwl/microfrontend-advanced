import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
       <App />,
        el
    )
}
// If we are in devploment and in isolation 
// call  mount immediatly
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}

// We running thorugh Container
// and we should export the mount function

export { mount };