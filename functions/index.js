'use strict';

const functions = require('firebase-functions');
const express = require('express');
const request = require('request');
const cors = require('cors')({origin: true});
const app = express();

app.use(cors);
app.get('/medium', (req, res) => {
  if(!req.query.username) {
    return res.status(400).send('Error: You need to include query param ?username=@yourUsername');
  }
  const url = `https://medium.com/${req.query.username}/latest?format=json`;
  request(url,(error, response, body) => {
    console.log(response);
    console.log(body);
    const prefix = `])}while(1);</x>`;
    const strip = payload => payload.replace(prefix, ``);
    res.json(JSON.parse(strip(body)));
  });  
});

exports.app = functions.https.onRequest(app);
