import React from 'react'
import ReactDom from 'react-dom'
import App from './App'


// Moutn functio to start up the app
const mount = (el)=>{
    ReactDom.render(
        <App/>,
        el
    )
}


// if we are in development adn in isolation 
// call mount immediately
if(process.env.NODE_ENV ==='development'){
    const devRoot = document.querySelector('#_marketing-dev-root')
    if(devRoot){
        mount(devRoot)
    }
}

// we are running thrugh container

export{mount}