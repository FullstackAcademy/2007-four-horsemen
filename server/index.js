const express = require('express');
const app = express();
const volleyball = require('volleyball');
const path = require('path');

//logging middleware
app.use(volleyball);

//body pasing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static file serving middleware
app.use(express.static(path.join(__dirname, '../public')));

//routes access via AJAX are prepended with /api, so as to avoid the GET /* wildcard
app.use('/api', require('./api'));

//sends index.html(single-page SPA)
app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//error middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
