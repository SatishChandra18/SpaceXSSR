import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import './app.css';

let state = undefined;

console.info("Client:: Fetching data from server");

fetch("https://api.spacexdata.com/v3/launches")
    .then(data => data.json())
    .then(json => {
        console.log("Client:: Fetching data from server");
        state = json;
        render();

    });  

function render(){

    ReactDOM.hydrate(<App initialData={state} />, document.querySelector("#Container"));

}

