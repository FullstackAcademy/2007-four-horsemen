const express = require('express');
const { Server } = require('http');
const path = require('path')
const app = express();
const volleyball = require('volleyball');


//logging middleware
app.use(volleyball);

//body pasing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

//error middleware
app.use((req, res, next, err) => {
    console.error(err, typeof next);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Server Error');
  });
module.exports = app