const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const fetch = require('isomorphic-fetch');
require('dotenv').config('./.env');

const playlist = require('./controllers/playlistController.js');
const id = process.env.CLIENT_ID;
const redirect_uri = 'http://localhost:3000/callback'

app.use(cookieParser());
app.use('/build', express.static(path.join(__dirname, '../build')));


app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
})

app.get('/login', (req, res) => {
    var scopes = 'playlist-modify-public user-read-email user-read-private'; 
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });

app.get('/callback', playlist.setCookie, (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// app.post('/create',
//  (req, res) => {
//     return res.status(200).send('This worked??');
// })


app.listen(3000);