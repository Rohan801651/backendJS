require('dotenv').config()
// import express from 'express'; 
const express = require('express');

const app = express();
const port = /* process.env.PORT || */ 4000; // production ke lie env file banana 100% zarori ha 

app.get('/', (req, res) => {
    res.send('server is working');

});

app.get('/admin', (req, res) => {
    res.send('<h1>Admin portal</h1>');
});

app.listen(process.env.PORT, ()=> {
    console.log(`server at http://localhost:${port}`);
});


