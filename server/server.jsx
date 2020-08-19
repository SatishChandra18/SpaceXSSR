import express from 'express';
import React from 'react';
import compression from 'compression';
import { renderToString } from 'react-dom/server';
import { readFileSync } from 'fs';
import "isomorphic-fetch";

import { App } from '../client/App';

const app = new express();
const port = 7777;

app.use(compression());
app.use(express.static("dist"));

app.get("/", async ( _req, res )=>{

    fetch("https://api.spacexdata.com/v3/launches")
    .then(response => response.json())
    .then(initialData => {

        const rendered = renderToString(<App initialData={initialData}/>);
    
        const index = readFileSync(`public/index.html`, `utf8`);
    
        res.send(index.replace("{{rendered}}", rendered));
    })
    
});

app.listen(port);
console.info(`App listening on port ${port}`);